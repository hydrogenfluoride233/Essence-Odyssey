ServerEvents.recipes(event=>{
    //配方移除

    //星能物品嬗变

    //祭坛合成
    event.recipes.astralsorcery.altar_crafting(
        "neovitae:ritual_diviner_deus",
        [" A ","BCB"," D "],
        {
            A:"neovitae:prismatic_spiritus_gem",
            B:"neovitae:deus_scribe_tool",
            C:"neovitae:ritual_diviner_tenebrae",
            D:"neovitae:tabula_aetherea"
        })
        .type("luminance")
        .copyComponents("grid",4)
        .fluid("neovitae:essentia_vitae_source",1000)
        .fluid("neovitae:essentia_vitae_source",1000)
        .fluid("neovitae:essentia_vitae_source",1000)
        .fluid("neovitae:essentia_vitae_source",1000)

})