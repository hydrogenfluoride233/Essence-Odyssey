ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:actuallyadditions/empowering/"
    const Required = ["output","main_input","extra_input","energy","time","id"]

    const recipes = [
        {
            output:"kubejs:arcane_wafer",
            main_input:"ae2:silicon",
            extra_input:[
                "ars_nouveau:source_gem",
                "ae2:fluix_crystal",
                "kubejs:empowered_diamatine_crystal_dust",
                "thaumon:mutagen",
            ],
            energy:10000,
            time:100,
            id:`${id_prefix}arcane_wafer`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.actuallyadditions.empowering(
            recipe.output,
            recipe.main_input,
            recipe.extra_input,
            recipe.energy,
            recipe.time
        )
        .id(recipe.id))
})
