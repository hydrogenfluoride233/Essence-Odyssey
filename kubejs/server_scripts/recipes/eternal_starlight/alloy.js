ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:eternal_starlight/alloy/"
    const Required = ["id","time","input","output"]

    const recipes = [
        {
            time:400,
            input:[
                "#c:ingots/deepsilver",
                "#c:ingots/golem_steel",
                "#c:ingots/aethersent",
                "#c:gems/starcore",
                "#c:gems/malarite",
                "#c:gems/starlit_diamond",
                "#eternal_starlight:lunar_left",
                "eternal_starlight:starfire",
                "eternal_starlight:soul_dew",
            ],
            output:"eternal_starlight:unrealium_ingot",
            id:`${id_prefix}unrealium`,
        },
        {
            time:200,
            input:[
                "#c:ingots/oxidized_golem_steel",
                "#c:ingots/oxidized_golem_steel",
                "#c:ingots/oxidized_golem_steel",
                "#c:gems/starcore",
                "#c:dusts/saltpeter",
            ],
            output:"2x eternal_starlight:golem_steel_ingot",
            id:`${id_prefix}golem_steel`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"eternal_starlight:alloy",
            "burn_time":recipe.time,
            "ingredients":recipe.input.map(toIngredientJson),
            "results":toRecipeArray(recipe.output).map(value=>{
                const {count,id} = toCounted(value)

                return {"amount":count,"item":{"id":id}}
            })
        })
        .id(recipe.id))
})
