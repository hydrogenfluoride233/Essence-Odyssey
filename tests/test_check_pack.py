import contextlib
import hashlib
import importlib.util
import io
import os
import tempfile
import unittest

HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location('check_pack', os.path.join(HERE, '..', 'tools', 'check_pack.py'))
check_pack = importlib.util.module_from_spec(spec)
spec.loader.exec_module(check_pack)

MOD = '''name = "Example"
filename = "example-1.0.jar"
side = "both"

[download]
hash-format = "sha1"
hash = "{sha1}"
mode = "metadata:curseforge"

[update]
[update.curseforge]
file-id = 1
project-id = {pid}
'''


def sha256(data):
    return hashlib.sha256(data).hexdigest()


class PackFixture:
    """A tiny but complete packwiz pack written to a temporary directory."""

    def __init__(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.root = self.tmp.name
        self.files = {
            'config/a.toml': b'a = 1\n',
            'kubejs/server_scripts/x.js': b'// x\n',
            'mods/example.pw.toml': MOD.format(sha1='0' * 40, pid=11).encode(),
        }
        self.extra_entries = []
        self.write()

    def write(self, sort=True, index_hash=None):
        for rel, data in self.files.items():
            path = os.path.join(self.root, *rel.split('/'))
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, 'wb') as f:
                f.write(data)
        entries = [(rel, sha256(data), rel.endswith('.pw.toml')) for rel, data in self.files.items()]
        entries += self.extra_entries
        if sort:
            entries.sort()
        index = 'hash-format = "sha256"\n'
        for rel, h, meta in entries:
            index += f'\n[[files]]\nfile = "{rel}"\nhash = "{h}"\n' + ('metafile = true\n' if meta else '')
        with open(os.path.join(self.root, 'index.toml'), 'w', newline='\n') as f:
            f.write(index)
        h = index_hash or sha256(index.encode())
        with open(os.path.join(self.root, 'pack.toml'), 'w', newline='\n') as f:
            f.write('name = "T"\nversion = "1"\npack-format = "packwiz:1.1.0"\n\n[index]\nfile = "index.toml"\n'
                    f'hash-format = "sha256"\nhash = "{h}"\n\n[versions]\nminecraft = "1.21.1"\nneoforge = "21.1.256"\n')

    def check(self):
        return check_pack.check(self.root)

    def close(self):
        self.tmp.cleanup()


class CheckPackTests(unittest.TestCase):
    def setUp(self):
        self.pack = PackFixture()

    def tearDown(self):
        self.pack.close()

    def codes(self):
        return set(self.pack.check().problems)

    def test_consistent_pack_passes(self):
        report = self.pack.check()
        self.assertTrue(report.ok, report.render())

    def test_edited_file_is_reported_as_stale(self):
        with open(os.path.join(self.pack.root, 'config', 'a.toml'), 'ab') as f:
            f.write(b'b = 2\n')
        self.assertEqual(self.codes(), {'index-stale-hash'})

    def test_deleted_file_is_reported(self):
        os.remove(os.path.join(self.pack.root, 'kubejs', 'server_scripts', 'x.js'))
        self.assertEqual(self.codes(), {'index-file-missing'})

    def test_pack_toml_must_pin_the_index(self):
        self.pack.write(index_hash='0' * 64)
        self.assertEqual(self.codes(), {'index-hash'})

    def test_index_must_stay_sorted(self):
        self.pack.write(sort=False)
        self.pack.files = dict(reversed(list(self.pack.files.items())))
        self.pack.write(sort=False)
        self.assertIn('index-order', self.codes())

    def test_new_mod_metadata_must_be_indexed(self):
        path = os.path.join(self.pack.root, 'mods', 'other.pw.toml')
        with open(path, 'w', newline='\n') as f:
            f.write(MOD.format(sha1='1' * 40, pid=12).replace('example-1.0', 'other-1.0'))
        self.assertEqual(self.codes(), {'mod-not-indexed'})

    def test_mod_metadata_is_validated(self):
        self.pack.files['mods/example.pw.toml'] = MOD.format(sha1='xyz', pid=11).replace('"both"', '"everywhere"').encode()
        self.pack.write()
        report = self.pack.check()
        self.assertEqual(set(report.problems), {'mod-field'})
        self.assertEqual(len(report.problems['mod-field']), 2)

    def test_duplicate_projects_are_reported(self):
        self.pack.files['mods/copy.pw.toml'] = MOD.format(sha1='2' * 40, pid=11).replace('example-1.0', 'copy-1.0').encode()
        self.pack.write()
        self.assertEqual(self.codes(), {'mod-duplicate'})

    def test_development_files_are_never_indexed(self):
        self.pack.files['tools/helper.py'] = b'print(1)\n'
        self.pack.write()
        self.assertEqual(self.codes(), {'index-dev-file'})

    def test_main_exit_code(self):
        with contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(check_pack.main([self.pack.root]), 0)
            os.remove(os.path.join(self.pack.root, 'config', 'a.toml'))
            self.assertEqual(check_pack.main([self.pack.root]), 1)


if __name__ == '__main__':
    unittest.main()
