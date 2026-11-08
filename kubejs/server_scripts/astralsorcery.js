ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"entangled:block"})//纠缠方块

    event.remove({id:"astralsorcery:astrolabe"})
    event.remove({id:"astralsorcery:altar/astrolabe"})//星盘
    event.remove({id:"astralsorcery:focal_combine/altar_illumination"})//启明工作台
    event.remove({id:"astralsorcery:focal_combine/wand"})//共振星杖

    //星能物品嬗变
    //格式:[输出,输入]；id 沿用模组原来的 focal_combine/<输出名>，等于把那两条改成我们的配方
    const FocalCombineList = [
        [
            "astralsorcery:altar_illumination",
            [
                "astralsorcery:marble_raw",
                "astralsorcery:marble_raw",
                "astralsorcery:marble_raw",
                "astralsorcery:marble_raw",
                "craftingstation:crafting_station",
                "ae2:not_so_mysterious_cube"
            ]
        ],//启明工作台

        [
            "astralsorcery:wand",
            [
                "astralsorcery:marble_raw",
                "astralsorcery:marble_raw",
                "kubejs:crystal_ignis",
                "kubejs:crystal_aer",
                "minecraft:echo_shard",
                "astralsorcery:aquamarine"
            ]
        ],//共振星杖
    ]

    FocalCombineList.forEach(([output,input])=>
        event.recipes.astralsorcery.focal_combine(output,input)
            .id(`astralsorcery:focal_combine/${parseCounted(output).id.split(":")[1]}`))

    //祭坛合成
    event.recipes.astralsorcery.altar_crafting(
        "neovitae:ritual_diviner_deus",
        [" J ","JIJ"," J "],
        {
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
            K:"neovitae:tabula_aetherea"
        })
        .type("luminance")
        .relay(["   GG"," CAGG"," E B "," HFD ","H    "])
        .copyComponents("grid",4)
        .additional("neovitae:tabula_aetherea")
        .additional("neovitae:tabula_aetherea")
        .additional("neovitae:demonite_trim_ingot")
        .additional("neovitae:demonite_trim_ingot")
        .fluid("neovitae:essentia_vitae_source",1000)
        .fluid("neovitae:essentia_vitae_source",1000)
        .fluid("neovitae:essentia_vitae_source",1000)
        .fluid("neovitae:essentia_vitae_source",1000)//仪式占卜杖[神圣]

    event.recipes.astralsorcery.altar_crafting(
        "entangled:block",
        ["ABA","BCB","ABA"],
        {
            A:"cataclysm:void_stone",
            B:"minecraft:crying_obsidian",
            C:"actuallyadditions:iron_casing"
        })
        .chain()//纠缠方块

    event.recipes.astralsorcery.altar_crafting(
        "mmcr:factory_controller",
        [" A ","ACA"," A "],
        {
            A:"neovitae:rune_acceleration",
            B:"justdirethings:time_crystal",
            C:"#industrialforegoing:machine_frame/supreme",
            X:"mmcr:modularium",
            Y:"astralsorcery:resonating_gem"
        })
        .type("radiance")
        .relay(["XXYXX","XYBYX","YB BY","XYBYX","XXYXX"])
        .duration(300)
        .additional("naturesaura:clock_hand")
        .additional("modularrouters:speed_upgrade")
        .additional("modularrouters:speed_upgrade")
        .additional("pneumaticcraft:speed_upgrade")
        .additional("pneumaticcraft:speed_upgrade")
        .fluid("create_enchantment_industry:apotheotic_essence",1000)
        .fluid("create_enchantment_industry:apotheotic_essence",1000)
        .lumen("astralsorcery:aion",500)//工厂控制器

    event.recipes.astralsorcery.altar_crafting(
        "integrateddynamics:mechanical_squeezer",
        [" B ","DED"," B "],
        {
            A:"immersiveengineering:stick_treated",
            B:"integrateddynamics:energy_battery",
            C:"astralsorcery:infused_wood_enriched",
            D:"immersiveengineering:capacitor_hv",
            E:"integrateddynamics:squeezer"
        })
        .type("resonance")
        .relay([""," A A "," A A "," CCC ",""])
        .additional("astralsorcery:stardust")
        .additional("astralsorcery:stardust")
        .additional("astralsorcery:stardust")//电动挤压机
})
