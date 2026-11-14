ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:create/milling/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"4x naturesaura:gold_powder",
            input:"naturesaura:gold_leaf",
            id:`${id_prefix}gold_powder`,
        },
        {
            output:"eternal_starlight:dusted_shard",
            input:"eternal_starlight:dusted_gravel",
            id:`${id_prefix}dusted_shard`,
        },
        {
            output:"eternal_starlight:dusted_gravel",
            input:"eternal_starlight:cobbled_radianite",
            id:`${id_prefix}dusted_gravel_radianite`,
        },
        {
            output:"eternal_starlight:dusted_gravel",
            input:"eternal_starlight:cobbled_grimstone",
            id:`${id_prefix}dusted_gravel_grimstone`,
        },
        {
            output:"eternal_starlight:dusted_gravel",
            input:"eternal_starlight:cobbled_voidstone",
            id:`${id_prefix}dusted_gravel_voidstone`,
        },
        {
            output:"immersiveengineering:slag_gravel",
            input:"immersiveengineering:slag",
            id:`${id_prefix}slag_gravel`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.create.milling(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))
})
