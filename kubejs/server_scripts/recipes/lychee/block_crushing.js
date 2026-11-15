ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:lychee/block_crushing/"
    const Required = ["id","item","action"]

    const recipes = [
        {
            item:"naturesaura:gold_leaf",
            action:["drop 2x naturesaura:gold_powder"],
            id:`${id_prefix}gold_powder`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"lychee:block_crushing",
            "item_in":recipe.item,
            "post":recipe.action
        })
        .id(recipe.id))
})
