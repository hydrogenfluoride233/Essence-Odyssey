const parseImbuementInput = ingredient=>{                       //"4x 物品id" / "4x #标签" → MMCR 的 Ingredient 形状
    if(typeof ingredient!=="string") return ingredient

    const match=ingredient.match(/^(\d+)x\s+(.+)$/)
    const count=match ? parseInt(match[1]) : 1
    const id=match ? match[2] : ingredient

    return id.startsWith("#") ?
        {"count":count,"item":{"tag":id.substring(1)}} :
        {"count":count,"item":{"item":id}}
}

const parseImbuementOutput = result=>{                          //"4x 物品id" → {id,count}（走 ItemStack 编码器）
    if(typeof result!=="string") return result

    const match=result.match(/^(\d+)x\s+(.+)$/)
    return {
        "count":match ? parseInt(match[1]) : 1,
        "id":match ? match[2] : result
    }
}

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

    ImbuementList.forEach(([input,output,source,name])=>
        event.custom({
            "type":"mmcr:machine_recipe",
            "recipe_pool":"mmcr:industrial_imbuement",
            "tick_time":40,
            "parallelized":true,
            "requirements":[
                Object.assign(
                    {
                        "type":"minecraft:item",
                        "io":"input"
                    },
                    parseImbuementInput(input)          //{count, item:{item|tag}}
                ),
                {
                    "type":"ars_nouveau:source",
                    "io":"input",
                    "amount":source
                },
                {
                    "type":"minecraft:item",
                    "io":"output",
                    "stack":parseImbuementOutput(output)
                }
            ]
        }).id(`mmcr:industrial_imbuement/${name}`)
    )//灌注
})
