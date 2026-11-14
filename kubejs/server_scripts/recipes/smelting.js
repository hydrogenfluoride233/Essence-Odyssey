ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:"
    const Required = ["output","input"]

    //按输出物命名空间 A-Z 排列；id = kubejs:<命名空间>/smelting/<路径>
    const recipes = [
        //occultism
        {
            output:"occultism:iesnium_ingot",
            input:"kubejs:crushed_raw_iesnium",
            xp:0.1,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const [namespace,path] = toCounted(recipe.output).id.split(":")

        event.smelting(
            recipe.output,
            recipe.input,
            recipe.xp
        )
        .id(`${id_prefix}${namespace}/smelting/${path}`)
    })
})
