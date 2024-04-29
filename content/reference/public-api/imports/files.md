---
title: Files
weight: 2
renderTOC: false
menus:
  reference:
    parent: Imports
---

{{< api-example
  title="Import Files"
  scopes="public-api:write"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X POST "https://server.livingdocs.io/api/v1/import/files" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json; charset=utf-8" \
  --data-binary @- << EOF
  {
    "systemName": "identifier-for-your-system",
    "webhook": "https://my-domain.com/webhooks/file-import",
    "files": [
      {
        "url": "https://placekitten.com/800/600",
        "id": "123abc",
        "fileName": "cat",
        "metadata": {
          "caption": "foo"
        }
      }
    ]
  }
EOF
```

--endpoint--
```
POST api/v1/import/files
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|systemName|string|x|Identifier for the system you are importing from, e.g. an archive.|
|webhook|uri||Endpoint at the importing system that gets notified by POST when import job is done. Notification contains the id of the import job, the state and an overview.|
|context|object||An object that is passed as context in the body of the request to the webhook. Limited to 8192 Bytes.|
|files|array|x|An array of files to import. Each entry is an object with the following keys, all of which are required:<br><br>**url:** a URL to a file<br>**id:** a unique id (stored as externalId in Livingdocs) that identifies the file on your end, must be unique within your project<br>**fileName:** the title that the file should get in livingdocs<br>**metadata:** An object of metadata according to your project config<br>**mediaType** the handle of one of the mediaTypes from your project configuration|

#### Example Request
```js
{
  "systemName": "identifier-for-your-system",
  "webhook": "https://my-domain.com/webhooks/file-import",
  "context": {
    "myIdentifier": "some-identifier-sent-to-the-webhook"
  },
  "files": [
    {
      "url": "https://placekitten.com/800/600",
      "id": "123abc",
      "fileName": "cat",
      "metadata": {
        "caption": "foo"
      }
    }
  ]
}
```

--description--

The file import does both create and update files. The import remembers the `externalId` / `systemName` pair and if an import matches an existing pair, it will update (Hint: consider how to rebuild the externalId when you want to update files). The file import in Livingdocs is asynchronous. You post a batch of files that you want to import and get back an id with which you can query later to get your result.

##### Use Cases

- [Initial import from a legacy system]({{< ref "/guides/setup/import-legacy-system-documents" >}}) - When doing an initial import one usually first imports all files and then imports documents referencing the files.

##### Related

- [Document Import API]({{< ref "/reference/public-api/imports/documents" >}})
- [Import Media Library Entries]({{< ref "/reference/public-api/imports/media-library-entries" >}})

--response--
200
---
api/v1/import/files
---
```js
{
  "id": "25bzj8j"
}
```

{{< /api-example >}}

{{< api-example
  title="Check Import Status for Files"
  scopes="public-api:write"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/import/files/status" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/import/files/status
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|?id|string|x|The id that Livingdocs provided you for your prior call to "/import/files"|

--description--
You can use this endpoint to check for the status and/or result of a file import.

--response--
200
---
api/v1/import/files/status?id=25bzj8j
---

```js
{
  "finished": true,
  "state": "success",
  "id": "25bzj8j",
  "files": [
    {
      "status": "success",
      "mediaId": "jjiwhsf23kdk",
      "systemName": "identifier-for-your-system",
      "externalId": "external-unique-id-123"
    },
    {
      "status": "skipped",
      "reason": "already exists",
      "systemName": "identifier-for-your-system",
      "externalId": "external-unique-id-234"
    },
    {
      "status": "failed",
      "reason": "Could not upload file",
      "systemName": "identifier-for-your-system",
      "externalId": "external-unique-id-345"
    }
  ]
}
```
-----
200
---
api/v1/import/files/status?id=243kdc
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
api/v1/import/files/status?id=098shjhv9
---
```js
{
  "finished": true,
  "state": "failed",
  "id": "098shjhv9"
}
```

{{< /api-example >}}
