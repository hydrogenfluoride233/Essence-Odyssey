ServerEvents.recipes(event=>{
    //矿石处理：脏浆液
    MetalConfig.forEach(metal=>{
        const oreTag = `#c:ores/${metal.name}`
        const rawItemId = `${metal.raw_mod}:${metal.raw_item}`
        const rawBlockId = `${metal.raw_mod}:${metal.raw_block}`
        const dirtyChemical = `kubejs:dirty_${metal.name}`

        event.recipes.mekanism.dissolution(
            `1000x ${dirtyChemical}`,
            oreTag,
            "1x mekanism:sulfuric_acid"
        )
        .perTickUsage(true)
        .id(`essenceodyssey:mekanism/dissolution/${metal.name}_ore`)

        event.recipes.mekanism.dissolution(
            `2000x ${dirtyChemical}`,
            `3x ${rawItemId}`,
            "1x mekanism:sulfuric_acid"
        )
        .perTickUsage(true)
        .id(`essenceodyssey:mekanism/dissolution/${metal.name}_raw`)

        event.recipes.mekanism.dissolution(
            `6000x ${dirtyChemical}`,
            rawBlockId,
            "2x mekanism:sulfuric_acid"
        )
        .perTickUsage(true)
        .id(`essenceodyssey:mekanism/dissolution/${metal.name}_raw_block`)
    })

    //Create 粉碎矿：脏浆液
    const createDissolutionList = [
        ["kubejs:dirty_zinc","create:crushed_raw_zinc"],
        ["mekmm:dirty_silver","create:crushed_raw_silver"],
        ["kubejs:dirty_iesnium","kubejs:crushed_raw_iesnium"],
        ["kubejs:dirty_nickel","create:crushed_raw_nickel"],
        ["kubejs:dirty_aluminum","create:crushed_raw_aluminum"],
        ["mekanism:dirty_iron","create:crushed_raw_iron"],
        ["mekanism:dirty_gold","create:crushed_raw_gold"],
        ["mekanism:dirty_copper","create:crushed_raw_copper"],
        ["mekanism:dirty_lead","create:crushed_raw_lead"],
        ["mekanism:dirty_tin","create:crushed_raw_tin"],
        ["mekanism:dirty_osmium","create:crushed_raw_osmium"],
        ["mekanism:dirty_uranium","create:crushed_raw_uranium"],
    ]

    createDissolutionList.forEach(([output,input])=>
        event.recipes.mekanism.dissolution(
            `1000x ${output}`,
            `2x ${input}`,
            "1x mekanism:sulfuric_acid"
        )
        .perTickUsage(true)
        .id(`essenceodyssey:mekanism/dissolution/${output.split(":")[1]}`))
})
