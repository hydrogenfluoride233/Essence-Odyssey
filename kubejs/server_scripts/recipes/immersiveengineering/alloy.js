ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:immersiveengineering/alloy/"
    const Required = ["id","output","input1","input2"]

    const recipes = [

    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.immersiveengineering.alloy(
            toTagOutput(recipe.output),
            toIngredient(recipe.input1),
            toIngredient(recipe.input2)
        )
        .id(recipe.id))
})
