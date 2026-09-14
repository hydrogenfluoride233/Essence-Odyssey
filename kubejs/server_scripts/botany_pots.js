ServerEvents.recipes(event=>{
    //配方删除
    let excludedItems = [
        'botanypotstiers:mega_terracotta_hopper_botany_pot',
        'botanypotstiers:mega_terracotta_botany_pot',
        'botanypotstiers:ultra_terracotta_hopper_botany_pot',
        'botanypotstiers:ultra_terracotta_botany_pot',
        'botanypotstiers:elite_terracotta_hopper_botany_pot',
        'botanypotstiers:elite_terracotta_botany_pot',
        'botanypots:terracotta_hopper_botany_pot',
        'botanypots:terracotta_botany_pot',
        'botanypotstiers:mega_upgrade',
        'botanypotstiers:ultra_upgrade',
        'botanypotstiers:elite_upgrade',
    ]

    Ingredient.of(/^(botanypotstiers:|botanypots:)/).itemIds.forEach(id=>{
        if (!excludedItems.includes(id)){
            event.remove({output:id})
        }
    })

    event.remove({id:"botanypots:botanypots/crafting/terracotta_botany_pot"})
    event.remove({id:"botanypots:botanypots/crafting/terracotta_hopper_botany_pot_quick"})
    event.remove({id:"botanypotstiers:pots/elite_terracotta_botany_pot"})
    event.remove({id:"botanypotstiers:pots/elite_terracotta_hopper_botany_pot_upgrade"})
    event.remove({id:"botanypotstiers:pots/elite_terracotta_hopper_botany_pot_upgrade_quick"})
    event.remove({id:"botanypotstiers:pots/ultra_terracotta_botany_pot"})
    event.remove({id:"botanypotstiers:pots/ultra_terracotta_hopper_botany_pot_upgrade"})
    event.remove({id:"botanypotstiers:pots/ultra_terracotta_hopper_botany_pot_upgrade_quick"})
    event.remove({id:"botanypotstiers:pots/mega_terracotta_botany_pot"})
    event.remove({id:"botanypotstiers:pots/mega_terracotta_hopper_botany_pot_upgrade"})
    event.remove({id:"botanypotstiers:pots/mega_terracotta_hopper_botany_pot_upgrade_quick"})

    const soil = (block) =>
        event.custom({
            "bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":[block]}],
            "type":"botanypots:soil",
            "input":{"item":block},
            "display":{"type":"botanypots:simple","block_state":{"block":block}},
            "growth_modifier":0.0
        })
    const crop = (ore,block,input,output) =>
        event.custom({
            "bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":[ore]}],
            "type":"botanypots:crop",
            "input":{"item":input},
            "soil":{"item":block},
            "grow_time":1200,
            "display":{"type":"botanypots:simple","block_state":{"block":ore}},
            "drops":[{"type":"botanypots:items","items":[{"result":{"id":output},"chance":1.0}]}],
            "yield":2.5
        })

    //批量生成土壤+作物
    //格式:[展示方块,土壤,种植作物,收获产物]
    const CropList = [
        [
            "occultism:silver_ore",
            "occultism:silver_block",
            "occultism:silver_ingot",
            "occultism:raw_silver"
        ],//银矿石

        [
            "occultism:iesnium_ore",
            "occultism:iesnium_block",
            "occultism:iesnium_ingot",
            "occultism:raw_iesnium"
        ],//艾瑟金属矿石

        [
            "deep_aether:skyjade_ore",
            "deep_aether:skyjade_block",
            "deep_aether:skyjade",
            "deep_aether:skyjade"
        ],//穹玉矿石

        [
            "aether:gravitite_ore",
            "deep_aether:stratus_block",
            "deep_aether:stratus_ingot",
            "aether:gravitite_ore"
        ],//重力晶矿石

        [
            "actuallyadditions:black_quartz_ore",
            "actuallyadditions:black_quartz_block",
            "actuallyadditions:black_quartz",
            "actuallyadditions:black_quartz"
        ]//焦黑石英矿石
    ]
    CropList.forEach(([ore,block,input,output])=>{
        soil(block)
        crop(ore,block,input,output)
    })
})


ServerEvents.tags("item",event=>{
    //标签移除
    event.removeAll("botanypotstiers:regular_botany_pots")
    event.removeAll("botanypotstiers:elite_botany_pots")
    event.removeAll("botanypotstiers:ultra_botany_pots")
    event.removeAll("botanypotstiers:mega_botany_pots")
    event.removeAll("botanypotstiers:regular_hopper_botany_pots")
    event.removeAll("botanypotstiers:elite_hopper_botany_pots")
    event.removeAll("botanypotstiers:ultra_hopper_botany_pots")
    event.removeAll("botanypotstiers:mega_hopper_botany_pots")
})
