ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:lychee/item_inside/"
    const Required = ["id","item","block","condition","action"]

    const recipes = [
        {
            item:"kubejs:crystal_tempestas",
            block:"aether:cold_aercloud",
            condition:inWeather("thunder"),
            action:[
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
            ],
            id:`${id_prefix}tempestas_thunder`,
        },
        {
            item:"kubejs:crystal_tempestas",
            block:"aether:cold_aercloud",
            condition:inDimension("aether:the_aether"),
            action:[
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
            ],
            id:`${id_prefix}tempestas_aether`,
        },
        {
            item:"minecraft:amethyst_shard",
            block:"minecraft:water_cauldron[level=3]",
            condition:inDimension("minecraft:overworld"),
            action:[
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
            ],
            id:`${id_prefix}aqua_cauldron`,
        },
        {
            item:"minecraft:amethyst_shard",
            block:"aether:golden_aercloud",
            condition:inDimension("aether:the_aether"),
            action:[
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
            ],
            id:`${id_prefix}aer_aercloud`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"lychee:item_inside",
            "item_in":recipe.item,
            "block_in":recipe.block,
            "if":recipe.condition,
            "post":recipe.action
        })
        .id(recipe.id))
})
