ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"eternal_starlight:alloy/unrealium"})//虚素锭
    event.remove({id:"eternal_starlight:thioquartz_block"})//石英硫块

    //工作台配方
    event.shapeless(
        "eternal_starlight:thioquartz_block",
        [
            "eternal_starlight:thioquartz_shard",
            "eternal_starlight:thioquartz_shard",
            "eternal_starlight:thioquartz_shard",
            "eternal_starlight:thioquartz_shard"
        ]
    )//石英硫块

    //合金炉
    event.custom({
        "type":"eternal_starlight:alloy",
        "burn_time":400,
        "ingredients":[
            {"tag":"c:ingots/deepsilver"},
            {"tag":"c:ingots/golem_steel"},
            {"tag":"c:ingots/aethersent"},
            {"tag":"c:gems/starcore"},
            {"tag":"c:gems/malarite"},
            {"tag":"c:gems/starlit_diamond"},
            {"tag":"eternal_starlight:lunar_left"},
            {"item":"eternal_starlight:starfire"},
            {"item":"eternal_starlight:soul_dew"}
        ],
        "results":[
            {"amount":1,"item":{"id":"eternal_starlight:unrealium_ingot"}}
        ]
    })

    //石英硫母岩
    event.custom({
        type:"ars_nouveau:budding_conversion",
        input:"eternal_starlight:thioquartz_block",
        result:"eternal_starlight:budding_thioquartz"
    })

    event.custom({
        type:"occultism:crystallize",
        ignore_crystallize_multiplier: true,
        ingredient:{
            item:"eternal_starlight:thioquartz_cluster"
        },
        min_tier:4,
        result:{
            type:"occultism:item",
            count:1,
            id:"eternal_starlight:budding_thioquartz"
        }
    })

    //通用永恒星光预测产物相关
    const eternalStarlightConversions = [
        ["minecraft:stone", "eternal_starlight:grimstone"],
        ["minecraft:cobblestone", "eternal_starlight:cobbled_grimstone"],
        ["minecraft:dirt", "eternal_starlight:nightfall_dirt"],
        ["minecraft:mud", "eternal_starlight:nightfall_mud"],
        ["minecraft:sand", "eternal_starlight:twilight_sand"],
        ["minecraft:deepslate", "eternal_starlight:voidstone"],
        ["minecraft:cobbled_deepslate", "eternal_starlight:cobbled_voidstone"],
        ["minecraft:gravel", "eternal_starlight:dusted_gravel"],
    ]

    eternalStarlightConversions.forEach(([input, output]) => {
        event.shaped(
            `8x ${output}`,
            [
                "BBB",
                "BPB",
                "BBB"
            ],
            {
                B: input,
                P: "kubejs:eternal_starlight_prediction"
            }
        )
    })
})
