//MMCR 机器配方的通用生成：原料 + 追加固定原料 + 耗电 + 固定时长 → 产物
//带数据组件的物品（气息瓶那种）按组件形态拼 JSON

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
