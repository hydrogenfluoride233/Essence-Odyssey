"""Offline consistency check for the packwiz pack in this repository.

Usage:
    python -I tools/check_pack.py [pack-root] [--all]

Checks pack.toml -> index.toml -> every indexed file, plus the mod metadata in mods/*.pw.toml.
Nothing is downloaded. Exit code 0 means packwiz-installer will find every file it is told to fetch,
with the hash it expects. A stale index (files edited after the last `packwiz refresh`) fails here;
refresh the index with packwiz before publishing.
"""
import hashlib
import os
import re
import sys
import tomllib
from collections import defaultdict

HEX = {'sha1': 40, 'sha256': 64, 'sha512': 128, 'md5': 32}
SIDES = {'both', 'client', 'server'}
# development material that must never be shipped to players through the index
DEV_PREFIXES = ('tools/', 'tests/', '.github/', 'data/')


class Report:
    def __init__(self):
        self.problems = defaultdict(list)

    def add(self, code, path, detail=''):
        self.problems[code].append((path, detail))

    @property
    def ok(self):
        return not self.problems

    def render(self, limit=15):
        lines = []
        for code in sorted(self.problems):
            items = self.problems[code]
            lines.append(f'[{code}] {len(items)}')
            shown = items if limit is None else items[:limit]
            for path, detail in shown:
                lines.append(f'  {path}' + (f'  ({detail})' if detail else ''))
            if len(items) > len(shown):
                lines.append(f'  ... {len(items) - len(shown)} more (use --all)')
        return '\n'.join(lines)


def digest(path, algo='sha256'):
    h = hashlib.new(algo)
    with open(path, 'rb') as f:
        for block in iter(lambda: f.read(1 << 20), b''):
            h.update(block)
    return h.hexdigest()


def load_toml(path, report, code='toml-invalid'):
    try:
        with open(path, 'rb') as f:
            return tomllib.load(f)
    except FileNotFoundError:
        report.add('file-missing', path)
    except (tomllib.TOMLDecodeError, UnicodeDecodeError) as e:
        report.add(code, path, str(e))
    return None


def check_pack_toml(root, report):
    pack = load_toml(os.path.join(root, 'pack.toml'), report)
    if pack is None:
        return None
    for key in ('name', 'version', 'pack-format'):
        if not isinstance(pack.get(key), str) or not pack[key]:
            report.add('pack-field', 'pack.toml', f'missing {key}')
    if not str(pack.get('pack-format', '')).startswith('packwiz:'):
        report.add('pack-field', 'pack.toml', 'pack-format is not packwiz:*')
    versions = pack.get('versions') or {}
    if 'minecraft' not in versions:
        report.add('pack-field', 'pack.toml', 'missing versions.minecraft')
    if not any(k in versions for k in ('neoforge', 'forge', 'fabric', 'quilt')):
        report.add('pack-field', 'pack.toml', 'missing a loader in [versions]')
    index = pack.get('index') or {}
    for key in ('file', 'hash-format', 'hash'):
        if key not in index:
            report.add('pack-field', 'pack.toml', f'missing index.{key}')
    return pack


def check_index(root, pack, report):
    meta = pack.get('index') or {}
    name = meta.get('file', 'index.toml')
    path = os.path.join(root, name)
    if not os.path.isfile(path):
        report.add('file-missing', name)
        return None
    algo = meta.get('hash-format', 'sha256')
    if algo in HEX and digest(path, algo) != meta.get('hash'):
        report.add('index-hash', name, 'pack.toml [index] hash does not match the index file')
    index = load_toml(path, report)
    if index is None:
        return None
    if index.get('hash-format') not in HEX:
        report.add('index-field', name, f"unsupported hash-format {index.get('hash-format')!r}")
        return index
    files = index.get('files') or []
    seen = set()
    order = []
    for entry in files:
        rel = entry.get('file')
        if not isinstance(rel, str) or not rel:
            report.add('index-entry', name, f'entry without file: {entry!r}')
            continue
        order.append(rel)
        if rel in seen:
            report.add('index-duplicate', rel)
        seen.add(rel)
        if '\\' in rel or rel.startswith('/') or '..' in rel.split('/'):
            report.add('index-path', rel, 'paths must be relative and use /')
            continue
        if rel.startswith(DEV_PREFIXES):
            report.add('index-dev-file', rel, 'development files must stay out of the pack')
        algo = entry.get('hash-format', index['hash-format'])
        want = str(entry.get('hash', ''))
        if algo not in HEX or not re.fullmatch(f'[0-9a-f]{{{HEX[algo]}}}', want):
            report.add('index-entry', rel, f'bad {algo} hash {want!r}')
            continue
        is_meta = rel.endswith('.pw.toml')
        if bool(entry.get('metafile', False)) != is_meta:
            report.add('index-metafile', rel, 'metafile must be true exactly for .pw.toml entries')
        full = os.path.join(root, *rel.split('/'))
        if not os.path.isfile(full):
            report.add('index-file-missing', rel, 'listed in the index but not on disk')
        elif digest(full, algo) != want:
            report.add('index-stale-hash', rel, 'file changed since the index was refreshed')
    if order != sorted(order):
        report.add('index-order', name, 'packwiz keeps [[files]] sorted by path')
    return index


