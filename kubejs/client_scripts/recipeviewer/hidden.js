//物品隐藏
RecipeViewerEvents.removeEntries("item",event=>{
    event.remove("immersiveengineering:potion_bucket")

    //蒸汽桶
    event.remove("mekanism:steam_bucket")

    //机器模型部件（动态模型的载体，只给展示实体用）
    event.remove("kubejs:machine_model")

    //合并动态过滤
    event.remove(stack=>{
        const id = stack.id

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

    //发电机相关
    const RemovedGenerators = [
        "actuallyadditions:oil_generator",                  //原油发电机
        "actuallyadditions:coal_generator",                 //煤炭发电机
        "actuallyadditions:leaf_generator",                 //咀叶发电机
        "actuallyadditions:heat_collector",                 //热能发电机
        "actuallyadditions:bio_reactor",                    //生物反应器
        "enderio:photovoltaic_composite",                   //光伏复合材料
        "enderio:photovoltaic_plate",                       //光伏板材
        "enderio:energetic_photovoltaic_module",            //充能光伏模块
        "enderio:pulsating_photovoltaic_module",            //脉冲光伏模块
        "enderio:vibrant_photovoltaic_module",              //振动光伏模块
        "enderio:stirling_generator",                       //斯特林发电机
        "enderio_evolution:simple_stirling_generator",      //简易斯特林发电机
        "enderio_evolution:basic_infinity_generator",       //基础无限粉发电机
        "enderio_evolution:crystalline_infinity_generator", //晶化合金无限粉发电机
        "enderio_evolution:stellar_infinity_generator",     //恒星合金无限粉发电机
        "enigmaticunity:dim_source_generator",              //暗淡脉冲水晶
        "enigmaticunity:bright_source_generator",           //明亮脉冲水晶
        "enigmaticunity:dim_source_producer",               //暗淡共鸣水晶
        "enigmaticunity:bright_source_producer",            //明亮共鸣水晶
        "industrialforegoing:pitiful_generator",            //缺陷发电机
        "industrialforegoing:biofuel_generator",            //生物燃油发电机
        "integrateddynamics:coal_generator",                //发电机
        "ironfurnaces:augment_generator",                   //强化组件：发电机
        "justdirethings:generatort1",                       //初级煤炭发电器
        "justdirethings:generatorfluidt1",                  //初级燃液发电器
        "justdirethings:pocket_generator",                  //便携发电器
        "productivebees:honey_generator",                   //蜂蜜发电机
    ]

    RemovedGenerators.forEach(id=>event.remove(id))
})

//流体隐藏
RecipeViewerEvents.removeEntries("fluid",event=>{
    event.remove("mekanism:steam") //蒸汽流体
})

//配方隐藏
RecipeViewerEvents.removeRecipes(event=>{
    event.remove([
        "create:kjs/unknown_mixture",   //未知混合物
        "create:kjs/paradox_collapser", //悖论物质
    ])
})
