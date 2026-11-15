ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:immersiveengineering/arc_furnace/"
    const Required = ["id","output","input","time","energy"]

    const recipes = [
        {
            output:"twilightforest:wrought_iron_bar",
            input:"justdirethings:ferricore_ingot",
            time:400,
            energy:204800,
            slag:true,
            id:`${id_prefix}wrought_iron_bar`,
        },
        {
            output:"immersiveengineering:ingot_hop_graphite",
            input:"immersiveengineering:dust_hop_graphite",
            time:400,
            energy:204800,
            slag:true,
            id:`${id_prefix}ingot_hop_graphite`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.immersiveengineering.arc_furnace(
            [toTagOutput(recipe.output)],
            toIngredientWithSize(recipe.input),
            recipe.time,
            recipe.energy,
            recipe.additives ? recipe.additives.map(value=>toIngredientWithSize(value)) : [],
            recipe.secondaries || [],
            recipe.slag ? toTagOutput("immersiveengineering:slag") : undefined
        )
        .id(recipe.id))
})
