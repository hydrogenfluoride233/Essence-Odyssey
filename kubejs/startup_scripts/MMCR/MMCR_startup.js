MMCREvents.startup(event => {
    //工业灌注室
    event.createMachine("mmcr:industrial_imbuement")
        .displayNameKey("machine.mmcr.industrial_imbuement")
        .recipePool("mmcr:industrial_imbuement")
        .appearance("ars_nouveau:smooth_sourcestone_large_bricks")                      //外观
        .allowParallelism()                                                             //允许并行器
        .maxParallelAmount(64)                                                          //并行上限
        .allowMultithreading()                                                          //允许多线程
        .factoryThreads(4)                                                              //初始线程数
        .recipeBehavior(b=>b.recipeTick(ctx=>global.machineModelWork(ctx)))             //动态模型
        .postServerTick(ctx=>global.machineModelTick(ctx))                              //动态模型
        .register()

    //五彩祭坛
    event.createMachine("mmcr:past_astral_altar")
        .displayNameKey("machine.mmcr.past_astral_altar")
        .recipePool("mmcr:past_astral_altar")
        .appearance("astralsorcery:marble_bricks")
        .allowParallelism()
        .maxParallelAmount(64)
        .allowMultithreading()
        .factoryThreads(4)
        .recipeBehavior(b=>b.recipeTick(ctx=>global.machineModelWork(ctx)))
        .postServerTick(ctx=>global.machineModelTick(ctx))
        .register()

    //数据提取器
    event.createMachine("mmcr:data_extractor")
        .displayNameKey("machine.mmcr.data_extractor")
        .recipePool("mmcr:data_extractor")
        .appearance("pneumaticcraft:compressed_bricks")
        .allowParallelism()
        .maxParallelAmount(64)
        .allowMultithreading()
        .factoryThreads(4)
        .register()

    //封装森林仪式
    event.createMachine("mmcr:packaged_tree_ritual")
        .displayNameKey("machine.mmcr.packaged_tree_ritual")
        .recipePool("mmcr:packaged_tree_ritual")
        .appearance("create:andesite_casing")
        .allowParallelism()
        .maxParallelAmount(64)
        .allowMultithreading()
        .factoryThreads(4)
        .register()

    //封装自然祭坛
    event.createMachine("mmcr:packaged_nature_altar")
        .displayNameKey("machine.mmcr.packaged_nature_altar")
        .recipePool("mmcr:packaged_nature_altar")
        .appearance("create:brass_casing")
        .allowParallelism()
        .maxParallelAmount(64)
        .allowMultithreading()
        .factoryThreads(4)
        .register()

    //封装祭祀台
    event.createMachine("mmcr:packaged_offering_table")
        .displayNameKey("machine.mmcr.packaged_offering_table")
        .recipePool("mmcr:packaged_offering_table")
        .appearance("createmoremachines:end_casing")
        .allowParallelism()
        .maxParallelAmount(64)
        .allowMultithreading()
        .factoryThreads(4)
        .register()
})
