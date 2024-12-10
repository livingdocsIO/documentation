---
title: Documents
weight: 1
renderTOC: false
menus:
  reference:
    parent: Imports
---

{{< api-example
  title="Import Documents"
  scopes="public-api:write"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X POST "https://server.livingdocs.io/api/v1/import/documents" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json; charset=utf-8" \
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
|Name|Type|Required|Notes|
|-|-|-|-|
|systemName|string|x|Identifier for the system you are importing from, e.g. an archive|
|webhook|uri||Endpoint at the importing system that gets notified by POST when import job is done. Notification contains the id of the import job, the state and an overview.|
|context|object||An object that is passed as context in the body of the request to the webhook. Limited to 8192 Bytes.|
|documents|array|x|An array of documents to import. Each entry is an object with the following keys:<br><br>**id:** a unique id (stored as externalId in Livingdocs) that identifies the document on your end, must be unique within your project.<br>**title:** the title that the document should get in livingdocs<br>**checksum:** string to identify changes, e.g. an updated_at timestamp<br>**contentType:** the content type that the document should get in livingdocs<br>**publishControl:** An object with<br>- `firstPublicationDate`: sets the first publication date<br>- `significantPublicationDate`: ({{< added-in "release-2023-07" >}}) sets a date which can be used by deliveries to display to viewers<br>- `visiblePublicationDateOverride`: ({{< added-in "release-2024-01" >}}) sets a date which can be used by deliveries to display to viewers<br>- `lastPublicationDate`: sets the most recent publication date<br>The `autoPublish` flag must be set for 'publishControl' to have an effect.<br>**publicationDate:** ({{< deprecated-in "release-2023-03" >}})<br>Please use `publishControl.lastPublicationDate`. Sets the most recent publication date. The `autoPublish` flag must be set for this to have an effect.<br>**content:** (optional) An array of livingdocs components, must conform to your channel-config otherwise throws a validation error<br>**design:** (optional) An object with `name` and `version`. If no design is set it takes the design of the Project Config with the latest version<br>**metadata:** (optional) An object of metadata, must conform to your channel-config otherwise throws a validation error<br>**translations:** (optional) An object of translations<br>**flags:** (optional) define additional import logic:<br>- `autoPublish`: publishes imported documents immediately<br>- `unpublish`: unpublishes imported documents immediately<br>- `onlyOverwriteUntouched`: only update documents that have no manual changes in livingdocs<br>- `neverOverwrite`: never update documents through the import API|

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
      "publishControl": {
        "firstPublicationDate": "1999-03-18T17:27:00.107Z",
        "significantPublicationDate": "1999-03-19T17:27:00.107Z",
        "lastPublicationDate": "1999-03-20T17:27:00.107Z",
      },
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
      },
      "metadata": {
        "description": "foo"
      },
      "translations": [
        {
          "locale": "fr",
          "metadata": {
            "description": "foo FR"
          }
        }
      ],
      "flags": {
        "autoPublish": true
      }
    }
  ]
}
```

--description--
The document import does both create and update documents. The import remembers the `externalId` / `systemName` pair and if an import matches an existing pair, it will update (Hint: consider how to rebuild the externalId when you want to update documents). The document import in Livingdocs is asynchronous. You post a batch of documents that you want to import and get back an id with which you can query later to get your result.

##### Use Cases

- [Initial Import from a legacy system]({{< ref "/guides/setup/import-legacy-system-documents" >}})
- Feed Imports e.g. [DPA Import]({{< ref "/guides/integrations/dpa-import" >}})

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

{{< /api-example >}}

{{< api-example
  title="Check Import Status for Documents"
  scopes="public-api:write"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/import/documents/status" \
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
      "state": "imported",
      "system_name": "external-system-name",
      "external_id": "8Sv9Nu0d",
      "document_id": 1,
      "checksum": "123abc",
      "project_id": 3,
      "channel_id": 2,
      "revision_id": 4602,
      "version": 1,
      "id": 1
    },
    {
      "state": "published",
      "created_at": "2024-12-03T23:38:29.789Z",
      "updated_at": "2024-12-03T23:38:29.789Z",
      "system_name": "external-system-name",
      "external_id": "9av23oaf",
      "document_id": 1148,
      "checksum": "10",
      "project_id": 3,
      "channel_id": 2,
      "revision_id": 4603,
      "version": 1
      "id": 1,
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
