ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"mekanism:steel_casing"})                  //钢质机壳
    event.remove({id:"mekanismgenerators:turbine/blade"})       //涡轮叶片
    event.replaceInput({id:"mekanism:structural_glass"},"#c:ingots/steel","mekanism:dust_steel")


    //工作台配方
    event.replaceInput({id:"mekanism:robit"},"#c:ingots/steel","immersiveengineering:robot_wolf")

    event.shaped(
        "mekanismgenerators:turbine_blade",
        ["ABA","BCB","ABA"],
        {
            A:"pneumaticcraft:turbine_rotor",
            B:"immersiveengineering:plate_steel",
            C:"mekanism:alloy_atomic"
        }
    )//涡轮转子

    //冶金灌注机
    //格式:[输出,物品输入,化学品输入]
    //化学品可使用 "数量x 化学品ID"
    event.replaceInput("mekanism:control_circuit/basic","mekanism:ingot_osmium","immersiveengineering:circuit_board")

    const InfuseList = [
        [
            "twilightforest:wrought_iron_bar",
            "justdirethings:ferricore_ingot",
            "10x mekanism:carbon"
        ],//锻铁锭
    ]

    InfuseList.forEach(([output,ItemInput,ChemicalInput])=>
        event.recipes.mekanism.metallurgic_infusing(output,ItemInput,ChemicalInput,false))

    //粉碎机
    //格式:[输出,输入]
    const CrushList = [
        ["4x naturesaura:gold_powder","naturesaura:gold_leaf"],                                         //金叶粉
        ["kubejs:empowered_restonia_crystal_dust","actuallyadditions:empowered_restonia_crystal"],      //充能红石水晶粉
        ["kubejs:empowered_palis_crystal_dust","actuallyadditions:empowered_palis_crystal"],            //充能青金石水晶粉
        ["kubejs:empowered_diamatine_crystal_dust","actuallyadditions:empowered_diamatine_crystal"],    //充能钻石水晶粉
        ["kubejs:empowered_void_crystal_dust","actuallyadditions:empowered_void_crystal"],              //充能煤晶粉
        ["kubejs:empowered_enori_crystal_dust","actuallyadditions:empowered_enori_crystal"],            //充能铁晶粉
        ["kubejs:empowered_emeradic_crystal_dust","actuallyadditions:empowered_emeradic_crystal"],      //充能绿宝石水晶粉
    ]

    CrushList.forEach(([output,input])=>
        event.recipes.mekanism.crushing(output,input))

    //数控压模机
    //格式:[输出,输入,模具]
    const StampList = [
        ["kubejs:iesnium_sheet","occultism:iesnium_ingot","immersiveengineering:mold_plate"],
        ["kubejs:tin_sheet","mekanism:ingot_tin","immersiveengineering:mold_plate"],
        ["kubejs:osmium_sheet","mekanism:ingot_osmium","immersiveengineering:mold_plate"],
        ["createaddition:zinc_sheet","create:zinc_ingot","immersiveengineering:mold_plate"],
        ["create:brass_sheet","create:brass_ingot","immersiveengineering:mold_plate"],
        ["createaddition:electrum_sheet","immersiveengineering:ingot_electrum","immersiveengineering:mold_plate"],

        ["minecraft:blaze_rod","5x minecraft:blaze_powder","immersiveengineering:mold_rod"],
        ["2x createaddition:brass_rod","create:brass_ingot","immersiveengineering:mold_rod"],
        ["2x createaddition:copper_rod","minecraft:copper_ingot","immersiveengineering:mold_rod"],
        ["2x createaddition:gold_rod","minecraft:gold_ingot","immersiveengineering:mold_rod"],
        ["2x createaddition:electrum_rod","immersiveengineering:ingot_electrum","immersiveengineering:mold_rod"],

        ["2x createaddition:gold_wire","minecraft:gold_ingot","immersiveengineering:mold_wire"],
        ["2x createaddition:iron_wire","minecraft:iron_ingot","immersiveengineering:mold_wire"],

        ["pneumaticcraft:compressed_iron_gear","4x pneumaticcraft:ingot_iron_compressed","immersiveengineering:mold_gear"],
        ["industrialforegoing:iron_gear","4x minecraft:iron_ingot","immersiveengineering:mold_gear"],
        ["industrialforegoing:gold_gear","4x minecraft:gold_ingot","immersiveengineering:mold_gear"],
        ["industrialforegoing:diamond_gear","4x minecraft:diamond","immersiveengineering:mold_gear"],
    ]

    StampList.forEach(([output,input,mold])=>
        event.recipes.mekmm.stamper(output,input,mold))

    //数控车床
    //格式:[输出,输入]
    const LatheList = [
        ["2x immersiveengineering:stick_netherite","minecraft:netherite_ingot"],
        ["2x immersiveengineering:stick_iron","minecraft:iron_ingot"],
        ["2x createaddition:copper_rod","minecraft:copper_ingot"],
    ]

    LatheList.forEach(([output,input])=>
        event.recipes.mekmm.lathe(output,input))

    //数控轧机
    //格式:[输出,输入]
    const RollingMillList = [
        ["2x createaddition:iron_wire","minecraft:iron_ingot"],
        ["2x createaddition:gold_wire","minecraft:gold_ingot"],
        ["2x immersiveengineering:wire_electrum","immersiveengineering:ingot_electrum"]
    ]

    RollingMillList.forEach(([output,input])=>
        event.recipes.mekmm.rolling_mill(output,input))
})
