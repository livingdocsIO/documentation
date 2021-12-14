---
title: First Response
weight: 4
renderTOC: false
menus:
  reference-docs:
    parent: Basics
---

For testing purposes, you can go and run the following code snippet in your Terminal.

Don't forget to replace [your token.](https://edit.livingdocs.io/access/111/public-api)

{{< api-example
  title="Get your First Response"
  responseBlurry=true
>}}

--query--

```bash
curl -H 'Authorization: Bearer your_token' \ 
https://server.livingdocs.io/api/v1/documents/latestPublications
```

--endpoint--
--parameters--
--description--
--response--
200
---
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
      "publicationId": 1,
      "firstPublicationDate": "2021-03-16T14:08:11:686Z",
      "updatedAt": "2021-03-18T16:32:04.170Z",
      "layout": "regular",
      "design": {
        "name": "timeline",
        "version": "1.1.0"
      }
    },
    "metadata": {
      "title": "a title",
      "description": "some lead",
      "dependencies": {}
    },
    "content": [
      {
        "id": "doc-1b8i1ksh10",
        "identifier": "timeline.head",
        "content": {
          "title": "a title",
          "text": "some lead"
        }
      },
      {
        "id": "doc-1b8i1ksh20",
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
        "identifier": "timeline.p",
        "content": {
          "text": "first paragraph"
        }
      },
      {
        "id": "doc-1b8i1me1d0",
        "identifier": "timeline.p",
        "content": {
          "text": "second"
        }
      },
      {
        "id": "doc-1b8i1mfei0",
        "identifier": "timeline.p",
        "content": {
          "text": "and third one. :)"
        }
      }
    ]
  },
  {
    "systemdata": {
      "projectId": 1,
      "channelId": 1,
      "documentId": 2,
      "contentType": "article",
      "documentType": "article",
      "publicationId": 5,
      "firstPublicationDate": "2021-03-17T15:09:12:687Z",
      "updatedAt": "2021-03-19T17:33:05.171Z",
      "layout": "regular",
      "design": {
        "name": "timeline",
        "version": "1.1.0"
      }
    },
    "metadata": {
      "title": "another title",
      "description": "some other lead",
      "dependencies": {}
    },
    "content": [
      {
        "id": "doc-1b8i1ksh10",
        "identifier": "timeline.head",
        "content": {
          "title": "a title",
          "text": "some lead"
        }
      },
      {
        "id": "doc-1b8i1ksh20",
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
        "identifier": "timeline.p",
        "content": {
          "text": "first paragraph"
        }
      },
      {
        "id": "doc-1b8i1me1d0",
        "identifier": "timeline.p",
        "content": {
          "text": "second"
        }
      },
      {
        "id": "doc-1b8i1mfei0",
        "identifier": "timeline.p",
        "content": {
          "text": "and third one. :)"
        }
      }
    ]
  }
]
```

{{< /api-example >}}
