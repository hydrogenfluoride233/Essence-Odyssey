ServerEvents.recipes(event=>{
    //配方移除

    //星能物品嬗变

    //祭坛合成
    event.recipes.astralsorcery.altar_crafting(
        "neovitae:ritual_diviner_deus",
        [
            " J ",
            "JIJ",
            " J "
        ],
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
        .relay([
            "     ",
            " CAG ",
            " E B ",
            " HFD ",
            "H    "])
        .copyComponents("grid",4)
        .additional("neovitae:tabula_aetherea")
        .additional("neovitae:tabula_aetherea")
        .additional("neovitae:demonite_trim_ingot")
        .additional("neovitae:demonite_trim_ingot")
        .fluid("neovitae:essentia_vitae_source",1000)
        .fluid("neovitae:essentia_vitae_source",1000)
        .fluid("neovitae:essentia_vitae_source",1000)
        .fluid("neovitae:essentia_vitae_source",1000)//仪式占卜杖[神圣]
})