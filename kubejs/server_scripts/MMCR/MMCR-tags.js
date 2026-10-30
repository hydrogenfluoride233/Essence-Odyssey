ServerEvents.tags("block",event=>{
    //扩展物品总线：从模组全部相关标签里移除（配方与 JEI 那边同时不提供）
    //这样 anyOfItemInput() / anyOfItemOutput() / mmcr:ports 之类的内置谓词都不会再匹配到它们
    const ExtendedItemBuses = ["basic","reinforced","advanced","ultimate"]
    const MmcrPortTags = [
        "mmcr:item_input_ports",
        "mmcr:item_output_ports",
        "mmcr:item_ports",
        "mmcr:ports",
        "mmcr:machines"
    ]

    MmcrPortTags.forEach(tag=>{
        ["input","output"].forEach(io=>{
            ExtendedItemBuses.forEach(tier=>
                event.remove(tag,`mmcr:extended_item_${io}_bus_${tier}`))
        })
    })
})
