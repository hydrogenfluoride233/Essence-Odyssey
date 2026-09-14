const parseCARecipeInput = ingredient=>{
    if(typeof ingredient!=="string") return ingredient

    const match=ingredient.match(/^(\d+)x\s+(.+)$/)
    const count=match ? parseInt(match[1]) : 1
    const id=match ? match[2] : ingredient

    return id.startsWith("#") ?
        {"count":count,"tag":id.substring(1)} :
        {"count":count,"item":id}
}

const parseCARecipeResult = result=>{
    if(typeof result!=="string") return result

    const match=result.match(/^(\d+)x\s+(.+)$/)
    return {
        "count":match ? parseInt(match[1]) : 1,
        "id":match ? match[2] : result
    }
}

ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"createaddition:mixing/electrum"})                                                 //琥珀金
    event.remove({id:"createaddition:compat/immersiveengineering/constantan"})                          //康铜
    event.remove({id:"createaddition:compat/immersiveengineering/item_application/kiln_brick"})         //窑砖
    event.remove({id:"createaddition:compat/immersiveengineering/rolling/steel_ingot"})                 //钢棒
    event.remove({id:/^createaddition:charging\/electrify_/})

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
            "ingredients":[parseCARecipeInput(input)],
            "results":[parseCARecipeResult(output)]})
    )
})
