//EMI / JEI 的条目清理：把"带 NBT 变体、会在物品列表里刷屏"的东西收掉
//比在 EMI 编辑模式里一个个隐藏靠谱——这里写的东西会**随整合包发布**，玩家也生效
//（EMI 编辑模式写的是 emi.json，属于客户端本地配置，不进包）

//要隐藏的物品：连它的各种 NBT 变体一起隐藏
//格式就是注册名，一行一个，加注释说明为什么
const HiddenEntries = [
    "enderio:soul_vial",   //灵魂瓶：装了不同灵魂会各占一个条目
]

RecipeViewerEvents.removeEntries("item", event => {
    HiddenEntries.forEach(id => event.remove(id))
})

//注：Mekanism 的创造流体/化学品储罐**不在这里处理**——
//那些"装满各种流体/化学品"的变体是 Mekanism 自己注册的，已在
//config\Mekanism\general.toml 的 [prefilled] 里关掉（fluidTanks / chemicalTanks = false）
