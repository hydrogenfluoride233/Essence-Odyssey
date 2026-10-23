ServerEvents.tags("item",event=>{
    //倍矿中间物
    const oreTag = ore =>{
        const forms=["dirty_dust","clump","shard","crystal"]
        forms.forEach(f=>{
            event.add(`c:${f}s/${ore}`,`kubejs:${f}_${ore}`)
            event.add(`mekanism:${f}s`,`kubejs:${f}_${ore}`)
        })
    }
    const oreList = ["zinc","iesnium","nickel","aluminum"]
    oreList.forEach(oreTag)
    
    event.add("create:crushed_raw_materials","kubejs:crushed_raw_iesnium")

    //板材
    const plateList = ["iesnium","osmium","tin"]
    plateList.forEach(p=>{
        event.add(`c:plates/${p}`,`kubejs:${p}_sheet`)
        event.add("c:plates",`kubejs:${p}_sheet`)
    })
    
    //灵气生产
    const AuraGeneratorList = [
        "naturesaura:potion_generator",
        "naturesaura:oak_generator",
        "naturesaura:flower_generator",
        "naturesaura:animal_generator",
        "naturesaura:moss_generator",
        "naturesaura:firework_generator",
        "naturesaura:projectile_generator",
        "naturesaura:chorus_generator",
        "naturesaura:slime_split_generator"
    ]
    AuraGeneratorList.forEach(generator=>
        event.add("kubejs:aura_generators",generator))

    //魔源通道
    const SourcelinkList = [
        "ars_nouveau:agronomic_sourcelink",
        "ars_nouveau:alchemical_sourcelink",
        "ars_nouveau:mycelial_sourcelink",
        "ars_nouveau:vitalic_sourcelink",
        "ars_nouveau:volcanic_sourcelink",
        "starbunclemania:fluid_sourcelink"
    ]
    SourcelinkList.forEach(sourcelink=>
        event.add("kubejs:sourcelinks",sourcelink))

    //预测产物
    event.add("hostilenetworks:generalized_predictions","kubejs:aether_prediction")
    event.add("hostilenetworks:generalized_predictions","kubejs:eternal_starlight_prediction")

    //ifeu
    event.add("minecraft:leaves","ifeu:rubber_leaves")
    event.add("minecraft:saplings","ifeu:rubber_sapling")

    //以防AE老把充能赛特斯当赛特斯用
    event.remove("c:gems/certus_quartz","ae2:charged_certus_quartz_crystal")
    event.remove("ae2:all_certus_quartz","ae2:charged_certus_quartz_crystal")

    //无限双金属齿轮
    event.remove("c:gears/iron","enderio:iron_gear")
    event.add("c:gears","enderio:iron_gear")

    //钢齿轮
    event.add("c:gears/steel","kubejs:steel_gear")

    //污染黄金
    event.add("c:ingots","naturesaura:tainted_gold")

    //铭文工具
    event.add("neovitae:tools/scribe","kubejs:perditio_scribe_tool")
    event.add("neovitae:tools/scribe","kubejs:ordo_scribe_tool")

    //风铃
    event.add("chimes:wind_chimes", "@chimes")

    //建筑小工具
    event.add("buildinggadgets2:gadget","/^buildinggadgets2:gadget/")

    //升级模板
    event.add("constructionstick:template","/^constructionstick:template/")

    //塔
    event.add("pylons:pylon","/^pylons:.*_pylon$/")

    //月藤巨物掉落物
    event.add("eternal_starlight:lunar_left",["eternal_starlight:tenacious_vine","eternal_starlight:tenacious_petal"])

    //暮色锭
    event.add("c:ingots","kubejs:twilight_ingot")
})

ServerEvents.tags("block",event=>{
    //神圣陨星只落 neovitae:quarry_blocks 里的方块（不在标签里的加权项会被丢掉）
    const QuarryBlockList = [
        "aqua"      ,//水
        "ignis"     ,//火
        "terra"     ,//地
        "aer"       ,//风
        "perditio"  ,//混沌
        "ordo"      ,//秩序
    ]
    QuarryBlockList.forEach(essence=>
        event.add("neovitae:quarry_blocks",`kubejs:block_${essence}`))

    event.add("neovitae:quarry_blocks","minecraft:amethyst_block")  //紫水晶块
})

