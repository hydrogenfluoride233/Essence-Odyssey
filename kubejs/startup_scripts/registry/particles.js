//祭坛星光微粒：三阶各一种颜色（蓝 / 金 / 棱彩）
//帧图在 textures/particle/altar_mote_<颜色>_0..6，粒子从生到灭依次播放，正好闪亮一次后熄灭
StartupEvents.registry("particle_type", event => {
    const frames = [0, 1, 2, 3, 4, 5, 6]
    ;["blue", "gold", "prism"].forEach(color =>
        event.create(`kubejs:altar_mote_${color}`)
             .textures(frames.map(i => `kubejs:altar_mote_${color}_${i}`))
    )
})
