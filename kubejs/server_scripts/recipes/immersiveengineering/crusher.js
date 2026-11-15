ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:immersiveengineering/crusher/"
    const Required = ["id","output","input"]

    const recipes = [
    ].concat(Crystals.map(crystal=>({
        output:`kubejs:empowered_${crystal.id}_crystal_dust`,
        input:`actuallyadditions:empowered_${crystal.id}_crystal`,
        time:3200,
        id:`${id_prefix}${crystal.id}`,
    })))

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.immersiveengineering.crusher(
            toTagOutput(recipe.output),
            recipe.input,
            recipe.time
        )
        .id(recipe.id))
})
