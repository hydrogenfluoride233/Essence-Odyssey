//禁用超出本包规模的端口与部件
const RemovedPortIds = []

const pushIds = ids=>ids.forEach(id=>RemovedPortIds.push(`mmcr:${id}`))

const pushDirections = build=>{
    ["input","output"].forEach(io=>pushIds(build(io)))
}

//扩展物品总线
pushDirections(io=>["basic","reinforced","advanced","ultimate"].map(tier=>`extended_item_${io}_bus_${tier}`))

//扩展流体仓
pushDirections(io=>["basic","reinforced","advanced","ultimate"].map(tier=>`extended_fluid_${io}_hatch_${tier}`))

//扩展能量仓
pushDirections(io=>["reinforced","ultimate"].map(tier=>`extended_energy_${io}_hatch_${tier}`))

//组合端口
pushDirections(io=>["basic","advanced","reinforced","ultimate"].map(tier=>`combined_${io}_${tier}`))

//扩展组合端口
pushDirections(io=>["advanced","reinforced","ultimate"].map(tier=>`extended_combined_${io}_${tier}`));

//低档端口
["item","fluid","energy"].forEach(kind=>{
    const port = kind==="item" ? "bus" : "hatch"

    pushDirections(io=>["tiny","small"].map(tier=>`${kind}_${io}_${port}_${tier}`))
})

//高档端口
pushDirections(io=>[`fluid_${io}_hatch_vacuum`,`energy_${io}_hatch_ultimate`])

//并行器
pushIds(["pro","elite","fantasy","max","ultimate"].map(tier=>`parallel_controller_${tier}`))

//升级总线
pushIds(["normal","reinforced","elite","super","ultimate"].map(tier=>`upgrade_bus_${tier}`))

//高级功能部件
pushIds(["smart_interface","data_storage","network_interface","module_bridge","key_card"])

const RemoveDisabledPorts = event=>{
    RemovedPortIds.forEach(id=>event.removeAllTagsFrom(id))
}

ServerEvents.tags("block",RemoveDisabledPorts)
ServerEvents.tags("item",RemoveDisabledPorts)

//并行器白名单
ServerEvents.tags("block",event=>{
    ["normal","plus","reinforced"].forEach(tier=>
        event.add("kubejs:parallel_controllers",`mmcr:parallel_controller_${tier}`))
})
