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

    //这个配方类型的 schema 没带 id 键，拿不到 .id()（.id 会解析成 KubeRecipe 的 id 字段），只能用它自动生成的 id
    recipes.forEach(recipe=>
        event.recipes.portaltransform.item_transform(
            recipe.input,
            recipe.output
        )
        .dimensions(recipe.dimensions)
        .chance(1.0))
})
