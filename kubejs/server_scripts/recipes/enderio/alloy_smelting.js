ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:enderio/alloy_smelting/"
    const Required = ["output","input","energy","id"]

    const recipes = [
        {
            output:"2x immersiveengineering:ingot_electrum",
            input:[
                "minecraft:gold_ingot",
                "occultism:silver_ingot",
            ],
            energy:5000,
            id:`${id_prefix}electrum`,
        },
        {
            output:"2x create:brass_ingot",
            input:[
                "minecraft:copper_ingot",
                "create:zinc_ingot",
            ],
            energy:5000,
            id:`${id_prefix}brass`,
        },
        {
            output:"2x create:andesite_alloy",
            input:[
                "minecraft:iron_nugget",
                "minecraft:andesite",
            ],
            energy:5000,
            id:`${id_prefix}andesite_alloy_iron`,
        },
        {
            output:"2x create:andesite_alloy",
            input:[
                "create:zinc_nugget",
                "minecraft:andesite",
            ],
            energy:5000,
            id:`${id_prefix}andesite_alloy_zinc`,
        },
        {
            output:"4x mekanism:ingot_bronze",
            input:[
                "3x minecraft:copper_ingot",
                "mekanism:ingot_tin",
            ],
            energy:5000,
            id:`${id_prefix}bronze`,
        },
        {
            output:"2x immersiveengineering:ingot_constantan",
            input:[
                "minecraft:copper_ingot",
                "immersiveengineering:ingot_nickel",
            ],
            energy:5000,
            id:`${id_prefix}constantan`,
        },
        {
            output:"8x naturesaura:gold_fiber",
            input:[
                "4x minecraft:gold_ingot",
                "4x #minecraft:leaves",
            ],
            energy:1000,
            id:`${id_prefix}gold_fiber`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.enderio.alloy_smelting(
            recipe.output,
            recipe.input,
            recipe.energy
        )
        .id(recipe.id))
})
