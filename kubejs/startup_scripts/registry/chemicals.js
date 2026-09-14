StartupEvents.registry("mekanism:chemical",event=>{
//浆液
    const dirty=(ore,color1)=>event.create(`kubejs:dirty_${ore}`).tint(color1)
    const clean=(ore,color2)=>event.create(`kubejs:clean_${ore}`).tint(color2)
    
    const oreList=[
        ["zinc"   ,"#b8a266","#d9c58c"],
        ["iesnium","#30434c","#709db2"],
        ["nickel" ,"#6d8a63","#a7bd98"],
        ["aluminum","#587487","#9cb4c1"]
    ]

    oreList.forEach(([ore,dirtyCol,cleanCol])=>{
        dirty(ore,dirtyCol)
        clean(ore,cleanCol) 
    })
    
//安山合金
    event.create("kubejs:andesite_alloy").tint("#756868")
})
