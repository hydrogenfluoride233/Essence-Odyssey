ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekanism/crystallizing/"

    //要素：气=>固
    Aspects.forEach(({id:ess})=>
        event.recipes.mekanism.crystallizing(
            `kubejs:crystal_${ess}`,
            `250x kubejs:${ess}_chemical`
        )
        .id(`${id_prefix}${ess}`))

    //矿石处理：纯净浆液=>结晶
    MetalConfig.forEach(metal=>
        event.recipes.mekanism.crystallizing(
            `kubejs:crystal_${metal.name}`,
            `200x kubejs:clean_${metal.name}`
        )
        .id(`${id_prefix}${metal.name}_ore`))
})
