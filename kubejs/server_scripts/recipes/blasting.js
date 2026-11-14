ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:"
    const Required = ["output","input"]

    //按输出物命名空间 A-Z 排列；id = essenceodyssey:<命名空间>/blasting/<路径>
    const recipes = [
        //immersiveengineering
        {
            output:"immersiveengineering:slag",
            input:"#c:gravels",
            xp:0.5,
            time:200,
        },

        //occultism
        {
            output:"occultism:iesnium_ingot",
            input:"kubejs:crushed_raw_iesnium",
            xp:0.1,
            time:100,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const [namespace,path] = toCounted(recipe.output).id.split(":")

        event.blasting(
            recipe.output,
            recipe.input,
            recipe.xp,
            recipe.time
        )
        .id(`${id_prefix}${namespace}/blasting/${path}`)
    })
})
