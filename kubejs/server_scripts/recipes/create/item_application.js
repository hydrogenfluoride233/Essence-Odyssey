ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:create/item_application/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"create:andesite_casing",
            input:["quark:stripped_ancient_log","create:andesite_alloy"],
            id:`${id_prefix}andesite_casing_log`,
        },
        {
            output:"create:andesite_casing",
            input:["quark:stripped_ancient_wood","create:andesite_alloy"],
            id:`${id_prefix}andesite_casing_wood`,
        },
        {
            output:"create:brass_casing",
            input:["quark:stripped_ancient_log","create:brass_ingot"],
            id:`${id_prefix}brass_casing_log`,
        },
        {
            output:"create:brass_casing",
            input:["quark:stripped_ancient_wood","create:brass_ingot"],
            id:`${id_prefix}brass_casing_wood`,
        },
        {
            output:"create:copper_casing",
            input:["quark:stripped_ancient_log","minecraft:copper_ingot"],
            id:`${id_prefix}copper_casing_log`,
        },
        {
            output:"create:copper_casing",
            input:["quark:stripped_ancient_wood","minecraft:copper_ingot"],
            id:`${id_prefix}copper_casing_wood`,
        },
        {
            output:"mmcr:basic_casing",
            input:["create:andesite_casing","mmcr:modularium"],
            id:`${id_prefix}basic_casing`,
        },
        {
            output:"naturesaura:wood_stand",
            input:["minecraft:stripped_oak_log","naturesaura:gold_fiber"],
            id:`${id_prefix}wood_stand`,
        },
        {
            output:"naturesaura:gold_brick",
            input:["minecraft:stone_bricks","naturesaura:gold_fiber"],
            id:`${id_prefix}gold_brick`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.create.item_application(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))
})
