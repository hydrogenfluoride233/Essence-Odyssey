ServerEvents.recipes(event=>{
    //配方移除
    event.remove({id:"mmcr:modularium"})    //模块化合金锭
    event.remove({id:"mmcr:basic_casing"})  //基础机器外壳
    event.remove({id:/^mmcr:extended_item_(input|output)_bus_/})//扩展物品总线（本包用不到那么大吞吐量）
    event.remove({id:/^mmcr:(extended_)?combined_(input|output)_/})//组合端口（物品与流体混用，本包不做）
})
