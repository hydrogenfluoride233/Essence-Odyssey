ServerEvents.tags("item",event=>{
    //金属
    event.get("c:ingots").add([
        "naturesaura:tainted_gold",
        "kubejs:twilight_ingot",
        "twilightforest:wrought_iron_bar",
    ])
    event.get("c:nuggets").add([
        "kubejs:ferricore_nugget",
        "kubejs:blazegold_nugget",
    ])
    event.get("c:nuggets/ferricore").add("kubejs:ferricore_nugget")
    event.get("c:nuggets/blazegold").add("kubejs:blazegold_nugget")
    event.get("c:gears").add([
        "enderio:iron_gear",
        "kubejs:steel_gear",
    ])
    event.get("c:gears/steel").add("kubejs:steel_gear")
    event.get("create:crushed_raw_materials").add("kubejs:crushed_raw_iesnium")

    //灵气生产
    event.get("kubejs:aura_generators").add([
        "naturesaura:potion_generator",
        "naturesaura:oak_generator",
        "naturesaura:flower_generator",
        "naturesaura:animal_generator",
        "naturesaura:moss_generator",
        "naturesaura:firework_generator",
        "naturesaura:projectile_generator",
        "naturesaura:chorus_generator",
        "naturesaura:slime_split_generator",
    ])

    //魔源通道
    event.get("kubejs:sourcelinks").add([
        "ars_nouveau:agronomic_sourcelink",
        "ars_nouveau:alchemical_sourcelink",
        "ars_nouveau:mycelial_sourcelink",
        "ars_nouveau:vitalic_sourcelink",
        "ars_nouveau:volcanic_sourcelink",
        "starbunclemania:fluid_sourcelink",
    ])

    //预测产物
    event.get("hostilenetworks:generalized_predictions").add([
        "kubejs:aether_prediction",
        "kubejs:eternal_starlight_prediction",
    ])

    //ifeu 橡胶
    event.get("minecraft:leaves").add("ifeu:rubber_leaves")
    event.get("minecraft:saplings").add("ifeu:rubber_sapling")

    //铭文工具
    event.get("neovitae:tools/scribe").add([
        "kubejs:perditio_scribe_tool",
        "kubejs:ordo_scribe_tool",
    ])

    //月藤巨物掉落物
    event.get("eternal_starlight:lunar_left").add([
        "eternal_starlight:tenacious_vine",
        "eternal_starlight:tenacious_petal",
    ])

    //空气压缩机
    event.get("pneumaticcraft:basic_compressor").add([
        "pneumaticcraft:air_compressor",
        "pneumaticcraft:manual_compressor",
        "pneumaticcraft:liquid_compressor",
        "pneumaticcraft:thermal_compressor",
    ])
    event.get("pneumaticcraft:advanced_compressor").add([
        "pneumaticcraft:solar_compressor",
        "pneumaticcraft:flux_compressor",
        "pneumaticcraft:electrostatic_compressor",
        "pneumaticcraft:advanced_air_compressor",
        "pneumaticcraft:advanced_liquid_compressor",
    ])

    //倍矿中间物
    const forms = ["dirty_dust","clump","shard","crystal"]
    const ores = ["zinc","iesnium","nickel","aluminum"]
    forms.forEach(form=>ores.forEach(ore=>{
        event.get(`c:${form}s/${ore}`).add(`kubejs:${form}_${ore}`)
        event.get(`mekanism:${form}s`).add(`kubejs:${form}_${ore}`)
    }))

    //板材
    const plates = ["iesnium","osmium","tin"]
    plates.forEach(plate=>{
        event.get(`c:plates/${plate}`).add(`kubejs:${plate}_sheet`)
        event.get("c:plates").add(`kubejs:${plate}_sheet`)
    })

    //正则标签
    event.get("chimes:wind_chimes").add("@chimes")
    event.get("buildinggadgets2:gadget").add(/^buildinggadgets2:gadget/)
    event.get("constructionstick:template").add(/^constructionstick:template/)
    event.get("pylons:pylon").add(/^pylons:.*_pylon$/)

    //要素
    Aspects.forEach(({id:aspect})=>{
        event.get("kubejs:aspect_crystal").add(`kubejs:crystal_${aspect}`)
        event.get("kubejs:aspect_block").add(`kubejs:block_${aspect}`)
    })

    PrimaryAspects.forEach(({id:aspect})=>{
        event.get("kubejs:primary_aspect_crystal").add(`kubejs:crystal_${aspect}`)
        event.get("kubejs:primary_aspect_block").add(`kubejs:block_${aspect}`)
    })

    SecondaryAspects.forEach(({id:aspect})=>{
        event.get("kubejs:secondary_aspect_crystal").add(`kubejs:crystal_${aspect}`)
        event.get("kubejs:secondary_aspect_block").add(`kubejs:block_${aspect}`)
    })

    //符文祭坛材料
    event.get("occultism:pentacle_materials").add([
        "minecraft:obsidian",
        "naturesaura:infused_stone",
        "minecraft:lapis_block",
        "integrateddynamics:crystalized_menril_brick",
        "minecraft:stone_bricks",
    ])

    //标签移除
    event.get("c:gems/certus_quartz").remove("ae2:charged_certus_quartz_crystal")
    event.get("ae2:all_certus_quartz").remove("ae2:charged_certus_quartz_crystal")
    event.get("c:gears/iron").remove("enderio:iron_gear")
    event.get("pneumaticcraft:upgrade_components").remove("minecraft:lapis_lazuli")

    event.removeAll("botanypotstiers:regular_botany_pots")
    event.removeAll("botanypotstiers:elite_botany_pots")
    event.removeAll("botanypotstiers:ultra_botany_pots")
    event.removeAll("botanypotstiers:mega_botany_pots")
    event.removeAll("botanypotstiers:regular_hopper_botany_pots")
    event.removeAll("botanypotstiers:elite_hopper_botany_pots")
    event.removeAll("botanypotstiers:ultra_hopper_botany_pots")
    event.removeAll("botanypotstiers:mega_hopper_botany_pots")
})
