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
    //祭坛模型不是整格方块：去掉实心属性，碰撞箱贴合底座、立柱和台面（单位：像素）；悬浮的星轨环不算碰撞
    //格式:[起点x,起点y,起点z,终点x,终点y,终点z]
    const altarShape = [[1,0,1,15,1,15],[2,1,2,14,2,14],[4,2,4,12,3,12],[5,3,5,11,11,11],[4,11,4,12,12,12],[3,12,3,13,13,13],[2,13,2,14,16,14]]
    const shapes = { altar_1: altarShape, altar_2: altarShape, altar_3: altarShape }
    //祭坛的星光嵌饰会发光：亮度 6 / 8 / 10（lightLevel 取 0~1，乘 15 后取整）
    const glow = { altar_1: 0.42, altar_2: 0.56, altar_3: 0.69 }

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
        if (glow[id]) {
            builder.lightLevel(glow[id])
            //只在客户端每 2 tick 跑一次，用来放祭坛粒子特效（client_scripts/essenceodyssey/altar_fx.js）
            builder.blockEntity(be => {
                be.clientTicking()
                be.tickFrequency(2)
            })
        }
    })
})
