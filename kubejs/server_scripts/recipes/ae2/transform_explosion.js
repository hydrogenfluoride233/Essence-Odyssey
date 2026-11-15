ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:ae2/transform_explosion/"
    const Required = ["id","input","output"]

    const recipes = [
        {
            input:"minecraft:raw_iron_block",
            output:"ae2:item_storage_cell_1k",
            id:`${id_prefix}item_storage_cell_1k`,
        },
        {
            input:"minecraft:raw_copper_block",
            output:"ae2:fluid_storage_cell_1k",
            id:`${id_prefix}fluid_storage_cell_1k`,
        },
        {
            input:"ae2:quartz_fiber",
            output:"8x ae2:white_glass_cable",
            id:`${id_prefix}white_glass_cable`,
        },
        {
            input:"sophisticatedstorage:diamond_chest",
            output:"ae2:drive",
            id:`${id_prefix}drive`,
        },
        {
            input:"sophisticatedbackpacks:crafting_upgrade",
            output:"ae2:crafting_terminal",
            id:`${id_prefix}crafting_terminal`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>{
        const {count,id} = toCounted(recipe.output)

        AE2Recipes.transformExplosion(
            event,
            [recipe.input,"kubejs:unknown_mixture"],
            id,
            count,
            recipe.id
        )
    })
})
