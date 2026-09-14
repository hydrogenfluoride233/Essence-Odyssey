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
    event.add("c:dusts/zinc","kubejs:dust_zinc")
    event.add("c:dusts", "kubejs:dust_zinc")

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

    //污染黄金
    event.add("c:ingots","naturesaura:tainted_gold")

    //铭文工具
    event.add("neovitae:tools/scribe","kubejs:perditio_scribe_tool")
    event.add("neovitae:tools/scribe","kubejs:ordo_scribe_tool")
})


ServerEvents.tags("chemical",event=>{
    const oreList = ["zinc","iesnium","nickel","aluminum"]
    oreList.forEach(ore=>{
        event.add("mekanism:dirty",`kubejs:dirty_${ore}`)
        event.add("mekanism:clean",`kubejs:clean_${ore}`)
    })
})

