BlockEvents.modification(event=>{
    event.modify("ae2:mysterious_cube", block=>{
        block.setDestroySpeed(-1)
        block.setExplosionResistance(3600000)
    })
})
