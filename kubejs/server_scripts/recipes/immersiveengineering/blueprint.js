ServerEvents.recipes(event=>{
    const id_prefix = "essenceodyssey:immersiveengineering/blueprint/"
    const Required = ["id","category","output","input"]

    const recipes = [
        {
            category:"pcb",
            output:"pneumaticcraft:printed_circuit_board",
            input:[
                "pneumaticcraft:unassembled_pcb",
                "immersiveengineering:electron_tube",
                "pneumaticcraft:transistor",
                "pneumaticcraft:capacitor",
            ],
            id:`${id_prefix}printed_circuit_board`,
        },
        {
            category:"pcb",
            output:"pneumaticcraft:transistor",
            input:[
                "3x #pneumaticcraft:wiring",
                "1x #c:dusts/redstone",
                "pneumaticcraft:plastic",
            ],
            id:`${id_prefix}transistor`,
        },
        {
            category:"pcb",
            output:"pneumaticcraft:capacitor",
            input:[
                "2x #pneumaticcraft:wiring",
                "1x #c:slimeballs",
                "pneumaticcraft:plastic",
            ],
            id:`${id_prefix}capacitor`,
        },
        {
            category:"pcb",
            output:"3x pneumaticcraft:empty_pcb",
            input:[
                "2x minecraft:redstone_torch",
                "3x #pneumaticcraft:wiring",
                "pneumaticcraft:plastic",
            ],
            id:`${id_prefix}empty_pcb`,
        },
        {
            category:"pcb",
            output:"kubejs:energy_capacitor",
            input:[
                "2x #pneumaticcraft:wiring",
                "actuallyadditions:restonia_crystal",
                "justdirethings:ferricore_ingot",
            ],
            id:`${id_prefix}energy_capacitor`,
        },
        {
            category:"pcb",
            output:"create:precision_mechanism",
            input:[
                "1x #c:plates/gold",
                "5x create:cogwheel",
                "5x create:large_cogwheel",
                "5x #c:nuggets/iron",
            ],
            id:`${id_prefix}precision_mechanism`,
        },
        {
            category:"pcb",
            output:"create_connected:control_chip",
            input:[
                "1x #c:plates/gold",
                "3x create:electron_tube",
                "3x #c:dusts/redstone",
            ],
            id:`${id_prefix}control_chip`,
        },
    ]

    checkRecipes(recipes,Required)

    recipes.forEach(recipe=>
        event.custom({
            "type":"immersiveengineering:blueprint",
            "category":recipe.category,
            "inputs":recipe.input.map(value=>{
                const {count,id} = toCounted(value)

                return {
                    "basePredicate":id.startsWith("#") ? {"tag":id.substring(1)} : {"item":id},
                    "count":count
                }
            }),
            "result":toItemStack(recipe.output)
        })
        .id(recipe.id))
})
