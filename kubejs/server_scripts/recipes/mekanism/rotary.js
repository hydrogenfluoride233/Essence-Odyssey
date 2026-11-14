ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:mekanism/rotary/"
    const Required = ["id","chemical","fluid"]

    const recipes = [
        {
            chemical:"1x mekanism:steam",
            fluid:"1x minecraft:water",
            id:`${id_prefix}steam`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.recipes.mekanism.rotary(
            recipe.chemical,
            recipe.fluid,
            recipe.chemical,
            recipe.fluid
        )
        .id(recipe.id))

    //要素：气<=>液
    Aspects.forEach(({id:ess})=>
        event.recipes.mekanism.rotary(
            `1x kubejs:${ess}_chemical`,
            `1x kubejs:${ess}_fluid`,
            `1x kubejs:${ess}_chemical`,
            `1x kubejs:${ess}_fluid`
        )
        .id(`essenceodyssey:mekanism/rotary/${ess}`))
})
