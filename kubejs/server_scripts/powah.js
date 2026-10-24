ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"powah:crafting/dielectric_paste"})
    event.remove({id:"powah:crafting/dielectric_paste_2"})

    //工作台配方
    event.shapeless(
        "32x powah:dielectric_paste",
        [
            "pneumaticcraft:plastic",
            "mekanism:dust_coal",
            "enderio:conduit_binder",
            "ars_nouveau:fire_essence"
        ]
    )

    event.shapeless(
        "64x powah:dielectric_paste",
        [
            "pneumaticcraft:plastic",
            "kubejs:empowered_void_crystal_dust",
            "enderio:conduit_binder",
            "ars_nouveau:fire_essence"
        ]
    )//绝缘覆层

    //充能台
    //格式:[输出,数量,能量,输入数组]；对应 createaddition 特斯拉线圈的 charging 配方
    const EnergizingList = [
        ["mekanism:ingot_steel",1,36000,["naturesaura:infused_iron"]],                      //钢锭
        ["ae2:charged_certus_quartz_crystal",1,10000,["ae2:certus_quartz_crystal"]],         //充能赛特斯石英
        ["powah:steel_energized",2,10000,["#c:ingots/steel","#c:ingots/gold"]],              //充能钢
    ]

    event.remove({id:"powah:energizing/energized_steel"})

    EnergizingList.forEach(([output,count,energy,inputs])=>
        event.recipes.powah.energizing(
            inputs,
            Item.of(output,count),
            energy
        )
    )
})
