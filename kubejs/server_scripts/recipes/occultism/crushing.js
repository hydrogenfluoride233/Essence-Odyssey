ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:occultism/crushing/"
    const Required = ["id","output","input","ignore_multiplier"]

    const parseResult = result=>{
        const {count,id} = toCounted(result)

        return RecipeResult.of(id,count)
    }

    const parseInput = ingredient=>{
        const {count,id} = toCounted(ingredient)

        if(count !== 1) throw new Error("神秘学粉碎配方不支持多个输入物品")

        return Ingredient.of(id)
    }

    const recipes = [
        {
            output:"4x naturesaura:gold_powder",
            input:"naturesaura:gold_leaf",
            ignore_multiplier:true,
            id:`${id_prefix}gold_powder`,
        },
    ].concat(Crystals.map(crystal=>({
        output:`kubejs:empowered_${crystal.id}_crystal_dust`,
        input:`actuallyadditions:empowered_${crystal.id}_crystal`,
        ignore_multiplier:true,
        id:`${id_prefix}${crystal.id}`,
    })))

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>{
        const builder = event.recipes.occultism.crushing(
            parseResult(recipe.output),
            parseInput(recipe.input)
        )
        .ignoreCrushingMultiplier(recipe.ignore_multiplier)

        if(recipe.min_tier !== undefined) builder.minTier(recipe.min_tier)

        builder.id(recipe.id)
    })
})
