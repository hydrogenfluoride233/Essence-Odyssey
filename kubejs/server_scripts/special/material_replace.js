ServerEvents.recipes(event=>{
    //特殊写法
    event.replaceInput(
        {id:"neovitae:ara_vitae/weak_blood_orb"},
        "minecraft:diamond",
        "minecraft:ghast_tear"
    )//见习生生命宝珠

    event.replaceInput(
        {id:"neovitae:ara_vitae/apprentice_blood_orb"},
        "minecraft:redstone_block",
        "astralsorcery:starmetal_ingot"
    )//学徒生命宝珠

    event.replaceInput(
        {id:"neovitae:ara_vitae/magician_blood_orb"},
        "minecraft:gold_block",
        "cataclysm:lacrima"
    )//巫师生命宝珠

    event.replaceInput(
        {mod:"neovitae"},
        "minecraft:deepslate",
        "pneumaticcraft:reinforced_stone"
    )//深板岩

    event.replaceInput(
        {mod:"astralsorcery"},
        {match:"#minecraft:coals",exact:true},
        "immersiveengineering:dust_hop_graphite"
    )//石墨粉

    //统一替换
    const Swaps = [
        //铁
        ["#c:nuggets/iron","kubejs:ferricore_nugget"],
        ["#c:ingots/iron","justdirethings:ferricore_ingot"],
        ["minecraft:iron_ingot","justdirethings:ferricore_ingot"],
        ["#c:storage_blocks/iron","justdirethings:ferricore_block"],

        //金
        ["#c:nuggets/gold","kubejs:blazegold_nugget"],
        ["#c:ingots/gold","justdirethings:blazegold_ingot"],
        ["minecraft:gold_ingot","justdirethings:blazegold_ingot"],
        ["#c:storage_blocks/gold","justdirethings:blazegold_block"],

        //铜
        ["#c:nuggets/copper","mekanism:nugget_bronze"],
        ["#c:ingots/copper","mekanism:ingot_bronze"],
        ["minecraft:copper_ingot","mekanism:ingot_bronze"],
        ["#c:storage_blocks/copper","mekanism:block_bronze"],

        //下界合金
        ["#c:ingots/netherite","justdirethings:eclipsealloy_ingot"],
        ["minecraft:netherite_ingot","justdirethings:eclipsealloy_ingot"],
        ["#c:storage_blocks/netherite","justdirethings:eclipsealloy_block"],

        //钻石
        ["#c:gems/diamond","justdirethings:celestigem"],
        ["minecraft:diamond","justdirethings:celestigem"],
        ["#c:storage_blocks/diamond","justdirethings:celestigem_block"],

        //红石
        ["#c:dusts/redstone","kubejs:empowered_restonia_crystal_dust"],
        ["minecraft:redstone","kubejs:empowered_restonia_crystal_dust"],
        ["#c:storage_blocks/redstone","actuallyadditions:empowered_restonia_crystal_block"],

        //青金石
        ["#c:gems/lapis","actuallyadditions:empowered_palis_crystal"],
        ["minecraft:lapis_lazuli","actuallyadditions:empowered_palis_crystal"],
        ["#c:storage_blocks/lapis","actuallyadditions:empowered_palis_crystal_block"],
        ["minecraft:lapis_block","actuallyadditions:empowered_palis_crystal_block"],

        //绿宝石
        ["#c:gems/emerald","actuallyadditions:empowered_emeradic_crystal"],
        ["minecraft:emerald","actuallyadditions:empowered_emeradic_crystal"],
        ["#c:storage_blocks/emerald","actuallyadditions:empowered_emeradic_crystal_block"],

        //煤炭
        ["#minecraft:coals","actuallyadditions:empowered_void_crystal"],
        ["minecraft:coal","actuallyadditions:empowered_void_crystal"],
        ["#c:storage_blocks/coal","actuallyadditions:empowered_void_crystal_block"],
        ["#c:dusts/coal","kubejs:empowered_void_crystal_dust"],

        //紫水晶
        ["#c:gems/amethyst","ars_nouveau:source_gem"],
        ["minecraft:amethyst_shard","ars_nouveau:source_gem"],
        ["#c:storage_blocks/amethyst","ars_nouveau:source_gem_block"]
    ]

    //模组列表
    const Mods = [
        {mod:"astralsorcery"},
        {mod:"appliedas"},
        {mod:"neovitae",not:{type:"neovitae:athanor"},not:{id:"neovitae:coal_dust_from_coal"}},
        {mod:"ifeu",not:{type:"ifeu:precision_shaped"}},
        {mod:"industrialforegoing"},
        {mod:"industrialforegoingsouls"}
    ]

    Mods.forEach(filter=>Swaps.forEach(([from,to])=>
        event.replaceInput(filter,{match:from,exact:true},to)))
})
