ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:neovitae/hellfire_forge/"
    const Required = ["id","output","input","min","cost"]

    //min 最低灵质量、cost 消耗的灵质量
    const recipes = [
        {
            output:"neovitae:blood_stained_glass",
            input:[
                "neovitae:sands_of_vitae",
                "ars_nouveau:fire_essence",
            ],
            min:50,
            cost:10,
            id:`${id_prefix}blood_stained_glass`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.neovitae.hellfire_forge(
            recipe.output,
            recipe.input,
            recipe.min,
            recipe.cost
        )
        .id(recipe.id))
})
