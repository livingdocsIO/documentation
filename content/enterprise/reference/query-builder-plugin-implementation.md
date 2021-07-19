---
title: Elasticsearch Query Implementation
---

This is an example of the current Elasticsearch [search request body](https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-body.html) function to define your own search function for documents.

```js
const _ = require('lodash')

// Creates an Elasticsearch query
//
// Use multiplication to combine time and query score
// Add a minimum function_score for old documents, otherwise it would
// multiply with 0 after 1000 days of linear boost
//
// @param {String} searchQuery 'hello world'
// @returns {Object} Elasticsearch body.query
module.exports = function (searchQuery) {
  if (_.isEmpty(searchQuery)) { return }

  return {
    bool: {
      must: [
        {
          function_score: {
            query: {
              bool: {
                should: getBoolQuery(searchQuery)
              }
            },
            functions: getFunctionsForScore(),
            score_mode: 'max',
            boost_mode: 'multiply'
          }
        }
      ]
    }
  }
}


const getBoolQuery = function (searchQuery) {
  const trimmedSearchQuery = searchQuery.trim()

  // exact match a document.id
  if (/^\d+$/g.test(trimmedSearchQuery)) {
    const documentId = parseInt(trimmedSearchQuery)
    return [getExactMatchDocumentIdQuery(documentId)]
  }

  // query has a quotation
  const prefixQuery = stripQuotationOrReturnUndefined(searchQuery)
  if (prefixQuery) {
    return [getPhrasePrefixQuery(prefixQuery)]
  }

  // default
  return [
    getPhrasePrefixQuery(searchQuery),
    getExactFieldsQuery(searchQuery),
    getFullTextQuery(searchQuery)
  ]
}

function getFunctionsForScore () {
  return [
    {
      gauss: {
        'document.updated_at': {
          scale: '14d',
          decay: 0.5,
          offset: '7d'
        }
      },
      weight: 1
    },
    {
      linear: {
        'document.updated_at': {
          scale: '1000d',
          decay: 0.5,
          offset: '0'
        }
      },
      weight: 0.1
    },
    {
      weight: 0.01
    }
  ]
}

const getPhrasePrefixQuery = function (searchQuery) {
  const boost = 1.0

  return {
    multi_match: {
      boost: boost,
      query: searchQuery,
      type: 'phrase_prefix',
      fields: ['document.title^3', 'document.html']
    }
  }
}

const getExactFieldsQuery = function (searchQuery) {
  const boost = 100.0
  const fieldsToQuery = ['document.title^5', 'document.html']
  const tieBreaker = 0.3

  return {
    multi_match: {
      boost: boost,
      query: searchQuery,
      type: 'best_fields', // take the score of the best field and ..
      fields: fieldsToQuery,
      tie_breaker: tieBreaker, // .. add 30% of the score of all other matching fields
      operator: 'and'
    }
  }
}

const getFullTextQuery = function (searchQuery) {
  const boost = 1.0
  const fieldsToQuery = ['document.title^5', 'document.html']
  const tieBreaker = 0.3

  return {
    multi_match: {
      boost: boost,
      query: searchQuery,
      type: 'best_fields',
      fields: fieldsToQuery,
      tie_breaker: tieBreaker,
      operator: 'or'
    }
  }
}

const getExactMatchDocumentIdQuery = function (documentId) {
  return {
    match: {
      'document.id': {
        query: documentId
      }
    }
  }
}

const stripQuotationOrReturnUndefined = function (searchQuery) {
  const quotationRegex = /^"(.*)"$/g
  const regexResult = quotationRegex.exec(searchQuery)
  if (regexResult) {
    return regexResult[1]
  }
  return undefined
}
```
