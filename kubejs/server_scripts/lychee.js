ServerEvents.recipes(event => {
    const inDimension = dimension => ({
        type:"location",
        predicate:{dimension:dimension}
    })

    const inWeather = weather => ({
        type:"weather",
        weather:weather
    })

    //物品位于方块内
    //格式:[输入物品,目标方块,触发条件,后处理];产物由后处理中的 drop 动作决定
    const itemInsideRecipes = [
        [
            "kubejs:crystal_tempestas",
            "aether:cold_aercloud",
            inWeather("thunder"),
            [
                "place deep_aether:sterling_aercloud",
                {
                    type:"execute",
                    command:"particle aether:passive_whirlwind ~ ~0.5 ~ 0.3 0.3 0.3 0.02 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"playsound minecraft:entity.lightning_bolt.thunder block @a ~ ~ ~ 0.5 1.4",
                    hide:true
                }
            ]
        ],//银青境云
        
        [
            "kubejs:crystal_tempestas",
            "aether:cold_aercloud",
            inDimension("aether:the_aether"),
            [
                "place deep_aether:sterling_aercloud",
                {
                    type:"execute",
                    command:"particle aether:passive_whirlwind ~ ~0.5 ~ 0.3 0.3 0.3 0.05 15",
                    hide:true
                },
                {
                    type:"execute",
                    command:"playsound minecraft:entity.lightning_bolt.thunder block @a ~ ~ ~ 0.5 1.4",
                    hide:true
                }
            ]
        ],//银青境云

        [
            "minecraft:amethyst_shard",
            "minecraft:water_cauldron[level=3]",
            inDimension("minecraft:overworld"),
            [
                "drop kubejs:crystal_aqua",
                "place minecraft:cauldron",
                {
                    type:"execute",
                    command:"particle minecraft:splash ~ ~0.5 ~ 0.3 0.3 0.3 0.1 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"particle minecraft:bubble ~ ~1 ~ 0.2 0.2 0.2 0.02 15",
                    hide:true
                },
                {
                    type:"execute",
                    command:"playsound minecraft:entity.player.splash block @a ~ ~ ~ 1 1",
                    hide:true
                }
            ]
        ],//水之结晶

        [
            "minecraft:amethyst_shard",
            "aether:golden_aercloud",
            inDimension("aether:the_aether"),
            [
                "drop kubejs:crystal_aer",
                "place minecraft:air",
                {
                    type:"execute",
                    command:"particle minecraft:cloud ~ ~1 ~ 0.5 0.3 0.5 0.02 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"particle minecraft:end_rod ~ ~1 ~ 0.3 0.3 0.3 0.05 10",
                    hide:true
                },
                {
                    type:"execute",
                    command:"playsound aether:block.aercloud.blue_aercloud_bounce block @a ~ ~ ~ 0.8 1.2",
                    hide:true
                }
            ]
        ],//风之结晶
    ]

    itemInsideRecipes.forEach(([item,block,condition,action]) =>
        event.custom({
            type:"lychee:item_inside",
            item_in:item,
            block_in:block,
            if:condition,
            post:action
    }))

    //物品燃烧
    //格式:[输入物品,触发条件,后处理];产物由后处理中的 drop 动作决定
    const itemBurningRecipes = [
        [
            "minecraft:amethyst_shard",
            inDimension("minecraft:the_nether"),
            [
                "drop kubejs:crystal_ignis",
                {
                    type:"execute",
                    command:"particle minecraft:flame ~ ~ ~ 0.3 0.3 0.3 0.05 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"particle minecraft:lava ~ ~ ~ 0.2 0.2 0.2 0.02 10",
                    hide:true
                },
                {
                    type:"execute",
                    command:"playsound minecraft:item.firecharge.use block @a ~ ~ ~ 1 1",
                    hide:true
                }
            ]
        ],//火之结晶
    ]

    itemBurningRecipes.forEach(([item,condition,action]) =>
        event.custom({
            type:"lychee:item_burning",
            item_in:item,
            if:condition,
            post:action
        }))

    //方块交互
    //格式:[输入物品,目标方块,触发条件,后处理];产物由后处理中的 drop 动作决定
    const blockInteractingRecipes = [
        [
            "minecraft:amethyst_shard",
            "twilightforest:liveroot_block",
            inDimension("twilightforest:twilight_forest"),
            [
                "drop kubejs:crystal_terra",
                "place twilightforest:root",
                {
                    type:"execute",
                    command:"particle minecraft:block{block_state:\"twilightforest:liveroot_block\"} ~ ~1 ~ 0.5 0.5 0.5 0.1 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"playsound minecraft:block.azalea.break block @a ~ ~ ~ 1 1",
                    hide:true
                }
            ]
        ],//地之结晶

        [
            "minecraft:amethyst_shard",
            "twilightforest:cicada_jar",
            inDimension("twilightforest:twilight_forest"),
            [
                "drop kubejs:crystal_terra",
                "place twilightforest:mason_jar",
                {
                    type:"execute",
                    command:"particle minecraft:poof ~ ~ ~ 0 0 0 0 5",
                    hide:true
                },
                {
                    type:"execute",
                    command:"playsound twilightforest:block.twilightforest.jar.insert block @a ~ ~ ~ 1 1",
                    hide:true
                }
            ]
        ],//地之结晶

        [
            "minecraft:amethyst_shard",
            "twilightforest:firefly_jar",
            inDimension("twilightforest:twilight_forest"),
            [
                "drop kubejs:crystal_terra",
                "place twilightforest:mason_jar",
                {
                    type:"execute",
                    command:"particle minecraft:poof ~ ~ ~ 0 0 0 0 5",
                    hide:true
                },
                {
                    type:"execute",
                    command:"playsound twilightforest:block.twilightforest.jar.insert block @a ~ ~ ~ 1 1",
                    hide:true
                }
            ]
        ],//地之结晶

        [
            "minecraft:amethyst_shard",
            "eternal_starlight:starlit_lily_pad[lit=true]",
            inDimension("eternal_starlight:starlight"),
            [
                "drop kubejs:crystal_ordo",
                "place eternal_starlight:starlit_lily_pad[lit=false]",
                {
                    type:"execute",
                    command:"particle minecraft:end_rod ~ ~ ~ 0.3 0.3 0.3 0.05 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"playsound eternal_starlight:block.ether.transform block @a ~ ~ ~ 1 1",
                    hide:true
                }
            ]
        ],//秩序结晶

        [
            "minecraft:amethyst_shard",
            "eternal_starlight:thioquartz_block[seed=true]",
            inDimension("eternal_starlight:starlight"),
            [
                "drop kubejs:crystal_ordo",
                "place eternal_starlight:thioquartz_block[seed=false]",
                {
                    type:"execute",
                    command:"particle minecraft:end_rod ~ ~ ~ 0.3 0.3 0.3 0.05 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"playsound eternal_starlight:item.crystal_greatsword.chime block @a ~ ~ ~ 1 1",
                    hide:true
                }
            ]
        ],//秩序结晶

        [
            [
                "minecraft:gold_ingot",
                "minecraft:string"
            ],
            "twilightforest:hedge",
            inDimension("twilightforest:twilight_forest"),
            [
                "drop naturesaura:gold_fiber /.20",
                "place minecraft:air",
                {
                    type:"execute",
                    command:"damage @s 5 minecraft:generic",
                    hide:true
                },
                {
                    type:"execute",
                    command:"particle minecraft:end_rod ~ ~ ~ 0.2 0.2 0.2 0.05 10",
                    hide:true
                }
            ]
        ],//闪耀纤维

        [
            "thaumon:mutagen",
            "minecraft:cauldron",
            null,
            [
                "place create:basin",
                {
                    type:"execute",
                    command:"particle minecraft:explosion ~ ~1 ~ 0 0 0 0 1",
                    hide:true
                },
                {
                    type:"execute",
                    command:"playsound ars_nouveau:ea_finish block @a ~ ~ ~ 1 1",
                    hide:true
                },
                {
                    type:"execute",
                    command:"particle minecraft:block{block_state:\"minecraft:stone\"} ~ ~1 ~ 0.5 0.5 0.5 0.1 20",
                    hide:true
                }
            ]
        ],//工作盆
    ]

    blockInteractingRecipes.forEach(([item,block,condition,action])=>{
        const recipe = {
            type:"lychee:block_interacting",
            item_in:item,
            block_in:block,
            post:action
        }
        if (condition) recipe.if = condition
        event.custom(recipe)
    })

    //方块压碎
    //格式:[输入物品,后处理];产物由后处理中的 drop 动作决定,固定由铁砧触发
    const blockCrushingRecipes = [
        [
            "naturesaura:gold_leaf",
            "drop 2x naturesaura:gold_powder"
        ],//金叶粉
    ]

    blockCrushingRecipes.forEach(([item,action]) =>
        event.custom({
            type:"lychee:block_crushing",
            falling_block:"minecraft:anvil",
            item_in:item,
            post:action
        }))

    //物品爆炸
    //格式:[输入物品,后处理];产物由后处理中的 drop 动作决定
    const itemExplodingRecipes = [
        [
            "minecraft:raw_iron_block",
            [
                "drop ae2:item_storage_cell_1k",
                {
                    type:"execute",
                    command:"particle minecraft:flame ~ ~ ~ 0.3 0.3 0.3 0.05 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"particle minecraft:lava ~ ~ ~ 0.2 0.2 0.2 0.02 10",
                    hide:true
                },
            ]
        ],//1k物品存储元件

        [
            "minecraft:raw_copper_block",
            [
                "drop ae2:fluid_storage_cell_1k",
                {
                    type:"execute",
                    command:"particle minecraft:flame ~ ~ ~ 0.3 0.3 0.3 0.05 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"particle minecraft:lava ~ ~ ~ 0.2 0.2 0.2 0.02 10",
                    hide:true
                },
            ]
        ],//1k流体存储元件

        [
            "ae2:fluix_crystal",
            [
                "drop ae2:fluix_glass_cable",
                {
                    type:"execute",
                    command:"particle minecraft:flame ~ ~ ~ 0.3 0.3 0.3 0.05 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"particle minecraft:lava ~ ~ ~ 0.2 0.2 0.2 0.02 10",
                    hide:true
                },
            ]
        ],//线缆

        [
            "sophisticatedstorage:diamond_chest",
            [
                "drop ae2:drive",
                {
                    type:"execute",
                    command:"particle minecraft:flame ~ ~ ~ 0.3 0.3 0.3 0.05 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"particle minecraft:lava ~ ~ ~ 0.2 0.2 0.2 0.02 10",
                    hide:true
                },
            ]
        ],//ME驱动器
    ]

    itemExplodingRecipes.forEach(([item,action]) => 
        event.custom({
            type:"lychee:item_exploding",
            item_in:item,
            post:action
        }))
})
