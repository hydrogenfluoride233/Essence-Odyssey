StartupEvents.registry("block",event=>{
    //要素结晶块
    Aspects.forEach(aspect=>
        event.create(`kubejs:block_${aspect.id}`)
             .soundType("amethyst")
             .tagBlock("minecraft:mineable/pickaxe")
             .tagBlock("minecraft:needs_stone_tool")
             .requiresTool(true))

    //封装树木信标
    event.create("packaged_tree_beacon")
        .copyPropertiesFrom("minecraft:glass")
        .box(3, 0, 3, 13, 16, 13)
        .soundType("wood")
        .hardness(2)
        .resistance(3)
        .tagBlock("minecraft:mineable/axe")

    event.create("blood_clot")
        .soundType("honey_block")
        .hardness(0)
        .resistance(0)
        .slipperiness(0.8)
        .speedFactor(0.4)
        .jumpFactor(0.5)
        .parentModel("minecraft:block/cube_bottom_top")
        .textures({
            particle:"kubejs:block/blood_clot_side",
            side:"kubejs:block/blood_clot_side",
            top:"kubejs:block/blood_clot_top",
            bottom:"kubejs:block/blood_clot_bottom"
        })
})
