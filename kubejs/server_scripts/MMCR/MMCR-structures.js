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
            api.tag('mmcr:item_ports'),                                 //物品接口
            api.tag('mmcr:ars_nouveau_source_input_ports')              //魔源输入接口
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
            api.tag('mmcr:item_ports'),                                 //物品接口
            api.tag('mmcr:fluid_ports'),                                //流体接口
            api.tag('mmcr:neoforge_energy_input_ports')                 //能量输入接口
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

    event.createStructure("mmcr:data_extractor")
        .pattern("  AAA  ", " AXXXA ", "AXXYXXA", "AXYYYXA", "AXXYXXA", " AXXXA ", "  AAA  ")
        .pattern(" AXXXA ", "A     A", "X     X", "X     X", "X     X", "A     A", " AXXXA ")
        .pattern("AXXYXXA", "X     X", "X     X", "Y     Y", "X     X", "X     X", "AXXYXXA")
        .pattern("AXYYYXA", "X     X", "Y     Y", "Y  B  Y", "Y     Y", "X     X", "AXYYYXA")
        .pattern("AXXYXXA", "X     X", "X     X", "Y     Y", "X     X", "X     X", "AXXYXXA")
        .pattern(" AXXXA ", "A     A", "X     X", "X     X", "X     X", "A     A", " AXXXA ")
        .pattern("  AAA  ", " AZCZA ", "AXXYXXA", "AXYYYXA", "AXXYXXA", " AXXXA ", "  AAA  ")
        .set('X', api.anyOf(
            api.block('mekanism:structural_glass'),
            api.block('pneumaticcraft:compressed_bricks')
        ))
        .set('Y', api.anyOf(
            api.block('mekanism:structural_glass'),
            api.block('pneumaticcraft:compressed_bricks'),
            api.tag('mmcr:item_ports'),                                 //物品接口
            api.tag('mmcr:fluid_input_ports'),                          //流体输入接口
            api.tag('mmcr:neoforge_energy_input_ports'),                //能量输入接口
            api.tag('mmcr:pneumaticcraft_air_input_ports'),             //气压输入接口
        ))
        .set('Z', api.anyOf(
            api.block('mekanism:structural_glass'),
            api.block('pneumaticcraft:compressed_bricks'),
            api.tag('kubejs:parallel_controllers'),                     //并行器
            api.block('mmcr:factory_controller')                        //工厂控制器
        ))
        .set('A', api.block('pneumaticcraft:compressed_bricks'))
        .set('B', api.block('astralsorcery:cave_illuminator'))
        .controller('C')
        .build()

    event.createStructure("mmcr:packaged_tree_ritual")
        .pattern("AYYYYYYYYYA", "AXXXXXXXXXA", "AXXXXXXXXXA", "AXXXXXXXXXA", "AXXXXXXXXXA", "AYYYYYYYYYA")
        .pattern("YBBBBBBBBBY", "X    D    X", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBBBBBBBBY", "X D     D X", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBBEEEBBBY", "X   FFF   X", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBEEEEEBBY", "X  FF FF  X", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBEEEEEBBY", "XD F G F DX", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBEEEEEBBY", "X  FF FF  X", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBBEEEBBBY", "X   FFF   X", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBBBBBBBBY", "X D     D X", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBBBBBBBBY", "X    D    X", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("AYYYZCZYYYA", "AXXXXXXXXXA", "AXXXXXXXXXA", "AXXXXXXXXXA", "AXXXXXXXXXA", "AYYYYYYYYYA")
        .set('X', api.block('mekanism:structural_glass'))
        .set('Y', api.anyOf(
            api.block('create:andesite_casing'),
            api.tag('mmcr:item_ports'),                                 //物品接口
            api.tag('mmcr:neoforge_energy_input_ports')                 //能量输入接口
        ))
        .set('Z', api.anyOf(
            api.block('create:andesite_casing'),
            api.tag('kubejs:parallel_controllers'),                     //并行器
            api.block('mmcr:factory_controller')                        //工厂控制器
        ))
        .set('A', api.block('create:andesite_casing'))
        .set('B', api.block('astralsorcery:infused_wood_infused'))
        .set('D', api.block('naturesaura:wood_stand'))
        .set('E', api.block('minecraft:oak_planks'))
        .set('F', api.block('naturesaura:gold_powder'))
        .set('G', api.block('astralsorcery:tree_beacon'))
        .controller('C')
        .build()

    event.createStructure("mmcr:packaged_nature_altar")
        .pattern("AYYYYYYYYYA", "AXXXXXXXXXA", "AXXXXXXXXXA", "AXXXXXXXXXA", "AXXXXXXXXXA", "AYYYYYYYYYA")
        .pattern("YBBBBBBBBBY", "X    D    X", "X    D    X", "X    E    X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBBFDFBBBY", "X         X", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBBFDFBBBY", "X  E   E  X", "X  G   G  X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBFFHFHFFBY", "X         X", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBDDFFFDDBY", "XD   I   DX", "XD       DX", "XE       EX", "X         X", "YXXXXXXXXXY")
        .pattern("YBFFHFHFFBY", "X         X", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBBFDFBBBY", "X  E   E  X", "X  G   G  X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBBFDFBBBY", "X         X", "X         X", "X         X", "X         X", "YXXXXXXXXXY")
        .pattern("YBBBBBBBBBY", "X    D    X", "X    D    X", "X    E    X", "X         X", "YXXXXXXXXXY")
        .pattern("AYYYZCZYYYA", "AXXXXXXXXXA", "AXXXXXXXXXA", "AXXXXXXXXXA", "AXXXXXXXXXA", "AYYYYYYYYYA")
        .set('X', api.block('mekanism:structural_glass'))
        .set('Y', api.anyOf(
            api.block('create:brass_casing'),
            api.tag('mmcr:item_ports'),                                 //物品接口
            api.tag('mmcr:ars_nouveau_source_input_ports'),             //魔源输入接口
            api.tag('mmcr:neoforge_energy_input_ports')                 //能量输入接口
        ))
        .set('Z', api.anyOf(
            api.block('create:brass_casing'),
            api.tag('kubejs:parallel_controllers'),                     //并行器
            api.block('mmcr:factory_controller')                        //工厂控制器
        ))
        .set('A', api.block('create:brass_casing'))
        .set('B', api.block('astralsorcery:infused_wood_infused'))
        .set('D', api.block('minecraft:stone_bricks'))
        .set('E', api.block('naturesaura:gold_brick'))
        .set('F', api.block('minecraft:oak_planks'))
        .set('G', api.state('enigmaticunity:iridescent_source_producer[facing=up]'))
        .set('H', api.block('minecraft:chiseled_stone_bricks'))
        .set('I', api.block('naturesaura:nature_altar'))
        .controller('C')
        .build()
})
