ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:create/emptying/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:[
                "250x kubejs:fiery_blood",
                "minecraft:glass_bottle",
            ],
            input:"twilightforest:fiery_blood",
            id:`${id_prefix}fiery_blood`,
        },
        {
            output:[
                "250x kubejs:fiery_blood",
                "naturesaura:bottle_two_the_rebottling",
            ],
            input:"twilightforest:fiery_tears",
            id:`${id_prefix}fiery_tears`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.create.emptying(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))
})
