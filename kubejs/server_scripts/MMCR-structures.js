MMCREvents.server(event => {
    const api = event.getAPI()

    //物品总线只认标准等级；extended 系列已删（本包用不到那么大吞吐量）
    const ItemBuses = [
        "item_input_bus_tiny", "item_input_bus_small", "item_input_bus",
        "item_input_bus_reinforced", "item_input_bus_big", "item_input_bus_huge", "item_input_bus_ludicrous",
        "item_output_bus_tiny", "item_output_bus_small", "item_output_bus",
        "item_output_bus_reinforced", "item_output_bus_big", "item_output_bus_huge", "item_output_bus_ludicrous"
    ].map(id=>api.block(`mmcr:${id}`))

    const structure = event.createStructure("mmcr:industrial_imbuement")
        //A = 可换端口位（导出时用铁块占位）；E = 并行仓位（导出时用金块占位）；B = 固定砖；C = 控制器
        .pattern("AAAAA", "BXXXB", "BXXXB", "BXXXB", "AAAAA")
        .pattern("ABBBA", "X D X", "X   X", "X   X", "ABBBA")
        .pattern("ABEBA", "XDFDX", "X G X", "X   X", "ABBBA")
        .pattern("ABBBA", "X D X", "X   X", "X   X", "ABBBA")
        .pattern("AACAA", "BXXXB", "BXXXB", "BXXXB", "AAAAA")
        .set('A', api.anyOf(
            api.block('ars_nouveau:smooth_sourcestone_large_bricks'),   //平滑魔源石大砖块（占位）
            ...ItemBuses,                                               //物品输入/输出总线（标准等级）
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
