//全部要素
const Aspects = [
    {id:"aqua",       color:"#3edcff", name_zh:"水",   name_en:"water"   },
    {id:"ignis",      color:"#ff5a01", name_zh:"火",   name_en:"fire"    },
    {id:"terra",      color:"#56c000", name_zh:"地",   name_en:"earth"   },
    {id:"aer",        color:"#ffff7e", name_zh:"风",   name_en:"air"     },
    {id:"perditio",   color:"#626262", name_zh:"混沌", name_en:"chaos"   },
    {id:"ordo",       color:"#d8d7f0", name_zh:"秩序", name_en:"order"   },
    {id:"vapor",      color:"#ffffff", name_zh:"蒸汽", name_en:"steam"   },
    {id:"victus",     color:"#fc1111", name_zh:"生命", name_en:"life"    },
    {id:"tempestas",  color:"#4ba8c9", name_zh:"气候", name_en:"weather" },
    {id:"mortuus",    color:"#000000", name_zh:"死亡", name_en:"death"   },
    {id:"aestus",     color:"#2a9d8f", name_zh:"潮汐", name_en:"tide"    },
    {id:"fervor",     color:"#ffa500", name_zh:"熔岩", name_en:"magma"   },
    {id:"lux",        color:"#fff429", name_zh:"光明", name_en:"light"   },
    {id:"gelum",      color:"#e1ffff", name_zh:"寒霜", name_en:"frost"   },
    {id:"potentia",   color:"#7bdfea", name_zh:"能量", name_en:"energy"  },
    {id:"vitreus",    color:"#40ffff", name_zh:"晶体", name_en:"vitreous"},
    {id:"vitium",     color:"#5500dd", name_zh:"腐化", name_en:"taint"   },
    {id:"metallum",   color:"#b5b5cd", name_zh:"金属", name_en:"metal"   },
    {id:"vacuos",     color:"#2d1e33", name_zh:"虚空", name_en:"void"    },
    {id:"motus",      color:"#94e0e8", name_zh:"移动", name_en:"motion"  },
    {id:"permutatio", color:"#588558", name_zh:"交换", name_en:"exchange"},
]

//元始要素
//essence＝魔法精华来源模组｜scribe＝铭文工具来源模组｜token＝印记来源模组和名称
const PrimaryAspects = [
    {id:"aqua",     name:"water",    essence:"ars_nouveau", scribe:"neovitae", token:{mod:"naturesaura", basic:"sorrow",    advance:"grief"     }},
    {id:"ignis",    name:"fire",     essence:"ars_nouveau", scribe:"neovitae", token:{mod:"naturesaura", basic:"anger",     advance:"rage"      }},
    {id:"terra",    name:"earth",    essence:"ars_nouveau", scribe:"neovitae", token:{mod:"naturesaura", basic:"fear",      advance:"terror"    }},
    {id:"aer",      name:"air",      essence:"ars_nouveau", scribe:"neovitae", token:{mod:"naturesaura", basic:"joy",       advance:"euphoria"  }},
    {id:"perditio", name:"perditio", essence:"kubejs",      scribe:"kubejs",   token:{mod:"kubejs",      basic:"confusion", advance:"delirium"  }},
    {id:"ordo",     name:"ordo",     essence:"kubejs",      scribe:"kubejs",   token:{mod:"kubejs",      basic:"serenity",  advance:"equanimity"}},
]

//二级要素
const SecondaryAspects = [
    {id:"vapor",      from:["aqua",    "ignis"   ]},
    {id:"victus",     from:["aqua",    "terra"   ]},
    {id:"tempestas",  from:["aqua",    "aer"     ]},
    {id:"mortuus",    from:["aqua",    "perditio"]},
    {id:"aestus",     from:["aqua",    "ordo"    ]},
    {id:"fervor",     from:["ignis",   "terra"   ]},
    {id:"lux",        from:["ignis",   "aer"     ]},
    {id:"gelum",      from:["ignis",   "perditio"]},
    {id:"potentia",   from:["ignis",   "ordo"    ]},
    {id:"vitreus",    from:["terra",   "aer"     ]},
    {id:"vitium",     from:["terra",   "perditio"]},
    {id:"metallum",   from:["terra",   "ordo"    ]},
    {id:"vacuos",     from:["aer",     "perditio"]},
    {id:"motus",      from:["aer",     "ordo"    ]},
    {id:"permutatio", from:["perditio","ordo"    ]},
]

//矿石处理
const MetalConfig = [
    {
        name:"zinc",
        raw_mod:"create",
        raw_item:"raw_zinc",
        raw_block:"raw_zinc_block",
        dust:"neovitae:zinc_dust",
        ingot:"create:zinc_ingot",
        secondary_dust:"mekanism:dust_copper",
    },
    {
        name:"iesnium",
        raw_mod:"occultism",
        raw_item:"raw_iesnium",
        raw_block:"raw_iesnium_block",
        dust:"occultism:iesnium_dust",
        ingot:"occultism:iesnium_ingot",
        secondary_dust:"occultism:silver_dust",
    },
    {
        name:"nickel",
        raw_mod:"immersiveengineering",
        raw_item:"raw_nickel",
        raw_block:"raw_block_nickel",
        dust:"immersiveengineering:dust_nickel",
        ingot:"immersiveengineering:ingot_nickel",
        secondary_dust:"mekanism:dust_iron",
    },
    {
        name:"aluminum",
        raw_mod:"immersiveengineering",
        raw_item:"raw_aluminum",
        raw_block:"raw_block_aluminum",
        dust:"immersiveengineering:dust_aluminum",
        ingot:"immersiveengineering:ingot_aluminum",
        secondary_dust:"mekanism:dust_iron",
    },
]

//实用拓展六种水晶：id＝AA 的水晶短名｜ore＝对应的矿石（拼 c:ores/<ore>）｜block＝灵气祭坛炼水晶块用的原版方块
const Crystals = [
    {id:"restonia",  ore:"redstone", block:"minecraft:redstone_block"},
    {id:"palis",     ore:"lapis",    block:"minecraft:lapis_block"},
    {id:"diamatine", ore:"diamond",  block:"minecraft:diamond_block"},
    {id:"void",      ore:"coal",     block:"minecraft:coal_block"},
    {id:"enori",     ore:"iron",     block:"minecraft:iron_block"},
    {id:"emeradic",  ore:"emerald",  block:"minecraft:emerald_block"},
]
