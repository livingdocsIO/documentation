const fs = require('fs')
const lunr = require('lunr')
const {Parser} = require("htmlparser2")
const {DomHandler} = require("domhandler")
const {getText, hasAttrib, getAttributeValue} = require('domutils')
const json = JSON.parse(fs.readFileSync('./public/search.json', 'utf8'))

const index = []
for (const doc of json) parseDocument(index, doc)

fs.writeFileSync('./public/search.json', JSON.stringify(index))

function parseDocument (index, {url, section, categories, title, description, body}) {
  const dom = getDom(body)

  let segmentUrl = url
  let sectionTitle = title || ''
  let sectionText = description || ''
  for (const elem of dom) {
    if (elem.type === 'text') {
      if (!elem.data.trim()) continue
      sectionText += `\n${elem.data.trim()}`
    } else if (elem.type === 'tag') {
      if (elem.name.startsWith('h')) {
        index.push({
          url: segmentUrl,
          section: section,
          categories: [],
          title: (sectionTitle || '').trim(),
          description,
          body: (sectionText || '').trim(),
        })

        segmentUrl = url
        if (hasAttrib(elem, 'id')) segmentUrl += `#${getAttributeValue(elem, 'id')}`
        sectionTitle = getText(elem)
        sectionText = ''
      } else {
        sectionText += `\n${getText(elem)}`
      }
    }
  }

  console.log('Processed document %s: %s', title, url)
}

function getDom (body) {
  let dom
  const parser = new Parser(new DomHandler(function (err, _dom) {
    if (err) throw err
    dom = _dom
  }))
  parser.write(JSON.parse(body))
  parser.end()
  return dom
}
