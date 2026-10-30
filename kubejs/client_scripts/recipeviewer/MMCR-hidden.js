//MMCR 端口隐藏：超出本包规模的端口（配方在 MMCR/MMCR-machine.js 一并删掉）
const HiddenPortPatterns = [
    /^mmcr:extended_item_(input|output)_bus_/,             //扩展物品总线
    /^mmcr:(extended_)?combined_(input|output)_/,          //组合端口
    /^mmcr:extended_(fluid|energy)_(input|output)_hatch_/, //扩展流体仓与扩展能量仓
    /^mmcr:eae_me_(extended_(input|output|stocking_input)_interface|oversize_(input|output|stocking_input)_interface)/ //EAE 扩展接口（保留 ME扩展样板接口）
]

RecipeViewerEvents.removeEntries("item",event=>{
    event.remove(stack=>HiddenPortPatterns.some(pattern=>pattern.test(stack.id)))
})
