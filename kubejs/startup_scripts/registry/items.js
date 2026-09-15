StartupEvents.registry("item",event=>{
    //倍矿中间物
    const metals = ["zinc","iesnium","nickel","aluminum"]
    const forms = ["crystal","clump","shard","dirty_dust"]
    metals.forEach(m=>{
        forms.forEach(f=>
            event.create(`kubejs:${f}_${m}`))
    })

    //板材
    const sheets = ["osmium","tin","iesnium"]
    sheets.forEach(i=>
        event.create(`kubejs:${i}_sheet`)
    )

    //符文
    const runes = ["aqua","ignis","terra","aer","perditio","ordo","spring","summer","autumn","winter"]
    runes.forEach(i=>
        event.create(`kubejs:rune_${i}`)
             .rarity("uncommon")
    )

    //水晶粉
    const actuallyAdditionsCrystalDusts = ["restonia","palis","diamatine","void","enori","emeradic"]
    actuallyAdditionsCrystalDusts.forEach(crystal=>
        event.create(`kubejs:empowered_${crystal}_crystal_dust`)
    )

    //仪式假人（名称与提示走 lang 文件，见 assets/kubejs/lang）
    const rune_rituals = ["rune","astral_1","astral_2","astral_3","tree","nature"]
    rune_rituals.forEach(num=>
        event.create(`kubejs:ritual_${num}`,"occultism_kubejs:ritual_dummy")
             .pentacleType("craft")
             .ritualTooltip(Text.translate(`item.kubejs.ritual_${num}.tooltip`))
    )

    //精华
    event.create("kubejs:perditio_essence")
         .tooltip(Text.translate("item.kubejs.perditio_essence.tooltip"))
    event.create("kubejs:ordo_essence")
         .tooltip(Text.translate("item.kubejs.ordo_essence.tooltip"))

    //印记
    event.create("kubejs:token_confusion")
    event.create("kubejs:token_serenity")
    event.create("kubejs:token_delirium")
    event.create("kubejs:token_equanimity")

    //其他
    event.create("kubejs:essence_coenzyme").rarity("uncommon")
    event.create("kubejs:essence_enzyme").rarity("epic").glow(true)
    event.create("kubejs:crushed_raw_iesnium")
    event.create("kubejs:sky_stone_mainboard")
    event.create("kubejs:arcane_wafer")
    event.create("kubejs:aura_diode")
    event.create("kubejs:source_amplifier")
    event.create("kubejs:energy_capacitor")
    event.create("kubejs:calibration_gel")
    event.create("kubejs:star_dust").rarity("rare")
    event.create("kubejs:star_ingot").rarity("rare")
    event.create("kubejs:twilight_holy_grail").rarity("epic").glow(true)
         .tooltip(Text.translate("item.kubejs.twilight_holy_grail.tooltip"))
    event.create("kubejs:twilight_ingot").rarity("uncommon").glow(true)
    event.create("kubejs:aether_prediction")
    event.create("kubejs:eternal_starlight_prediction") 
    event.create("kubejs:infinity_lava_cell","extendedae:custom_infinity_cell")
         .fluidType("minecraft:lava")
    event.create("kubejs:paradox_collapser").rarity("epic")
    event.create("kubejs:perditio_scribe_tool").maxStackSize(1)
         .tooltip(Text.translate("tooltip.neovitae.inscriber.desc"))  //提示直接引用 NeoVitae 原文，不自己维护副本
    event.create("kubejs:ordo_scribe_tool").maxStackSize(1)
         .tooltip(Text.translate("tooltip.neovitae.inscriber.desc"))

})
