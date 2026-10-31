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
    const portShape = (id,top,base,store)=>{
        event.shaped(`mmcr:${id}`,["A","BCB","DBD"],{
            A: top,
            B: "mmcr:modularium",
            C: base,
            D: store
        })
    }

    //[前缀, 形态, 顶部材料, 档位后缀（首个为空串）, 各档容器]
    const PortFamily = [
        ["item","bus","minecraft:hopper",
            ["","_reinforced","_big","_huge","_ludicrous"],
            ["#c:chests","mekanism:basic_bin","mekanism:advanced_bin","mekanism:elite_bin","mekanism:ultimate_bin"]],
        ["fluid","hatch","minecraft:hopper",
            ["","_reinforced","_big","_huge","_ludicrous"],
            ["minecraft:bucket","mekanism:basic_fluid_tank","mekanism:advanced_fluid_tank","mekanism:elite_fluid_tank","mekanism:ultimate_fluid_tank"]],
        ["energy","hatch","immersiveengineering:capacitor_hv",
            ["","_reinforced","_big","_huge","_ludicrous"],
            ["minecraft:redstone_block","mekanism:basic_energy_cube","mekanism:advanced_energy_cube","mekanism:elite_energy_cube","mekanism:ultimate_energy_cube"]],
        ["chemical","hatch","minecraft:hopper",
            ["_basic","_advanced","_elite","_ultimate"],
            ["mekanism:basic_chemical_tank","mekanism:advanced_chemical_tank","mekanism:elite_chemical_tank","mekanism:ultimate_chemical_tank"]]
    ]

    PortFamily.forEach(([prefix,form,top,levels,stores])=>{
        levels.forEach((suffix,index)=>{
            const input = `mmcr:${prefix}_input_${form}${suffix}`
            const output = `mmcr:${prefix}_output_${form}${suffix}`
            const base = index === 0 ? "mmcr:basic_casing" : `mmcr:${prefix}_input_${form}${levels[index-1]}`

            portShape(`${prefix}_input_${form}${suffix}`,top,base,stores[index])
            event.shapeless(input,output)
            event.shapeless(output,input)
        })
    })

    //其余端口：只做输入输出互转，材料照上游
    const SwapPairs = [
        ["ae2_me_input_interface","ae2_me_output_interface"],
        ["appflux_me_flux_input_interface","appflux_me_flux_output_interface"],
        ["create_stress_input_interface","create_stress_output_interface"],
        ["ars_source_input_interface","ars_source_output_interface"],
        ["pneumaticcraft_air_input_interface","pneumaticcraft_air_output_interface"],
        ["heat_input_hatch","heat_output_hatch"],
        ["radioactive_chemical_input_hatch","radioactive_chemical_output_hatch"],
        ["chemical_input_hatch_basic","chemical_output_hatch_basic"],
        ["chemical_input_hatch_advanced","chemical_output_hatch_advanced"],
        ["chemical_input_hatch_elite","chemical_output_hatch_elite"],
        ["chemical_input_hatch_ultimate","chemical_output_hatch_ultimate"]
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
