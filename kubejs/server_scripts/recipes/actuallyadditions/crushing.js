ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:actuallyadditions/crushing/"
    const Required = ["output","input","id"]

    const recipes = [
        {
            output:"4x naturesaura:gold_powder",
            input:"naturesaura:gold_leaf",
            id:`${id_prefix}gold_powder`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.actuallyadditions.crushing(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))

    //充能水晶：粉碎成粉
    Crystals.forEach(crystal=>
        event.recipes.actuallyadditions.crushing(
            `kubejs:empowered_${crystal.id}_crystal_dust`,
            `actuallyadditions:empowered_${crystal.id}_crystal`
        )
        .id(`${id_prefix}${crystal.id}`))
})
