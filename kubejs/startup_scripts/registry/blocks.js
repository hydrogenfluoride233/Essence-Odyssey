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
        ["sky_stone_starmetal_ore","pickaxe","diamond","stone",5,5]//陨石星辉金属矿石（占位，后续进陨星仪式）
    ]
    block.forEach(([id,type,level,sound,hardness,resistance])=>
        event.create(id)
            .tagBlock(toolType[type])
            .tagBlock(miningLevel[level])
            .soundType(sound)
            .hardness(hardness)
            .resistance(resistance)
            .requiresTool(true))
})
