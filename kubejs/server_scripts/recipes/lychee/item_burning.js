ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:lychee/item_burning/"
    const Required = ["id","item","condition","action"]

    const recipes = [
        {
            item:"minecraft:amethyst_shard",
            condition:inDimension("minecraft:the_nether"),
            action:[
                "drop kubejs:crystal_ignis",
                {
                    type:"execute",
                    command:"particle minecraft:flame ~ ~ ~ 0.3 0.3 0.3 0.05 20",
                    hide:true
                },
                {
                    type:"execute",
                    command:"particle minecraft:lava ~ ~ ~ 0.2 0.2 0.2 0.02 10",
                    hide:true
                },
                {
                    type:"execute",
                    command:"playsound minecraft:item.firecharge.use block @a ~ ~ ~ 1 1",
                    hide:true
                }
            ],
            id:`${id_prefix}ignis_nether`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"lychee:item_burning",
            "item_in":recipe.item,
            "if":recipe.condition,
            "post":recipe.action
        })
        .id(recipe.id))
})
