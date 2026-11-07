const pentacleSymbols = {
    mid:        { type: "modonomicon:tag", display: "occultism:golden_sacrificial_bowl", tag: "#occultism:center_sacrificial_bowl"},
    white:      { type: "modonomicon:tag", display: "occultism:chalk_glyph_white",       tag: "#occultism:foundation_glyphs_any"},
    light_grey: { type: "modonomicon:tag", display: "occultism:chalk_glyph_light_grey",  tag: "#occultism:foundation_glyphs_no_white"},
    grey:       { type: "modonomicon:tag", display: "occultism:chalk_glyph_grey",        tag: "#occultism:foundation_glyphs_dark"},
    black:      { type: "modonomicon:tag", display: "occultism:chalk_glyph_black",       tag: "#occultism:glyphs_black"},
    brown:      { type: "modonomicon:tag", display: "occultism:chalk_glyph_brown",       tag: "#occultism:glyphs_brown"},
    red:        { type: "modonomicon:tag", display: "occultism:chalk_glyph_red",         tag: "#occultism:glyphs_red"},
    orange:     { type: "modonomicon:tag", display: "occultism:chalk_glyph_orange",      tag: "#occultism:glyphs_orange"},
    gold:       { type: "modonomicon:tag", display: "occultism:chalk_glyph_gold",        tag: "#occultism:glyphs_yellow"},
    lime:       { type: "modonomicon:tag", display: "occultism:chalk_glyph_lime",        tag: "#occultism:glyphs_lime"},
    green:      { type: "modonomicon:tag", display: "occultism:chalk_glyph_green",       tag: "#occultism:glyphs_green"},
    cyan:       { type: "modonomicon:tag", display: "occultism:chalk_glyph_cyan",        tag: "#occultism:glyphs_cyan"},
    light_blue: { type: "modonomicon:tag", display: "occultism:chalk_glyph_light_blue",  tag: "#occultism:glyphs_light_blue"},
    blue:       { type: "modonomicon:tag", display: "occultism:chalk_glyph_blue",        tag: "#occultism:glyphs_blue"},
    purple:     { type: "modonomicon:tag", display: "occultism:chalk_glyph_purple",      tag: "#occultism:glyphs_purple"},
    magenta:    { type: "modonomicon:tag", display: "occultism:chalk_glyph_magenta",     tag: "#occultism:glyphs_magenta"},
    pink:       { type: "modonomicon:tag", display: "occultism:chalk_glyph_pink",        tag: "#occultism:glyphs_pink"},
    crystal:    { type: "modonomicon:block", block: "occultism:spirit_attuned_crystal"},
    candle:     { type: "modonomicon:tag",     tag: "#minecraft:candles"}
}

function generatePentacleEntry(ritual_name, x_placement, y_placement, parents, icon) {
    return {
        name: ritual_name,
        background_u_index: 0,
        background_v_index: 0,
        category: "pentacles",
        condition: { type: "modonomicon:none" },
        description: "",
        hide_while_locked: false,
        icon: { item: `${icon}` },
        name: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.name`,
        pages: [
            {
                type: "modonomicon:text",
                anchor: "",
                show_title_separator: true,
                text: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.text`,
                title: `book.occultism.dictionary_of_spirits.pentacles.${ritual_name}.intro.title`,
                use_markdown_in_title: false
            },
            {
                type: "modonomicon:multiblock",
                anchor: "",
                multiblock_id: `occultism:${ritual_name}`,
                multiblock_name: "",
                show_visualize_button: true,
                text: ""
            }
        ],
        parents: parents,
        x: x_placement,
        y: y_placement
    }
}

ServerEvents.tags("block",event=>{
    event.add("occultism:pentacle_materials",
        [
            "minecraft:obsidian",
            "naturesaura:infused_stone",
            "minecraft:lapis_block",
            "integrateddynamics:crystalized_menril_brick",
            "minecraft:stone_bricks",
        ])
    })

