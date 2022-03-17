---
title: Get Started
weight: 1
renderTOC: false
menus:
  reference-docs:
    parent: Public API
---

## Authorization
To work with the public Api first go to the Project Settings page in the livingdocs editor and create an `AccessToken`.

Embed the `AccessToken` in the header of every HTTP request as shown below.


### Request HTTP headers

```
Accept: application/json
Authorization: Bearer ey1234
```

### Auth Example with Curl

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "http://localhost:9090/api/v1/project"
  -H "Accept: application/json"
  -H "Authorization: Bearer $ACCESS_TOKEN"
``` 

### Auth Example with Axios

```js
const axios = require('axios')
const token = 'ey1234'
const result = await axios.get('api/v1/project', {
  baseURL: 'http://localhost:9090',
  headers: {Authorization: `Bearer ${token}`},
  timeout: 20000
})
```

## Errors
Common error responses you can expect when working with the public Api.

{{< api-example
  showResponseCode=true
>}}
--query--
--endpoint--
--parameters--
--description--
--response--
401
---
---
```js
{
  "status": 401,
  "error": "Unauthorized",
  "error_details": {
    "access_token": "The access token expired."
  }
}
```
{{< /api-example >}}

{{< api-example
  showResponseCode=true
>}}
--query--
--endpoint--
--parameters--
--description--
--response--
403
---
---
```js
{
  "status": 403,
  "error": "Forbidden",
  "error_details": {
    "access_token": "The request requires higher privileges"
  }
}
```
{{< /api-example >}}

{{< api-example
  showResponseCode=true
>}}
--query--
--endpoint--
--parameters--
--description--
--response--
404
---
---
```js
{
  "status": 404,
  "error": "Not Found",
  "error_details": {
    "url": "/api/v1/foo"
  }
}
```
{{< /api-example >}}

## Base URL
This is the base Url you will need to interact with our API.

```
https://server.livingdocs.io/
```

Alternatively speed up your development process using our [Software Development Kit.](https://github.com/livingdocsIO/livingdocs-node-sdk)

## My First Response
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
        "component": "head",
        "content": {
          "title": "a title",
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
        "component": "head",
        "content": {
          "title": "a title",
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

{{< /api-example >}}
