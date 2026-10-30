//禁用超出本包规模的端口：扩展物品总线、组合端口、扩展流体仓、扩展能量仓、EAE 扩展接口
//block 与 item 两套标签都要清，否则 api.tag(...) 仍会匹配到它们
const RemovedPortIds = []

const pushPorts = (prefixes,tiers,directions)=>{
    tiers.forEach(tier=>
        directions.forEach(direction=>
            prefixes.forEach(prefix=>
                RemovedPortIds.push(`mmcr:${prefix}${direction}${tier}`))))
}

//扩展物品总线：基础 / 强化 / 进阶 / 究极 × 输入输出
pushPorts(["extended_item_"],["_bus_basic","_bus_reinforced","_bus_advanced","_bus_ultimate"],["input","output"])

//组合端口：基础 / 进阶 / 强化 / 究极 × 输入输出
pushPorts(["combined_"],["_basic","_advanced","_reinforced","_ultimate"],["input","output"])

//扩展组合端口：进阶 / 强化 / 究极 × 输入输出
pushPorts(["extended_combined_"],["_advanced","_reinforced","_ultimate"],["input","output"])

//扩展流体仓：基础 / 强化 / 进阶 / 究极 × 输入输出
pushPorts(["extended_fluid_"],["_hatch_basic","_hatch_reinforced","_hatch_advanced","_hatch_ultimate"],["input","output"])

//扩展能量仓：强化 / 究极 × 输入输出
pushPorts(["extended_energy_"],["_hatch_reinforced","_hatch_ultimate"],["input","output"])

//EAE 扩展接口（保留 ME扩展样板接口）
RemovedPortIds.push(
    "mmcr:eae_me_extended_input_interface",
    "mmcr:eae_me_extended_stocking_input_interface",
    "mmcr:eae_me_extended_output_interface",
    "mmcr:eae_me_oversize_input_interface",
    "mmcr:eae_me_oversize_output_interface",
    "mmcr:eae_me_oversize_stocking_input_interface"
)

const MmcrPortTags = [
    "mmcr:item_input_ports",
    "mmcr:item_output_ports",
    "mmcr:item_ports",
    "mmcr:fluid_input_ports",
    "mmcr:fluid_output_ports",
    "mmcr:fluid_ports",
    "mmcr:neoforge_energy_input_ports",
    "mmcr:neoforge_energy_output_ports",
    "mmcr:neoforge_energy_ports",
    "mmcr:ae2_ports",
    "mmcr:extendedae_ports",
    "mmcr:ae2lt_lightning_input_ports",
    "mmcr:ae2lt_lightning_output_ports",
    "mmcr:ae2lt_lightning_ports",
    "mmcr:mekanism_chemical_input_ports",
    "mmcr:mekanism_chemical_output_ports",
    "mmcr:mekanism_chemical_ports",
    "mmcr:mekanism_radioactive_chemical_input_ports",
    "mmcr:mekanism_radioactive_chemical_output_ports",
    "mmcr:mekanism_radioactive_chemical_ports",
    "mmcr:ports",
    "mmcr:machines"
]

const RemoveDisabledPorts = event=>{
    MmcrPortTags.forEach(tag=>
        RemovedPortIds.forEach(id=>event.remove(tag,id)))
}

ServerEvents.tags("block",RemoveDisabledPorts)
ServerEvents.tags("item",RemoveDisabledPorts)
