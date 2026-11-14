ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:immersiveengineering/metal_press/"
    const Required = ["id","output","input","mold","time"]

    const recipes = [
        {
            output:"kubejs:iesnium_sheet",
            input:"occultism:iesnium_ingot",
            mold:"immersiveengineering:mold_plate",
            time:2400,
            id:`${id_prefix}iesnium`,
        },
        {
            output:"pneumaticcraft:compressed_iron_gear",
            input:"4x pneumaticcraft:ingot_iron_compressed",
            mold:"immersiveengineering:mold_gear",
            time:2400,
            id:`${id_prefix}compressed_iron`,
        },
        {
            output:"industrialforegoing:diamond_gear",
            input:"4x minecraft:diamond",
            mold:"immersiveengineering:mold_gear",
            time:2400,
            id:`${id_prefix}diamond`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.immersiveengineering.metal_press(
            toTagOutput(recipe.output),
            toIngredient(recipe.input),
            recipe.mold,
            recipe.time
        )
        .id(recipe.id))
})
