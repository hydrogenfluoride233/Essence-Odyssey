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
            input:"#farmersdelight:barks",
            id:`${id_prefix}sawdust`,
        },
        {
            output:"kubejs:paradox_collapser",
            input:"create:crushing_wheel",
            id:`${id_prefix}paradox_collapser`,
        },
        {
            output:[
                "kubejs:crushed_raw_iesnium",
                [0.75,"create:experience_nugget"],
            ],
            input:"occultism:raw_iesnium",
            id:`${id_prefix}raw_iesnium`,
        },
        {
            output:[
                "9x kubejs:crushed_raw_iesnium",
                [0.75,"9x create:experience_nugget"],
            ],
            input:"occultism:raw_iesnium_block",
            id:`${id_prefix}raw_iesnium_block`,
        },
        {
            output:[
                "kubejs:crushed_raw_iesnium",
                [0.75,"kubejs:crushed_raw_iesnium"],
                [0.75,"create:experience_nugget"],
            ],
            input:"occultism:iesnium_ore",
            id:`${id_prefix}iesnium_ore`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.create.crushing(
            toCreateOutput(recipe.output),
            toCreateInput(recipe.input)
        )
        .id(recipe.id))
})
