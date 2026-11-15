ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:immersiveengineering/mixer/"
    const Required = ["id","fluid_output","fluid_input","item_input","time"]

    const recipes = [
        {
            fluid_output:"1000x actuallyadditions:crystallized_oil",
            fluid_input:"1000x actuallyadditions:refined_canola_oil",
            item_input:"actuallyadditions:crystallized_canola_seed",
            time:3200,
            id:`${id_prefix}crystallized_oil`,
        },
        {
            fluid_output:"1000x actuallyadditions:empowered_oil",
            fluid_input:"1000x actuallyadditions:crystallized_oil",
            item_input:"actuallyadditions:empowered_canola_seed",
            time:3200,
            id:`${id_prefix}empowered_oil`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.immersiveengineering.mixer(
            toFluidStack(recipe.fluid_output),
            toFluidStack(recipe.fluid_input),
            [toIngredientWithSize(recipe.item_input)],
            recipe.time
        )
        .id(recipe.id))

    //元始要素：固=>液
    PrimaryAspects.forEach(data=>{
        const ess = data.id

        event.recipes.immersiveengineering.mixer(
            toFluidStack(`250x kubejs:${ess}_fluid`),
            toFluidStack("250x sauce:source_fluid"),
            [toIngredientWithSize(`kubejs:crystal_${ess}`)],
            3200
        )
        .id(`kubejs:immersiveengineering/mixer/${ess}_crystal`)

        event.recipes.immersiveengineering.mixer(
            toFluidStack(`1000x kubejs:${ess}_fluid`),
            toFluidStack("1000x sauce:source_fluid"),
            [toIngredientWithSize(`kubejs:block_${ess}`)],
            12800
        )
        .id(`kubejs:immersiveengineering/mixer/${ess}_block`)
    })
})
