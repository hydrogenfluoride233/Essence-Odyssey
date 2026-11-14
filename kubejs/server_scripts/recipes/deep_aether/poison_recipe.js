ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:deep_aether/poison_recipe/"
    const Required = ["id","input","output"]

    const recipes = [
        {
            input:"aether:blue_aercloud",
            output:"deep_aether:aersmog",
            id:`${id_prefix}aersmog`,
        },
        {
            input:"aether:holystone",
            output:"aether:quicksoil",
            id:`${id_prefix}quicksoil`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"deep_aether:poison_recipe",
            "ingredient":{"item":recipe.input},
            "result":{"count":1,"id":recipe.output}
        })
        .id(recipe.id))
})
