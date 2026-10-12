// MMCR 机器的悬停提示（机器特殊，单独手写 —— 不进「物品提示表」的批量生成）
ItemEvents.modifyTooltips(event=>{
    event.add("mmcr:industrial_imbuement_controller", [
        Text.translate("essenceodyssey.info.mmcr_imbuement_ports")
    ])//mmcr_imbuement_ports
    event.add("mmcr:industrial_imbuement_controller", [
        Text.translate("essenceodyssey.info.mmcr_imbuement_parallel")
    ])//mmcr_imbuement_parallel
})
