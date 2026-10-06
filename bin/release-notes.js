#!/usr/bin/env node
// Adds a release of livingdocs-server or livingdocs-editor to the release
// notes: its version in data/releases.json, and a line in the notes of its
// branch. Run by .github/workflows/release-notes.yml.
import {readFileSync, writeFileSync} from 'node:fs'
import {join} from 'node:path'
import {fileURLToPath} from 'node:url'

const PRODUCTS = {'livingdocs-server': 'server', 'livingdocs-editor': 'editor'}

export function setVersion(releases, {repo, branch, tag}) {
  const release = releases[branch]
  if (!release) return false
  release[`${PRODUCTS[repo]}Version`] = tag
  return true
}

// On top of the list below the heading, laid out as prettier does: a blank
// line after the heading, and one after the list.
function addItem(notes, isHeading, item) {
  const lines = notes.split('\n')
  const heading = lines.findIndex(isHeading)
  if (heading === -1) return notes
  const at = lines[heading + 1] === '' ? heading + 2 : heading + 1
  const list = lines[at]?.startsWith('- ')
  lines.splice(at, 0, ...(at === heading + 1 ? [''] : []), item, ...(list ? [] : ['']))
  return lines.join('\n')
}

// Below `### Livingdocs Server Patches` of a release branch's notes.
export function addPatch(notes, {repo, tag, message}) {
  if (notes.includes(`[${tag}](`)) return notes
  const heading = new RegExp(`^#+ livingdocs ${PRODUCTS[repo]} patches\\s*$`, 'i')
  return addItem(notes, (l) => heading.test(l), `- [${tag}](https://github.com/livingdocsIO/${repo}/releases/tag/${tag}): ${message}`)
}

// Below `## PRs to Categorize` of the upcoming release's notes.
export function addPull(notes, {pullTitle, pullUrl}) {
  if (!pullUrl || notes.includes(`](${pullUrl})`)) return notes
  return addItem(notes, (l) => l === '## PRs to Categorize', `- [${pullTitle}](${pullUrl})`)
}

function main(env, root) {
  const {REPO: repo, TAG: tag, BRANCH: branch, MESSAGE: message, PULL_TITLE: pullTitle, PULL_URL: pullUrl} = env
  if (!PRODUCTS[repo]) throw new Error(`REPO must be one of ${Object.keys(PRODUCTS).join(', ')}, not '${repo}'`)
  if (!tag || !branch) throw new Error('TAG and BRANCH are required')

  const releasesFile = join(root, 'data/releases.json')
  const releases = JSON.parse(readFileSync(releasesFile, 'utf8'))
  if (!setVersion(releases, {repo, branch, tag})) {
    console.log(`::notice::${branch} is not in data/releases.json, nothing to add`)
    return
  }
  writeFileSync(releasesFile, `${JSON.stringify(releases, null, 2)}\n`)

  const notesFile = join(root, 'content', releases[branch].ref)
  const notes = readFileSync(notesFile, 'utf8')
  const patched = branch === 'main' ? addPull(notes, {pullTitle, pullUrl}) : addPatch(notes, {repo, tag, message})
  if (patched === notes) console.log(`::notice::${notesFile} unchanged: already listed, no pull request, or no section for it`)
  writeFileSync(notesFile, patched)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  try {
    main(process.env, join(import.meta.dirname, '..'))
  } catch (err) {
    console.log(`::error::release-notes: ${err.message}`)
    process.exit(1)
  }
}
