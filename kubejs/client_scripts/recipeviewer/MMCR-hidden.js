//MMCR 隐藏：超出本包规模的端口与暂不启用的高级功能部件（配方在 MMCR/MMCR-machine.js 一并删掉）
const HiddenPortPatterns = [
    /^mmcr:extended_item_(input|output)_bus_/,             //扩展物品总线
    /^mmcr:(extended_)?combined_(input|output)_/,          //组合端口
    /^mmcr:extended_(fluid|energy)_(input|output)_hatch_/, //扩展流体仓与扩展能量仓
    /^mmcr:eae_me_(extended_(input|output|stocking_input)_interface|oversize_(input|output|stocking_input)_interface)/ //EAE 扩展接口（保留 ME扩展样板接口）
]

const DisabledParts = ["smart_interface","data_storage","network_interface","module_bridge","key_card"]//智能接口 / 数据存储器 / 网络接口 / 模块桥接器 / 网络密钥卡

RecipeViewerEvents.removeEntries("item",event=>{
    event.remove(stack=>HiddenPortPatterns.some(pattern=>pattern.test(stack.id)))
    DisabledParts.forEach(id=>event.remove(`mmcr:${id}`))
})
