ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:actuallyadditions/crushing/"
    const Required = ["output","input","id"]

    const recipes = [
        {
            output:"kubejs:empowered_restonia_crystal_dust",
            input:"actuallyadditions:empowered_restonia_crystal",
            id:`${id_prefix}restonia`,
        },
        {
            output:"kubejs:empowered_palis_crystal_dust",
            input:"actuallyadditions:empowered_palis_crystal",
            id:`${id_prefix}palis`,
        },
        {
            output:"kubejs:empowered_diamatine_crystal_dust",
            input:"actuallyadditions:empowered_diamatine_crystal",
            id:`${id_prefix}diamatine`,
        },
        {
            output:"kubejs:empowered_void_crystal_dust",
            input:"actuallyadditions:empowered_void_crystal",
            id:`${id_prefix}void`,
        },
        {
            output:"kubejs:empowered_enori_crystal_dust",
            input:"actuallyadditions:empowered_enori_crystal",
            id:`${id_prefix}enori`,
        },
        {
            output:"kubejs:empowered_emeradic_crystal_dust",
            input:"actuallyadditions:empowered_emeradic_crystal",
            id:`${id_prefix}emeradic`,
        },
        {
            output:"4x naturesaura:gold_powder",
            input:"naturesaura:gold_leaf",
            id:`${id_prefix}gold_powder`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.actuallyadditions.crushing(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))
})
