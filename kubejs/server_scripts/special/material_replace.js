//材料替换：把各模组配方里的原版材料批量换成包内材料（铁/金/钻石/下界合金、青金石/红石、金粒、块）
//写法 {match:"#标签" 或 "物品id", exact:true}：只比标签本身、不展开原料——展开会在冷启动读未加载的配置，整批扫描中断（见 kubejs#1206、PR #22）
//顺序：按 id 的具体条目先写，整模组的替换表在后；加新模组只加一组 [过滤器, 表]
ServerEvents.recipes(event=>{
    //按 id 的具体替换（先执行，免得被下面的整模组替换抢走）
    event.replaceInput({id:"neovitae:ara_vitae/weak_blood_orb"},"minecraft:diamond","minecraft:ghast_tear")//见习生生命宝珠
    event.replaceInput({id:"neovitae:ara_vitae/apprentice_blood_orb"},"minecraft:redstone_block","astralsorcery:starmetal_ingot")//学徒生命宝珠
    event.replaceInput({id:"neovitae:ara_vitae/magician_blood_orb"},"minecraft:gold_block","cataclysm:lacrima")//巫师生命宝珠

    //整模组替换
    //格式:[过滤器, 替换表]；替换表每项 [原样, 新物品]，原样写 "#标签" 或 "物品id"
    const MaterialReplaceList = [
        [
            {mod:"astralsorcery"},
            [
                ["#c:ingots/iron","justdirethings:ferricore_ingot"],//核源铁锭
                ["#c:ingots/gold","justdirethings:blazegold_ingot"],//烈焰金锭
                ["#c:nuggets/gold","kubejs:blazegold_nugget"],//烈焰金粒
                ["#c:gems/diamond","justdirethings:celestigem"]//苍穹晶
            ]
        ],
        [
            {mod:"appliedas"},
            [
                ["#c:ingots/iron","justdirethings:ferricore_ingot"],//核源铁锭
                ["#c:ingots/gold","justdirethings:blazegold_ingot"],//烈焰金锭
                ["#c:nuggets/gold","kubejs:blazegold_nugget"],//烈焰金粒
                ["#c:gems/diamond","justdirethings:celestigem"]//苍穹晶
            ]
        ],
        [
            {mod:"neovitae",not:{type:"neovitae:athanor"}},//奥术炉是把锭拆成粉的，排除
            [
                ["minecraft:deepslate","pneumaticcraft:reinforced_stone"],//深板岩
                ["#c:ingots/iron","justdirethings:ferricore_ingot"],//核源铁锭
                ["#c:ingots/gold","justdirethings:blazegold_ingot"],//烈焰金锭
                ["#c:ingots/netherite","justdirethings:eclipsealloy_ingot"],//蚀空合金锭
                ["#c:gems/diamond","justdirethings:celestigem"],//苍穹晶
                ["#c:gems/lapis","actuallyadditions:empowered_palis_crystal"],//充能青金石水晶
                ["#c:dusts/redstone","kubejs:empowered_restonia_crystal_dust"],//充能红石水晶粉
                ["#c:nuggets/gold","kubejs:blazegold_nugget"],//烈焰金粒
                ["#c:storage_blocks/iron","justdirethings:ferricore_block"],//核源铁块
                ["#c:storage_blocks/gold","justdirethings:blazegold_block"]//烈焰金块
            ]
        ],
        [
            {mod:"industrialforegoing"},
            [
                ["#c:ingots/iron","justdirethings:ferricore_ingot"],//核源铁锭
                ["#c:ingots/gold","justdirethings:blazegold_ingot"],//烈焰金锭
                ["#c:ingots/netherite","justdirethings:eclipsealloy_ingot"],//蚀空合金锭
                ["#c:gems/diamond","justdirethings:celestigem"],//苍穹晶
                ["#c:gems/lapis","actuallyadditions:palis_crystal"],//青金石水晶
                ["#c:dusts/redstone","actuallyadditions:restonia_crystal"],//红石水晶
                ["#c:storage_blocks/diamond","actuallyadditions:empowered_diamatine_crystal_block"]//充能钻石水晶块
            ]
        ],
        [
            {mod:"industrialforegoingsouls"},
            [
                ["#c:ingots/iron","justdirethings:ferricore_ingot"],//核源铁锭
                ["#c:ingots/gold","justdirethings:blazegold_ingot"],//烈焰金锭
                ["#c:ingots/netherite","justdirethings:eclipsealloy_ingot"],//蚀空合金锭
                ["#c:gems/diamond","justdirethings:celestigem"]//苍穹晶
            ]
        ]
    ]

    MaterialReplaceList.forEach(([filter,list])=>
        list.forEach(([from,to])=>
            event.replaceInput(filter,{match:from,exact:true},to)))
})
