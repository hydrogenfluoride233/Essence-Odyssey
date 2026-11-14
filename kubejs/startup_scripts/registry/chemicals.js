StartupEvents.registry("mekanism:chemical",event=>{
    //要素精粹
    Aspects.forEach(aspect=>
        event.create(`kubejs:${aspect.id}_chemical`).tint(aspect.color))

    //浆液
    Ores.forEach(({ore,dirty,clean})=>{
        event.create(`kubejs:dirty_${ore}`).tint(dirty)
        event.create(`kubejs:clean_${ore}`).tint(clean)
    })

    //安山合金
    event.create("kubejs:andesite_alloy").tint("#756868")
})
