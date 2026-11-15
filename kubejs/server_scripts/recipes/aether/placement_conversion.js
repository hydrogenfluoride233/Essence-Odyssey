ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:aether/placement_conversion/"
    const Required = ["id","biome","input","output"]

    const recipes = [
        {
            biome:"#kubejs:twilight_forest",
            input:"create:chocolate",
            output:"kubejs:blood_clot",
            id:`${id_prefix}blood_clot`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"aether:placement_conversion",
            "biome":recipe.biome,
            "ingredient":{"block":recipe.input},
            "result":{"block":recipe.output}
        })
        .id(recipe.id))
})
