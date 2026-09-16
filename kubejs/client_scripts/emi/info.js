RecipeViewerEvents.registerSubtypes("item",event=>{
    event.useComponents("naturesaura:aura_bottle",["naturesaura:aura_bottle_data"])
    event.useComponents("immersiveengineering:blueprint",["immersiveengineering:blueprint"])
})

RecipeViewerEvents.addInformation("item", event => {
    //文本一律走本地化键 kubejs.info.*，中英各一份，见 kubejs\assets\kubejs\lang\
    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"naturesaura:overworld"
        }
    }),[
        Text.translate("kubejs.info.aura_bottle_overworld")
    ])

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"naturesaura:nether"
        }
    }),[
        Text.translate("kubejs.info.aura_bottle_nether")
    ])

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"naturesaura:end"
        }
    }),[
        Text.translate("kubejs.info.aura_bottle_end")
    ])

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"kubejs:aether"
        }
    }),[
        Text.translate("kubejs.info.aura_bottle_aether")
    ])

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"kubejs:twilight_forest"
        }
    }),[
        Text.translate("kubejs.info.aura_bottle_twilight_forest")
    ])

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"kubejs:starlight"
        }
    }),[
        Text.translate("kubejs.info.aura_bottle_starlight")
    ])

    event.add("aether:aerogel", [
        Text.translate("kubejs.info.aerogel")
    ])

    event.add("deep_aether:aersmog", [
        Text.translate("kubejs.info.aersmog")
    ])

    event.add("ae2:mysterious_cube", [
        Text.translate("kubejs.info.mysterious_cube")
    ])

    event.add("eternal_starlight:starcore_light", [
        Text.translate("kubejs.info.starcore_light")
    ])

    event.add("eternal_starlight:blazing_starcore_block", [
        Text.translate("kubejs.info.blazing_starcore_block")
    ])

    event.add(Item.of("immersiveengineering:blueprint",{
        "immersiveengineering:blueprint":"automatons"
    }),[
        Text.translate("kubejs.info.blueprint_automatons")
    ])

    event.add(Item.of("immersiveengineering:blueprint",{
        "immersiveengineering:blueprint":"specialBullet"
    }),[
        Text.translate("kubejs.info.blueprint_special_bullet")
    ])
})
