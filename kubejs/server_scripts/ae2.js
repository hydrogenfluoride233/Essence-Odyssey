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

    //世界交互-爆炸
    //格式:[输入,输出]
    const ExplosionList = [
        ["minecraft:raw_iron_block","ae2:item_storage_cell_1k"],            //1k物品存储元件
        ["minecraft:raw_copper_block","ae2:fluid_storage_cell_1k"],         //1k流体存储元件
        ["ae2:fluix_crystal","ae2:fluix_glass_cable"],                      //线缆
        ["sophisticatedstorage:diamond_chest","ae2:drive"],                 //ME驱动器
        ["sophisticatedbackpacks:crafting_upgrade","ae2:crafting_terminal"] //ME合成终端
    ]

    ExplosionList.forEach(([input,output])=>
        AE2Recipes.transformExplosion(event,[input,"kubejs:unknown_mixture"],output,1))
})
