ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:industrialforegoing/dissolution_chamber/"
    const Required = ["id","item_input","fluid_input","item_output","time"]

    const recipes = [
        {
            item_input:[
                "naturesaura:tainted_gold",
                "mekanism:ingot_steel",
                "create:brass_ingot",
                "pneumaticcraft:ingot_iron_compressed",
                "megacells:sky_steel_ingot",
                "immersiveengineering:ingot_hop_graphite",
                "kubejs:unknown_mixture",
                "powah:steel_energized",
            ],
            fluid_input:"250x immersiveengineering:redstone_acid",
            item_output:"8x mmcr:modularium",
            fluid_output:null,
            time:200,
            id:`${id_prefix}modularium`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const builder = event.recipes.industrialforegoing.dissolution_chamber(
            recipe.item_input.map(value=>toIngredient(value)),
            toFluidStack(recipe.fluid_input),
            toItemStack(recipe.item_output),
            recipe.time
        )

        if(recipe.fluid_output) builder.outputFluid(toFluidStack(recipe.fluid_output))

        builder.id(recipe.id)
    })
})
