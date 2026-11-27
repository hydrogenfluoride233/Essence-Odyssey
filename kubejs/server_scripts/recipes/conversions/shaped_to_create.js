ServerEvents.recipes(event=>{
    //有序合成=>动力合成：移除原配方并改为动力合成，产物沿用原配方
    const ShapedMechanicalList = [
        "actuallyadditions:crusher_double",
        "actuallyadditions:powered_furnace",
        "actuallyadditions:fermenting_barrel",
        "actuallyadditions:feeder",
        "actuallyadditions:lava_factory_controller",
        "actuallyadditions:energizer",
        "actuallyadditions:farmer",
        "actuallyadditions:vertical_digger",
        "actuallyadditions:enervator",
        "actuallyadditions:firework_box",
        "actuallyadditions:coffee_machine",
        "actuallyadditions:lava_factory_casing",
        "actuallyadditions:ranged_collector",

        "modularrouters:modular_router",
        "modularrouters:blank_upgrade",
        "modularrouters:blank_module",

        "buildinggadgets2:gadget_building",
        "buildinggadgets2:gadget_exchanging",
        "buildinggadgets2:gadget_copy_paste",
        "buildinggadgets2:gadget_cut_paste",
        "buildinggadgets2:gadget_destruction",

        "pylons:expulsion_pylon",
        "pylons:infusion_pylon",
        "pylons:harvester_pylon",
        "pylons:interdiction_pylon",
        "pylons:protection_pylon",

        "pneumaticcraft:flux_compressor",
        "pneumaticcraft:electrostatic_compressor",
        "pneumaticcraft:solar_compressor",
        "pneumaticcraft:etching_tank",
        "pneumaticcraft:thermal_lagging",
        "pneumaticcraft:heat_sink",
        "pneumaticcraft:vortex_tube",
        "pneumaticcraft:charging_station",
        "pneumaticcraft:heat_frame",

    ]

    const toCreateIngredient = ingredient=>{
        if(typeof ingredient === "string") return ingredient
        if(ingredient.item) return {item:ingredient.item}
        if(ingredient.tag) return {tag:ingredient.tag}

        if(ingredient.type === "neoforge:components"&&ingredient.items){
            const ids = Array.isArray(ingredient.items) ? ingredient.items : [ingredient.items]

            return {item:ids[0]}
        }

        if(Array.isArray(ingredient)) return toCreateIngredient(ingredient[0])

        return ingredient
    }

    ShapedMechanicalList.forEach(recipeId=>
        event.forEachRecipe({id:recipeId},recipe=>{
            const shapedRecipe = JSON.parse(recipe.json)

            if(shapedRecipe.type !== "minecraft:crafting_shaped"||!shapedRecipe.pattern||!shapedRecipe.key||!shapedRecipe.result){
                console.error(`[Create] 无法转换有序工作台配方 ${recipeId}：配方不是有效的 minecraft:crafting_shaped`)
                return
            }

            const normalizedKey = {}

            for(const [k,v] of Object.entries(shapedRecipe.key)){
                normalizedKey[k] = toCreateIngredient(v)
            }

            event.recipes.create.mechanical_crafting(
                shapedRecipe.result,
                shapedRecipe.pattern,
                normalizedKey
            )
            .id(`kubejs:conversions/create/${recipeId.split(":")[1]}`)

            event.remove({id:recipeId})
        })
    )
})
