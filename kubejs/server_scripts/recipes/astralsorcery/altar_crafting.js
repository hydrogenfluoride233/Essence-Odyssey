ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:astralsorcery/altar_crafting/"
    const Required = ["id","output","pattern","key"]

    const recipes = [
        {
            output:"neovitae:ritual_diviner_deus",
            type:"luminance",
            pattern:[" J ","JIJ"," J "],
            relay:["   GG"," CAGG"," E B "," HFD ","H    "],
            key:{
                A:"neovitae:water_scribe_tool",
                B:"neovitae:fire_scribe_tool",
                C:"neovitae:earth_scribe_tool",
                D:"neovitae:air_scribe_tool",
                E:"kubejs:perditio_scribe_tool",
                F:"kubejs:ordo_scribe_tool",
                G:"neovitae:tenebrae_scribe_tool",
                H:"neovitae:deus_scribe_tool",
                I:"neovitae:ritual_diviner_tenebrae",
                J:"neovitae:prismatic_spiritus_gem",
                K:"neovitae:tabula_aetherea",
            },
            extra_item:[
                "2x neovitae:tabula_aetherea",
                "2x neovitae:demonite_trim_ingot",
            ],
            extra_fluid:["4x neovitae:essentia_vitae_source"],
            extra_conditions:{
                copy_components:["grid",4],
            },
            id:`${id_prefix}ritual_diviner_deus`,
        },
        {
            output:"entangled:block",
            pattern:["ABA","BCB","ABA"],
            key:{
                A:"cataclysm:void_stone",
                B:"minecraft:crying_obsidian",
                C:"actuallyadditions:iron_casing",
            },
            extra_conditions:{
                chain:true,
            },
            id:`${id_prefix}entangled_block`,
        },
        {
            output:"mmcr:factory_controller",
            type:"radiance",
            pattern:[" A ","ACA"," A "],
            relay:["XXYXX","XYBYX","YB BY","XYBYX","XXYXX"],
            key:{
                A:"neovitae:rune_acceleration",
                B:"justdirethings:time_crystal",
                C:"#industrialforegoing:machine_frame/supreme",
                X:"mmcr:modularium",
                Y:"astralsorcery:resonating_gem",
            },
            extra_item:[
                "naturesaura:clock_hand",
                "2x modularrouters:speed_upgrade",
                "2x pneumaticcraft:speed_upgrade",
            ],
            extra_fluid:["2x create_enchantment_industry:apotheotic_essence"],
            extra_lumen:["500x astralsorcery:aion"],
            id:`${id_prefix}factory_controller`,
        },
        {
            output:"integrateddynamics:mechanical_squeezer",
            type:"resonance",
            pattern:[" B ","DED"," B "],
            relay:["     "," A A "," A A "," CCC ","     "],
            key:{
                A:"immersiveengineering:stick_treated",
                B:"integrateddynamics:energy_battery",
                C:"astralsorcery:infused_wood_enriched",
                D:"immersiveengineering:capacitor_hv",
                E:"integrateddynamics:squeezer",
            },
            extra_item:[
                "kubejs:empowered_palis_crystal_dust",
                "industrialforegoing:pink_slime",
                "kubejs:empowered_restonia_crystal_dust",
            ],
            extra_lumen:["200x astralsorcery:evorsio"],
            id:`${id_prefix}mechanical_squeezer`,
        },
        {
            output:"integrateddynamics:mechanical_drying_basin",
            type:"resonance",
            pattern:[" B ","DED"," B "],
            relay:["AAAAA","A   A","A   A","A   A","CCCCC"],
            key:{
                A:"neovitae:tabula_animata",
                B:"integrateddynamics:energy_battery",
                C:"astralsorcery:infused_wood_infused",
                D:"immersiveengineering:capacitor_hv",
                E:"integrateddynamics:drying_basin",
            },
            extra_item:[
                "4x kubejs:empowered_emeradic_crystal_dust",
                "3x kubejs:empowered_diamatine_crystal_dust",
            ],
            extra_fluid:[
                "3x integrateddynamics:liquid_chorus",
                "2x integrateddynamics:menril_resin",
            ],
            extra_lumen:["200x astralsorcery:armara"],
            id:`${id_prefix}mechanical_drying_basin`,
        },
        {
            output:"astralsorcery:lightwell",
            pattern:["BAD","ECE","EEE"],
            key:{
                A:"astralsorcery:aquamarine",
                B:"kubejs:crystal_ignis",
                C:"#astralsorcery:crystal",
                D:"kubejs:crystal_aer",
                E:"astralsorcery:marble_runed",
            },
            extra_conditions:{
                chain:true,
            },
            id:"astralsorcery:altar/lightwell",
        },
        {
            output:"astralsorcery:altar_luminance",
            type:"resonance",
            pattern:["F F","FBF","CCC"],
            relay:["A   A","A   A"," D D "," D D ","EEEEE"],
            key:{
                A:"justdirethings:blazegold_ingot",
                B:"astralsorcery:lumen_crystal[astralsorcery:lumen='astralsorcery:armara']",
                C:"integrateddynamics:crystalized_chorus_brick",
                D:"astralsorcery:marble_pillar",
                E:"astralsorcery:marble_runed",
                F:"astralsorcery:starmetal_ingot",
            },
            extra_item:[
                "3x astralsorcery:stardust",
                "2x astralsorcery:resonating_gem",
            ],
            extra_fluid:[
                "2x kubejs:ignis_fluid",
                "astralsorcery:liquid_starlight",
                "2x kubejs:aer_fluid",
            ],
            extra_lumen:[
                "500x astralsorcery:aevitas",
                "500x astralsorcery:armara",
                "500x astralsorcery:vicio",
                "500x astralsorcery:discidia",
                "500x astralsorcery:evorsio",
            ],
            extra_conditions:{
                research_tier:"luminance",
                upgrades_to:"astralsorcery:altar_luminance",
            },
            id:"astralsorcery:altar/altar_luminance",
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const builder = event.recipes.astralsorcery.altar_crafting(
            toRecipeArray(recipe.output).map(value=>toItemStack(value)),
            recipe.pattern,
            recipe.key
        )

        if(recipe.type) builder.type(recipe.type)
        if(recipe.relay) builder.relay(recipe.relay)

        if(recipe.extra_item) recipe.extra_item.forEach(value=>{
            const {count,id} = toCounted(value)

            for(let i = 0;i<count;i++) builder.additional(id)
        })

        if(recipe.extra_fluid) recipe.extra_fluid.forEach(value=>{
            const {count,id} = toCounted(value)

            for(let i = 0;i<count;i++) builder.fluid(id,1000)
        })

        if(recipe.extra_lumen) recipe.extra_lumen.forEach(value=>{
            const {count,id} = toCounted(value)

            builder.lumen(id,count)
        })

        if(recipe.extra_conditions){
            const extra = recipe.extra_conditions

            if(extra.copy_components) builder.copyComponents(extra.copy_components[0],extra.copy_components[1])
            if(extra.chain) builder.chain()
            if(extra.research_tier) builder.researchTier(extra.research_tier)
            if(extra.upgrades_to) builder.upgradesTo(extra.upgrades_to)
        }

        builder.id(recipe.id)
    })
})
