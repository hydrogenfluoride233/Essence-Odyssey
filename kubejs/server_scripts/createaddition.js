ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"createaddition:mixing/electrum"})                                                 //琥珀金
    event.remove({id:"createaddition:compat/immersiveengineering/constantan"})                          //康铜
    event.remove({id:"createaddition:compat/immersiveengineering/item_application/kiln_brick"})         //窑砖
    event.remove({id:"createaddition:compat/immersiveengineering/rolling/steel_ingot"})                 //钢棒
    event.remove({id:"createaddition:compat/immersiveengineering/rolling/steel_plate"})                 //钢线
    event.remove({id:/^createaddition:charging\/electrify_/})
    event.remove({id:"createaddition:compat/immersiveengineering/crushing/steel_ingot"})

    //充能
    //格式:[输出,输入]
    const ChargeList = [
        ["mekanism:ingot_steel","naturesaura:infused_iron"],
    ]

    ChargeList.forEach(([output,input])=>
        event.custom({
            "type":"createaddition:charging",
            "energy":36000,
            "ingredients":[{"item":input}],
            "max_charge_rate":360,
            "results":[{"id":output}]})
    )

    //轧制
    //格式:[输出,输入]
    const RollingList = [
        ["2x immersiveengineering:stick_netherite","minecraft:netherite_ingot"]
    ]

    RollingList.forEach(([output,input])=>
        event.custom({
            "type":"createaddition:rolling",
            "ingredients":[toIngredient(input)],
            "results":[toItemStack(output)]})
    )
})
