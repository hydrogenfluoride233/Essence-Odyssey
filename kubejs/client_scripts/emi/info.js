RecipeViewerEvents.registerSubtypes("item",event=>{
    event.useComponents("naturesaura:aura_bottle",["naturesaura:aura_bottle_data"])
    event.useComponents("immersiveengineering:blueprint",["immersiveengineering:blueprint"])
})

RecipeViewerEvents.addInformation("item", event => {
    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"naturesaura:overworld"
        }
    }),[
        "用瓶与塞收集主世界的灵气。"
    ])

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"naturesaura:nether"
        }
    }),[
        "用瓶与塞收集下界的灵气。"
    ])

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"naturesaura:end"
        }
    }),[
        "用瓶与塞收集末地的灵气。"
    ])

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"kubejs:aether"
        }
    }),[
        "用瓶与塞收集天境的灵气。"
    ])

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"kubejs:twilight_forest"
        }
    }),[
        "用瓶与塞收集暮色森林的灵气。"
    ])

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"kubejs:starlight"
        }
    }),[
        "用瓶与塞收集永恒星光的灵气。"
    ])

    event.add("aether:aerogel", [
        "将熔岩放置在天境形成。"
    ])

    event.add("deep_aether:aersmog", [
        "由水和深池毒素相遇形成。"
    ])

    event.add("ae2:mysterious_cube", [
        "陨石中残留的赛特斯结构已经失去活性，它已经没有办法再对你做出回应。想办法重新激活它。"
    ])

    event.add("eternal_starlight:starcore_light", [
        "使用任意一种镐右键炽热星核块后，它会转化为亮度更高的星核灯。"
    ])

    event.add("eternal_starlight:blazing_starcore_block", [
        "将星核块放置在熔岩（流体源）附近，它会自动转化为炽热星核块。"
    ])

    event.add(Item.of("immersiveengineering:blueprint",{
        "immersiveengineering:blueprint":"automatons"
    }),[
        "从试炼密室宝库中获得。"
    ])

    event.add(Item.of("immersiveengineering:blueprint",{
        "immersiveengineering:blueprint":"specialBullet"
    }),[
        "与军械工人村民交易，或在工程师小屋箱子中获得。"
    ])
})
