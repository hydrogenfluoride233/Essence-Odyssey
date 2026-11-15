ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:immersiveengineering/blast_furnace_fuel/"
    const Required = ["id","fuel","burn_time"]

    const recipes = [
        {
            fuel:"ars_nouveau:fire_essence",
            burn_time:600,
            id:`${id_prefix}fire_essence`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.immersiveengineering.blast_furnace_fuel(
            recipe.fuel,
            recipe.burn_time
        )
        .id(recipe.id))
})
