ServerEvents.recipes(event=>{
    const registerCreateDissolution = (output,input)=>
        event.recipes.mekanism.dissolution(`1000x ${output}`,`2x ${input}`,"1x mekanism:sulfuric_acid").perTickUsage(true)

    const registerSagMilling = ({rawItemId,dustId,ingotId,secondaryDust})=>{
        event.recipes.enderio.sag_milling([
            dustId,
            SagMillOutput.of(dustId,0.8),
            SagMillOutput.of(secondaryDust,0.2)
        ],rawItemId).energy(2400).bonus(SagMillBonus.CHANCE_ONLY)
        event.recipes.enderio.sag_milling(dustId,ingotId).energy(2400).bonus(SagMillBonus.NONE)
    }

    const metalConfig = [
        {
            name: "zinc",
            rawMod: "create",
            rawItem: "raw_zinc",
            rawBlock: "raw_zinc_block",
            dustId: "neovitae:zinc_dust",
            ingotId: "create:zinc_ingot",
            secondaryDust: "mekanism:dust_copper"
        },
        {
            name: "iesnium",
            rawMod: "occultism",
            rawItem: "raw_iesnium",
            rawBlock: "raw_iesnium_block",
            dustId: "occultism:iesnium_dust",
            ingotId: "occultism:iesnium_ingot",
            secondaryDust: "occultism:silver_dust"
        },
        {
            name: "nickel",
            rawMod: "immersiveengineering",
            rawItem: "raw_nickel",
            rawBlock: "raw_block_nickel",
            dustId: "immersiveengineering:dust_nickel",
            ingotId: "immersiveengineering:ingot_nickel",
            secondaryDust: "mekanism:dust_iron"
        },
        {
            name: "aluminum",
            rawMod: "immersiveengineering",
            rawItem: "raw_aluminum",
            rawBlock: "raw_block_aluminum",
            dustId: "immersiveengineering:dust_aluminum",
            ingotId: "immersiveengineering:ingot_aluminum",
            secondaryDust: "mekanism:dust_iron"
        }
    ]

    const registerMetalProcessing = ({name,rawMod,rawItem,rawBlock,dustId,ingotId,secondaryDust})=>{
        const oreTag = `#c:ores/${name}`
        const rawItemId = `${rawMod}:${rawItem}`
        const rawBlockId = `${rawMod}:${rawBlock}`
        const tripleRawItem = `3x ${rawItemId}`
        const dirtyChemical = `kubejs:dirty_${name}`
        const cleanChemical = `kubejs:clean_${name}`
        const crystal = `kubejs:crystal_${name}`
        const shard = `kubejs:shard_${name}`
        const clump = `kubejs:clump_${name}`
        const dirtyDust = `kubejs:dirty_dust_${name}`

        event.recipes.mekanism.dissolution(`1000x ${dirtyChemical}`,oreTag,"1x mekanism:sulfuric_acid").perTickUsage(true)
        event.recipes.mekanism.dissolution(`2000x ${dirtyChemical}`,tripleRawItem,"1x mekanism:sulfuric_acid").perTickUsage(true)
        event.recipes.mekanism.dissolution(`6000x ${dirtyChemical}`,rawBlockId,"2x mekanism:sulfuric_acid").perTickUsage(true)

        event.recipes.mekanism.washing(`1x ${cleanChemical}`,"5x minecraft:water",`1x ${dirtyChemical}`)
        event.recipes.mekanism.crystallizing(crystal,`200x ${cleanChemical}`)

        event.recipes.mekanism.injecting(shard,crystal,"1x mekanism:hydrogen_chloride").perTickUsage(true)
        event.recipes.mekanism.injecting(`4x ${shard}`,oreTag,"1x mekanism:hydrogen_chloride").perTickUsage(true)
        event.recipes.mekanism.injecting(`8x ${shard}`,tripleRawItem,"1x mekanism:hydrogen_chloride").perTickUsage(true)
        event.recipes.mekanism.injecting(`24x ${shard}`,rawBlockId,"2x mekanism:hydrogen_chloride").perTickUsage(true)

        event.recipes.mekanism.purifying(clump,shard,"1x mekanism:oxygen").perTickUsage(true)
        event.recipes.mekanism.purifying(`3x ${clump}`,oreTag,"1x mekanism:oxygen").perTickUsage(true)
        event.recipes.mekanism.purifying(`2x ${clump}`,rawItemId,"1x mekanism:oxygen").perTickUsage(true)
        event.recipes.mekanism.purifying(`18x ${clump}`,rawBlockId,"2x mekanism:oxygen").perTickUsage(true)

        event.recipes.mekanism.crushing(dirtyDust,clump)
        event.recipes.mekanism.crushing(dustId,ingotId)
        event.recipes.mekanism.enriching(dustId,dirtyDust)
        event.recipes.mekanism.enriching(`2x ${dustId}`,oreTag)
        event.recipes.mekanism.enriching(`4x ${dustId}`,tripleRawItem)
        event.recipes.mekanism.enriching(`12x ${dustId}`,rawBlockId)

        registerSagMilling({rawItemId,dustId,ingotId,secondaryDust})
    }

    metalConfig.forEach(registerMetalProcessing)
    registerSagMilling({
        rawItemId: "occultism:raw_silver",
        dustId: "occultism:silver_dust",
        ingotId: "occultism:silver_ingot",
        secondaryDust: "mekanism:dust_gold"
    })

    const createDissolutionList = [
        ["kubejs:dirty_zinc","create:crushed_raw_zinc"],
        ["mekmm:dirty_silver","create:crushed_raw_silver"],
        ["kubejs:dirty_iesnium","kubejs:crushed_raw_iesnium"],
        ["kubejs:dirty_nickel","create:crushed_raw_nickel"],
        ["kubejs:dirty_aluminum","create:crushed_raw_aluminum"],
        ["mekanism:dirty_iron","create:crushed_raw_iron"],
        ["mekanism:dirty_gold","create:crushed_raw_gold"],
        ["mekanism:dirty_copper","create:crushed_raw_copper"],
        ["mekanism:dirty_lead","create:crushed_raw_lead"],
        ["mekanism:dirty_tin","create:crushed_raw_tin"],
        ["mekanism:dirty_osmium","create:crushed_raw_osmium"],
        ["mekanism:dirty_uranium","create:crushed_raw_uranium"]
    ]
    createDissolutionList.forEach(([output,input])=>registerCreateDissolution(output,input))

    event.recipes.create.crushing(["kubejs:crushed_raw_iesnium",CreateItem.of("create:experience_nugget",0.75)],"occultism:raw_iesnium")
    event.recipes.create.crushing(["9x kubejs:crushed_raw_iesnium",CreateItem.of("9x create:experience_nugget",0.75)],"occultism:raw_iesnium_block")
    event.recipes.create.crushing(["kubejs:crushed_raw_iesnium",CreateItem.of("kubejs:crushed_raw_iesnium",0.75),CreateItem.of("create:experience_nugget",0.75)],"occultism:iesnium_ore")

    event.recipes.create.splashing("9x occultism:iesnium_nugget","kubejs:crushed_raw_iesnium")
    event.smelting("occultism:iesnium_ingot","kubejs:crushed_raw_iesnium").xp(0.1)
    event.blasting("occultism:iesnium_ingot","kubejs:crushed_raw_iesnium").xp(0.1)

    event.shaped(
        "2x occultism:iesnium_ingot",
        [
            "AAA",
            "A A",
            "AAA"
        ],
        {A:"mysticalagriculture:iesnium_essence"}
    )
    event.recipes.mekmm.planting("2x mysticalagriculture:iesnium_essence","mysticalagriculture:iesnium_seeds","1x mekmm:nutrient_solution").perTickUsage(true)
})
