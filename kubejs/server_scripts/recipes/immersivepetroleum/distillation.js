ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:immersivepetroleum/distillation/"
    const Required = ["id","input","extra_output","main_output","energy","time"]

    const recipes = [
        {
            input:"60x #c:crude_oil",
            extra_output:[
                [0.25,"immersivepetroleum:bitumen"],
            ],
            main_output:[
                "20x immersivepetroleum:naphtha",
                "20x immersivepetroleum:diesel_sulfur",
                "5x immersivepetroleum:lubricant",
            ],
            energy:1024,
            time:1,
            id:`${id_prefix}oil`,
        },
        {
            input:"20x #c:naphtha",
            extra_output:[],
            main_output:[
                "15x immersivepetroleum:benzol",
                "5x immersivepetroleum:petroleum_gas",
            ],
            energy:1024,
            time:1,
            id:`${id_prefix}naphtha`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"immersivepetroleum:distillation",
            "byproducts":recipe.extra_output.map(toChanceOutput),
            "energy":recipe.energy,
            "input":toFluidIngredient(recipe.input),
            "results":recipe.main_output.map(value=>toFluidJson(value)),
            "time":recipe.time
        })
        .id(recipe.id))
})
