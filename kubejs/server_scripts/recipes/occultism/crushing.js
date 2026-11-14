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
        {
            output:"kubejs:empowered_restonia_crystal_dust",
            input:"actuallyadditions:empowered_restonia_crystal",
            ignore_multiplier:true,
            id:`${id_prefix}restonia`,
        },
        {
            output:"kubejs:empowered_palis_crystal_dust",
            input:"actuallyadditions:empowered_palis_crystal",
            ignore_multiplier:true,
            id:`${id_prefix}palis`,
        },
        {
            output:"kubejs:empowered_diamatine_crystal_dust",
            input:"actuallyadditions:empowered_diamatine_crystal",
            ignore_multiplier:true,
            id:`${id_prefix}diamatine`,
        },
        {
            output:"kubejs:empowered_void_crystal_dust",
            input:"actuallyadditions:empowered_void_crystal",
            ignore_multiplier:true,
            id:`${id_prefix}void`,
        },
        {
            output:"kubejs:empowered_enori_crystal_dust",
            input:"actuallyadditions:empowered_enori_crystal",
            ignore_multiplier:true,
            id:`${id_prefix}enori`,
        },
        {
            output:"kubejs:empowered_emeradic_crystal_dust",
            input:"actuallyadditions:empowered_emeradic_crystal",
            ignore_multiplier:true,
            id:`${id_prefix}emeradic`,
        },
    ]

    checkRecipes(recipes,Required)

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
