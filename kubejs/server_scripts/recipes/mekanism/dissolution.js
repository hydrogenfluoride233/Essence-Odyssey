ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekanism/dissolution/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"kubejs:dirty_zinc",
            input:"create:crushed_raw_zinc",
            id:`${id_prefix}dirty_zinc`,
        },
        {
            output:"mekmm:dirty_silver",
            input:"create:crushed_raw_silver",
            id:`${id_prefix}dirty_silver`,
        },
        {
            output:"kubejs:dirty_iesnium",
            input:"kubejs:crushed_raw_iesnium",
            id:`${id_prefix}dirty_iesnium`,
        },
        {
            output:"kubejs:dirty_nickel",
            input:"create:crushed_raw_nickel",
            id:`${id_prefix}dirty_nickel`,
        },
        {
            output:"kubejs:dirty_aluminum",
            input:"create:crushed_raw_aluminum",
            id:`${id_prefix}dirty_aluminum`,
        },
        {
            output:"mekanism:dirty_iron",
            input:"create:crushed_raw_iron",
            id:`${id_prefix}dirty_iron`,
        },
        {
            output:"mekanism:dirty_gold",
            input:"create:crushed_raw_gold",
            id:`${id_prefix}dirty_gold`,
        },
        {
            output:"mekanism:dirty_copper",
            input:"create:crushed_raw_copper",
            id:`${id_prefix}dirty_copper`,
        },
        {
            output:"mekanism:dirty_lead",
            input:"create:crushed_raw_lead",
            id:`${id_prefix}dirty_lead`,
        },
        {
            output:"mekanism:dirty_tin",
            input:"create:crushed_raw_tin",
            id:`${id_prefix}dirty_tin`,
        },
        {
            output:"mekanism:dirty_osmium",
            input:"create:crushed_raw_osmium",
            id:`${id_prefix}dirty_osmium`,
        },
        {
            output:"mekanism:dirty_uranium",
            input:"create:crushed_raw_uranium",
            id:`${id_prefix}dirty_uranium`,
        },
    ]

    checkRecipe(recipes,Required)

    //Create 粉碎矿：脏浆液
    recipes.forEach(recipe=>
        event.recipes.mekanism.dissolution(
            `1000x ${recipe.output}`,
            `2x ${recipe.input}`,
            "1x mekanism:sulfuric_acid"
        )
        .perTickUsage(true)
        .id(recipe.id))

    //矿石处理：脏浆液
    MetalConfig.forEach(metal=>{
        const oreTag = `#c:ores/${metal.name}`
        const rawItemId = `${metal.raw_mod}:${metal.raw_item}`
        const rawBlockId = `${metal.raw_mod}:${metal.raw_block}`
        const dirty = `kubejs:dirty_${metal.name}`

        event.recipes.mekanism.dissolution(
            `1000x ${dirty}`,
            oreTag,
            "1x mekanism:sulfuric_acid"
        )
        .perTickUsage(true)
        .id(`${id_prefix}${metal.name}_ore`)

        event.recipes.mekanism.dissolution(
            `2000x ${dirty}`,
            `3x ${rawItemId}`,
            "1x mekanism:sulfuric_acid"
        )
        .perTickUsage(true)
        .id(`${id_prefix}${metal.name}_raw`)

        event.recipes.mekanism.dissolution(
            `6000x ${dirty}`,
            rawBlockId,
            "2x mekanism:sulfuric_acid"
        )
        .perTickUsage(true)
        .id(`${id_prefix}${metal.name}_raw_block`)
    })
})
