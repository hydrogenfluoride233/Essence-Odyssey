ServerEvents.recipes(event=>{
    //与 forEachRecipe 同文件、remove 在前：避免把已删的原配方也封装；只留 tree_ritual / altar 类型
    event.remove({id:"naturesaura:tree_ritual/ancient_sapling"})
    event.remove({id:"naturesaura:tree_ritual/nature_altar"})
    event.remove({id:"naturesaura:tree_ritual/token_sorrow"})
    event.remove({id:"naturesaura:tree_ritual/token_anger"})
    event.remove({id:"naturesaura:tree_ritual/token_fear"})
    event.remove({id:"naturesaura:tree_ritual/token_joy"})
    event.remove({id:"naturesaura:tree_ritual/crushing_catalyst"})
    event.remove({id:"naturesaura:tree_ritual/conversion_catalyst"})

    event.remove({id:"naturesaura:altar/infused_iron"})
    event.remove({id:"naturesaura:altar/infused_iron_block"})
    event.remove({id:"naturesaura:altar/infused_stone"})
    event.remove({id:"naturesaura:altar/tainted_gold"})
    event.remove({id:"naturesaura:altar/tainted_gold_block"})
    event.remove({id:"naturesaura:altar/soul_sand_crushing"})
    event.remove({id:"naturesaura:altar/gold_powder"})
    event.remove({id:"naturesaura:altar/amethyst"})
    
    event.forEachRecipe({type:"naturesaura:tree_ritual"},recipe=>{
        const source = JSON.parse(recipe.json)

        if(!source.ingredients || source.ingredients.length === 0) return

        packagedTreeRitual(event,source.output || source.result,source.ingredients,source.sapling || source.input)
    })

    event.forEachRecipe({type:"naturesaura:altar"},recipe=>{
        const source = JSON.parse(recipe.json)

        if(!source.input || !source.output || !source.aura) return

        packagedNatureAltar(event,source.output,source.input,source.aura)
    })
})
