StartupEvents.registry("block",event=>{
    event.create("blood_clot")
        .soundType("honey")
        .hardness(0.5)
        .resistance(0.5)
        .slipperiness(0.8)
        .speedFactor(0.4)
        .jumpFactor(0.5)
        .parentModel("minecraft:block/cube_bottom_top")
        .textures({
            particle: "kubejs:block/blood_clot_side",
            side: "kubejs:block/blood_clot_side",
            top: "kubejs:block/blood_clot_top",
            bottom: "kubejs:block/blood_clot_bottom"
        })
})

StartupEvents.registry("fluid",event=>{
    event.create("kubejs:molten_blood","kubejs:thin").tint("#b42607")
})
