ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:ars_nouveau/budding_conversion/"
    const Required = ["id","input","output"]

    const recipes = [
        {
            input:"eternal_starlight:thioquartz_block",
            output:"eternal_starlight:budding_thioquartz",
            id:`${id_prefix}budding_thioquartz`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"ars_nouveau:budding_conversion",
            "input":recipe.input,
            "result":recipe.output
        })
        .id(recipe.id))
})
