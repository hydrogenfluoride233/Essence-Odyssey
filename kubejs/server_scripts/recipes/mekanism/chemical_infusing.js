ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:mekanism/chemical_infusing/"
    const Required = ["id","output","input_1","input_2"]

    const recipes = [
        {
            output:"1x mekanism:sulfuric_acid",
            input_1:"mekanism:sulfur_trioxide",
            input_2:"1x mekanism:steam",
            id:`${id_prefix}sulfuric_acid`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.mekanism.chemical_infusing(
            recipe.output,
            recipe.input_1,
            recipe.input_2
        )
        .id(recipe.id))

    //二级要素：化学灌注
    SecondaryAspects.forEach(({id:result,from:[left,right]})=>
        event.recipes.mekanism.chemical_infusing(
            `2x kubejs:${result}_chemical`,
            `1x kubejs:${left}_chemical`,
            `1x kubejs:${right}_chemical`
        )
        .id(`essenceodyssey:mekanism/chemical_infusing/${result}`))
})
