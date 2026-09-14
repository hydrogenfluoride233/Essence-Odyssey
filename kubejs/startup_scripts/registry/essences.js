    const EssenceList = [
        ["aqua"      ,"#3edcff"],//水
        ["ignis"     ,"#ff5a01"],//火
        ["terra"     ,"#56c000"],//地
        ["aer"       ,"#ffff7e"],//风
        ["perditio"  ,"#626262"],//混沌
        ["ordo"      ,"#d8d7f0"],//秩序
        ["vapor"     ,"#ffffff"],//蒸汽 = 水+火
        ["victus"    ,"#fc1111"],//生命 = 水+地
        ["tempestas" ,"#4ba8c9"],//气候 = 水+风
        ["mortuus"   ,"#000000"],//死亡 = 水+混沌
        ["auram"     ,"#df5fc7"],//灵气 = 水+秩序
        ["fervor"    ,"#ffa500"],//熔岩 = 火+地
        ["lux"       ,"#fff429"],//光明 = 火+风
        ["gelum"     ,"#e1ffff"],//寒霜 = 火+混沌
        ["potentia"  ,"#7bdfea"],//能量 = 火+秩序
        ["vitreus"   ,"#40ffff"],//晶体 = 地+风
        ["vitium"    ,"#5500dd"],//腐化 = 地+混沌
        ["metallum"  ,"#b5b5cd"],//金属 = 地+秩序
        ["vacuos"    ,"#2d1e33"],//虚空 = 风+混沌
        ["motus"     ,"#94e0e8"],//移动 = 风+秩序
        ["permutatio","#588558"],//变化 = 混沌+秩序
    ]

StartupEvents.registry("mekanism:chemical",event=>{
    EssenceList.forEach(([essence,color])=>
        event.create(`kubejs:${essence}_essence`).tint(color))
})


StartupEvents.registry("fluid",event=>{
    EssenceList.forEach(([essence,color])=>
        event.create(`kubejs:${essence}_essence`,"kubejs:thin").tint(color))
})


StartupEvents.registry("item",event=>{
    EssenceList.forEach(([essence,color])=>
        event.create(`kubejs:crystal_${essence}`))
})

StartupEvents.registry("block",event=>{
    EssenceList.forEach(([essence,color])=>
        event.create(`kubejs:block_${essence}`)
             .soundType("amethyst")
             .tagBlock("minecraft:mineable/pickaxe")
             .tagBlock("minecraft:needs_stone_tool"))
})
