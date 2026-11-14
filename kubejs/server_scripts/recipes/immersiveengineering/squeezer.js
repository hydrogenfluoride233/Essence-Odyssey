ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:immersiveengineering/squeezer/"
    const Required = ["id","input","fluid_output","energy"]

    const recipes = [
        {
            input:"actuallyadditions:canola",
            item_output:null,
            fluid_output:"80x actuallyadditions:canola_oil",
            energy:6400,
            id:`${id_prefix}canola_oil`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const json = {
            "type":"immersiveengineering:squeezer",
            "energy":recipe.energy,
            "input":{"item":recipe.input}
        }

        json.result = recipe.item_output ? toTagOutput(recipe.item_output) : []

        if(recipe.fluid_output) json.fluid = toFluidJson(recipe.fluid_output)

        event.custom(json)
        .id(recipe.id)
    })
})
