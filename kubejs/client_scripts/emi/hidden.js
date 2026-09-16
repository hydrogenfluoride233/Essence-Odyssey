//要隐藏的物品：连它的各种 NBT 变体一起隐藏
//格式就是注册名，一行一个，加注释说明为什么
const HiddenEntries = [
    "enderio:soul_vial",           //灵魂瓶：装了不同灵魂会各占一个条目
]

RecipeViewerEvents.removeEntries("item", event => {
    HiddenEntries.forEach(id => 
        event.remove(id))
})
