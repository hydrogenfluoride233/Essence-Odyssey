ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:occultism/crystallize/"
    const Required = ["id","input","output","min_tier"]

    const recipes = [
        {
            input:"eternal_starlight:thioquartz_cluster",
            output:"eternal_starlight:budding_thioquartz",
            min_tier:4,
            id:`${id_prefix}budding_thioquartz`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"occultism:crystallize",
            "ignore_crystallize_multiplier":true,
            "ingredient":{"item":recipe.input},
            "min_tier":recipe.min_tier,
            "result":{"type":"occultism:item","count":1,"id":recipe.output}
        })
        .id(recipe.id))
})
