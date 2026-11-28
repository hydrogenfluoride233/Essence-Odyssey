ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:"
    const Required = ["output","input"]

    //按输出物命名空间 A-Z 排列；id = kubejs:<命名空间>/shapeless/<路径>
    const recipes = [
        //aether
        {
            output:"8x aether:blue_berry",
            input:["2x kubejs:aether_prediction","minecraft:sweet_berries"],
        },

        //create
        {
            output:"create:andesite_alloy",
            input:["minecraft:andesite","minecraft:iron_ingot"],
        },
        {
            output:"create:andesite_alloy",
            input:["minecraft:andesite","create:zinc_ingot"],
            suffix:"zinc",
        },

        //deep_aether
        {
            output:"deep_aether:stratus_ingot",
            input:[
                "deep_aether:chromatic_aercloud",
                "deep_aether:chromatic_aercloud",
                "deep_aether:chromatic_aercloud",
                "aether:ambrosium_shard",
                "aether:golden_amber",
                "aether:zanite_gemstone",
                "deep_aether:skyjade",
                "aethersdelight:arkenium_ingot",
                "aether:enchanted_gravitite",
            ],
        },
        {
            output:"8x deep_aether:goldenleaf_berries",
            input:["2x kubejs:aether_prediction","ars_nouveau:sourceberry_bush"],
        },
        //eternal_starlight
        {
            output:"eternal_starlight:thioquartz_block",
            input:[
                "eternal_starlight:thioquartz_shard",
                "eternal_starlight:thioquartz_shard",
                "eternal_starlight:thioquartz_shard",
                "eternal_starlight:thioquartz_shard",
            ],
        },

        //kubejs
        {
            output:"9x kubejs:ferricore_nugget",
            input:"justdirethings:ferricore_ingot",
        },
        {
            output:"9x kubejs:blazegold_nugget",
            input:"justdirethings:blazegold_ingot",
        },
        {
            output:"kubejs:twilight_ingot",
            input:[
                "twilightforest:ironwood_ingot",
                "twilightforest:steeleaf_ingot",
                "twilightforest:naga_scale",
                "twilightforest:knightmetal_ingot",
                "kubejs:twilight_holy_grail",
                "twilightforest:fiery_ingot",
                "twilightforest:arctic_fur",
                "twilightforest:alpha_yeti_fur",
                "twilightforest:carminite",
            ],
            keep:["kubejs:twilight_holy_grail"],
        },

        //powah
        {
            output:"32x powah:dielectric_paste",
            input:[
                "pneumaticcraft:plastic",
                "mekanism:dust_coal",
                "ars_nouveau:fire_essence",
                "kubejs:ordo_essence",
            ],
            suffix:"32",
        },
        {
            output:"64x powah:dielectric_paste",
            input:[
                "pneumaticcraft:plastic",
                "kubejs:empowered_void_crystal_dust",
                "ars_nouveau:fire_essence",
                "kubejs:ordo_essence",
            ],
            suffix:"64",
        },

        //twilightforest

        {
            output:"twilightforest:naga_trophy",
            input:["twilightforest:naga_trophy"],
        },
        {
            output:"twilightforest:lich_trophy",
            input:["twilightforest:lich_trophy"],
        },
        {
            output:"twilightforest:minoshroom_trophy",
            input:["twilightforest:minoshroom_trophy"],
        },
        {
            output:"twilightforest:hydra_trophy",
            input:["twilightforest:hydra_trophy"],
        },
        {
            output:"twilightforest:knight_phantom_trophy",
            input:["twilightforest:knight_phantom_trophy"],
        },
        {
            output:"twilightforest:ur_ghast_trophy",
            input:["twilightforest:ur_ghast_trophy"],
        },
        {
            output:"twilightforest:alpha_yeti_trophy",
            input:["twilightforest:alpha_yeti_trophy"],
        },
        {
            output:"twilightforest:snow_queen_trophy",
            input:["twilightforest:snow_queen_trophy"],
        },
        {
            output:"twilightforest:quest_ram_trophy",
            input:["twilightforest:quest_ram_trophy"],
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>{
        const [namespace,rawPath] = toCounted(recipe.output).id.split(":")
        const path = rawPath.split("[")[0] + (recipe.suffix ? "_"+recipe.suffix : "")

        const builder = event.shapeless(
            recipe.output,
            recipe.input
        )

        if(recipe.keep) recipe.keep.forEach(value=>builder.keepIngredient(value))

        builder.id(`${id_prefix}${namespace}/shapeless/${path}`)
    })

    //世界盐
    for(let first = 0;first<PrimaryAspects.length-2;first++){
        for(let second = first+1;second<PrimaryAspects.length-1;second++){
            for(let third = second+1;third<PrimaryAspects.length;third++){
                let essences = [PrimaryAspects[first].id,PrimaryAspects[second].id,PrimaryAspects[third].id]

                event.shapeless(
                    "thaumon:mutagen",
                    [
                        `kubejs:crystal_${essences[0]}`,
                        `kubejs:crystal_${essences[1]}`,
                        `kubejs:crystal_${essences[2]}`,
                        "minecraft:redstone",
                        "minecraft:flint",
                        "minecraft:bowl",
                    ]
                )
                .keepIngredient("minecraft:bowl")
                .keepIngredient("minecraft:flint")
                .id(`kubejs:thaumon/shapeless/mutagen_${essences[0]}_${essences[1]}_${essences[2]}`)
            }
        }
    }
})
