ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:astralsorcery/focal_combine/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"astralsorcery:altar_illumination",
            input:[
                "4x astralsorcery:marble_raw",
                "craftingstation:crafting_station",
                "ae2:not_so_mysterious_cube",
            ],
            id:"astralsorcery:focal_combine/altar_illumination",
        },
        {
            output:"astralsorcery:wand",
            input:[
                "2x astralsorcery:marble_raw",
                "kubejs:crystal_ignis",
                "kubejs:crystal_aer",
                "minecraft:echo_shard",
                "astralsorcery:aquamarine",
            ],
            id:"astralsorcery:focal_combine/wand",
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const inputs = []

        recipe.input.forEach(value=>{
            const {count,id}=toCounted(value)

            for(let i=0;i<count;i++) inputs.push(id)
        })

        event.recipes.astralsorcery.focal_combine(
            recipe.output,
            inputs
        )
        .id(recipe.id)
    })
})
