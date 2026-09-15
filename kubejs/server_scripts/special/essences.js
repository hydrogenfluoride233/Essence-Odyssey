//====================要素数据====================

    //全部要素
    const EssenceList = [
        "aqua"      ,//水
        "ignis"     ,//火
        "terra"     ,//地
        "aer"       ,//风
        "perditio"  ,//混沌
        "ordo"      ,//秩序
        "vapor"     ,//蒸汽
        "victus"    ,//生命
        "tempestas" ,//气候
        "mortuus"   ,//死亡
        "auram"     ,//灵气
        "fervor"    ,//熔岩
        "lux"       ,//光明
        "gelum"     ,//寒霜
        "potentia"  ,//能量
        "vitreus"   ,//晶体
        "vitium"    ,//腐化
        "metallum"  ,//金属
        "vacuos"    ,//虚空
        "motus"     ,//移动
        "permutatio" //变化
    ]

    //元始要素
    const PrimaryEssenceObjects = {
        aqua:{
            name:"water",
            imbuement:"ars_nouveau",
            scribe:"neovitae",
            token:{
                mod:"naturesaura",
                basic:"sorrow",
                advance:"grief"
            }
        },

        ignis:{
            name:"fire",
            imbuement:"ars_nouveau",
            scribe:"neovitae",
            token:{
                mod:"naturesaura",
                basic:"anger",
                advance:"rage"
            }
        },

        terra:{
            name:"earth",
            imbuement:"ars_nouveau",
            scribe:"neovitae",
            token:{
                mod:"naturesaura",
                basic:"fear",
                advance:"terror"
            }
        },

        aer:{
            name:"air",
            imbuement:"ars_nouveau",
            scribe:"neovitae",
            token:{
                mod:"naturesaura",
                basic:"joy",
                advance:"euphoria"
            }
        },

        perditio:{
            name:"perditio",
            imbuement:"kubejs",
            scribe:"kubejs",
            token:{
                mod:"kubejs",
                basic:"confusion",
                advance:"delirium"
            }
        },

        ordo:{
            name:"ordo",
            imbuement:"kubejs",
            scribe:"kubejs",
            token:{
                mod:"kubejs",
                basic:"serenity",
                advance:"equanimity"
            }
        }
    }

    const PrimaryEssenceList = Object.keys(PrimaryEssenceObjects)

    //二级要素
    const SecondaryEssenceList = [
        "vapor"     ,//蒸汽 = 水+火
        "victus"    ,//生命 = 水+地
        "tempestas" ,//气候 = 水+风
        "mortuus"   ,//死亡 = 水+混沌
        "auram"     ,//灵气 = 水+秩序
        "fervor"    ,//熔岩 = 火+地
        "lux"       ,//光明 = 火+风
        "gelum"     ,//寒霜 = 火+混沌
        "potentia"  ,//能量 = 火+秩序
        "vitreus"   ,//晶体 = 地+风
        "vitium"    ,//腐化 = 地+混沌
        "metallum"  ,//金属 = 地+秩序
        "vacuos"    ,//虚空 = 风+混沌
        "motus"     ,//移动 = 风+秩序
        "permutatio" //变化 = 混沌+秩序
    ]

    //二级要素合成表
    const SecondaryEssenceRecipes = [
        ["aqua"    ,"ignis"   ,"vapor"     ],
        ["aqua"    ,"terra"   ,"victus"    ],
        ["aqua"    ,"aer"     ,"tempestas" ],
        ["aqua"    ,"perditio","mortuus"   ],
        ["aqua"    ,"ordo"    ,"auram"     ],
        ["ignis"   ,"terra"   ,"fervor"    ],
        ["ignis"   ,"aer"     ,"lux"       ],
        ["ignis"   ,"perditio","gelum"     ],
        ["ignis"   ,"ordo"    ,"potentia"  ],
        ["terra"   ,"aer"     ,"vitreus"   ],
        ["terra"   ,"perditio","vitium"    ],
        ["terra"   ,"ordo"    ,"metallum"  ],
        ["aer"     ,"perditio","vacuos"    ],
        ["aer"     ,"ordo"    ,"motus"     ],
        ["perditio","ordo"    ,"permutatio"] 
    ]

//====================配方注册====================

