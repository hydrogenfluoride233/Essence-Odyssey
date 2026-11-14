ServerEvents.recipes(event=>{
    //矿石处理：提纯
    MetalConfig.forEach(metal=>{
        const oreTag = `#c:ores/${metal.name}`
        const rawItemId = `${metal.raw_mod}:${metal.raw_item}`
        const rawBlockId = `${metal.raw_mod}:${metal.raw_block}`
        const clump = `kubejs:clump_${metal.name}`
        const shard = `kubejs:shard_${metal.name}`

        event.recipes.mekanism.purifying(
            clump,
            shard,
            "1x mekanism:oxygen"
        )
        .perTickUsage(true)
        .id(`essenceodyssey:mekanism/purifying/${metal.name}_shard`)

        event.recipes.mekanism.purifying(
            `3x ${clump}`,
            oreTag,
            "1x mekanism:oxygen"
        )
        .perTickUsage(true)
        .id(`essenceodyssey:mekanism/purifying/${metal.name}_ore`)

        event.recipes.mekanism.purifying(
            `2x ${clump}`,
            rawItemId,
            "1x mekanism:oxygen"
        )
        .perTickUsage(true)
        .id(`essenceodyssey:mekanism/purifying/${metal.name}_raw`)

        event.recipes.mekanism.purifying(
            `18x ${clump}`,
            rawBlockId,
            "2x mekanism:oxygen"
        )
        .perTickUsage(true)
        .id(`essenceodyssey:mekanism/purifying/${metal.name}_raw_block`)
    })
})
