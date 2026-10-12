RecipeViewerEvents.registerSubtypes("item",event=>{
    event.useComponents("naturesaura:aura_bottle",["naturesaura:aura_bottle_data"])
    event.useComponents("immersiveengineering:blueprint",["immersiveengineering:blueprint"])
})

RecipeViewerEvents.addInformation("item",event=>{
    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"naturesaura:overworld"
        }
    }),[
        Text.translate("kubejs.info.aura_bottle_overworld")
    ])//瓶装阳光

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"naturesaura:nether"
        }
    }),[
        Text.translate("kubejs.info.aura_bottle_nether")
    ])//瓶装鬼魂

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"naturesaura:end"
        }
    }),[
        Text.translate("kubejs.info.aura_bottle_end")
    ])//瓶装黑暗

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"kubejs:aether"
        }
    }),[
        Text.translate("kubejs.info.aura_bottle_aether")
    ])//瓶装曙光

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"kubejs:twilight_forest"
        }
    }),[
        Text.translate("kubejs.info.aura_bottle_twilight_forest")
    ])//瓶装暮光

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"kubejs:starlight"
        }
    }),[
        Text.translate("kubejs.info.aura_bottle_starlight")
    ])//瓶装星光

    event.add("aether:aerogel", [
        Text.translate("kubejs.info.aerogel")
    ])//气凝胶蓝图

    event.add("deep_aether:aersmog", [
        Text.translate("kubejs.info.aersmog")
    ])//濛氤境云

    event.add("ae2:mysterious_cube", [
        Text.translate("kubejs.info.mysterious_cube")
    ])//神秘方块

    event.add("eternal_starlight:starcore_light", [
        Text.translate("kubejs.info.starcore_light")
    ])//星核灯

    event.add("eternal_starlight:blazing_starcore_block", [
        Text.translate("kubejs.info.blazing_starcore_block")
    ])//炽热星核块

    event.add(Item.of("immersiveengineering:blueprint",{
        "immersiveengineering:blueprint":"automatons"
    }),[
        Text.translate("kubejs.info.blueprint_automatons")
    ])//自动机狼蓝图

    event.add(Item.of("immersiveengineering:blueprint",{
        "immersiveengineering:blueprint":"specialBullet"
    }),[
        Text.translate("kubejs.info.blueprint_special_bullet")
    ])//特种子弹蓝图
    
    event.add("immersiveengineering:storage_steel", [
        Text.translate("kubejs.info.ie_steel_block_detail")
    ])//沉浸钢块
})
