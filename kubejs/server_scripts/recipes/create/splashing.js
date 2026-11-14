ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:create/splashing/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:[
                CreateItem.of("eternal_starlight:dusted_shard",0.25),
                CreateItem.of("eternal_starlight:deepsilver_nugget",0.12),
                CreateItem.of("eternal_starlight:oxidized_golem_steel_nugget",0.12),
            ],
            input:"eternal_starlight:dusted_gravel",
            id:`${id_prefix}dusted_gravel`,
        },
        {
            output:[
                CreateItem.of("minecraft:iron_nugget",0.1),
                CreateItem.of("minecraft:copper_nugget",0.1),
                CreateItem.of("minecraft:gold_nugget",0.1),
                CreateItem.of("create:zinc_nugget",0.1),
                CreateItem.of("occultism:silver_nugget",0.1),
                CreateItem.of("immersiveengineering:nugget_aluminum",0.1),
                CreateItem.of("immersiveengineering:nugget_nickel",0.1),
                CreateItem.of("mekanism:nugget_osmium",0.1),
                CreateItem.of("mekanism:nugget_tin",0.1),
                CreateItem.of("mekanism:nugget_lead",0.1),
                CreateItem.of("mekanism:nugget_uranium",0.1),
            ],
            input:"immersiveengineering:slag_gravel",
            id:`${id_prefix}slag_gravel`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.create.splashing(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))

    //矿石处理：炼狱金属
    event.recipes.create.splashing(
        "9x occultism:iesnium_nugget",
        "kubejs:crushed_raw_iesnium"
    )
    .id("essenceodyssey:create/splashing/iesnium_nugget")
})
