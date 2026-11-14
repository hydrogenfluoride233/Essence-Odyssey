ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:pneumaticcraft/pressure_chamber/"
    const Required = ["id","output","input","pressure"]

    const recipes = [
        {
            output:"pneumaticcraft:ingot_iron_compressed",
            input:["mekanism:ingot_steel"],
            pressure:2,
            id:`${id_prefix}compressed_iron_ingot`,
        },
        {
            output:"pneumaticcraft:compressed_iron_block",
            input:["mekanism:block_steel"],
            pressure:2,
            id:`${id_prefix}compressed_iron_block`,
        },
        {
            output:"kubejs:energy_capacitor",
            input:[
                "2x #pneumaticcraft:wiring",
                "actuallyadditions:restonia_crystal",
                "justdirethings:ferricore_ingot",
            ],
            pressure:2,
            id:`${id_prefix}energy_capacitor`,
        },
        {
            output:"immersiveengineering:heavy_engineering",
            input:[
                "create:brass_casing",
                "immersiveengineering:sheetmetal_steel",
                "4x immersiveengineering:component_steel",
                "4x twilightforest:wrought_iron_bar",
            ],
            pressure:3,
            id:`${id_prefix}heavy_engineering`,
        },
        {
            output:"immersiveengineering:rs_engineering",
            input:[
                "create:copper_casing",
                "immersiveengineering:sheetmetal_iron",
                "4x minecraft:redstone",
                "4x twilightforest:wrought_iron_bar",
            ],
            pressure:3,
            id:`${id_prefix}rs_engineering`,
        },
        {
            output:"immersiveengineering:light_engineering",
            input:[
                "create:andesite_casing",
                "immersiveengineering:sheetmetal_iron",
                "4x immersiveengineering:component_iron",
                "4x twilightforest:wrought_iron_bar",
            ],
            pressure:3,
            id:`${id_prefix}light_engineering`,
        },
        {
            output:"justdirethings:gooblock_tier1",
            input:[
                "4x aether:aerogel",
                "2x minecraft:sugar",
                "2x minecraft:rotten_flesh",
            ],
            pressure:2,
            id:`${id_prefix}gooblock_tier1`,
        },
        {
            output:"pneumaticcraft:turbine_blade",
            input:[
                "immersiveengineering:ingot_hop_graphite",
                "2x kubejs:empowered_enori_crystal_dust",
                "kubejs:empowered_restonia_crystal_dust",
            ],
            pressure:2,
            id:`${id_prefix}turbine_blade`,
        },
        {
            output:"cobblegengalore:block_gen_gold",
            input:[
                "cobblegengalore:block_gen_iron",
                "4x minecraft:potent_sulfur",
                "4x minecraft:gold_ingot",
            ],
            pressure:3,
            id:`${id_prefix}block_gen_gold`,
        },
        {
            output:"pneumaticcraft:thermopneumatic_processing_plant",
            input:[
                "2x justdirethings:ferricore_ingot",
                "2x pneumaticcraft:small_tank",
                "pneumaticcraft:pressure_tube",
                "actuallyadditions:iron_casing",
            ],
            pressure:2,
            id:`${id_prefix}thermopneumatic_processing_plant`,
        },
        {
            output:"pneumaticcraft:refinery",
            input:[
                "2x actuallyadditions:restonia_crystal",
                "pneumaticcraft:small_tank",
                "2x actuallyadditions:advanced_coil",
                "actuallyadditions:iron_casing",
            ],
            pressure:3,
            id:`${id_prefix}refinery`,
        },
        {
            output:"pneumaticcraft:refinery_output",
            input:[
                "2x actuallyadditions:enori_crystal",
                "pneumaticcraft:small_tank",
                "2x #c:glass_blocks",
                "actuallyadditions:iron_casing",
            ],
            pressure:2,
            id:`${id_prefix}refinery_output`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"pneumaticcraft:pressure_chamber",
            "inputs":toRecipeArray(recipe.input).map(toIngredient),
            "pressure":recipe.pressure,
            "results":toRecipeArray(recipe.output).map(toItemStack)
        })
        .id(recipe.id))
})
