ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:create/splashing/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:[
                [0.25,"eternal_starlight:dusted_shard"],
                [0.12,"eternal_starlight:deepsilver_nugget"],
                [0.12,"eternal_starlight:oxidized_golem_steel_nugget"],
            ],
            input:"eternal_starlight:dusted_gravel",
            id:`${id_prefix}dusted_gravel`,
        },
        {
            output:[
                [0.1,"minecraft:iron_nugget"],
                [0.1,"minecraft:copper_nugget"],
                [0.1,"minecraft:gold_nugget"],
                [0.1,"create:zinc_nugget"],
                [0.1,"occultism:silver_nugget"],
                [0.1,"immersiveengineering:nugget_aluminum"],
                [0.1,"immersiveengineering:nugget_nickel"],
                [0.1,"mekanism:nugget_osmium"],
                [0.1,"mekanism:nugget_tin"],
                [0.1,"mekanism:nugget_lead"],
                [0.1,"mekanism:nugget_uranium"],
            ],
            input:"immersiveengineering:slag_gravel",
            id:`${id_prefix}slag_gravel`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.create.splashing(
            toCreateOutputs(recipe.output),
            recipe.input
        )
        .id(recipe.id))

    //矿石处理：炼狱金属
    event.recipes.create.splashing(
        "9x occultism:iesnium_nugget",
        "kubejs:crushed_raw_iesnium"
    )
    .id("kubejs:create/splashing/iesnium_nugget")
})
