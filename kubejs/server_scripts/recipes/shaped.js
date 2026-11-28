ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:"
    const Required = ["output","pattern","key"]

    //按输出物命名空间 A-Z 排列；id = kubejs:<命名空间>/shaped/<路径>
    const recipes = [
        //actuallyadditions
        {
            output:"actuallyadditions:basic_coil",
            pattern:["ABA","BCB","ABA"],
            key:{
                A:"twilightforest:carminite",
                B:"actuallyadditions:restonia_crystal",
                C:"immersiveengineering:wirecoil_steel",
            },
        },

        //ae2
        {
            output:"ae2:logic_processor_press",
            pattern:["GGG","GCG","GGG"],
            key:{
                G:"minecraft:gold_ingot",
                C:"ae2:not_so_mysterious_cube",
            },
        },//逻辑压印模板
        {
            output:"ae2:engineering_processor_press",
            pattern:["GGG","GCG","GGG"],
            key:{
                G:"minecraft:diamond",
                C:"ae2:not_so_mysterious_cube",
            },
        },//工程压印模板
        {
            output:"ae2:silicon_press",
            pattern:["GGG","GCG","GGG"],
            key:{
                G:"ae2:silicon",
                C:"ae2:not_so_mysterious_cube",
            },
        },//硅压印模板
        {
            output:"ae2:calculation_processor_press",
            pattern:["GGG","GCG","GGG"],
            key:{
                G:"ae2:charged_certus_quartz_crystal",
                C:"ae2:not_so_mysterious_cube",
            },
        },//运算压印模板

        //aether
        {
            output:"aether:altar",
            pattern:["AAA","ABA","AAA"],
            key:{
                A:"#aether:holystone",
                B:"deep_aether:skyjade",
            },
        },//穹玉晶做神能炉
        {
            output:"8x aether:holystone",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:stone",P:"kubejs:aether_prediction"},
        },
        {
            output:"8x aether:aether_dirt",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:dirt",P:"kubejs:aether_prediction"},
        },
        {
            output:"8x aether:aether_grass_block",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:grass_block",P:"kubejs:aether_prediction"},
        },
        {
            output:"8x aether:quicksoil",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:sand",P:"kubejs:aether_prediction"},
        },

        //create
        {
            output:"create:empty_blaze_burner",
            pattern:["ABA","BCB","ABA"],
            key:{
                A:"immersiveengineering:stick_iron",
                B:"ars_nouveau:fire_essence",
                C:"minecraft:netherrack",
            },
        },

        //deep_aether
        {
            output:"8x deep_aether:aether_mud",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:mud",P:"kubejs:aether_prediction"},
        },

        //eternal_starlight
        {
            output:"8x eternal_starlight:grimstone",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:stone",P:"kubejs:eternal_starlight_prediction"},
        },
        {
            output:"8x eternal_starlight:cobbled_grimstone",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:cobblestone",P:"kubejs:eternal_starlight_prediction"},
        },
        {
            output:"8x eternal_starlight:nightfall_dirt",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:dirt",P:"kubejs:eternal_starlight_prediction"},
        },
        {
            output:"8x eternal_starlight:nightfall_mud",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:mud",P:"kubejs:eternal_starlight_prediction"},
        },
        {
            output:"8x eternal_starlight:twilight_sand",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:sand",P:"kubejs:eternal_starlight_prediction"},
        },
        {
            output:"8x eternal_starlight:voidstone",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:deepslate",P:"kubejs:eternal_starlight_prediction"},
        },
        {
            output:"8x eternal_starlight:cobbled_voidstone",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:cobbled_deepslate",P:"kubejs:eternal_starlight_prediction"},
        },
        {
            output:"8x eternal_starlight:dusted_gravel",
            pattern:["BBB","BPB","BBB"],
            key:{B:"minecraft:gravel",P:"kubejs:eternal_starlight_prediction"},
        },
        //immersiveengineering
        {
            output:"8x immersiveengineering:fluid_pipe",
            pattern:["AAA","ABA","AAA"],
            key:{A:"create:fluid_pipe",B:"kubejs:steel_gear"},
        },//流体管道
        {
            output:'immersiveengineering:blueprint[immersiveengineering:blueprint="pcb"]',
            pattern:["LKL","DDD","PPP"],
            key:{
                L:"pneumaticcraft:printed_circuit_board",
                K:"pneumaticcraft:pcb_blueprint",
                D:"#c:dyes/blue",
                P:"#c:paper",
            },
        },//工程师蓝图

        //kubejs
        {
            output:"kubejs:infinity_lava_cell",
            pattern:["CLC","LXL","III"],
            key:{
                C:"ae2:quartz_glass",
                L:"minecraft:lava_bucket",
                X:"ae2:cell_component_16k",
                I:"#c:gems/diamond",
            },
        },//无限熔岩元件

        //justdirethings
        {
            output:"justdirethings:ferricore_ingot",
            pattern:["AAA","AAA","AAA"],
            key:{A:"kubejs:ferricore_nugget"},
        },
        {
            output:"justdirethings:blazegold_ingot",
            pattern:["AAA","AAA","AAA"],
            key:{A:"kubejs:blazegold_nugget"},
        },

        //mekanismgenerators
        {
            output:"mekanismgenerators:turbine_blade",
            pattern:["ABA","BCB","ABA"],
            key:{
                A:"pneumaticcraft:turbine_rotor",
                B:"immersiveengineering:plate_steel",
                C:"mekanism:alloy_atomic",
            },
        },

        //occultism
        {
            output:"2x occultism:iesnium_ingot",
            pattern:["AAA","A A","AAA"],
            key:{A:"mysticalagriculture:iesnium_essence"},
        },
        //pneumaticcraft
        {
            output:"8x pneumaticcraft:pressure_chamber_wall",
            pattern:["AAA","ABA","AAA"],
            key:{
                A:"pneumaticcraft:reinforced_bricks",
                B:"kubejs:ordo_essence",
            },
        },//压力室墙壁
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>{
        const [namespace,rawPath] = toCounted(recipe.output).id.split(":")
        const path = rawPath.split("[")[0]

        event.shaped(
            recipe.output,
            recipe.pattern,
            recipe.key
        )
        .id(`${id_prefix}${namespace}/shaped/${path}`)
    })

    //要素块
    Aspects.forEach(({id:ess})=>
        event.shaped(
            `kubejs:block_${ess}`,
            ["EE","EE"],
            {E:`kubejs:crystal_${ess}`}
        )
        .id(`kubejs:kubejs/shaped/block_${ess}`))
})
