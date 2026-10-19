ServerEvents.recipes(event=>{
    //暮色锭
    event.shapeless(
        "kubejs:twilight_ingot",
        [
            "twilightforest:ironwood_ingot",
            "twilightforest:steeleaf_ingot",
            "twilightforest:naga_scale",
            "twilightforest:knightmetal_ingot",
            "kubejs:twilight_holy_grail",
            "twilightforest:fiery_ingot",
            "twilightforest:arctic_fur",
            "twilightforest:alpha_yeti_fur",
            "twilightforest:carminite"
        ]
    ).keepIngredient("kubejs:twilight_holy_grail")

    //暮色奖杯NBT清除
    const TrophyList = [
        "twilightforest:naga_trophy",//娜迦奖杯
        "twilightforest:lich_trophy",//巫妖奖杯
        "twilightforest:minoshroom_trophy",//米诺菇奖杯
        "twilightforest:hydra_trophy",//九头蛇奖杯
        "twilightforest:knight_phantom_trophy",//幻影骑士奖杯
        "twilightforest:ur_ghast_trophy",//暮初恶魂奖杯
        "twilightforest:alpha_yeti_trophy",//雪怪首领奖杯
        "twilightforest:snow_queen_trophy",//冰雪女王奖杯
        "twilightforest:quest_ram_trophy"//谜题羊奖杯
    ]

    TrophyList.forEach(trophy=>
        event.shapeless(trophy,[trophy])
    )

})
