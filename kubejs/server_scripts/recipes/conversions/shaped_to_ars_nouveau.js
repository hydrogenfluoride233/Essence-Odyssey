ServerEvents.recipes(event=>{
    //有序合成=>附魔装置：将该配方移除并改为附魔装置，产物沿用原配方
    const ShapedEnchantList = [
        {id:"naturesaura:potion_generator",source:1000},
        {id:"naturesaura:oak_generator",source:1000},
        {id:"naturesaura:flower_generator",source:1000},
        {id:"naturesaura:animal_generator",source:1000},
        {id:"naturesaura:moss_generator",source:1000},
        {id:"naturesaura:firework_generator",source:1000},
        {id:"naturesaura:projectile_generator",source:1000},
        {id:"naturesaura:chorus_generator",source:1000},
        {id:"naturesaura:slime_split_generator",source:1000},
        {id:"tiab:time_in_a_bottle",source:10000},
        {id:"naturesaura:aura_cache",source:1500},
        {id:"naturesaura:aura_trove",source:5000},
    ]

    ShapedEnchantList.forEach(entry=>
        event.forEachRecipe({id:entry.id},recipe=>{
            const shapedRecipe = JSON.parse(recipe.json)
            const pattern = shapedRecipe.pattern

            if(shapedRecipe.type !== "minecraft:crafting_shaped"||!pattern||pattern.length !== 3||pattern.some(row=>row.length !== 3)){
                console.error(`无法将 ${entry.id} 转换为附魔装置配方：目标不是完整的 3×3 有序合成配方`)
                return
            }

            const centerSymbol = pattern[1][1]
            const input = shapedRecipe.key[centerSymbol]

            if(centerSymbol === " "||!input){
                console.error(`无法将 ${entry.id} 转换为附魔装置配方：合成表中心格为空`)
                return
            }

            const pedestal = []

            const normalizeIngredient = ingredient=>{
                if(typeof ingredient === "string") return {item:ingredient}
                if(typeof ingredient !== "object"||ingredient === null) return ingredient
                if(ingredient.tag) return {tag:ingredient.tag}
                if(!ingredient.item) return ingredient

                const components = ingredient.components||ingredient.nbt
                if(!components) return {item:ingredient.item}

                return {
                    type:"neoforge:components",
                    components:components,
                    items:ingredient.item
                }
            }

            for(var rowIndex = 0;rowIndex<3;rowIndex++){
                var patternRow = pattern[rowIndex]
                for(var columnIndex = 0;columnIndex<3;columnIndex++){
                    if(rowIndex === 1&&columnIndex === 1) continue

                    var symbol = patternRow.charAt(columnIndex)
                    if(symbol !== " "){
                        var ingredient = shapedRecipe.key[symbol]
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
                "sourceCost":entry.source
            })
            .id(`kubejs:conversions/ars_nouveau/${entry.id.split(":")[1]}`)

            event.remove({id:entry.id})
        })
    )
})
