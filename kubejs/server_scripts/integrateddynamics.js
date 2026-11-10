ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"integrateddynamics:squeezer/base/menril_resin_planks"})//挤压机和烘干池
    event.remove({id:"integrateddynamics:squeezer/base/menril_resin_logs"})
    event.remove({id:"integrateddynamics:squeezer/base/liquid_chorus"})
    event.remove({id:"integrateddynamics:squeezer/base/liquid_chorus_proto"})
    event.remove({id:"integrateddynamics:mechanical_squeezer/base/liquid_chorus"})
    event.remove({id:"integrateddynamics:mechanical_squeezer/base/liquid_chorus_proto"})
    event.remove({id:"integrateddynamics:drying_basin/base/crystalized_menril_block"})
    event.remove({id:"integrateddynamics:drying_basin/base/crystalized_chorus_block"})
    event.remove({id:"integrateddynamics:crafting/mechanical_squeezer"})
    event.remove({id:"integrateddynamics:crafting/mechanical_drying_basin"})

    //工作台配方
    event.replaceInput(
        {id:"integrateddynamics:crafting/energy_battery"},
        "minecraft:redstone_block",
        "createaddition:modular_accumulator"
    )//能量电池

    event.replaceInput(
        {id:"integrateddynamics:crafting/drying_basin"},
        "#c:ingots/iron",
        "actuallyadditions:iron_casing"
    )

    //挤压机
    //格式:[输入,主产物,副产物数组,流体]；不需要的填 null
    const SqueezerList = [
        [
            "integrateddynamics:menril_log",
            "2x integrateddynamics:crystalized_menril_chunk",
            [0.5,"2x integrateddynamics:crystalized_menril_chunk"]
        ],//门瑞欧原木
    ]

    SqueezerList.forEach(([input,output,chances,fluid])=>
        squeezer(event,input,output,chances,fluid))

    //电动挤压机
    //格式:[输入,主产物,副产物数组,流体,时长]；时长不写走默认
    //例:["#c:ores/coal","6x minecraft:coal",[[0.5,"minecraft:coal"]],null,40]
    const MechanicalSqueezerList = [
        [
            "minecraft:popped_chorus_fruit",
            null,null,"500x integrateddynamics:liquid_chorus",30
        ],//爆裂紫颂果

        [
            "integrateddynamics:proto_chorus",
            null,null,"250x integrateddynamics:liquid_chorus",30
        ],//远古紫颂果
    ]

    MechanicalSqueezerList.forEach(([input,output,chances,fluid,duration])=>
        mechanicalSqueezer(event,input,output,chances,fluid,duration))
})
