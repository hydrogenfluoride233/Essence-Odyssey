ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:integrateddynamics/squeezer/"
    const Required = ["id","item_input"]

    const recipes = [
        {
            item_input:"integrateddynamics:menril_log",
            item_output:"2x integrateddynamics:crystalized_menril_chunk",
            extra_item_output:[
                [0.5,"2x integrateddynamics:crystalized_menril_chunk"],
                [0.25,"integrateddynamics:crystalized_menril_chunk"],
            ],
            fluid_output:null,
            id:`${id_prefix}menril_log`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        squeezer(
            event,
            recipe.item_input,
            recipe.item_output,
            recipe.extra_item_output,
            recipe.fluid_output
        )
        .id(recipe.id))
})
