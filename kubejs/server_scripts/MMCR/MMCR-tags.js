//禁用超出本包规模的端口与部件
//用 removeAllTagsFrom 把它们从所在的所有标签里摘掉，不必逐个列标签名
const RemovedPortIds = []

const pushIds = ids=>ids.forEach(id=>RemovedPortIds.push(`mmcr:${id}`))

const pushDirections = build=>{
    ;["input","output"].forEach(io=>pushIds(build(io)))
}

//扩展物品总线：基础 / 强化 / 进阶 / 究极
pushDirections(io=>["basic","reinforced","advanced","ultimate"].map(tier=>`extended_item_${io}_bus_${tier}`))

//组合端口：基础 / 进阶 / 强化 / 究极
pushDirections(io=>["basic","advanced","reinforced","ultimate"].map(tier=>`combined_${io}_${tier}`))

//扩展组合端口：进阶 / 强化 / 究极
pushDirections(io=>["advanced","reinforced","ultimate"].map(tier=>`extended_combined_${io}_${tier}`))

//扩展流体仓：基础 / 强化 / 进阶 / 究极
pushDirections(io=>["basic","reinforced","advanced","ultimate"].map(tier=>`extended_fluid_${io}_hatch_${tier}`))

//扩展能量仓：强化 / 究极
pushDirections(io=>["reinforced","ultimate"].map(tier=>`extended_energy_${io}_hatch_${tier}`))

//低档端口：微型 / 小型（物品总线、流体仓、能量仓都删）
;["item","fluid","energy"].forEach(kind=>{
    const port = kind==="item" ? "bus" : "hatch"

    pushDirections(io=>["tiny","small"].map(tier=>`${kind}_${io}_${port}_${tier}`))
})

//高档端口：流体的终极、能量的究极（本包只到超级）
pushDirections(io=>[`fluid_${io}_hatch_vacuum`,`energy_${io}_hatch_ultimate`])

//并行器：只留普通 / 进阶 / 强化
pushIds(["pro","elite","fantasy","max","ultimate"].map(tier=>`parallel_controller_${tier}`))

//升级总线：本包不做升级系统，全部禁用
pushIds(["normal","reinforced","elite","super","ultimate"].map(tier=>`upgrade_bus_${tier}`))

//EAE 扩展接口（保留 ME扩展样板接口）
pushIds([
    "eae_me_extended_input_interface",
    "eae_me_extended_stocking_input_interface",
    "eae_me_extended_output_interface",
    "eae_me_oversize_input_interface",
    "eae_me_oversize_output_interface",
    "eae_me_oversize_stocking_input_interface"
])

//高级功能部件（本包暂无对应机器）
pushIds(["smart_interface","data_storage","network_interface","module_bridge","key_card"])

const RemoveDisabledPorts = event=>{
    RemovedPortIds.forEach(id=>event.removeAllTagsFrom(id))//从该方块所在的全部标签里摘掉
}

ServerEvents.tags("block",RemoveDisabledPorts)
ServerEvents.tags("item",RemoveDisabledPorts)

//并行器白名单：结构里用 api.tag('kubejs:parallel_controllers') 调用
ServerEvents.tags("block",event=>{
    ;["normal","plus","reinforced"].forEach(tier=>
        event.add("kubejs:parallel_controllers",`mmcr:parallel_controller_${tier}`))
})
