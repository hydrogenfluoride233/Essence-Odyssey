ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:mekanism/separating/"

    //二级要素：电解分离
    SecondaryAspects.forEach(({id:result,from:[input_1,input_2]})=>
        event.recipes.mekanism.separating(
            `1x kubejs:${input_1}_chemical`,
            `1x kubejs:${input_2}_chemical`,
            `2x kubejs:${result}_fluid`
        )
        .id(`${id_prefix}${result}`))
})
