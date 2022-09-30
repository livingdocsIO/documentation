---
title: Search
weight: 5
renderTOC: false
menus:
  reference-docs:
    parent: Public API
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
        "identifier": "timeline.head",
        "component": "head",
        "content": {
          "title": "Obama re-elected",
          "text": "some lead"
        }
      },
      {
        "id": "doc-1b8i1ksh20",
        "identifier": "timeline.normal",
        "component": "normal",
        "content": {
          "caption": "my caption"
        },
        "styles": {
          "position": "left"
        }
      },
      {
        "id": "doc-1b8i1ksh30",
        "identifier": "timeline.p",
        "component": "p",
        "content": {
          "text": "first paragraph"
        }
      },
      {
        "id": "doc-1b8i1me1d0",
        "identifier": "timeline.p",
        "component": "p",
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
        "identifier": "timeline.head",
        "component": "head",
        "content": {
          "title": "Bayern to win Champions League",
          "text": "some lead"
        }
      },
      {
        "id": "doc-1b8i1ksh20",
        "identifier": "timeline.normal",
        "component": "normal",
        "content": {
          "caption": "my caption"
        },
        "styles": {
          "position": "left"
        }
      },
      {
        "id": "doc-1b8i1ksh30",
        "identifier": "timeline.p",
        "component": "p",
        "content": {
          "text": "first paragraph"
        }
      },
      {
        "id": "doc-1b8i1me1d0",
        "identifier": "timeline.p",
        "component": "p",
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
        "identifier": "timeline.head",
        "component": "head",
        "content": {
          "title": "Bayern to win Champions League",
          "text": "some lead"
        }
      },
      {
        "id": "doc-1b8i1ksh20",
        "identifier": "timeline.normal",
        "component": "normal",
        "content": {
          "caption": "my caption"
        },
        "styles": {
          "position": "left"
        }
      },
      {
        "id": "doc-1b8i1ksh30",
        "identifier": "timeline.p",
        "component": "p",
        "content": {
          "text": "first paragraph"
        }
      },
      {
        "id": "doc-1b8i1me1d0",
        "identifier": "timeline.p",
        "component": "p",
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
