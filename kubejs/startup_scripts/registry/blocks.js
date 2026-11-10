StartupEvents.registry("block",event=>{
    const toolType = {
        sword: "minecraft:mineable/sword",
        pickaxe: "minecraft:mineable/pickaxe",
        axe: "minecraft:mineable/axe",
        shovel: "minecraft:mineable/shovel",
        hoe: "minecraft:mineable/hoe"
    }

    const miningLevel = {
        wooden: "minecraft:needs_wooden_tool",
        stone: "minecraft:needs_stone_tool",
        iron: "minecraft:needs_iron_tool",
        gold: "minecraft:needs_gold_tool",
        diamond: "minecraft:needs_diamond_tool"
    }

    const block = [
    ]
    block.forEach(([id,type,level,sound,hardness,resistance])=>
        event.create(id)
            .tagBlock(toolType[type])
            .tagBlock(miningLevel[level])
            .soundType(sound)
            .hardness(hardness)
            .resistance(resistance)
            .requiresTool(true))

    //封装树木信标
    event.create("packaged_tree_beacon")
        .copyPropertiesFrom("minecraft:glass")
        .box(3, 0, 3, 13, 16, 13)
        .soundType("wood")
        .hardness(2)
        .resistance(3)
        .tagBlock(toolType.axe)

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
