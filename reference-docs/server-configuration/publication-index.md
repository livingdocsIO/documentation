# Search published documents

The publication index is an elastic search index that allows developers to do queries in order to retrieve published documents from Livingdocs.

There are two parts to the feature:
- the indexing side that defines how values are indexed to the publication index
- the query side that defines the syntax for querying

## Indexing

Some fields like `projectId`, `category` or `contentType` are indexed by default and can not be changed. You can see all the fields that are mapped by default in the mapping file for the publication index: https://github.com/livingdocsIO/livingdocs-server/blob/master/app/features/indexing/mappings/publication_v6.json

Two larger concepts are configurable by customers:
- the date logic, in particular sort date and scheduled publishing
- generic filter values from custom metadata fields that can be used to query

The definition of the custom indexing is done in the server's channel-config in a new sub-property of `contentTypes` that is called `publicationIndex`. Below is a sample configuration for an article content-type.

```
publicationIndex: {
    sortDate: {
      fieldName: 'publishDate',
      type: 'li-datetime'
    },
    scheduledPublishing: {
      on: {
        fieldName: 'publishDate',
        type: 'li-datetime'
      },
      off: {
        fieldName: 'unpublishDate',
        type: 'li-datetime'
      }
    },
    filters: [{
      label: 'News',
      type: 'li-boolean',
      filterField: 'news'
    }, {
      label: 'Authors',
      type: 'li-reference-list',
      filterField: 'authors'
    }]
}
```

The `sortDate` defines the date that is used to sort results in a publication search query. By default it's just the `createdAt` timestamp of the publication. The configuration allows you to choose a separate metadata property from your metadata set that is used. **The property must be a date type.** A common use case is to take a metadata property that defines a first publication date (first time of publish).

The `scheduledPublishing` set allows you to define `on` and `off` dates. When set, all search queries to the publication index will automatically exclude publications that have a `sortDate` outside of the `on` and `off` bounds. This is how customers can define future publish and un-publish actions for an article, e.g. when there are blocking periods on the content due to confidentiality or copyright.

Lastly, the `filters` array allows customers to register custom filters for indexing. Filters are always indexed as elastic keywords, e.g. the definition above could result in the following elastic instance:
```
filters: [{
  "value": "news=true"
}, {
  "value": "authors=1"
}, {
  "value": "authors=4"
}]
```
As you can see, the filters are indexed as key/value strings. This brings with it the limitation that you can not execute operations on it, e.g. you can not query for something like 'all author ids greater than 5'. You can query for exact matches, e.g. 'all news articles' or contains queries, e.g. 'all documents where author 1 is among the authors'.

### Metadata Plugins

The exact way how the `value` of the index is set (see above) is defined in the metadata plugin. All core metadata plugins have fixed value function that you can not change. In a custom metadata plugin you can define your own value function. An example looks as follows.
```
publicationIndex: {
  enabled: true,
  getValue: function (obj) {
    return _.get(obj, 'reference.id')
  }
}
```
As with the channel-config, the metadata plugin can also have an entry `publicationIndex`.
First of all, you need to set `enabled` to true so that indexing of this metadata plugin to the index is allowed. The `getValue` method is optional, if you don't define one, it will just index the whole value stored in the metadata entry.
If you define `getValue`, you can return 3 things:

- a string, will result in a simple `key=val` entry
- an array, will create a `key=val` entry for each entry in the array
- an object, will create a `key.objectKey=val` entry for each objectKey in the object

## Search Publications

After setting up your publication index you can use either the public API or the core's search API to query for published documents. The documentation for the public API can be found here: https://edit.livingdocs.io/public-api (under "search Publications").

The core API allows you all the options of the public API plus some additional ones. To get the search API, do the following in your server-side feature:
```
module.exports = function (feature, server) {
  const searchManager = server.features.api('li-search').searchManager
}
```

To query publications you use the `searchPublications` method on the `searchManager`. It takes the 2 parameters `query` and `options`.

Allowed options are:
- `offset`, from which position to count results, useful for pagination, default 0
- `limit`, how many results to get, default 10
- `onlyId` flag, if set to `true` will only return the ids of the resulting documents (documentIds)

The query allows the following entries:
- `projectId`, mandatory, the projectId (int) for which documents are searched
- `channelId`, the channelId (int) for which documents are searched
- `searchTerm`, string used for full-text search
- `categories`, an array of category ids (string) to filter for (OR concatenated)
- `contentTypes`, an array of contentType handles (string) to filter for (OR concatenated)
- `languages`, an array of language handles (string) to filter for (OR concatenated)
- `excludeIds`, an array of ids that should be excluded, useful when performing duplication filtering
- `dateFilter`, an elastic search date filter, e.g. `{gt: someDate}` that is applied to the `sortDate`
- `filters`, an array of the generically defined custom filters (see "Indexing"), defined as follows

```
filters: [{
  key: 'news',
  value: true
}, {
  key: 'authors',
  concatenate: 'AND', // default is OR
  value: ['1', '4']
}]
```

As you can see you can either pass a simple string value or an array to the filter query. In case of an array you can define if the values should be concatenated with OR (default) or AND.

## Task Support

There are the tasks `npx livingdocs-server es-publication-reindex` and `npx livingdocs-server es-publication-delete-index`. Those 2 tasks work exactly like the search index tasks for the drafts index. For details refer to the CLI documentation.
