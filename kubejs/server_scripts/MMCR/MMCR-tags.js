ServerEvents.tags("block",event=>{
    //物品端口：标准等级输入/输出总线（微型→超级）；extended 系列不在包内，故不入标签
    const ItemPortLevels = ["tiny","small","","reinforced","big","huge","ludicrous"]

    ItemPortLevels.forEach(level=>{
        const suffix = level ? `_${level}` : ""

        event.add("kubejs:mmcr_item_ports",`mmcr:item_input_bus${suffix}`)
        event.add("kubejs:mmcr_item_ports",`mmcr:item_output_bus${suffix}`)
    })
})
