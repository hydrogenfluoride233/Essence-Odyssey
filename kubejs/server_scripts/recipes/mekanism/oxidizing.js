ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekanism/oxidizing/"

    //要素：固=>气
    Aspects.forEach(({id:ess})=>{
        event.recipes.mekanism.oxidizing(
            `250x kubejs:${ess}_chemical`,
            `kubejs:crystal_${ess}`
        )
        .id(`${id_prefix}${ess}_crystal`)

        event.recipes.mekanism.oxidizing(
            `1000x kubejs:${ess}_chemical`,
            `kubejs:block_${ess}`
        )
        .id(`${id_prefix}${ess}_block`)
    })
})
