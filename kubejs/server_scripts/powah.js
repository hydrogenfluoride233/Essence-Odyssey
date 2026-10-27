ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"powah:crafting/dielectric_paste"})//绝缘覆层
    event.remove({id:"powah:crafting/dielectric_paste_2"})

    event.remove({id:"powah:energizing/blazing_crystal"})//烈焰水晶
    event.remove({id:"powah:energizing/blazing_crystal_2"})
    event.remove({id:"powah:energizing/niotic_crystal"})//钻石水晶
    event.remove({id:"powah:energizing/spirited_crystal"})//富生水晶
    event.remove({id:"powah:energizing/nitro_crystal"})//下界水晶

    event.remove({id:"powah:crafting/reactor_starter"})//反应堆

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
    //格式:[输出,数量,能量,输入数组]
    const EnergizingList = [
        ["mekanism:ingot_steel",1,36000,["naturesaura:infused_iron"]],                      //钢锭
        ["ae2:charged_certus_quartz_crystal",1,10000,["ae2:certus_quartz_crystal"]],        //充能赛特斯石英
        ["powah:steel_energized",2,10000,["#c:ingots/steel","#c:ingots/gold"]],             //充能钢
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

//冷却剂
PowahEvents.registerCoolants(event=>{
    event.addFluid("kubejs:aqua_fluid",-4)//渊流之清泉
    event.addFluid("mekanism:sodium",-6)//液态钠
    event.addFluid("kubejs:gelum_fluid",-10)//极寒之凛冰

    event.addSolid("125x kubejs:crystal_gelum",-40)//寒霜结晶
    event.addSolid("500x kubejs:block_gelum",-40)//寒霜结晶块
})

//热源
PowahEvents.registerHeatSource(event=>{
    event.addBlock("eternal_starlight:abyssal_magma_block",1200)//深渊岩浆块
    event.addBlock("eternal_starlight:thermabyssal_magma_block",1200)
    event.addBlock("eternal_starlight:cryobyssal_magma_block",1200)
    event.addFluid("enderio:fluid_fire_water_still",2000)//火焰水
    event.addFluid("kubejs:ignis_fluid",1500)//焚空之烈火
    event.addFluid("kubejs:fervor_fluid",3500)//烈焰之炽焱
})

//岩浆流体
PowahEvents.registerMagmaticFluid(event=>{
    event.add("pneumaticcraft:gasoline",20000)//汽油
    event.add("immersivepetroleum:gasoline",20000)//汽油
    event.add("pneumaticcraft:diesel",25000)//柴油
    event.add("immersivepetroleum:diesel",25000)//柴油
    event.add("immersivepetroleum:diesel_sulfur",25000)//含硫柴油
    event.add("pneumaticcraft:kerosene",18000)//煤油
    event.add("immersivepetroleum:kerosene",18000)//煤油
    event.add("pneumaticcraft:lpg",15000)//液化石油气
    event.add("pneumaticcraft:biodiesel",15000)//生物柴油
    event.add("actuallyadditions:canola_oil",4000)//菜籽油
    event.add("actuallyadditions:refined_canola_oil",6000)//精制菜籽油
    event.add("actuallyadditions:crystallized_oil",8000)//晶化油
    event.add("actuallyadditions:empowered_oil",15000)//充能油
    event.add("kubejs:ignis_fluid",15000)//焚空之烈火
    event.add("kubejs:fervor_fluid",50000)//烈焰之炽焱
})
