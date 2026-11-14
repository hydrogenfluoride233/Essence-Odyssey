ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:portaltransform/item_transform/"
    const Required = ["id","input","output","dimensions"]

    const recipes = [
        {
            input:"minecraft:amethyst_shard",
            output:"kubejs:crystal_perditio",
            dimensions:["overworld","the_end"],
            id:`${id_prefix}perditio`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.portaltransform.item_transform(
            recipe.input,
            recipe.output
        )
        .dimensions(recipe.dimensions)
        .chance(1.0)
        .id(recipe.id))
})
