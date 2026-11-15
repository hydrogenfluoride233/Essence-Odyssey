ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekanism/separating/"

    //二级要素：电解分离
    SecondaryAspects.forEach(({id:result,from:[left,right]})=>
        event.recipes.mekanism.separating(
            `1x kubejs:${left}_chemical`,
            `1x kubejs:${right}_chemical`,
            `2x kubejs:${result}_fluid`
        )
        .id(`${id_prefix}${result}`))
})
