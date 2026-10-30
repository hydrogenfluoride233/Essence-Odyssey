const parseImbuementInput = ingredient=>{
    if(typeof ingredient!=="string") return ingredient

    const {count,id}=parseCounted(ingredient)

    return id.startsWith("#") ?
        {"count":count,"item":{"tag":id.substring(1)}} :
        {"count":count,"item":{"item":id}}
}

ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"mmcr:modularium"})    //模块化合金锭
    event.remove({id:"mmcr:basic_casing"})  //基础机器外壳

    //超出本包规模的端口：extended 系列与扩展 ME 接口一律不做（本包用不到这么大的吞吐量）
    const RemovedPorts = [
        "extended_item_input_bus_basic", "extended_item_input_bus_reinforced", "extended_item_input_bus_advanced", "extended_item_input_bus_ultimate",
        "extended_item_output_bus_basic", "extended_item_output_bus_reinforced", "extended_item_output_bus_advanced", "extended_item_output_bus_ultimate",
        "extended_fluid_input_hatch_basic", "extended_fluid_input_hatch_reinforced", "extended_fluid_input_hatch_advanced", "extended_fluid_input_hatch_ultimate",
        "extended_fluid_output_hatch_basic", "extended_fluid_output_hatch_reinforced", "extended_fluid_output_hatch_advanced", "extended_fluid_output_hatch_ultimate",
        "extended_energy_input_hatch_reinforced", "extended_energy_input_hatch_ultimate",
        "extended_energy_output_hatch_reinforced", "extended_energy_output_hatch_ultimate",
        "extended_combined_input_reinforced", "extended_combined_input_advanced", "extended_combined_input_ultimate",
        "extended_combined_output_reinforced", "extended_combined_output_advanced", "extended_combined_output_ultimate",
        "eae_me_extended_input_interface", "eae_me_extended_output_interface", "eae_me_extended_pattern_interface", "eae_me_extended_stocking_input_interface",
        "eae_me_oversize_input_interface", "eae_me_oversize_output_interface", "eae_me_oversize_stocking_input_interface",
        "eaep_me_mirror_pattern_interface"
    ]

    RemovedPorts.forEach(id=>
        event.remove({output:`mmcr:${id}`}))//超大吞吐端口

    
    //工业灌注室
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
                    "stack":toItemStack(output)
                }
            ]
        }).id(`mmcr:industrial_imbuement/${name}`)
    )
})

