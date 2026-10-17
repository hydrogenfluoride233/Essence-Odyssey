// 多方块机器的动态模型：机器成型后在结构里放展示实体（item_display），待机慢转、工作时换一套速度；改这里 /reload 生效
// 接一台机器：① MMCR-startup.js 里给机器加下面两行（要重启；这台机器自己要加配方钩子就写进同一个 recipeBehavior）② 在下面 MachineModels 里写它的部件
//     .recipeBehavior(b=>b.recipeTick(ctx=>global.machineModelWork(ctx)))
//     .postServerTick(ctx=>global.machineModelTick(ctx))
// 世界里的动态模型全部清掉：/kill @e[type=minecraft:item_display,tag=eo_model]
// 这个 Rhino 里，if / for / try 块里面声明的 const 第二次执行会报重复声明：块里只赋值，声明放到函数开头

const ModelTag = "eo_model"
const ModelItem = "kubejs:machine_model"
const ModelStep = 5                                     //每 5 tick 发一次新姿态，客户端在这段时间里补间
const ModelStale = 40                                   //控制器 40 tick 没报到（拆了／散架／区块卸载）就收掉模型

//坐标按「控制器正面朝北」写：x+ 东、y+ 上、z+ 南（往结构里），单位是格；朝别的方向时自动转过去
//anchor：模型中心相对控制器的位置，要落在空气里（亮度按这一格算）
//部件：model = 载体物品的模型编号（models/item/machine_model.json 里的顺序）；item = 直接摆一个现成物品，display 是它的摆法（默认 none）
//      offset 偏移、tilt 固定倾斜 [绕x,绕z]（度）、spin 自转、turn 绕竖轴公转（度/tick，写 [待机,工作]，别超过 30）
//      bob 上下浮动 [幅度,周期tick]、scale 大小 [待机,工作]（0 = 藏起来）、glow 工作时全亮
const MachineModels = {
    // "mmcr:xxx":{
    //     anchor:[0,0,2],
    //     parts:[
    //         {model:4,scale:[2,2],spin:[0.5,3]},                                                                   //三阶星轨外环
    //         {model:5,scale:[1.5,1.5],tilt:[25,0],spin:[-1,-6],turn:[0.4,1.5]},                                    //三阶星轨内环
    //         {item:"ars_nouveau:source_gem",display:"fixed",scale:[0,0.6],spin:[0,4],bob:[0.12,60],glow:true}       //魔源质
    //     ]
    // }
}

const ModelFacing = {north:0,south:180,east:-90,west:90}   //控制器朝向 → 整体绕竖轴转的角度

const ModelState = global.machineModel.state || (global.machineModel.state = {machines:{},tracked:{},pending:{},load:0,now:0})
ModelState.load++                                       //每次 /reload 加一：已有的部件按新配置重设一遍
global.machineModel.failed = false                      //启动脚本那边出错停用后，/reload 再试

const modelWarned = {}
const modelWarn = (key,message)=>{
    if (modelWarned[key]) return
    modelWarned[key] = true
    console.warn(`[动态模型] ${message}`)
}

const modelRad = deg=>deg*Math.PI/180
const modelTurnY = (v,deg)=>{
    const c = Math.cos(modelRad(deg))
    const s = Math.sin(modelRad(deg))
    return [v[0]*c+v[2]*s,v[1],-v[0]*s+v[2]*c]
}
const modelQuat = (axis,deg)=>{
    const s = Math.sin(modelRad(deg)/2)
    return [axis[0]*s,axis[1]*s,axis[2]*s,Math.cos(modelRad(deg)/2)]
}
const modelQmul = (a,b)=>[
    a[3]*b[0]+a[0]*b[3]+a[1]*b[2]-a[2]*b[1],
    a[3]*b[1]-a[0]*b[2]+a[1]*b[3]+a[2]*b[0],
    a[3]*b[2]+a[0]*b[1]-a[1]*b[0]+a[2]*b[3],
    a[3]*b[3]-a[0]*b[0]-a[1]*b[1]-a[2]*b[2]
]
const modelPick = (value,working,fallback)=>value==null ? fallback : (Array.isArray(value) ? value[working ? 1 : 0] : value)
const modelFloats = list=>`[${list.map(n=>`${n.toFixed(4)}f`).join(",")}]`
const modelUuid = entity=>String(entity.getStringUuid())
const modelKey = ctx=>{
    const pos = ctx.controllerPos()
    return `${ctx.level().dimension}/${pos.getX()}_${pos.getY()}_${pos.getZ()}`
}
const modelOwnerTag = machine=>`${ModelTag}.${machine.x}_${machine.y}_${machine.z}`
const modelPartTag = i=>`${ModelTag}.part${i}`

