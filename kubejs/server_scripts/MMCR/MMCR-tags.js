//禁用超出本包规模的端口：扩展物品总线、组合端口（含扩展组合）
//block 与 item 两套标签都要清，否则 anyOfItemInput() / api.tag('mmcr:item_ports') 仍会匹配到它们
const RemovedPortIds = []

//扩展物品总线：基础 / 强化 / 进阶 / 究极 × 输入输出
;["basic","reinforced","advanced","ultimate"].forEach(tier=>
    ["input","output"].forEach(io=>
        RemovedPortIds.push(`mmcr:extended_item_${io}_bus_${tier}`)))

//组合端口：基础 / 进阶 / 强化 / 究极 × 输入输出
;["basic","advanced","reinforced","ultimate"].forEach(tier=>
    ["input","output"].forEach(io=>
        RemovedPortIds.push(`mmcr:combined_${io}_${tier}`)))

//扩展组合端口：进阶 / 强化 / 究极 × 输入输出
;["advanced","reinforced","ultimate"].forEach(tier=>
    ["input","output"].forEach(io=>
        RemovedPortIds.push(`mmcr:extended_combined_${io}_${tier}`)))

const MmcrPortTags = [
    "mmcr:item_input_ports",
    "mmcr:item_output_ports",
    "mmcr:item_ports",
    "mmcr:fluid_input_ports",
    "mmcr:fluid_output_ports",
    "mmcr:fluid_ports",
    "mmcr:ports",
    "mmcr:machines"
]

const RemoveDisabledPorts = event=>{
    MmcrPortTags.forEach(tag=>
        RemovedPortIds.forEach(id=>event.remove(tag,id)))
}

ServerEvents.tags("block",RemoveDisabledPorts)
ServerEvents.tags("item",RemoveDisabledPorts)
