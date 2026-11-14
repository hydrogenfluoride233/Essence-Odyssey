//药水配方预热：数据包同步时先取一次子配方，否则首次用到混合器/灌装机的药水配方会出错
const $OnDatapackSyncEvent = Java.loadClass("net.neoforged.neoforge.event.OnDatapackSyncEvent")
const $EventPriority = Java.loadClass("net.neoforged.bus.api.EventPriority")
const IEPotionLists = ["immersiveengineering:mixer_potion_list","immersiveengineering:potion_bottling_list"]
NativeEvents.onEvent($EventPriority.HIGHEST,$OnDatapackSyncEvent,event=>{
    const manager = event.getPlayerList().getServer().getRecipeManager()
    IEPotionLists.forEach(id=>{
        try {
            manager.byKey(id).ifPresent(holder=>holder.value().getSubRecipes())
        } catch (err) {
            console.warn(`[沉浸工程药水配方预热] ${id} 失败：${err}`)
        }
    })
})
