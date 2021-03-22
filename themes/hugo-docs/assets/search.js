const lunr = require('lunr')

let index
const queue = []
const byRef = new Map()
fetch('/search.json')
	.then(response => response.json())
	.then((documents) => {
		index = lunr(function () {
			// this.pipeline.remove(lunr.trimmer)

			this.ref('url')
			this.field('title')
			this.field('description')
			this.field('body')
	    this.metadataWhitelist = ['position']

			for (const doc of documents) {
				byRef.set(doc.url, doc)
				this.add(doc)
			}
		})

		for (const query of queue) search(query)
	})

function search ({query, limit}) {
	const byDoc = {}
	let count = 0
	for (const match of index.query(queryFunction.bind(this, query))) {
		count++
		const ref = byRef.get(match.ref)
		const documentUrl = match.ref.replace(/#.+/, '')
		const doc = byRef.get(documentUrl)
		const byField = matchesOfFields(match)

		const url = ref.url
		const title = highlight('title', ref.title, byField)
		const description = highlight('description', ref.description, byField)
		byDoc[documentUrl] = byDoc[documentUrl] || {score: 0, results: [], title: `${doc.title} <small>${ref.section}</small>`}
		byDoc[documentUrl].results.push({url, title, description})
		byDoc[documentUrl].score += match.score
		if (count === limit) break
	}

	const results = Object.values(byDoc).sort(function (a, b) { return b.score - a.score })
	self.postMessage(JSON.stringify(results))
}

function matchesOfFields ({matchData: {metadata}}) {
	const byField = {}
	for (const match in metadata) {
		for (const field in metadata[match]) {
			if (!byField[field]) byField[field] = []
			byField[field].push(...metadata[match][field].position)
		}
	}

	for (const field in byField) {
		byField[field].sort(function (a, b) { return a[0] - b[0] })
	}

	return byField
}

function highlight (prop, string, matches) {
	if (!matches[prop]) return string

	let str = ''
	let offset = 0
	for (const [from, count] of matches[prop]) {
		str += `${string.substring(offset, from)}<i>${string.substr(from, count)}</i>`
		offset = from + count
	}
	str += string.substr(offset)
	return str
}

function queryFunction (query, q) {
	const words = query.toLowerCase().split(/[ .]/).filter(Boolean)

	// how to properly normalize the string?
	const segments = words.map((k) => index.pipeline.runString(k)[0])

	q.term(words, {
		usePipeline: true,
		editDistance: 1,
		boost: 50,
		fields: ['title', 'description'],
		wildcard: lunr.Query.wildcard.TRAILING
	})

	q.term(segments, {
		fields: ['title', 'description', 'body'],
		boost: 5,
		editDistance: 0,
		usePipeline: false
	})

  new lunr.QueryParser(query, q).parse()
}


self.addEventListener('message', function (e) {
	if (!index) queue.push(JSON.parse(e.data))
	else search(JSON.parse(e.data))
}, false)
