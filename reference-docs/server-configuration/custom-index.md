# Custom Elasticsearch Index

Added in: [`release-2020-12`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2020-12.md)

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

First, the `elasticIndex` server config needs to be added.

```js
// conf/environments/local.js
elasticIndex: {

  // Size of batches for background indexing
  batchSize: 1000, // default: 1000

  // Elasticsearch load in %. The background indexing process will automatically
  // be throttled when the load is higher
  maxCpu: 80, // default: 80

  // every index name will be prefixed to prevent name clashes
  // the index will be created with this pattern: `${indexNAmePrefix}-${handle}-index`
  indexNamePrefix: 'your-company-local',

  // enable/disable the Livingdocs publication index (used in the public API for search requests)
  // see: [Publication Index](../server-configuration/publication-index.md)
  documentPublicationIndexEnabled: true, // default: true

  // A custom index can be registered here
  // The live indexing hooks call every custom index and handle them
  customIndexes: [
    {
      // required
      // --------

      // used as identifier e.g. for the background indexing via CLI
      handle: 'my-custom-publication',

      // file to define the mapping and the transformation of the documents
      indexInitializationFile: require.resolve('../../app/search/my-custom-publication/init.js'),


      // optional
      // --------

      // The context is passed to the 'processBatch' and 'createBatches' function
      // With that it's possible to search/index documents based on the context
      context: {
        project: 'myProjectHandle',
        channel: 'myChannelHandle',
        documentType: 'page',
        contentType: 'regular',
        isPublished: true,
        myCustomField: 'hello world'
      },

      // When disabled, the index will be ignored for all operations
      enabled: true, // default: true

      // Overwrite the alias pointing to your elastic index
      // The default alias is the 'handle' (in this example - 'my-custom-publication')
      alias: 'an-alias'
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
 * @param {Object}   params.indexConfig important values from the customIndex config
 *                                      like handle, context, ...
 */
module.exports = async function ({server, indexConfig}) {
  const indexingRepo = server.features.api('li-indexing')._indexingRepository
  const publicationApi = server.features.api('li-documents').publication
  const metadataApi = server.features.api('li-documents').metadata

  /**
   * createBatches is an optional function to define how batch jobs for indexing are created
   *
   * Do only an implementation when you have special requirements for the context and ranges
   * Usually it's only the case when you want to index data which are not related to publications
   *
   * @param {Object}        params
   * @param {Object}        params.context
   * @param {?string}       params.context.contentType
   * @param {?string}       params.context.documentType
   * @param {?number}       params.context.projectId
   * @param {Object}        params.context.updatedAt
   * @param {number|Date}   params.context.updatedAt.from time in ms since 1970
   * @param {number}        params.batchSize
   * @returns {Promise<object>}
   *   Returns a promise object {context, ranges}
   *     context -> will be passed to 'processBatch' as context
   *     ranges  -> will be passed to 'processBatch' as range.from / range.to
   *   e.g.
   *   {
   *     context: { projectId: 2 },
   *     ranges: [
   *       [1, 4], [5, 7], [998, 1000]
   *     ]
   *   }
   */
  async function createBatches ({batchSize, context}) {
    return indexingRepo.getDocumentRanges({batchSize, ...context})
  }

  /**
   * Process a batch of documents
   *   1) Load batch of documents/publications
   *   2) Map documents/publications to Elasticsearch format
   *   3) Index documents/publications into Elasticsearch
   *
   * Both use cases
   *   - background indexing via CLI
   *   - live indexing (e.g. press the publish button in the editor)
   * call the processBatch function. The background indexing pass the 'ranges' parameter
   * and the live indexing pass the 'ids' parameter.
   *
   * @param {Object}        params
   * @param {?Object}       params.range
   * @param {?number}       params.range.from id from (for background indexing)
   * @param {?number}       params.range.to  id to (for background indexing)
   * @param {?array}        params.ids array of document ids (for live indexing)
   * @param {Object}        params.context
   * @param {?string}       params.context.contentType
   * @param {?string}       params.context.documentType
   * @param {?number}       params.context.projectId
   * @param {Object}        params.context.updatedAt
   * @param {number|Date}   params.context.updatedAt.from time in ms since 1970
   * @param {?}             params.context.myCustomValue - passed via context object of index config
   */
  async function processBatch ({context, range, ids}) {
    const documentVersions = await publicationApi.getLatestPublicationsV2({...context, ...range, ids})
    const updatedDocumentVersions = await Promise.all(documentVersions.map((d) => metadataApi.updateOnRender(d)))

    return esClient.customBulk({
      index: indexConfig.index,
      // entries to index, e.g.
      // [
      //   { operation: 'update', id: 60011, entry: { id: 60011, documentId: 60011, title: 'test' } },
      //   { operation: 'delete', id: 60012 }
      // ]
      entries: updatedDocumentVersions.map((documentVersion) => {
        const documentId = documentVersion.getDocumentId()
        // delete operation
        if (!documentVersion.publicationEntity.created_at) {
          return {
            operation: 'delete',
            id: documentId
          }
        }
        // update operation
        return {
          operation: 'update',
          id: documentId,
          entry: {
            id: documentId,
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

### Search

Based on the customIndex configs, Elasticsearch indexes are updated via live indexing (automatically after the publish event) or via background indexing (reindexing via CLI). It's possible to search in your custom index with that API below:

```js
const handle = 'my-custom-index-handle'
const idsToSearchFor = [1,17,42]
const indexingApi = await test.liServer.features.api('li-indexing')
const body = {query: {bool: {filter: {terms: {_id: idsToSearchFor}}}}}
const results = await indexingApi.search({handle, body})
```


## Index Management via CLI

### Custom Index

- A custom index can be created/updated via the CLI task `livingdocs-server elasticsearch-index --handle=your-handle`. The CLI task has a few more options to filter documents which should be indexed.
- A custom index can be deleted via the CLI task `livingdocs-server elasticsearch-delete-index --handle=your-handle`.

### Livingdocs Publication Index

The Livingdocs publication index is active by default and used for searching documents via public API. Because the publication index can't be configured, it uses a fixed handle `li-publications`.

- The index can be created/updated via the CLI task `livingdocs-server elasticsearch-index --handle=li-publications`. The CLI task has a few more options to filter documents which should be indexed.
- The index can be deleted via the CLI task `livingdocs-server elasticsearch-delete-index --handle=li-publications`.
