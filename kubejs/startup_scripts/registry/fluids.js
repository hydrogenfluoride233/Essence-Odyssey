StartupEvents.registry("fluid",event=>{
    //要素流体
    Aspects.forEach(aspect=>
        event.create(`kubejs:${aspect.id}_fluid`,"kubejs:thin").tint(aspect.color))

    event.create("kubejs:fiery_blood","kubejs:thick").tint("#b42607")
})
