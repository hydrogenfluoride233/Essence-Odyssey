ServerEvents.recipes(event=>{
    //砧板
    //格式:[输入,工具,输出]
    const CutList = [
    ]

    CutList.forEach(([ingredients,tool,result])=>
        event.recipes.farmersdelight.cutting(ingredients,tool,result))
})
