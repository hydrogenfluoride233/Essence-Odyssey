//结晶弹：寒霜弹投冰结球，另含烈阳巨灵那两颗炸弹的追加弹
const SunSpiritID = "aether:sun_spirit"
const SunSpiritDimension = "aether:the_aether"
const ChargeBox = Java.loadClass("net.minecraft.world.phys.AABB")
const IceCrystalSpeed = 2.5                                                 //同被击飞的冰结球
const FrostChargeCooldown = 10                                              //0.5 秒

//寒霜弹：冰石＋雪球
ServerEvents.recipes(event=>{
    event.shapeless("2x kubejs:frost_charge",[
        "aether:icestone",
        "2x minecraft:snowball"
    ])
})

//最近的烈阳巨灵
const SunSpiritNear = (player,range)=>{
    for (const entity of player.level.getEntitiesWithin(ChargeBox.ofSize(player.position(),range,range,range))) {
        if (`${entity.type}`===SunSpiritID) return entity
    }
    return null
}

//朝准星打出指定弹体
const ThrowCrystal = (event,type,speed)=>{
    const player = event.player
    if (!player) return
    const from = player.getEyePosition()
    event.level.spawnEntity(type,crystal=>{
        crystal.setPos(from.x,from.y,from.z)
        crystal.setOwner(player)
        crystal.setDeltaMovement(player.getLookAngle().scale(speed))
    })
}

//寒霜弹：消耗一枚，投出冰结球
ItemEvents.rightClicked("kubejs:frost_charge",event=>{
    const player = event.player
    if (!player) return
    ThrowCrystal(event,"aether:ice_crystal",IceCrystalSpeed)
    if (!player.isCreative()) event.item.shrink(1)
    player.addItemCooldown(event.item.getItem(),FrostChargeCooldown)
})

//冰霜炸弹 / 霜冻炸弹：在天境里且它在附近时，额外打一发冰结球
const SunSpiritBomb = event=>{
    if (`${event.level.dimension}`!==SunSpiritDimension) return
    if (!SunSpiritNear(event.player,32)) return
    ThrowCrystal(event,"aether:ice_crystal",IceCrystalSpeed)                //消耗由炸弹自己管
}

ItemEvents.rightClicked("twilightforest:ice_bomb",event=>{
    SunSpiritBomb(event)
})
ItemEvents.rightClicked("eternal_starlight:frozen_bomb",event=>{
    SunSpiritBomb(event)
})
