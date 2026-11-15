ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:create/filling/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"twilightforest:fiery_blood",
            input:[
                "minecraft:glass_bottle",
                "250x kubejs:fiery_blood",
            ],
            id:`${id_prefix}fiery_blood`,
        },
        {
            output:"twilightforest:fiery_tears",
            input:[
                "naturesaura:bottle_two_the_rebottling",
                "250x kubejs:fiery_blood",
            ],
            id:`${id_prefix}fiery_tears`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.create.filling(
            recipe.output,
            recipe.input
        )
        .id(recipe.id))
})
