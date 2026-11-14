ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:createaddition/rolling/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"2x immersiveengineering:stick_netherite",
            input:"minecraft:netherite_ingot",
            id:`${id_prefix}netherite`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"createaddition:rolling",
            "ingredients":[toIngredient(recipe.input)],
            "results":[toItemStack(recipe.output)]
        })
        .id(recipe.id))
})
