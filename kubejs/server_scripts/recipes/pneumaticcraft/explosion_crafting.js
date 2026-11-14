ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:pneumaticcraft/explosion_crafting/"
    const Required = ["id","output","input","loss_rate"]

    const recipes = [
        {
            output:"pneumaticcraft:ingot_iron_compressed",
            input:"mekanism:ingot_steel",
            loss_rate:20,
            id:`${id_prefix}compressed_iron_ingot`,
        },
        {
            output:"pneumaticcraft:compressed_iron_block",
            input:"mekanism:block_steel",
            loss_rate:20,
            id:`${id_prefix}compressed_iron_block`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"pneumaticcraft:explosion_crafting",
            "input":toIngredient(recipe.input),
            "loss_rate":recipe.loss_rate,
            "results":asRecipeArray(recipe.output).map(toItemStack)
        })
        .id(recipe.id))
})
