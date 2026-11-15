//配方列表的解析：写 "Nx 物品id" / "Nx 流体id"，#开头为标签；不写数量时物品默认 1、流体默认 1000
//分五段：通用 / Lychee / 沉浸工程 / 气动 / 集成动力；MMCR 封装机器的解析与生成器在 MMCR/MMCR_recipes_common.js
//新增封装：通用的加进「通用」，只服务一个模组的加在对应段并写清给谁用

//========== 通用 ==========
//配方列表的必填字段校验：缺字段当场报错，日志里直接给出配方 id
const checkRecipe = (recipes,fields)=>{
    recipes.forEach(recipe=>{
        fields.forEach(key=>{
            if(recipe[key] === undefined) throw new Error(`${recipe.id} 缺字段 ${key}`)
        })
    })
}

const toCounted = (text,defaultCount = 1)=>{
    const match = text.match(/^(\d+)x\s+(.+)$/)

    return {"count":match ? parseInt(match[1]) : defaultCount,"id":match ? match[2] : text}
}

//物品堆：{count,id}
const toItemStack = text=>{
    if(typeof text !== "string") return text

    const {count,id} = toCounted(text)

    return {"count":count,"id":id}
}

//原料：{count,item}/{count,tag}
const toIngredient = text=>{
    if(typeof text !== "string") return text

    const {count,id} = toCounted(text)

    return id.startsWith("#") ?
        {"count":count,"tag":id.substring(1)} :
        {"count":count,"item":id}
}

//原料 JSON（不带数量）：{item}/{tag}，给只认 Ingredient 的配方用
const toIngredientJson = text=>{
    if(typeof text !== "string") return text

    const {id} = toCounted(text)

    return id.startsWith("#") ? {"tag":id.substring(1)} : {"item":id}
}

//流体栈
const toFluidStack = text=>{
    const {count,id} = toCounted(text,1000)

    return Fluid.of(id,count)
}

//流体 JSON
const toFluidJson = text=>{
    const {count,id} = toCounted(text,1000)

    return {"amount":count,"id":id}
}

//流体原料 JSON（可带标签）："Nx #tag" → {amount,tag}，"Nx id" → {amount,id}；不写数量默认 1000
const toFluidIngredient = text=>{
    if(typeof text !== "string") return text

    const {count,id} = toCounted(text,1000)

    return id.startsWith("#") ?
        {"amount":count,"tag":id.substring(1)} :
        {"amount":count,"id":id}
}

//概率产物：条目统一写 [概率,"Nx 物品id"]，转 {chance,output:{id[,count]}}（NeoForge ChanceResult 风格）
const toChanceOutput = entry=>{
    const [chance,text] = entry
    const {count,id} = toCounted(text)

    return {"chance":chance,"output":count === 1 ? {"id":id} : {"count":count,"id":id}}
}

//单值转数组
const toRecipeArray = value=>Array.isArray(value) ? value : [value]

//========== Lychee：条件构造 ==========

//维度条件
const inDimension = dimension=>({
    "type":"location",
    "predicate":{"dimension":dimension}
})

//天气条件
const inWeather = weather=>({
    "type":"weather",
    "weather":weather
})

//========== 机械动力：概率产物 ==========

//机械动力的输入：数据表写 "Nx id" / "Nx #tag"（多个写数组）。Create 自己认 "Nx id"，只有标签要转成 Ingredient
const toCreateInput = value=>{
    if(Array.isArray(value)) return value.map(entry=>toCreateInput(entry))
    if(typeof value !== "string") return value

    const {id} = toCounted(value)

    return id.startsWith("#") ? Ingredient.of(id) : value
}

//机械动力的产物：单值 "Nx id" 原样透传；概率产物写 [概率,"Nx id"]；多产物用数组；内部转 CreateItem.of
const isChanceEntry = value=>Array.isArray(value) && value.length === 2 && typeof value[0] === "number"

const toCreateOutput = value=>{
    if(isChanceEntry(value)) return CreateItem.of(value[1],value[0])
    if(!Array.isArray(value)) return value

    return value.map(entry=>isChanceEntry(entry) ? CreateItem.of(entry[1],entry[0]) : entry)
}

//========== 沉浸工程：TagOutput ==========

//沉浸工程的 TagOutput：要的是真 TagOutput 实例，JS 的 {item,count} 对象转不过去（TagOutputJS 是 server 端全局）；recipes/immersiveengineering/ 各配方文件用
const toTagOutput = text=>{
    if(typeof text !== "string") return text

    const {count,id} = toCounted(text)

    return TagOutputJS.ofItemStack(Item.of(id,count))
}

//沉浸工程的原料：同样要实例，{count,item} 转不过去；标签原料暂时没有用例
const toIngredientWithSize = (text,defaultCount = 1)=>{
    if(typeof text !== "string") return text

    const {count,id} = toCounted(text,defaultCount)

    return IngredientWithSizeJS.ofItemStack(Item.of(id,count))
}

//========== 气动工艺：热气动加工机 ==========

//热气动加工机输出：物品走 item_output，流体走 fluid_output；recipes/pneumaticcraft/thermo_plant.js 用
const toThermoPlantOutput = output=>{
    if(typeof output === "string") return {"item_output":toItemStack(output)}

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
    const {count,id} = toCounted(text)

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
    const chanceList = toRecipeArray(chances || [])
    const pairs = typeof chanceList[0] === "number" ? [chanceList] : chanceList   //只写一对时不用再套一层

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

