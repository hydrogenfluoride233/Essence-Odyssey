//扩展物品总线：从模组全部相关标签里移除（配方与 JEI 那边同时不提供）
//block 与 item 两套标签都要清，否则 anyOfItemInput() / mmcr:ports 仍会匹配到它们
const MmcrPortTags = [
    "mmcr:item_input_ports",
    "mmcr:item_output_ports",
    "mmcr:item_ports",
    "mmcr:ports",
    "mmcr:machines"
]

const RemoveExtendedItemBuses = event=>{
    const ExtendedItemBuses = ["basic","reinforced","advanced","ultimate"]

    MmcrPortTags.forEach(tag=>{
        ["input","output"].forEach(io=>{
            ExtendedItemBuses.forEach(tier=>
                event.remove(tag,`mmcr:extended_item_${io}_bus_${tier}`))
        })
    })
}

ServerEvents.tags("block",RemoveExtendedItemBuses)
ServerEvents.tags("item",RemoveExtendedItemBuses)
