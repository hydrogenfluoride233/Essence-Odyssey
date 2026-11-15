ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:botanypots/soil/"
    const Required = ["id","block"]

    const recipes = [
        {
            block:"occultism:silver_block",
            id:`${id_prefix}silver_block`,
        },
        {
            block:"occultism:iesnium_block",
            id:`${id_prefix}iesnium_block`,
        },
        {
            block:"deep_aether:skyjade_block",
            id:`${id_prefix}skyjade_block`,
        },
        {
            block:"deep_aether:stratus_block",
            id:`${id_prefix}stratus_block`,
        },
        {
            block:"actuallyadditions:black_quartz_block",
            id:`${id_prefix}black_quartz_block`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":[recipe.block]}],
            "type":"botanypots:soil",
            "input":{"item":recipe.block},
            "display":{"type":"botanypots:simple","block_state":{"block":recipe.block}},
            "growth_modifier":0.0
        })
        .id(recipe.id))
})
