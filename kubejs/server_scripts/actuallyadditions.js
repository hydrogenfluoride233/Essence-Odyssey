ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"actuallyadditions:wood_casing"})              //木质外壳
    event.remove({id:"actuallyadditions:iron_casing"})              //铁制外壳
    event.remove({id:"actuallyadditions:basic_coil"})               //基础线圈
    event.remove({id:"actuallyadditions:advanced_coil"})            //高级线圈
    event.remove({id:"actuallyadditions:crusher"})                  //磨粉机
    event.remove({id:"actuallyadditions:atomic_reconstructor"})     //原子再构机


    //工作台配方
    event.replaceInput(
        {id:"actuallyadditions:display_stand"},
        "actuallyadditions:advanced_coil",
        "actuallyadditions:basic_coil"
    )//物品展示台

    event.replaceInput(
        {id:"actuallyadditions:empowerer"},
        "actuallyadditions:double_battery",
        "createaddition:modular_accumulator"
    )//充能台

    event.shaped(
        "actuallyadditions:basic_coil",
        ["ABA","BCB","ABA"],
        {
            A:"twilightforest:carminite",
            B:"actuallyadditions:restonia_crystal",
            C:"immersiveengineering:wirecoil_steel"
        }
    )//基础线圈
    
    //磨粉机
    //格式:[输出,输入]
    const CrushList = [
        ["kubejs:empowered_restonia_crystal_dust","actuallyadditions:empowered_restonia_crystal"],
        ["kubejs:empowered_palis_crystal_dust","actuallyadditions:empowered_palis_crystal"],
        ["kubejs:empowered_diamatine_crystal_dust","actuallyadditions:empowered_diamatine_crystal"],
        ["kubejs:empowered_void_crystal_dust","actuallyadditions:empowered_void_crystal"],
        ["kubejs:empowered_enori_crystal_dust","actuallyadditions:empowered_enori_crystal"],
        ["kubejs:empowered_emeradic_crystal_dust","actuallyadditions:empowered_emeradic_crystal"],
        ["4x naturesaura:gold_powder","naturesaura:gold_leaf"],
    ]

    CrushList.forEach(([output,input])=>
        event.recipes.actuallyadditions.crushing(output,input))

    //原子再构机
    //格式:[输出,输入,能量]
    const LaserList = [
        [
            "botanypots:terracotta_botany_pot",
            "minecraft:flower_pot",
            100000
        ],//盆栽
    ]

    LaserList.forEach(([output,input,energy])=>
        event.recipes.actuallyadditions.laser(output,input,energy))

    //充能台
    //格式:[输出,中心输入,周围输入,能量,时间];时间单位为 tick
    const EmpowerList = [
        [
            "kubejs:arcane_wafer",
            "ae2:silicon",
            [
                "ars_nouveau:source_gem",
                "ae2:fluix_crystal",
                "kubejs:empowered_diamatine_crystal_dust",
                "thaumon:mutagen"
            ],
            10000,
            100
        ],//魔导晶圆
    ]

    EmpowerList.forEach(([output,input,ingredients,energy,time])=>
        event.recipes.actuallyadditions.empowering(output,input,ingredients,energy,time))
})
