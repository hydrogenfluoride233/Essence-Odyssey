ServerEvents.recipes(event=>{
    //组合合成
    //格式:[输出,中心输入,周围输入,能量]
    const CombinationList = [
        [
            "kubejs:arcane_wafer",
            "ae2:silicon",
            [
                "ars_nouveau:source_gem",
                "ae2:fluix_crystal",
                "kubejs:empowered_diamatine_crystal_dust",
                "thaumon:mutagen"
            ],
            100000
        ],//魔导晶圆

        [
            "actuallyadditions:empowered_palis_crystal_block",
            "actuallyadditions:palis_crystal_block",
            [
                "#c:dyes/cyan",
                "minecraft:prismarine_shard",
                "minecraft:prismarine_shard",
                "minecraft:prismarine_shard"
            ],
            500000
        ],//充能青金石水晶块

        [
            "actuallyadditions:empowered_void_crystal_block",
            "actuallyadditions:void_crystal_block",
            [
                "#c:dyes/black",
                "#minecraft:coals",
                "minecraft:flint",
                "#c:stones"
            ],
            500000
        ],//充能煤晶块

        [
            "actuallyadditions:empowered_emeradic_crystal_block",
            "actuallyadditions:emeradic_crystal_block",
            [
                "#c:dyes/lime",
                "minecraft:short_grass",
                "#minecraft:saplings",
                "#c:slimeballs"
            ],
            500000
        ],//充能绿宝石水晶块

        [
            "actuallyadditions:empowered_restonia_crystal_block",
            "actuallyadditions:restonia_crystal_block",
            [
                "#c:dyes/red",
                "minecraft:nether_brick",
                "minecraft:brick",
                "#c:dusts/redstone"
            ],
            500000
        ],//充能红石水晶块

        [
            "actuallyadditions:empowered_enori_crystal_block",
            "actuallyadditions:enori_crystal_block",
            [
                "#c:dyes/gray",
                "minecraft:snowball",
                "minecraft:stone_button",
                "#c:cobblestones"
            ],
            500000
        ],//充能铁晶块

        [
            "actuallyadditions:empowered_diamatine_crystal_block",
            "actuallyadditions:diamatine_crystal_block",
            [
                "#c:dyes/light_blue",
                "minecraft:clay_ball",
                "minecraft:clay_ball",
                "minecraft:clay"
            ],
            500000
        ],//充能钻石水晶块

        [
            "actuallyadditions:empowered_canola_seed",
            "actuallyadditions:crystallized_canola_seed",
            [
                "actuallyadditions:canola_seeds",
                "actuallyadditions:canola_seeds",
                "actuallyadditions:canola_seeds",
                "actuallyadditions:canola_seeds"
            ],
            10000
        ],//充能油菜种子
    ]

    const parseCombinationIngredient = ingredient=>{
        if(typeof ingredient!=="string") return ingredient

        return ingredient.startsWith("#") ?
            {tag:ingredient.substring(1)} :
            {item:ingredient}
    }

    const parseCombinationInput = input=>parseCombinationIngredient(input)

    const parseCombinationIngredients = ingredients=>
        ingredients.map(parseCombinationIngredient)

    const parseCombinationResult = result=>{
        if(typeof result!=="string") return result

        return {
            id:result
        }
    }

    CombinationList.forEach(([output,input,ingredients,energy])=>
        event.custom({
            "type":"extendedcrafting:combination",
            "power_cost":energy,
            "input":parseCombinationInput(input),
            "ingredients":parseCombinationIngredients(ingredients),
            "result":parseCombinationResult(output)
        })
    )
})
