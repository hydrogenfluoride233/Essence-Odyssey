ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:naturesaura/altar/"
    const Required = ["id","output","input","aura","time"]

    const recipes = [
        {
            output:"naturesaura:infused_iron",
            input:"twilightforest:fiery_ingot",
            aura:9000,
            time:10,
            id:`${id_prefix}infused_iron`,
        },
        {
            output:"naturesaura:infused_iron_block",
            input:"twilightforest:fiery_block",
            aura:90000,
            time:50,
            id:`${id_prefix}infused_iron_block`,
        },
        {
            output:"naturesaura:infused_stone",
            input:"ars_nouveau:sourcestone",
            aura:1000,
            time:10,
            id:`${id_prefix}infused_stone`,
        },
        {
            output:"naturesaura:tainted_gold",
            input:"immersiveengineering:ingot_electrum",
            aura:9000,
            time:10,
            id:`${id_prefix}tainted_gold`,
        },
        {
            output:"naturesaura:tainted_gold_block",
            input:"immersiveengineering:storage_electrum",
            aura:90000,
            time:50,
            id:`${id_prefix}tainted_gold_block`,
        },
        {
            output:"8x naturesaura:gold_powder",
            input:"naturesaura:gold_leaf",
            aura:1500,
            time:10,
            catalyst:"naturesaura:crushing_catalyst",
            id:`${id_prefix}gold_powder`,
        },
        {
            output:"4x minecraft:amethyst_shard",
            input:"minecraft:amethyst_block",
            aura:20000,
            time:100,
            catalyst:"naturesaura:crushing_catalyst",
            id:`${id_prefix}amethyst_shard`,
        },
        {
            output:"kubejs:packaged_tree_beacon",
            input:"astralsorcery:tree_beacon",
            aura:20000,
            time:100,
            catalyst:"naturesaura:conversion_catalyst",
            id:`${id_prefix}packaged_tree_beacon`,
        },
        {
            output:"actuallyadditions:void_crystal_block",
            input:"minecraft:coal_block",
            aura:120000,
            time:150,
            catalyst:"naturesaura:conversion_catalyst",
            id:`${id_prefix}void_crystal_block`,
        },
        {
            output:"actuallyadditions:enori_crystal_block",
            input:"minecraft:iron_block",
            aura:120000,
            time:150,
            catalyst:"naturesaura:conversion_catalyst",
            id:`${id_prefix}enori_crystal_block`,
        },
        {
            output:"actuallyadditions:palis_crystal_block",
            input:"minecraft:lapis_block",
            aura:120000,
            time:150,
            catalyst:"naturesaura:conversion_catalyst",
            id:`${id_prefix}palis_crystal_block`,
        },
        {
            output:"actuallyadditions:emeradic_crystal_block",
            input:"minecraft:emerald_block",
            aura:120000,
            time:150,
            catalyst:"naturesaura:conversion_catalyst",
            id:`${id_prefix}emeradic_crystal_block`,
        },
        {
            output:"actuallyadditions:restonia_crystal_block",
            input:"minecraft:redstone_block",
            aura:120000,
            time:150,
            catalyst:"naturesaura:conversion_catalyst",
            id:`${id_prefix}restonia_crystal_block`,
        },
        {
            output:"actuallyadditions:diamatine_crystal_block",
            input:"minecraft:diamond_block",
            aura:120000,
            time:150,
            catalyst:"naturesaura:conversion_catalyst",
            id:`${id_prefix}diamatine_crystal_block`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const builder = recipe.catalyst ?
            event.recipes.naturesaura.altar(recipe.output,recipe.input,recipe.aura,recipe.time,recipe.catalyst) :
            event.recipes.naturesaura.altar(recipe.output,recipe.input,recipe.aura,recipe.time)

        builder.id(recipe.id)

        packagedNatureAltar(event,recipe.output,recipe.input,recipe.aura)
    })
})
