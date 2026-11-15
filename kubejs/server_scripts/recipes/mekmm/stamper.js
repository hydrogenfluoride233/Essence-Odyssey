ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekmm/stamper/"
    const Required = ["id","output","input","mold"]

    const recipes = [
        {
            output:"kubejs:iesnium_sheet",
            input:"occultism:iesnium_ingot",
            mold:"immersiveengineering:mold_plate",
            id:`${id_prefix}iesnium_sheet`,
        },
        {
            output:"kubejs:tin_sheet",
            input:"mekanism:ingot_tin",
            mold:"immersiveengineering:mold_plate",
            id:`${id_prefix}tin_sheet`,
        },
        {
            output:"kubejs:osmium_sheet",
            input:"mekanism:ingot_osmium",
            mold:"immersiveengineering:mold_plate",
            id:`${id_prefix}osmium_sheet`,
        },
        {
            output:"createaddition:zinc_sheet",
            input:"create:zinc_ingot",
            mold:"immersiveengineering:mold_plate",
            id:`${id_prefix}zinc_sheet`,
        },
        {
            output:"create:brass_sheet",
            input:"create:brass_ingot",
            mold:"immersiveengineering:mold_plate",
            id:`${id_prefix}brass_sheet`,
        },
        {
            output:"createaddition:electrum_sheet",
            input:"immersiveengineering:ingot_electrum",
            mold:"immersiveengineering:mold_plate",
            id:`${id_prefix}electrum_sheet`,
        },
        {
            output:"minecraft:blaze_rod",
            input:"5x minecraft:blaze_powder",
            mold:"immersiveengineering:mold_rod",
            id:`${id_prefix}blaze_rod`,
        },
        {
            output:"2x createaddition:brass_rod",
            input:"create:brass_ingot",
            mold:"immersiveengineering:mold_rod",
            id:`${id_prefix}brass_rod`,
        },
        {
            output:"2x createaddition:copper_rod",
            input:"minecraft:copper_ingot",
            mold:"immersiveengineering:mold_rod",
            id:`${id_prefix}copper_rod`,
        },
        {
            output:"2x createaddition:gold_rod",
            input:"minecraft:gold_ingot",
            mold:"immersiveengineering:mold_rod",
            id:`${id_prefix}gold_rod`,
        },
        {
            output:"2x createaddition:electrum_rod",
            input:"immersiveengineering:ingot_electrum",
            mold:"immersiveengineering:mold_rod",
            id:`${id_prefix}electrum_rod`,
        },
        {
            output:"2x createaddition:gold_wire",
            input:"minecraft:gold_ingot",
            mold:"immersiveengineering:mold_wire",
            id:`${id_prefix}gold_wire`,
        },
        {
            output:"2x createaddition:iron_wire",
            input:"minecraft:iron_ingot",
            mold:"immersiveengineering:mold_wire",
            id:`${id_prefix}iron_wire`,
        },
        {
            output:"pneumaticcraft:compressed_iron_gear",
            input:"4x pneumaticcraft:ingot_iron_compressed",
            mold:"immersiveengineering:mold_gear",
            id:`${id_prefix}compressed_iron_gear`,
        },
        {
            output:"industrialforegoing:iron_gear",
            input:"4x minecraft:iron_ingot",
            mold:"immersiveengineering:mold_gear",
            id:`${id_prefix}iron_gear`,
        },
        {
            output:"industrialforegoing:gold_gear",
            input:"4x minecraft:gold_ingot",
            mold:"immersiveengineering:mold_gear",
            id:`${id_prefix}gold_gear`,
        },
        {
            output:"industrialforegoing:diamond_gear",
            input:"4x minecraft:diamond",
            mold:"immersiveengineering:mold_gear",
            id:`${id_prefix}diamond_gear`,
        },
        {
            output:"kubejs:steel_gear",
            input:"4x mekanism:ingot_steel",
            mold:"immersiveengineering:mold_gear",
            id:`${id_prefix}steel_gear`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.mekmm.stamper(
            recipe.output,
            recipe.input,
            recipe.mold
        )
        .id(recipe.id))
})
