ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:enderio/sag_milling/"
    const Required = ["output","input","id"]
    const SAGBonus = [SagMillBonus.CHANCE_ONLY,SagMillBonus.MULTIPLY_OUTPUT]

    //bonus 可选：0 只影响副产物概率，1 同时影响产量与副产物概率，不写＝NONE
    const recipes = [
        {
            output:"4x naturesaura:gold_powder",
            input:"naturesaura:gold_leaf",
            id:`${id_prefix}gold_powder`,
        },
        {
            output:"kubejs:empowered_restonia_crystal_dust",
            input:"actuallyadditions:empowered_restonia_crystal",
            id:`${id_prefix}restonia`,
        },
        {
            output:"kubejs:empowered_palis_crystal_dust",
            input:"actuallyadditions:empowered_palis_crystal",
            id:`${id_prefix}palis`,
        },
        {
            output:"kubejs:empowered_diamatine_crystal_dust",
            input:"actuallyadditions:empowered_diamatine_crystal",
            id:`${id_prefix}diamatine`,
        },
        {
            output:"kubejs:empowered_void_crystal_dust",
            input:"actuallyadditions:empowered_void_crystal",
            id:`${id_prefix}void`,
        },
        {
            output:"kubejs:empowered_enori_crystal_dust",
            input:"actuallyadditions:empowered_enori_crystal",
            id:`${id_prefix}enori`,
        },
        {
            output:"kubejs:empowered_emeradic_crystal_dust",
            input:"actuallyadditions:empowered_emeradic_crystal",
            id:`${id_prefix}emeradic`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const bonus = recipe.bonus === undefined ? SagMillBonus.NONE : SAGBonus[recipe.bonus]

        event.recipes.enderio.sag_milling(
            recipe.output,
            recipe.input,
            2400,
            bonus
        )
        .id(recipe.id)
    })

    //矿石处理：粉碎
    MetalConfig.forEach(metal=>{
        const rawItemId = `${metal.raw_mod}:${metal.raw_item}`

        event.recipes.enderio.sag_milling(
            [
                metal.dust,
                SagMillOutput.of(metal.dust,0.8),
                SagMillOutput.of(metal.secondary_dust,0.2),
            ],
            rawItemId
        )
        .energy(2400)
        .bonus(SagMillBonus.CHANCE_ONLY)
        .id(`kubejs:enderio/sag_milling/${metal.name}_raw`)

        event.recipes.enderio.sag_milling(
            metal.dust,
            metal.ingot
        )
        .energy(2400)
        .bonus(SagMillBonus.NONE)
        .id(`kubejs:enderio/sag_milling/${metal.name}_ingot`)
    })

    event.recipes.enderio.sag_milling(
        [
            "occultism:silver_dust",
            SagMillOutput.of("occultism:silver_dust",0.8),
            SagMillOutput.of("mekanism:dust_gold",0.2),
        ],
        "occultism:raw_silver"
    )
    .energy(2400)
    .bonus(SagMillBonus.CHANCE_ONLY)
    .id("kubejs:enderio/sag_milling/silver_raw")
})
