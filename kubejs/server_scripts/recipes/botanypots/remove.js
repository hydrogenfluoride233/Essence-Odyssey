ServerEvents.recipes(event=>{
    //排除保留的盆栽
    const excludedItems = [
        "botanypotstiers:mega_terracotta_hopper_botany_pot",
        "botanypotstiers:mega_terracotta_botany_pot",
        "botanypotstiers:ultra_terracotta_hopper_botany_pot",
        "botanypotstiers:ultra_terracotta_botany_pot",
        "botanypotstiers:elite_terracotta_hopper_botany_pot",
        "botanypotstiers:elite_terracotta_botany_pot",
        "botanypots:terracotta_hopper_botany_pot",
        "botanypots:terracotta_botany_pot",
        "botanypotstiers:mega_upgrade",
        "botanypotstiers:ultra_upgrade",
        "botanypotstiers:elite_upgrade",
    ]

    const removedOutputs = []
    Ingredient.of(/^(botanypotstiers:|botanypots:)/).itemIds.forEach(id=>{
        if(!excludedItems.includes(id)) removedOutputs.push(id)
    })

    if(removedOutputs.length > 0) event.remove({output:removedOutputs})
})
