RecipeViewerEvents.removeCategories(event=>{
    const HideList = [
        "ironfurnaces:generator_regular",
        "ironfurnaces:generator_blasting",
        "ironfurnaces:generator_smoking",
    ]

    HideList.forEach(id=>
        event.remove(id))
})
