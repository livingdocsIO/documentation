'use strict';
const Clipboard = require('clipboard')

// clipboard
for (const elem of document.querySelectorAll('.highlight')) {
  if (elem.innerText.length < 5) continue

  const copyElem = document.createElement('span')
  copyElem.className = 'copy-btn'
  copyElem.innerText = 'Copy'
  elem.appendChild(copyElem, elem.nextSibling)
}

const clip = new Clipboard('.copy-btn', {
  text (btn) { return btn.previousSibling.innerText.replace(/^\$\s/gm, '') }
})

clip.on('success', function (e) {
  e.clearSelection()
  e.trigger.innerText = 'Copied to clipboard!'
  e.trigger.classList.add('copied')

  window.setTimeout(function () {
    e.trigger.innerText = 'Copy'
    e.trigger.classList.remove('copied')
  }, 2000)
})

clip.on('error', function (e) {
  e.clearSelection()
  e.trigger.innerText = 'Error copying'
  window.setTimeout(function () {
    e.trigger.innerText = 'Copy'
  }, 2000)
})

// Anchor tags for headings
function appendAnchor(heading) {
  const id = heading.id
  if (!id) return
  const anchorOffset = document.createElement('div')
  anchorOffset.className = 'anchor-offset'
  anchorOffset.id = id

  const anchor = document.createElement('a')
  anchor.href = `#${id}`
  anchor.className = 'anchor'
  anchor.innerHTML = `<svg viewBox="0 0 24 24"><title>link-variant</title><path d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"></path></svg>`
  heading.insertBefore(anchor, heading.firstChild)
  heading.insertBefore(anchorOffset, heading.firstChild)
  heading.removeAttribute('id')
}

const anchorElements = document.querySelectorAll('.content-wrapper h2, .content-wrapper h3, .content-wrapper h4')
for (const elem of anchorElements) appendAnchor(elem)

// Add target = _blank to all external links.
document.addEventListener('click', function (e){
  if (e.target.tagName !== 'A') return
  const url = new URL(e.target.href, window.location.href)
  if (url.hostname === window.location.hostname) return
  e.target.target = '_blank'
},true)

const search = document.querySelector('.menu-search')
const cancelButton = search.querySelector('.cancel')
const searchInput = search.querySelector('input')
const searchModal = search.querySelector('.search-results')

let documentResultsTemplate = document.createElement('div')
documentResultsTemplate.innerHTML = [
  `<div class="search-results--document">`,
      `<div class="title"></div>`,
      `<div class="results"></div>`,
  `</div>`
].join('')
documentResultsTemplate = documentResultsTemplate.firstElementChild

let searchResultTemplate = document.createElement('div')
searchResultTemplate.innerHTML = [
  `<a class="search-results--entry">`,
      `<div class="title"></div>`,
      `<div class="description"></div>`,
  `</a>`
].join('')
searchResultTemplate = searchResultTemplate.firstElementChild


function hideSearchResults (deleteQuery) {
  if (deleteQuery) {
    searchInput.value = ''
    searchModal.innerHTML = ''
  }
  cancelButton.classList.remove('visible')
  searchModal.classList.remove('visible')
}

function showSearchResults () {
  cancelButton.classList.add('visible')
  searchModal.classList.add('visible')
}

cancelButton.addEventListener('click', () => hideSearchResults(true))
document.body.addEventListener('click', (evt) => {
  if (search.contains(evt.target)) return
  hideSearchResults(false)
})

let searchWorker
searchInput.addEventListener('focus', (evt) => {
  if (searchInput.value) showSearchResults()
  if (!searchWorker) {
    searchWorker = createSearchWorker()
    searchWorker.search({index: window.searchJson, query: '', limit: 0})
  }
})

searchInput.addEventListener('keyup', async (e) => {
  if (e.key === 'Escape') return hideSearchResults(false)

  const results = []
  const words = searchInput.value.split(/[: ]/).filter(Boolean).join(' ')
  if (!words.length) return hideSearchResults(true)
  else showSearchResults()
  for (const doc of await searchWorker.search({index: window.searchJson, query: words, limit: 20})) {
    const docElem = documentResultsTemplate.cloneNode(true)
    docElem.firstChild.innerHTML = doc.title
    for (const result of doc.results) {
      const el = searchResultTemplate.cloneNode(true)
      el.href = result.url
      el.firstChild.innerHTML = result.title

      if (result.description) {
        el.firstChild.nextSibling.innerHTML = result.description
      } else {
        el.removeChild(el.firstChild.nextSibling)
      }
      docElem.firstChild.nextSibling.append(el)
    }

    results.push(docElem)
  }

  searchModal.innerHTML = ''
  searchModal.append(...results)
})

function createSearchWorker () {
  const worker = new Worker(document.head.querySelector('link[rel=lunr]').href)
  const queue = []
  let current

  function trigger () {
    current = queue.pop()
    queue.length = 0
    worker.postMessage(JSON.stringify(current.body))
  }

  worker.onmessage = function (e) {
    current.resolve(JSON.parse(e.data))
    current = undefined
    if (queue.length) trigger()
  }

  return {
    search (body) {
      if (!body) return []
      return new Promise((resolve) => {
        queue.push({body, resolve})
        if (!current) trigger()
      })
    }
  }
}
