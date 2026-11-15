ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekanism/crushing/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"4x naturesaura:gold_powder",
            input:"naturesaura:gold_leaf",
            id:`${id_prefix}gold_powder`,
        },
    ].concat(Crystals.map(crystal=>({
        output:`kubejs:empowered_${crystal.id}_crystal_dust`,
        input:`actuallyadditions:empowered_${crystal.id}_crystal`,
        id:`${id_prefix}${crystal.id}`,
    })))

    checkRecipe(recipes,Required)

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
