---
title: Search
weight: 8
menus:
  reference:
    parent: Publications
---

{{< api-example
  title="Search Publications"
  scopes="public-api:read"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/publications/search" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/publications/search
```

--parameters--
|Name|Type|Notes|
|-|-|-|
|?search|string|Search term to perform a full-text search with. For exact word matches use ", e.g. 'search="Ukulele"'|
|?contentTypes|string|Comma separated list of content-types for which documents should be found. Content types are concatenated with OR. Example: 'regular,author'|
|?categories|string|Comma separated list of category ids for which documents should be found. Categories are concatenated with OR. Example: 'sport,fashion'|
|?languages|string|Comma separated list of languages for which documents should be found. Languages are concatenated with OR. Example: 'en,de'|
|?languageGroupId|string|A GroupId used to fetch all translations of a document Using the ?languages param a document in a specific language can be fetched. Example: '?languageGroupId=47?language=de'|
|?filters|string|A JSON string which follows the [search filters query DSL]({{< ref "#search-filters" >}}).|
|?sort|string|Comma separated list of sort properties. Any of the [Sort Fields]({{< ref "#sort-fields" >}}) can be used.<br>The sort order can be reversed by prefixing the property with a '-'.
|?fields|string|Comma separated list of properties to include in the response. Defaults to 'systemdata,metadata,content' (no renditions). Use 'id' if you only want to retrieve the ids of the published documents. Useful (and faster) if you are fully synchronizing your frontend with the publication events.|
|?limit|integer|A limit for how much published documents to retrieve. Defaults to 10. Max. 100.|
|?offset|integer|An offset into the query. Useful when getting more than 100 results (pagination). Max. 10000.|
|?ignoreComponentConditions|boolean|Provides a way to opt out of component filtering and return all content regardless of whether each component passes the conditional checks.<br>{{< added-in "release-2024-03" >}}<br>Default: `false`|
|?componentConditions|string|JSON stringified object which contains the component conditions you would like to apply.<br>{{< added-in "release-2024-03" >}}<br>Default: `dateTime: new Date()`<br>Example: `?componentConditions={"dateTime":"2024-02-14T17:25:10.391Z"}`|

--description--

This endpoint allows filtering for published documents.

##### Use Cases

- Automatic teaser lists like topic pages (filtered by Metadata properties)
- [Ticker Tool]({{< ref "/operations/releases/release-2023-09#ticker-tool" >}})

##### Notes

- Even when it's possible to make a full-text search to this endpoint, it's not thought to be used by a frontend search (because of performance reasons)

--response--
200
---
api/v1/publications/search?search=Obama
---
```js
[
  {
    "systemdata": {
      "projectId": 1,
      "channelId": 1,
      "documentId": 1,
      "contentType": "article",
      "documentType": "article",
      "design": {
        "name": "timeline",
        "version": "1.1.0"
      }
    },
    "metadata": {
      "title": "Obama re-elected",
      "description": "some lead",
      "dependencies": {},
      "testDependency": "li-test-dependency.onUpdate is correct"
    },
    "content": [
      {
        "id": "doc-1b8i1ksh10",
        "component": "head",
        "identifier": "timeline.head",
        "content": {
          "title": "Obama re-elected",
          "text": "some lead"
        }
      },
      {
        "id": "doc-1b8i1ksh20",
        "component": "normal",
        "identifier": "timeline.normal",
        "content": {
          "caption": "my caption"
        },
        "styles": {
          "position": "left"
        }
      },
      {
        "id": "doc-1b8i1ksh30",
        "component": "p",
        "identifier": "timeline.p",
        "content": {
          "text": "first paragraph"
        }
      },
      {
        "id": "doc-1b8i1me1d0",
        "component": "p",
        "identifier": "timeline.p",
        "content": {
          "text": "second paragraph"
        }
      }
    ]
  }
]
```
-----
200
---
api/v1/publications/search?categories=sport,fashion&languages=en
---
```js
[
  {
    "systemdata": {
      "projectId": 1,
      "channelId": 1,
      "documentId": 1,
      "contentType": "article",
      "documentType": "article",
      "design": {
        "name": "timeline",
        "version": "1.1.0"
      }
    },
    "metadata": {
      "title": "Bayern to win Champions League",
      "description": "some lead",
      "category": {
        "id": "sport"
      },
      "language": {
        "locale": "en"
      },
      "dependencies": {},
      "testDependency": "li-test-dependency.onUpdate is correct"
    },
    "content": [
      {
        "id": "doc-1b8i1ksh10",
        "component": "head",
        "identifier": "timeline.head",
        "content": {
          "title": "Bayern to win Champions League",
          "text": "some lead"
        }
      },
      {
        "id": "doc-1b8i1ksh20",
        "component": "normal",
        "identifier": "timeline.normal",
        "content": {
          "caption": "my caption"
        },
        "styles": {
          "position": "left"
        }
      },
      {
        "id": "doc-1b8i1ksh30",
        "component": "p",
        "identifier": "timeline.p",
        "content": {
          "text": "first paragraph"
        }
      },
      {
        "id": "doc-1b8i1me1d0",
        "component": "p",
        "identifier": "timeline.p",
        "content": {
          "text": "second paragraph"
        }
      }
    ]
  }
]
```
-----
200
---
api/v1/publications/search?contentTypes=regular,gallery&limit=10&offset=10
---
```js
[
  {
    "systemdata": {
      "projectId": 1,
      "channelId": 1,
      "documentId": 1,
      "contentType": "regular",
      "documentType": "article",
      "design": {
        "name": "timeline",
        "version": "1.1.0"
      }
    },
    "metadata": {
      "title": "Bayern to win Champions League",
      "description": "some lead",
      "category": {
        "id": "sport"
      },
      "language": {
        "locale": "en"
      },
      "dependencies": {},
      "testDependency": "li-test-dependency.onUpdate is correct"
    },
    "content": [
      {
        "id": "doc-1b8i1ksh10",
        "component": "head",
        "identifier": "timeline.head",
        "content": {
          "title": "Bayern to win Champions League",
          "text": "some lead"
        }
      },
      {
        "id": "doc-1b8i1ksh20",
        "component": "normal",
        "identifier": "timeline.normal",
        "content": {
          "caption": "my caption"
        },
        "styles": {
          "position": "left"
        }
      },
      {
        "id": "doc-1b8i1ksh30",
        "component": "p",
        "identifier": "timeline.p",
        "content": {
          "text": "first paragraph"
        }
      },
      {
        "id": "doc-1b8i1me1d0",
        "component": "p",
        "identifier": "timeline.p",
        "content": {
          "text": "second paragraph"
        }
      }
    ]
  }
]
```
-----
200
---
api/v1/publications/search?contentTypes=article&limit=999&fields=id
---
```js
[
  {
    "documentId": 1,
    "projectId": 1
  },
  {
    "documentId": 2,
    "projectId": 1
  }
]
```
{{< /api-example >}}

## Search Filters

{{< added-in "release-2023-07" block >}}

Search filters can be used to filter documents using a custom query DSL.

### Filter Fields

| Property                   | Type    |
| :------------------------- | :------ |
| documentId                 | long    |
| contentType                | keyword |
| firstPublicationDate       | date    |
| lastPublicationDate        | date    |
| significantPublicationDate | date    |
| visiblePublicationDate     | date    |
| statistics.characterCount  | integer |
| statistics.componentCount.*| integer |
| metadata.*                 | Any     |

Metadata fields must be indexed. Please read the [Publication Index]({{< ref "/guides/search/publication-index" >}}) guide for further information.
Details of the core metadata plugins, along with their built-in indexing capabilities, can be found in the [Metadata Plugin List]({{< ref "/reference/document/metadata/plugins" >}}).

The index type of each field will determine which query capabilities are supported:

| Type    | Term          | Range         | Exists        | Sort          |
| :------ | :-----------: | :-----------: | :-----------: | :-----------: |
| keyword | {{< check >}} | {{< check >}} | {{< check >}} | {{< check >}} |
| integer | {{< check >}} | {{< check >}} | {{< check >}} | {{< check >}} |
| float   | {{< check >}} | {{< check >}} | {{< check >}} | {{< check >}} |
| double  | {{< check >}} | {{< check >}} | {{< check >}} | {{< check >}} |
| long    | {{< check >}} | {{< check >}} | {{< check >}} | {{< check >}} |
| date    | {{< check >}} | {{< check >}} | {{< check >}} | {{< check >}} |
| boolean | {{< check >}} | {{< cross >}} | {{< check >}} | {{< cross >}} |

### Query Expressions

#### Term

The standard value comparison behaviour.

An exact match is required, although some type coercion may be applied.

```js
{
  key: 'metadata.title',
  term: 'My Title'
}
```

An array can also be provided as the 'term' value, which behaves like an OR operator.

```js
{
  key: 'metadata.language.locale',
  term: ['de', 'fr']
}
```

#### Range

Search within a range.

```js
{
  key: 'metadata.count',
  range: {lte: 2}
}
```

Multiple range terms ('gt', 'gte', 'lt', 'lte') can be combined.

```js
{
  key: 'metadata.count',
  range: {gt: 1, lt: 5}
}
```

#### Exists

Check if a property has been set.

When querying a metadata property with an object value, always use the key of a leaf node (e.g. `metadata.teaserImage.mediaId`), because the parent itself (e.g. `metadata.teaserImage`) is not indexed.

```js
{
  key: 'metadata.teaserImage.mediaId',
  exists: true
}
```

### Logical Operators

The logical operators allow you to group queries, and to change from the default AND behaviour of the top-level array. All logical operator values can be an object, or an array, containing logical operators or query expressions.

#### AND

All conditions must be met for a publication to be included in the results.

```js
{
  and: [
    {key: 'metadata.news', term: true},
    {key: 'metadata.teaserImage.mediaId', exists: false}
  ]
}
```

#### OR

Any condition can be met for a publication to be included in the results.

```js
{
  or: [
    {key: 'metadata.image.mediaId', exists: true},
    {key: 'metadata.teaserImage.mediaId', exists: true}
  ]
}
```

#### NOT

This operator negates the expression contained within.

```js
{
  not: {key: 'metadata.language.locale', term: 'de'}
}
```

To negate multiple conditions nest another logical operator within.

```js
{
  not: {
    or: [
      {key: 'metadata.news', term: false},
      {key: 'metadata.language.locale', term: 'fr'}
    ]
  }
}
```

### Example

An example of how the logical operators and query expressions can be combined to create a more complex query:

```js
const filters = JSON.stringify({
  or: [
    {
      and: [
        {
          key: 'metadata.count',
          range: {lte: 2}
        },
        {
          key: 'metadata.bool',
          exists: true
        },
        {
          not: {
            key: 'metadata.title',
            term: 'My Title'
          }
        }
      ]
    },
    {
      key: 'metadata.count',
      term: 3
    }
  ]
})

const response = await fetch(`api/v1/publications/search?filters=${filters}`)
const results = await response.json()
```

## Sort Fields

Valid sort fields are:
- `relevance`
- `sortDate`
- `documentId`
- `contentType`
- `firstPublicationDate`
- `lastPublicationDate`
- `significantPublicationDate`
- `visiblePublicationDate`
- `metadata.*`

The default sort order is `sortDate` descending (see [Sort Date]({{< ref "/guides/search/publication-index#sort-date" >}})), with `documentId` descending used as a fallback when multiple results have exactly the same `sortDate`.

`relevance` will only have an affect if you provide a search term.

Most metadata properties can be used to sort, but not those indexed as `text` or `boolean` (see [Filter Fields]({{< ref "#filter-fields" >}})).

When a string is used to define the sort order, the order can be reversed by prefixing the property with a `-` (e.g. `-sortDate,documentId`).

Documents which don't have an indexed value will appear at the end of the results.
