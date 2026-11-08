//MMCR 配方的公用件：解析（组件 / 原料 / 产物）→ 需求件（物品 / 魔源 / 能量）→ 生成器 → 各机器的封装
//配方条目仍由各机器的列表提供（MMCR-recipes.js 等），这里只放写法；新增机器照「各机器」的样子加

//========== 解析 ==========

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

//========== 需求件 ==========
//MMCR 的 requirements 一项一件：{type,io,…}；物品输入/产物、魔源、能量各一条

//物品输入：{type,io,count,item,components?}
const mmcrItemInput = value=>{
    const parsed = packagedIngredient(value)

    if(!parsed) return null

    const requirement = {"type":"minecraft:item","io":"input","count":parsed.count || 1,"item":parsed.item}

    if(parsed.components) requirement.components = parsed.components

    return requirement
}

//物品输出：{type,io,stack}
const mmcrStackOutput = stack=>({"type":"minecraft:item","io":"output","stack":stack})

const mmcrItemOutput = value=>{
    const stack = packagedStack(value)

    return stack ? mmcrStackOutput(stack) : null
}

//魔源、能量
const mmcrSourceInput = amount=>({"type":"ars_nouveau:source","io":"input","amount":amount})
const mmcrEnergyInput = fe=>({"type":"neoforge:energy","io":"input","fe_per_tick":fe})

//========== 生成器 ==========
const PackagedEnergy = 1280                                             //每 tick 输入 FE
const PackagedTime = 50                                                 //统一 tick

const packagedCounters = {}                                             //每个配方池各算各的编号

const packagedNextIndex = pool=>{
    packagedCounters[pool] = (packagedCounters[pool] || 0) + 1

    return packagedCounters[pool]
}

//mmcrRecipe(event,配方池,需求数组,时长,配方名)：所有 MMCR 配方最后都走这里
const mmcrRecipe = (event,pool,requirements,tick,name)=>{
    if(!requirements || requirements.length===0) return

    const poolPath = String(pool).replace(/^mmcr:/,"")

    event.custom({
        "type":"mmcr:machine_recipe",
        "recipe_pool":pool,
        "tick_time":tick,
        "parallelized":true,
        "requirements":requirements
    }).id(`mmcr:${poolPath}/${name}`)
}

//packagedRecipe(event,配方池,产物,原料数组,追加原料数组,配方名)
//追加原料指每台机器都要额外吃的那几样（如森林仪式的 4 份金叶粉），不给就传 []；同一种原料自动合并数量
const packagedRecipe = (event,pool,output,inputs,extra,name)=>{
    const stack = packagedStack(output)

    if(!stack || !inputs || inputs.length===0) return

    const slots = {}
    const keys = []

    const push = value=>{
        const parsed = packagedIngredient(value)

        if(!parsed) return

        const key = JSON.stringify([parsed.item, parsed.components || null])  //数量不进键
        const count = parsed.count || 1

        if(slots[key]) slots[key].count += count
        else {
            slots[key] = {"type":"minecraft:item","io":"input","count":count,"item":parsed.item}

            if(parsed.components) slots[key].components = parsed.components

            keys.push(key)
        }
    }

    inputs.forEach(push)

    const raw = []                                                      //原样追加的需求（魔源之类）
    const extras = extra || []

    extras.forEach(value=>{
        if(value && typeof value==="object" && value.type){ raw.push(value); return }

        push(value)
    })

    if(keys.length===0) return

    const index = packagedNextIndex(pool)

    mmcrRecipe(
        event,
        pool,
        keys.map(key=>slots[key])
            .concat(raw)
            .concat([mmcrEnergyInput(PackagedEnergy), mmcrStackOutput(stack)]),
        PackagedTime,
        name || index
    )
}

//========== 各机器 ==========

//封装森林仪式：原料 + 树苗 + 4 份金叶粉
const packagedTreeRitual = (event,output,inputs,sapling,name)=>
    packagedRecipe(event,"mmcr:packaged_tree_ritual",output,inputs.concat([sapling]),["4x naturesaura:gold_powder"],name)

//封装自然祭坛：原料 + 魔源（灵气 ÷ 30 后向上取整到 50）+ 机器运转电
const packagedNatureAltar = (event,output,input,aura,name)=>{
    const source = Math.max(50, Math.ceil(Math.ceil(aura / 30) / 50) * 50)   //取整到 50 的倍数

    return packagedRecipe(
        event,
        "mmcr:packaged_nature_altar",
        output,
        [input],
        [{"type":"ars_nouveau:source","io":"input","amount":source}],
        name
    )
}

//工业灌注室：原料 + 魔源 + 产物，40 tick
const mmcrImbuement = (event,input,output,source,name)=>{
    const requirements = [mmcrItemInput(input),mmcrSourceInput(source),mmcrItemOutput(output)]

    if(requirements.some(value=>!value)) return

    mmcrRecipe(event,"mmcr:industrial_imbuement",requirements,40,name)
}
