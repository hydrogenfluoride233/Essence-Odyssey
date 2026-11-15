ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:pneumaticcraft/fluid_mixer/"
    const Required = ["id","fluid_output","item_output","fluid_input_1","fluid_input_2","pressure","time"]

    const recipes = [

    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"pneumaticcraft:fluid_mixer",
            "fluid_output":recipe.fluid_output ? toFluidJson(recipe.fluid_output) : {},
            "item_output":recipe.item_output ? toItemStack(recipe.item_output) : {},
            "input1":toFluidIngredient(recipe.fluid_input_1),
            "input2":toFluidIngredient(recipe.fluid_input_2),
            "pressure":recipe.pressure,
            "time":recipe.time
        })
        .id(recipe.id))

    //二级要素：流体混合
    SecondaryAspects.forEach(({id:result,from:[left,right]})=>
        event.custom({
            "type":"pneumaticcraft:fluid_mixer",
            "fluid_output":{"amount":500,"id":`kubejs:${result}_fluid`},
            "item_output":{},
            "input1":{"amount":250,"fluid":`kubejs:${left}_fluid`},
            "input2":{"amount":250,"fluid":`kubejs:${right}_fluid`},
            "pressure":3,
            "time":100
        })
        .id(`kubejs:pneumaticcraft/fluid_mixer/${result}`))
})
