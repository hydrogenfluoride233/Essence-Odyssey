//冷却剂
PowahEvents.registerCoolants(event=>{
    event.addFluid("kubejs:aqua_fluid",-4)//渊流之清泉
    event.addFluid("mekanism:sodium",-6)//液态钠
    event.addFluid("kubejs:gelum_fluid",-10)//极寒之凛冰

    event.addSolid("125x kubejs:crystal_gelum",-40)//寒霜结晶
    event.addSolid("500x kubejs:block_gelum",-40)//寒霜结晶块
})
