//烈阳巨灵：冰霜炸弹／霜冻炸弹在天境里额外投一发冰结球
const SunSpiritID = "aether:sun_spirit"
const SunSpiritDimension = "aether:the_aether"
const ChargeBox = Java.loadClass("net.minecraft.world.phys.AABB")
const IceCrystalSpeed = 2.5                                                 //同被击飞的冰结球

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
