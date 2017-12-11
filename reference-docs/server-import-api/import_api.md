# Import API

## `import`

The Import API provides a possibility to programmatically create Documents. One popular use case is to funnel Documents from news aggregators into Livingdocs. The Import API saves your raw documents appropriately - to database and Elasticsearch.

The Import function has the following signature

```js
import ({importJob, rawDocument, shouldCreateNew, updateCondition, userId}, callback)
```

### `importJob`
`importJob` is an `object` that contains data about the Document that is being imported.

* `systemName`: A `string` identifying your importer, e.g. `hugo-importer`.
* `externalId`: A `string` identifying your resource on the external system. This Id should be unique so depending on your case prefixing it with the name of that system might be feasible, e.g. `hugo:1234` instead of `1234`.
* `checksum`: An arbitrary `string` which allows you to determine whether it's an update.
* `projectId`: A `number` containing the Id of the Project you want the Document to import to.
* `channelid`: A `number` containing the Id of the Channel you want the Document to import to.
* `documentType`: A `string`, the desired `documentType` of your Document.
* `title`: A `string`, the title of your Document.

### `rawDocument`
`rawDocument` is a serialised Livingdoc which is going to be stored.

### `shouldCreateNew`
`shouldCreateNew` is a `boolean` parameter with which you indicate that you'd like to always create a new article instead of updating a previously imported one.

**CAUTION**: If you choose to always create new documents you need to leave `systemName` empty so as not to run into the unique constraint configured on the database level.

### `updateCondition`
`updateCondition` can be a `string` describing a default strategy or it can be a `function`. Available strategies are (`updateCondition` as a `string`)

* `always`: If `externalId`s match, the Document will be updated.
* `never`: The Document won't be updated. The Update will be discarded.
* `untouched`: The Document only will be updated if it hasn't been manually updated in the Editor.

You can customise the behaviour by passing a `function` instead of a `string`. You're `function` will have access to the Document and the matching ImportLog. E.g.

```js
const updateCondition = (document, importLog) => {
  // ... Logic to determine whether the document should be updated.

  return true // ... to be updated or false to discard the update.
}
```

**CAUTION**: `updateCondition` only has the desired effect if `shouldCreateNew` is `false` (or falsy)!

### `userId`
`userId` of the user you'd like to set as author of the Document. If none is passed, the Import API will set the Import User as author.

**CAUTION**: The Import API will return an error if neither a `userId` is specified nor an Import User has been created beforehand!

## `createImportUser`

You can configure a user per Project which is set as author of imported Documents if you don't pass a `userId`.

```js
createImportUser (projectId, callback)
```

### `projectId`
A `number` containg the Id of the Project for which you want to create an Import User.

## `getImportUser`

You can retrieve the `userId` of the Import User.

```js
getImportUser (projectId, callback)
```

**CAUTION**: This only returns the `userId` of the Import User.

## `getImportLog`
You can retrieve a specific ImportLog.

```js
getImportLog ({systemName, externalId}, callback)
```

## `getLastImportLog`
You can also fetch the latest ImportLog.

```js
getLastImportLog ({projectId, channelId}, callback)
```