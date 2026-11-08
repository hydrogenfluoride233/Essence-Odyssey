ServerEvents.recipes(event=>{
    //工业灌注室
    //格式:[输入,输出,魔源]；id 按配方池自动编号
    const ImbuementList = [
        [
            "4x kubejs:crystal_aqua",
            "4x ars_nouveau:water_essence",
            4000
        ],//水之精华

        [
            "4x kubejs:crystal_ignis",
            "4x ars_nouveau:fire_essence",
            4000
        ],//火之精华

        [
            "4x kubejs:crystal_terra",
            "4x ars_nouveau:earth_essence",
            4000
        ],//土之精华

        [
            "4x kubejs:crystal_aer",
            "4x ars_nouveau:air_essence",
            4000
        ],//气之精华

        [
            "4x kubejs:crystal_perditio",
            "4x kubejs:perditio_essence",
            4000
        ],//混沌之精华

        [
            "4x kubejs:crystal_ordo",
            "4x kubejs:ordo_essence",
            4000
        ],//秩序之精华

        [
            "4x immersiveengineering:ingot_electrum",
            "4x ars_nouveau:abjuration_essence",
            4000
        ],//防护之精华

        [
            "4x immersiveengineering:ingot_constantan",
            "4x ars_nouveau:conjuration_essence",
            4000
        ],//召唤之精华

        [
            "4x mekanism:ingot_bronze",
            "4x ars_nouveau:manipulation_essence",
            4000
        ],//操纵之精华

        [
            "4x eternal_starlight:soul_dew",
            "4x sauce:anima_essence",
            4000
        ],//灵魂之精华

        [
            "8x minecraft:amethyst_shard",
            "8x ars_nouveau:source_gem",
            4000
        ],//魔源宝石

        [
            "8x minecraft:lapis_lazuli",
            "8x ars_nouveau:source_gem",
            4000
        ],//魔源宝石

        [
            "2x minecraft:amethyst_block",
            "2x ars_nouveau:source_gem_block",
            4000
        ],//魔源宝石块

    ]

    ImbuementList.forEach(([input,output,source])=>
        mmcrImbuement(event,input,output,source))

    //封装森林仪式：
    //格式:[输出,原料数组,树苗]；4 份金叶粉与耗电自动补，id 按配方池自动编号
    const PackagedList = [
        [
            "4x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:overworld'}]",
            [
                "4x naturesaura:bottle_two_the_rebottling",
                "4x kubejs:crystal_aqua"
            ],
            "integrateddynamics:menril_sapling"
        ],//瓶装阳光

        [
            "4x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:nether'}]",
            [
                "4x naturesaura:bottle_two_the_rebottling",
                "4x kubejs:crystal_ignis"
            ],
            "integrateddynamics:menril_sapling"
        ],//瓶装鬼魂

        [
            "4x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:twilight_forest'}]",
            [
                "4x naturesaura:bottle_two_the_rebottling",
                "4x kubejs:crystal_terra"
            ],
            "integrateddynamics:menril_sapling"
        ],//瓶装暮光

        [
            "4x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:aether'}]",
            [
                "4x naturesaura:bottle_two_the_rebottling",
                "4x kubejs:crystal_aer"
            ],
            "integrateddynamics:menril_sapling"
        ],//瓶装曙光

        [
            "4x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:end'}]",
            [
                "4x naturesaura:bottle_two_the_rebottling",
                "4x kubejs:crystal_perditio"
            ],
            "integrateddynamics:menril_sapling"
        ],//瓶装黑暗

        [
            "4x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:starlight'}]",
            [
                "4x naturesaura:bottle_two_the_rebottling",
                "4x kubejs:crystal_ordo"
            ],
            "integrateddynamics:menril_sapling"
        ],//瓶装星光
    ]

    PackagedList.forEach(([output,input,sapling])=>
        packagedTreeRitual(event,output,input,sapling))
})

