ServerEvents.recipes(event => {
    //石英硫母岩
    event.custom({
        type: "ars_nouveau:budding_conversion",
        input: "eternal_starlight:thioquartz_block",
        result: "eternal_starlight:budding_thioquartz"
    })

    event.custom({
        type: "occultism:crystallize",
        ignore_crystallize_multiplier: true,
        ingredient: {
            item: "eternal_starlight:thioquartz_cluster"
        },
        min_tier: 4,
        result: {
            type: "occultism:item",
            count: 1,
            id: "eternal_starlight:budding_thioquartz"
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
