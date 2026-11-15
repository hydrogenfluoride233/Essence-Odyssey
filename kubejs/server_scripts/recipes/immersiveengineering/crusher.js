ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:immersiveengineering/crusher/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"kubejs:empowered_restonia_crystal_dust",
            input:"actuallyadditions:empowered_restonia_crystal",
            time:3200,
            id:`${id_prefix}restonia`,
        },
        {
            output:"kubejs:empowered_palis_crystal_dust",
            input:"actuallyadditions:empowered_palis_crystal",
            time:3200,
            id:`${id_prefix}palis`,
        },
        {
            output:"kubejs:empowered_diamatine_crystal_dust",
            input:"actuallyadditions:empowered_diamatine_crystal",
            time:3200,
            id:`${id_prefix}diamatine`,
        },
        {
            output:"kubejs:empowered_void_crystal_dust",
            input:"actuallyadditions:empowered_void_crystal",
            time:3200,
            id:`${id_prefix}void`,
        },
        {
            output:"kubejs:empowered_enori_crystal_dust",
            input:"actuallyadditions:empowered_enori_crystal",
            time:3200,
            id:`${id_prefix}enori`,
        },
        {
            output:"kubejs:empowered_emeradic_crystal_dust",
            input:"actuallyadditions:empowered_emeradic_crystal",
            time:3200,
            id:`${id_prefix}emeradic`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.immersiveengineering.crusher(
            toTagOutput(recipe.output),
            recipe.input,
            recipe.time
        )
        .id(recipe.id))
})
