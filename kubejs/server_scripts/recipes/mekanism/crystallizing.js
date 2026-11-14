ServerEvents.recipes(event=>{
    //要素：气=>固
    Aspects.forEach(({id:ess})=>
        event.recipes.mekanism.crystallizing(
            `kubejs:crystal_${ess}`,
            `250x kubejs:${ess}_chemical`
        )
        .id(`essenceodyssey:mekanism/crystallizing/${ess}`))

    //矿石处理：纯净浆液=>结晶
    MetalConfig.forEach(metal=>
        event.recipes.mekanism.crystallizing(
            `kubejs:crystal_${metal.name}`,
            `200x kubejs:clean_${metal.name}`
        )
        .id(`essenceodyssey:mekanism/crystallizing/${metal.name}_ore`))
})
