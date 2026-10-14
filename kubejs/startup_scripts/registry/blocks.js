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
        ["altar_1","pickaxe","stone","stone",3,3],
        ["altar_2","pickaxe","stone","stone",3,3],
        ["altar_3","pickaxe","stone","stone",3,3],
        ["sky_stone_starmetal_ore","pickaxe","diamond","stone",5,5]
    ]
    //祭坛模型不是整格方块：去掉实心属性，碰撞箱贴合底座、立柱和台面（单位：像素）
    //格式:[起点x,起点y,起点z,终点x,终点y,终点z]
    const shapes = {
        altar_1: [[1,0,1,15,3,15],[2,3,2,14,4,14],[4,4,4,12,11,12],[2,11,2,14,12,14],[0,12,0,16,16,16]],
        altar_2: [[0,0,0,16,2,16],[1,2,1,15,4,15],[4,4,4,12,10,12],[2,10,2,14,11,14],[0,11,0,16,16,16]],
        altar_3: [[0,0,0,16,2,16],[1,2,1,15,3,15],[1,3,1,15,10,15],[1,10,1,15,11,15],[0,11,0,16,16,16]]
    }

    block.forEach(([id,type,level,sound,hardness,resistance])=>{
        let builder = event.create(id)
            .tagBlock(toolType[type])
            .tagBlock(miningLevel[level])
            .soundType(sound)
            .hardness(hardness)
            .resistance(resistance)
            .requiresTool(true)
        if (shapes[id]) {
            builder.notSolid().opaque(false).fullBlock(false).viewBlocking(false).suffocating(false).redstoneConductor(false)
            shapes[id].forEach(([x0,y0,z0,x1,y1,z1])=>builder.box(x0,y0,z0,x1,y1,z1))
        }
    })
})