//机器的回调只记状态，摆实体的活在下面的服务端 tick 里做（不占 MMCR 的执行，出错也不影响机器）
global.machineModel.tick = ctx=>{
    if (ctx.gameTime() % ModelStep != 0) return
    const id = String(ctx.machineId())
    if (!MachineModels[id]) return
    const level = ctx.level()
    const pos = ctx.controllerPos()
    const key = modelKey(ctx)
    const machine = ModelState.machines[key] || (ModelState.machines[key] = {x:pos.getX(),y:pos.getY(),z:pos.getZ(),parts:[],worked:-1000})
    const props = level.getBlock(pos).properties        //控制器方块状态：formed 成型、facing 正面朝向
    machine.id = id
    machine.level = level
    machine.formed = String(props.get("formed")) == "true"
    machine.facing = String(props.get("facing"))
    machine.seen = ModelState.now
}

global.machineModel.work = ctx=>{                       //配方每 tick 都会调，记下最近一次在工作的时间
    const machine = ModelState.machines[modelKey(ctx.machineContext())]
    if (machine) machine.worked = ModelState.now
}

const modelLooks = part=>{
    const item = part.model ?
        `{id:"${ModelItem}",count:1,components:{"minecraft:custom_model_data":${part.model}}}` :
        `{id:"${part.item}",count:1}`
    return `item:${item},item_display:"${part.display || "none"}",width:4f,height:4f,view_range:1f,shadow_radius:0f`
}

const modelPoseNbt = (pose,duration)=>
    `transformation:{translation:${modelFloats(pose.t)},left_rotation:${modelFloats(pose.q)},scale:${modelFloats([pose.s,pose.s,pose.s])},right_rotation:[0f,0f,0f,1f]},` +
    `interpolation_duration:${duration},start_interpolation:0` + (pose.lit ? ",brightness:{block:15,sky:15}" : "")

const modelPose = (part,machine,slot,yaw,now)=>{
    const offset = part.offset || [0,0,0]
    const tilt = part.tilt || [0,0]
    const bob = part.bob ? part.bob[0]*Math.sin(2*Math.PI*now/part.bob[1]) : 0
    const scale = modelPick(part.scale,machine.working,1)
    const t = modelTurnY(offset,yaw+slot.turn)
    let q = modelQuat([0,1,0],yaw+slot.turn)
    q = modelQmul(q,modelQuat([1,0,0],tilt[0]))
    q = modelQmul(q,modelQuat([0,0,1],tilt[1]))
    q = modelQmul(q,modelQuat([0,1,0],slot.spin))
    return {t:[t[0],t[1]+bob,t[2]],q:q,s:scale > 0 ? scale : 0.001,lit:!!part.glow && machine.working}
}

const modelSpawnPart = (machine,part,i,base,pose)=>{
    const entity = machine.level.createEntity("minecraft:item_display")
    entity.setPosition(base[0],base[1],base[2])
    entity.addTag(ModelTag)
    entity.addTag(modelOwnerTag(machine))
    entity.addTag(modelPartTag(i))
    entity.mergeNbt(`{${modelLooks(part)},${modelPoseNbt(pose,0)}}`)
    entity.spawn()
    ModelState.tracked[modelUuid(entity)] = true
    return entity
}

const modelUnlight = entity=>{                          //合并 NBT 去不掉亮度，要整份读出来删掉再写回
    const nbt = entity.getNbt()
    nbt.remove("brightness")
    entity.setNbt(nbt)
}

const modelMovePart = (slot,pose)=>{
    if (slot.lit && !pose.lit) modelUnlight(slot.entity)
    slot.entity.mergeNbt(`{${modelPoseNbt(pose,ModelStep)}}`)
    slot.lit = pose.lit
}

const modelDropParts = machine=>{
    machine.parts.forEach(slot=>{
        if (!slot.entity) return
        delete ModelState.tracked[modelUuid(slot.entity)]
        if (!slot.entity.isRemoved()) slot.entity.discard()
    })
    machine.parts = []
}

