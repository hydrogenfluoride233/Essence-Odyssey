ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:create/crushing/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"4x naturesaura:gold_powder",
            input:"naturesaura:gold_leaf",
            id:`${id_prefix}gold_powder`,
        },
        {
            output:CreateItem.of("mekanism:sawdust",0.25),
            input:Ingredient.of("#farmersdelight:barks"),
            id:`${id_prefix}sawdust`,
        },
        {
            output:"kubejs:paradox_collapser",
            input:"create:crushing_wheel",
            id:`${id_prefix}paradox_collapser`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.create.crushing(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))

    //矿石处理：炼狱金属
    event.recipes.create.crushing(
        ["kubejs:crushed_raw_iesnium",CreateItem.of("create:experience_nugget",0.75)],
        "occultism:raw_iesnium"
    )
    .id("essenceodyssey:create/crushing/raw_iesnium")

    event.recipes.create.crushing(
        ["9x kubejs:crushed_raw_iesnium",CreateItem.of("9x create:experience_nugget",0.75)],
        "occultism:raw_iesnium_block"
    )
    .id("essenceodyssey:create/crushing/raw_iesnium_block")

    event.recipes.create.crushing(
        ["kubejs:crushed_raw_iesnium",CreateItem.of("kubejs:crushed_raw_iesnium",0.75),CreateItem.of("create:experience_nugget",0.75)],
        "occultism:iesnium_ore"
    )
    .id("essenceodyssey:create/crushing/iesnium_ore")
})
