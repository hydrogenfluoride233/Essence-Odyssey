ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:naturesaura/offering/"
    const Required = ["id","output","input","catalyst"]

    const recipes = [
        {
            output:"kubejs:token_delirium",
            input:"kubejs:token_confusion",
            catalyst:"naturesaura:calling_spirit",
            id:`${id_prefix}token_delirium`,
        },
        {
            output:"kubejs:token_equanimity",
            input:"kubejs:token_serenity",
            catalyst:"naturesaura:calling_spirit",
            id:`${id_prefix}token_equanimity`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.naturesaura.offering(
            recipe.output,
            recipe.input,
            recipe.catalyst
        )
        .id(recipe.id))
})
