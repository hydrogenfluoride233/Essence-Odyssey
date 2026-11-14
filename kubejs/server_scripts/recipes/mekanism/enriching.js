ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekanism/enriching/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"eternal_starlight:dusted_shard",
            input:"eternal_starlight:dusted_gravel",
            id:`${id_prefix}dusted_shard`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.mekanism.enriching(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))

    //矿石处理：富集
    MetalConfig.forEach(metal=>{
        const oreTag = `#c:ores/${metal.name}`
        const rawItemId = `${metal.raw_mod}:${metal.raw_item}`
        const rawBlockId = `${metal.raw_mod}:${metal.raw_block}`

        event.recipes.mekanism.enriching(
            metal.dust,
            `kubejs:dirty_dust_${metal.name}`
        )
        .id(`kubejs:mekanism/enriching/${metal.name}_dirty_dust`)

        event.recipes.mekanism.enriching(
            `2x ${metal.dust}`,
            oreTag
        )
        .id(`kubejs:mekanism/enriching/${metal.name}_ore`)

        event.recipes.mekanism.enriching(
            `4x ${metal.dust}`,
            `3x ${rawItemId}`
        )
        .id(`kubejs:mekanism/enriching/${metal.name}_raw`)

        event.recipes.mekanism.enriching(
            `12x ${metal.dust}`,
            rawBlockId
        )
        .id(`kubejs:mekanism/enriching/${metal.name}_raw_block`)
    })
})
