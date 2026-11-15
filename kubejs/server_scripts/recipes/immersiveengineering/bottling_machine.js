ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:immersiveengineering/bottling_machine/"
    const Required = ["id","item_output","item_input","fluid_input"]

    const recipes = [
        {
            item_output:[
                "actuallyadditions:advanced_coil",
            ],
            item_input:[
                "actuallyadditions:basic_coil",
            ],
            fluid_input:"500x actuallyadditions:crystallized_oil",
            id:`${id_prefix}advanced_coil`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.immersiveengineering.bottling_machine(
            recipe.item_output.map(value=>toTagOutput(value)),
            recipe.item_input.map(value=>toIngredientWithSize(value)),
            toFluidStack(recipe.fluid_input)
        )
        .id(recipe.id))

    //元始要素：液=>固
    PrimaryAspects.forEach(data=>{
        const ess = data.id

        event.recipes.immersiveengineering.bottling_machine(
            toTagOutput(`kubejs:crystal_${ess}`),
            toIngredientWithSize("minecraft:amethyst_shard"),
            toFluidStack(`250x kubejs:${ess}_fluid`)
        )
        .id(`kubejs:immersiveengineering/bottling_machine/${ess}_crystal`)

        event.recipes.immersiveengineering.bottling_machine(
            toTagOutput(`kubejs:block_${ess}`),
            toIngredientWithSize("minecraft:amethyst_block"),
            toFluidStack(`1000x kubejs:${ess}_fluid`)
        )
        .id(`kubejs:immersiveengineering/bottling_machine/${ess}_block`)
    })
})
