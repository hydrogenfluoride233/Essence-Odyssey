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
        event.remove("immersiveengineering:potion_bucket")

    //灵魂瓶
    event.remove(stack => stack.id == "enderio:soul_vial" && stack.get("enderio:soul") != null)

    //种子袋
    event.remove(stack => stack.id == "quark:seed_pouch" && stack.get("quark:stored_item") != null)

    //盆栽
    event.remove(stack => (stack.id.startsWith("botanypots:") || stack.id.startsWith("botanypotstiers:")) &&
        stack.id.endsWith("_botany_pot") &&
        !KeptPots.includes(stack.id))

    //生长锄
    event.remove(stack => stack.id.endsWith("_hoe") &&
        String(stack.get("minecraft:attribute_modifiers")).includes("botanypots:"))
})
