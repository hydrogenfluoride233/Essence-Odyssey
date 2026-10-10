MMCREvents.server(event => {
    const api = event.getAPI()
    const structure = event.createStructure("mmcr:industrial_imbuement")
        .pattern("XYYYX", "XBBBX", "XBBBX", "XBBBX", "XXXXX")
        .pattern("YXXXY", "B D B", "B   B", "B   B", "XXXXX")
        .pattern("YXXXY", "BDGDB", "B H B", "B   B", "XXZXX")
        .pattern("YXXXY", "B D B", "B   B", "B   B", "XXXXX")
        .pattern("XYCYX", "XBBBX", "XBBBX", "XBBBX", "XXXXX")
        .set('X', api.block('ars_nouveau:smooth_sourcestone_large_bricks'))
        .set('Y', api.anyOf(
            api.block('mmcr:basic_casing'),   //基础机器外壳（占位）
            api.anyOfItemInput(),             //物品输入总线
            api.anyOfItemOutput(),            //物品输出总线
            api.anyOfSourceInput()            //魔源输入接口
        ))
        .set('Z', api.anyOf(
            api.block('mmcr:basic_casing'),   //基础机器外壳（占位）
            api.parallelControllers()         //并行器
        ))
        .set('B', api.block('mekanism:structural_glass'))
        .set('D', api.state('ars_nouveau:arcane_platform[facing=up]'))
        .set('G', api.block('ars_nouveau:arcane_core'))
        .set('H', api.block('ars_nouveau:imbuement_chamber'))
        .controller('C')
        .build()
})
