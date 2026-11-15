ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:create/crushing/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"4x naturesaura:gold_powder",
            input:"naturesaura:gold_leaf",
            id:`${id_prefix}gold_powder`,
        },
        {
            output:[0.25,"mekanism:sawdust"],
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
            toCreateOutputs(recipe.output),
            recipe.input
        )
        .id(recipe.id))

    //矿石处理：炼狱金属
    event.recipes.create.crushing(
        toCreateOutputs([
            "kubejs:crushed_raw_iesnium",
            [0.75,"create:experience_nugget"],
        ]),
        "occultism:raw_iesnium"
    )
    .id("kubejs:create/crushing/raw_iesnium")

    event.recipes.create.crushing(
        toCreateOutputs([
            "9x kubejs:crushed_raw_iesnium",
            [0.75,"9x create:experience_nugget"],
        ]),
        "occultism:raw_iesnium_block"
    )
    .id("kubejs:create/crushing/raw_iesnium_block")

    event.recipes.create.crushing(
        toCreateOutputs([
            "kubejs:crushed_raw_iesnium",
            [0.75,"kubejs:crushed_raw_iesnium"],
            [0.75,"create:experience_nugget"],
        ]),
        "occultism:iesnium_ore"
    )
    .id("kubejs:create/crushing/iesnium_ore")
})
