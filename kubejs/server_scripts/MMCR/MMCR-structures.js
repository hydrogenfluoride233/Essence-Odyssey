MMCREvents.server(event => {
    const api = event.getAPI()

    const structure = event.createStructure("mmcr:industrial_imbuement")
        //A = 可换端口位（导出时用铁块占位）；E = 并行仓位（导出时用金块占位）；B = 固定砖；C = 控制器
        .pattern("AAAAA", "BXXXB", "BXXXB", "BXXXB", "AAAAA")
        .pattern("ABBBA", "X D X", "X   X", "X   X", "ABBBA")
        .pattern("ABEBA", "XDFDX", "X G X", "X   X", "ABBBA")
        .pattern("ABBBA", "X D X", "X   X", "X   X", "ABBBA")
        .pattern("AACAA", "BXXXB", "BXXXB", "BXXXB", "AAAAA")
        .set('A', api.anyOf(
            api.block('ars_nouveau:smooth_sourcestone_large_bricks'),   //平滑魔源石大砖块（占位）
            api.anyOfItemInput(),                                       //物品输入总线（含 ME / EAE 接口）
            api.anyOfItemOutput(),                                      //物品输出总线（含 ME / EAE 接口）
            api.anyOfSourceInput()                                      //魔源输入接口
        ))
        .set('E', api.anyOf(
            api.block('ars_nouveau:smooth_sourcestone_large_bricks'),   //平滑魔源石大砖块（占位）
            api.parallelControllers()                                   //并行仓
        ))
        .set('B', api.block('ars_nouveau:smooth_sourcestone_large_bricks'))   //平滑魔源石大砖块（固定）
        .set('X', api.block('mekanism:structural_glass'))
        .set('D', api.state('ars_nouveau:arcane_platform[facing=up]'))
        .set('F', api.block('ars_nouveau:arcane_core'))
        .set('G', api.block('ars_nouveau:imbuement_chamber'))
        .controller('C')
        .build()
})
