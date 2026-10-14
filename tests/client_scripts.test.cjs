const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const vm = require('node:vm')

const root = path.resolve(__dirname, '..')
const hiddenScript = path.join(root, 'kubejs/client_scripts/recipeviewer/hidden.js')

function removals() {
    const filters = { item: [], fluid: [] }
    vm.runInNewContext(fs.readFileSync(hiddenScript, 'utf8'), {
        RecipeViewerEvents: {
            removeEntries(type, callback) {
                callback({ remove: filter => filters[type].push(filter) })
            }
        }
    }, { filename: hiddenScript })
    return filters
}

function hidden(filters, id, components = {}) {
    const stack = { id, get: key => components[key] ?? null }
    return filters.some(filter => typeof filter === 'function' ? filter(stack) : filter === id)
}

test('recipe viewer hides only filled soul vials and seed pouches', () => {
    const { item } = removals()
    for (const [id, component] of [
        ['enderio:soul_vial', 'enderio:soul'],
        ['quark:seed_pouch', 'quark:stored_item']
    ]) {
        assert.equal(hidden(item, id), false)
        assert.equal(hidden(item, id, { [component]: { id: 'minecraft:zombie' } }), true)
        assert.equal(hidden(item, 'minecraft:stone', { [component]: {} }), false)
    }
})

test('recipe viewer preserves all eight terracotta pots and hides colored variants', () => {
    const { item } = removals()
    const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
        'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
    for (const tier of ['', 'elite_', 'ultra_', 'mega_']) {
        const namespace = tier ? 'botanypotstiers' : 'botanypots'
        for (const hopper of ['', 'hopper_']) {
            assert.equal(hidden(item, `${namespace}:${tier}terracotta_${hopper}botany_pot`), false)
            for (const color of colors) {
                for (const material of ['terracotta', 'concrete', 'glazed_terracotta']) {
                    assert.equal(hidden(item, `${namespace}:${tier}${color}_${material}_${hopper}botany_pot`), true)
                }
            }
        }
    }
    assert.equal(hidden(item, 'another_mod:white_terracotta_botany_pot'), false)
    assert.equal(hidden(item, 'botanypots:fertilizer'), false)
})

test('recipe viewer hides growth hoes without hiding ordinary or unrelated tools', () => {
    const { item } = removals()
    assert.equal(hidden(item, 'minecraft:diamond_hoe'), false)
    assert.equal(hidden(item, 'minecraft:diamond_hoe', {
        'minecraft:attribute_modifiers': 'modifier[minecraft:attack_damage]'
    }), false)
    assert.equal(hidden(item, 'minecraft:diamond_hoe', {
        'minecraft:attribute_modifiers': 'modifier[botanypots:growth]'
    }), true)
    assert.equal(hidden(item, 'another_mod:hoe_handle', {
        'minecraft:attribute_modifiers': 'modifier[botanypots:growth]'
    }), false)
})

test('recipe viewer keeps explicit item and fluid removals separate', () => {
    const { item, fluid } = removals()
    assert.equal(hidden(item, 'immersiveengineering:potion_bucket'), true)
    assert.equal(hidden(item, 'mekanism:steam_bucket'), true)
    assert.equal(hidden(fluid, 'mekanism:steam'), true)
    assert.equal(hidden(fluid, 'minecraft:water'), false)
    assert.equal(hidden(item, 'minecraft:water_bucket'), false)
})

test('recipe viewer uses one predicate and one id lookup per ordinary entry', () => {
    const predicates = removals().item.filter(filter => typeof filter === 'function')
    let idReads = 0
    let componentReads = 0
    const stack = {
        get id() { idReads++; return 'minecraft:stone' },
        get() { componentReads++; return null }
    }
    for (let i = 0; i < 10000; i++) {
        assert.equal(predicates.some(predicate => predicate(stack)), false)
    }
    assert.equal(predicates.length, 1)
    assert.equal(idReads, 10000)
    assert.equal(componentReads, 0)
})

test('all custom recipe-viewer information keys exist in both supported languages', () => {
    const information = []
    const subtypes = []
    const scripts = ['essenceodyssey/info.js', 'recipeviewer/info.js']
    for (const script of scripts) {
        const file = path.join(root, 'kubejs/client_scripts', script)
        vm.runInNewContext(fs.readFileSync(file, 'utf8'), {
            RecipeViewerEvents: {
                addInformation(type, callback) {
                    assert.equal(type, 'item')
                    callback({ add: (item, texts) => information.push({ item, texts }) })
                },
                registerSubtypes(type, callback) {
                    assert.equal(type, 'item')
                    callback({ useComponents: (item, components) => subtypes.push({ item, components }) })
                }
            },
            Item: { of: (id, components) => ({ id, components }) },
            Text: { translate: key => key }
        }, { filename: file })
    }
    assert.equal(information.length, 14)
    assert.equal(subtypes.length, 2)
    for (const language of ['zh_cn', 'en_us']) {
        const translations = {}
        for (const namespace of ['kubejs', 'essenceodyssey']) {
            Object.assign(translations, JSON.parse(fs.readFileSync(
                path.join(root, 'kubejs/assets', namespace, 'lang', `${language}.json`), 'utf8')))
        }
        for (const { texts } of information) {
            for (const key of texts) assert.equal(typeof translations[key], 'string', `${language}: ${key}`)
        }
    }
})
