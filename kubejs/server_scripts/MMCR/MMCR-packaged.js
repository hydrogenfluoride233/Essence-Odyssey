//MMCR 封装机器的配方件：解析（组件 / 原料 / 产物）→ 生成器（原料 + 追加原料 + 耗电 + 时长）→ 各机器的封装
//解析给下面两台机器与 MMCR-recipes.js 共用；新增机器照「各机器」那两段的样子往下加

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

//========== 生成器 ==========

const PackagedEnergy = 1280                                             //每 tick 输入 FE
const PackagedTime = 50                                                 //统一 tick

const packagedCounters = {}                                             //每个配方池各算各的编号

const packagedNextIndex = pool=>{
    packagedCounters[pool] = (packagedCounters[pool] || 0) + 1

    return packagedCounters[pool]
}

//packagedRecipe(event,配方池,产物,原料数组,追加原料数组,配方名)
//追加原料指每台机器都要额外吃的那几样（如森林仪式的 4 份金叶粉），不给就传 []
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
            const requirement = {"type":"minecraft:item","io":"input","count":count,"item":parsed.item}

            if(parsed.components) requirement.components = parsed.components

            slots[key] = requirement
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

    const poolPath = String(pool).replace(/^mmcr:/,"")

    event.custom({
        "type":"mmcr:machine_recipe",
        "recipe_pool":pool,
        "tick_time":PackagedTime,
        "parallelized":true,
        "requirements":keys.map(key=>slots[key])
            .concat(raw)
            .concat({"type":"neoforge:energy","io":"input","fe_per_tick":PackagedEnergy})
            .concat({"type":"minecraft:item","io":"output","stack":stack})
    }).id(`mmcr:${poolPath}/${name || index}`)
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
