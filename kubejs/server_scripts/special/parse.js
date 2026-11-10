//配方列表的解析：写 "Nx 物品id" / "Nx 流体id"，#开头为标签；不写数量时物品默认 1、流体默认 1000
//分两段：通用（哪个模组都能用）｜模组专用适配（只服务那台机器，改之前先看调用方）；MMCR 封装机器的解析与生成器在 MMCR/MMCR-recipes-common.js
//新增封装：通用的加进「通用」，只服务一个模组的加在对应段并写清给谁用

//========== 通用 ==========
const parseCounted = (text,defaultCount=1)=>{
    const match=text.match(/^(\d+)x\s+(.+)$/)

    return {"count":match ? parseInt(match[1]) : defaultCount,"id":match ? match[2] : text}
}

//物品堆：{count,id}
const toItemStack = text=>{
    if(typeof text!=="string") return text

    const {count,id}=parseCounted(text)

    return {"count":count,"id":id}
}

//原料：{count,item}/{count,tag}
const toIngredient = text=>{
    if(typeof text!=="string") return text

    const {count,id}=parseCounted(text)

    return id.startsWith("#") ?
        {"count":count,"tag":id.substring(1)} :
        {"count":count,"item":id}
}

//原料 JSON（不带数量）：{item}/{tag}，给只认 Ingredient 的配方用
const toIngredientJson = text=>{
    if(typeof text!=="string") return text

    const {id}=parseCounted(text)

    return id.startsWith("#") ? {"tag":id.substring(1)} : {"item":id}
}

//流体栈
const toFluidStack = text=>{
    const {count,id}=parseCounted(text,1000)

    return Fluid.of(id,count)
}

//流体 JSON
const toFluidJson = text=>{
    const {count,id}=parseCounted(text,1000)

    return {"amount":count,"id":id}
}

//单值转数组
const asRecipeArray = value=>Array.isArray(value) ? value : [value]

//========== 沉浸工程：TagOutput ==========

//沉浸工程的 TagOutput：物品 {item,count}，标签 {tag}；没有产物时列表里写 []；immersiveengineering.js 用
const toTagOutput = text=>{
    if(typeof text!=="string") return text

    const {count,id}=parseCounted(text)

    return id.startsWith("#") ?
        {"tag":id.substring(1)} :
        {"item":id,"count":count}
}

//========== 气动工艺：热气动加工机 ==========

//热气动加工机输出：物品走 item_output，流体走 fluid_output；pneumaticcraft.js 与 special/aspects.js 用
const parseThermoPlantOutput = output=>{
    if(typeof output==="string") return {"item_output":toItemStack(output)}

    if(output.fluid) return {
        "fluid_output":{
            "id":output.fluid,
            "amount":output.amount
        }
    }

    return output
}

//========== 集成动力：挤压机 ==========

//挤压机的产物：物品 {item:{id,count}}，标签 {tag:{tag,count}}
const squeezerStack = text=>{
    const {count,id}=parseCounted(text)

    return id.startsWith("#") ?
        {"tag":{"tag":id.substring(1),"count":count}} :
        {"item":{"id":id,"count":count}}
}

//挤压机配方 JSON：主产物 + 概率副产物（最多两种）+ 可选流体
const squeezerJson = (type,input,output,chances,fluid,duration)=>{
    const recipe = {
        "type":type,
        "input_item":toIngredientJson(input)
    }

    const outputs = output ? [squeezerStack(output)] : []
    const chanceList = asRecipeArray(chances || [])
    const pairs = typeof chanceList[0]==="number" ? [chanceList] : chanceList   //只写一对时不用再套一层

    pairs.slice(0,2).forEach(([chance,item])=>
        outputs.push(Object.assign(squeezerStack(item),{"chance":chance})))

    if(outputs.length) recipe.output_items = outputs
    if(fluid) recipe.output_fluid = toFluidJson(fluid)
    if(duration) recipe.duration = duration

    return recipe
}

const SqueezerTime = 100                                                //电动挤压机的默认时长（tick）

//挤压机：主产物 + 概率副产物 + 流体
//格式:[输入,主产物,副产物数组,流体]；副产物写 [[概率,"Nx 物品id"],…]，最多两种；不需要的填 null
const squeezer = (event,input,output,chances,fluid)=>
    event.custom(squeezerJson("integrateddynamics:squeezer",input,output,chances,fluid))

//电动挤压机：同上，末位多一个时长（tick）
const mechanicalSqueezer = (event,input,output,chances,fluid,duration)=>
    event.custom(squeezerJson("integrateddynamics:mechanical_squeezer",input,output,chances,fluid,duration || SqueezerTime))

