ServerEvents.recipes(event => {
    event.recipes.portaltransform.item_transform(
        "minecraft:amethyst_shard",
        "kubejs:crystal_perditio"
    ).dimensions(["overworld","the_end"]).chance(1.0)
})
