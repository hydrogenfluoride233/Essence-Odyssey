//要隐藏的物品：连它的各种 NBT 变体一起隐藏
//格式就是注册名，一行一个，加注释说明为什么
const HiddenEntries = [
    "immersiveengineering:potion_bucket",   //药水桶：每一种药水各占一个条目
]

//盆栽只留"没染色的陶土款"这几个（下面是白名单），其余花色变体全藏
//botanypotstiers 的 elite/ultra/mega_upgrade 是升级件、不是盆栽，本来就不会被下面那条匹配到
const KeptPots = [
    "botanypots:terracotta_botany_pot",
    "botanypots:terracotta_hopper_botany_pot",
    "botanypotstiers:elite_terracotta_botany_pot",
    "botanypotstiers:elite_terracotta_hopper_botany_pot",
    "botanypotstiers:ultra_terracotta_botany_pot",
    "botanypotstiers:ultra_terracotta_hopper_botany_pot",
    "botanypotstiers:mega_terracotta_botany_pot",
    "botanypotstiers:mega_terracotta_hopper_botany_pot",
]

RecipeViewerEvents.removeEntries("item", event => {
    HiddenEntries.forEach(id => 
        event.remove(id))

    //灵魂瓶：装了灵魂的变体各占一个条目，全藏；空瓶没有 enderio:soul 组件，所以保留
    event.remove(stack => stack.id == "enderio:soul_vial" && stack.get("enderio:soul"))

    //种子袋：装了种子的变体各占一个条目；空袋没有 quark:stored_item 组件，所以保留
    event.remove(stack => stack.id == "quark:seed_pouch" && stack.get("quark:stored_item"))

    //盆栽：两个盆栽模组的变体全藏，白名单里的除外
    event.remove(stack => (stack.id.startsWith("botanypots:") || stack.id.startsWith("botanypotstiers:")) &&
        stack.id.endsWith("_botany_pot") &&
        !KeptPots.includes(stack.id))

    //生长锄：盆栽模组给原版锄头加的生长加成（属性 botanypots:growth），原版锄头保留
    event.remove(stack => stack.id.endsWith("_hoe") &&
        String(stack.get("minecraft:attribute_modifiers")).includes("botanypots:"))
})
