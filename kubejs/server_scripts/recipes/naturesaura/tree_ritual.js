ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:naturesaura/tree_ritual/"
    const Required = ["id","output","input","sapling","time"]

    const recipes = [
        {
            output:"8x naturesaura:gold_fiber",
            input:[
                "4x minecraft:gold_ingot",
                "4x #minecraft:leaves",
            ],
            sapling:"aether:golden_oak_sapling",
            time:20,
            id:`${id_prefix}gold_fiber`,
        },
        {
            output:"32x naturesaura:gold_leaf",
            input:[
                "4x naturesaura:gold_fiber",
                "4x #minecraft:leaves",
            ],
            sapling:"minecraft:oak_sapling",
            time:20,
            id:`${id_prefix}gold_leaf`,
        },
        {
            output:"ars_nouveau:imbuement_chamber",
            input:[
                "ars_nouveau:starbuncle_shards",
                "minecraft:gold_block",
                "2x quark:ancient_fruit",
                "4x createaddition:gold_rod",
            ],
            sapling:"upgrade_aquatic:river_sapling",
            time:100,
            id:`${id_prefix}imbuement_chamber`,
        },
        {
            output:"ars_nouveau:enchanting_apparatus",
            input:[
                "ars_nouveau:glyph_interact",
                "naturesaura:ancient_bark",
                "ars_nouveau:water_essence",
                "ars_nouveau:fire_essence",
                "ars_nouveau:earth_essence",
                "ars_nouveau:air_essence",
                "kubejs:perditio_essence",
                "kubejs:ordo_essence",
            ],
            sapling:"upgrade_aquatic:river_sapling",
            time:100,
            id:`${id_prefix}enchanting_apparatus`,
        },
        {
            output:"ars_nouveau:arcane_core",
            input:[
                "2x ars_nouveau:sourcestone",
                "kubejs:perditio_essence",
                "kubejs:ordo_essence",
                "4x createaddition:gold_rod",
            ],
            sapling:"upgrade_aquatic:river_sapling",
            time:100,
            id:`${id_prefix}arcane_core`,
        },
        {
            output:"4x ars_nouveau:source_jar",
            input:[
                "ars_nouveau:archwood_slab",
                "ars_nouveau:archwood_planks",
                "3x #c:glass_blocks",
                "minecraft:gold_ingot",
                "#c:glass_blocks",
                "minecraft:gold_ingot",
            ],
            sapling:"upgrade_aquatic:river_sapling",
            time:40,
            id:`${id_prefix}source_jar`,
        },
        {
            output:"4x ars_nouveau:mob_jar",
            input:[
                "ars_nouveau:archwood_slab",
                "4x #c:glass_blocks",
                "minecraft:gold_ingot",
                "#c:glass_blocks",
                "minecraft:gold_ingot",
            ],
            sapling:"upgrade_aquatic:river_sapling",
            time:40,
            id:`${id_prefix}mob_jar`,
        },
        {
            output:"starbunclemania:fluid_jar",
            input:[
                "ars_nouveau:archwood_slab",
                "ars_nouveau:blue_archwood_log",
                "3x #c:glass_blocks",
                "ars_nouveau:water_essence",
                "#c:glass_blocks",
                "ars_nouveau:water_essence",
            ],
            sapling:"upgrade_aquatic:river_sapling",
            time:40,
            id:`${id_prefix}fluid_jar`,
        },
        {
            output:"ars_nouveau:agronomic_sourcelink",
            input:[
                "2x minecraft:wheat",
                "ars_nouveau:source_gem_block",
                "4x createaddition:gold_rod",
            ],
            sapling:"ars_nouveau:green_archwood_sapling",
            time:100,
            id:`${id_prefix}agronomic_sourcelink`,
        },
        {
            output:"ars_nouveau:volcanic_sourcelink",
            input:[
                "minecraft:lava_bucket",
                "ars_nouveau:source_gem_block",
                "2x minecraft:lava_bucket",
                "4x createaddition:gold_rod",
            ],
            sapling:"ars_nouveau:red_archwood_sapling",
            time:100,
            id:`${id_prefix}volcanic_sourcelink`,
        },
        {
            output:"ars_nouveau:alchemical_sourcelink",
            input:[
                "minecraft:brewing_stand",
                "ars_nouveau:source_gem_block",
                "2x minecraft:brewing_stand",
                "4x createaddition:gold_rod",
            ],
            sapling:"ars_nouveau:blue_archwood_sapling",
            time:100,
            id:`${id_prefix}alchemical_sourcelink`,
        },
        {
            output:"ars_nouveau:vitalic_sourcelink",
            input:[
                "minecraft:glistering_melon_slice",
                "ars_nouveau:source_gem_block",
                "2x minecraft:glistering_melon_slice",
                "4x createaddition:gold_rod",
            ],
            sapling:"ars_elemental:yellow_archwood_sapling",
            time:100,
            id:`${id_prefix}vitalic_sourcelink`,
        },
        {
            output:"ars_nouveau:mycelial_sourcelink",
            input:[
                "minecraft:mushroom_stew",
                "ars_nouveau:source_gem_block",
                "2x minecraft:mushroom_stew",
                "4x createaddition:gold_rod",
            ],
            sapling:"ars_nouveau:purple_archwood_sapling",
            time:100,
            id:`${id_prefix}mycelial_sourcelink`,
        },
        {
            output:"starbunclemania:fluid_sourcelink",
            input:[
                "minecraft:lava_bucket",
                "ars_nouveau:source_gem_block",
                "2x minecraft:lava_bucket",
                "4x createaddition:gold_rod",
            ],
            sapling:"upgrade_aquatic:river_sapling",
            time:100,
            id:`${id_prefix}fluid_sourcelink`,
        },
        {
            output:"naturesaura:ancient_sapling",
            input:[
                "2x ars_nouveau:source_gem",
                "2x quark:ancient_fruit",
                "naturesaura:gold_leaf",
                "minecraft:crimson_fungus",
                "naturesaura:gold_leaf",
                "minecraft:warped_fungus",
            ],
            sapling:"quark:ancient_sapling",
            time:50,
            id:`${id_prefix}ancient_sapling`,
        },
        {
            output:"quark:ancient_sapling",
            input:[
                "minecraft:sweet_berries",
                "ars_nouveau:bastion_pod",
                "ars_elemental:flashpine_pod",
                "ars_nouveau:bombegranate_pod",
                "minecraft:glow_berries",
                "ars_nouveau:frostaya_pod",
                "upgrade_aquatic:mulberry",
                "ars_nouveau:mendosteen_pod",
            ],
            sapling:"quark:yellow_blossom_sapling",
            time:50,
            id:`${id_prefix}ancient_sapling_quark`,
        },
        {
            output:"2x naturesaura:token_sorrow",
            input:[
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:overworld'}]",
                "ars_nouveau:water_essence",
                "2x kubejs:crystal_aqua",
                "naturesaura:gold_leaf",
                "#minecraft:fishes",
                "naturesaura:gold_leaf",
                "#minecraft:fishes",
            ],
            sapling:"quark:ancient_sapling",
            time:20,
            id:`${id_prefix}token_sorrow`,
        },
        {
            output:"2x naturesaura:token_anger",
            input:[
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:nether'}]",
                "ars_nouveau:fire_essence",
                "2x kubejs:crystal_ignis",
                "naturesaura:gold_leaf",
                "minecraft:magma_block",
                "naturesaura:gold_leaf",
                "minecraft:magma_block",
            ],
            sapling:"quark:ancient_sapling",
            time:20,
            id:`${id_prefix}token_anger`,
        },
        {
            output:"2x naturesaura:token_fear",
            input:[
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:twilight_forest'}]",
                "ars_nouveau:earth_essence",
                "2x kubejs:crystal_terra",
                "naturesaura:gold_leaf",
                "twilightforest:torchberries",
                "naturesaura:gold_leaf",
                "twilightforest:torchberries",
            ],
            sapling:"quark:ancient_sapling",
            time:20,
            id:`${id_prefix}token_fear`,
        },
        {
            output:"2x naturesaura:token_joy",
            input:[
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:aether'}]",
                "ars_nouveau:air_essence",
                "2x kubejs:crystal_aer",
                "naturesaura:gold_leaf",
                "aether:ambrosium_shard",
                "naturesaura:gold_leaf",
                "aether:ambrosium_shard",
            ],
            sapling:"quark:ancient_sapling",
            time:20,
            id:`${id_prefix}token_joy`,
        },
        {
            output:"2x kubejs:token_confusion",
            input:[
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:end'}]",
                "kubejs:perditio_essence",
                "2x kubejs:crystal_perditio",
                "naturesaura:gold_leaf",
                "minecraft:ender_pearl",
                "naturesaura:gold_leaf",
                "minecraft:ender_pearl",
            ],
            sapling:"quark:ancient_sapling",
            time:20,
            id:`${id_prefix}token_confusion`,
        },
        {
            output:"2x kubejs:token_serenity",
            input:[
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:starlight'}]",
                "kubejs:ordo_essence",
                "2x kubejs:crystal_ordo",
                "naturesaura:gold_leaf",
                "eternal_starlight:orbflora_light",
                "naturesaura:gold_leaf",
                "eternal_starlight:orbflora_light",
            ],
            sapling:"quark:ancient_sapling",
            time:20,
            id:`${id_prefix}token_serenity`,
        },
        {
            output:"kubejs:aura_diode",
            input:[
                "thaumon:mutagen",
                "immersiveengineering:electron_tube",
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:overworld'}]",
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:nether'}]",
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:end'}]",
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:twilight_forest'}]",
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:aether'}]",
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:starlight'}]",
            ],
            sapling:"minecraft:cherry_sapling",
            time:50,
            id:`${id_prefix}aura_diode`,
        },
        {
            output:"actuallyadditions:wood_casing",
            input:[
                "4x #thaumon:greatwood_logs",
                "4x immersiveengineering:stick_treated",
            ],
            sapling:"quark:orange_blossom_sapling",
            time:50,
            id:`${id_prefix}wood_casing_greatwood`,
        },
        {
            output:"actuallyadditions:wood_casing",
            input:[
                "4x #thaumon:silverwood_logs",
                "4x immersiveengineering:stick_treated",
            ],
            sapling:"quark:orange_blossom_sapling",
            time:50,
            id:`${id_prefix}wood_casing_silverwood`,
        },
        {
            output:"cookingforblockheads:sink",
            input:[
                "2x naturesaura:spring",
                "starbunclemania:glyph_place_fluid",
                "starbunclemania:glyph_pickup_fluid",
                "2x kubejs:aqua_fluid_bucket",
                "2x ars_nouveau:water_essence",
            ],
            sapling:"eternal_starlight:scarlet_sapling",
            time:100,
            id:`${id_prefix}sink`,
        },
        {
            output:"justdirethings:gooblock_tier2",
            input:[
                "justdirethings:gooblock_tier1",
                "3x kubejs:ignis_fluid_bucket",
                "2x minecraft:blaze_powder",
                "2x minecraft:nether_wart",
            ],
            sapling:"quark:red_blossom_sapling",
            time:50,
            id:`${id_prefix}gooblock_tier2`,
        },
        {
            output:"neovitae:ara_vitae",
            input:[
                "kubejs:fiery_blood_bucket",
                "naturesaura:nature_altar",
                "kubejs:aqua_fluid_bucket",
                "kubejs:terra_fluid_bucket",
                "2x justdirethings:blazegold_ingot",
                "2x pneumaticcraft:reinforced_stone",
            ],
            sapling:"minecraft:poplar_sapling",
            time:200,
            id:`${id_prefix}ara_vitae`,
        },
        {
            output:"naturesaura:crushing_catalyst",
            input:[
                "naturesaura:gold_brick",
                "naturesaura:infused_stone",
                "create:mechanical_piston",
                "naturesaura:infused_iron",
                "ars_nouveau:glyph_crush",
                "create:crushing_wheel",
                "naturesaura:token_anger",
                "kubejs:token_confusion",
            ],
            sapling:"minecraft:birch_sapling",
            time:100,
            id:`${id_prefix}crushing_catalyst`,
        },
        {
            output:"naturesaura:conversion_catalyst",
            input:[
                "naturesaura:gold_brick",
                "naturesaura:infused_stone",
                "minecraft:brewing_stand",
                "naturesaura:tainted_gold",
                "ars_nouveau:glyph_intangible",
                "actuallyadditions:atomic_reconstructor",
                "naturesaura:token_joy",
                "kubejs:token_serenity",
            ],
            sapling:"minecraft:birch_sapling",
            time:100,
            id:`${id_prefix}conversion_catalyst`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const inputs = []

        recipe.input.forEach(value=>{
            const {count,id}=parseCounted(value)

            for(let i=0;i<count;i++) inputs.push(id)
        })

        event.recipes.naturesaura.tree_ritual(
            recipe.output,
            inputs,
            recipe.sapling,
            recipe.time
        )
        .id(recipe.id)

        packagedTreeRitual(event,recipe.output,inputs,recipe.sapling)
    })
})
