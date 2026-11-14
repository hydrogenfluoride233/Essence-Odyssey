RecipeViewerEvents.removeEntries("item",event=>{
    const HideList = [
        //actuallyadditions
        "actuallyadditions:oil_generator",
        "actuallyadditions:coal_generator",
        "actuallyadditions:leaf_generator",
        "actuallyadditions:heat_collector",
        "actuallyadditions:bio_reactor",//发电机相关

        //enderio
        "enderio:photovoltaic_composite",
        "enderio:photovoltaic_plate",
        "enderio:energetic_photovoltaic_module",
        "enderio:pulsating_photovoltaic_module",
        "enderio:vibrant_photovoltaic_module",
        "enderio:stirling_generator",

        //enderio_evolution
        "enderio_evolution:simple_stirling_generator",
        "enderio_evolution:basic_infinity_generator",
        "enderio_evolution:crystalline_infinity_generator",
        "enderio_evolution:stellar_infinity_generator",//发电机相关

        //enigmaticunity
        "enigmaticunity:dim_source_generator",
        "enigmaticunity:bright_source_generator",
        "enigmaticunity:dim_source_producer",
        "enigmaticunity:bright_source_producer",//低级水晶

        //immersiveengineering
        "immersiveengineering:potion_bucket",//药水桶

        //industrialforegoing
        "industrialforegoing:pitiful_generator",
        "industrialforegoing:biofuel_generator",//非菌丝网络发电机

        //integrateddynamics
        "integrateddynamics:coal_generator",//发电机

        //ironfurnaces
        "ironfurnaces:augment_generator",//强化组件：发电机

        //justdirethings
        "justdirethings:generatort1",
        "justdirethings:generatorfluidt1",
        "justdirethings:pocket_generator",//便携发电器

        //kubejs
        "kubejs:machine_model",//动态模型的展示实体

        //mekanism
        "mekanism:steam_bucket",//蒸汽桶

        //mmcr
        "mmcr:smart_interface",
        "mmcr:data_storage",
        "mmcr:network_interface",
        "mmcr:module_bridge",
        "mmcr:key_card",
        /^mmcr:extended_item_(input|output)_bus_/,
        /^mmcr:(extended_)?combined_(input|output)_/,
        /^mmcr:extended_(fluid|energy)_(input|output)_hatch_/,
        /^mmcr:(item_(input|output)_bus|fluid_(input|output)_hatch|energy_(input|output)_hatch)_(tiny|small)$/,
        /^mmcr:fluid_(input|output)_hatch_vacuum$/,
        /^mmcr:energy_(input|output)_hatch_ultimate$/,
        /^mmcr:parallel_controller_(pro|elite|fantasy|max|ultimate)$/,
        /^mmcr:upgrade_bus_/,//本包不需要的部件

        //productivebees
        "productivebees:honey_generator",//蜂蜜发电机
    ]

    event.remove(stack=>
        HideList.some(entry=>entry instanceof RegExp ? entry.test(stack.id) : entry === stack.id))

    //合并动态过滤
    event.remove(stack=>{
        const id = stack.id

        //灵魂瓶
        if (id == "enderio:soul_vial") return stack.get("enderio:soul") != null

        //种子袋
        if (id == "quark:seed_pouch") return stack.get("quark:stored_item") != null

        //盆栽
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
        
        if ((id.startsWith("botanypots:") || id.startsWith("botanypotstiers:")) &&
            id.endsWith("_botany_pot")) return !KeptPots.includes(id)

        //生长锄
        return id.endsWith("_hoe") &&
            String(stack.get("minecraft:attribute_modifiers")).includes("botanypots:")
    })
})
