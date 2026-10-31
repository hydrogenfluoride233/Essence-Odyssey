ServerEvents.recipes(event=>{
    //配方移除
    const RemoveList = [
        "mmcr:modularium",                  //模块化合金锭
        "mmcr:basic_casing",                //基础机器外壳
        "mmcr:factory_controller",          //工厂控制器
        "mmcr:thread_disperser",            //线程撕裂者
        "mmcr:parallel_controller_normal",  //并行器
        "mmcr:parallel_controller_plus",
        "mmcr:parallel_controller_reinforced"
    ]

    RemoveList.forEach(id=>event.remove({id}))

    //端口统一形状：A / BCB / DBD —— A 顶部材料、B 模块化合金锭、C 上一档、D 容器
    const PortList = [
        {
            prefix: "item",
            form: "bus",
            top: "minecraft:hopper",
            tiers: [
                {suffix: "",            store: "#c:chests"},
                {suffix: "_reinforced", store: "mekanism:basic_bin"},
                {suffix: "_big",        store: "mekanism:advanced_bin"},
                {suffix: "_huge",       store: "mekanism:elite_bin"},
                {suffix: "_ludicrous",  store: "mekanism:ultimate_bin"}
            ]
        },
        {
            prefix: "fluid",
            form: "hatch",
            top: "minecraft:hopper",
            tiers: [
                {suffix: "",            store: "minecraft:bucket"},
                {suffix: "_reinforced", store: "mekanism:basic_fluid_tank"},
                {suffix: "_big",        store: "mekanism:advanced_fluid_tank"},
                {suffix: "_huge",       store: "mekanism:elite_fluid_tank"},
                {suffix: "_ludicrous",  store: "mekanism:ultimate_fluid_tank"}
            ]
        },
        {
            prefix: "energy",
            form: "hatch",
            top: "immersiveengineering:capacitor_hv",
            tiers: [
                {suffix: "",            store: "minecraft:redstone_block"},
                {suffix: "_reinforced", store: "mekanism:basic_energy_cube"},
                {suffix: "_big",        store: "mekanism:advanced_energy_cube"},
                {suffix: "_huge",       store: "mekanism:elite_energy_cube"},
                {suffix: "_ludicrous",  store: "mekanism:ultimate_energy_cube"}
            ]
        },
        {
            prefix: "chemical",
            form: "hatch",
            top: "minecraft:hopper",
            tiers: [
                {suffix: "_basic",    store: "mekanism:basic_chemical_tank"},
                {suffix: "_advanced", store: "mekanism:advanced_chemical_tank"},
                {suffix: "_elite",    store: "mekanism:elite_chemical_tank"},
                {suffix: "_ultimate", store: "mekanism:ultimate_chemical_tank"}
            ]
        },
        {
            prefix: "ars_source",
            form: "interface",
            top: "ars_nouveau:source_gem",
            tiers: [
                {suffix: "", store: "ars_nouveau:source_jar"}
            ]
        },
        {
            prefix: "create_stress",
            form: "interface",
            top: "create:precision_mechanism",
            tiers: [
                {suffix: "", store: "create:encased_chain_drive"}
            ]
        },
        {
            prefix: "pneumaticcraft_air",
            form: "interface",
            top: "pneumaticcraft:ingot_iron_compressed",
            tiers: [
                {suffix: "", store: "pneumaticcraft:reinforced_air_canister_array"}
            ]
        },
        {
            prefix: "radioactive_chemical",
            form: "hatch",
            top: "#c:ingots/lead",
            tiers: [
                {suffix: "", store: "megacells:radioactive_cell_component"}
            ]
        },
        {
            prefix: "ae2_me",
            form: "interface",
            top: "ae2:interface",
            tiers: [
                {suffix: "", store: "ae2:logic_processor"}
            ]
        },
        {
            prefix: "appflux_me_flux",
            form: "interface",
            top: "appflux:flux_accessor",
            tiers: [
                {suffix: "", store: "appflux:energy_processor"}
            ]
        },
        {
            prefix: "heat",
            form: "hatch",
            top: "pneumaticcraft:vortex_tube",
            tiers: [
                {suffix: "", store: "mekanism:superheating_element"}
            ]
        }
    ]

    PortList.forEach(family=>{
        family.tiers.forEach((tier,index)=>{
            const input = `mmcr:${family.prefix}_input_${family.form}${tier.suffix}`
            const output = `mmcr:${family.prefix}_output_${family.form}${tier.suffix}`
            const base = index === 0
                ? "mmcr:basic_casing"
                : `mmcr:${family.prefix}_input_${family.form}${family.tiers[index-1].suffix}`

            event.shaped(input,[" A ","BCB","DBD"],{
                A: family.top,
                B: "mmcr:modularium",
                C: base,
                D: tier.store
            })

            event.shapeless(input,output)
            event.shapeless(output,input)
        })
    })

    //单方向端口：形状同上，各写一条（不互换）
    const SinglePorts = [
        //通量网络：取电点给机器供电、送电点把机器发的电送回网络
        {id: "fluxnetworks_energy_input_interface",  top: "fluxnetworks:flux_point", store: "fluxnetworks:flux_core", base: "mmcr:basic_casing"},
        {id: "fluxnetworks_energy_output_interface", top: "fluxnetworks:flux_plug",  store: "fluxnetworks:flux_core", base: "mmcr:basic_casing"},

        //样板接口：基础 → 扩展
        {id: "ae2_me_pattern_interface",          top: "ae2:pattern_provider",           store: "ae2:logic_processor", base: "mmcr:basic_casing"},
        {id: "eae_me_extended_pattern_interface", top: "extendedae:ex_pattern_provider", store: "extendedae:concurrent_processor", base: "mmcr:ae2_me_pattern_interface"},

        //输入线：基础 → 扩展 → 超大；库存从两级分叉
        {id: "ae2_me_stocking_input_interface",          top: "ae2:storage_bus",               store: "ae2:logic_processor", base: "mmcr:ae2_me_input_interface"},
        {id: "eae_me_extended_input_interface",          top: "extendedae:ex_interface",       store: "extendedae:concurrent_processor", base: "mmcr:ae2_me_input_interface"},
        {id: "eae_me_oversize_input_interface",          top: "extendedae:oversize_interface", store: "extendedae:concurrent_processor", base: "mmcr:eae_me_extended_input_interface"},
        {id: "eae_me_extended_stocking_input_interface", top: "ae2:storage_bus",               store: "extendedae:concurrent_processor", base: "mmcr:eae_me_extended_input_interface"},
        {id: "eae_me_extended_stocking_input_interface", top: "extendedae:ex_interface",       store: "extendedae:concurrent_processor", base: "mmcr:ae2_me_stocking_input_interface"},
        {id: "eae_me_oversize_stocking_input_interface", top: "ae2:storage_bus",               store: "extendedae:concurrent_processor", base: "mmcr:eae_me_oversize_input_interface"},
        {id: "eae_me_oversize_stocking_input_interface", top: "extendedae:oversize_interface", store: "extendedae:concurrent_processor", base: "mmcr:eae_me_extended_stocking_input_interface"},

        //输出线：基础 → 扩展 → 超大；异步从基础分叉
        {id: "ae2_me_async_output_interface",    top: "mmcr:thread_disperser",         store: "ae2:logic_processor", base: "mmcr:ae2_me_output_interface"},
        {id: "eae_me_extended_output_interface", top: "extendedae:ex_interface",       store: "extendedae:concurrent_processor", base: "mmcr:ae2_me_output_interface"},
        {id: "eae_me_oversize_output_interface", top: "extendedae:oversize_interface", store: "extendedae:concurrent_processor", base: "mmcr:eae_me_extended_output_interface"}
    ]

    SinglePorts.forEach(port=>{
        event.shaped(`mmcr:${port.id}`,[" A ","BCB","DBD"],{
            A: port.top,
            B: "mmcr:modularium",
            C: port.base,
            D: port.store
        })
    })

    //扩展/超大接口也存在对称件，给它们补上输入输出互转（库存、异步、样板没有配对件，不互换）
    const SingleSwaps = [
        ["eae_me_extended_input_interface","eae_me_extended_output_interface"],
        ["eae_me_oversize_input_interface","eae_me_oversize_output_interface"]
    ]

    SingleSwaps.forEach(([input,output])=>{
        event.shapeless(`mmcr:${input}`,`mmcr:${output}`)
        event.shapeless(`mmcr:${output}`,`mmcr:${input}`)
    })

    //旧端口配方全部移除，统一重写
    event.remove({id:/^mmcr:item_(input|output)_bus(_reinforced|_big|_huge|_ludicrous)?$/})
    event.remove({id:/^mmcr:fluid_(input|output)_hatch(_reinforced|_big|_huge|_ludicrous)?$/})
    event.remove({id:/^mmcr:energy_(input|output)_hatch(_reinforced|_big|_huge|_ludicrous)?$/})
    event.remove({id:/^mmcr:chemical_(input|output)_hatch_(basic|advanced|elite|ultimate)$/})
    event.remove({id:/^mmcr:(ars_source|create_stress|pneumaticcraft_air)_(input|output)_interface$/})
    event.remove({id:/^mmcr:(heat|radioactive_chemical)_(input|output)_hatch$/})
    event.remove({id:/^mmcr:(ae2_me|appflux_me_flux)_(input|output)_interface$/})
    event.remove({id:/^mmcr:fluxnetworks_energy_(input|output)_interface$/})
    event.remove({id:/^mmcr:(ae2_me_pattern_interface|eae_me_extended_pattern_interface)$/})
    event.remove({id:/^mmcr:(ae2_me_stocking_input_interface|ae2_me_async_output_interface)$/})
    event.remove({id:/^mmcr:eae_me_(extended_(input|output|stocking_input)_interface|oversize_(input|output|stocking_input)_interface)$/})

    //禁用内容
    event.remove({id:/^mmcr:extended_item_(input|output)_bus_/})//扩展物品总线
    event.remove({id:/^mmcr:(extended_)?combined_(input|output)_/})//组合端口
    event.remove({id:/^mmcr:extended_(fluid|energy)_(input|output)_hatch_/})//扩展流体仓与扩展能量仓
    event.remove({id:/^mmcr:(item_(input|output)_bus|fluid_(input|output)_hatch|energy_(input|output)_hatch)_(tiny|small)$/})//微型与小型端口
    event.remove({id:/^mmcr:fluid_(input|output)_hatch_vacuum$/})//终极流体仓
    event.remove({id:/^mmcr:energy_(input|output)_hatch_ultimate$/})//究极能量仓
    event.remove({id:/^mmcr:parallel_controller_(pro|elite|fantasy|max|ultimate)$/})//高级并行器
    event.remove({id:/^mmcr:upgrade_bus_/})//升级总线

    const DisabledParts = ["smart_interface","data_storage","network_interface","module_bridge","key_card"]

    DisabledParts.forEach(id=>event.remove({output:`mmcr:${id}`}))
})
