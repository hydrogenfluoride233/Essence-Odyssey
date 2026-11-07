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

    let block = [
        //星辉魔法占位祭坛（altar_1/2/3）随正式版加入移除，要复用就放开这三行
        // ["altar_1","pickaxe","stone","stone",3,3],
        // ["altar_2","pickaxe","stone","stone",3,3],
        // ["altar_3","pickaxe","stone","stone",3,3],
        ["sky_stone_starmetal_ore","pickaxe","diamond","stone",5,5]//陨石星辉金属矿石
    ]
    block.forEach(([id,type,level,sound,hardness,resistance])=>
        event.create(id)
            .tagBlock(toolType[type])
            .tagBlock(miningLevel[level])
            .soundType(sound)
            .hardness(hardness)
            .resistance(resistance)
            .requiresTool(true))

    //封装树木信标：注星木台座上长着星辉的树木信标，只当结构方块用（无方块实体、无工作范围）
    event.create("packaged_tree_beacon")
        .copyPropertiesFrom("minecraft:glass")//继承 canOcclude=false，否则模型比整格窄时四周缝里会看见虚空
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
