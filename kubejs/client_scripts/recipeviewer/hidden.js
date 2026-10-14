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

RecipeViewerEvents.removeEntries("item",event=>{
    event.remove("immersiveengineering:potion_bucket")

    //蒸汽桶
    event.remove("mekanism:steam_bucket")

    //合并动态过滤：每个条目只跨一次脚本边界，只读取一次物品 ID
    event.remove(stack=>{
        const id = stack.id

        //灵魂瓶
        if (id == "enderio:soul_vial") return stack.get("enderio:soul") != null

        //种子袋
        if (id == "quark:seed_pouch") return stack.get("quark:stored_item") != null

        //盆栽
        if ((id.startsWith("botanypots:") || id.startsWith("botanypotstiers:")) &&
            id.endsWith("_botany_pot")) return !KeptPots.includes(id)

        //生长锄：普通物品不读取或序列化组件
        return id.endsWith("_hoe") &&
            String(stack.get("minecraft:attribute_modifiers")).includes("botanypots:")
    })
})

RecipeViewerEvents.removeEntries("fluid",event=>{

    //蒸汽流体
    event.remove("mekanism:steam")
})
