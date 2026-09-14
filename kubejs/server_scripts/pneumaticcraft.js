const parseRecipeInput = ingredient=>{
    if(typeof ingredient!=="string") return ingredient

    const match=ingredient.match(/^(\d+)x\s+(.+)$/)
    const count=match ? parseInt(match[1]) : 1
    const id=match ? match[2] : ingredient

    return id.startsWith("#") ?
        {"count":count,"tag":id.substring(1)} :
        {"count":count,"item":id}
}

const parseRecipeResult = result=>{
    if(typeof result!=="string") return result

    const match=result.match(/^(\d+)x\s+(.+)$/)
    return {
        "count":match ? parseInt(match[1]) : 1,
        "id":match ? match[2] : result
    }
}

const parseThermoPlantOutput = output => {
    if(typeof output === "string") return {"item_output":parseRecipeResult(output)}

    if(output.fluid) return {
        "fluid_output":{
            "id":output.fluid,
            "amount":output.amount
        }
    }

    return output
}

const asRecipeArray = value=>Array.isArray(value) ? value : [value]

ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"pneumaticcraft:explosion_crafting/compressed_iron_ingot"})    //压缩铁锭和压缩铁块
    event.remove({id:"pneumaticcraft:explosion_crafting/compressed_iron_block"})
    event.remove({id:"pneumaticcraft:pressure_chamber/compressed_iron_ingot"})
    event.remove({id:"pneumaticcraft:pressure_chamber/compressed_iron_block"})
    event.remove({id:"pneumaticcraft:pressure_chamber_wall"})                       //压力室相关
    event.remove({id:"pneumaticcraft:pressure_chamber_valve"})
    event.remove({id:"pneumaticcraft:pressure_chamber_glass"})
    event.remove({id:"pneumaticcraft:pressure_chamber_valve_x4"})
    event.remove({id:"pneumaticcraft:pressure_chamber_glass_x4"})
    event.remove({id:"pneumaticcraft:fluid_mixer"})                                 //流体混合器
    event.remove({id:"pneumaticcraft:pressure_chamber/turbine_blade"})              //轮机扇叶

    //工作台配方
    event.replaceInput({id:"pneumaticcraft:reinforced_stone"},"minecraft:stone","naturesaura:infused_stone")        //强化石头
    event.replaceInput({id:"pneumaticcraft:air_compressor"},"minecraft:furnace","ironfurnaces:obsidian_furnace")    //空气压缩机
    event.replaceInput({id:"pneumaticcraft:small_tank"},"#c:glass_blocks","create:fluid_tank")                      //流体储罐

    event.shaped(
        "8x pneumaticcraft:pressure_chamber_wall",
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            A:"pneumaticcraft:reinforced_bricks",
            B:"immersiveengineering:creosote_bucket"
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
            "input":parseRecipeInput(input),
            "loss_rate":loss,
            "results":asRecipeArray(output).map(parseRecipeResult)
        }))

    //压力室
    //格式:[输出,输入或输入列表,压力]
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
            "3x immersiveengineering:blastbrick",
            [
                "immersiveengineering:slag_brick",
                "4x immersiveengineering:dust_coke",
                "4x minecraft:nether_brick"
            ],
            2.5
        ],//高炉砖

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
    ]

    PressureChamberList.forEach(([output,input,pressure])=>
        event.custom({
            "type":"pneumaticcraft:pressure_chamber",
            "inputs":asRecipeArray(input).map(parseRecipeInput),
            "pressure":pressure,
            "results":asRecipeArray(output).map(parseRecipeResult)
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
            "item_output":itemOutput ? parseRecipeResult(itemOutput) : {},
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
            "input":parseRecipeInput(input),
            "program":program,
            "result":parseRecipeResult(output)
        }))

    //热气动加工机
    //格式:[输出,物品输入,流体输入,温度(K),压力,时间(秒)]
    //输出物为物品时使用字符串;输出流体时使用{fluid:"模组:流体",amount:数量}
    const ThermoPlantList = [
        [
            "actuallyadditions:advanced_coil",
            "actuallyadditions:basic_coil",
            {fluid:"kubejs:ordo_essence", amount:500},
            473
        ],//高级线圈
    ]

    ThermoPlantList.forEach(([output,item,fluid,temperature,pressure,time]) => {
        const recipe = {
            "type":"pneumaticcraft:thermo_plant",
            "inputs":{},
            "outputs":parseThermoPlantOutput(output)
        }

        if(item) recipe.inputs.item = parseRecipeInput(item)
        if(fluid) recipe.inputs.fluid = fluid
        if(temperature) recipe.temperature = typeof temperature === "number" ? {"min":temperature} : temperature
        if(pressure) recipe.pressure = pressure
        if(time) recipe.speed = 3 / time

        event.custom(recipe)
    })
})
