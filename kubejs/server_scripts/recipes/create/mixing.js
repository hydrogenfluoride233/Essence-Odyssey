ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:create/mixing/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"kubejs:calibration_gel",
            input:[
                "kubejs:crystal_aqua",
                "kubejs:crystal_ignis",
                "kubejs:crystal_terra",
                "kubejs:crystal_aer",
                "kubejs:crystal_perditio",
                "kubejs:crystal_ordo",
                "justdirethings:gooblock_tier1",
                "minecraft:glass_bottle",
            ],
            heat:"superheated",
            id:`${id_prefix}calibration_gel`,
        },
        {
            output:"immersiveengineering:alloybrick",
            input:[
                "minecraft:brick",
                "#c:sandstone/blocks",
            ],
            heat:"heated",
            id:`${id_prefix}alloybrick`,
        },
        {
            output:"createmoremachines:netherite_alloy",
            input:[
                "create:andesite_alloy",
                "cataclysm:ignitium_ingot",
                "minecraft:nether_star",
                "minecraft:netherite_ingot",
                "4000x createmoremachines:binder",
            ],
            heat:"heated",
            id:`${id_prefix}netherite_alloy`,
        },
        {
            output:"createmoremachines:end_alloy",
            input:[
                "createmoremachines:netherite_alloy",
                "cataclysm:cursium_ingot",
                "minecraft:dragon_head",
                "minecraft:dragon_egg",
                "8000x createmoremachines:binder",
            ],
            heat:"superheated",
            id:`${id_prefix}end_alloy`,
        },
        {
            output:"5x mmcr:modularium",
            input:[
                "naturesaura:tainted_gold",
                "mekanism:ingot_steel",
                "create:brass_ingot",
                "pneumaticcraft:ingot_iron_compressed",
                "megacells:sky_steel_ingot",
                "immersiveengineering:ingot_hop_graphite",
                "kubejs:unknown_mixture",
                "powah:steel_energized",
                "250x immersiveengineering:redstone_acid",
            ],
            heat:"superheated",
            id:`${id_prefix}modularium`,
        },
        {
            output:"100x kubejs:fiery_blood",
            input:"kubejs:blood_clot",
            heat:"superheated",
            id:`${id_prefix}fiery_blood`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const builder = event.recipes.create.mixing(
            toCreateOutputs(recipe.output),
            toCreateInput(recipe.input)
        )

        if(recipe.heat === "heated") builder.heated()
        if(recipe.heat === "superheated") builder.superheated()

        builder.id(recipe.id)
    })
})
