---
title: Documents
weight: 1
renderTOC: false
menus:
  reference-docs:
    parent: Imports
---

{{< api-example
  title="Import Documents (public-api:write)"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X POST "https://edit.livingdocs.io/proxy/api/api/v1/import/documents" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H 'Content-Type: application/json; charset=utf-8' \
  --data-binary @- << EOF 
  {
    "systemName": "identifier-for-your-system",
    "webhook": "https://my-domain.com/webhooks/document-import",
    "documents": []
  } 
EOF
```

--endpoint--
```
POST api/v1/import/documents
```

--parameters--
|Name|Type|Rquired|Notes|
|-|-|-|-|
|systemName|string|x|Identifier for the system you are importing from, e.g. an archive|
|webhook|uri||Endpoint at the importing system that gets notified by POST when import job is done. Notification contains the id of the import job, the state and an overview.|
|context|object||An object that is passed as context in the body of the request to the webhook. Limited to 8192 Bytes.|
|documents|array|x|An array of documents to import. Each entry is an object with the following keys:<br><br>**id:** a unique id (stored as externalId in Livingdocs) that identifies the document on your end, must be unique within your project.<br>**title:** the title that the document should get in livingdocs<br>**checksum:** string to identify changes, e.g. an updated_at timestamp<br>**contentType:** the content type that the document should get in livingdocs<br>**publicationDate:** sets the date of a publication. 'autoPublish' flag must be set for this to have an effect.<br>**livingdoc:** A valid livingdoc declaration (content / design), must conform to your channel-config otherwise throws a validation error / release-2022-07: if no design is set it takes the design of the Project Config.<br>**metadata:** An object of metadata, must conform to your channel-config otherwise throws a validation error<br>**flags:** (optional) define additional import logic:<br>'autoPublish': publishes imported documents immediately<br>'unpublish': unpublishes imported documents immediately (release-2022-07)<br>'onlyOverwriteUntouched': only update documents that have no manual changes in livingdocs<br>'neverOverwrite': never update documents through the import API|

#### Example Request
```js
{
  "systemName": "identifier-for-your-system",
  "webhook": "https://my-domain.com/webhooks/document-import",
  "context": {
    "myIdentifier": "some-identifier-sent-to-the-webhook"
  },
  "documents": [
    {
      "id": "123abc",
      "title": "test import",
      "contentType": "article",
      "checksum": "xyz456",
      "publicationDate": "1999-03-18T17:27:00.107Z",
      "livingdoc": {
        "content": [
          {
            "identifier": "header",
            "content": {
              "catchline": "imported catchline",
              "title": "imported title",
              "author": "imported author"
            }
          }
        ],
        "design": {
          "name": "living-times",
          "version": "1.0.1"
        }
      },
      "metadata": {
        "description": "foo"
      },
      "flags": {
        "autoPublish": true
      }
    }
  ]
}
```

--description--
The document import does both create and update documents. The import remembers the `externalId` / `systemName` pair and if an import matches an existing pair, it will update (Hint: consider how to rebuild the externalId when you want to update documents). The document import in Livingdocs is asynchronous. You post a batch of documents that you want to import and get back an id with which you can query later to get your result.

--response--
200
---
api/v1/import/documents
---
```js
{
  "id": "25bzj8j"
}
```
-----
429
---
api/v1/import/documents
---
```js
[
  {
    "status": 429,
    "error": "Usage Limit Exceeded",
    "error_details": {
      "message": "Your plan does not allow you to upload more than 100 per day.\n      You already uploaded 99 in the last 24 hours and are trying to upload 10 more.\n      Please try again later."
    }
  }
]
```

{{< /api-example >}}

{{< api-example
  title="Check Import Status for Documents (public-api:write)"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/import/documents/status" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/import/documents/status
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|?id|string|x|The id that Livingdocs provided you for your prior call to "/import/documents"|

--description--
You can use this endpoint to check for the status and/or result of a document import.

--response--
200
---
api/v1/import/documents/status?id=25bzj8j
---
```js
{
  "finished": true,
  "state": "success",
  "id": "25bzj8j",
  "logs": [
    {
      "system_name": "integration-tests",
      "external_id": "8Sv9Nu0d",
      "document_id": 1,
      "checksum": "123abc",
      "project_id": 3,
      "channel_id": 2,
      "revision_id": 1,
      "version": 1,
      "id": 1,
      "state": "imported"
    },
    {
      "state": "failed",
      "reason": "Invalid metadata",
      "external_id": "external-unique-id-345",
      "title": "my second document"
    }
  ]
}
```
-----
200
---
api/v1/import/documents/status?id=243kdc
---
```js
{
  "finished": false,
  "state": "started",
  "id": "243kdc",
  "startedAt": "2020-01-01 13:45:12"
}
```
-----
200
---
api/v1/import/documents/status?id=098shjhv9
---
```js
{
  "finished": true,
  "state": "failed",
  "id": "098shjhv9"
}
```
-----
200
---
api/v1/import/documents/status?id=098shjhv9
---
```js
{
  "finished": false,
  "state": "lost",
  "id": "no import job found for id \"098shjhv9\""
}
```

{{< /api-example >}}
