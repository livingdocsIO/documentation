import assert from 'node:assert/strict'
import {test} from 'node:test'
import {addPatch, addPull, setVersion} from './release-notes.js'

const SERVER = 'https://github.com/livingdocsIO/livingdocs-server/releases/tag'
const NOTES = `## Patches

### Livingdocs Server Patches

- [v312.0.18](${SERVER}/v312.0.18): fix(ci): an older fix

### Livingdocs Editor Patches

- [v128.1.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v128.1.16): fix: an editor fix
`

test('setVersion sets the product version of the branch', () => {
  const releases = {main: {serverVersion: 'v1.0.0'}, 'release-2026-09': {serverVersion: 'v312.0.18', editorVersion: 'v128.1.16'}}
  assert.equal(setVersion(releases, {repo: 'livingdocs-editor', branch: 'release-2026-09', tag: 'v128.1.17'}), true)
  assert.equal(releases['release-2026-09'].editorVersion, 'v128.1.17')
  assert.equal(releases['release-2026-09'].serverVersion, 'v312.0.18')
  assert.equal(setVersion(releases, {repo: 'livingdocs-server', branch: 'release-2020-01', tag: 'v1.0.1'}), false)
})

test('addPatch puts the newest patch on top of its product', () => {
  const patched = addPatch(NOTES, {repo: 'livingdocs-server', tag: 'v312.0.19', message: 'fix: a new fix'})
  assert.equal(
    patched,
    NOTES.replace(
      '### Livingdocs Server Patches\n\n',
      `### Livingdocs Server Patches\n\n- [v312.0.19](${SERVER}/v312.0.19): fix: a new fix\n`
    )
  )
})

test('addPatch adds the blank line prettier wants after the heading', () => {
  const notes = `### Livingdocs Server Patches\n- [v312.0.18](${SERVER}/v312.0.18): fix: old\n`
  assert.equal(
    addPatch(notes, {repo: 'livingdocs-server', tag: 'v312.0.19', message: 'fix: new'}),
    `### Livingdocs Server Patches\n\n- [v312.0.19](${SERVER}/v312.0.19): fix: new\n- [v312.0.18](${SERVER}/v312.0.18): fix: old\n`
  )
})

test('addPatch starts the list of an empty section', () => {
  const notes = '### Livingdocs Server Patches\n\n### Livingdocs Editor Patches\n'
  assert.equal(
    addPatch(notes, {repo: 'livingdocs-server', tag: 'v312.0.0', message: 'fix: first'}),
    `### Livingdocs Server Patches\n\n- [v312.0.0](${SERVER}/v312.0.0): fix: first\n\n### Livingdocs Editor Patches\n`
  )
})

test('addPatch adds a tag once', () => {
  assert.equal(addPatch(NOTES, {repo: 'livingdocs-editor', tag: 'v128.1.16', message: 'again'}), NOTES)
})

test('addPatch leaves notes without the section alone', () => {
  assert.equal(addPatch('# no patches yet\n', {repo: 'livingdocs-server', tag: 'v1.0.1', message: 'm'}), '# no patches yet\n')
})

test('addPull lists the pull request under PRs to Categorize, once', () => {
  const notes = '## PRs to Categorize\n\n- [older](https://example.com/1)\n'
  const pull = {pullTitle: 'fix: new', pullUrl: 'https://github.com/livingdocsIO/livingdocs-server/pull/2'}
  const patched = addPull(notes, pull)
  assert.equal(patched, '## PRs to Categorize\n\n- [fix: new](https://github.com/livingdocsIO/livingdocs-server/pull/2)\n- [older](https://example.com/1)\n')
  assert.equal(addPull(patched, pull), patched)
  assert.equal(addPull(notes, {pullTitle: '', pullUrl: ''}), notes)
})
