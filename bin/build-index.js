const fs = require('fs')
const {Parser} = require('htmlparser2')
const {DomHandler} = require('domhandler')
const {getText, hasAttrib, getAttributeValue, textContent} = require('domutils')

buildIndex('./public/search.json')

function buildIndex(file) {
  const json = JSON.parse(fs.readFileSync(file, 'utf8'))

  const index = []
  for (const doc of json) parseDocument(index, doc)

  fs.writeFileSync(file, JSON.stringify(index))
}

function parseDocument(index, data) {
  const dom = getDom(data.body)
  let current = prepareDataForIndex(data)
  index.push(current)

  for (const elem of dom) {
    if (elem.type === 'text') {
      if (!elem.data.trim()) continue
      current.body += `\n${elem.data.trim()}`
    } else if (elem.type === 'tag') {
      if (elem.name.startsWith('h')) {
        current = prepareDataForIndex(data, elem)
        index.push(current)
      } else {
        current.body += `\n${getText(elem)}`
      }
    }
  }

  console.log('Processed document %s: %s', data.title, data.url)
}

function prepareDataForIndex(data, elem) {
  // Keyword customisations
  const additionalKeywords = []
  if (data.type === 'metadata-plugins') {
    additionalKeywords.push('Metadata Plugin')
  }

  const dataForIndex = {
    url: data.url,
    section: data.section,
    categories: data.categories,
    title: data.title,
    description: (data.description || '').trim(),
    keywords: [...(data.keywords || []), ...additionalKeywords].join(', '),
    body: ''
  }

  // Customisation for page sections
  if (elem) {
    if (hasAttrib(elem, 'id')) dataForIndex.url = `${data.url}#${getAttributeValue(elem, 'id')}`
    dataForIndex.title = ''
    dataForIndex.subtitle = textContent(elem).trim()
    dataForIndex.description = ''
  }

  return dataForIndex
}

function getDom(body) {
  let dom
  const parser = new Parser(
    new DomHandler(function (err, _dom) {
      if (err) throw err
      dom = _dom
    })
  )
  parser.write(JSON.parse(body))
  parser.end()
  return dom
}
