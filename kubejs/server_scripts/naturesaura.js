ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"naturesaura:gold_powder"})                    //金叶粉
    event.remove({id:"naturesaura:gold_fiber"})                     //闪耀纤维
    event.remove({id:"naturesaura:wood_stand"})                     //木基座
    event.remove({output:"naturesaura:ancient_sapling"})            //远古树苗
    event.remove({output:"naturesaura:nature_altar"})               //自然祭坛
    event.remove({output:"naturesaura:gold_brick"})                 //黄金石砖
    event.remove({output:"naturesaura:token_sorrow"})               //忧伤印记
    event.remove({output:"naturesaura:token_anger"})                //愤怒印记
    event.remove({output:"naturesaura:token_fear"})                 //恐惧印记
    event.remove({output:"naturesaura:token_joy"})                  //愉悦印记
    event.remove({id:"naturesaura:altar/infused_iron"})             //灌注铁锭
    event.remove({id:"naturesaura:altar/infused_iron_block"})       //灌注铁块
    event.remove({id:"naturesaura:altar/infused_stone"})            //灌注之石
    event.remove({id:"naturesaura:altar/tainted_gold"})             //污染黄金
    event.remove({id:"naturesaura:altar/tainted_gold_block"})       //污染金块
    event.remove({id:"naturesaura:altar/soul_sand_crushing"})       //灵魂土
    event.remove({id:"naturesaura:lower_limiter"})                  //灵气失衡区
    event.remove({id:"naturesaura:generator_limit_remover"})        //制造催化剂
    event.remove({id:"naturesaura:spring"})                         //永恒之泉
    event.remove({id:"cookingforblockheads:sink"})                  //水槽

    //森林仪式
    //格式:[输出,输入,树苗,时间];时间单位为 tick
    const TreeRitualList = [
        [
            "8x naturesaura:gold_fiber",
            [
                "minecraft:gold_ingot",
                "minecraft:gold_ingot",
                "minecraft:gold_ingot",
                "minecraft:gold_ingot",
                "#minecraft:leaves",
                "#minecraft:leaves",
                "#minecraft:leaves",
                "#minecraft:leaves"
            ],
            "aether:golden_oak_sapling",20
        ],//闪耀纤维

        [ 
            "32x naturesaura:gold_leaf",
            [
                "naturesaura:gold_fiber",
                "naturesaura:gold_fiber",
                "naturesaura:gold_fiber",
                "naturesaura:gold_fiber",
                "#minecraft:leaves",
                "#minecraft:leaves",
                "#minecraft:leaves",
                "#minecraft:leaves"
            ],
            "minecraft:oak_sapling",20
        ],//黄金叶

        [ 
            "4x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:overworld'}]",
            [
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "kubejs:crystal_aqua",
                "kubejs:crystal_aqua",
                "kubejs:crystal_aqua",
                "kubejs:crystal_aqua",
            ],
            "integrateddynamics:menril_sapling",40
        ],//瓶装阳光

        [
            "4x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:nether'}]",
            [
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "kubejs:crystal_ignis",
                "kubejs:crystal_ignis",
                "kubejs:crystal_ignis",
                "kubejs:crystal_ignis",
            ],
            "integrateddynamics:menril_sapling",40
        ],//瓶装鬼魂

        [
            "4x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:twilight_forest'}]",
            [
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "kubejs:crystal_terra",
                "kubejs:crystal_terra",
                "kubejs:crystal_terra",
                "kubejs:crystal_terra",
            ],
            "integrateddynamics:menril_sapling",40
        ],//瓶装暮光

        [
            "4x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:aether'}]",
            [
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "kubejs:crystal_aer",
                "kubejs:crystal_aer",
                "kubejs:crystal_aer",
                "kubejs:crystal_aer",
            ],
            "integrateddynamics:menril_sapling",40
        ],//瓶装曙光

        [
            "4x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:end'}]",
            [
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "kubejs:crystal_perditio",
                "kubejs:crystal_perditio",
                "kubejs:crystal_perditio",
                "kubejs:crystal_perditio",
            ],
            "integrateddynamics:menril_sapling",40
        ],//瓶装黑暗

        [
            "4x naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:starlight'}]",
            [
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "naturesaura:bottle_two_the_rebottling",
                "kubejs:crystal_ordo",
                "kubejs:crystal_ordo",
                "kubejs:crystal_ordo",
                "kubejs:crystal_ordo",
            ],
            "integrateddynamics:menril_sapling",40
        ],//瓶装星光

        [
            "ars_nouveau:imbuement_chamber",
            [
                "ars_nouveau:starbuncle_shards",
                "minecraft:gold_block",
                "quark:ancient_fruit",
                "quark:ancient_fruit",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod"
            ],
            "upgrade_aquatic:river_sapling",100
        ],//灌注室

        [
            "ars_nouveau:enchanting_apparatus",
            [
                "ars_nouveau:glyph_interact",
                "naturesaura:ancient_bark",
                "ars_nouveau:water_essence",
                "ars_nouveau:fire_essence",
                "ars_nouveau:earth_essence",
                "ars_nouveau:air_essence",
                "kubejs:perditio_essence",
                "kubejs:ordo_essence"
            ],
            "upgrade_aquatic:river_sapling",100
        ],//附魔装置

        [
            "ars_nouveau:arcane_core",
            [
                "ars_nouveau:sourcestone",
                "ars_nouveau:sourcestone",
                "kubejs:perditio_essence",
                "kubejs:ordo_essence",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod"
            ],
            "upgrade_aquatic:river_sapling",100
        ],//奥术核心

        [
            "4x ars_nouveau:source_jar",
            [
                "ars_nouveau:archwood_slab",
                "ars_nouveau:archwood_planks",
                "#c:glass_blocks",
                "#c:glass_blocks",
                "#c:glass_blocks",
                "minecraft:gold_ingot",
                "#c:glass_blocks",
                "minecraft:gold_ingot"
                
            ],
            "upgrade_aquatic:river_sapling",40
        ],//魔源罐

        [
            "4x ars_nouveau:mob_jar",
            [
                "ars_nouveau:archwood_slab",
                "#c:glass_blocks",
                "#c:glass_blocks",
                "#c:glass_blocks",
                "minecraft:gold_ingot",
                "#c:glass_blocks",
                "minecraft:gold_ingot",
                "#c:glass_blocks"
                
            ],
            "upgrade_aquatic:river_sapling",40
        ],//收容罐

        [
            "starbunclemania:fluid_jar",
            [
                "ars_nouveau:archwood_slab",
                "ars_nouveau:blue_archwood_log",
                "#c:glass_blocks",
                "#c:glass_blocks",
                "#c:glass_blocks",
                "ars_nouveau:water_essence",
                "#c:glass_blocks",
                "ars_nouveau:water_essence"
                
            ],
            "upgrade_aquatic:river_sapling",40
        ],//流体罐

        [
            "ars_nouveau:agronomic_sourcelink",
            [
                "minecraft:wheat",
                "ars_nouveau:source_gem_block",
                "minecraft:wheat",
                "minecraft:wheat",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod"
                
            ],
            "ars_nouveau:green_archwood_sapling",100
        ],//农艺魔源通道

        [
            "ars_nouveau:volcanic_sourcelink",
            [
                "minecraft:lava_bucket",
                "ars_nouveau:source_gem_block",
                "minecraft:lava_bucket",
                "minecraft:lava_bucket",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod"
                
            ],
            "ars_nouveau:red_archwood_sapling",100
        ],//火山魔源通道

        [
            "ars_nouveau:alchemical_sourcelink",
            [
                "minecraft:brewing_stand",
                "ars_nouveau:source_gem_block",
                "minecraft:brewing_stand",
                "minecraft:brewing_stand",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod"
                
            ],
            "ars_nouveau:blue_archwood_sapling",100
        ],//炼金魔源通道

        [
            "ars_nouveau:vitalic_sourcelink",
            [
                "minecraft:glistering_melon_slice",
                "ars_nouveau:source_gem_block",
                "minecraft:glistering_melon_slice",
                "minecraft:glistering_melon_slice",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod"
                
            ],
            "ars_elemental:yellow_archwood_sapling",100
        ],//生死魔源通道

        [
            "ars_nouveau:mycelial_sourcelink",
            [
                "minecraft:mushroom_stew",
                "ars_nouveau:source_gem_block",
                "minecraft:mushroom_stew",
                "minecraft:mushroom_stew",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod"
                
            ],
            "ars_nouveau:purple_archwood_sapling",100
        ],//菌丝魔源通道

        [
            "starbunclemania:fluid_sourcelink",
            [
                "sauce:source_fluid_bucket",
                "ars_nouveau:source_gem_block",
                "sauce:source_fluid_bucket",
                "sauce:source_fluid_bucket",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod"
                
            ],
            "upgrade_aquatic:river_sapling",100
        ],//流体魔源通道

        [
            "naturesaura:ancient_sapling",
            [
                "ars_nouveau:source_gem",
                "ars_nouveau:source_gem",
                "quark:ancient_fruit",
                "quark:ancient_fruit",
                "naturesaura:gold_leaf",
                "minecraft:crimson_fungus",
                "naturesaura:gold_leaf",
                "minecraft:warped_fungus"
            ],
            "quark:ancient_sapling",50
        ],//自然灵气远古树苗

        [
            "quark:ancient_sapling",
            [
                "minecraft:sweet_berries",
                "ars_nouveau:bastion_pod",
                "ars_elemental:flashpine_pod",
                "ars_nouveau:bombegranate_pod",
                "minecraft:glow_berries",
                "ars_nouveau:frostaya_pod",
                "upgrade_aquatic:mulberry",
                "ars_nouveau:mendosteen_pod"
            ],
            "quark:yellow_blossom_sapling",50
        ],//夸克远古树苗

        [
            "2x naturesaura:token_sorrow",
            [
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:overworld'}]",
                "ars_nouveau:water_essence",
                "kubejs:crystal_aqua",
                "kubejs:crystal_aqua",
                "naturesaura:gold_leaf",
                "#minecraft:fishes",
                "naturesaura:gold_leaf",
                "#minecraft:fishes"
                
            ],
            "quark:ancient_sapling",20
        ],//忧伤印记

        [
            "2x naturesaura:token_anger",
            [
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:nether'}]",
                "ars_nouveau:fire_essence",
                "kubejs:crystal_ignis",
                "kubejs:crystal_ignis",
                "naturesaura:gold_leaf",
                "minecraft:magma_block",
                "naturesaura:gold_leaf",
                "minecraft:magma_block"
                
            ],
            "quark:ancient_sapling",20
        ],//愤怒印记

        [
            "2x naturesaura:token_fear",
            [
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:twilight_forest'}]",
                "ars_nouveau:earth_essence",
                "kubejs:crystal_terra",
                "kubejs:crystal_terra",
                "naturesaura:gold_leaf",
                "twilightforest:torchberries",
                "naturesaura:gold_leaf",
                "twilightforest:torchberries"
                
            ],
            "quark:ancient_sapling",20
        ],//恐惧印记

        [
            "2x naturesaura:token_joy",
            [
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:aether'}]",
                "ars_nouveau:air_essence",
                "kubejs:crystal_aer",
                "kubejs:crystal_aer",
                "naturesaura:gold_leaf",
                "aether:ambrosium_shard",
                "naturesaura:gold_leaf",
                "aether:ambrosium_shard"
                
            ],
            "quark:ancient_sapling",20
        ],//愉悦印记

        [
            "2x kubejs:token_confusion",
            [
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:end'}]",
                "kubejs:perditio_essence",
                "kubejs:crystal_perditio",
                "kubejs:crystal_perditio",
                "naturesaura:gold_leaf",
                "minecraft:ender_pearl",
                "naturesaura:gold_leaf",
                "minecraft:ender_pearl"
                
            ],
            "quark:ancient_sapling",20
        ],//茫然印记

        [
            "2x kubejs:token_serenity",
            [
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:starlight'}]",
                "kubejs:ordo_essence",
                "kubejs:crystal_ordo",
                "kubejs:crystal_ordo",
                "naturesaura:gold_leaf",
                "eternal_starlight:orbflora_light",
                "naturesaura:gold_leaf",
                "eternal_starlight:orbflora_light"   
            ],
            "quark:ancient_sapling",20
        ],//平和印记

        [
            "kubejs:aura_diode",
            [
                "thaumon:mutagen",
                "immersiveengineering:electron_tube",
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:overworld'}]",
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:nether'}]",
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'naturesaura:end'}]",
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:twilight_forest'}]",
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:aether'}]",
                "naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:'kubejs:starlight'}]"
            ],
            "minecraft:cherry_sapling",50
        ],//灵气二极管

        [
            "actuallyadditions:wood_casing",
            [
                "#thaumon:greatwood_logs",
                "#thaumon:greatwood_logs",
                "#thaumon:greatwood_logs",
                "#thaumon:greatwood_logs",
                "immersiveengineering:stick_treated",
                "immersiveengineering:stick_treated",
                "immersiveengineering:stick_treated",
                "immersiveengineering:stick_treated",

            ],
            "quark:orange_blossom_sapling",50
        ],//木质外壳

        [
            "actuallyadditions:wood_casing",
            [
                "#thaumon:silverwood_logs",
                "#thaumon:silverwood_logs",
                "#thaumon:silverwood_logs",
                "#thaumon:silverwood_logs",
                "immersiveengineering:stick_treated",
                "immersiveengineering:stick_treated",
                "immersiveengineering:stick_treated",
                "immersiveengineering:stick_treated",

            ],
            "quark:orange_blossom_sapling",50
        ],//木质外壳

        [
            "cookingforblockheads:sink",
            [
                "naturesaura:spring",
                "naturesaura:spring",
                "starbunclemania:glyph_place_fluid",
                "starbunclemania:glyph_pickup_fluid",
                "kubejs:aqua_essence_bucket",
                "ars_nouveau:water_essence",
                "kubejs:aqua_essence_bucket",
                "ars_nouveau:water_essence",
            ],
            "eternal_starlight:scarlet_sapling",100

        ],//水槽

        [
            "justdirethings:gooblock_tier2",
            [
                "justdirethings:gooblock_tier1",
                "kubejs:ignis_essence_bucket",
                "kubejs:ignis_essence_bucket",
                "kubejs:ignis_essence_bucket",
                "minecraft:blaze_powder",
                "minecraft:blaze_powder",
                "minecraft:nether_wart",
                "minecraft:nether_wart"
            ],
            "quark:red_blossom_sapling",50
        ],//烈焰蕾凝胶

        [
            "neovitae:ara_vitae",
            [
                "#twilightforest:fiery_vial",
                "naturesaura:nature_altar",
                "kubejs:aqua_essence_bucket",
                "kubejs:ignis_essence_bucket",
                "kubejs:terra_essence_bucket",
                "kubejs:aer_essence_bucket",
                "kubejs:perditio_essence_bucket",
                "kubejs:ordo_essence_bucket"
            ],
            "deep_aether:roseroot_sapling",200
        ],//命血祭坛

        [
            "neovitae:ara_vitae",
            [
                "#twilightforest:fiery_vial",
                "naturesaura:nature_altar",
                "kubejs:aqua_essence_bucket",
                "kubejs:ignis_essence_bucket",
                "kubejs:terra_essence_bucket",
                "kubejs:aer_essence_bucket",
                "kubejs:perditio_essence_bucket",
                "kubejs:ordo_essence_bucket"
            ],
            "deep_aether:blue_roseroot_sapling",200
        ],//命血祭坛
    ]

    TreeRitualList.forEach(([output,input,sapling,time])=>{
        event.recipes.naturesaura.tree_ritual(output,input,sapling,time)

        event.recipes.occultism.ritual(
            output,
            [
                "naturesaura:gold_powder",
                "naturesaura:gold_powder",
                "naturesaura:gold_powder",
                "naturesaura:gold_powder"
            ].concat(input),
            sapling,
            "occultism:ritual_tree",
            30
        ).ritualDummy("kubejs:ritual_tree")
    })

    //封装森林仪式
    event.forEachRecipe({type:"naturesaura:tree_ritual"},recipe=>{
        const source=JSON.parse(recipe.json)
        const ingredients=source.ingredients
        const sapling=source.sapling || source.input
        const output=source.output || source.result

        if(!output || !ingredients || ingredients.length===0 || !sapling) return

        event.recipes.occultism.ritual(
            output,
            [
                "naturesaura:gold_powder",
                "naturesaura:gold_powder",
                "naturesaura:gold_powder",
                "naturesaura:gold_powder"
            ].concat(ingredients),
            sapling,
            "occultism:ritual_tree",
            30
        ).ritualDummy("kubejs:ritual_tree")
    })

    //自然祭坛
    //格式:[输出,输入,灵气消耗,时间];时间单位为 tick
    const AltarList = [
        [
            "naturesaura:infused_iron",
            "twilightforest:fiery_ingot",
            9000,10
        ],//灌注铁锭

        [
            "naturesaura:infused_iron_block",
            "twilightforest:fiery_block",
            90000,50
        ],//灌注铁块

        [
            "naturesaura:infused_stone",
            "ars_nouveau:sourcestone",
            1000,10
        ],//灌注之石

        [
            "naturesaura:tainted_gold",
            "immersiveengineering:ingot_electrum",
            9000,10
        ],//污染黄金

        [
            "naturesaura:tainted_gold_block",
            "immersiveengineering:storage_electrum",
            90000,50
        ],//污染金块
    ]

    AltarList.forEach(([output,input,aura,time])=>{
        event.recipes.naturesaura.altar(output,input,aura,time)

        const crystalCount = Math.min(12,Math.max(1,Math.ceil(aura / 7500)))

        event.recipes.occultism.ritual(
            output,
            Array.from({length:crystalCount},()=>"kubejs:crystal_auram"),
            input,
            "occultism:ritual_nature",
            30
        ).ritualDummy("kubejs:ritual_nature")
    })

    //封装自然祭坛
    event.forEachRecipe({type:"naturesaura:altar"},recipe=>{
        const source = JSON.parse(recipe.json)
        const output = source.output
        const input = source.input
        const aura = source.aura
        if(!output || !input || !aura) return

        let activationItem = input.items || input.item || (input.tag ? `#${input.tag}` : input)
        const components = input.components || {}
        if(input.items === "naturesaura:aura_bottle" && components["naturesaura:aura_bottle_data"]){
            var auraType = components["naturesaura:aura_bottle_data"].aura_type
            activationItem = `naturesaura:aura_bottle[naturesaura:aura_bottle_data={aura_type:"${auraType}"}]`
        }
        if(input.items === "productivebees:spawn_egg_configurable_bee" && components["minecraft:entity_data"]){
            var entityData = components["minecraft:entity_data"]
            activationItem = `productivebees:spawn_egg_configurable_bee[entity_data={id:"${entityData.id}",type:"${entityData.type}"}]`
        }

        const crystalCount = Math.min(12,Math.max(1,Math.ceil(aura / 7500)))
        const ingredients = Array.from(
            {length:crystalCount},
            ()=>"kubejs:crystal_auram"
        )

        event.recipes.occultism.ritual(
            output,
            ingredients,
            activationItem,
            "occultism:ritual_nature",
            30
        ).ritualDummy("kubejs:ritual_nature")
    })

    //祭祀台
    //格式:[输出,输入,祭品]
    const OfferList = [
        [
            "kubejs:token_delirium",
            "kubejs:token_confusion",
            "naturesaura:calling_spirit"
        ],//迷惘印记

        [
            "kubejs:token_equanimity",
            "kubejs:token_serenity",
            "naturesaura:calling_spirit"
        ],//安定印记
    ]

    OfferList.forEach(([output,input,item])=>
        event.recipes.naturesaura.offering(output,input,item))
})
