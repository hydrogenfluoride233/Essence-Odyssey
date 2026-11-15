ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekmm/rolling_mill/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"2x createaddition:iron_wire",
            input:"minecraft:iron_ingot",
            id:`${id_prefix}iron`,
        },
        {
            output:"2x createaddition:gold_wire",
            input:"minecraft:gold_ingot",
            id:`${id_prefix}gold`,
        },
        {
            output:"2x immersiveengineering:wire_electrum",
            input:"immersiveengineering:ingot_electrum",
            id:`${id_prefix}electrum`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.mekmm.rolling_mill(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))
})
