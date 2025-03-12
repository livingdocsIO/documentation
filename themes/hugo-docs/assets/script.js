'use strict'
const Clipboard = require('clipboard')
import * as params from '@params'

// cookies
function getCookie(name) {
  let value = `; ${document.cookie}`
  let parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

// simulate click
function simulateClick(elem) {
  var evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  })
  var canceled = !elem.dispatchEvent(evt)
}

// clipboard
for (const elem of document.querySelectorAll('.highlight')) {
  if (elem.innerText.length < 5) continue

  const copyElem = document.createElement('span')
  copyElem.className = 'copy-button'
  copyElem.innerText = 'Copy'
  elem.appendChild(copyElem, elem.nextSibling)
}

const clip = new Clipboard('.copy-button', {
  text(btn) {
    return btn.previousSibling.innerText.replace(/^\$\s/gm, '')
  }
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
  anchor.innerHTML = `<svg viewBox="0 0 24 24"><title>Anchor Link to Section</title><path fill="currentColor" d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z"></path></svg>`
  heading.insertBefore(anchor, heading.firstChild)
  heading.insertBefore(anchorOffset, heading.firstChild)
  heading.removeAttribute('id')
}

const anchorElements = document.querySelectorAll(
  '.page__content h2, .page__content h3, .page__content h4'
)
for (const elem of anchorElements) appendAnchor(elem)

// Add target = _blank to all external links.
document.addEventListener(
  'click',
  function (e) {
    if (e.target.tagName !== 'A') return
    const url = new URL(e.target.href, window.location.href)
    if (url.hostname === window.location.hostname) return
    e.target.target = '_blank'
  },
  true
)

/**
 * Search Support
 */
const search = document.querySelector('.menu-search')
const cancelButton = search.querySelector('.menu-search__icon--cancel')
const searchInput = search.querySelector('.menu-search__field')
const searchBox = search.querySelector('.search-box')
const searchResults = search.querySelector('.search-results')

document.addEventListener('DOMContentLoaded', function () {
  const urlQueryParameter = new URL(window.location.href).searchParams.get('q')
  if (urlQueryParameter) searchInput.value = urlQueryParameter

  searchInput.focus()

  let activeSearchFilters = getCookie('li-documentation-search-filters')
  if (activeSearchFilters !== undefined) {
    const filterHandles = activeSearchFilters.split(',')

    const searchFilters = document.querySelectorAll('.js-search-filter')
    searchFilters.forEach(function (searchFilter) {
      const handle = searchFilter.getAttribute('data-filter-handle')
      if (filterHandles.indexOf(handle) > -1) {
        searchFilter.classList.add('is-active')
      } else {
        searchFilter.classList.remove('is-active')
      }
    })
  }
})

let documentResultsTemplate = document.createElement('div')
documentResultsTemplate.innerHTML = [
  `<div class="search-results-document">`,
  `<div class="search-results-document__tags"></div>`,
  `<div class="search-results-document__content"></div>`,
  `</div>`
].join('')
documentResultsTemplate = documentResultsTemplate.firstElementChild

let searchResultTemplate = document.createElement('div')
searchResultTemplate.innerHTML = [
  `<a class="search-results-line">`,
  `<div class="search-results-line__title"></div>`,
  `<div class="search-results-line__text"></div>`,
  `</a>`
].join('')
searchResultTemplate = searchResultTemplate.firstElementChild

function hideSearchResults(deleteQuery) {
  if (deleteQuery) {
    searchInput.value = ''
    searchResults.innerHTML = ''
  }
  cancelButton.classList.remove('visible')
  searchBox.classList.remove('visible')
}

function showSearchResults() {
  cancelButton.classList.add('visible')
  searchBox.classList.add('visible')
}

cancelButton.addEventListener('click', () => hideSearchResults(true))
document.body.addEventListener('click', (evt) => {
  if (search.contains(evt.target)) return
  hideSearchResults(false)
})

let searchWorker
searchInput.addEventListener('focus', (evt) => {
  if (!searchWorker) searchWorker = createSearchWorker()
  startSearch({})
})

async function startSearch(e) {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Enter') return
  if (e.key === 'Escape') return hideSearchResults(false)

  searchFocusIndex = -1

  const results = []
  const words = searchInput.value.split(/[: ]/).filter(Boolean).join(' ')

  const searchFilters = document.querySelectorAll('.js-search-filter.is-active')
  const filterTags = []

  searchFilters.forEach(function (searchFilter) {
    filterTags.push(searchFilter.getAttribute('data-filter-handle'))
  })

  if (!words.length) return hideSearchResults(true)
  else showSearchResults()
  for (const doc of await searchWorker.search({
    index: params.searchJson,
    query: words,
    filterTags,
    limit: 20
  })) {
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

  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-results__no-results">No results found…</div>'
  } else {
    searchResults.innerHTML = ''
    searchResults.append(...results)
  }
}

let searchFocusIndex = -1

function changeSearchFocus(direction) {
  const results = document.querySelectorAll('.search-results-document')
  if (results[searchFocusIndex] !== undefined) {
    results[searchFocusIndex].classList.remove('is-focussed')
  }
  searchFocusIndex = searchFocusIndex + direction
  if (searchFocusIndex < 0) {
    searchFocusIndex = -1
    searchInput.focus()
  } else if (results[searchFocusIndex] === undefined) {
    searchFocusIndex = searchFocusIndex - direction
  }
  if (results[searchFocusIndex] !== undefined) {
    results[searchFocusIndex].classList.add('is-focussed')
    results[searchFocusIndex].scrollIntoView({behavior: 'smooth', block: 'center'})
    searchInput.blur()
  }
}

searchInput.addEventListener('keyup', (e) => {
  startSearch(e)
})

// prevent browser default key actions as they are captured by the search input
window.addEventListener(
  'keydown',
  function (e) {
    // Do not prevent CMD+ArrowUp/ArrowDown
    if (e.metaKey) return

    if (['ArrowUp', 'ArrowDown'].indexOf(e.code) > -1) {
      e.preventDefault()
    }
  },
  false
)

// add custom key actions
document.addEventListener('keyup', (e) => {
  // check for up, down and enter keys
  if (e.key === 'ArrowUp') {
    changeSearchFocus(-1)
  } else if (e.key === 'ArrowDown') {
    changeSearchFocus(1)
  } else if (e.key === 'Enter') {
    const focussedLink = document.querySelector('.search-results-document.is-focussed a')
    simulateClick(focussedLink)
  }
})

function createSearchWorker() {
  const worker = new Worker(params.lunrWorker)
  const queue = []
  let current

  function trigger() {
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
    search(body) {
      if (!body) return []
      return new Promise((resolve) => {
        queue.push({body, resolve})
        if (!current) trigger()
      })
    }
  }
}

/**
 * Pills
 */
const pills = document.querySelectorAll('.pill')

pills.forEach(function (pill) {
  pill.addEventListener('click', (evt) => {
    evt.target.classList.toggle('is-active')
  })
})

const searchFilterPills = document.querySelectorAll('.js-search-filter')

pills.forEach(function (pill) {
  pill.addEventListener('click', (evt) => {
    // update cookie with new filter selection
    const activeSearchFilters = document.querySelectorAll('.js-search-filter.is-active')
    let filters = ' '
    activeSearchFilters.forEach(function (searchFilter) {
      filters += `${searchFilter.getAttribute('data-filter-handle')},`
    })
    filters = filters.slice(0, -1)
    document.cookie = `li-documentation-search-filters=${filters};path=/;`

    // start search feature
    startSearch(evt)
  })
})

/**
 * Mobile burger navigation
 */
const burger = document.querySelector('.header__burger')
const page = document.querySelector('.page')
const conent = document.querySelector('.page__content')

burger.addEventListener('click', (evt) => {
  page.classList.toggle('show-navigation')
})

conent.addEventListener('click', (evt) => {
  page.classList.remove('show-navigation')
})

/**
 * Response Code Visibility
 */
const teaserAndCodes = document.querySelectorAll('.teaser-and-code')

teaserAndCodes.forEach(function (teaserAndCode) {
  if (teaserAndCode.querySelector('.code-teaser--with-interaction') != undefined) {
    teaserAndCode
      .querySelector('.code-teaser--with-interaction')
      .addEventListener('click', (evt) => {
        const highlight = evt.target.closest('.teaser-and-code').querySelector('.highlight')
        const teaser = evt.target.closest('.teaser-and-code').querySelector('.code-teaser')
        const code = evt.target.closest('.teaser-and-code').querySelector('.teaser-and-code__code')

        const codeHeight = code.offsetHeight
        let targetHeight = highlight.offsetHeight + 1 // + 1 to make up for calculation inacurracy
        if (codeHeight > 0) targetHeight = 0

        teaser.classList.toggle('code-teaser--open')
        code.classList.toggle('show')
        code.style.height = `${targetHeight}px`
      })
  }
})

/**
 * Versioning
 */
document.addEventListener('DOMContentLoaded', function () {
  const currentUrl = new URL(window.location.href)
  const currentVersion = currentUrl.searchParams.get('version') ?? params.currentApiVersion

  function getVersion(v) {
    if (v === 'v1') return 1
    if (v === 'beta') return 2
    return new Date(v).getTime()
  }

  const endpointGroups = [...document.querySelectorAll('[data-endpoint]')].reduce(
    (byGroups, el) => {
      try {
        const endpoint = JSON.parse(el.getAttribute('data-endpoint'))
        byGroups[endpoint.endpointId] ??= []
        byGroups[endpoint.endpointId].push({...endpoint, el})
      } catch (_err) {}
      return byGroups
    },
    {}
  )

  function versionMatchesRange(version, range) {
    const current = getVersion(version)
    for (const key in range) {
      const compare = getVersion(range[key])
      if (key === 'eq' && !(current === compare)) return false
      if (key === 'neq' && !(current !== compare)) return false
      if (key === 'lte' && !(current <= compare)) return false
      if (key === 'lt' && !(current < compare)) return false
      if (key === 'gte' && !(current >= compare)) return false
      if (key === 'gt' && !(current > compare)) return false
    }
    return true
  }

  for (const endpointId in endpointGroups) {
    const endpoints = endpointGroups[endpointId].sort(
      (a, b) => getVersion(a.latest) - getVersion(b.latest)
    )

    if (endpoints.length < 2) continue
    let keep
    for (const endpoint of endpoints) {
      if (versionMatchesRange(currentVersion, endpoint.apiVersionConstraints)) {
        keep = endpoint
        break
      }
    }

    if (!keep) keep = endpoints[0]
    for (const endpoint of endpoints) {
      if (keep === endpoint) continue
      endpoint.el.remove()
    }
  }
})

/**
 * Header while Scrolling
 */
let lastScrollingPosition = 0

document.addEventListener('scroll', (evt) => {
  const body = document.querySelector('body')
  const currentScrollPosition = window.pageYOffset
  if (currentScrollPosition > lastScrollingPosition) {
    body.classList.add('is-scrolled')
  } else {
    body.classList.remove('is-scrolled')
  }
  lastScrollingPosition = currentScrollPosition
})

/**
 * Fix back buttons for anchors
 */
const menuHeight = 65
window.addEventListener(
  'hashchange',
  function (evt) {
    const maincontent = document.querySelector('html')
    if (!maincontent) return

    let elem = document.getElementById(window.location.hash.replace('#', ''))
    if (!elem) {
      maincontent.scrollTop = 0
    } else {
      maincontent.scrollTop = offsetTopToParent(maincontent, elem) - menuHeight
    }
  },
  true
)

function offsetTopToParent(parent, elem) {
  let y = 0
  while (elem) {
    if (elem === parent) break
    y += elem.offsetTop
    elem = elem.offsetParent
  }
  return y
}
