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
