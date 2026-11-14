ServerEvents.recipes(event=>{
    //要素：固=>气
    Aspects.forEach(({id:ess})=>{
        event.recipes.mekanism.oxidizing(
            `250x kubejs:${ess}_chemical`,
            `kubejs:crystal_${ess}`
        )
        .id(`essenceodyssey:mekanism/oxidizing/${ess}_crystal`)

        event.recipes.mekanism.oxidizing(
            `1000x kubejs:${ess}_chemical`,
            `kubejs:block_${ess}`
        )
        .id(`essenceodyssey:mekanism/oxidizing/${ess}_block`)
    })
})
