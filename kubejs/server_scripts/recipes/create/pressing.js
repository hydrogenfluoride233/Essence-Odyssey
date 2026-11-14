ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:create/pressing/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"kubejs:osmium_sheet",
            input:"mekanism:ingot_osmium",
            id:`${id_prefix}osmium_sheet`,
        },
        {
            output:"kubejs:tin_sheet",
            input:"mekanism:ingot_tin",
            id:`${id_prefix}tin_sheet`,
        },
        {
            output:"kubejs:iesnium_sheet",
            input:"occultism:iesnium_ingot",
            id:`${id_prefix}iesnium_sheet`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.create.pressing(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))
})
