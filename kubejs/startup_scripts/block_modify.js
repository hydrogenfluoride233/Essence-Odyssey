BlockEvents.modification(event=>{
    event.modify("ae2:mysterious_cube", block=>{
        block.setDestroySpeed(-1)               //挖不动,与基岩一致
        block.setExplosionResistance(3600000)   //抗爆,与基岩一致
    })
})
