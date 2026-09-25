ServerEvents.recipes(event=>{
    //工作台配方
    event.shaped("ae2:logic_processor_press",[
        "GGG",
        "GCG",
        "GGG",
    ],{
        G:"minecraft:gold_ingot",
        C:"ae2:not_so_mysterious_cube"
    })//逻辑压印模板

    event.shaped("ae2:engineering_processor_press",[
        "GGG",
        "GCG",
        "GGG",
    ],{
        G:"minecraft:diamond",
        C:"ae2:not_so_mysterious_cube"
    })//工程压印模板

    event.shaped("ae2:silicon_press",[
        "GGG",
        "GCG",
        "GGG",
    ],{
        G:"ae2:silicon",
        C:"ae2:not_so_mysterious_cube"
    })//硅压印模板

    event.shaped("ae2:calculation_processor_press",[
        "GGG",
        "GCG",
        "GGG",
    ],{
        G:"ae2:certus_quartz_crystal",
        C:"ae2:not_so_mysterious_cube"
    })//运算压印模板

    event.shaped("kubejs:infinity_lava_cell",[
        "CLC",
        "LXL",
        "III"
    ],{
        C:"ae2:quartz_glass",
        L:"minecraft:lava_bucket",
        X:"ae2:cell_component_16k",
        I:"#c:gems/diamond"
    })//无限熔岩元件

    event.replaceInput(
        {id:"extendedae:water_cell"},
        "minecraft:water_bucket",
        "cookingforblockheads:sink"
    )//无限水元件
})
