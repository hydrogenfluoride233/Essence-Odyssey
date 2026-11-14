ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:pneumaticcraft/thermo_plant/"
    const Required = ["id","item_input","temperature"]

    //热气动加工机的流体输入：{amount,fluid} 或 {amount,tag}
    const parseFluidInput = text=>{
        const {count,id}=toCounted(text)

        return id.startsWith("#") ?
            {"amount":count,"tag":id.substring(1)} :
            {"amount":count,"fluid":id}
    }

    const recipes = [
        {
            item_output:"actuallyadditions:advanced_coil",
            item_input:"actuallyadditions:basic_coil",
            fluid_input:"500x actuallyadditions:crystallized_oil",
            temperature:473,
            id:`${id_prefix}advanced_coil`,
        },
        {
            fluid_output:"1000x actuallyadditions:crystallized_oil",
            item_input:"actuallyadditions:crystallized_canola_seed",
            fluid_input:"1000x actuallyadditions:refined_canola_oil",
            temperature:373,
            id:`${id_prefix}crystallized_oil`,
        },
        {
            fluid_output:"1000x actuallyadditions:empowered_oil",
            item_input:"actuallyadditions:empowered_canola_seed",
            fluid_input:"1000x actuallyadditions:crystallized_oil",
            temperature:373,
            id:`${id_prefix}empowered_oil`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>{
        const inputs = {}
        const outputs = {}

        if(recipe.item_input) inputs.item = toIngredient(recipe.item_input)
        if(recipe.fluid_input) inputs.fluid = parseFluidInput(recipe.fluid_input)
        if(recipe.item_output) outputs.item_output = toItemStack(recipe.item_output)
        if(recipe.fluid_output) outputs.fluid_output = toFluidJson(recipe.fluid_output)

        const json = {
            "type":"pneumaticcraft:thermo_plant",
            "inputs":inputs,
            "outputs":outputs
        }

        if(recipe.temperature) json.temperature = typeof recipe.temperature === "number" ? {"min":recipe.temperature} : recipe.temperature
        if(recipe.pressure) json.pressure = recipe.pressure
        if(recipe.time) json.speed = 3 / recipe.time

        event.custom(json).id(recipe.id)
    })

    //元始要素：固=>液 / 液=>固
    PrimaryAspects.forEach(data=>{
        const ess = data.id

        event.custom({
            "type":"pneumaticcraft:thermo_plant",
            "inputs":{
                "fluid":{"amount":250,"fluid":"sauce:source_fluid"},
                "item":{"item":`kubejs:crystal_${ess}`}
            },
            "outputs":toThermoPlantOutput({fluid:`kubejs:${ess}_fluid`, amount:250}),
            "temperature":{"min":473},
            "pressure":2.0
        })
        .id(`essenceodyssey:pneumaticcraft/thermo_plant/${ess}_crystal_to_fluid`)

        event.custom({
            "type":"pneumaticcraft:thermo_plant",
            "inputs":{
                "fluid":{"amount":1000,"fluid":"sauce:source_fluid"},
                "item":{"item":`kubejs:block_${ess}`}
            },
            "outputs":toThermoPlantOutput({fluid:`kubejs:${ess}_fluid`, amount:1000}),
            "temperature":{"min":573},
            "pressure":3.0
        })
        .id(`essenceodyssey:pneumaticcraft/thermo_plant/${ess}_block_to_fluid`)

        event.custom({
            "type":"pneumaticcraft:thermo_plant",
            "inputs":{
                "fluid":{"amount":250,"fluid":`kubejs:${ess}_fluid`},
                "item":{"item":"minecraft:amethyst_shard"}
            },
            "outputs":toThermoPlantOutput(`kubejs:crystal_${ess}`),
            "temperature":{"max":263}
        })
        .id(`essenceodyssey:pneumaticcraft/thermo_plant/${ess}_fluid_to_crystal`)

        event.custom({
            "type":"pneumaticcraft:thermo_plant",
            "inputs":{
                "fluid":{"amount":1000,"fluid":`kubejs:${ess}_fluid`},
                "item":{"item":"minecraft:amethyst_block"}
            },
            "outputs":toThermoPlantOutput(`kubejs:block_${ess}`),
            "temperature":{"max":253}
        })
        .id(`essenceodyssey:pneumaticcraft/thermo_plant/${ess}_fluid_to_block`)
    })
})
