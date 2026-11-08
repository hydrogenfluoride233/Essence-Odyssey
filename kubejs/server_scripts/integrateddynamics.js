//挤压机的配方 JSON：主产物 + 概率副产物（最多两种）+ 可选流体
const squeezerStack = text=>{
    const {count,id}=parseCounted(text)

    return id.startsWith("#") ?
        {"tag":{"tag":id.substring(1),"count":count}} :
        {"item":{"id":id,"count":count}}
}

const squeezerJson = (type,input,output,chances,fluid,duration)=>{
    const {id}=parseCounted(input)

    const recipe = {
        "type":type,
        "input_item":id.startsWith("#") ? {"tag":id.substring(1)} : {"item":id}
    }

    const outputs = output ? [squeezerStack(output)] : []

    asRecipeArray(chances || []).slice(0,2).forEach(([chance,item])=>
        outputs.push(Object.assign(squeezerStack(item),{"chance":chance})))

    if(outputs.length===0 && !fluid) return null                      //挤压机至少要有一个产物

    if(outputs.length) recipe.output_items = outputs
    if(fluid) recipe.output_fluid = toFluidJson(fluid)
    if(duration) recipe.duration = duration

    return recipe
}

const SqueezerTime = 100                                                //电动挤压机的默认时长（tick）

//挤压机：主产物 + 概率副产物 + 流体
//格式:[输入,主产物,副产物数组,流体]；副产物写 [[概率,"Nx 物品id"],…]，最多两种；不需要的填 null
const squeezer = (event,input,output,chances,fluid)=>{
    const recipe = squeezerJson("integrateddynamics:squeezer",input,output,chances,fluid)

    if(recipe) event.custom(recipe)
}

//电动挤压机：同上，末位多一个时长（tick）
const mechanicalSqueezer = (event,input,output,chances,fluid,duration)=>{
    const recipe = squeezerJson("integrateddynamics:mechanical_squeezer",input,output,chances,fluid,duration || SqueezerTime)

    if(recipe) event.custom(recipe)
}

ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"integrateddynamics:squeezer/base/menril_resin_planks"})//挤压机和烘干池做结晶
    event.remove({id:"integrateddynamics:squeezer/base/menril_resin_logs"})
    event.remove({id:"integrateddynamics:squeezer/base/liquid_chorus"})
    event.remove({id:"integrateddynamics:squeezer/base/liquid_chorus_proto"})
    event.remove({id:"integrateddynamics:drying_basin/base/crystalized_menril_block"})
    event.remove({id:"integrateddynamics:drying_basin/base/crystalized_chorus_block"})

    event.remove({id:"integrateddynamics:crafting/mechanical_squeezer"})//电动挤压机
    event.remove({id:"integrateddynamics:crafting/mechanical_drying_basin"})//电动烘干池

    //工作台配方
    event.replaceInput(
        {id:"integrateddynamics:crafting/energy_battery"},
        "minecraft:redstone_block",
        "createaddition:modular_accumulator"
    )//能量电池

    //挤压机
    //格式:[输入,主产物,副产物数组,流体]
    //例:["integrateddynamics:menril_log","2x integrateddynamics:crystalized_menril_chunk",[[0.5,"integrateddynamics:crystalized_menril_chunk"]],"1000x integrateddynamics:menril_resin"]
    const SqueezerList = [
    ]

    SqueezerList.forEach(([input,output,chances,fluid])=>
        squeezer(event,input,output,chances,fluid))

    //电动挤压机
    //格式:[输入,主产物,副产物数组,流体,时长]；时长不写走默认
    //例:["#c:ores/coal","6x minecraft:coal",[[0.5,"minecraft:coal"]],null,40]
    const MechanicalSqueezerList = [
    ]

    MechanicalSqueezerList.forEach(([input,output,chances,fluid,duration])=>
        mechanicalSqueezer(event,input,output,chances,fluid,duration))
})