//认领：结构附近带本机标签的实体按部件号接回来，多的、对不上号的删掉；配置改过也在这里重设外观
const modelAdoptOne = (machine,def,base,owner,entity)=>{
    const tags = entity.getTags()
    let index = -1
    if (!tags.contains(owner) || entity.isRemoved()) return
    def.parts.forEach((part,i)=>{
        if (tags.contains(modelPartTag(i))) index = i
    })
    if (index < 0 || machine.parts[index].entity) {
        entity.discard()
        return
    }
    machine.parts[index].entity = entity
    entity.setPosition(base[0],base[1],base[2])
    entity.mergeNbt(`{${modelLooks(def.parts[index])}}`)
    ModelState.tracked[modelUuid(entity)] = true
}

const modelAdopt = (machine,def,base)=>{
    const owner = modelOwnerTag(machine)
    const old = machine.parts
    const box = AABB.of(base[0]-4,base[1]-4,base[2]-4,base[0]+4,base[1]+4,base[2]+4)
    machine.parts = def.parts.map((part,i)=>({entity:null,spin:old[i] ? old[i].spin : 0,turn:old[i] ? old[i].turn : 0,lit:true}))
    old.forEach(slot=>{
        if (slot.entity) delete ModelState.tracked[modelUuid(slot.entity)]
    })
    machine.level.getEntitiesWithin(box).forEach(entity=>modelAdoptOne(machine,def,base,owner,entity))
    old.forEach(slot=>{
        if (slot.entity && !slot.entity.isRemoved() && !ModelState.tracked[modelUuid(slot.entity)]) slot.entity.discard()
    })
    machine.load = ModelState.load
}

const modelUpdatePart = (machine,part,i,base,yaw,now)=>{
    const slot = machine.parts[i]
    slot.spin = (slot.spin+modelPick(part.spin,machine.working,0)*ModelStep) % 360
    slot.turn = (slot.turn+modelPick(part.turn,machine.working,0)*ModelStep) % 360
    const pose = modelPose(part,machine,slot,yaw,now)
    if (slot.entity) {
        modelMovePart(slot,pose)
        return
    }
    slot.entity = modelSpawnPart(machine,part,i,base,pose)
    slot.lit = pose.lit
}

const modelUpdate = (machine,def,now)=>{
    const yaw = ModelFacing[machine.facing] || 0
    const anchor = modelTurnY(def.anchor || [0,0,0],yaw)
    const base = [machine.x+0.5+anchor[0],machine.y+0.5+anchor[1],machine.z+0.5+anchor[2]]
    const block = machine.level.getBlock(Math.floor(base[0]),Math.floor(base[1]),Math.floor(base[2]))
    if (!machine.level.isPositionEntityTicking(block.pos)) return
    machine.working = now-machine.worked <= ModelStep*2
    if (machine.load != ModelState.load || machine.parts.some(slot=>slot.entity && slot.entity.isRemoved())) modelAdopt(machine,def,base)
    def.parts.forEach((part,i)=>modelUpdatePart(machine,part,i,base,yaw,now))
}

const modelTickMachine = (key,now)=>{
    const machine = ModelState.machines[key]
    const def = MachineModels[machine.id]
    if (!def || !machine.formed || now-machine.seen > ModelStale || machine.seen > now) {
        modelDropParts(machine)
        delete ModelState.machines[key]
        return
    }
    try {
        modelUpdate(machine,def,now)
    } catch (err) {
        modelWarn(machine.id,`${machine.id} 的模型出错，已收起：${err}`)
        modelDropParts(machine)
        delete ModelState.machines[key]
    }
}

const modelTickPending = (uuid,now)=>{                  //载入后没被任何机器认领的（机器已经没了）删掉
    const entry = ModelState.pending[uuid]
    if (now-entry.time < ModelStale && entry.time <= now) return
    if (!ModelState.tracked[uuid] && !entry.entity.isRemoved()) entry.entity.discard()
    delete ModelState.pending[uuid]
}

ServerEvents.loaded(event=>{                            //换了存档就清空记录，旧世界的实体引用不能再用
    ModelState.machines = {}
    ModelState.tracked = {}
    ModelState.pending = {}
})

ServerEvents.tick(event=>{
    const now = event.server.getTickCount()
    ModelState.now = now
    if (now % ModelStep != 0) return
    Object.keys(ModelState.machines).forEach(key=>modelTickMachine(key,now))
    Object.keys(ModelState.pending).forEach(uuid=>modelTickPending(uuid,now))
})

EntityEvents.spawned("minecraft:item_display",event=>{
    const entity = event.entity
    if (!entity.getTags().contains(ModelTag)) return
    ModelState.pending[modelUuid(entity)] = {entity:entity,time:ModelState.now}
})
