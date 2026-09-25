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
        "kubejs:sky_stone_mainboard",
        "ae2:mysterious_cube",
        [
            event.recipes.create.deploying(
                "ae2:smooth_sky_stone_block",
                ["ae2:mysterious_cube","createaddition:capacitor"]
            ),
            event.recipes.create.deploying(
                "ae2:smooth_sky_stone_block",
                ["ae2:smooth_sky_stone_block","ae2:charged_certus_quartz_crystal"]
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
        "ae2:smooth_sky_stone_block",1)//陨星主板

    event.recipes.create.sequenced_assembly(
        "4x ae2:not_so_mysterious_cube",
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
        "kubejs:sky_stone_mainboard",4)//没那么神秘的方块

    //处理器序列组装
    const ProcessorAssemblyList = [
        ["ae2:logic_processor","enderio:redstone_alloy_ingot","ae2:printed_logic_processor"],//逻辑处理器
        ["ae2:calculation_processor","enderio:redstone_alloy_ingot","ae2:printed_calculation_processor"],//运算处理器
        ["ae2:engineering_processor","enderio:redstone_alloy_ingot","ae2:printed_engineering_processor"],//工程处理器
        ["advanced_ae:quantum_processor","enderio:redstone_alloy_ingot","advanced_ae:printed_quantum_processor"],//量子处理器
        ["appflux:energy_processor","enderio:redstone_alloy_ingot","appflux:printed_energy_processor"],//能量处理器
        ["extendedae:concurrent_processor","enderio:redstone_alloy_ingot","extendedae:concurrent_processor_print"],//并发处理器
        ["megacells:accumulation_processor","enderio:redstone_alloy_ingot","megacells:printed_accumulation_processor"],//累积处理器
        ["appliedcreate:stress_processor","enderio:redstone_alloy_ingot","appliedcreate:stress_circuit_board"],//安山应力处理器
        ["appliedcreate:advanced_stress_processor","enderio:redstone_alloy_ingot","appliedcreate:advanced_stress_circuit_board"],//黄铜应力处理器
    ]

    ProcessorAssemblyList.forEach(([output,middle,board])=>
        event.recipes.create.sequenced_assembly(
            output,
            "ae2:printed_silicon",
            [
                event.recipes.create.deploying(
                    "ae2:printed_silicon",
                    ["ae2:printed_silicon",middle]
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

    //钢板：序列组装（工程师锤 + 动力冲压机，循环十次）
    const PlateSteps = [
        event.recipes.create.deploying(
            "mekanism:ingot_steel",
            ["mekanism:ingot_steel","immersiveengineering:hammer"]
        ).keepHeldItem(),//工程师锤
        event.recipes.create.pressing(
            "mekanism:ingot_steel",
            "mekanism:ingot_steel"
        )//动力冲压机
    ]

    event.recipes.create.sequenced_assembly(
        "immersiveengineering:plate_steel",
        "mekanism:ingot_steel",
        PlateSteps,
        "mekanism:ingot_steel",10
    )//钢板

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
            B:"kubejs:empowered_enori_crystal_dust",
            C:"actuallyadditions:iron_casing",
            D:"kubejs:empowered_restonia_crystal_dust",
            E:"actuallyadditions:basic_coil"
        }
    )//原子再构机

    //有序合成=>动力合成
    const ShapedMechanicalList = [
            "actuallyadditions:crusher_double",
            "actuallyadditions:powered_furnace",
            "modularrouters:modular_router",
            "modularrouters:blank_upgrade",
            "modularrouters:blank_module",
            "pneumaticcraft:manual_compressor",
            "pneumaticcraft:solar_compressor",
            "pneumaticcraft:liquid_compressor",
            "pneumaticcraft:thermal_compressor",
            "pneumaticcraft:air_compressor",
            "pneumaticcraft:flux_compressor",
            "pneumaticcraft:electrostatic_compressor",
            "pneumaticcraft:thermopneumatic_processing_plant",
            "pneumaticcraft:refinery",
            "pneumaticcraft:refinery_output"
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
