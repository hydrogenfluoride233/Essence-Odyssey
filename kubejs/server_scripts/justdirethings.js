ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"justdirethings:gooblock_tier1"})
    event.remove({id:"justdirethings:gooblock_tier2"})

    //凝胶蔓延
    //格式:[输出方块,输入方块,凝胶等级]
    const GoospreadList = [
        [
            "actuallyadditions:ethetic_green_block",
            "minecraft:chiseled_quartz_block",
            1
        ],//绿色装饰石英

        [
            "actuallyadditions:ethetic_white_block",
            "minecraft:quartz_block",
            1
        ],//白色装饰石英
    ]

    GoospreadList.forEach(([output,input,tier])=>
        event.recipes.justdirethings.goospread(
            `kubejs:goospread_${output.split(":")[1]}`,
            input,
            output,
            tier,
            300
        )
    )

    //水晶获取
    const CrystalList = [
        ["enori","iron"],
        ["restonia","redstone"],
        ["palis","lapis"],
        ["diamatine","diamond"],
        ["void","coal"],
        ["emeradic","emerald"]
    ]

    CrystalList.forEach(([output,input])=>
        event.recipes.justdirethings.goospread_tag(
            `kubejs:goospread_${output}`,
            BlockTagIngredient(`c:ores/${input}`),
            `actuallyadditions:${output}_crystal_cluster`,
            1,
            600
        )
    )
})
