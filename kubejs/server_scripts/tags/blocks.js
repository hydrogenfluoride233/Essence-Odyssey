ServerEvents.tags("block",event=>{
    //神圣陨星
    const aspects = ["aqua","ignis","terra","aer","perditio","ordo"]
    aspects.forEach(aspect=>
        event.get("neovitae:quarry_blocks").add(`kubejs:block_${aspect}`))

    event.get("neovitae:quarry_blocks").add("minecraft:amethyst_block")//紫水晶块

    //符文祭坛材料
    event.get("occultism:pentacle_materials").add([
        "minecraft:obsidian",
        "naturesaura:infused_stone",
        "minecraft:lapis_block",
        "integrateddynamics:crystalized_menril_brick",
        "minecraft:stone_bricks",
    ])

    //要素
    Aspects.forEach(({id:ess})=>
        event.get("kubejs:essence_block").add(`kubejs:block_${ess}`))

    PrimaryAspects.forEach(({id:ess})=>
        event.get("kubejs:primary_essence_block").add(`kubejs:block_${ess}`))

    SecondaryAspects.forEach(({id:ess})=>
        event.get("kubejs:secondary_essence_block").add(`kubejs:block_${ess}`))
})
