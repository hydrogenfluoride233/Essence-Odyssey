ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekanism/metallurgic_infusing/"
    const Required = ["id","output","item_input","chemical_input"]

    const recipes = [
        {
            output:"twilightforest:wrought_iron_bar",
            item_input:"justdirethings:ferricore_ingot",
            chemical_input:"10x mekanism:carbon",
            id:`${id_prefix}wrought_iron_bar`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.mekanism.metallurgic_infusing(
            recipe.output,
            recipe.item_input,
            recipe.chemical_input,
            false
        )
        .id(recipe.id))
})
