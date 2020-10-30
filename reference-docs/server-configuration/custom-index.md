# Custom Elasticsearch Index

Livingdocs allows to index data (e.g. publications) in Elasticsearch with custom data and mapping. The customer fully controls what data and format is indexed. The core server supports the indexing process with
- Data transformation hooks for processing
- Creating/processing the data via batches/jobs
- CLI support for background indexing
- Reporting

The Livingdocs publication index [Publication Index](../server-configuration/publication-index.md) uses the same custom index approach, which is available by default for every customer.

## Reasons for Using a Custom Elasticsearch Index

We suggest to use the [Publication Index](../server-configuration/publication-index.md) if possible. But there are reasons why a custom index is the better approach.

- maximum flexibility
- index other data than metadata
- index metadata in another format
- index resolved document references
- optimised search queries
- index other data than publications (e.g. data from your own feature)

## Setup a Custom Index

An integration is based on the server config and the initialisation file which contains the transformation, thats it!

First, one needs to setup the configuration. You can see an example below.

```js
// conf/environments/local.js
elasticIndex: {

  // Size of batches for background indexing
  // default: 1000
  batchSize: 1000,

  // Elasticsearch load in %. The background indexing process will automatically
  // be throttled when the load is higher
  // default: 80
  maxCpu: 80,

  // enable/disable the Livingdocs publication index (used in the public API for search requests)
  // see: [Publication Index](../server-configuration/publication-index.md)
  // default: true
  documentPublicationIndexEnabled: true,

  // A custom index can be registered here
  // The indexing hooks call every custom index and handle them
  customIndexes: [
    {
      // used as identifier e.g. for the background indexing via CLI
      handle: 'my-custom-publication',
      // file to define the mapping and the transformation of the documents
      indexInitializationFile: require.resolve('../../app/search/my-custom-publication/init.js')
    }
  ]
},
```

As a second step the initialisation file needs to be implemented. You will see an example below.
The init file returns an object with 3 properties:
- `elasticsearchMapping` - defines the Elasticsearch mapping for the custom index
- `processBatch` - load/transform and put documents into the indexing job queue
- `createBatches` - create batches definition based on the provided filters and batchSize parameters - **optional function (usually just leave it out)**

```js
// app/search/my-custom-publication/init.js
const elasticsearchMapping = require('./mapping.json')

/**
 *
 * @param {Object}   params
 * @param {Object}   params.server upstream server instance
 */
module.exports = async function ({server}) {
  // TODO: up or downstream server? based on that, change the description
  const indexApi = server.features.api('li-indexing').index

  /**
   * createBatches is an optional function to define how batch jobs for indexing are created
   *
   * Do only an implementation when you have special requirements for the context and ranges
   * Usually it's only the case when you want to index data which are not related to publications
   *
   * @param {Object}   params
   * @param {Object}   params.filter
   * @param {?string}  params.filter.contentType
   * @param {?string}  params.filter.documentType
   * @param {?number}  params.filter.projectId
   * @param {number}   params.batchSize
   * @returns {Promise<object>}
   *   Returns a promise object {context, ranges}
   *     context -> will be passed to 'processBatch' as payload
   *     ranges  -> will be passed to 'processBatch' as payload.from / payload.to
   *   e.g.
   *   {
   *     context: { projectId: 2 },
   *     ranges: [
   *       [1, 4], [5, 7], [998, 1000]
   *     ]
   *   }
   */
  async function createBatches ({batchSize, filter}) {
    return indexApi._createDocumentBatches({batchSize, ...filter})
  }

  /**
   * Process a batch of documents
   *   1) Load batch of documents/publications
   *   2) Map documents/publications to Elasticsearch format
   *   3) Index documents/publications into Elasticsearch
   *
   * @param {Object}   params
   * @param {Object}   params.payload
   * @param {string}   params.payload.op - operation
   *   live indexing:        either 'update' / 'delete'
   *   background indexing:  undefined
   * @param {number}   params.payload.from - range (document)Id from
   * @param {number}   params.payload.to - range (document)Id to
   * @param {?string}  params.payload.contentType
   * @param {?string}  params.payload.documentType
   * @param {?number}  params.payload.projectId
   * @param {Object}   params.customIndexConfig - server config elasticIndex.customIndexes[{}]
   */
  async function processBatch ({payload, customIndexConfig}) {
    const publications = await indexApi.fetchPublications({payload})
    return indexApi.bulk({
      handle: customIndexConfig.handle,
      // entries to index, e.g.
      // [
      //   { op: 'update', id: 60011, entry: { id: 60011, documentId: 60011, title: 'test' } },
      //   { op: 'delete', id: 60012 }
      // ]
      entries: publications.map((publication) => {
        // delete operation
        if (!publication.created_at) {
          return {
            op: 'delete',
            id: `${publication.project_id}:${publication.document_id}`
          }
        }
        // update operation
        return {
          op: 'update',
          id: `${publication.project_id}:${publication.document_id}`,
          entry: {
            id: `${publication.project_id}:${publication.document_id}`,
            title: publication.title
          }
        }
      })
    })
  }

  return {
    elasticsearchMapping,
    createBatches,
    processBatch
  }
}
```

```json
// app/search/my-custom-publication/mapping.js
{
  "dynamic": "strict",
  "properties": {
    "id": {
      "type": "keyword",
      "index": true
    },
    "documentId": {
      "type": "long",
      "index": true
    },
    "title": {
      "type": "keyword",
      "index": true
    }
  }
}
```


## Server API

TODO: add example for live indexing
TODO: How to make a search query


## Index Management via CLI

TODO: add screenshot (index/delete index)

### Custom Index

- A custom index can be created/updated via the CLI task `livingdocs-server elasticsearch-index --handle=your-handle`. The CLI task has a few more options to filter documents which should be indexed.
- A custom index can be deleted via the CLI task `livingdocs-server elasticsearch-delete-index --handle=your-handle`.

### Livingdocs Publication Index

The Livingdocs publication index is active by default and used for searching documents via public API. Because the publication index can't be configured, it uses a fixed handle `li-publications`.

- The index can be created/updated via the CLI task `livingdocs-server elasticsearch-index --handle=li-publications`. The CLI task has a few more options to filter documents which should be indexed.
- The index can be deleted via the CLI task `livingdocs-server elasticsearch-delete-index --handle=li-publications`.
