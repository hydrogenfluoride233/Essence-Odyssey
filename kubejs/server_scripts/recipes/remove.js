ServerEvents.recipes(event=>{
    //按模组 id 的 A-Z 排列
    const recipes = [
        
    //actuallyadditions
    {id:"actuallyadditions:wood_casing"},
    {id:"actuallyadditions:iron_casing"},
    {id:"actuallyadditions:basic_coil"},
    {id:"actuallyadditions:advanced_coil"},
    {id:"actuallyadditions:crusher"},
    {id:"actuallyadditions:atomic_reconstructor"},
    {id:"actuallyadditions:canola_press"},
    {id:"actuallyadditions:empowerer"},
    {id:"actuallyadditions:laser/crystalize_void_crystal_block"},
    {id:"actuallyadditions:laser/crystalize_enori_crystal_block"},
    {id:"actuallyadditions:laser/crystalize_palis_crystal_block"},
    {id:"actuallyadditions:laser/crystalize_emeradic_crystal_block"},
    {id:"actuallyadditions:laser/crystalize_restonia_crystal_block"},
    {id:"actuallyadditions:laser/crystalize_diamatine_crystal_block"},
    {output:"actuallyadditions:oil_generator"},
    {output:"actuallyadditions:coal_generator"},
    {output:"actuallyadditions:leaf_generator"},
    {output:"actuallyadditions:heat_collector"},
    {output:"actuallyadditions:bio_reactor"},

    //appliedpneumatics
    {id:"appliedpneumatics:assembly/not_so_mysterious_cube_to_mysterious_cube"},

    //ars_elemental
    {id:"ars_elemental:mirror_shield_2"},
    {id:"ars_elemental:invincible_book"},
    {id:"ars_elemental:mark_of_mastery"},
    {id:"ars_elemental:imbuement_anima_essence"},

    //ars_nouveau
    {id:"ars_nouveau:imbuement_chamber"},
    {id:"ars_nouveau:enchanting_apparatus"},
    {id:"ars_nouveau:arcane_core"},
    {id:"ars_nouveau:source_jar"},
    {id:"ars_nouveau:mob_jar"},
    {id:"ars_nouveau:relay"},
    {id:"ars_nouveau:thread_spellpower"},
    {id:"ars_nouveau:reactive_2"},
    {id:"ars_nouveau:imbuement_water_essence"},
    {id:"ars_nouveau:imbuement_fire_essence"},
    {id:"ars_nouveau:imbuement_earth_essence"},
    {id:"ars_nouveau:imbuement_air_essence"},
    {id:"ars_nouveau:imbuement_manipulation_essence"},
    {id:"ars_nouveau:imbuement_conjuration_essence"},
    {id:"ars_nouveau:imbuement_abjuration_essence"},
    {id:"ars_nouveau:agronomic_sourcelink"},
    {id:"ars_nouveau:volcanic_sourcelink"},
    {id:"ars_nouveau:alchemical_sourcelink"},
    {id:"ars_nouveau:vitalic_sourcelink"},
    {id:"ars_nouveau:mycelial_sourcelink"},

    //astralsorcery
    {id:"astralsorcery:astrolabe"},
    {id:"astralsorcery:altar/astrolabe"},
    {id:"astralsorcery:focal_combine/altar_illumination"},
    {id:"astralsorcery:focal_combine/wand"},
    {id:"astralsorcery:glass_lens"},
    {id:"astralsorcery:altar/lightwell"},
    {id:"astralsorcery:altar/altar_luminance"},

    //botanypots
    {id:"botanypots:botanypots/crafting/terracotta_botany_pot"},
    {id:"botanypots:botanypots/crafting/terracotta_hopper_botany_pot_quick"},

    //botanypotstiers
    {id:"botanypotstiers:pots/elite_terracotta_botany_pot"},
    {id:"botanypotstiers:pots/elite_terracotta_hopper_botany_pot_upgrade"},
    {id:"botanypotstiers:pots/elite_terracotta_hopper_botany_pot_upgrade_quick"},
    {id:"botanypotstiers:pots/ultra_terracotta_botany_pot"},
    {id:"botanypotstiers:pots/ultra_terracotta_hopper_botany_pot_upgrade"},
    {id:"botanypotstiers:pots/ultra_terracotta_hopper_botany_pot_upgrade_quick"},
    {id:"botanypotstiers:pots/mega_terracotta_botany_pot"},
    {id:"botanypotstiers:pots/mega_terracotta_hopper_botany_pot_upgrade"},
    {id:"botanypotstiers:pots/mega_terracotta_hopper_botany_pot_upgrade_quick"},
    {id:"botanypotstiers:elite_upgrade"},
    {id:"botanypotstiers:pots/elite_terracotta_botany_pot_same_material"},
    {id:"botanypotstiers:pots/elite_terracotta_hopper_botany_pot_upgrade_quick_same_material"},
    {id:"botanypotstiers:pots/elite_terracotta_hopper_botany_pot_upgrade_same_material"},

    //cobblegengalore
    {id:"cobblegengalore:crafting/block_gen_copper"},
    {id:"cobblegengalore:crafting/block_gen_iron"},
    {id:"cobblegengalore:crafting/block_gen_gold"},
    {id:"cobblegengalore:crafting/block_gen_emerald"},
    {id:"cobblegengalore:crafting/block_gen_diamond"},
    {id:"cobblegengalore:crafting/block_gen_netherite"},

    //cookingforblockheads
    {id:"cookingforblockheads:sink"},

    //create
    {id:"create:item_application/andesite_casing_from_log"},
    {id:"create:item_application/andesite_casing_from_wood"},
    {id:"create:item_application/copper_casing_from_log"},
    {id:"create:item_application/copper_casing_from_wood"},
    {id:"create:item_application/brass_casing_from_log"},
    {id:"create:item_application/brass_casing_from_wood"},
    {id:"create:crafting/kinetics/basin"},
    {id:"create:crafting/materials/andesite_alloy"},
    {id:"create:crafting/materials/andesite_alloy_from_zinc"},
    {id:"create:crafting/kinetics/mechanical_crafter"},
    {id:"create:crafting/kinetics/empty_blaze_burner"},
    {id:"create:crafting/kinetics/white_sail"},
    {id:"create:mixing/brass_ingot"},
    {id:"create:pressing/compat/immersiveengineering/plate_steel"},
    {id:"create:crushing/compat/immersiveengineering/coke_block"},
    {id:"create:crushing/compat/immersiveengineering/coal_coke"},
    {id:/^create:cutting\/compat\/immersiveengineering\//},

    //createaddition
    {id:"createaddition:mixing/electrum"},
    {id:"createaddition:compat/immersiveengineering/constantan"},
    {id:"createaddition:compat/immersiveengineering/item_application/kiln_brick"},
    {id:"createaddition:compat/immersiveengineering/rolling/steel_ingot"},
    {id:"createaddition:compat/immersiveengineering/rolling/steel_plate"},
    {id:/^createaddition:charging\/electrify_/},
    {id:"createaddition:compat/immersiveengineering/crushing/steel_ingot"},

    //createmoremachines
    {id:"createmoremachines:mixing/netherite_alloy"},
    {id:"createmoremachines:mixing/end_alloy"},
    {id:"createmoremachines:mechanical_crafting/beyond_alloy"},

    //deep_aether
    {id:"deep_aether:stratus_ingot"},

    //enderio
    {id:"enderio:sag_milling/ender_pearl"},
    {id:"enderio:void_chassis"},
    {id:"enderio:photovoltaic_composite"},
    {id:"enderio:alloy_smelting/photovoltaic_plate"},
    {output:"enderio:energetic_photovoltaic_module"},
    {output:"enderio:pulsating_photovoltaic_module"},
    {output:"enderio:vibrant_photovoltaic_module"},
    {output:"enderio:stirling_generator"},

    //enderio_evolution
    {output:"enderio_evolution:simple_stirling_generator"},
    {output:"enderio_evolution:basic_infinity_generator"},
    {output:"enderio_evolution:crystalline_infinity_generator"},
    {output:"enderio_evolution:stellar_infinity_generator"},

    //engineeredcompatibility
    {id:"engineeredcompatibility:metalpress/gear_compressed_iron"},
    {id:"engineeredcompatibility:mixer/etching_acid_renewable"},
    {id:"engineeredcompatibility:crafting_compat/pcb_blueprint"},
    {id:"engineeredcompatibility:blueprint/pneumaticcraft/pcb"},
    {id:"engineeredcompatibility:blueprint/pneumaticcraft/capacitor"},
    {id:"engineeredcompatibility:blueprint/pneumaticcraft/empty_pcb"},
    {id:"engineeredcompatibility:blueprint/pneumaticcraft/circuit_backplane"},
    {id:"engineeredcompatibility:crushing/slag_gravel"},

    //enigmaticunity
    {id:"enigmaticunity:dim_source_generator"},
    {id:"enigmaticunity:bright_source_generator"},
    {id:"enigmaticunity:dim_source_producer"},
    {id:"enigmaticunity:bright_source_producer"},
    {id:"enigmaticunity:iridescent_source_generator"},
    {id:"enigmaticunity:iridescent_source_producer"},

    //entangled
    {id:"entangled:block"},

    //eternal_starlight
    {id:"eternal_starlight:alloy/unrealium"},
    {id:"eternal_starlight:thioquartz_block"},
    {id:"eternal_starlight:golem_steel_ingot_smelting_from_oxidized_golem_steel_ingot"},
    {id:"eternal_starlight:golem_steel_ingot_blasting_from_oxidized_golem_steel_ingot"},
    {id:"eternal_starlight:golem_steel_nugget_smelting_from_oxidized_golem_steel_nugget"},
    {id:"eternal_starlight:golem_steel_nugget_blasting_from_oxidized_golem_steel_nugget"},
    {id:"eternal_starlight:alloy/golem_steel"},

    //eternal_starlight_delight
    {id:"eternal_starlight_delight:salvaging/mana_crystals"},

    //hostilenetworks
    {id:"hostilenetworks:living_matter/overworld_to_nether"},
    {id:"hostilenetworks:living_matter/nether_to_ender"},

    //immersiveengineering
    {id:"immersiveengineering:crafting/alloybrick"},
    {id:"immersiveengineering:crafting/cokebrick"},
    {id:"immersiveengineering:crafting/blastbrick"},
    {id:"immersiveengineering:crafting/blastbrick_reinforced"},
    {id:"immersiveengineering:crafting/component_steel"},
    {id:"immersiveengineering:crafting/component_iron"},
    {id:"immersiveengineering:crafting/rs_engineering"},
    {id:"immersiveengineering:crafting/light_engineering"},
    {id:"immersiveengineering:crafting/heavy_engineering"},
    {id:"immersiveengineering:crafting/fluid_pipe"},
    {id:"immersiveengineering:crafting/redstone_acid"},
    {id:"immersiveengineering:crafting/treated_wood_horizontal"},
    {id:/^immersiveengineering:crafting\/(hammercrushing_|raw_hammercrushing_|plate_.*_hammering$)/},
    {id:/^immersiveengineering:crafting\/wire_/},
    {id:/^immersiveengineering:crafting\/stick_(?!treated$)/},
    {id:"immersiveengineering:blastfurnace/fuel_charcoal"},
    {id:"immersiveengineering:blastfurnace/fuel_charcoal_block"},

    //immersivepetroleum
    {id:"immersivepetroleum:distillationtower/oil"},
    {id:"immersivepetroleum:distillationtower/kerosene"},

    //industrialforegoing
    {id:"industrialforegoing:machine_frame_pity"},

    {id:"industrialforegoing:gold_gear"},
    {id:"industrialforegoing:iron_gear"},
    {id:"industrialforegoing:diamond_gear"},
    {output:"industrialforegoing:pitiful_generator"},
    {output:"industrialforegoing:biofuel_generator"},

    //integrateddynamics
    {id:"integrateddynamics:squeezer/base/menril_resin_planks"},
    {id:"integrateddynamics:squeezer/base/menril_resin_logs"},
    {id:"integrateddynamics:squeezer/base/liquid_chorus"},
    {id:"integrateddynamics:squeezer/base/liquid_chorus_proto"},
    {id:"integrateddynamics:mechanical_squeezer/base/liquid_chorus"},
    {id:"integrateddynamics:mechanical_squeezer/base/liquid_chorus_proto"},
    {id:"integrateddynamics:drying_basin/base/crystalized_menril_block"},
    {id:"integrateddynamics:drying_basin/base/crystalized_chorus_block"},
    {id:"integrateddynamics:crafting/mechanical_squeezer"},
    {id:"integrateddynamics:crafting/mechanical_drying_basin"},
    {output:"integrateddynamics:coal_generator"},

    //ironfurnaces
    {id:"ironfurnaces:augment_generator"},
    {type:"ironfurnaces:generator_blasting"},
    {id:"ironfurnaces:upgrades/upgrade_vibranium"},
    {id:"ironfurnaces:upgrades/upgrade_unobtainium"},

    //justdirethings
    {id:"justdirethings:gooblock_tier1"},
    {id:"justdirethings:gooblock_tier2"},
    {id:"justdirethings:polymorphic_fluid_block-fluiddrop"},
    {output:"justdirethings:generatort1"},
    {output:"justdirethings:generatorfluidt1"},
    {output:"justdirethings:pocket_generator"},

    //mekanism
    {id:"mekanism:steel_casing"},
    {id:"mekanism:rotary/steam"},
    {id:"mekanism:rotary/water_vapor"},
    {id:"mekanism:chemical_infusing/sulfuric_acid"},

    //mekanismgenerators
    {id:"mekanismgenerators:turbine/blade"},

    //mysticalagriculture
    {id:"mysticalagriculture:infusion_crystal"},

    //naturesaura
    {id:"naturesaura:gold_powder"},
    {id:"naturesaura:gold_fiber"},
    {id:"naturesaura:wood_stand"},
    {id:"naturesaura:gold_brick"},
    {id:"naturesaura:lower_limiter"},
    {id:"naturesaura:generator_limit_remover"},
    {id:"naturesaura:spring"},
    {id:"naturesaura:rf_converter"},

    //neovitae
    {id:"neovitae:ara_vitae"},
    {id:"neovitae:guide_book"},
    {id:"neovitae:rune_blank"},
    {id:"neovitae:smelting/blood_stained_glass"},
    {id:"neovitae:ritual_diviner_deus"},
    {id:"neovitae:ara_vitae/water_tool"},
    {id:"neovitae:ara_vitae/fire_tool"},
    {id:"neovitae:ara_vitae/earth_tool"},
    {id:"neovitae:ara_vitae/air_tool"},
    {id:"neovitae:meteor/stone"},
    {id:"neovitae:meteor/diamond"},
    {id:"neovitae:meteor/nether"},
    {id:"neovitae:meteor/nether_star"},
    {id:"neovitae:meteor/iron"},
    {id:"neovitae:meteor/ae2"},

    //pneumaticcraft
    {id:"pneumaticcraft:explosion_crafting/compressed_iron_ingot"},
    {id:"pneumaticcraft:explosion_crafting/compressed_iron_block"},
    {id:"pneumaticcraft:pressure_chamber/compressed_iron_ingot"},
    {id:"pneumaticcraft:pressure_chamber/compressed_iron_block"},
    {id:"pneumaticcraft:pressure_chamber_wall"},
    {id:"pneumaticcraft:pressure_chamber_valve"},
    {id:"pneumaticcraft:pressure_chamber_glass"},
    {id:"pneumaticcraft:pressure_chamber_valve_x4"},
    {id:"pneumaticcraft:pressure_chamber_glass_x4"},
    {id:"pneumaticcraft:air_compressor"},
    {id:"pneumaticcraft:liquid_compressor"},
    {id:"pneumaticcraft:manual_compressor"},
    {id:"pneumaticcraft:thermal_compressor"},
    {id:"pneumaticcraft:fluid_mixer"},
    {id:"pneumaticcraft:pressure_chamber/turbine_blade"},
    {id:"pneumaticcraft:thermopneumatic_processing_plant"},
    {id:"pneumaticcraft:refinery"},
    {id:"pneumaticcraft:refinery_output"},
    {id:"pneumaticcraft:thermo_plant/plastic_from_biodiesel"},
    {id:"pneumaticcraft:uv_light_box"},
    {id:"pneumaticcraft:vacuum_pump"},
    {id:"pneumaticcraft:printed_circuit_board"},
    {id:"pneumaticcraft:compressed_iron_gear"},

    //powah
    {id:"powah:crafting/dielectric_paste"},
    {id:"powah:crafting/dielectric_paste_2"},
    {id:"powah:energizing/blazing_crystal"},
    {id:"powah:energizing/blazing_crystal_2"},
    {id:"powah:energizing/niotic_crystal"},
    {id:"powah:energizing/spirited_crystal"},
    {id:"powah:energizing/nitro_crystal"},
    {id:"powah:crafting/reactor_starter"},
    {id:"powah:energizing/energized_steel"},

    //productivebees
    {output:"productivebees:honey_generator"},

    //sanguine_networks
    {id:"sanguine_networks:catalyst/barrier"},

    //starbunclemania
    {id:"starbunclemania:fluid_jar"},
    {id:"starbunclemania:source_condenser"},
    {id:"starbunclemania:fluid_sourcelink"},

    {id:"starbunclemania:mixing/liquid_source_1000"},

    //thaumon
    {output:"thaumon:mutagen"},

    ]

    recipes.forEach(recipe =>
        event.remove(recipe))
})
