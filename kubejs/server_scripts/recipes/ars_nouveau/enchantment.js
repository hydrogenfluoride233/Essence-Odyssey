ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:ars_nouveau/enchantment/"
    const Required = ["id","pedestal","enchantment","level","source"]

    const recipes = [
        {
            pedestal:[
                "minecraft:blaze_powder",
                "minecraft:blaze_powder",
                "minecraft:blaze_powder",
                "minecraft:blaze_powder",
                "ars_nouveau:water_essence",
                "ars_nouveau:fire_essence",
                "ars_nouveau:earth_essence",
                "ars_nouveau:air_essence",
                "kubejs:perditio_essence",
                "kubejs:ordo_essence",
            ],
            enchantment:"ars_nouveau:reactive",
            level:2,
            source:6000,
            id:`${id_prefix}reactive_2`,
        },
        {
            pedestal:[
                "ars_elemental:spell_mirror",
                "ars_nouveau:water_essence",
                "ars_nouveau:fire_essence",
                "ars_nouveau:earth_essence",
                "ars_nouveau:air_essence",
                "kubejs:perditio_essence",
                "kubejs:ordo_essence",
            ],
            enchantment:"ars_elemental:mirror_shield",
            level:2,
            source:5000,
            id:`${id_prefix}mirror_shield_2`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.ars_nouveau.enchantment(
            recipe.pedestal,
            recipe.enchantment,
            recipe.level,
            recipe.source
        )
        .id(recipe.id))
})