def check_mods(root, index, report):
    mods_dir = os.path.join(root, 'mods')
    if not os.path.isdir(mods_dir):
        return
    indexed = {e.get('file') for e in (index or {}).get('files', [])} if index else set()
    by_filename = defaultdict(list)
    by_project = defaultdict(list)
    for name in sorted(os.listdir(mods_dir)):
        if not name.endswith('.pw.toml'):
            continue
        rel = f'mods/{name}'
        if index is not None and rel not in indexed:
            report.add('mod-not-indexed', rel, 'packwiz-installer will not install it until the index is refreshed')
        mod = load_toml(os.path.join(mods_dir, name), report, 'mod-toml-invalid')
        if mod is None:
            continue
        for key in ('name', 'filename'):
            if not isinstance(mod.get(key), str) or not mod[key]:
                report.add('mod-field', rel, f'missing {key}')
        if mod.get('side', 'both') not in SIDES:
            report.add('mod-field', rel, f"side {mod.get('side')!r} is not one of {sorted(SIDES)}")
        dl = mod.get('download') or {}
        algo, want = dl.get('hash-format'), str(dl.get('hash', ''))
        if algo not in HEX and algo != 'murmur2':
            report.add('mod-field', rel, f'unsupported download.hash-format {algo!r}')
        elif algo in HEX and not re.fullmatch(f'[0-9a-f]{{{HEX[algo]}}}', want):
            report.add('mod-field', rel, f'bad download.hash {want!r}')
        update = mod.get('update') or {}
        if dl.get('mode') == 'metadata:curseforge':
            cf = update.get('curseforge') or {}
            for key in ('file-id', 'project-id'):
                if not isinstance(cf.get(key), int):
                    report.add('mod-field', rel, f'curseforge mode needs integer update.curseforge.{key}')
            if isinstance(cf.get('project-id'), int):
                by_project[('curseforge', cf['project-id'])].append(rel)
        elif 'url' in dl:
            if not str(dl['url']).startswith('https://'):
                report.add('mod-field', rel, 'download.url must be https')
            mr = update.get('modrinth') or {}
            if mr.get('mod-id'):
                by_project[('modrinth', mr['mod-id'])].append(rel)
        else:
            report.add('mod-field', rel, 'download needs mode = "metadata:curseforge" or a url')
        if isinstance(mod.get('filename'), str):
            by_filename[mod['filename']].append(rel)
            if not mod['filename'].endswith('.jar'):
                report.add('mod-field', rel, 'filename should be a .jar')
    for filename, rels in by_filename.items():
        if len(rels) > 1:
            report.add('mod-duplicate', filename, ', '.join(rels))
    for (_, pid), rels in by_project.items():
        if len(rels) > 1:
            report.add('mod-duplicate', f'project {pid}', ', '.join(rels))


def check(root):
    report = Report()
    pack = check_pack_toml(root, report)
    index = check_index(root, pack, report) if pack is not None else None
    check_mods(root, index, report)
    return report


def main(argv):
    args = [a for a in argv if not a.startswith('--')]
    root = os.path.abspath(args[0]) if args else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    report = check(root)
    if report.ok:
        print(f'pack OK: {root}')
        return 0
    print(report.render(limit=None if '--all' in argv else 15))
    total = sum(len(v) for v in report.problems.values())
    print(f'\n{total} problem(s). Stale or missing index entries are fixed by running `packwiz refresh` '
          'in the pack root before publishing.')
    return 1


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
