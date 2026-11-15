ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:actuallyadditions/crushing/"
    const Required = ["output","input","id"]

    const recipes = [
        {
            output:"4x naturesaura:gold_powder",
            input:"naturesaura:gold_leaf",
            id:`${id_prefix}gold_powder`,
        },
    ].concat(Crystals.map(crystal=>({
        output:`kubejs:empowered_${crystal.id}_crystal_dust`,
        input:`actuallyadditions:empowered_${crystal.id}_crystal`,
        id:`${id_prefix}${crystal.id}`,
    })))

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.actuallyadditions.crushing(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))
})
