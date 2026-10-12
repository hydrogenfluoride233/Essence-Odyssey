// 手写的物品信息页（带组件的那些：瓶装灵气／蓝图）—— 别的都在「物品提示表」里生成

RecipeViewerEvents.addInformation("item",event=>{
    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"naturesaura:overworld"
        }
    }),[
        Text.translate("essenceodyssey.info.aura_bottle_overworld")
    ])//瓶装阳光

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"naturesaura:nether"
        }
    }),[
        Text.translate("essenceodyssey.info.aura_bottle_nether")
    ])//瓶装鬼魂

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"naturesaura:end"
        }
    }),[
        Text.translate("essenceodyssey.info.aura_bottle_end")
    ])//瓶装黑暗

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"kubejs:aether"
        }
    }),[
        Text.translate("essenceodyssey.info.aura_bottle_aether")
    ])//瓶装曙光

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"kubejs:twilight_forest"
        }
    }),[
        Text.translate("essenceodyssey.info.aura_bottle_twilight_forest")
    ])//瓶装暮光

    event.add(Item.of("naturesaura:aura_bottle",{
        "naturesaura:aura_bottle_data":{
            aura_type:"kubejs:starlight"
        }
    }),[
        Text.translate("essenceodyssey.info.aura_bottle_starlight")
    ])//瓶装星光






    event.add(Item.of("immersiveengineering:blueprint",{
        "immersiveengineering:blueprint":"automatons"
    }),[
        Text.translate("essenceodyssey.info.blueprint_automatons")
    ])//自动机狼蓝图

    event.add(Item.of("immersiveengineering:blueprint",{
        "immersiveengineering:blueprint":"specialBullet"
    }),[
        Text.translate("essenceodyssey.info.blueprint_special_bullet")
    ])//特种子弹蓝图
    
    event.add("immersiveengineering:storage_steel", [
        Text.translate("essenceodyssey.info.ie_steel_block_detail")
    ])//沉浸钢块
})
