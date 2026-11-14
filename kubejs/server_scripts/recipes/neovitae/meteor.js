ServerEvents.recipes(event=>{
    //陨星仪式：普通与神圣共用 neovitae:meteor 一种类型（写 deus_meteor 会 Unknown recipe type）
    //格式:[输入,生命源质,爆炸半径,陨石层]
    //输入格式为 {item:"物品ID"} 或 {tag:"标签ID"}
    //陨石层格式:[{半径,填充方块,外壳方块,最小权重,额外权重,加权方块}]
    //weighted 格式:[{entry:"物品ID或标签ID",weight:权重}]，其他字段不填即可
    const recipes = [

    ]

    recipes.forEach(recipe=>
        event.custom({
            "type":"neovitae:meteor",
            "input":recipe.input,
            "syphon":recipe.syphon,
            "explosion":recipe.explosion,
            "layers":recipe.layers
        }))

    //元始要素：陨星仪式
    PrimaryAspects.forEach(data=>{
        const ess = data.id

        event.custom({
            "type":"neovitae:meteor",
            "input":{"item":`${data.scribe}:${data.name}_scribe_tool`},
            "syphon":500000,
            "explosion":8,
            "layers":[
                {
                    "radius":5,
                    "fill":"minecraft:amethyst_block",
                    "shell":"minecraft:calcite",
                    "weighted":[
                        {"entry":`kubejs:block_${ess}`,"weight":300},
                        {"entry":"minecraft:amethyst_block","weight":700}
                    ]
                },
                {
                    "radius":6,
                    "fill":"minecraft:smooth_basalt"
                }
            ]
        })
        .id(`essenceodyssey:neovitae/meteor/essence_${ess}`)
    })
})
