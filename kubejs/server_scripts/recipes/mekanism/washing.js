ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekanism/washing/"

    //矿石处理：脏浆液洗涤
    MetalConfig.forEach(metal=>
        event.recipes.mekanism.washing(
            `1x kubejs:clean_${metal.name}`,
            "5x minecraft:water",
            `1x kubejs:dirty_${metal.name}`
        )
        .id(`${id_prefix}${metal.name}`))
})
