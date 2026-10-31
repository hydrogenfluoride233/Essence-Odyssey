ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"eternal_starlight_delight:salvaging/mana_crystals"})

    //砧板
    //格式:[输入,工具,输出]
    const CutList = [
    ]

    CutList.forEach(([ingredients,tool,result])=>
        event.recipes.farmersdelight.cutting(ingredients,tool,result))
})
