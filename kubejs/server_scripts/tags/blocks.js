ServerEvents.tags("block",event=>{
    //神圣陨星
    PrimaryAspects.forEach(({id:aspect})=>
        event.get("neovitae:quarry_blocks").add(`kubejs:block_${aspect}`))

    event.get("neovitae:quarry_blocks").add("minecraft:amethyst_block")

    //符文祭坛材料
    event.get("occultism:pentacle_materials").add([
        "minecraft:obsidian",
        "naturesaura:infused_stone",
        "minecraft:lapis_block",
        "integrateddynamics:crystalized_menril_brick",
        "minecraft:stone_bricks",
    ])

    //要素
    Aspects.forEach(({id:aspect})=>
        event.get("kubejs:aspect_block").add(`kubejs:block_${aspect}`))

    PrimaryAspects.forEach(({id:aspect})=>
        event.get("kubejs:primary_aspect_block").add(`kubejs:block_${aspect}`))

    SecondaryAspects.forEach(({id:aspect})=>
        event.get("kubejs:secondary_aspect_block").add(`kubejs:block_${aspect}`))
})
