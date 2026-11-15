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
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>{
        const builder = recipe.catalyst ?
            event.recipes.naturesaura.altar(recipe.output,recipe.input,recipe.aura,recipe.time,recipe.catalyst) :
            event.recipes.naturesaura.altar(recipe.output,recipe.input,recipe.aura,recipe.time)

        builder.id(recipe.id)

        packagedNatureAltar(event,recipe.output,recipe.input,recipe.aura)
    })

    //水晶块：原方块 => 水晶块
    Crystals.forEach(crystal=>{
        const output = `actuallyadditions:${crystal.id}_crystal_block`
        const input = crystal.block

        event.recipes.naturesaura.altar(
            output,
            input,
            120000,
            150,
            "naturesaura:conversion_catalyst"
        )
        .id(`${id_prefix}${crystal.id}_crystal_block`)

        packagedNatureAltar(event,output,input,120000)
    })

    //充能水晶：崩坏催化粉碎成粉
    Crystals.forEach(crystal=>{
        const output = `kubejs:empowered_${crystal.id}_crystal_dust`
        const input = `actuallyadditions:empowered_${crystal.id}_crystal`

        event.recipes.naturesaura.altar(
            output,
            input,
            10000,
            100,
            "naturesaura:crushing_catalyst"
        )
        .id(`${id_prefix}${crystal.id}_crystal_dust`)

        packagedNatureAltar(event,output,input,10000)
    })
})
