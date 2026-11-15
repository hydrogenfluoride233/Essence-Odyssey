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
    ].concat(Crystals.map(crystal=>({
        output:`kubejs:empowered_${crystal.id}_crystal_dust`,
        input:`actuallyadditions:empowered_${crystal.id}_crystal`,
        id:`${id_prefix}${crystal.id}`,
    })))

    checkRecipe(recipes,Required)

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
