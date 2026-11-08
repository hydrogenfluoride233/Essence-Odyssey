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
    //格式:[输入,主产物,副产物数组,流体]；不需要的填 null
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
