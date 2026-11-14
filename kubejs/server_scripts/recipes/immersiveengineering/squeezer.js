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

        //这里是 event.custom 的 JSON，给的是 JSON 形态；现有用例 item_output 全是 null，真给产物时得换成 IE 的 JSON 写法
        json.result = recipe.item_output ? toTagOutput(recipe.item_output) : []

        if(recipe.fluid_output) json.fluid = toFluidJson(recipe.fluid_output)

        event.custom(json)
        .id(recipe.id)
    })
})
