const BasicAuraType=Java.loadClass("de.ellpeck.naturesaura.api.aura.type.BasicAuraType")
const ResourceLocation=Java.loadClass("net.minecraft.resources.ResourceLocation")

const auraTypes=[
    ["aether","aether","the_aether",0xF6C76A],
    ["twilight_forest","twilightforest","twilight_forest",0x8B6CCF],
    ["starlight","eternal_starlight","starlight",0x75C7FF]
]

auraTypes.forEach(([name,dimensionNamespace,dimensionPath,color])=>{
    const auraType=new BasicAuraType(
        ResourceLocation.fromNamespaceAndPath("kubejs",name),
        null,
        color,
        0
    )

    auraType.addDimensionType(
        ResourceLocation.fromNamespaceAndPath(dimensionNamespace,dimensionPath)
    )
    auraType.register()
})
