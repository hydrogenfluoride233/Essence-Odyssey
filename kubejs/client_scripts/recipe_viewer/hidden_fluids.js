RecipeViewerEvents.removeEntries("fluid",event=>{
    const HideList = [
        "mekanism:steam",
    ]

    HideList.forEach(id=>
        event.remove(id))
})
