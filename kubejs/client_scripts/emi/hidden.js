//要隐藏的物品：连它的各种 NBT 变体一起隐藏
//格式就是注册名，一行一个，加注释说明为什么
const HiddenEntries = [
]

//按组件隐藏：物品本身还在，只藏"装了东西"的那些变体
//灵魂瓶装了灵魂会各占一个条目，全藏；空瓶没有 enderio:soul 组件，所以保留
RecipeViewerEvents.removeEntries("item", event => {
    HiddenEntries.forEach(id => 
        event.remove(id))

    event.remove(stack => stack.id == "enderio:soul_vial" && stack.get("enderio:soul"))
})
