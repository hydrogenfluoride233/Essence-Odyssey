// 机器定义：改这里必须重启游戏，/reload 不生效
MMCREvents.startup(event => {
    event.createMachine("mmcr:industrial_imbuement")
        .displayNameKey("machine.mmcr.industrial_imbuement")
        .recipePool("mmcr:industrial_imbuement")
        .controllerBaseTexture("ars_nouveau:block/smooth_sourcestone_large_bricks")   //控制器底纹理
        .formedPortBaseTexture("ars_nouveau:block/smooth_sourcestone_large_bricks")  //成型端口底纹理
        .allowParallelism()                                                          //允许并行器
        .maxParallelAmount(64)                                                       //并行上限（机器侧；实际取它与并行器倍率的较小值）
        .allowMultithreading()                                                       //允许工厂多线程（需在结构里放工厂控制器）
        .factoryThreads(2)                                                           //工厂线程数（线程撕裂者可增加）
        .recipeBehavior(b=>b.recipeTick(ctx=>global.machineModelWork(ctx)))          //动态模型：配方在跑时报到（模型见 server_scripts/MMCR-models.js）
        .postServerTick(ctx=>global.machineModelTick(ctx))                           //动态模型：每 tick 报到成型状态与朝向
        .register()
})
