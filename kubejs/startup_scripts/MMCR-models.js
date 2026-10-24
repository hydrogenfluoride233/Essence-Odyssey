// 动态模型的入口：机器定义里接这两行，模型怎么摆写在 server_scripts/MMCR-models.js
//     .recipeBehavior(b=>b.recipeTick(ctx=>global.machineModelWork(ctx)))
//     .postServerTick(ctx=>global.machineModelTick(ctx))
// 服务端脚本不能给 global 赋值，只能往这里预留的对象里填；出错就停用并记一次日志，机器本身照常运行
global.machineModel = {tick:null,work:null,state:null,failed:false}

const machineModelCall = (name,ctx)=>{
    const call = global.machineModel[name]
    if (!call || global.machineModel.failed) return
    try {
        call(ctx)
    } catch (err) {
        global.machineModel.failed = true
        console.error(`[动态模型] 出错，已停用（/reload 后重试）：${err}`)
    }
}
global.machineModelTick = ctx=>machineModelCall("tick",ctx)
global.machineModelWork = ctx=>machineModelCall("work",ctx)

//载体物品：只给展示实体用（部件模型见 models/item/machine_model.json），不进创造栏
StartupEvents.registry("item",event=>{
    event.create("kubejs:machine_model").maxStackSize(1)                  //机器模型部件
})

StartupEvents.modifyCreativeTab("kubejs:tab",event=>{
    event.remove("kubejs:machine_model")
})
