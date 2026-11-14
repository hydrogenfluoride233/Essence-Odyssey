ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:occultism/ritual/"

    //符文祭坛：元始符文
    const basicRunes = [
        {
            ess:"aqua",
            input:["minecraft:sugar_cane","minecraft:bone_meal","minecraft:fishing_rod","ars_nouveau:water_essence"],
        },
        {
            ess:"ignis",
            input:["minecraft:nether_brick","minecraft:nether_wart","minecraft:gunpowder","ars_nouveau:fire_essence"],
        },
        {
            ess:"terra",
            input:["minecraft:stone","minecraft:brown_mushroom","minecraft:coal_block","ars_nouveau:earth_essence"],
        },
        {
            ess:"aer",
            input:["minecraft:feather","minecraft:string","#minecraft:wool_carpets","ars_nouveau:air_essence"],
        },
        {
            ess:"perditio",
            input:["minecraft:cobblestone","minecraft:flint_and_steel","minecraft:cactus","kubejs:perditio_essence"],
        },
        {
            ess:"ordo",
            input:["minecraft:chiseled_stone_bricks","minecraft:quartz","minecraft:pink_petals","kubejs:ordo_essence"],
        },
    ]

    basicRunes.forEach(rune=>
        event.recipes.occultism.ritual(
            `3x kubejs:rune_${rune.ess}`,
            rune.input.concat(["naturesaura:sky_ingot","occultism:amethyst_dust",`kubejs:crystal_${rune.ess}`]),
            "ars_nouveau:smooth_sourcestone",
            "occultism:ritual_rune",
            10
        )
        .ritualDummy("kubejs:ritual_rune")
        .id(`${id_prefix}rune_${rune.ess}`))

    //季相符文
    const seasonRunes = [
        {
            season:"spring",
            input:["minecraft:wheat","#minecraft:saplings","#minecraft:saplings","#minecraft:saplings"],
            ess:["aqua","ignis","ordo"],
        },
        {
            season:"summer",
            input:["#c:sands","#c:sands","minecraft:slime_ball","minecraft:melon_slice"],
            ess:["terra","aer","perditio"],
        },
        {
            season:"autumn",
            input:["minecraft:spider_eye","#minecraft:leaves","#minecraft:leaves","#minecraft:leaves"],
            ess:["ignis","aer","ordo"],
        },
        {
            season:"winter",
            input:["minecraft:cake","minecraft:snow_block","minecraft:snow_block","#minecraft:wool"],
            ess:["aqua","terra","perditio"],
        },
    ]

    seasonRunes.forEach(rune=>
        event.recipes.occultism.ritual(
            `2x kubejs:rune_${rune.season}`,
            rune.input.concat([`kubejs:rune_${rune.ess[0]}`,`kubejs:rune_${rune.ess[1]}`,`kubejs:rune_${rune.ess[2]}`]),
            "ars_nouveau:smooth_sourcestone",
            "occultism:ritual_rune",
            10
        )
        .ritualDummy("kubejs:ritual_rune")
        .id(`${id_prefix}rune_${rune.season}`))

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
        )
        .ritualDummy("kubejs:ritual_rune")
        .id(`${id_prefix}${i}_starlight_crystal_cluster`))

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
                "ars_technica:gargantuan_experience_gem",
            ],
            i,
            "occultism:ritual_rune",
            30
        )
        .ritualDummy("kubejs:ritual_rune")
        .id(`${id_prefix}${i.split(":")[1]}`))

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
        )
        .ritualDummy("kubejs:ritual_rune")
        .id(`${id_prefix}blooming_${i}_starlight_crystal_cluster`))
})
