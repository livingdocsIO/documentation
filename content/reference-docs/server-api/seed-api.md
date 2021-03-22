---
title: Seed API
menus:
  reference-docs:
    parent: Server API
---

The Seed API provides a simple way to programmatically seed a project with e.g. documents. A common use case might be to set up an example project with sample documents to showcase the various design possibilities and how the documents are linked with each other.

```js
const seedApi = liServer.features.api('li-seed')
```

## Documents

### Input Format

A seed document should have the same structure (schema / format) as one would get when requesting the public API for `GET api/v1/documents/:documentId/latestPublication`.

This way one might be able to export specific documents through the public API and use those as seed data.

Example:

```js
const expectedDocumentFormat = {
  systemdata: {},
  metadata: {},
  content: []
}
```

### `async seedDocument()`

You can seed single documents.

Example:

```js
const seedApi = liServer.features.api('li-seed')

const params = {projectId: 1, channelId: 1}
const serialisedDocument = require('./my_awesome_doc')

// if we have a seed identifier, we can pass it to the options to have more detailed validation errors
// and also provide better seed information to map the actual created document to the seed data
const options = {seedDocumentId: serialisedDocument.id}
// to automatically publish the seeded document: options.publish = true

const seedData = {options, document: serialisedDocument}
const documentVersion = await seedApi.seedDocument(params, seedData)
```

#### `componentVisitor`

Optionally, you could manipulate components in the seed data before persistence.

Example:

```js
const documentVersion = await seedApi.seedDocument(params, seedData, {
  componentVisitor (component, params, data) {
    if (component.componentName !== 'head') return

    const {document} = params // document: DocumentEntityManager - the created empty doc
    const {seedDocument, seedDesign} = data // seedDocument: Object, seedDesign: Design

    const titleDirective = component.directives.get('title')
    titleDirective.setContent('Hello from seed visitor!')
  }
})
```

### `async seedDocuments()`

You can seed multiple documents at once.

Example:

```js
const seedApi = liServer.features.api('li-seed')

const myFirstSeedDoc = require('./my_first_awesome_doc')
const mySecondSeedDoc = require('./my_second_awesome_doc')
const myThirdSeedDoc = require('./my_third_awesome_doc')

const params = {projectId: 1, channelId: 1}
const seedDocumentsData = [
  {
    options: {
      publish: true,
      seedDocumentId: myFirstSeedDoc.id
    },
    document: myFirstSeedDoc
  },
  {
    options: {
      publish: false,
      seedDocumentId: mySecondSeedDoc.id
    },
    document: mySecondSeedDoc
  },
  // options is optional
  // NOTE: options.seedDocumentId is required to have this doc
  // mapped in "documentsBySeedId" in case there will be a
  // "componentVisitor" applied that needs this info (see below)
  {
    document: myThirdSeedDoc
  }
]

const documentVersions = await seedApi.seedDocuments(params, seedDocumentsData)
```

#### `componentVisitor`

Optionally, you could manipulate components in the seed data before persistence.

Example:

```js
const documentVersions = await seedApi.seedDocuments(params, seedDocumentsData, {
  componentVisitor (component, params, data) {
    if (!component.directives) return

    const {
      document, // DocumentEntityManager - the created actual empty doc
      documentsBySeedId // { [seedDocumentId:number]: DocumentEntity }
    } = params
    const {seedDocument, seedDesign} = data // seedDocument: Object, seedDesign: Design

    // E.g. remap existing refs to actual persisted documents
    component.directives.eachInclude(includeDirective => {
      const {service, params} = includeDirective.getContent()
      if (service === 'teaser') {
        const seedDocumentId = params.mediaId
        const documentEntity = documentsBySeedId[seedDocumentId]
        if (!documentEntity) throw new Error('No document found in mapping')

        const mediaId = documentEntity.id
        includeDirective.setParams({...params, mediaId})
      }
    })
  }
})
```

Note that in the plural version, the componentVisitor gets a mapping through the params argument called `documentsBySeedId`, which for each provided `options.seedDocumentId` holds a reference to the created documentEntity. This is especially useful to re-map existing references in includes/teasers etc.
