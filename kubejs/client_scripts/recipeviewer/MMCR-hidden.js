//MMCR 端口隐藏：超出本包规模的扩展物品总线（配方在 MMCR/MMCR-recipes.js 一并删掉）
RecipeViewerEvents.removeEntries("item",event=>{
    event.remove(stack=>/^mmcr:extended_item_(input|output)_bus_/.test(stack.id))
})
