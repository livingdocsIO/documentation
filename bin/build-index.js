const fs = require('fs')
const {Parser} = require("htmlparser2")
const {DomHandler} = require("domhandler")
const {getText, hasAttrib, getAttributeValue} = require('domutils')

buildIndex('./public/search.json')

function buildIndex (file) {
  const json = JSON.parse(fs.readFileSync(file, 'utf8'))

  const index = []
  for (const doc of json) parseDocument(index, doc)

  fs.writeFileSync(file, JSON.stringify(index))
}

function parseDocument (index, {url, section, categories, title, description, body}) {
  const dom = getDom(body)

  let current = {
    url,
    section,
    categories,
    title,
    description: description || '',
    body: '',
  }

  index.push(current)
  for (const elem of dom) {
    if (elem.type === 'text') {
      if (!elem.data.trim()) continue
      current.body += `\n${elem.data.trim()}`
    } else if (elem.type === 'tag') {
      if (elem.name.startsWith('h')) {
        const sectionTitle = getText(elem).trim()
        current = {
          url: hasAttrib(elem, 'id') ? `${url}#${getAttributeValue(elem, 'id')}` : url,
          section: section,
          categories,
          title: sectionTitle,
          description: sectionTitle === title ? (description || '').trim() : '',
          body: '',
        }

        index.push(current)
      } else {
        current.body += `\n${getText(elem)}`
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
