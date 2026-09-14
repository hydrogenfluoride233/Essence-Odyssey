ServerEvents.recipes(event=>{
    //世界盐
    event.remove({output:"thaumon:mutagen"})

    const primitiveEssences = [
        "aqua",
        "ignis",
        "terra",
        "aer",
        "perditio",
        "ordo"
    ]

    for(let first=0;first<primitiveEssences.length-2;first++){
        for(let second=first+1;second<primitiveEssences.length-1;second++){
            for(let third=second+1;third<primitiveEssences.length;third++){
                event.shapeless(
                    "thaumon:mutagen",
                    [
                        `kubejs:crystal_${primitiveEssences[first]}`,
                        `kubejs:crystal_${primitiveEssences[second]}`,
                        `kubejs:crystal_${primitiveEssences[third]}`,
                        "minecraft:redstone",
                        "minecraft:flint",
                        "minecraft:bowl"
                    ]
                ).keepIngredient("minecraft:bowl").keepIngredient("minecraft:flint")
            }
        }
    }
    
})
