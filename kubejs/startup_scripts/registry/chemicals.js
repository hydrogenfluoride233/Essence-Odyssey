StartupEvents.registry("mekanism:chemical",event=>{
//浆液
    const dirty=(ore,color1)=>event.create(`kubejs:dirty_${ore}`).tint(color1)
    const clean=(ore,color2)=>event.create(`kubejs:clean_${ore}`).tint(color2)
    
    const oreList=[
        ["zinc"    ,"#919a86","#a9c9a7"],
        ["iesnium" ,"#30434c","#709db2"],
        ["nickel"  ,"#818c68","#b4bf9a"],
        ["aluminum","#587487","#9cb4c1"]
    ]

    oreList.forEach(([ore,dirtyCol,cleanCol])=>{
        dirty(ore,dirtyCol)
        clean(ore,cleanCol) 
    })
    
//安山合金
    event.create("kubejs:andesite_alloy").tint("#756868")
})
