ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:justdirethings/goospread_tag/"
    const Required = ["id","input","output","tier"]

    //第一项是模组自己的配方 id；末尾 .id() 是 KubeJS 的 id
    const recipes = [
        {
            input:"c:ores/iron",
            output:"actuallyadditions:enori_crystal_cluster",
            tier:1,
            id:`${id_prefix}enori_crystal_cluster`,
        },
        {
            input:"c:ores/redstone",
            output:"actuallyadditions:restonia_crystal_cluster",
            tier:1,
            id:`${id_prefix}restonia_crystal_cluster`,
        },
        {
            input:"c:ores/lapis",
            output:"actuallyadditions:palis_crystal_cluster",
            tier:1,
            id:`${id_prefix}palis_crystal_cluster`,
        },
        {
            input:"c:ores/diamond",
            output:"actuallyadditions:diamatine_crystal_cluster",
            tier:1,
            id:`${id_prefix}diamatine_crystal_cluster`,
        },
        {
            input:"c:ores/coal",
            output:"actuallyadditions:void_crystal_cluster",
            tier:1,
            id:`${id_prefix}void_crystal_cluster`,
        },
        {
            input:"c:ores/emerald",
            output:"actuallyadditions:emeradic_crystal_cluster",
            tier:1,
            id:`${id_prefix}emeradic_crystal_cluster`,
        },
    ]

    checkRecipes(recipes,Required)

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
