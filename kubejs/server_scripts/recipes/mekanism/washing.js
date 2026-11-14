ServerEvents.recipes(event=>{
    //矿石处理：脏浆液洗涤
    MetalConfig.forEach(metal=>
        event.recipes.mekanism.washing(
            `1x kubejs:clean_${metal.name}`,
            "5x minecraft:water",
            `1x kubejs:dirty_${metal.name}`
        )
        .id(`kubejs:mekanism/washing/${metal.name}`))
})
