RecipeViewerEvents.removeRecipes(event=>{
    const HideList = [
        "create:kjs/unknown_mixture",
        "create:kjs/paradox_collapser",
    ]

    HideList.forEach(recipe=>
        event.remove(recipe))
})
