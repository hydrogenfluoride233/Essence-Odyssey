ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:immersiveengineering/alloy/"
    const Required = ["id","output","input1","input2"]

    const recipes = [

    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.immersiveengineering.alloy(
            toTagOutput(recipe.output),
            toIngredientWithSize(recipe.input1),
            toIngredientWithSize(recipe.input2)
        )
        .id(recipe.id))
})
