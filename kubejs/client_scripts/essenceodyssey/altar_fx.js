//祭坛特效（只在客户端运行，按原版“粒子”设置的多少自动削减）
//  - 星轨微粒：从悬浮的星轨环上随机一点甩出，顺着彗星转动的方向飘开、慢慢上升后熄灭
//  - 星池微粒：从台面中央的星池缓缓升起，飘进上面的祭祀碗
//  - 附魔字符：像附魔台那样从近处飞进星池
//需要祭坛方块带方块实体（startup_scripts/registry/blocks.js），新放置的祭坛才会有特效

ClientEvents.particleProviderRegistry(event => {
    //register 有两个参数个数相同的重载（Consumer 和 SpriteSetParticleProvider），直接传函数会报“ambiguous”，
    //所以用签名字符串指明 Consumer 那个
    const register = "register(net.minecraft.core.particles.ParticleType,java.util.function.Consumer)"
    ;["blue", "gold", "prism"].forEach(color =>
        event[register](`kubejs:altar_mote_${color}`, particle => {
            particle.setLifetime(26 + Math.floor(Math.random() * 18))
            particle.setGravity(-0.05)    //负重力：慢慢往上飘
            particle.setFriction(0.95)
            particle.scale(0.6 + Math.random() * 0.2)    //原大小的六到八成，星点细一些
        })
    )
})

//星轨环（与模型一致，单位：格）：h 中线到中心的距离，y 环的高度，dir 彗星方向（1 = 俯视顺时针）
const ALTAR_FX = {
    "kubejs:altar_1": {
        rings: [{ h: 7 / 16, y: 7 / 16, dir: 1, mote: "blue" }],
        ring: 0.30, pool: 0.10, glyphs: 0.15, poolMote: "blue"
    },
    "kubejs:altar_2": {
        rings: [{ h: 7 / 16, y: 7 / 16, dir: 1, mote: "gold" }, { h: 5 / 16, y: 7 / 16, dir: -1, mote: "blue" }],
        ring: 0.40, pool: 0.14, glyphs: 0.22, poolMote: "gold"
    },
    "kubejs:altar_3": {
        rings: [{ h: 7 / 16, y: 7 / 16, dir: 1, mote: "prism" }, { h: 5 / 16, y: 7 / 16, dir: -1, mote: "prism" },
                { h: 6.5 / 16, y: 17.5 / 16, dir: -1, mote: "prism" }],
        ring: 0.55, pool: 0.18, glyphs: 0.30, poolMote: "prism"
    }
}
//俯视顺时针时，北、东、南、西四条边上的前进方向
const ALTAR_TANGENT = [[1, 0], [0, 1], [-1, 0], [0, -1]]

Object.keys(ALTAR_FX).forEach(id => {
    const fx = ALTAR_FX[id]
    BlockEvents.blockEntityTick(id, event => {
        const level = event.level
        const block = event.block
        const cx = block.x + 0.5, y = block.y, cz = block.z + 0.5
        const r = Math.random
        if (r() < fx.ring) {
            const ring = fx.rings[Math.floor(r() * fx.rings.length)]
            const side = Math.floor(r() * 4), u = (r() * 2 - 1) * ring.h
            const px = [cx + u, cx + ring.h, cx - u, cx - ring.h][side]
            const pz = [cz - ring.h, cz + u, cz + ring.h, cz - u][side]
            const t = ALTAR_TANGENT[side], v = 0.02 + r() * 0.015
            level.addParticle(`kubejs:altar_mote_${ring.mote}`, px, y + ring.y, pz,
                t[0] * v * ring.dir, 0.004 + r() * 0.01, t[1] * v * ring.dir)
        }
        if (r() < fx.pool) {
            level.addParticle(`kubejs:altar_mote_${fx.poolMote}`,
                cx + (r() - 0.5) * 0.3, y + 1.0, cz + (r() - 0.5) * 0.3, 0, 0.008 + r() * 0.01, 0)
        }
        //附魔字符粒子：位置参数是终点（星池上方），速度参数是起点相对终点的偏移
        if (r() < fx.glyphs) {
            level.addParticle("minecraft:enchant", cx, y + 1.05, cz,
                (r() - 0.5) * 1.6, 0.4 + r() * 0.7, (r() - 0.5) * 1.6)
        }
    })
})
