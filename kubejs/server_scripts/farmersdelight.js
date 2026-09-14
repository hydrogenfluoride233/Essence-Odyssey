ServerEvents.recipes(event=>{
    //砧板
    //格式:[输入,工具,输出]
    const CutList = [
        [
            "minecraft:stripped_oak_log",
            "naturesaura:gold_fiber",
            "naturesaura:wood_stand"
        ],//木基座

        [
            "minecraft:stone_bricks",
            "naturesaura:gold_fiber",
            "naturesaura:gold_brick"
        ],//黄金石砖

        [
            "minecraft:andesite",
            "minecraft:iron_ingot",
            "create:andesite_alloy"
        ],//安山合金

        [
            "minecraft:andesite",
            "create:zinc_ingot",
            "create:andesite_alloy"
        ],//安山合金
    ]

    CutList.forEach(([ingredients,tool,result])=>
        event.recipes.farmersdelight.cutting(ingredients,tool,result))
})
