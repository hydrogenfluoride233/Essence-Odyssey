ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:createaddition/charging/"
    const Required = ["id","output","input","energy","max_rate"]

    const recipes = [
        {
            output:"mekanism:ingot_steel",
            input:"naturesaura:infused_iron",
            energy:36000,
            max_rate:360,
            id:`${id_prefix}steel`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"createaddition:charging",
            "energy":recipe.energy,
            "ingredients":[{"item":recipe.input}],
            "max_charge_rate":recipe.max_rate,
            "results":[{"id":recipe.output}]
        })
        .id(recipe.id))
})
