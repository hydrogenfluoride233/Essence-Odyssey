ServerEvents.recipes(event=>{
    //工业灌注室（MMCR）
    //格式:[输入,输出,魔源,配方名]
    const ImbuementList = [
        [
            "4x kubejs:crystal_aqua",
            "4x ars_nouveau:water_essence",
            4000,"aqua"
        ],//水之精华

        [
            "4x kubejs:crystal_ignis",
            "4x ars_nouveau:fire_essence",
            4000,"ignis"
        ],//火之精华

        [
            "4x kubejs:crystal_terra",
            "4x ars_nouveau:earth_essence",
            4000,"terra"
        ],//土之精华

        [
            "4x kubejs:crystal_aer",
            "4x ars_nouveau:air_essence",
            4000,"aer"
        ],//气之精华

        [
            "4x kubejs:crystal_perditio",
            "4x kubejs:perditio_essence",
            4000,"perditio"
        ],//混沌之精华

        [
            "4x kubejs:crystal_ordo",
            "4x kubejs:ordo_essence",
            4000,"ordo"
        ],//秩序之精华

        [
            "4x immersiveengineering:ingot_electrum",
            "4x ars_nouveau:abjuration_essence",
            4000,"abjuration"
        ],//防护之精华

        [
            "4x immersiveengineering:ingot_constantan",
            "4x ars_nouveau:conjuration_essence",
            4000,"conjuration"
        ],//召唤之精华

        [
            "4x mekanism:ingot_bronze",
            "4x ars_nouveau:manipulation_essence",
            4000,"manipulation"
        ],//操纵之精华

        [
            "4x eternal_starlight:soul_dew",
            "4x sauce:anima_essence",
            4000,"anima"
        ],//灵魂之精华
    ]

    //把 "4x 物品id" 拆成 {id,count}：输出走 ItemStack 编码器，不认 KubeJS 的 4x 简写
    const stack = s=>{
        const m = /^(\d+)x (.+)$/.exec(s)
        return m ? { id: m[2], count: +m[1] } : { id: s, count: 1 }
    }

    ImbuementList.forEach(([input,output,source,name])=>
        event.custom({
            type: "mmcr:machine_recipe",
            recipe_pool: "mmcr:industrial_imbuement",
            tick_time: 40,
            requirements: [
                {
                    type: "minecraft:item",
                    io: "input",
                    item: input
                },
                {
                    type: "ars_nouveau:source",
                    io: "input",
                    amount: source
                },
                {
                    type: "minecraft:item",
                    io: "output",
                    stack: stack(output)
                }
            ]
        }).id(`mmcr:industrial_imbuement/${name}`)
    )
})
