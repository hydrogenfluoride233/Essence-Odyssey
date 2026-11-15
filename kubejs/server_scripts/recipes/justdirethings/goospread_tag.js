ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:justdirethings/goospread_tag/"
    const Required = ["id","input","output","tier"]

    //第一项是模组自己的配方 id；末尾 .id() 是 KubeJS 的 id
    const recipes = [
    ].concat(Crystals.map(crystal=>({
        input:`c:ores/${crystal.ore}`,
        output:`actuallyadditions:${crystal.id}_crystal_cluster`,
        tier:1,
        id:`${id_prefix}${crystal.id}_crystal_cluster`,
    })))

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
})
