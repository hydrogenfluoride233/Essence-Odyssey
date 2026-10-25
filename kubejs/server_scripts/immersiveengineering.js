ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"engineeredcompatibility:metalpress/gear_compressed_iron"})    //齿轮
    event.remove({id:"pneumaticcraft:compressed_iron_gear"})
    event.remove({id:"industrialforegoing:gold_gear"})
    event.remove({id:"industrialforegoing:iron_gear"})
    event.remove({id:"industrialforegoing:diamond_gear"})
    event.remove({id:"immersiveengineering:crafting/alloybrick"})                   //窑砖
    event.remove({id:"immersiveengineering:crafting/cokebrick"})                    //焦炉砖
    event.remove({id:"immersiveengineering:crafting/blastbrick"})                   //高炉砖
    event.remove({id:"immersiveengineering:crafting/blastbrick_reinforced"})        //强化高炉砖
    event.remove({id:"immersiveengineering:crafting/component_steel"})              //机械零件
    event.remove({id:"immersiveengineering:crafting/component_iron"})
    event.remove({id:"immersiveengineering:crafting/rs_engineering"})               //工程块
    event.remove({id:"immersiveengineering:crafting/light_engineering"})
    event.remove({id:"immersiveengineering:crafting/heavy_engineering"})
    event.remove({id:"immersiveengineering:crafting/fluid_pipe"})                   //流体管道   
    event.remove({id:/^immersiveengineering:crafting\/(hammercrushing_|raw_hammercrushing_|plate_.*_hammering$)/})
    event.remove({id:/^immersiveengineering:crafting\/wire_/})
    event.remove({id: /^immersiveengineering:crafting\/stick_(?!treated$)/})
    event.remove({id:/^create:cutting\/compat\/immersiveengineering\//})
    event.remove({id:"immersiveengineering:crafting/redstone_acid"})                //红石酸
    event.remove({id:"engineeredcompatibility:mixer/etching_acid_renewable"})       //蚀刻酸
    event.remove({id:"immersiveengineering:crafting/treated_wood_horizontal"})      //防腐木板
    event.remove({id:"engineeredcompatibility:crafting_compat/pcb_blueprint"})      //工程师蓝图
    event.remove({id:"engineeredcompatibility:blueprint/pneumaticcraft/pcb"})
    event.remove({id:"engineeredcompatibility:blueprint/pneumaticcraft/capacitor"})
    event.remove({id:"engineeredcompatibility:blueprint/pneumaticcraft/empty_pcb"})
    event.remove({id:"engineeredcompatibility:blueprint/pneumaticcraft/circuit_backplane"})

    //工作台配方
    event.replaceInput(
        {id:"immersiveengineering:crafting/cokebrick"},
        "#c:bricks",
        "mekanism:ingot_steel"
    )//焦炉砖

    event.replaceInput(
        {id:"immersiveengineering:crafting/coil_lv"},
        "minecraft:iron_ingot",
        "actuallyadditions:enori_crystal"
    )//低压线圈

    event.replaceInput(
        {id:"immersiveengineering:crafting/coil_mv"},
        "minecraft:iron_ingot",
        "actuallyadditions:enori_crystal"
    )//中压线圈

    event.replaceInput(
        {id:"immersiveengineering:crafting/coil_hv"},
        "minecraft:iron_ingot",
        "actuallyadditions:enori_crystal"
    )//高压线圈

    event.replaceInput(
        {id:"immersiveengineering:crafting/hammer"},
        "minecraft:iron_ingot",
        "create:andesite_alloy"
    )//工程师锤

    event.replaceInput(
        {id:"immersiveengineering:crafting/workbench"},
        "minecraft:iron_ingot",
        "twilightforest:wrought_iron_bar"
    )//工程师装配台

    event.shaped(
        "8x immersiveengineering:fluid_pipe",
        ["AAA","ABA","AAA"],
        {
            A:"create:fluid_pipe",
            B:"kubejs:steel_gear"
        }
    )//流体管道

    event.shaped(
        'immersiveengineering:blueprint[immersiveengineering:blueprint="pcb"]',
        [
            "LKL",
            "DDD",
            "PPP"
        ],
        {
            L: "pneumaticcraft:printed_circuit_board",
            K: "pneumaticcraft:pcb_blueprint",
            D: "#c:dyes/blue",
            P: "#c:paper"
        }
    )//工程师蓝图

    //熔炼配方
    event.blasting("immersiveengineering:slag","#c:gravels",0.5,600)

    //金属冲压机
    //格式:[输出,输入,模具]
    const MetalPressList = [
        [
            "kubejs:iesnium_sheet",
            "occultism:iesnium_ingot",
            "immersiveengineering:mold_plate"
        ],//艾瑟金属板

        [
            "pneumaticcraft:compressed_iron_gear",
            "4x pneumaticcraft:ingot_iron_compressed",
            "immersiveengineering:mold_gear"
        ],//压缩铁齿轮

        [
            "industrialforegoing:diamond_gear",
            "4x minecraft:diamond",
            "immersiveengineering:mold_gear"
        ],//钻石齿轮
    ]

    MetalPressList.forEach(([output,input,mold])=>
        event.recipes.immersiveengineering.metal_press(
            TagOutputJS.ofItemStack(output),
            IngredientWithSizeJS.ofItemStack(input),
            mold,2400)
        )

    //粉碎机
    //格式:[输出,输入]
    const CrusherList = [
        [
            "kubejs:empowered_restonia_crystal_dust",
            "actuallyadditions:empowered_restonia_crystal"
        ],//充能红石水晶粉

        [
            "kubejs:empowered_palis_crystal_dust",
            "actuallyadditions:empowered_palis_crystal"
        ],//充能青金石水晶粉

        [
            "kubejs:empowered_diamatine_crystal_dust",
            "actuallyadditions:empowered_diamatine_crystal"
        ],//充能钻石水晶粉

        [
            "kubejs:empowered_void_crystal_dust",
            "actuallyadditions:empowered_void_crystal"
        ],//充能煤晶粉

        [
            "kubejs:empowered_enori_crystal_dust",
            "actuallyadditions:empowered_enori_crystal"
        ],//充能铁晶粉

        [
            "kubejs:empowered_emeradic_crystal_dust",
            "actuallyadditions:empowered_emeradic_crystal"
        ],//充能绿宝石水晶粉
    ]

    CrusherList.forEach(([output,input])=>
        event.recipes.immersiveengineering.crusher(
            TagOutputJS.ofItemStack(output),
            input,
            3200)
        )

    //高炉燃料
    event.remove({id:"immersiveengineering:blastfurnace/fuel_charcoal"})
    event.remove({id:"immersiveengineering:blastfurnace/fuel_charcoal_block"})
    event.recipes.immersiveengineering.blast_furnace_fuel("ars_nouveau:fire_essence",600)

    //高炉
    //格式:[输出,输入,时间,炉渣];时间单位为 tick
    //炉渣位置仅填"slag"时产出炉渣,其他值或不填均不产出炉渣
    const BlastFurnaceList = [
        [
            "twilightforest:wrought_iron_bar",
            "justdirethings:ferricore_ingot",
            300,
            "slag"
        ],//锻铁锭

    ]

    BlastFurnaceList.forEach(([output,input,time,slag])=>{
        const result = TagOutputJS.ofItemStack(output)
        const ingredient = IngredientWithSizeJS.ofItemStack(input)

        if(slag === "slag") {
            event.recipes.immersiveengineering.blast_furnace(
                result,
                ingredient,
                time,
                TagOutputJS.ofItemStack("immersiveengineering:slag")
            )
        } else {
            event.recipes.immersiveengineering.blast_furnace(result,ingredient,time)
        }
    })

    //合金窑
    //格式:[输出,输入1,输入2]
    const AlloySmelterList = [

    ]

    AlloySmelterList.forEach(([output,input1,input2])=>
        event.recipes.immersiveengineering.alloy(
            TagOutputJS.ofItemStack(output),
            IngredientWithSizeJS.ofItemStack(input1),
            IngredientWithSizeJS.ofItemStack(input2))
        )

    //电弧炉
    //格式:[输出,输入,时间,能耗,炉渣,添加剂,概率副产物];时间单位为 tick
    //炉渣位置仅填"slag"时产出炉渣,其他值或不填均不产出炉渣
    const ArcFurnaceList = [
        [
            "twilightforest:wrought_iron_bar",
            "justdirethings:ferricore_ingot",
            400,
            204800,
            "slag"
        ],//锻铁锭

        [
            "immersiveengineering:ingot_hop_graphite",
            "immersiveengineering:dust_hop_graphite",
            400,
            204800,
            "slag"
        ],//高定向热解石墨锭
    ]

    ArcFurnaceList.forEach(([output,input,time,energy,slag,additives,secondaries])=>{
        if(additives || secondaries || slag) {
            event.recipes.immersiveengineering.arc_furnace(
                [TagOutputJS.ofItemStack(output)],
                IngredientWithSizeJS.ofItemStack(input),
                time,
                energy,
                additives ? additives.map(value=>IngredientWithSizeJS.ofItemStack(value)) : [],
                secondaries || [],
                slag === "slag" ? TagOutputJS.ofItemStack("immersiveengineering:slag") : undefined
            )
        } else {
            event.recipes.immersiveengineering.arc_furnace(
                [TagOutputJS.ofItemStack(output)],
                IngredientWithSizeJS.ofItemStack(input),
                time,
                energy
            )
        }
    })

    //灌装机
    //格式:[输出数组,输入数组,流体,流体量]
    const BottlingList = [
        [
            [
                "actuallyadditions:advanced_coil"
            ],
            [
                "actuallyadditions:basic_coil"
            ],
            "actuallyadditions:crystallized_oil",
            500
        ],//高级线圈
    ]

    BottlingList.forEach(([outputs,inputs,fluid,amount])=>
        event.recipes.immersiveengineering.bottling_machine(
            outputs.map(value=>TagOutputJS.ofItemStack(value)),
            inputs.map(value=>IngredientWithSizeJS.ofItemStack(value)),
            Fluid.of(fluid,amount)
        )
    )

    //搅拌机
    //格式:[输出流体,输入流体,物品输入];流体写"Nx 流体id",N 为 mB,不写默认 1000
    const MixerList = [
        [
            "1000x actuallyadditions:crystallized_oil",
            "1000x actuallyadditions:refined_canola_oil",
            "actuallyadditions:crystallized_canola_seed"
        ],//晶化油

        [
            "1000x actuallyadditions:empowered_oil",
            "1000x actuallyadditions:crystallized_oil",
            "actuallyadditions:empowered_canola_seed"
        ],//充能油
    ]

    MixerList.forEach(([output,fluid,input])=>
        event.recipes.immersiveengineering.mixer(
            toFluidStack(output),
            toFluidStack(fluid),
            [IngredientWithSizeJS.ofItemStack(input)],
            3200
        )
    )

    //挤压机
    //格式:[输入,物品输出,流体输出];物品写"Nx 物品id",流体写"Nx 流体id",不需要的那项填 null
    const SqueezerList = [
        [
            "actuallyadditions:canola",
            null,
            "80x actuallyadditions:canola_oil"
        ],//油菜
    ]

    SqueezerList.forEach(([input,item,fluid])=>{
        const recipe = {
            "type":"immersiveengineering:squeezer",
            "energy":6400,
            "input":{"item":input}
        }

        recipe.result = item ? toTagOutput(item) : []

        if(fluid) {
            recipe.fluid = toFluidJson(fluid)
        }

        event.custom(recipe)//挤压机
    })

    //工程师装配台
    //格式:[类目,"Nx 输出",输入]；不写 N 默认 1
    const BlueprintList = [
        [
            "pcb",
            "pneumaticcraft:printed_circuit_board",
            [
                "pneumaticcraft:unassembled_pcb",
                "immersiveengineering:electron_tube",
                "pneumaticcraft:transistor",
                "pneumaticcraft:capacitor"
            ]
        ],//印刷电路板

        [
            "pcb",
            "pneumaticcraft:transistor",
            [
                "3x #pneumaticcraft:wiring",
                "1x #c:dusts/redstone",
                "pneumaticcraft:plastic"
            ]
        ],//晶体管

        [
            "pcb",
            "pneumaticcraft:capacitor",
            [
                "2x #pneumaticcraft:wiring",
                "1x #c:slimeballs",
                "pneumaticcraft:plastic"
            ]
        ],//电容

        [
            "pcb",
            "3x pneumaticcraft:empty_pcb",
            [
                "2x minecraft:redstone_torch",
                "3x #pneumaticcraft:wiring",
                "pneumaticcraft:plastic"
            ]
        ],//空印刷电路板

        [
            "pcb",
            "kubejs:energy_capacitor",
            [
                "2x #pneumaticcraft:wiring",
                "actuallyadditions:restonia_crystal",
                "justdirethings:ferricore_ingot"
            ]
        ],//聚能电容

        [
            "pcb",
            "create:precision_mechanism",
            [
                "1x #c:plates/gold",
                "5x create:cogwheel",
                "5x create:large_cogwheel",
                "5x #c:nuggets/iron"
            ]
        ],//精密构件
    ]

    BlueprintList.forEach(([category,output,inputs])=>{
        const outParts = output.split("x ")
        const outCount = outParts.length > 1 ? Number(outParts[0]) : 1
        const outId = outParts.length > 1 ? outParts[1] : output

        event.custom({
            "type":"immersiveengineering:blueprint",
            "category":category,
            "inputs":inputs.map(value=>{
                const parts = value.split("x ")
                const size = parts.length > 1 ? Number(parts[0]) : 1
                const id = parts.length > 1 ? parts[1] : value
                return {
                    "basePredicate":id.startsWith("#") ? {"tag":id.slice(1)} : {"item":id},
                    "count":size
                }
            }),
            "result":{"id":outId,"count":outCount}
        })
    })

    //沉浸原油
    event.remove({id:"immersivepetroleum:distillationtower/oil"})       //原油蒸馏
    event.remove({id:"immersivepetroleum:distillationtower/kerosene"})  //煤油裂解

    event.custom({
        "type":"immersivepetroleum:distillation",
        "byproducts":[{"chance":0.25,"output":{"id":"immersivepetroleum:bitumen"}}],
        "energy":1024,
        "input":{"amount":60,"tag":"c:crude_oil"},
        "results":[
            {"amount":20,"id":"immersivepetroleum:naphtha"},
            {"amount":20,"id":"immersivepetroleum:diesel_sulfur"},
            {"amount":5,"id":"immersivepetroleum:lubricant"}
        ],
        "time":1
    })//原油

    event.custom({
        "type":"immersivepetroleum:distillation",
        "byproducts":[],
        "energy":1024,
        "input":{"amount":20,"tag":"c:naphtha"},
        "results":[
            {"amount":15,"id":"immersivepetroleum:benzol"},
            {"amount":5,"id":"immersivepetroleum:petroleum_gas"}
        ],
        "time":1
    })//石脑油重整
})

//药水配方预热
const $OnDatapackSyncEvent = Java.loadClass("net.neoforged.neoforge.event.OnDatapackSyncEvent")
const $EventPriority = Java.loadClass("net.neoforged.bus.api.EventPriority")
const IEPotionLists = ["immersiveengineering:mixer_potion_list","immersiveengineering:potion_bottling_list"]
NativeEvents.onEvent($EventPriority.HIGHEST,$OnDatapackSyncEvent,event=>{
    const manager = event.getPlayerList().getServer().getRecipeManager()
    IEPotionLists.forEach(id=>{
        try {
            manager.byKey(id).ifPresent(holder=>holder.value().getSubRecipes())
        } catch (err) {
            console.warn(`[沉浸工程药水配方预热] ${id} 失败：${err}`)
        }
    })
})
