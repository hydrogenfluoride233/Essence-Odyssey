ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:create/compacting/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"kubejs:unknown_mixture",
            input:[
                "thaumon:mutagen",
                "ae2:sky_dust",
                "ae2:certus_quartz_dust",
                "1000x minecraft:lava",
            ],
            id:`${id_prefix}unknown_mixture`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.create.compacting(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))
})
