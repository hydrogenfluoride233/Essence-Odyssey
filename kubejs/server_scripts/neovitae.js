ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"neovitae:ara_vitae"})             //命血祭坛
    event.remove({id:"neovitae:ara_vitae/water_tool"})  //铭文工具
    event.remove({id:"neovitae:ara_vitae/fire_tool"})
    event.remove({id:"neovitae:ara_vitae/earth_tool"})
    event.remove({id:"neovitae:ara_vitae/air_tool"})
    event.remove({id:"neovitae:guide_book"})            //命血手札
    event.remove({id:"neovitae:meteor/stone"})          //陨星仪式
    event.remove({id:"neovitae:meteor/diamond"})
    event.remove({id:"neovitae:meteor/nether"})
    event.remove({id:"neovitae:meteor/nether_star"})
    event.remove({id:"neovitae:meteor/iron"})

    //命血祭坛
    //格式:[输出,输入,祭坛等级,EV]
    const AraList = [
        [
            "neovitae:guide_book",
            "minecraft:book",
            0,1000
        ],//命血手札
    ]
    AraList.forEach(([output,input,tier,blood])=>
        event.recipes.neovitae.ara_vitae_recipe(output,input,tier,blood,25,50))

    //陨星仪式
    //格式:[输入,生命源质,爆炸半径,陨石层]
    //输入格式为{"item":"物品ID"}或{"tag":"标签ID"}
    //陨石层格式:[{半径,填充方块,外壳方块,最小权重,额外权重,加权方块}]
    //weighted格式:[{entry:"物品ID或标签ID",weight:权重}],其他字段不填即可
    const MeteorList = [

    ]

    MeteorList.forEach(([input,syphon,explosion,layers]) =>
        event.custom({
            "type":"neovitae:meteor",
            "input":input,
            "syphon":syphon,
            "explosion":explosion,
            "layers":layers
        })
    )
})
