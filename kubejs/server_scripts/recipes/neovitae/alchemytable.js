ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:neovitae/alchemytable/"
    const Required = ["id","output","input","tier","blood"]

    const recipes = [
        {
            output:"neovitae:rune_blank",
            input:[
                "pneumaticcraft:reinforced_stone",
                "kubejs:crystal_aqua",
                "kubejs:crystal_terra",
                "neovitae:tabula_rasa",
                "neovitae:tabula_rasa",
                "neovitae:tabula_rasa",
            ],
            tier:0,
            blood:500,
            id:`${id_prefix}rune_blank`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.neovitae.alchemytable(
            recipe.output,
            recipe.input,
            recipe.blood,
            100,
            recipe.tier
        )
        .id(recipe.id))
})
