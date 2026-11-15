ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:justdirethings/goospread_tag/"
    const Required = ["id","input","output","tier"]

    //第一项是模组自己的配方 id；末尾 .id() 是 KubeJS 的 id
    const recipes = [
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.justdirethings.goospread_tag(
            recipe.id,
            BlockTagIngredient(recipe.input),
            recipe.output,
            recipe.tier,
            600
        )
        .id(recipe.id))

    //水晶簇：凝胶蔓延
    Crystals.forEach(crystal=>
        event.recipes.justdirethings.goospread_tag(
            `${id_prefix}${crystal.id}_crystal_cluster`,
            BlockTagIngredient(`c:ores/${crystal.ore}`),
            `actuallyadditions:${crystal.id}_crystal_cluster`,
            1,
            600
        )
        .id(`${id_prefix}${crystal.id}_crystal_cluster`))
})
