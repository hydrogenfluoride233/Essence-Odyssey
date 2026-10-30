MMCREvents.server(event => {
    const api = event.getAPI()

    const structure = event.createStructure("mmcr:industrial_imbuement")
        //A = 可换端口位（导出时用铁块占位）；E = 并行仓位（导出时用金块占位）；B = 固定砖；C = 控制器
        .pattern("BAAAB", "BXXXB", "BXXXB", "BXXXB", "BAAAB")
        .pattern("ABBBA", "X D X", "X   X", "X   X", "ABBBA")
        .pattern("ABBBA", "XDFDX", "X G X", "X   X", "ABBBA")
        .pattern("ABBBA", "X D X", "X   X", "X   X", "ABBBA")
        .pattern("BECEB", "BXXXB", "BXXXB", "BXXXB", "BAAAB")
        .set('A', api.anyOf(
            api.block('ars_nouveau:smooth_sourcestone_large_bricks'),   //平滑魔源石大砖块（占位）
            api.tag('mmcr:item_ports'),                                 //物品端口（MMCR 标签，扩展总线已从中移除）
            api.anyOfSourceInput()                                      //魔源输入接口
        ))
        .set('E', api.anyOf(
            api.block('ars_nouveau:smooth_sourcestone_large_bricks'),   //平滑魔源石大砖块（占位）
            api.tag('kubejs:parallel_controllers'),                     //并行器（普通 / 进阶 / 强化）
            api.block('mmcr:factory_controller')                        //工厂控制器
        ))
        .set('B', api.block('ars_nouveau:smooth_sourcestone_large_bricks'))   //平滑魔源石大砖块（固定）
        .set('X', api.block('mekanism:structural_glass'))
        .set('D', api.state('ars_nouveau:arcane_platform[facing=up]'))
        .set('F', api.block('ars_nouveau:arcane_core'))
        .set('G', api.block('ars_nouveau:imbuement_chamber'))
        .controller('C')
        .build()
})
