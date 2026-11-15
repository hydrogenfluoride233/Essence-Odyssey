ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekmm/lathe/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"2x immersiveengineering:stick_netherite",
            input:"minecraft:netherite_ingot",
            id:`${id_prefix}netherite`,
        },
        {
            output:"2x immersiveengineering:stick_iron",
            input:"minecraft:iron_ingot",
            id:`${id_prefix}iron`,
        },
        {
            output:"2x createaddition:copper_rod",
            input:"minecraft:copper_ingot",
            id:`${id_prefix}copper`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.mekmm.lathe(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))
})
