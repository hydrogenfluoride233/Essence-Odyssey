ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:integrateddynamics/mechanical_squeezer/"
    const Required = ["id","item_input","time"]

    const recipes = [
        {
            item_input:"minecraft:popped_chorus_fruit",
            item_output:null,
            extra_item_output:[],
            fluid_output:"500x integrateddynamics:liquid_chorus",
            time:30,
            id:`${id_prefix}popped_chorus`,
        },
        {
            item_input:"integrateddynamics:proto_chorus",
            item_output:null,
            extra_item_output:[],
            fluid_output:"250x integrateddynamics:liquid_chorus",
            time:30,
            id:`${id_prefix}proto_chorus`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        mechanicalSqueezer(
            event,
            recipe.item_input,
            recipe.item_output,
            recipe.extra_item_output,
            recipe.fluid_output,
            recipe.time
        )
        .id(recipe.id))
})
