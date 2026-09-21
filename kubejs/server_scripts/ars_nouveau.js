ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"ars_nouveau:imbuement_chamber"})              //灌注室
    event.remove({id:"ars_nouveau:enchanting_apparatus"})           //附魔装置
    event.remove({id:"ars_nouveau:arcane_core"})                    //奥术核心
    event.remove({id:"ars_nouveau:source_jar"})                     //魔源罐
    event.remove({id:"ars_nouveau:mob_jar"})                        //收容罐
    event.remove({id:"starbunclemania:fluid_jar"})                  //流体罐
    event.remove({id:"ars_nouveau:imbuement_water_essence"})        //水之精华
    event.remove({id:"ars_nouveau:imbuement_fire_essence"})         //火之精华
    event.remove({id:"ars_nouveau:imbuement_earth_essence"})        //土之精华
    event.remove({id:"ars_nouveau:imbuement_air_essence"})          //气之精华
    event.remove({id:"ars_nouveau:imbuement_manipulation_essence"}) //操纵之精华
    event.remove({id:"ars_nouveau:imbuement_conjuration_essence"})  //召唤之精华
    event.remove({id:"ars_nouveau:imbuement_abjuration_essence"})   //防护之精华
    event.remove({id:"ars_elemental:imbuement_anima_essence"})      //灵魂之精华
    event.remove({id:"ars_nouveau:relay"})                          //魔源中转器
    event.remove({id:"ars_nouveau:agronomic_sourcelink"})           //农艺魔源通道
    event.remove({id:"ars_nouveau:volcanic_sourcelink"})            //火山魔源通道
    event.remove({id:"ars_nouveau:alchemical_sourcelink"})          //炼金魔源通道
    event.remove({id:"ars_nouveau:vitalic_sourcelink"})             //生死魔源通道
    event.remove({id:"ars_nouveau:mycelial_sourcelink"})            //菌丝魔源通道
    event.remove({id:"starbunclemania:fluid_sourcelink"})           //流体魔源通道
    event.remove({id:"starbunclemania:source_condenser"})           //魔源凝聚器
    
    //灌注室
    //格式:[输出,输入,魔源,基座材料]
    const ImbuementList = [
        [
            "kubejs:crystal_aqua",
            "ars_nouveau:water_essence",
            1000,
            [
                "quark:blue_corundum_cluster",
                "minecraft:blue_ice",
                "upgrade_aquatic:pickerelweed_block"
            ]
        ],//水之精华

        [
            "kubejs:crystal_ignis",
            "ars_nouveau:fire_essence",
            1000,
            [
                "quark:red_corundum_cluster",
                "minecraft:fire_charge",
                "quark:blaze_lantern"
            ]
        ],//火之精华

        [
            "kubejs:crystal_terra",
            "ars_nouveau:earth_essence",
            1000,
            [
                "quark:green_corundum_cluster",
                "minecraft:short_grass",
                "twilightforest:mayapple"
            ]
        ],//土之精华

        [
            "kubejs:crystal_aer",
            "ars_nouveau:air_essence",
            1000,
            [
                "quark:yellow_corundum_cluster",
                "minecraft:wind_charge",
                "deep_aether:goldenleaf_berries"
            ]
        ],//气之精华

        [
            "kubejs:crystal_perditio",
            "kubejs:perditio_essence",
            1000,
            [
                "quark:black_corundum_cluster",
                "minecraft:oxidized_copper_grate",
                "minecraft:end_crystal"
            ]
        ],//混沌精华

        [
            "kubejs:crystal_ordo",
            "kubejs:ordo_essence",
            1000,
            [
                "quark:white_corundum_cluster",
                "minecraft:chiseled_quartz_block",
                "eternal_starlight:starlight_flower"
            ]
        ],//秩序精华

        [
            "mekanism:ingot_bronze",
            "ars_nouveau:manipulation_essence",
            1000,
            [
                "quark:orange_corundum_cluster",
                "create:analog_lever",
                "quark:gold_button"
            ]
        ],//操纵之精华

        [
            "immersiveengineering:ingot_constantan",
            "ars_nouveau:conjuration_essence",
            1000,
            [
                "quark:indigo_corundum_cluster",
                "minecraft:writable_book",
                "#c:eggs"
            ]
        ],//召唤之精华

        [
            "immersiveengineering:ingot_electrum",
            "ars_nouveau:abjuration_essence",
            1000,
            [
                "quark:violet_corundum_cluster",
                "naturesaura:gold_fiber",
                "minecraft:armadillo_scute"
            ]
        ],//防护之精华

        [
            "eternal_starlight:soul_dew",
            "sauce:anima_essence",
            1000,
            [
                "minecraft:nether_star",
                "twilightforest:charm_of_keeping_3",
                "twilightforest:charm_of_life_2"
            ],
        ],//灵魂之精华

        ["quark:red_corundum","quark:orange_corundum",100,[]],
        ["quark:orange_corundum","quark:yellow_corundum",100,[]],
        ["quark:yellow_corundum","quark:green_corundum",100,[]],
        ["quark:green_corundum","quark:blue_corundum",100,[]],
        ["quark:blue_corundum","quark:indigo_corundum",100,[]],
        ["quark:indigo_corundum","quark:violet_corundum",100,[]],
        ["quark:violet_corundum","quark:white_corundum",100,[]],
        ["quark:white_corundum","quark:black_corundum",100,[]],
        ["quark:black_corundum","quark:red_corundum",100,[]],//刚玉循环
        
    ]

    ImbuementList.forEach(([input,output,source,pedestal])=>
        event.recipes.ars_nouveau.imbuement(input,output,source,pedestal))

    //附魔装置
    //格式:[基座材料,输入,输出,魔源]
    const EnchantList = [
        [
            [
                "naturesaura:gold_leaf",
                "naturesaura:token_sorrow",
                "naturesaura:token_anger",
                "naturesaura:token_fear",
                "thaumon:mutagen",
                "naturesaura:token_joy",
                "kubejs:token_confusion",
                "kubejs:token_serenity"
            ],
            "minecraft:stone",
            "naturesaura:nature_altar",10000
        ],//自然祭坛

        [
            [
                "minecraft:crafter",
                "create:electron_tube",
                "minecraft:crafter",
                "create:electron_tube"
                
            ],
            "create:brass_casing",
            "3x create:mechanical_crafter",2500

        ],//动力合成器

        [
            [
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod",
                "createaddition:gold_rod"                
            ],
            "ars_nouveau:source_gem_block",
            "ars_nouveau:relay",0
        ],//魔源中转器

        [
            [
                "twilightforest:naga_trophy",
                "twilightforest:lich_trophy",
                "twilightforest:minoshroom_trophy",
                "twilightforest:hydra_trophy",
                "twilightforest:knight_phantom_trophy",
                "twilightforest:ur_ghast_trophy",
                "twilightforest:alpha_yeti_trophy",
                "twilightforest:snow_queen_trophy"
            ],
            "twilightforest:quest_ram_trophy",
            "kubejs:twilight_holy_grail",10000
        ],//暮色圣杯

        [
            [
                "naturesaura:vacuum_bottle",
                "naturesaura:token_sorrow",
                "naturesaura:token_anger",
                "naturesaura:token_fear",
                "thaumon:mutagen",
                "naturesaura:token_joy",
                "kubejs:token_confusion",
                "kubejs:token_serenity"],
            "naturesaura:infused_stone",
            "naturesaura:generator_limit_remover",1000
        ],//制造催化剂

        [
            [
                "naturesaura:vacuum_bottle",
                "naturesaura:token_grief",
                "naturesaura:token_rage",
                "naturesaura:token_terror",
                "naturesaura:sky_ingot",
                "naturesaura:token_euphoria",
                "kubejs:token_delirium",
                "kubejs:token_equanimity"],
            "naturesaura:infused_stone",
            "naturesaura:lower_limiter",10000
        ],//灵气失衡区

        [
            [
                "ars_nouveau:source_gem",
                "kubejs:empowered_palis_crystal_dust",
                "ars_nouveau:source_gem",
                "kubejs:empowered_palis_crystal_dust",
                "ars_nouveau:source_gem",
                "kubejs:empowered_palis_crystal_dust",
                "ars_nouveau:source_gem",
                "kubejs:empowered_palis_crystal_dust",
            ],
            "actuallyadditions:triple_battery",
            "kubejs:source_amplifier",5000
        ],//魔源功放

        [
            [
                "actuallyadditions:smooth_black_quartz_block",
                "actuallyadditions:enori_crystal_block",
                "actuallyadditions:smooth_black_quartz_block",
                "actuallyadditions:enori_crystal_block",
                "actuallyadditions:smooth_black_quartz_block",
                "actuallyadditions:enori_crystal_block",
                "actuallyadditions:smooth_black_quartz_block",
                "actuallyadditions:enori_crystal_block",
            ],
            "actuallyadditions:wood_casing",
            "actuallyadditions:iron_casing",0
        ],//铁质外壳

        [
            [
                "minecraft:water_bucket",
                "minecraft:stone_bricks",
                "minecraft:water_bucket",
                "minecraft:stone_bricks",
                "minecraft:water_bucket",
                "minecraft:stone_bricks",
                "minecraft:water_bucket",
                "minecraft:stone_bricks",
            ],
            "naturesaura:token_joy",
            "naturesaura:spring",0
        ],//永恒之泉

        [
            [
                "craftingstation:crafting_station",
                "craftingstation:crafting_station",
                "craftingstation:crafting_station",
                "craftingstation:crafting_station",
                "craftingstation:crafting_station",
                "craftingstation:crafting_station",
                "craftingstation:crafting_station",
                "craftingstation:crafting_station",
            ],
            "sophisticatedbackpacks:crafting_upgrade",
            "ae2:crafting_terminal",0
        ],//合成终端

        [
            [
                "#pneumaticcraft:smooth_plastic_bricks",
                "immersiveengineering:duroplast",
                "kubejs:empowered_emeradic_crystal_dust",
                "aether:quicksoil_glass",
                "#pneumaticcraft:smooth_plastic_bricks",
                "aether:quicksoil_glass",
                "kubejs:empowered_emeradic_crystal_dust",
                "immersiveengineering:duroplast",
            ],
            "starbunclemania:fluid_jar",
            "starbunclemania:source_condenser",
            10000
        ],//魔源液化器
    ]

    EnchantList.forEach(([pedestal,input,output,source])=>
        event.recipes.ars_nouveau.enchanting_apparatus(pedestal,input,output,source))

    //附魔装置收容生物
    const mobJar = entityId => Item.of("ars_nouveau:mob_jar",{
        "block_entity_data":{
            entityId:entityId,
            entityTag:{id:entityId},
            id:"ars_nouveau:mob_jar"
        },
        "ars_nouveau:mob_jar":{
            entity_tag:{id:entityId}
        }
    })

    const MobEnchantList = [
        [
            [
                "twilightforest:naga_trophy",
                "twilightforest:naga_scale",
                "kubejs:twilight_ingot",
                "twilightforest:naga_scale",
                "occultism:soul_gem",
                "twilightforest:naga_scale",
                "kubejs:twilight_ingot",
                "twilightforest:naga_scale",
            ],
            mobJar("twilightforest:naga")
        ],//娜迦

        [
            [
                "twilightforest:lich_trophy",
                "twilightforest:exanimate_essence",
                "kubejs:twilight_ingot",
                "twilightforest:crown_splinter",
                "occultism:soul_gem",
                "twilightforest:crown_splinter",
                "kubejs:twilight_ingot",
                "twilightforest:exanimate_essence",
            ],
            mobJar("twilightforest:lich")
        ],//巫妖

        [
            [
                "twilightforest:minoshroom_trophy",
                "twilightforest:meef_stroganoff",
                "kubejs:twilight_ingot",
                "twilightforest:diamond_minotaur_axe",
                "occultism:soul_gem",
                "twilightforest:diamond_minotaur_axe",
                "kubejs:twilight_ingot",
                "twilightforest:meef_stroganoff",
            ],
            mobJar("twilightforest:minoshroom")
        ],//米诺菇

        [
            [
                "twilightforest:hydra_trophy",
                "twilightforest:hydra_chop",
                "kubejs:twilight_ingot",
                "twilightforest:fiery_blood",
                "occultism:soul_gem",
                "twilightforest:fiery_blood",
                "kubejs:twilight_ingot",
                "twilightforest:hydra_chop",
            ],
            mobJar("twilightforest:hydra")
        ],//九头蛇

        [
            [
                "twilightforest:ur_ghast_trophy",
                "twilightforest:carminite",
                "kubejs:twilight_ingot",
                "twilightforest:fiery_tears",
                "occultism:soul_gem",
                "twilightforest:fiery_tears",
                "kubejs:twilight_ingot",
                "twilightforest:carminite",
            ],
            mobJar("twilightforest:ur_ghast")
        ],//暮初恶魂

        [
            [
                "twilightforest:alpha_yeti_trophy",
                "twilightforest:alpha_yeti_fur",
                "kubejs:twilight_ingot",
                "twilightforest:alpha_yeti_fur",
                "occultism:soul_gem",
                "twilightforest:alpha_yeti_fur",
                "kubejs:twilight_ingot",
                "twilightforest:alpha_yeti_fur",
            ],
            mobJar("twilightforest:alpha_yeti")
        ],//雪怪首领

        [
            [
                "twilightforest:snow_queen_trophy",
                "twilightforest:ice_bomb",
                "kubejs:twilight_ingot",
                "twilightforest:ice_bomb",
                "occultism:soul_gem",
                "twilightforest:ice_bomb",
                "kubejs:twilight_ingot",
                "twilightforest:ice_bomb",
            ],
            mobJar("twilightforest:snow_queen")
        ],//冰雪女王
        
    ]

    MobEnchantList.forEach(([pedestal,output])=>
        event.recipes.ars_nouveau.enchanting_apparatus(pedestal,"ars_nouveau:mob_jar",output,10000))

    //抄写台=>附魔装置
    event.forEachRecipe({type:"ars_nouveau:glyph"},recipe=>{
        const glyphRecipe=JSON.parse(recipe.json)

        event.recipes.ars_nouveau.enchanting_apparatus(
            glyphRecipe.inputs,
            "ars_nouveau:blank_parchment",
            glyphRecipe.output,
            2500
        )
    })

    //有序合成=>附魔装置
    //格式:[配方ID,魔源];将该配方移除并改为附魔装置,产物沿用原配方
    const ShapedEnchantList = [
        ["naturesaura:potion_generator",1000],
        ["naturesaura:oak_generator",1000],
        ["naturesaura:flower_generator",1000],
        ["naturesaura:animal_generator",1000],
        ["naturesaura:moss_generator",1000],
        ["naturesaura:firework_generator",1000],
        ["naturesaura:projectile_generator",1000],
        ["naturesaura:chorus_generator",1000],
        ["naturesaura:slime_split_generator",1000],
    ]

    ShapedEnchantList.forEach(([recipeId,source])=>
        event.forEachRecipe({id:recipeId},recipe=>{
            const shapedRecipe=JSON.parse(recipe.json)
            const pattern=shapedRecipe.pattern

            if(shapedRecipe.type!=="minecraft:crafting_shaped"||!pattern||pattern.length!==3||pattern.some(row=>row.length!==3)){
                console.error(`无法将 ${recipeId} 转换为附魔装置配方：目标不是完整的 3×3 有序合成配方`)
                return
            }

            const centerSymbol=pattern[1][1]
            const input=shapedRecipe.key[centerSymbol]

            if(centerSymbol===" "||!input){
                console.error(`无法将 ${recipeId} 转换为附魔装置配方：合成表中心格为空`)
                return
            }

            const pedestal=[]
            const normalizeIngredient=ingredient=>{
                if(typeof ingredient==="string") return {item:ingredient}
                if(typeof ingredient!=="object"||ingredient===null) return ingredient
                if(ingredient.tag) return {tag:ingredient.tag}
                if(!ingredient.item) return ingredient

                const components=ingredient.components||ingredient.nbt
                if(!components) return {item:ingredient.item}

                return {
                    type:"neoforge:components",
                    components:components,
                    items:ingredient.item
                }
            }

            for(var rowIndex=0;rowIndex<3;rowIndex++){
                var patternRow=pattern[rowIndex]
                for(var columnIndex=0;columnIndex<3;columnIndex++){
                    if(rowIndex===1&&columnIndex===1) continue

                    var symbol=patternRow.charAt(columnIndex)
                    if(symbol!==" "){
                        var ingredient=shapedRecipe.key[symbol]
                        if(ingredient) pedestal.push(normalizeIngredient(ingredient))
                    }
                }
            }

            event.custom({
                "type":"ars_nouveau:enchanting_apparatus",
                "keepNbtOfReagent":false,
                "pedestalItems":pedestal,
                "reagent":normalizeIngredient(input),
                "result":shapedRecipe.result,
                "sourceCost":source
            })
            event.remove({id:recipeId})
        })
    )
})
