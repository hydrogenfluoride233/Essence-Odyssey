ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:lychee/block_interacting/"
    const Required = ["id","item","block","action"]

    const recipes = [
        {
            item:"minecraft:amethyst_shard",
            block:"twilightforest:liveroot_block",
            condition:inDimension("twilightforest:twilight_forest"),
            action:[
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
            ],
            id:`${id_prefix}terra_liveroot`,
        },
        {
            item:"minecraft:amethyst_shard",
            block:"twilightforest:cicada_jar",
            condition:inDimension("twilightforest:twilight_forest"),
            action:[
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
            ],
            id:`${id_prefix}terra_cicada_jar`,
        },
        {
            item:"minecraft:amethyst_shard",
            block:"twilightforest:firefly_jar",
            condition:inDimension("twilightforest:twilight_forest"),
            action:[
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
            ],
            id:`${id_prefix}terra_firefly_jar`,
        },
        {
            item:"minecraft:amethyst_shard",
            block:"eternal_starlight:starlit_lily_pad[lit=true]",
            condition:inDimension("eternal_starlight:starlight"),
            action:[
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
            ],
            id:`${id_prefix}ordo_lily_pad`,
        },
        {
            item:"minecraft:amethyst_shard",
            block:"eternal_starlight:thioquartz_block[seed=true]",
            condition:inDimension("eternal_starlight:starlight"),
            action:[
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
            ],
            id:`${id_prefix}ordo_thioquartz`,
        },
        {
            item:["minecraft:gold_ingot","minecraft:string"],
            block:"twilightforest:hedge",
            condition:inDimension("twilightforest:twilight_forest"),
            action:[
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
            ],
            id:`${id_prefix}gold_fiber_hedge`,
        },
        {
            item:"thaumon:mutagen",
            block:"minecraft:cauldron",
            condition:null,
            action:[
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
            ],
            id:`${id_prefix}basin_cauldron`,
        },
        {
            item:"kubejs:unknown_mixture",
            block:"ae2:mysterious_cube",
            condition:null,
            hide_in_viewer:true,
            action:[
                "drop ae2:mysterious_cube",
                "place minecraft:air",
                {
                    type:"execute",
                    command:"playsound minecraft:block.beacon.power_select block @a ~ ~ ~ 0.6 1.2",
                    hide:true
                },
                {
                    type:"execute",
                    command:"particle minecraft:end_rod ~ ~1 ~ 0.3 0.3 0.3 0.05 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"particle minecraft:electric_spark ~ ~0.5 ~ 0.2 0.2 0.2 0.02 15",
                    hide:true
                }
            ],
            id:`${id_prefix}mysterious_cube`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const json = {
            "type":"lychee:block_interacting",
            "item_in":recipe.item,
            "block_in":recipe.block,
            "post":recipe.action
        }

        if(recipe.condition) json.if = recipe.condition
        if(recipe.hide_in_viewer) json.hide_in_viewer = true

        event.custom(json).id(recipe.id)
    })
})