ServerEvents.tags("item",event=>{
    event.add("occultism:pentacle_materials",
        [
            "minecraft:obsidian",
            "naturesaura:infused_stone",
            "minecraft:lapis_block",
            "integrateddynamics:crystalized_menril_brick",
            "minecraft:stone_bricks",
        ])
    })

ServerEvents.generateData("after_mods",event=>{
    const pentacles = [
        {
            name: "ritual_rune",
            icon: "kubejs:rune_spring",
            mapping: {
                "0":pentacleSymbols.mid,
                "1":pentacleSymbols.gold,
                "2":pentacleSymbols.white,
                "s":pentacleSymbols.crystal,
                "c":pentacleSymbols.candle,
                "o":{type:"modonomicon:block",block:"minecraft:obsidian"},
                "i":{type:"modonomicon:block",block:"naturesaura:infused_stone"},
                "l":{type:"modonomicon:block",block:"minecraft:lapis_block"},
                "b":{type:"modonomicon:block",block:"integrateddynamics:crystalized_menril_brick"},
                "k":{type:"modonomicon:block",block:"minecraft:stone_bricks"}
            },
            pattern: [                       
                ["c_____c","_______","_______","_______","_______","_______","c_____c"],
                ["k22222k","22___22","2_s1s_2","2_101_2","2_s1s_2","22___22","k22222k"],
                ["koooook","oollloo","olbiblo","olibilo","olbiblo","oollloo","koooook"]
            ],
            x_placement: -12,                // 词典页面X位置，值越大越靠右
            y_placement: -8,                 // 词典页面Y位置，值越大越靠下
            parents: [                     
                {
                    draw_arrow: false,
                    entry: "pentacles/pentacle_overview",
                    line_enabled: false,
                    line_reversed: false
                }
            ]
        },//符文祭坛
    ]

    pentacles.forEach((pentacle) => {
        pentacle.type = "modonomicon:dense"
        let ground = []
        let pattern = pentacle.pattern[0]
        for (let i = 0; i < pattern.length; i++) {
            let row = ""
            for (let j = 0; j < pattern[i].length; j++) {
                row += (i + j) % 2 == 0 ? "*" : "+"
            }
            ground.push(row)
        }
        pentacle.pattern.push(ground);
        pentacle.mapping["*"] = { type: "modonomicon:display", display: "occultism:otherstone" }
        pentacle.mapping["+"] = { type: "modonomicon:display", display: "minecraft:stone" }
        const multiblockPath = `occultism:modonomicon/multiblocks/${pentacle.name}.json`
        const entryPath = `occultism:modonomicon/books/dictionary_of_spirits/entries/pentacles/${pentacle.name}.json`
        event.json(multiblockPath, pentacle)
        event.json(entryPath, generatePentacleEntry(pentacle.name,pentacle.x_placement,pentacle.y_placement,pentacle.parents,pentacle.icon))
    })

    console.log(`[Occultism] 已生成 ${pentacles.length} 个自定义仪式！`)
})