ServerEvents.recipes(event=>{

//====================元始要素配方====================

    Object.entries(PrimaryEssenceObjects).forEach(([ess,data])=>{
        event.custom({
            "type":"pneumaticcraft:thermo_plant",
            "inputs":{
                "fluid":{"amount":250,"fluid":"sauce:source_fluid"},
                "item":{"item":`kubejs:crystal_${ess}`}
            },
            "outputs":{
                "fluid_output":{"amount":250,"id":`kubejs:${ess}_essence`}
            },
            "temperature":{"min":473},
            "pressure":2.0,
        })//热气动加工机：固=>液

        event.custom({
            "type":"pneumaticcraft:thermo_plant",
            "inputs":{
                "fluid":{"amount":1000,"fluid":"sauce:source_fluid"},
                "item":{"item":`kubejs:block_${ess}`}
            },
            "outputs":{
                "fluid_output":{"amount":1000,"id":`kubejs:${ess}_essence`}
            },
            "temperature":{"min":573},
            "pressure":3.0,
        })//热气动加工机：固=>液

        event.recipes.immersiveengineering.bottling_machine(
            TagOutputJS.ofItemStack(`kubejs:crystal_${ess}`),
            IngredientWithSizeJS.ofItemStack("minecraft:amethyst_shard"),
            Fluid.of(`kubejs:${ess}_essence`,250)
        )//灌装机：液=>固

        event.recipes.immersiveengineering.bottling_machine(
            TagOutputJS.ofItemStack(`kubejs:block_${ess}`),
            IngredientWithSizeJS.ofItemStack("minecraft:amethyst_block"),
            Fluid.of(`kubejs:${ess}_essence`,1000)
        )//灌装机：液=>固

        event.custom({
            "type":"neovitae:meteor",
            "input":{"item":`${data.scribe}:${data.name}_scribe_tool`},
            "syphon":2000000,
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
        })//陨星仪式
        
        event.recipes.neovitae.ara_vitae_recipe(
            `${data.scribe}:${data.name}_scribe_tool`,
            `kubejs:crystal_${ess}`,
            2,10000,25,50
        )//铭文工具
    })

//====================通用要素配方====================

    EssenceList.forEach(ess=>{
        event.recipes.mekanism.rotary(
            `1x kubejs:${ess}_essence`,
            `1x kubejs:${ess}_essence`,
            `1x kubejs:${ess}_essence`,
            `1x kubejs:${ess}_essence`
        )//回旋机：气<=>液

        event.recipes.mekanism.crystallizing(
            `kubejs:crystal_${ess}`,
            `250x kubejs:${ess}_essence`
        )//化学结晶器：气=>固
        
        event.recipes.mekanism.oxidizing(
            `250x kubejs:${ess}_essence`,
            `kubejs:crystal_${ess}`
        )//化学氧化机：固=>气
        
        event.recipes.mekanism.oxidizing(
            `1000x kubejs:${ess}_essence`,
            `kubejs:block_${ess}`
        )//化学氧化机：固=>气

        event.shaped(
            `kubejs:block_${ess}`,
            ["EE","EE"],
            {E:`kubejs:crystal_${ess}`}
        )//结晶=>块

        event.shapeless(
            `4x kubejs:crystal_${ess}`,
            `kubejs:block_${ess}`
        )//块=>结晶
    })

//====================二级要素合成====================

    SecondaryEssenceRecipes.forEach(([left,right,result])=>{
        event.recipes.mekanism.chemical_infusing(
            `2x kubejs:${result}_essence`,
            `1x kubejs:${left}_essence`,
            `1x kubejs:${right}_essence`
        )//化学灌注器

        event.custom({
            "type":"pneumaticcraft:fluid_mixer",
            "fluid_output":{"amount":500,"id":`kubejs:${result}_essence`},
            "item_output":{},
            "input1":{"amount":250,"fluid":`kubejs:${left}_essence`},
            "input2":{"amount":250,"fluid":`kubejs:${right}_essence`},
            "pressure":3,
            "time":100
        })//流体混合器

        event.recipes.mekanism.separating(
            `1x kubejs:${left}_essence`,
            `1x kubejs:${right}_essence`,
            `2x kubejs:${result}_essence`
        )//电解分离器
    })
})

//====================标签注册====================

ServerEvents.tags("item",event=>{
    EssenceList.forEach(ess=>{
        event.add("kubejs:essence_crystal",`kubejs:crystal_${ess}`)
        event.add("kubejs:essence_block",`kubejs:block_${ess}`)
    })

    PrimaryEssenceList.forEach(ess=>{
        event.add("kubejs:primary_essence_crystal",`kubejs:crystal_${ess}`)
        event.add("kubejs:primary_essence_block",`kubejs:block_${ess}`)
    })

    SecondaryEssenceList.forEach(ess=>{
        event.add("kubejs:secondary_essence_crystal",`kubejs:crystal_${ess}`)
        event.add("kubejs:secondary_essence_block",`kubejs:block_${ess}`)
    })
})

ServerEvents.tags("block",event=>{
    EssenceList.forEach(ess=>
        event.add("kubejs:essence_block",`kubejs:block_${ess}`))

    PrimaryEssenceList.forEach(ess=>
        event.add("kubejs:primary_essence_block",`kubejs:block_${ess}`))

        SecondaryEssenceList.forEach(ess=>
        event.add("kubejs:secondary_essence_block",`kubejs:block_${ess}`))
})
