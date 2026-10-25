ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"create:item_application/andesite_casing_from_log"})           //机壳
    event.remove({id:"create:item_application/andesite_casing_from_wood"})
    event.remove({id:"create:item_application/copper_casing_from_log"})
    event.remove({id:"create:item_application/copper_casing_from_wood"})
    event.remove({id:"create:item_application/brass_casing_from_log"})
    event.remove({id:"create:item_application/brass_casing_from_wood"})
    event.remove({id:"create:crafting/kinetics/basin"})                             //工作盆
    event.remove({id:"create:crafting/materials/andesite_alloy"})                   //安山合金
    event.remove({id:"create:crafting/materials/andesite_alloy_from_zinc"})
    event.remove({id:"create:crafting/kinetics/mechanical_crafter"})                //动力合成器
    event.remove({id:"create:mixing/brass_ingot"})                                  //黄铜
    event.remove({id:"create:crushing/compat/immersiveengineering/coke_block"})     //焦煤
    event.remove({id:"create:crushing/compat/immersiveengineering/coal_coke"})
    event.remove({id:"createmoremachines:mixing/netherite_alloy"})                  //下界合金
    event.remove({id:"createmoremachines:mixing/end_alloy"})                        //末地合金
    event.remove({id:"createmoremachines:mechanical_crafting/beyond_alloy"})        //超越合金
    event.remove({id:"create:crafting/kinetics/empty_blaze_burner"})                //烈焰人燃烧室
    event.remove({id:"create:crafting/kinetics/white_sail"})                        //风帆
    event.remove({id:"starbunclemania:mixing/liquid_source_1000"})                  //液态魔源
    event.remove({id:"create:pressing/compat/immersiveengineering/plate_steel"})    //钢板
    event.remove({id:"cobblegengalore:crafting/block_gen_copper"})                  //方块制造机
    event.remove({id:"cobblegengalore:crafting/block_gen_iron"})
    event.remove({id:"cobblegengalore:crafting/block_gen_gold"})
    event.remove({id:"cobblegengalore:crafting/block_gen_emerald"})
    event.remove({id:"cobblegengalore:crafting/block_gen_diamond"})
    event.remove({id:"cobblegengalore:crafting/block_gen_netherite"})

    //工作台配方
    event.replaceInput(
        {id:"create:crafting/kinetics/whisk"},
        "#c:plates/iron",
        "#c:wires/iron"
    )//搅拌器

    event.replaceInput(
        {id:"create:crafting/kinetics/water_wheel"},
        "create:shaft",
        "create_connected:encased_chain_cogwheel"
    )//水车

    event.shaped(
        "create:empty_blaze_burner",
        ["ABA","BCB","ABA"],
        {
            A:"immersiveengineering:stick_iron",
            B:"ars_nouveau:fire_essence",
            C:"minecraft:netherrack"
        }
    )//烈焰人燃烧室

    event.replaceInput(
        {id:"create:crafting/kinetics/steam_engine"},
        "#c:plates/gold",
        "create:precision_mechanism"
    )//蒸汽引擎

    //动力冲压机
    //格式:[输出,输入]
    const PressList = [
        ["kubejs:osmium_sheet","mekanism:ingot_osmium"],
        ["kubejs:tin_sheet","mekanism:ingot_tin"],
        ["kubejs:iesnium_sheet","occultism:iesnium_ingot"]
    ]

    PressList.forEach(([output,input])=>
        event.recipes.create.pressing(output,input))

    //粉碎轮
    //格式:[输出,输入]
    //概率产物用 CreateItem.of(),标签输入用 Ingredient.of()
    const CrushList = [
        [
            "4x naturesaura:gold_powder",
            "naturesaura:gold_leaf"
        ],//金叶粉

        [
            CreateItem.of("mekanism:sawdust",0.25),
            Ingredient.of("#farmersdelight:barks")
        ],//至高木→锯末

        [
            "kubejs:paradox_collapser",
            "create:crushing_wheel"
        ],//悖论物质

        [
            "kubejs:empowered_restonia_crystal_dust",
            "actuallyadditions:empowered_restonia_crystal"
        ],//充能红石水晶粉

        [
            "kubejs:empowered_palis_crystal_dust",
            "actuallyadditions:empowered_palis_crystal"
        ],//充能青金石水晶粉

        [
            "kubejs:empowered_diamatine_crystal_dust",
            "actuallyadditions:empowered_diamatine_crystal"
        ],//充能钻石水晶粉

        [
            "kubejs:empowered_void_crystal_dust",
            "actuallyadditions:empowered_void_crystal"
        ],//充能煤晶粉

        [
            "kubejs:empowered_enori_crystal_dust",
            "actuallyadditions:empowered_enori_crystal"
        ],//充能铁晶粉

        [
            "kubejs:empowered_emeradic_crystal_dust",
            "actuallyadditions:empowered_emeradic_crystal"
        ],//充能绿宝石水晶粉
    ]
   
    CrushList.forEach(([output,input])=>
        event.recipes.create.crushing(output,input))

    //石磨
    //格式:[输出,输入]
    const MillstoneList = [
        [
            "4x naturesaura:gold_powder",
            "naturesaura:gold_leaf"
        ],//金叶粉

        [
            "eternal_starlight:dusted_shard",
            "eternal_starlight:dusted_gravel"
        ],//尘蒙碎片
    ]

    MillstoneList.forEach(([output,input])=>
        event.recipes.create.milling(output,input))

    //混合搅拌
    //格式:[输出,输入,热量]
    //热量填"heated","superheated"或 null
    const MixList = [
        [
            "kubejs:calibration_gel",
            [
                "kubejs:crystal_aqua",
                "kubejs:crystal_ignis",
                "kubejs:crystal_terra",
                "kubejs:crystal_aer",
                "kubejs:crystal_perditio",
                "kubejs:crystal_ordo",
                "justdirethings:gooblock_tier1",
                "minecraft:glass_bottle"
            ],
            "superheated"
        ],//校准凝胶

        [
            "immersiveengineering:alloybrick",
            [
                "minecraft:brick",
                Ingredient.of("#c:sandstone/blocks")
            ],
            "heated"
        ],//窑砖

        [
            "createmoremachines:netherite_alloy",
            [
                "create:andesite_alloy",
                "cataclysm:ignitium_ingot",
                "minecraft:nether_star",
                "minecraft:netherite_ingot",
                "4000x createmoremachines:binder"
            ],
            "heated"
        ],//下界合金

        [
            "createmoremachines:end_alloy",
            [
                "createmoremachines:netherite_alloy",
                "cataclysm:cursium_ingot",
                "minecraft:dragon_head",
                "minecraft:dragon_egg",
                "8000x createmoremachines:binder"
            ],
            "superheated"
        ],//末地合金

        [
            "5x mmcr:modularium",
            [
                "naturesaura:tainted_gold",
                "mekanism:ingot_steel",
                "create:brass_ingot",
                "pneumaticcraft:ingot_iron_compressed",
                "megacells:sky_steel_ingot",
                "immersiveengineering:ingot_hop_graphite",
                "kubejs:unknown_mixture",
                "powah:steel_energized",
                "250x immersiveengineering:redstone_acid"
            ],
            "superheated"
        ],//模块化合金锭
    ]

    MixList.forEach(([output,input,heat])=>{
        const recipe = event.recipes.create.mixing(output,input)

        if(heat==="heated"){
            recipe.heated()
        }

        if(heat==="superheated"){
            recipe.superheated()
        }
    })

    //塑形
    //格式:[输出,输入]
    const CompactList = [
        [
            "kubejs:unknown_mixture",
            [
                "thaumon:mutagen",
                "ae2:sky_dust",
                "ae2:certus_quartz_dust",
                "1000x minecraft:lava"
            ]
        ],//未知混合物
    ]

    CompactList.forEach(([output,input])=>
        event.recipes.create.compacting(output,input))

    //手动物品使用
    //格式:[输出,[输入方块,输入物品]]
    const ApplicationList = [
        [
            "create:andesite_casing",
            [
                "quark:stripped_ancient_log",
                "create:andesite_alloy"
            ]
        ],//安山机壳

        [
            "create:andesite_casing",
            [
                "quark:stripped_ancient_wood",
                "create:andesite_alloy"
            ]
        ],//安山机壳

        [
            "create:brass_casing",
            [
                "quark:stripped_ancient_log",
                "create:brass_ingot"
            ]
        ],//黄铜机壳

        [
            "create:brass_casing",
            [
                "quark:stripped_ancient_wood",
                "create:brass_ingot"
            ]
        ],//黄铜机壳

        [
            "create:copper_casing",
            [
                "quark:stripped_ancient_log",
                "minecraft:copper_ingot"
            ]
        ],//铜机壳

        [
            "create:copper_casing",
            [
                "quark:stripped_ancient_wood",
                "minecraft:copper_ingot"
            ]
        ],//铜机壳

        [
            "mmcr:basic_casing",
            [
                "create:andesite_casing",
                "mmcr:modularium"
            ]
        ],//基础机器外壳
    ]

    ApplicationList.forEach(([output,input])=>
        event.recipes.create.item_application(output,input))

    //使用
    //格式:[输出,[物品,样板],是否消耗模板]
    //第三项填 true 时消耗模板物品
    const DeployList = [
        [
            "ae2:printed_logic_processor",
            [Ingredient.of("#c:ingots/gold"),"ae2:logic_processor_press"],
            false
        ],//逻辑电路板

        [
            "ae2:printed_calculation_processor",
            ["ae2:certus_quartz_crystal","ae2:calculation_processor_press"],
            false
        ],//运算电路板

        [
            "ae2:printed_engineering_processor",
            ["minecraft:diamond","ae2:engineering_processor_press"],
            false
        ],//工程电路板

        [
            "ae2:printed_silicon",
            [Ingredient.of("#c:silicon"),"ae2:silicon_press"],
            false
        ],//硅板

        [
            "advanced_ae:printed_quantum_processor",
            ["advanced_ae:quantum_alloy","advanced_ae:quantum_processor_press"],
            false
        ],//量子电路板

        [
            "appflux:printed_energy_processor",
            ["appflux:charged_redstone","appflux:energy_processor_press"],
            false
        ],//能量电路板

        [
            "extendedae:concurrent_processor_print",
            ["extendedae:entro_crystal","extendedae:concurrent_processor_press"],
            false
        ],//并发电路板

        [
            "megacells:printed_accumulation_processor",
            ["megacells:sky_steel_ingot","megacells:accumulation_processor_press"],
            false
        ],//累积电路板

        [
            "appliedcreate:stress_circuit_board",
            ["createdeco:andesite_sheet","ae2:printed_calculation_processor"],
            true
        ],//安山应力电路板

        [
            "appliedcreate:advanced_stress_circuit_board",
            ["create:brass_sheet","ae2:printed_calculation_processor"],
            true
        ],//黄铜应力电路板
    ]

    DeployList.forEach(([output,input,consumeTemplate])=>{
        const recipe = event.recipes.create.deploying(output,input)

        if(!consumeTemplate){
            recipe.keepHeldItem()
        }
    })

    //序列组装
    event.recipes.create.sequenced_assembly(
        "4x kubejs:sky_stone_mainboard",
        "ae2:mysterious_cube",
        [
            event.recipes.create.deploying(
                "ae2:smooth_sky_stone_block",
                ["ae2:mysterious_cube","createaddition:capacitor"]
            ),
            event.recipes.create.deploying(
                "ae2:smooth_sky_stone_block",
                ["ae2:smooth_sky_stone_block","ae2:fluix_crystal"]
            ),
            event.recipes.create.deploying(
                "ae2:smooth_sky_stone_block",
                ["ae2:smooth_sky_stone_block","create_connected:control_chip"]
            ),
            event.recipes.create.cutting(
                "ae2:smooth_sky_stone_block",
                "ae2:smooth_sky_stone_block"
            ),
            event.recipes.create.pressing(
                "ae2:smooth_sky_stone_block",
                "ae2:smooth_sky_stone_block"
            )
        ],
        "ae2:smooth_sky_stone_block",2
    )//陨星主板

    event.recipes.create.sequenced_assembly(
        "ae2:not_so_mysterious_cube",
        "kubejs:sky_stone_mainboard",
        [
            event.recipes.create.deploying(
                "kubejs:sky_stone_mainboard",
                ["kubejs:sky_stone_mainboard","kubejs:aura_diode"]
            ),
            event.recipes.create.deploying(
                "kubejs:sky_stone_mainboard",
                ["kubejs:sky_stone_mainboard","kubejs:source_amplifier"]
            ),
            event.recipes.create.deploying(
                "kubejs:sky_stone_mainboard",
                ["kubejs:sky_stone_mainboard","kubejs:energy_capacitor"]
            ),
            event.recipes.create.deploying(
                "kubejs:sky_stone_mainboard",
                ["kubejs:sky_stone_mainboard","kubejs:calibration_gel"]
            ),
            event.recipes.create.deploying(
                "kubejs:sky_stone_mainboard",
                ["kubejs:sky_stone_mainboard","kubejs:arcane_wafer"]
            ),
            event.recipes.create.pressing(
                "kubejs:sky_stone_mainboard",
                "kubejs:sky_stone_mainboard"
            )
        ],
        "kubejs:sky_stone_mainboard",4
    )//没那么神秘的方块

    event.recipes.create.sequenced_assembly(
        "pneumaticcraft:printed_circuit_board",
        "pneumaticcraft:unassembled_pcb",
        [
            event.recipes.create.deploying(
                "pneumaticcraft:unassembled_pcb",
                ["pneumaticcraft:unassembled_pcb","immersiveengineering:electron_tube"]
            ),
            event.recipes.create.deploying(
                "pneumaticcraft:unassembled_pcb",
                ["pneumaticcraft:unassembled_pcb","pneumaticcraft:transistor"]
            ),
            event.recipes.create.deploying(
                "pneumaticcraft:unassembled_pcb",
                ["pneumaticcraft:unassembled_pcb","pneumaticcraft:capacitor"]
            )
        ],
        "pneumaticcraft:unassembled_pcb",2
    )//印刷电路板

    event.recipes.create.sequenced_assembly(
        "immersiveengineering:plate_steel",
        "mekanism:ingot_steel",
        [
            event.recipes.create.deploying(
                "mekanism:ingot_steel",
                ["mekanism:ingot_steel","immersiveengineering:hammer"]
            ).keepHeldItem(),
            event.recipes.create.pressing(
                "mekanism:ingot_steel",
                "mekanism:ingot_steel"
            )
        ],
        "mekanism:ingot_steel",10
    )//钢板

    event.recipes.create.sequenced_assembly(
        "immersiveengineering:stick_steel",
        "immersiveengineering:plate_steel",
        [
            event.recipes.create.filling(
                "immersiveengineering:plate_steel",
                ["immersiveengineering:plate_steel", Fluid.of("minecraft:lava", 500)]
            ),
            event.recipes.create.deploying(
                "immersiveengineering:plate_steel",
                ["immersiveengineering:plate_steel", "immersiveengineering:mold_rod"]
            ).keepHeldItem(),
            event.recipes.create.pressing(
                "immersiveengineering:plate_steel",
                "immersiveengineering:plate_steel"
            )
        ],
        "immersiveengineering:plate_steel",1
    )//钢棒

    //处理器序列组装
    const ProcessorAssemblyList = [
        ["ae2:logic_processor","ae2:printed_logic_processor"],//逻辑处理器
        ["ae2:calculation_processor","ae2:printed_calculation_processor"],//运算处理器
        ["ae2:engineering_processor","ae2:printed_engineering_processor"],//工程处理器
        ["advanced_ae:quantum_processor","advanced_ae:printed_quantum_processor"],//量子处理器
        ["appflux:energy_processor","appflux:printed_energy_processor"],//能量处理器
        ["extendedae:concurrent_processor","extendedae:concurrent_processor_print"],//并发处理器
        ["megacells:accumulation_processor","megacells:printed_accumulation_processor"],//累积处理器
        ["appliedcreate:stress_processor","appliedcreate:stress_circuit_board"],//安山应力处理器
        ["appliedcreate:advanced_stress_processor","appliedcreate:advanced_stress_circuit_board"],//黄铜应力处理器
    ]

    ProcessorAssemblyList.forEach(([output,board])=>
        event.recipes.create.sequenced_assembly(
            output,
            "ae2:printed_silicon",
            [
                event.recipes.create.deploying(
                    "ae2:printed_silicon",
                    ["ae2:printed_silicon","minecraft:redstone"]
                ),
                event.recipes.create.deploying(
                    "ae2:printed_silicon",
                    ["ae2:printed_silicon",board]
                ),
                event.recipes.create.cutting(
                    "ae2:printed_silicon",
                    "ae2:printed_silicon"
                )
            ],
            "ae2:printed_silicon",1
        )
    )

    //动力合成
    event.recipes.create.mechanical_crafting(
        "actuallyadditions:crusher",
        ["ABC","DED","CBA"],
        {
            A:"actuallyadditions:restonia_crystal",
            B:"ars_nouveau:glyph_crush",
            C:"#c:cobblestones",
            D:"actuallyadditions:basic_coil",
            E:"actuallyadditions:iron_casing"
        }
    )//磨粉机

    event.recipes.create.mechanical_crafting(
        "actuallyadditions:atomic_reconstructor",
        ["DBA","ECE","ABD"],
        {
            A:"#c:cobblestones",
            B:"actuallyadditions:enori_crystal",
            C:"actuallyadditions:iron_casing",
            D:"actuallyadditions:restonia_crystal",
            E:"actuallyadditions:basic_coil"
        }
    )//原子再构机

    event.recipes.create.mechanical_crafting(
        "actuallyadditions:canola_press",
        ["BCA","DED","ACB"],
        {
            A:"#c:cobblestones",
            B:"actuallyadditions:enori_crystal",
            C:"actuallyadditions:canola_seeds",
            D:"actuallyadditions:basic_coil",
            E:"actuallyadditions:iron_casing"
        }
    )//油菜压榨机

    event.recipes.create.mechanical_crafting(
        "cobblegengalore:block_gen_iron",
        ["ABA","BCB","ABA"],
        {
            A:"quark:white_corundum",
            B:"minecraft:iron_ingot",
            C:"cobblegengalore:block_gen_copper"
        }
    )//铁质方块制造机

    event.recipes.create.mechanical_crafting(
        "actuallyadditions:empowerer",
        [
            "  F  ",
            "  D  ",
            " AEA ",
            "BBCBB",
            "GGGGG"
        ],
        {
            A:"pneumaticcraft:printed_circuit_board",
            B:"immersiveengineering:circuit_board",
            C:"createaddition:modular_accumulator",
            D:"actuallyadditions:restonia_crystal_cluster",
            E:"actuallyadditions:display_stand",
            F:"actuallyadditions:double_battery",
            G:"actuallyadditions:smooth_black_quartz_block"
        }
    )//充能台

    event.recipes.create.mechanical_crafting(
        "3x immersiveengineering:cokebrick",
        ["ABA","BCB","ABA"],
        {
            A:"minecraft:clay_ball",
            B:"mekanism:ingot_steel",
            C:"cataclysm:stone_tiles"
        }
    )//焦炉砖

    event.recipes.create.mechanical_crafting(
        "3x immersiveengineering:blastbrick",
        ["ABA","BCB","ABA"],
        {
            A:"justdirethings:coal_t1",
            B:"ars_nouveau:fire_essence",
            C:"minecraft:magma_block"
        }
    )//高炉砖

    event.recipes.create.mechanical_crafting(
        "pneumaticcraft:air_compressor",
        ["AAA","A B","ACA"],
        {
            A:"pneumaticcraft:reinforced_bricks",
            B:"pneumaticcraft:pressure_tube",
            C:"ironfurnaces:obsidian_furnace"
        }
    )//空气压缩机

    event.recipes.create.mechanical_crafting(
        "pneumaticcraft:manual_compressor",
        ["BAB"," C ","DED"],
        {
            A:"pneumaticcraft:ingot_iron_compressed",
            B:"minecraft:red_dye",
            C:"pneumaticcraft:pressure_tube",
            D:"create:cogwheel",
            E:"pneumaticcraft:stone_base"
        }
    )//人力压缩机

    event.recipes.create.mechanical_crafting(
        "pneumaticcraft:thermal_compressor",
        ["ABA","BCB","ADA"],
        {
            A:"pneumaticcraft:ingot_iron_compressed",
            B:"pneumaticcraft:pressure_tube",
            C:"pneumaticcraft:air_compressor",
            D:"create:blaze_burner"
        }
    )//温差压缩机

    event.recipes.create.mechanical_crafting(
        "pneumaticcraft:liquid_compressor",
        ["ABA","BCB","ADA"],
        {
            A:"pneumaticcraft:ingot_iron_compressed",
            B:"pneumaticcraft:pressure_tube",
            C:"pneumaticcraft:air_compressor",
            D:"pneumaticcraft:small_tank"
        }
    )//液体压缩机

    event.recipes.create.mechanical_crafting(
        "pneumaticcraft:uv_light_box",
        ["AAA","BCD","BBB"],
        {
            A:"immersiveengineering:light_bulb",
            B:"pneumaticcraft:ingot_iron_compressed",
            C:"pneumaticcraft:pcb_blueprint",
            D:"pneumaticcraft:pressure_tube"
        }
    )//紫外线灯箱

    //有序合成=>动力合成
    const ShapedMechanicalList = [
            "actuallyadditions:crusher_double",
            "actuallyadditions:powered_furnace",
            "actuallyadditions:fermenting_barrel",
            "actuallyadditions:feeder",
            "actuallyadditions:lava_factory_controller",
            "actuallyadditions:energizer",
            "actuallyadditions:farmer",
            "actuallyadditions:vertical_digger",
            "actuallyadditions:enervator",
            "actuallyadditions:firework_box",
            "actuallyadditions:coffee_machine",
            "actuallyadditions:lava_factory_casing",
            "actuallyadditions:ranged_collector",
            

            "modularrouters:modular_router",
            "modularrouters:blank_upgrade",
            "modularrouters:blank_module",

            "buildinggadgets2:gadget_building",
            "buildinggadgets2:gadget_exchanging",
            "buildinggadgets2:gadget_copy_paste",
            "buildinggadgets2:gadget_cut_paste",
            "buildinggadgets2:gadget_destruction",

            "pylons:expulsion_pylon",
            "pylons:infusion_pylon",
            "pylons:harvester_pylon",
            "pylons:interdiction_pylon",
            "pylons:protection_pylon",

            "pneumaticcraft:flux_compressor",
            "pneumaticcraft:electrostatic_compressor",
            "pneumaticcraft:solar_compressor",
            "pneumaticcraft:etching_tank"
        ]

    function toCreateIngredient(ing){
        if (typeof ing === "string") return ing

        if (ing.item) return { item: ing.item }

        if (ing.tag) return { tag: ing.tag }

        if (ing.type === "neoforge:components" && ing.items) {
            const ids = Array.isArray(ing.items) ? ing.items : [ing.items]
            return { item: ids[0] }
        }

        if (Array.isArray(ing)) return toCreateIngredient(ing[0])

        return ing
    }

    ShapedMechanicalList.forEach(recipeId=>
        event.forEachRecipe({id:recipeId},recipe=>{
            const shapedRecipe = JSON.parse(recipe.json)

            if (shapedRecipe.type !== "minecraft:crafting_shaped" || !shapedRecipe.pattern || !shapedRecipe.key || !shapedRecipe.result) {
                console.error(`[Create] 无法转换有序工作台配方 ${recipeId}：配方不是有效的 minecraft:crafting_shaped`)
                return
            }

            const normalizedKey = {}
            for (const [k, v] of Object.entries(shapedRecipe.key)) {
                normalizedKey[k] = toCreateIngredient(v)
            }

            event.recipes.create.mechanical_crafting(
                shapedRecipe.result,
                shapedRecipe.pattern,
                normalizedKey
            )
            event.remove({id:recipeId})
        }))
})