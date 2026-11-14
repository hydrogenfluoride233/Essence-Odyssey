ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:justdirethings/goospread/"
    const Required = ["id","input","output","tier"]

    //第一项是模组自己的配方 id；末尾 .id() 是 KubeJS 的 id
    const recipes = [
        {
            input:"minecraft:chiseled_quartz_block",
            output:"actuallyadditions:ethetic_green_block",
            tier:1,
            id:`${id_prefix}ethetic_green_block`,
        },
        {
            input:"minecraft:quartz_block",
            output:"actuallyadditions:ethetic_white_block",
            tier:1,
            id:`${id_prefix}ethetic_white_block`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.justdirethings.goospread(
            recipe.id,
            recipe.input,
            recipe.output,
            recipe.tier,
            300
        )
        .id(recipe.id))
})
