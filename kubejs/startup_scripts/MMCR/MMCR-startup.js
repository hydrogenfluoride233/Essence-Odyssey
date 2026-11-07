MMCREvents.startup(event => {
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

    event.createMachine("mmcr:past_astral_altar")
        .displayNameKey("machine.mmcr.past_astral_altar")
        .recipePool("mmcr:past_astral_altar")
        .appearance("astralsorcery:marble_bricks")
        .allowParallelism()
        .maxParallelAmount(64)
        .allowMultithreading()
        .factoryThreads(4)
        .register()

    event.createMachine("mmcr:data_extractor")
        .displayNameKey("machine.mmcr.data_extractor")
        .recipePool("mmcr:data_extractor")
        .appearance("pneumaticcraft:compressed_bricks")
        .allowParallelism()
        .maxParallelAmount(64)
        .allowMultithreading()
        .factoryThreads(4)
        .register()

    event.createMachine("mmcr:packaged_tree_ritual")
        .displayNameKey("machine.mmcr.packaged_tree_ritual")
        .recipePool("mmcr:packaged_tree_ritual")
        .appearance("create:andesite_casing")
        .allowParallelism()
        .maxParallelAmount(64)
        .allowMultithreading()
        .factoryThreads(4)
        .register()

    event.createMachine("mmcr:packaged_nature_altar")
        .displayNameKey("machine.mmcr.packaged_nature_altar")
        .recipePool("mmcr:packaged_nature_altar")
        .appearance("create:brass_casing")
        .allowParallelism()
        .maxParallelAmount(64)
        .allowMultithreading()
        .factoryThreads(4)
        .register()

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
