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

    //其余端口：只做输入输出互转，材料照上游
    const SwapPairs = [
        ["ae2_me_input_interface","ae2_me_output_interface"],
        ["appflux_me_flux_input_interface","appflux_me_flux_output_interface"]
    ]

    SwapPairs.forEach(([input,output])=>{
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

    //禁用内容
    event.remove({id:/^mmcr:extended_item_(input|output)_bus_/})//扩展物品总线
    event.remove({id:/^mmcr:(extended_)?combined_(input|output)_/})//组合端口
    event.remove({id:/^mmcr:extended_(fluid|energy)_(input|output)_hatch_/})//扩展流体仓与扩展能量仓
    event.remove({id:/^mmcr:(item_(input|output)_bus|fluid_(input|output)_hatch|energy_(input|output)_hatch)_(tiny|small)$/})//微型与小型端口
    event.remove({id:/^mmcr:fluid_(input|output)_hatch_vacuum$/})//终极流体仓
    event.remove({id:/^mmcr:energy_(input|output)_hatch_ultimate$/})//究极能量仓
    event.remove({id:/^mmcr:eae_me_(extended_(input|output|stocking_input)_interface|oversize_(input|output|stocking_input)_interface)/})//EAE 扩展接口（保留 ME扩展样板接口）
    event.remove({id:/^mmcr:parallel_controller_(pro|elite|fantasy|max|ultimate)$/})//高级并行器
    event.remove({id:/^mmcr:upgrade_bus_/})//升级总线

    const DisabledParts = ["smart_interface","data_storage","network_interface","module_bridge","key_card"]

    DisabledParts.forEach(id=>event.remove({output:`mmcr:${id}`}))
})
