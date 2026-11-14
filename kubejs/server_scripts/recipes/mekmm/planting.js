ServerEvents.recipes(event=>{
    event.recipes.mekmm.planting(
        "2x mysticalagriculture:iesnium_essence",
        "mysticalagriculture:iesnium_seeds",
        "1x mekmm:nutrient_solution"
    )
    .perTickUsage(true)
    .id("kubejs:mekmm/planting/iesnium_essence")
})
