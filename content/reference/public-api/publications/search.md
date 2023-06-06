---
title: Search
weight: 8
renderTOC: false
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
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/publications/search" \
  -H "Accept: application/json" \
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
|?categories|string|Comma separated list of category ids for which documents should be found. Categories are concatenated with OR. Example: 'sport,fashion'|
|?languages|string|Comma separated list of languages for which documents should be found. Languages are concatenated with OR. Example: 'en,de'|
|?languageGroupId|string|A GroupId used to fetch all translations of a document Using the ?languages param a document in a specific language can be fetched. Example: '?languageGroupId=47?language=de'|
|?contentTypes|string|Comma separated list of content-types for which documents should be found. Content types are concatenated with OR. Example: 'regular,author'|
|?filters|string|A JSON string which follows the [search filters query DSL]({{< ref "#search-filters" >}}).|
|?fields|string|Filters which (comma separated) properties are included in the response. Defaults to 'systemdata,metadata,content' (no renditions). Use 'id' if you only want to retrieve the ids of the published documents. Useful (and faster) if you are fully synchronizing your frontend with the publication events.|
|?limit|integer|A limit for how much published documents to retrieve. Defaults to 10. Max. 100.|
|?offset|integer|An offset into the query. Useful when getting more than 100 results (pagination)|

--description--

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
      "layout": "regular",
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
      "layout": "regular",
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
      "layout": "regular",
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

{{< added-in release-2023-07 block >}}

### Logical Operators

The logical operators allow you to group queries, and to change from the default AND behaviour of the top-level array. All logical operator values can be an object, or an array, containing logical operators or query expressions.

#### AND

All conditions must be met for a publication to be included in the results.

```js
{
  and: [
    {key: 'metadata.news', term: true},
    {key: 'metadata.teaserImage', exists: false}
  ]
}
```

#### OR

Any condition can be met for a publication to be included in the results.

```js
{
  or: [
    {key: 'metadata.language.locale', term: 'de'},
    {key: 'metadata.language.locale', term: 'fr'}
  ]
}
```

#### NOT

This operator negates the expression(s) contained within. When an array is provided, the publications will not match any condition in the array.

```js
{
  not: {key: 'metadata.language.locale', term: 'de'}
}
```

```js
{
  not: [
    {key: 'metadata.language.locale', term: 'de'},
    {key: 'metadata.language.locale', term: 'fr'}
  ]
}
```

### Query Expressions

#### Term

The standard value comparison behaviour. If the `key` property references a text field with a `text` type then the value must contain or match the provided value. For all other types, including a text field with a `keyword` type, then an exact match is required.

```js
{
  key: 'metadata.title',
  term: 'My Title'
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

```js
{
  key: 'metadata.count',
  range: {gt: 1, lt: 5}
}
```

#### Exists

Check if a property has been set.

```js
{
  key: 'metadata.teaserImage',
  exists: true
}
```

### Filter Fields

|Property|Type|Notes|
|--------|----|-----|
|projectId|long|
|channelId|long|
|documentId|long|
|publicationId|long|
|contentType|keyword|
|language|keyword|
|categoryId|keyword|
|title|text|
|text|text (german_html_analyzer)|
|references|keyword[ ]|
|firstPublicationDate|date (strict_date_time)|
|lastPublicationDate|date (strict_date_time)|
|significantPublicationDate|date (strict_date_time)|
|visiblePublicationDate|date (strict_date_time)|
|sortDate|date (strict_date_time)|[1]({{< ref "#fields-note-1" >}})|
|metadata.*|Any|[2]({{< ref "#fields-note-2" >}})|

1. <span id="fields-note-1"></span>This is the same as visiblePublicationDate, unless overriden with `projectConfig.publicationIndex.sortDate`
2. <span id="fields-note-2"></span>Metadata fields must be indexed. Please read the [Publication Index]({{< ref "/guides/search/publication-index" >}}) guide for further information.

### Example

A demonstration of how the logical operators and query expressions can be combined to create a more complex query:

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
```
