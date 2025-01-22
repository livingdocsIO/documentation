const lunr = require('lunr')

// Separate on any non-word value so that functions in code blocks will be returned in the results.
// A search for "registerInitializedHook" would not find `liServer.registerInitializedHook(async`.
// Original value: /[\s\-]+/
lunr.tokenizer.separator = /[\W]+/
lunr.QueryLexer.termSeparator = lunr.tokenizer.separator

const indexes = {}
const byRef = new Map()

function initializeIndex(searchJson) {
  let index
  const queue = []

  fetch(searchJson)
    .then((response) => response.json())
    .then((documents) => {
      index = lunr(function () {
        this.ref('url')
        this.field('title', {boost: 50})
        this.field('subtitle', {boost: 10})
        this.field('description', {boost: 2})
        this.field('body')
        this.field('keywords', {boost: 5})
        this.metadataWhitelist = ['position']

        for (const doc of documents) {
          // Doc.body contains encoded unicode characters. Mostly for tags like <p> and <code>.
          // The basic tokenizer does not work correctly as the end of the unicode sequence
          // is mixed together with regular text. This is a crude workaround to clean up the body.
          //
          // Without this cleanup words in links (e.g. [text](url)) or inline code blocks (e.g. `text`)
          // would not be indexed correctly.
          const cleanBody = doc.body
            .replaceAll(/\\u003c(\/?)(p|code)\\u003e/g, ' ')
            .replaceAll(/\\u003c|\\u003e/g, ' ')

          const cleanedDoc = {
            ...doc,
            body: cleanBody
          }

          byRef.set(doc.url, cleanedDoc)
          this.add(cleanedDoc)
        }
      })

      for (const query of queue) search(query)
    })

  function search(data) {
    if (!index) return queue.push(data)
    try {
      const results = searchInIndex(index, data)
      self.postMessage(JSON.stringify(results))
    } catch (err) {
      console.error('Search error', err)
      self.postMessage('[]')
    }
  }

  const api = {search}
  indexes[searchJson] = api
  return api
}

function searchInIndex(index, {query, filterTags, limit}) {
  const byDoc = {}
  for (const match of index.search(query)) {
    const ref = byRef.get(match.ref)
    const documentUrl = match.ref.replace(/#.+/, '')
    const doc = byRef.get(documentUrl)
    const byField = matchesOfFields(match)

    const url = ref.url
    const titleOrSubtitle = ref.title || ref.subtitle
    const title = highlight('title', titleOrSubtitle, byField)
    const description = highlight('description', ref.description, byField)
    const tags = ref.section
      ? ref.section
          .split(',')
          .map((l) => (l.trim() ? `<div class="tag tag--spaced">${l.trim()}</div>` : ''))
          .join('')
      : ''

    const passesFilter =
      ref.section && filterTags
        ? ref.section.split(',').some((item) => filterTags.includes(item))
        : false

    if (passesFilter) {
      byDoc[documentUrl] = byDoc[documentUrl] || {
        score: 0,
        results: [],
        title: `${tags}${doc.title === titleOrSubtitle ? '' : `<a href="${documentUrl}" class="search-results-document__title">${doc.title}</a>`}`
      }
      byDoc[documentUrl].results.push({url, title, description})
      if (match.score > byDoc[documentUrl].score) {
        byDoc[documentUrl].score = match.score
      }
    }
  }

  const results = Object.values(byDoc)
    .sort(function (a, b) {
      return b.score - a.score
    })
    .slice(0, limit)
  for (const doc of results) {
    doc.results = doc.results.slice(0, 3)
  }
  return results
}

function matchesOfFields({matchData: {metadata}}) {
  const byField = {}
  for (const match in metadata) {
    for (const field in metadata[match]) {
      if (!byField[field]) byField[field] = []
      const positions = metadata[match][field].position.filter((el) => el !== undefined)
      byField[field].push(...positions)
    }
  }

  for (const field in byField) {
    byField[field].sort(function (a, b) {
      return a[0] - b[0]
    })
  }

  return byField
}

function highlight(prop, string, matches) {
  if (!matches[prop]) return string

  let str = ''
  let offset = 0
  for (const [from, count] of matches[prop]) {
    str += `${string.substring(offset, from)}<em>${string.substr(from, count)}</em>`
    offset = from + count
  }
  str += string.substr(offset)
  return str
}

self.addEventListener(
  'message',
  function (e) {
    const data = JSON.parse(e.data)
    ;(indexes[data.index] || initializeIndex(data.index)).search(data)
  },
  false
)
