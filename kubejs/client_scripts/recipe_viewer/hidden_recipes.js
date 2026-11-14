RecipeViewerEvents.removeRecipes(event=>{
    const HideList = [
        "kubejs:create/compacting/unknown_mixture",
        "kubejs:create/crushing/paradox_collapser",
    ]

    HideList.forEach(recipe=>
        event.remove(recipe))
})
