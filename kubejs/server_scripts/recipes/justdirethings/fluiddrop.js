ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:justdirethings/fluiddrop/"
    const Required = ["id","item_input","fluid_input","output"]

    //第一项是模组自己的配方 id；末尾 .id() 是 KubeJS 的 id
    const recipes = [
        {
            item_input:"justdirethings:polymorphic_catalyst",
            fluid_input:"astralsorcery:liquid_starlight",
            output:"justdirethings:polymorphic_fluid_block",
            id:`${id_prefix}polymorphic_fluid`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.justdirethings.fluiddrop(
            recipe.id,
            recipe.item_input,
            recipe.fluid_input,
            recipe.output
        )
        .id(recipe.id))
})
