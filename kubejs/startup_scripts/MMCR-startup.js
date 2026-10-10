// 机器定义：改这里必须重启游戏，/reload 不生效
MMCREvents.startup(event => {
    event.createMachine("mmcr:industrial_imbuement")
        .displayNameKey("machine.mmcr.industrial_imbuement")
        .recipePool("mmcr:industrial_imbuement")
        .controllerBaseTexture("ars_nouveau:block/smooth_sourcestone_large_bricks")   //控制器底纹理：源石大砖
        .formedPortBaseTexture("ars_nouveau:block/smooth_sourcestone_large_bricks")  //成型端口底纹理：同上，端口跟控制器一个底
        .register()
})
