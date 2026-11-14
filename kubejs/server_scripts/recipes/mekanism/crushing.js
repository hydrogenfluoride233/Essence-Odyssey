ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekanism/crushing/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"4x naturesaura:gold_powder",
            input:"naturesaura:gold_leaf",
            id:`${id_prefix}gold_powder`,
        },
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
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.mekanism.crushing(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))

    //矿石处理：金属粉
    MetalConfig.forEach(metal=>{
        event.recipes.mekanism.crushing(
            `kubejs:dirty_dust_${metal.name}`,
            `kubejs:clump_${metal.name}`
        )
        .id(`kubejs:mekanism/crushing/${metal.name}_dirty_dust`)

        event.recipes.mekanism.crushing(
            metal.dust,
            metal.ingot
        )
        .id(`kubejs:mekanism/crushing/${metal.name}_dust`)
    })
})
