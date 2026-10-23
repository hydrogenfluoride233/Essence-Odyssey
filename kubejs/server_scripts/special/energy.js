ServerEvents.recipes(event=>{
    //实用拓展
    event.remove({output:"actuallyadditions:oil_generator"})
    event.remove({output:"actuallyadditions:coal_generator"})
    event.remove({output:"actuallyadditions:leaf_generator"})
    event.remove({output:"actuallyadditions:heat_collector"})

    //末影接口
    event.remove({id:"enderio:photovoltaic_composite"})
    event.remove({id:"enderio:alloy_smelting/photovoltaic_plate"})
    event.remove({output:"enderio:energetic_photovoltaic_module"})
    event.remove({output:"enderio:pulsating_photovoltaic_module"})
    event.remove({output:"enderio:vibrant_photovoltaic_module"})
    event.remove({output:"enderio:stirling_generator"})
    event.remove({output:"enderio_evolution:simple_stirling_generator"})
    event.remove({output:"enderio_evolution:basic_infinity_generator"})
    event.remove({output:"enderio_evolution:crystalline_infinity_generator"})
    event.remove({output:"enderio_evolution:stellar_infinity_generator"})

    //Enigmatic Unity
    event.remove({id:"enigmaticunity:dim_source_generator"})
    event.remove({id:"enigmaticunity:bright_source_generator"})
    event.remove({id:"enigmaticunity:dim_source_producer"})
    event.remove({id:"enigmaticunity:bright_source_producer"})

    //工业先锋
    event.remove({output:"industrialforegoing:pitiful_generator"})
    event.remove({output:"industrialforegoing:biofuel_generator"})

    //集成动力
    event.remove({output:"integrateddynamics:coal_generator"})

    //更多熔炉
    event.remove({id:"ironfurnaces:augment_generator"})

    //可怖之物
    event.remove({output:"justdirethings:generatort1"})
    event.remove({output:"justdirethings:generatorfluidt1"})
    event.remove({output:"justdirethings:pocket_generator"})

    //资源蜜蜂
    event.remove({output:"productivebees:honey_generator"})
})