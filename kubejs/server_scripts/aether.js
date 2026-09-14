ServerEvents.recipes(event=>{
    //毒液转化
    //格式:[输出,输入]
    const PoisonList = [
        ["deep_aether:aersmog","aether:blue_aercloud"],
        ["aether:quicksoil","aether:holystone"]
    ]

    PoisonList.forEach(([output,input])=>
        event.custom({
            "type":"deep_aether:poison_recipe",
            "ingredient":{"item":input},
            "result":{"count":1,"id":output}})
    )

    //通用天境预测产物相关
    event.shapeless(
        "8x aether:blue_berry",
        ["2x kubejs:aether_prediction","minecraft:sweet_berries"]
    )
    event.shapeless(
        "8x deep_aether:goldenleaf_berries",
        ["2x kubejs:aether_prediction","ars_nouveau:sourceberry_bush"]
    )

    const AetherConversions = [
        ["minecraft:stone","aether:holystone"],
        ["minecraft:dirt","aether:aether_dirt"],
        ["minecraft:mud","deep_aether:aether_mud"],
        ["minecraft:grass_block","aether:aether_grass_block"],
        ["minecraft:sand","aether:quicksoil"]
    ]

    AetherConversions.forEach(([input,output])=>
        event.shaped(
            `8x ${output}`,
            [
                "BBB",
                "BPB",
                "BBB"
            ],{
                B:input,
                P:"kubejs:aether_prediction"
            }
        )
    )
})
