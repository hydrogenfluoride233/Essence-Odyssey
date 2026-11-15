ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:immersiveengineering/crusher/"
    const Required = ["id","output","input"]

    const recipes = [
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.immersiveengineering.crusher(
            toTagOutput(recipe.output),
            recipe.input,
            recipe.time
        )
        .id(recipe.id))

    //充能水晶：粉碎成粉
    Crystals.forEach(crystal=>
        event.recipes.immersiveengineering.crusher(
            toTagOutput(`kubejs:empowered_${crystal.id}_crystal_dust`),
            `actuallyadditions:empowered_${crystal.id}_crystal`,
            3200
        )
        .id(`${id_prefix}${crystal.id}`))
})
