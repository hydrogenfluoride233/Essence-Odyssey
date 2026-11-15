ServerEvents.recipes(event=>{
    const id_prefix = "kubejs:create/deploying/"
    const Required = ["id","output","input"]

    const recipes = [
        {
            output:"ae2:printed_logic_processor",
            input:["#c:ingots/gold","ae2:logic_processor_press"],
            consume_template:false,
            id:`${id_prefix}printed_logic_processor`,
        },
        {
            output:"ae2:printed_calculation_processor",
            input:["ae2:certus_quartz_crystal","ae2:calculation_processor_press"],
            consume_template:false,
            id:`${id_prefix}printed_calculation_processor`,
        },
        {
            output:"ae2:printed_engineering_processor",
            input:["minecraft:diamond","ae2:engineering_processor_press"],
            consume_template:false,
            id:`${id_prefix}printed_engineering_processor`,
        },
        {
            output:"ae2:printed_silicon",
            input:["#c:silicon","ae2:silicon_press"],
            consume_template:false,
            id:`${id_prefix}printed_silicon`,
        },
        {
            output:"advanced_ae:printed_quantum_processor",
            input:["advanced_ae:quantum_alloy","advanced_ae:quantum_processor_press"],
            consume_template:false,
            id:`${id_prefix}printed_quantum_processor`,
        },
        {
            output:"appflux:printed_energy_processor",
            input:["appflux:charged_redstone","appflux:energy_processor_press"],
            consume_template:false,
            id:`${id_prefix}printed_energy_processor`,
        },
        {
            output:"extendedae:concurrent_processor_print",
            input:["extendedae:entro_crystal","extendedae:concurrent_processor_press"],
            consume_template:false,
            id:`${id_prefix}concurrent_processor_print`,
        },
        {
            output:"megacells:printed_accumulation_processor",
            input:["megacells:sky_steel_ingot","megacells:accumulation_processor_press"],
            consume_template:false,
            id:`${id_prefix}printed_accumulation_processor`,
        },
        {
            output:"appliedcreate:stress_circuit_board",
            input:["createdeco:andesite_sheet","ae2:printed_calculation_processor"],
            consume_template:true,
            id:`${id_prefix}stress_circuit_board`,
        },
        {
            output:"appliedcreate:advanced_stress_circuit_board",
            input:["create:brass_sheet","ae2:printed_calculation_processor"],
            consume_template:true,
            id:`${id_prefix}advanced_stress_circuit_board`,
        },
    ]

    checkRecipe(recipes,Required)

    recipes.forEach(recipe=>{
        const builder = event.recipes.create.deploying(
            recipe.output,
            toCreateInput(recipe.input)
        )

        if(!recipe.consume_template) builder.keepHeldItem()

        builder.id(recipe.id)
    })
})