ServerEvents.recipes(event=>{
    //符文祭坛
    const BasicRuneList = [
        ["aqua","minecraft:sugar_cane","minecraft:bone_meal","minecraft:fishing_rod","ars_nouveau:water_essence","1"],
        ["ignis","minecraft:nether_brick","minecraft:nether_wart","minecraft:gunpowder","ars_nouveau:fire_essence","2"],
        ["terra","minecraft:stone","minecraft:brown_mushroom","minecraft:coal_block","ars_nouveau:earth_essence","3"],
        ["aer","minecraft:feather","minecraft:string","#minecraft:wool_carpets","ars_nouveau:air_essence","4"],
        ["perditio","minecraft:cobblestone","minecraft:flint_and_steel","minecraft:cactus","kubejs:perditio_essence","5"],
        ["ordo","minecraft:chiseled_stone_bricks","minecraft:quartz","minecraft:pink_petals","kubejs:ordo_essence","6"]
    ]

    BasicRuneList.forEach(([ess,ing1,ing2,ing3,ing4])=>{
        event.recipes.occultism.ritual(
            `3x kubejs:rune_${ess}`,
            [ing1,ing2,ing3,ing4,"naturesaura:sky_ingot","occultism:amethyst_dust",`kubejs:crystal_${ess}`],
            "ars_nouveau:smooth_sourcestone",
            "occultism:ritual_rune",
            10
        ).ritualDummy("kubejs:ritual_rune")
    })

    const SeasonRuneList = [
        ["spring","minecraft:wheat","#minecraft:saplings","#minecraft:saplings","#minecraft:saplings","aqua","ignis","ordo","7"],
        ["summer","#c:sands","#c:sands","minecraft:slime_ball","minecraft:melon_slice","terra","aer","perditio","8"],
        ["autumn","minecraft:spider_eye","#minecraft:leaves","#minecraft:leaves","#minecraft:leaves","ignis","aer","ordo","9"],
        ["winter","minecraft:cake","minecraft:snow_block","minecraft:snow_block","#minecraft:wool","aqua","terra","perditio","10"]
    ]

    SeasonRuneList.forEach(([sea,ing1,ing2,ing3,ing4,ess1,ess2,ess3])=>{
        event.recipes.occultism.ritual(
            `2x kubejs:rune_${sea}`,
            [ing1,ing2,ing3,ing4,`kubejs:rune_${ess1}`,`kubejs:rune_${ess2}`,`kubejs:rune_${ess3}`],
            "ars_nouveau:smooth_sourcestone",
            "occultism:ritual_rune",
            10
        ).ritualDummy("kubejs:ritual_rune")
    })

    //永恒星光水晶：原星辉祭坛的配方，暂挂在符文祭坛下
    const CrystalList = ["red","blue"]

    CrystalList.forEach(i=>
        event.recipes.occultism.ritual(
            `2x eternal_starlight:${i}_starlight_crystal_cluster`,
            [
                `eternal_starlight:${i}_starlight_crystal_shard`,
                `eternal_starlight:${i}_starlight_crystal_shard`,
                `eternal_starlight:${i}_starlight_crystal_shard`,
                `eternal_starlight:${i}_starlight_crystal_shard`,
            ],
            "minecraft:amethyst_cluster",
            "occultism:ritual_rune",
            20
        ).ritualDummy("kubejs:ritual_rune")
    )

    //魔晶碎片：原星辉祭坛的配方，暂挂在符文祭坛下
    const ShardList = Ingredient.of("#ars_nouveau:magic_shards").itemIds

    ShardList.forEach(i=>
        event.recipes.occultism.ritual(
            `2x ${i}`,
            [
                "ars_technica:gargantuan_experience_gem",
                "ars_technica:gargantuan_experience_gem",
                "ars_technica:gargantuan_experience_gem",
                "ars_technica:gargantuan_experience_gem",
                "ars_technica:gargantuan_experience_gem",
                "ars_technica:gargantuan_experience_gem",
                "ars_technica:gargantuan_experience_gem",
                "ars_technica:gargantuan_experience_gem",
                "ars_technica:gargantuan_experience_gem",
                "ars_technica:gargantuan_experience_gem",
                "ars_technica:gargantuan_experience_gem",
                "ars_technica:gargantuan_experience_gem"
            ],
            i,
            "occultism:ritual_rune",
            30
        ).ritualDummy("kubejs:ritual_rune")
    )

    //绽放水晶：原天辉祭坛的配方，暂挂在符文祭坛下
    CrystalList.forEach(i=>
        event.recipes.occultism.ritual(
            `2x eternal_starlight:blooming_${i}_starlight_crystal_cluster`,
            [
                `eternal_starlight:${i}_starlight_crystal_cluster`,
                `eternal_starlight:${i}_starlight_crystal_cluster`,
                `eternal_starlight:${i}_starlight_crystal_cluster`,
                `eternal_starlight:${i}_starlight_crystal_cluster`
            ],
            "eternal_starlight:shivering_gel",
            "occultism:ritual_rune",
            20
        ).ritualDummy("kubejs:ritual_rune")
    )
})
