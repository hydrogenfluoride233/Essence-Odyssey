ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:naturesaura/altar/"
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
            output:"mekanism:dust_steel",
            input:"mekanism:ingot_steel",
            aura:10000,
            time:100,
            catalyst:"naturesaura:crushing_catalyst",
            id:`${id_prefix}steel_dust`,
        },
    ].concat(Crystals.map(crystal=>({
        output:`actuallyadditions:${crystal.id}_crystal_block`,
        input:crystal.block,
        aura:120000,
        time:150,
        catalyst:"naturesaura:conversion_catalyst",
        id:`${id_prefix}${crystal.id}_crystal_block`,
    })))

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>{
        const builder = recipe.catalyst ?
            event.recipes.naturesaura.altar(recipe.output,recipe.input,recipe.aura,recipe.time,recipe.catalyst) :
            event.recipes.naturesaura.altar(recipe.output,recipe.input,recipe.aura,recipe.time)

        builder.id(recipe.id)

        packagedNatureAltar(event,recipe.output,recipe.input,recipe.aura)
    })
})
