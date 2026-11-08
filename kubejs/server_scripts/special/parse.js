//配方列表的通用解析：写 "Nx 物品id" / "Nx 流体id"，#开头为标签；不写数量时物品默认 1、流体默认 1000
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

//沉浸工程的 TagOutput：物品 {item,count}，标签 {tag}；没有产物时列表里写 []
const toTagOutput = text=>{
    if(typeof text!=="string") return text

    const {count,id}=parseCounted(text)

    return id.startsWith("#") ?
        {"tag":id.substring(1)} :
        {"item":id,"count":count}
}

//热气动加工机输出：物品走 item_output，流体走 fluid_output
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

//挤压机的产物：物品 {item:{id,count}}，标签 {tag:{tag,count}}
const squeezerStack = text=>{
    const {count,id}=parseCounted(text)

    return id.startsWith("#") ?
        {"tag":{"tag":id.substring(1),"count":count}} :
        {"item":{"id":id,"count":count}}
}

//挤压机配方 JSON：主产物 + 概率副产物（最多两种）+ 可选流体
const squeezerJson = (type,input,output,chances,fluid,duration)=>{
    const {id}=parseCounted(input)

    const recipe = {
        "type":type,
        "input_item":id.startsWith("#") ? {"tag":id.substring(1)} : {"item":id}
    }

    const outputs = output ? [squeezerStack(output)] : []

    asRecipeArray(chances || []).slice(0,2).forEach(([chance,item])=>
        outputs.push(Object.assign(squeezerStack(item),{"chance":chance})))

    if(outputs.length===0 && !fluid) return null                      //挤压机至少要有一个产物

    if(outputs.length) recipe.output_items = outputs
    if(fluid) recipe.output_fluid = toFluidJson(fluid)
    if(duration) recipe.duration = duration

    return recipe
}

const SqueezerTime = 100                                                //电动挤压机的默认时长（tick）

//挤压机：主产物 + 概率副产物 + 流体
//格式:[输入,主产物,副产物数组,流体]；副产物写 [[概率,"Nx 物品id"],…]，最多两种；不需要的填 null
const squeezer = (event,input,output,chances,fluid)=>{
    const recipe = squeezerJson("integrateddynamics:squeezer",input,output,chances,fluid)

    if(recipe) event.custom(recipe)
}

//电动挤压机：同上，末位多一个时长（tick）
const mechanicalSqueezer = (event,input,output,chances,fluid,duration)=>{
    const recipe = squeezerJson("integrateddynamics:mechanical_squeezer",input,output,chances,fluid,duration || SqueezerTime)

    if(recipe) event.custom(recipe)
}
//带数据组件的物品：MMCR 配方里原料写 components 一级字段，产物写 ItemStack 的 components
//"id[组件={字段:'值'}]" → {id, components}；解析不了返回 null
const packagedComponents = text=>{
    const start = text.indexOf("[")

    if(start<0) return null

    const inner = text.substring(start+1, text.lastIndexOf("]"))
    const match = inner.match(/^([a-z0-9_.:/-]+)\s*=\s*\{(.*)\}$/)

    if(!match) return null

    const fields = {}

    match[2].split(",").forEach(pair=>{
        const kv = pair.match(/^\s*([a-z0-9_.\/-]+)\s*:\s*(?:'([^']*)'|"([^"]*)"|([^,\s]+))\s*$/)

        if(!kv) return

        const value = kv[2]!==undefined ? kv[2] : kv[3]!==undefined ? kv[3] : kv[4]

        fields[kv[1]] = /^-?\d+$/.test(value) ? parseInt(value)
            : value=="true" ? true
            : value=="false" ? false
            : value
    })

    const components = {}
    components[match[1]] = fields

    return {"id":text.substring(0,start),"components":components}
}

//{组件id:{字段:值}} → MMCR 的 components 字段
const packagedPredicates = components=>{
    const result = {}

    Object.keys(components).forEach(key=>
        result[key] = {"type":"exact","value":components[key]})

    return result
}

//原料 → {item: Ingredient JSON, components?: ..., count: 数量}
const packagedIngredient = value=>{
    const raw = Array.isArray(value) ? value[0] : value

    if(!raw) return null

    if(typeof raw==="string"){
        const {count,id}=parseCounted(raw)

        if(id.startsWith("#")) return {"item":{"tag":id.substring(1)},"count":count}

        const parsed = packagedComponents(id)

        return parsed ?
            {"item":{"item":parsed.id},"components":packagedPredicates(parsed.components),"count":count} :
            {"item":{"item":id},"count":count}
    }

    const count = raw.count || 1

    if(raw.tag) return {"item":{"tag":raw.tag},"count":count}

    //item 是单数；items 可能是字符串、数组或单个对象（productivebees:component 就是字符串）
    const rawId = typeof raw.item==="string" ? raw.item
        : typeof raw.items==="string" ? raw.items
        : Array.isArray(raw.items) && raw.items.length ? raw.items[0]
        : null

    if(!rawId) return null

    const components = raw.components || (packagedComponents(rawId) || {}).components

    return components ?
        {"item":{"item":rawId},"components":packagedPredicates(components),"count":count} :
        {"item":{"item":rawId},"count":count}
}

//产物 → ItemStack JSON
const packagedStack = value=>{
    if(typeof value==="string"){
        const {count,id}=parseCounted(value)
        const parsed = packagedComponents(id)

        return parsed ?
            {"count":count,"id":parsed.id,"components":parsed.components} :
            {"count":count,"id":id}
    }

    if(value && value.id) return Object.assign({"count":value.count || 1}, value)

    return null
}
