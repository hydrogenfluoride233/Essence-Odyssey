ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"sanguine_networks:catalyst/barrier"})//屏障

    const catalystList = [
        "kubejs:aether_prediction",
        "kubejs:eternal_starlight_prediction",
    ]

    catalystList.forEach(item=>
        event.custom({
            "type":"sanguine_networks:catalyst",
            "catalyst":{"item":item},
            "multiplier":2,
            "uses":50
        }))
})
