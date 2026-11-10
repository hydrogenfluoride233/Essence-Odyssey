ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"justdirethings:gooblock_tier1"})
    event.remove({id:"justdirethings:gooblock_tier2"})
    event.remove({id:"justdirethings:polymorphic_fluid_block-fluiddrop"})

    //工作台配方
    event.shapeless("9x kubejs:ferricore_nugget","justdirethings:ferricore_ingot")
    event.shapeless("9x kubejs:blazegold_nugget","justdirethings:blazegold_ingot")
    event.shaped("justdirethings:ferricore_ingot",["AAA","AAA","AAA"],{A:"kubejs:ferricore_nugget"})
    event.shaped("justdirethings:blazegold_ingot",["AAA","AAA","AAA"],{A:"kubejs:blazegold_nugget"})

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

    //投入流体
    //格式:[id,催化剂,输入流体,输出流体]
    event.recipes.justdirethings.fluiddrop(
        "justdirethings:polymorphic_fluid",
        "justdirethings:polymorphic_catalyst",
        "astralsorcery:liquid_starlight",
        "justdirethings:polymorphic_fluid_block"
    )
})
