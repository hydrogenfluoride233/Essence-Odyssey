//村民交易统一在这里改；目前涉及 AE2、实用拓展、沉浸工程

//AE2：福鲁伊克斯研究员不再出售压印模板
MoreJS.villagerTrades(event=>{
    //格式:[压印模板]
    const PressList = [
        "ae2:calculation_processor_press",  //运算压印模板
        "ae2:engineering_processor_press",  //工程压印模板
        "ae2:logic_processor_press",        //逻辑压印模板
        "ae2:silicon_press",                //硅压印模板
        "ae2:name_press"                    //名称压印模板
    ]

    PressList.forEach(id=>
        event.removeTrades({
            professions:["ae2:fluix_researcher"],
            output:id
        }))

    //实用拓展、MEGA、沉浸工程的自定义交易类：同样从交易表里删，JER 才不会显示
    //格式:[职业名,等级,产物]
    const CustomList = [
        ["engineer", 3, "actuallyadditions:wood_casing"],               //木质外壳
        ["engineer", 4, "actuallyadditions:iron_casing"],               //铁制外壳
        ["ae2:fluix_researcher", 5, "megacells:accumulation_processor_press"], //累积压印模板
        ["immersiveengineering:machinist", 2, "immersiveengineering:component_iron"],   //铁机械零件
        ["immersiveengineering:machinist", 3, "immersiveengineering:light_engineering"],//轻型工程块
        ["immersiveengineering:machinist", 3, "immersiveengineering:component_steel"],  //钢机械零件
        ["immersiveengineering:machinist", 3, "immersiveengineering:fluid_pipe"],       //流体管道
        ["immersiveengineering:machinist", 4, "immersiveengineering:heavy_engineering"] //重型工程块
    ]

    const RandomSource = Java.loadClass("net.minecraft.util.RandomSource")

    event.forEachTrades((list, level, profession)=>{
        CustomList.forEach(([name, lvl, output])=>{
            if (profession.name() != name || level != lvl) return

            let rnd = RandomSource.create()
            for (let i = list.size()-1; i >= 0; i--) {
                let offer
                try {
                    offer = list.get(i).getOffer(null, rnd)
                } catch (e) {
                    continue    //原版交易要实体才能算价，跳过
                }
                if (offer != null && offer.getOutput().id == output) list.remove(i)
            }
        })
    })
})

//实用拓展的工程师、MEGA 的累积压印模板：都是模组自定义的 ItemListing，removeTrades 匹配不到
//打开交易界面时直接从报价列表里删掉（会随村民存档保存）
MoreJS.playerStartTrading(event=>{
    //格式:[产物]
    const RemoveList = [
        "actuallyadditions:wood_casing",            //木质外壳
        "actuallyadditions:iron_casing",            //铁制外壳
        "megacells:accumulation_processor_press",   //累积压印模板
        "immersiveengineering:component_iron",      //铁机械零件
        "immersiveengineering:light_engineering",   //轻型工程块
        "immersiveengineering:component_steel",     //钢机械零件
        "immersiveengineering:fluid_pipe",          //流体管道
        "immersiveengineering:heavy_engineering"    //重型工程块
    ]

    const offers = event.merchant.getOffers()
    for (let i = offers.size()-1; i >= 0; i--) {
        if (RemoveList.includes(offers.get(i).getOutput().id)) {
            offers.remove(i)
        }
    }
})
