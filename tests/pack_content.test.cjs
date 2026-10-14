const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')
const vm = require('node:vm')

const root = path.resolve(__dirname, '..')

function filesIn(directory) {
    const result = []
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const file = path.join(directory, entry.name)
        if (entry.isDirectory()) result.push(...filesIn(file))
        else if (entry.isFile()) result.push(file)
    }
    return result
}

function relative(file) {
    return path.relative(root, file).split(path.sep).join('/')
}

test('all KubeJS scripts parse without executing game code', () => {
    let count = 0
    for (const area of ['startup_scripts', 'server_scripts', 'client_scripts']) {
        for (const file of filesIn(path.join(root, 'kubejs', area))) {
            if (file.endsWith('.js')) {
                new vm.Script(fs.readFileSync(file, 'utf8'), { filename: relative(file) })
                count++
            }
        }
    }
    assert.ok(count > 0)
})

test('packwiz includes all custom KubeJS scripts, resources and datapack files', () => {
    // Only read canonical file lines here; the Python checker validates TOML and hashes.
    const index = fs.readFileSync(path.join(root, 'index.toml'), 'utf8')
    const indexed = new Set([...index.matchAll(/^file = (".*")\r?$/gm)].map(match => JSON.parse(match[1])))
    const missing = []
    for (const area of ['startup_scripts', 'server_scripts', 'client_scripts', 'assets', 'data']) {
        for (const file of filesIn(path.join(root, 'kubejs', area))) {
            if (!/\.(js|json|png|mcmeta)$/.test(file)) continue
            if (!indexed.has(relative(file))) missing.push(relative(file))
        }
    }
    assert.deepEqual(missing, [], `Not shipped by packwiz:\n${missing.join('\n')}`)
})

test('development tooling and root runtime data are not distributed as game content', () => {
    const index = fs.readFileSync(path.join(root, 'index.toml'), 'utf8')
    for (const match of index.matchAll(/^file = (".*")\r?$/gm)) {
        assert.doesNotMatch(JSON.parse(match[1]), /^(?:tools|tests|\.github|data)\//)
    }
    const ignore = fs.readFileSync(path.join(root, '.packwizignore'), 'utf8')
    assert.doesNotMatch(ignore, /^data\/$/m, 'Unanchored data/ also excludes kubejs/data')
    for (const directory of ['data', 'tests', 'tools']) {
        assert.ok(ignore.split(/\r?\n/).includes(`/${directory}/`), `Missing /${directory}/ ignore rule`)
    }
})
