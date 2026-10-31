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

    //物品、流体、能量
    const PortList = [
        ["item","bus","#c:chests","bin"],
        ["fluid","hatch","minecraft:bucket","fluid_tank"],
        ["energy","hatch","minecraft:redstone","energy_cube"]
    ]

    const TierList = [
        ["reinforced","basic"],
        ["big","advanced"],
        ["huge","elite"],
        ["ludicrous","ultimate"]
    ]

    PortList.forEach(([kind,form,vanilla,mekPart])=>{
        const port = (io,tier)=>`mmcr:${kind}_${io}_${form}${tier ? `_${tier}` : ""}`

        TierList.forEach(([tier,mekTier])=>
            ["input","output"].forEach(io=>{
                event.replaceInput({id:port(io,tier)},vanilla,`mekanism:${mekTier}_${mekPart}`)
                event.shapeless(port(io,tier),port(io==="input" ? "output" : "input",tier))
            }));

        ;["input","output"].forEach(io=>
            event.replaceInput({id:port(io)},port(io,"small"),"mmcr:basic_casing"))

        event.shapeless(port("input"),port("output"))
        event.shapeless(port("output"),port("input"))
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
