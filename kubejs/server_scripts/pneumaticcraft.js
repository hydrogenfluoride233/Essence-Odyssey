ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"pneumaticcraft:explosion_crafting/compressed_iron_ingot"})//压缩铁锭和压缩铁块
    event.remove({id:"pneumaticcraft:explosion_crafting/compressed_iron_block"})
    event.remove({id:"pneumaticcraft:pressure_chamber/compressed_iron_ingot"})
    event.remove({id:"pneumaticcraft:pressure_chamber/compressed_iron_block"})

    event.remove({id:"pneumaticcraft:pressure_chamber_wall"})//压力室相关
    event.remove({id:"pneumaticcraft:pressure_chamber_valve"})
    event.remove({id:"pneumaticcraft:pressure_chamber_glass"})
    event.remove({id:"pneumaticcraft:pressure_chamber_valve_x4"})
    event.remove({id:"pneumaticcraft:pressure_chamber_glass_x4"})

    event.remove({id:"pneumaticcraft:air_compressor"})//压缩机
    event.remove({id:"pneumaticcraft:liquid_compressor"})
    event.remove({id:"pneumaticcraft:manual_compressor"})
    event.remove({id:"pneumaticcraft:thermal_compressor"})
    
    event.remove({id:"pneumaticcraft:fluid_mixer"})//流体混合器
    event.remove({id:"pneumaticcraft:pressure_chamber/turbine_blade"})//轮机扇叶
    event.remove({id:"pneumaticcraft:thermopneumatic_processing_plant"})//热气动加工机
    event.remove({id:"pneumaticcraft:refinery"})//精炼厂控制器
    event.remove({id:"pneumaticcraft:refinery_output"})//精炼厂输出端
    event.remove({id:"pneumaticcraft:thermo_plant/plastic_from_biodiesel"})//生物柴油产塑料

    //工作台配方
    event.replaceInput(
        {id:"pneumaticcraft:reinforced_stone"},
        "minecraft:stone",
        "naturesaura:infused_stone"
    )//强化石头

    event.replaceInput(
        {id:"pneumaticcraft:small_tank"},
        "#c:glass_blocks",
        "create:fluid_tank"
    )//流体储罐

    event.shaped(
        "8x pneumaticcraft:pressure_chamber_wall",
        ["AAA","ABA","AAA"],
        {
            A:"pneumaticcraft:reinforced_bricks",
            B:"pneumaticcraft:ingot_iron_compressed"
        }
    )//压力室墙壁

    //爆炸合成
    //格式:[输出,输入,损耗率];损耗率为百分比
    const ExplosionList = [
        ["pneumaticcraft:ingot_iron_compressed","mekanism:ingot_steel",20],     //压缩铁锭和压缩铁块
        ["pneumaticcraft:compressed_iron_block","mekanism:block_steel",20]
    ]

    ExplosionList.forEach(([output,input,loss])=>
        event.custom({
            "type":"pneumaticcraft:explosion_crafting",
            "input":toIngredient(input),
            "loss_rate":loss,
            "results":asRecipeArray(output).map(toItemStack)
        }))

    //压力室
    //格式:[输出,输入,压力]
    const PressureChamberList = [
        [
            "pneumaticcraft:ingot_iron_compressed",
            "mekanism:ingot_steel",
            2
        ],//压缩铁锭

        [
            "pneumaticcraft:compressed_iron_block",
            "mekanism:block_steel",
            2
        ],//压缩铁块

        [
            "kubejs:energy_capacitor",
            [
                "2x #pneumaticcraft:wiring",
                "actuallyadditions:restonia_crystal",
                "justdirethings:ferricore_ingot"
            ],
            2
        ],//聚能电容

        [
            "immersiveengineering:heavy_engineering",
            [
                "immersiveengineering:sheetmetal_steel",
                "4x immersiveengineering:component_steel",
                "4x twilightforest:wrought_iron_bar"
            ],
            3
        ],//重型工程块

        [
            "immersiveengineering:rs_engineering",
            [
                "immersiveengineering:sheetmetal_iron",
                "4x minecraft:redstone",
                "4x twilightforest:wrought_iron_bar"
            ],
            3
        ],//红石工程块

        [
            "immersiveengineering:light_engineering",
            [
                "immersiveengineering:sheetmetal_iron",
                "4x immersiveengineering:component_iron",
                "4x twilightforest:wrought_iron_bar"
            ],
            3
        ],//轻型工程块

        [
            "justdirethings:gooblock_tier1",
            [
                "4x aether:aerogel",
                "2x minecraft:sugar",
                "2x minecraft:rotten_flesh"
            ],
            2
        ],//原初浆凝胶

        [
            "pneumaticcraft:turbine_blade",
            [
                "immersiveengineering:ingot_hop_graphite",
                "2x kubejs:empowered_void_crystal_dust",
                "kubejs:empowered_restonia_crystal_dust"
            ],
            2
        ],//轮机扇叶

        [
            "cobblegengalore:block_gen_gold",
            [
                "cobblegengalore:block_gen_iron",
                "4x minecraft:potent_sulfur",
                "4x minecraft:gold_ingot"
            ],
            3
        ],//金质方块制造机

        [
            "pneumaticcraft:thermopneumatic_processing_plant",
            [
                "2x justdirethings:ferricore_ingot",
                "2x pneumaticcraft:small_tank",
                "pneumaticcraft:pressure_tube",
                "actuallyadditions:iron_casing"
            ],
            2
        ],//热气动加工机

        [
            "pneumaticcraft:refinery",
            [
                "2x actuallyadditions:restonia_crystal",
                "pneumaticcraft:small_tank",
                "2x actuallyadditions:advanced_coil",
                "actuallyadditions:iron_casing"
            ],
            3
        ],//精炼厂控制器

        [
            "pneumaticcraft:refinery_output",
            [
                "2x actuallyadditions:enori_crystal",
                "pneumaticcraft:small_tank",
                "2x #c:glass_blocks",
                "actuallyadditions:iron_casing"
            ],
            2
        ],//精炼厂输出端
    ]

    PressureChamberList.forEach(([output,input,pressure])=>
        event.custom({
            "type":"pneumaticcraft:pressure_chamber",
            "inputs":asRecipeArray(input).map(toIngredient),
            "pressure":pressure,
            "results":asRecipeArray(output).map(toItemStack)
        }))

    //流体混合器
    //格式:[流体输出,物品输出,输入流体1,输入流体2,压力,时间(tick)]
    //流体使用{fluid:"模组:流体",amount:数量};标签流体使用{tag:"标签",amount:数量}
    //不需要的输出填 null
    const FluidMixerList = [
    ]

    FluidMixerList.forEach(([fluidOutput,itemOutput,input1,input2,pressure,time]) =>
        event.custom({
            "type":"pneumaticcraft:fluid_mixer",
            "fluid_output":fluidOutput ? {
                "id":fluidOutput.fluid,
                "amount":fluidOutput.amount
            } : {},
            "item_output":itemOutput ? toItemStack(itemOutput) : {},
            "input1":input1,
            "input2":input2,
            "pressure":pressure,
            "time":time
        }))

    //装配台
    //格式:[输出,输入,程序],程序为 drill,laser,drill_laser
    const AssemblyList = [
    ]

    AssemblyList.forEach(([output,input,program]) =>
        event.custom({
            "type":`pneumaticcraft:assembly_${program}`,
            "input":toIngredient(input),
            "program":program,
            "result":toItemStack(output)
        }))

    //热气动加工机
    //格式:[输出,物品输入,流体输入,温度(K),压力,时间(秒)]
    //输出物为物品时使用字符串;输出流体时使用{fluid:"模组:流体",amount:数量}
    const ThermoPlantList = [
        [
            "actuallyadditions:advanced_coil",
            "actuallyadditions:basic_coil",
            {fluid:"actuallyadditions:crystallized_oil", amount:500},
            473
        ],//高级线圈

        [
            {fluid:"actuallyadditions:crystallized_oil", amount:1000},
            "actuallyadditions:crystallized_canola_seed",
            {fluid:"actuallyadditions:refined_canola_oil", amount:1000},
            373
        ],//晶化油

        [
            {fluid:"actuallyadditions:empowered_oil", amount:1000},
            "actuallyadditions:empowered_canola_seed",
            {fluid:"actuallyadditions:crystallized_oil", amount:1000},
            373
        ],//充能油
    ]

    ThermoPlantList.forEach(([output,item,fluid,temperature,pressure,time]) => {
        const recipe = {
            "type":"pneumaticcraft:thermo_plant",
            "inputs":{},
            "outputs":parseThermoPlantOutput(output)
        }

        if(item) recipe.inputs.item = toIngredient(item)
        if(fluid) recipe.inputs.fluid = fluid
        if(temperature) recipe.temperature = typeof temperature === "number" ? {"min":temperature} : temperature
        if(pressure) recipe.pressure = pressure
        if(time) recipe.speed = 3 / time

        event.custom(recipe)
    })
})
