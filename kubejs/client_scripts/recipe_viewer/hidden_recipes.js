RecipeViewerEvents.removeRecipes(event=>{
    const HideList = [
        "essenceodyssey:create/compacting/unknown_mixture",
        "essenceodyssey:create/crushing/paradox_collapser",
    ]

    HideList.forEach(recipe=>
        event.remove(recipe))
})
