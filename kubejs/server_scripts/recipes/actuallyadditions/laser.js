ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:actuallyadditions/laser/"
    const Required = ["output","input","energy","id"]

    const recipes = [
        {
            output:"botanypots:terracotta_botany_pot",
            input:"minecraft:flower_pot",
            energy:100000,
            id:`${id_prefix}terracotta_botany_pot`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.actuallyadditions.laser(
            recipe.output,
            recipe.input,
            recipe.energy
        )
        .id(recipe.id))
})
