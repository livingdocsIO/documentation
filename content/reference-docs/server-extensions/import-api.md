---
title: Import API
weight: 4
menus:
  reference-docs:
    parent: Server Extensions
---

## `import`

The Import API provides a possibility to programmatically create Documents. One popular use case is to funnel Documents from news aggregators into Livingdocs.
Another very common use case is [importing old articles]({{< ref "/guides/setup/import-legacy-system-documents.md" >}}) and having Livingdocs as the single source of truth.
The Import API saves your raw documents appropriately - to database and Elasticsearch.

The Import function has the following signature

```js
const importLog = await import({importJob, rawDocument, shouldCreateNew, updateCondition, userId})
```

### `importJob`

`importJob` is an `object` that contains data about the Document that is being imported.

* `systemName`: A `string` identifying your importer, e.g. `hugo-importer`.
* `externalId`: A `string` identifying your resource on the external system. This Id should be unique so depending on your case prefixing it with the name of that system might be feasible, e.g. `hugo:1234` instead of `1234`.
* `checksum`: An arbitrary `string` which allows you to determine whether it's an update.
* `projectId`: A `number` containing the Id of the Project you want the Document to import to.
* `channelid`: A `number` containing the Id of the Channel you want the Document to import to.
* `contentType`: A `string`, the desired `contentType` of your Document.
* `title`: A `string`, the title of your Document.
* `publicationDate` A `string` containing an ISO 8601 date time stamp of when an article was published (`autoPublish` flag needs to be set as well)

### `rawDocument`

`rawDocument` consists of a serialised `livingdoc` and a `metadata` object.

Example how to build a `rawDocument` object:
```js
const livingdoc = framework.createLivingdoc({
  content: {
    component: 'title',
    content: {
      title: 'Moby Dick'
    }
  },
  design: {name: 'my-design', version: '1.0.0'}
})

const rawDocument = {
  metadata: {
    title: 'Moby Dick'
  },
  livingdoc: livingdoc.serialize()
}
```


### `shouldCreateNew`

`shouldCreateNew` is a `boolean` parameter with which tells the importApi to always create a new article instead of updating a previously imported one.

**CAUTION**: If you choose to always create new documents you need to leave `systemName` empty so as not to run into the unique constraint configured on the database level.

### `updateCondition`
`updateCondition` can be a `string` describing a default strategy or it can be a `function`. Available strategies are (`updateCondition` as a `string`)

* `always`: If `externalId`s match, the Document will be updated.
* `never`: The Document will not be updated. The Update will be discarded.
* `untouched`: The Document only will be updated if it has not been manually updated in the Editor.

You can customise the behaviour by passing a `function` instead of a `string`. Your `function` will have access to the Document and the matching ImportLog. E.g.

```js
const updateCondition = (document, importLog) => {
  // ... Logic to determine whether the document should be updated.

  return true // ... to be updated or false to discard the update.
}
```

**CAUTION**: `updateCondition` only has the desired effect if `shouldCreateNew` is `false` (or falsy)!

### `userId`

`userId` of the user you would like to set as author of the Document. If none is passed, the Import API will set the Import User as author.

**CAUTION**: The Import API will return an error if neither a `userId` is specified nor an Import User has been created beforehand!

## `createImportUser`

You can configure a user per Project which is set as author of imported Documents if you dont pass a `userId`.

```js
const user = await createImportUser(projectId)
```

### `projectId`

The `id` of the Project for which you want to create an Import User.

## `getImportUser`

You can retrieve the user object of the Import User.

```js
const {id} = await importApi.getImportUser(projectId)
```

**CAUTION**: This only returns the `userId` of the Import User.

## `getImportLog`

You can retrieve a specific ImportLog.

```js
const importLog = await importApi.getImportLog({systemName, externalId})
```

## `getLastImportLog`

You can also fetch the latest ImportLog.

```js
const lastImportLog = await getLastImportLog({projectId, channelId})
```
