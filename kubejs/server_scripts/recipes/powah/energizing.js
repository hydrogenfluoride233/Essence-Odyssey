ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:powah/energizing/"
    const Required = ["id","output","energy","input"]

    const recipes = [
        {
            output:"mekanism:ingot_steel",
            energy:36000,
            input:["naturesaura:infused_iron"],
            id:`${id_prefix}steel`,
        },
        {
            output:"ae2:charged_certus_quartz_crystal",
            energy:10000,
            input:["ae2:certus_quartz_crystal"],
            id:`${id_prefix}charged_certus`,
        },
        {
            output:"2x powah:steel_energized",
            energy:10000,
            input:["#c:ingots/steel","#c:ingots/gold"],
            id:`${id_prefix}steel_energized`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const {count,id} = toCounted(recipe.output)

        event.recipes.powah.energizing(
            recipe.input,
            Item.of(id,count),
            recipe.energy
        )
        .id(recipe.id)
    })
})
