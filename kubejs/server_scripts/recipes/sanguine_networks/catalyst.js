ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:sanguine_networks/catalyst/"
    const Required = ["id","catalyst","multiplier","uses"]

    const recipes = [
        {
            catalyst:"kubejs:aether_prediction",
            multiplier:2,
            uses:50,
            id:`${id_prefix}aether_prediction`,
        },
        {
            catalyst:"kubejs:eternal_starlight_prediction",
            multiplier:2,
            uses:50,
            id:`${id_prefix}eternal_starlight_prediction`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"sanguine_networks:catalyst",
            "catalyst":{"item":recipe.catalyst},
            "multiplier":recipe.multiplier,
            "uses":recipe.uses
        })
        .id(recipe.id))
})
