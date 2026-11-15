ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:immersiveengineering/blast_furnace/"
    const Required = ["id","output","input","time"]

    const recipes = [
        {
            output:"twilightforest:wrought_iron_bar",
            input:"justdirethings:ferricore_ingot",
            time:300,
            slag:true,
            id:`${id_prefix}wrought_iron_bar`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>{
        const result = toTagOutput(recipe.output)
        const ingredient = toIngredientWithSize(recipe.input)

        if(recipe.slag) {
            event.recipes.immersiveengineering.blast_furnace(
                result,
                ingredient,
                recipe.time,
                toTagOutput("immersiveengineering:slag")
            )
            .id(recipe.id)
        } else {
            event.recipes.immersiveengineering.blast_furnace(
                result,
                ingredient,
                recipe.time
            )
            .id(recipe.id)
        }
    })
})
