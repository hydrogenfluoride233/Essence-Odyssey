ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"industrialforegoing:machine_frame_pity"})     //机器框架

    //化学溶解室
    //格式:[输入物品,输入流体,输出]

    const DissolutionList = [
        [
            [
                "naturesaura:tainted_gold",
                "mekanism:ingot_steel",
                "create:brass_ingot",
                "pneumaticcraft:ingot_iron_compressed",
                "megacells:sky_steel_ingot",
                "immersiveengineering:ingot_hop_graphite",
                "kubejs:unknown_mixture",
                "powah:steel_energized"
            ],
            "250x immersiveengineering:redstone_acid",
            "8x mmcr:modularium"
        ],//模块化合金锭
    ]

    DissolutionList.forEach(([iteminput,fluidinput,output])=>
        event.recipes.industrialforegoing.dissolution_chamber(iteminput,fluidinput,output,200))
})
