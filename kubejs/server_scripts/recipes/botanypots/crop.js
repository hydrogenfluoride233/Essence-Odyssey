ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:botanypots/crop/"
    const Required = ["id","ore","block","input","output"]

    const recipes = [
        {
            ore:"occultism:silver_ore",
            block:"occultism:silver_block",
            input:"occultism:silver_ingot",
            output:"occultism:raw_silver",
            id:`${id_prefix}silver_ore`,
        },
        {
            ore:"occultism:iesnium_ore",
            block:"occultism:iesnium_block",
            input:"occultism:iesnium_ingot",
            output:"occultism:raw_iesnium",
            id:`${id_prefix}iesnium_ore`,
        },
        {
            ore:"deep_aether:skyjade_ore",
            block:"deep_aether:skyjade_block",
            input:"deep_aether:skyjade",
            output:"deep_aether:skyjade",
            id:`${id_prefix}skyjade_ore`,
        },
        {
            ore:"aether:gravitite_ore",
            block:"deep_aether:stratus_block",
            input:"deep_aether:stratus_ingot",
            output:"aether:gravitite_ore",
            id:`${id_prefix}gravitite_ore`,
        },
        {
            ore:"actuallyadditions:black_quartz_ore",
            block:"actuallyadditions:black_quartz_block",
            input:"actuallyadditions:black_quartz",
            output:"actuallyadditions:black_quartz",
            id:`${id_prefix}black_quartz_ore`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "bookshelf:load_conditions":[{"type":"bookshelf:item_exists","values":[recipe.ore]}],
            "type":"botanypots:crop",
            "input":{"item":recipe.input},
            "soil":{"item":recipe.block},
            "grow_time":1200,
            "display":{"type":"botanypots:simple","block_state":{"block":recipe.ore}},
            "drops":[{"type":"botanypots:items","items":[{"result":{"id":recipe.output},"chance":1.0}]}],
            "yield":2.5
        })
        .id(recipe.id))
})
