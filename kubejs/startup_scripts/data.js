//注册用数据（startup 脚本）：要素的颜色与中英文名、能倍矿的矿石清单
//要素数据
const Aspects = [
    {id:"aqua",       color:"#3edcff", name:"水"},
    {id:"ignis",      color:"#ff5a01", name:"火"},
    {id:"terra",      color:"#56c000", name:"地"},
    {id:"aer",        color:"#ffff7e", name:"风"},
    {id:"perditio",   color:"#626262", name:"混沌"},
    {id:"ordo",       color:"#d8d7f0", name:"秩序"},
    {id:"vapor",      color:"#ffffff", name:"蒸汽"},
    {id:"victus",     color:"#fc1111", name:"生命"},
    {id:"tempestas",  color:"#4ba8c9", name:"气候"},
    {id:"mortuus",    color:"#000000", name:"死亡"},
    {id:"aestus",     color:"#2a9d8f", name:"潮汐"},
    {id:"fervor",     color:"#ffa500", name:"熔岩"},
    {id:"lux",        color:"#fff429", name:"光明"},
    {id:"gelum",      color:"#e1ffff", name:"寒霜"},
    {id:"potentia",   color:"#7bdfea", name:"能量"},
    {id:"vitreus",    color:"#40ffff", name:"晶体"},
    {id:"vitium",     color:"#5500dd", name:"腐化"},
    {id:"metallum",   color:"#b5b5cd", name:"金属"},
    {id:"vacuos",     color:"#2d1e33", name:"虚空"},
    {id:"motus",      color:"#94e0e8", name:"移动"},
    {id:"permutatio", color:"#588558", name:"交换"},
]

//矿石清单
const Ores = [
    {ore:"zinc",     dirty:"#919a86", clean:"#a9c9a7"},
    {ore:"iesnium",  dirty:"#30434c", clean:"#709db2"},
    {ore:"nickel",   dirty:"#818c68", clean:"#b4bf9a"},
    {ore:"aluminum", dirty:"#587487", clean:"#9cb4c1"},
]
