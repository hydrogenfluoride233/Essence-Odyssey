ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"engineeredcompatibility:metalpress/gear_compressed_iron"})    //齿轮
    event.remove({id:"pneumaticcraft:compressed_iron_gear"})
    event.remove({id:"industrialforegoing:gold_gear"})
    event.remove({id:"industrialforegoing:iron_gear"})
    event.remove({id:"industrialforegoing:diamond_gear"})
    event.remove({id:"immersiveengineering:crafting/alloybrick"})                   //窑砖
    event.remove({id:"immersiveengineering:crafting/blastbrick"})                   //高炉砖
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

    //工作台配方
    event.replaceInput(
        {id:"immersiveengineering:crafting/cokebrick"},
        "#c:sandstone/blocks",
        "pneumaticcraft:reinforced_bricks"
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

    event.shaped(
        "8x immersiveengineering:fluid_pipe",
        ["AAA","ABA","AAA"],
        {
            A:"create:fluid_pipe",
            B:"industrialforegoing:iron_gear"
        }
    )//流体管道

    //熔炼配方
    event.blasting("immersiveengineering:slag","#c:gravels",0.5,600)

    //金属冲压机
    //格式:[输出,输入,模具]
    //能耗固定为 2400 FE
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

        [
            "immersiveengineering:ingot_hop_graphite",
            "immersiveengineering:dust_hop_graphite",
            600,
            "slag"
        ],//高定向热解石墨锭
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
        [
            "enderio:redstone_alloy_ingot",
            "minecraft:redstone",
            "minecraft:copper_ingot"
        ],//红石合金锭
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
            "kubejs:ordo_essence",
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

    //临时内容
    event.remove({id:"engineeredcompatibility:crafting_compat/pcb_blueprint"})
    event.shaped(
        'immersiveengineering:blueprint[immersiveengineering:blueprint="pcb"]',
        [
            "LKL",
            "DDD",
            "PPP"
        ],
        {
            L: "#c:ingots/compressed_iron",
            K: "#c:plates/plastic",
            D: "#c:dyes/blue",
            P: "#c:paper"
        }
    )
})
