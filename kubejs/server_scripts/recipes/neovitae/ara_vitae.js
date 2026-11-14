ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:neovitae/ara_vitae/"
    const Required = ["id","output","input","tier","blood","cost","back"]

    //cost 消耗速率、back 回退速率
    const recipes = [
        {
            output:"neovitae:guide_book",
            input:"minecraft:book",
            tier:0,
            blood:1000,
            cost:5,
            back:0,
            id:`${id_prefix}guide_book`,
        },
        {
            output:"mysticalagriculture:infusion_crystal",
            input:"mysticalagriculture:prosperity_gemstone",
            tier:4,
            blood:50000,
            cost:25,
            back:50,
            id:`${id_prefix}infusion_crystal`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.neovitae.ara_vitae_recipe(
            recipe.output,
            recipe.input,
            recipe.tier,
            recipe.blood,
            recipe.cost,
            recipe.back
        )
        .id(recipe.id))

    //元始要素：铭文工具
    PrimaryAspects.forEach(data=>{
        const ess = data.id

        event.recipes.neovitae.ara_vitae_recipe(
            `${data.scribe}:${data.name}_scribe_tool`,
            `${data.essence}:${data.name}_essence`,
            2,
            10000,
            25,
            50
        )
        .id(`essenceodyssey:neovitae/ara_vitae/${ess}_scribe_tool`)
    })
})
