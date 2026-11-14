ServerEvents.recipes(event=>{
    //矿石处理：氯化
    MetalConfig.forEach(metal=>{
        const oreTag = `#c:ores/${metal.name}`
        const rawItemId = `${metal.raw_mod}:${metal.raw_item}`
        const rawBlockId = `${metal.raw_mod}:${metal.raw_block}`
        const shard = `kubejs:shard_${metal.name}`
        const crystal = `kubejs:crystal_${metal.name}`

        event.recipes.mekanism.injecting(
            shard,
            crystal,
            "1x mekanism:hydrogen_chloride"
        )
        .perTickUsage(true)
        .id(`essenceodyssey:mekanism/injecting/${metal.name}_crystal`)

        event.recipes.mekanism.injecting(
            `4x ${shard}`,
            oreTag,
            "1x mekanism:hydrogen_chloride"
        )
        .perTickUsage(true)
        .id(`essenceodyssey:mekanism/injecting/${metal.name}_ore`)

        event.recipes.mekanism.injecting(
            `8x ${shard}`,
            `3x ${rawItemId}`,
            "1x mekanism:hydrogen_chloride"
        )
        .perTickUsage(true)
        .id(`essenceodyssey:mekanism/injecting/${metal.name}_raw`)

        event.recipes.mekanism.injecting(
            `24x ${shard}`,
            rawBlockId,
            "2x mekanism:hydrogen_chloride"
        )
        .perTickUsage(true)
        .id(`essenceodyssey:mekanism/injecting/${metal.name}_raw_block`)
    })
})
