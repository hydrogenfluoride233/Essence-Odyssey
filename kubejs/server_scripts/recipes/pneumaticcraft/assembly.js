ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:pneumaticcraft/assembly/"
    const Required = ["id","output","input","program"]

    const recipes = [

    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":`pneumaticcraft:assembly_${recipe.program}`,
            "input":toIngredient(recipe.input),
            "program":recipe.program,
            "result":toItemStack(recipe.output)
        })
        .id(recipe.id))
})
