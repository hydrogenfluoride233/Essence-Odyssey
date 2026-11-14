const BasicAuraType = Java.loadClass("de.ellpeck.naturesaura.api.aura.type.BasicAuraType")
const ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")

//自定义灵气类型
const AuraTypes = [
    {id:"aether",          dimension:"aether:the_aether",              color:0xF6C76A},
    {id:"twilight_forest", dimension:"twilightforest:twilight_forest", color:0x8B6CCF},
    {id:"starlight",       dimension:"eternal_starlight:starlight",    color:0x75C7FF}
]

AuraTypes.forEach(({id,dimension,color})=>{
    const auraType = new BasicAuraType(
        ResourceLocation.fromNamespaceAndPath("kubejs",id),
        null,
        color,
        0
    )

    auraType.addDimensionType(ResourceLocation.parse(dimension))
    auraType.register()
})
