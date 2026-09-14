ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"enderio:sag_milling/ender_pearl"})    //末影珍珠粉
    event.remove({id:"enderio:void_chassis"})               //虚空框架
    
    //合金烧炼
    //格式:[输出,输入,能量]
    const SmeltList = [
        [
            "2x immersiveengineering:ingot_electrum",
            [
                "minecraft:gold_ingot",
                "occultism:silver_ingot"
            ],
            5000
        ],//琥珀金

        [
            "2x create:brass_ingot",
            [
                "minecraft:copper_ingot",
                "create:zinc_ingot"
            ],
            5000
        ],//黄铜

        [
            "2x create:andesite_alloy",
            [
                "minecraft:iron_nugget",
                "minecraft:andesite"
            ],
            5000
        ],//安山合金

        [
            "2x create:andesite_alloy",
            [
                "create:zinc_nugget",
                "minecraft:andesite"
            ],
            5000
        ],//安山合金

        [
            "4x mekanism:ingot_bronze",
            [
                "3x minecraft:copper_ingot",
                "mekanism:ingot_tin"
            ],
            5000
        ],//青铜

        [
            "2x immersiveengineering:ingot_constantan",
            [
                "minecraft:copper_ingot",
                "immersiveengineering:ingot_nickel"
            ],
            5000
        ],//康铜

        [
            "8x naturesaura:gold_fiber",
            [
                "4x minecraft:gold_ingot",
                "4x #minecraft:leaves"
            ],
            1000
        ],//闪耀纤维

    ]

    SmeltList.forEach(([output,input,energy])=>
        event.recipes.enderio.alloy_smelting(output,input,energy))

    //半自磨机碾碎
    //格式:[输出,输入,概率副产物]
    //副产物不需要时填null,0仅影响副产物概率,1同时影响产物数量和副产物概率
    const SAGList = [
        ["4x naturesaura:gold_powder","naturesaura:gold_leaf"],
        ["kubejs:empowered_restonia_crystal_dust","actuallyadditions:empowered_restonia_crystal"],
        ["kubejs:empowered_palis_crystal_dust","actuallyadditions:empowered_palis_crystal"],
        ["kubejs:empowered_diamatine_crystal_dust","actuallyadditions:empowered_diamatine_crystal"],
        ["kubejs:empowered_void_crystal_dust","actuallyadditions:empowered_void_crystal"],
        ["kubejs:empowered_enori_crystal_dust","actuallyadditions:empowered_enori_crystal"],
        ["kubejs:empowered_emeradic_crystal_dust","actuallyadditions:empowered_emeradic_crystal"],
    ]

    const SAGBonus = [SagMillBonus.CHANCE_ONLY,SagMillBonus.MULTIPLY_OUTPUT]

    SAGList.forEach(([output,input,bonus])=>
        event.recipes.enderio.sag_milling(output,input,2400,bonus===undefined ? SagMillBonus.NONE : SAGBonus[bonus])
    )

    //齿轮
    event.replaceInput("enderio:dark_bimetal_gear","industrialforegoing:iron_gear","enderio:iron_gear")
    event.replaceInput("enderio:energized_gear","industrialforegoing:iron_gear","enderio:iron_gear")
})
