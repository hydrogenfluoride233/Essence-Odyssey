MMCREvents.server(event => {
    const api = event.getAPI()

    event.createStructure("mmcr:industrial_imbuement")
        .pattern("XYYYX", "XAAAX", "XAAAX", "XAAAX", "XYYYX")
        .pattern("YXXXY", "A B A", "A   A", "A   A", "YXXXY")
        .pattern("YXXXY", "ABDBA", "A E A", "A   A", "YXXXY")
        .pattern("YXXXY", "A B A", "A   A", "A   A", "YXXXY")
        .pattern("XZCZX", "XAAAX", "XAAAX", "XAAAX", "XYYYX")
        .set('X', api.block('ars_nouveau:smooth_sourcestone_large_bricks'))
        .set('Y', api.anyOf(
            api.block('ars_nouveau:smooth_sourcestone_large_bricks'),
            api.tag('mmcr:item_ports'),                                 //物品端口
            api.anyOfSourceInput()                                      //魔源输入接口
        ))
        .set('Z', api.anyOf(
            api.block('ars_nouveau:smooth_sourcestone_large_bricks'),
            api.tag('kubejs:parallel_controllers'),                     //并行器
            api.block('mmcr:factory_controller')                        //工厂控制器
        ))
        .set('A', api.block('mekanism:structural_glass'))
        .set('B', api.state('ars_nouveau:arcane_platform[facing=up]'))
        .set('D', api.block('ars_nouveau:arcane_core'))
        .set('E', api.block('ars_nouveau:imbuement_chamber'))
        .controller('C')
        .build()

    event.createStructure("mmcr:past_astral_altar")
        .pattern("XXX     XXX", "           ", "           ", "           ", "           ", "           ")
        .pattern("XAAYYYYYAAX", " B       B ", " D       D ", " E       E ", " FX     XF ", "           ")
        .pattern("XAGGGGGGGAX", "           ", "           ", "           ", " X       X ", "  XXX XXX  ")
        .pattern(" YGGGGGGGY ", "           ", "           ", "           ", "           ", "  X     X  ")
        .pattern(" YGGGGGGGY ", "           ", "           ", "           ", "           ", "  X     X  ")
        .pattern(" YGGGGGGGY ", "     H     ", "           ", "           ", "           ", "     I     ")
        .pattern(" YGGGGGGGY ", "           ", "           ", "           ", "           ", "  X     X  ")
        .pattern(" YGGGGGGGY ", "           ", "           ", "           ", "           ", "  X     X  ")
        .pattern("XAGGGGGGGAX", "           ", "           ", "           ", " X       X ", "  XXX XXX  ")
        .pattern("XAAYZCZYAAX", " B       B ", " D       D ", " E       E ", " FX     XF ", "           ")
        .pattern("XXX     XXX", "           ", "           ", "           ", "           ", "           ")
        .set('X', api.block('astralsorcery:marble_bricks'))
        .set('Y', api.anyOf(
            api.block('astralsorcery:marble_bricks'),
            api.tag('mmcr:item_ports'),                                 //物品端口
            api.tag('mmcr:fluid_ports'),                                //流体端口
            api.tag('mmcr:neoforge_energy_ports'),                      //能量端口
        ))
        .set('Z', api.anyOf(
            api.block('astralsorcery:marble_bricks'),
            api.tag('kubejs:parallel_controllers'),                     //并行器
            api.block('mmcr:factory_controller')                        //工厂控制器
        ))
        .set('A', api.block('astralsorcery:marble_raw'))
        .set('B', api.block('astralsorcery:marble_runed'))
        .set('D', api.state('astralsorcery:marble_pillar[pillartype=bottom]'))
        .set('E', api.state('astralsorcery:marble_pillar[pillartype=top]'))
        .set('F', api.block('astralsorcery:marble_chiseled'))
        .set('G', api.block('astralsorcery:sooty_marble_raw'))
        .set('H', api.block('astralsorcery:altar_radiance'))
        .set('I', api.block('astralsorcery:starlight_focus_rock_crystal'))
        .controller('C')
        .build()
})
