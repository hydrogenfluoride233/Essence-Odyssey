ServerEvents.recipes(event=>{
    //抄写台=>附魔装置
    event.forEachRecipe({type:"ars_nouveau:glyph"},recipe=>{
        const glyphRecipe = JSON.parse(recipe.json)

        event.recipes.ars_nouveau.enchanting_apparatus(
            glyphRecipe.inputs,
            "ars_nouveau:blank_parchment",
            glyphRecipe.output,
            2500
        )
    })
})
