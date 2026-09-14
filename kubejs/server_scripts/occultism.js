ServerEvents.recipes(event=>{
    const parseResult = result=>{
        if(typeof result!=="string") return result

        const match=result.match(/^(\d+)x\s+(.+)$/)
        const count=match ? parseInt(match[1]) : 1
        const id=match ? match[2] : result

        return RecipeResult.of(id,count)
    }

    const parseInput = ingredient=>{
        if(typeof ingredient!=="string") return ingredient

        const match=ingredient.match(/^(\d+)x\s+(.+)$/)
        const count=match ? parseInt(match[1]) : 1
        const id=match ? match[2] : ingredient

        if(count!==1) throw new Error("神秘学粉碎配方不支持多个输入物品")

        return Ingredient.of(id)
    }

    //粉碎
    //格式:[输出,输入,是否忽略产量倍率,最低碎矿者等级]
    const CrushList = [
        [
            "4x naturesaura:gold_powder",
            "naturesaura:gold_leaf",
            true
        ],//金叶粉

        [
            "kubejs:empowered_restonia_crystal_dust",
            "actuallyadditions:empowered_restonia_crystal",
            true
        ],//充能红石水晶粉

        [
            "kubejs:empowered_palis_crystal_dust",
            "actuallyadditions:empowered_palis_crystal",
            true
        ],//充能青金石水晶粉

        [
            "kubejs:empowered_diamatine_crystal_dust",
            "actuallyadditions:empowered_diamatine_crystal",
            true
        ],//充能钻石水晶粉

        [
            "kubejs:empowered_void_crystal_dust",
            "actuallyadditions:empowered_void_crystal",
            true
        ],//充能煤晶粉

        [
            "kubejs:empowered_enori_crystal_dust",
            "actuallyadditions:empowered_enori_crystal",
            true
        ],//充能铁晶粉

        [
            "kubejs:empowered_emeradic_crystal_dust",
            "actuallyadditions:empowered_emeradic_crystal",
            true
        ],//充能绿宝石水晶粉
    ]

    CrushList.forEach(([output,input,ignoreMultiplier,minTier])=>{
        const recipe=event.recipes.occultism.crushing(
            parseResult(output),
            parseInput(input)
        )

        recipe.ignoreCrushingMultiplier(ignoreMultiplier)
        if(minTier!==undefined) recipe.minTier(minTier)
    })
})
