ServerEvents.recipes(event=>{
    //暮色锭
    event.shaped(
        "8x kubejs:twilight_ingot",
        ["ABC","DEF","GHI"],
        {
            A:"twilightforest:ironwood_ingot",
            B:"twilightforest:steeleaf_ingot",
            C:"twilightforest:naga_scale",
            D:"twilightforest:knightmetal_ingot",
            E:"kubejs:twilight_holy_grail",
            F:"twilightforest:fiery_ingot",
            G:"twilightforest:arctic_fur",
            H:"twilightforest:alpha_yeti_fur",
            I:"twilightforest:carminite"
        }
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
