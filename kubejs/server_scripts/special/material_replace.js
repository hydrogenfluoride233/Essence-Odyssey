//材料替换：把各模组配方里的原版材料批量换成包内材料
//① 统一表：模组表里的每个模组都套用；② 模组表：过滤器 + 该模组额外的替换
//每条 {match:"#标签" 或 "物品id", exact:true}：只比标签本身、不展开原料（不展开才不会在冷启动读未加载的配置，见 kubejs#1206）
ServerEvents.recipes(event=>{
    //按 id 的具体条目（先执行，免得被整模组替换抢走）
    event.replaceInput({id:"neovitae:ara_vitae/weak_blood_orb"},"minecraft:diamond","minecraft:ghast_tear")//见习生生命宝珠
    event.replaceInput({id:"neovitae:ara_vitae/apprentice_blood_orb"},"minecraft:redstone_block","astralsorcery:starmetal_ingot")//学徒生命宝珠
    event.replaceInput({id:"neovitae:ara_vitae/magician_blood_orb"},"minecraft:gold_block","cataclysm:lacrima")//巫师生命宝珠

    //统一替换：每个模组都执行
    const CommonSwaps = [
        ["#c:ingots/iron","justdirethings:ferricore_ingot"],//核源铁锭
        ["#c:ingots/gold","justdirethings:blazegold_ingot"],//烈焰金锭
        ["#c:gems/diamond","justdirethings:celestigem"]//苍穹晶
    ]

    //模组表：格式:[过滤器, 额外替换]；额外替换只作用于该模组，不需要就写 []
    const ModSwaps = [
        [
            {mod:"astralsorcery"},
            [
                ["#c:nuggets/gold","kubejs:blazegold_nugget"]//烈焰金粒
            ]
        ],
        [
            {mod:"appliedas"},
            [
                ["#c:nuggets/gold","kubejs:blazegold_nugget"]//烈焰金粒
            ]
        ],
        [
            {mod:"neovitae",not:{type:"neovitae:athanor"}},//奥术炉是把锭拆成粉的，排除
            [
                ["minecraft:deepslate","pneumaticcraft:reinforced_stone"],//深板岩
                ["#c:ingots/netherite","justdirethings:eclipsealloy_ingot"],//蚀空合金锭
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
                ["#c:ingots/netherite","justdirethings:eclipsealloy_ingot"],//蚀空合金锭
                ["#c:gems/lapis","actuallyadditions:palis_crystal"],//青金石水晶
                ["#c:dusts/redstone","actuallyadditions:restonia_crystal"],//红石水晶
                ["#c:storage_blocks/diamond","actuallyadditions:empowered_diamatine_crystal_block"]//充能钻石水晶块
            ]
        ],
        [
            {mod:"industrialforegoingsouls"},
            [
                ["#c:ingots/netherite","justdirethings:eclipsealloy_ingot"]//蚀空合金锭
            ]
        ]
    ]

    ModSwaps.forEach(([filter,extra])=>
        CommonSwaps.concat(extra).forEach(([from,to])=>
            event.replaceInput(filter,{match:from,exact:true},to)))
})
