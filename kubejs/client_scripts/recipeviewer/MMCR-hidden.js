//MMCR 端口隐藏：超出本包规模的扩展物品总线与组合端口（配方在 MMCR/MMCR-machine.js 一并删掉）
RecipeViewerEvents.removeEntries("item",event=>{
    event.remove(stack=>/^mmcr:(extended_item_(input|output)_bus_|(extended_)?combined_(input|output)_)/.test(stack.id))
})
