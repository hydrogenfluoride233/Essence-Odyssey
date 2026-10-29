ServerEvents.recipes(event=>{
    //砧板
    //格式:[输入,工具,输出]
    //砧板的「工具」按 Farmer's Delight 的设计不消耗（有耐久的只掉耐久），
    //会白嫖材料的配方不放这里：木基座／黄金石砖改走 lychee.js 的方块交互，
    //安山合金改成下面的无序合成。
    const CutList = [
    ]

    CutList.forEach(([ingredients,tool,result])=>
        event.recipes.farmersdelight.cutting(ingredients,tool,result))

    event.shapeless("create:andesite_alloy",[
        "minecraft:andesite",
        "minecraft:iron_ingot"
    ])//安山合金（铁）

    event.shapeless("create:andesite_alloy",[
        "minecraft:andesite",
        "create:zinc_ingot"
    ])//安山合金（锌）
})
