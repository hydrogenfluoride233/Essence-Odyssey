ServerEvents.recipes(event=>{
    const Required = ["id","from","to"]

    //逐条点名替换：按模组 A-Z
    const Replacements = [
        //cataclysm
        {
            id:"cataclysm:netherite_effigy",
            from:"minecraft:nether_brick",
            to:"cataclysm:lava_power_cell"
        },

        //create
        {
            id:"create:crafting/kinetics/whisk",
            from:"#c:plates/iron",
            to:"#c:wires/iron"
        },//搅拌器
        {
            id:"create:crafting/kinetics/water_wheel",
            from:"create:shaft",
            to:"create_connected:encased_chain_cogwheel"
        },//水车
        {
            id:"create:crafting/kinetics/steam_engine",
            from:"#c:plates/gold",
            to:"create:precision_mechanism"
        },

        //enderio
        {
            id:"enderio:dark_bimetal_gear",
            from:"industrialforegoing:iron_gear",
            to:"enderio:iron_gear"
        },
        {
            id:"enderio:energized_gear",
            from:"industrialforegoing:iron_gear",
            to:"enderio:iron_gear"
        },

        //extendedae
        {
            id:"extendedae:water_cell",
            from:"minecraft:water_bucket",
            to:"cookingforblockheads:sink"
        },

        //immersiveengineering
        {
            id:"immersiveengineering:crafting/cokebrick",
            from:"#c:bricks",
            to:"mekanism:ingot_steel"
        },
        {
            id:"immersiveengineering:crafting/coil_lv",
            from:"minecraft:iron_ingot",
            to:"actuallyadditions:enori_crystal"
        },
        {
            id:"immersiveengineering:crafting/coil_mv",
            from:"minecraft:iron_ingot",
            to:"actuallyadditions:enori_crystal"
        },
        {
            id:"immersiveengineering:crafting/coil_hv",
            from:"minecraft:iron_ingot",
            to:"actuallyadditions:enori_crystal"
        },
        {
            id:"immersiveengineering:crafting/hammer",
            from:"minecraft:iron_ingot",
            to:"create:andesite_alloy"
        },
        {
            id:"immersiveengineering:crafting/workbench",
            from:"minecraft:iron_ingot",
            to:"twilightforest:wrought_iron_bar"
        },
        {
            id:"immersiveengineering:crafting/cloche",
            from:"immersiveengineering:component_iron",
            to:"botanypots:terracotta_botany_pot"
        },
        {
            id:"immersiveengineering:crafting/capacitor_mv",
            from:"immersiveengineering:basic_engineering",
            to:"immersiveengineering:capacitor_lv"
        },
        {
            id:"immersiveengineering:crafting/capacitor_hv",
            from:"immersiveengineering:basic_engineering",
            to:"immersiveengineering:capacitor_mv"
        },

        //industrialforegoing
        {
            id:"industrialforegoing:mob_slaughter_factory",
            from:"industrialforegoing:machine_frame_pity",
            to:"industrialforegoing:machine_frame_simple"
        },

        //integrateddynamics
        {
            id:"integrateddynamics:crafting/energy_battery",
            from:"integrateddynamics:crystalized_menril_block",
            to:"createaddition:modular_accumulator"
        },
        {
            id:"integrateddynamics:crafting/energy_battery",
            from:"minecraft:redstone_block",
            to:"industrialforegoing:machine_frame_pity"
        },

        //mekanism
        {
            id:"mekanism:structural_glass",
            from:"#c:ingots/steel",
            to:"mekanism:dust_steel"
        },
        {
            id:"mekanism:robit",
            from:"#c:ingots/steel",
            to:"immersiveengineering:robot_wolf"
        },
        {
            id:"mekanism:control_circuit/basic",
            from:"mekanism:ingot_osmium",
            to:"immersiveengineering:circuit_board"
        },

        //neovitae
        {
            id:"neovitae:ara_vitae/weak_blood_orb",
            from:"minecraft:diamond",
            to:"minecraft:ghast_tear"
        },
        {
            id:"neovitae:ara_vitae/apprentice_blood_orb",
            from:"minecraft:redstone_block",
            to:"astralsorcery:starmetal_ingot"
        },
        {
            id:"neovitae:ara_vitae/magician_blood_orb",
            from:"minecraft:gold_block",
            to:"cataclysm:lacrima"
        },
        {
            id:"neovitae:hellfire_forge",
            from:"#c:ingots/iron",
            to:"naturesaura:token_anger"
        },

        //pneumaticcraft
        {
            id:"pneumaticcraft:reinforced_stone",
            from:"minecraft:stone",
            to:"naturesaura:infused_stone"
        },
        {
            id:"pneumaticcraft:small_tank",
            from:"#c:glass_blocks",
            to:"create:fluid_tank"
        },
    ]

    checkRecipe(Replacements,Required)

    Replacements.forEach(recipe=>
        event.replaceInput({id:recipe.id},recipe.from,recipe.to))

    //整模组替换：写在点名替换之后
    const ModRequired = ["mod","from","to"]

    const ModReplacements = [
        {
            mod:"neovitae",
            from:"minecraft:deepslate",
            to:"pneumaticcraft:reinforced_stone"
        },//深板岩
        {
            mod:"neovitae",
            from:"#minecraft:planks",
            to:"astralsorcery:infused_wood_planks"
        },//木板
        {
            mod:"neovitae",
            from:"#minecraft:logs",
            to:"astralsorcery:infused_wood"
        },//原木
        {
            mod:"astralsorcery",
            from:{match:"#minecraft:coals",exact:true},
            to:"immersiveengineering:dust_hop_graphite"
        },//石墨粉
    ]

    checkRecipe(ModReplacements,ModRequired)

    ModReplacements.forEach(recipe=>
        event.replaceInput({mod:recipe.mod},recipe.from,recipe.to))

    //统一替换表 + 模组列表：最后执行
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
        {mod:"neovitae",not:[{type:"neovitae:athanor"},{id:"neovitae:coal_dust_from_coal"}]},
        {mod:"ifeu",not:{type:"ifeu:precision_shaped"}},
        {mod:"industrialforegoing"},
        {mod:"industrialforegoingsouls"}
    ]

    Mods.forEach(filter=>Swaps.forEach(([from,to])=>
        event.replaceInput(
            filter,
            {match:from,exact:true},
            to
        )))
})
