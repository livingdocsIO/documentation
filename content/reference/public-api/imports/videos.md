---
title: Videos
weight: 3
renderTOC: false
menus:
  reference:
    parent: Imports
---

{{< api-example
  title="Import Videos"
  scopes="public-api:write"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X POST "https://server.livingdocs.io/api/v1/import/videos" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json; charset=utf-8" \
  --data-binary @- << EOF
  {
    "systemName": "identifier-for-your-system",
    "webhook": "https://my-domain.com/webhooks/video-import",
    "videos": [
      {
        "url": "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
        "id": "123abc",
        "fileName": "sample",
        "metadata": {
          "title": "sample video"
          "credit": "LC"
        }
      }
    ]
  }
EOF
```

--endpoint--
```
POST api/v1/import/videos
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|systemName|string|x|Identifier for the system you are importing from, e.g. an archive.|
|webhook|uri||Endpoint at the importing system that gets notified by POST when import job is done. Notification contains the id of the import job, the state and an overview.|
|context|object||An object that is passed as context in the body of the request to the webhook. Limited to 8192 Bytes.|
|videos|array|x|An array of videos to import. Each entry is an object with the following keys, all of which are required:<br><br>**url:** a URL to a video file, must reference a video file with mimetype `video/*`.<br>**id:** a unique id (stored as externalId in Livingdocs) that identifies the video on your end, must be unique within your project<br>**fileName:** the title that the video should get in livingdocs<br>**metadata:** An object of metadata according to your project config|

#### Example Request
```js
{
  "systemName": "identifier-for-your-system",
  "webhook": "https://my-domain.com/webhooks/video-import",
  "context": {
    "myIdentifier": "some-identifier-sent-to-the-webhook"
  },
  "videos": [
    {
      "url": "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4",
      "id": "123abc",
      "fileName": "foo",
      "metadata": {
        "title": "sample video",
        "credit": "LC"
      }
    }
  ]
}
```

--description--
The video import does both create and update videos. The import remembers the `externalId` / `systemName` pair and if an import matches an existing pair, it will update (Hint: consider how to rebuild the externalId when you want to update videos). The video import in Livingdocs is asynchronous. You post a batch of videos that you want to import and get back an id with which you can query later to get your result.

##### Use Cases

- [Initial import from a legacy system]({{< ref "/guides/setup/import-legacy-system-documents" >}})

##### Related

- [Import Media Library Entries]({{< ref "/reference/public-api/imports/media-library-entries" >}})

--response--
200
---
api/v1/import/videos
---
```js
{
  "id": "25bzj8j"
}
```

{{< /api-example >}}


{{< api-example
  title="Check Import Status for Videos"
  scopes="public-api:write"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/import/videos/status" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/import/videos/status
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|?id|string|x|The id that Livingdocs provided you for your prior call to "/import/videos"|

--description--
You can use this endpoint to check for the status and/or result of a video import.

--response--
200
---
api/v1/import/videos/status?id=25bzj8j
---
```js
{
  "finished": true,
  "state": "success",
  "id": "25bzj8j",
  "videos": [
    {
      "status": "success",
      "externalId": "external-unique-id-123",
      "title": "my video",
      "video": {
        "mediaId": "jjiwhsf23kdk",
        "originalUrl": "https://livingdocs-videos.imgix.net/2019/11/21/a209790e-1549-46d9-b3c7-cefe28c7ea99.jpeg",
        "url": "https://livingdocs-videos.imgix.net/2019/11/21/a209790e-1549-46d9-b3c7-cefe28c7ea99.jpeg?auto=format",
        "width": 100,
        "height": 100,
        "mimeType": "video/png",
        "videoService": "imgix"
      }
    },
    {
      "status": "skipped",
      "reason": "already exists",
      "externalId": "external-unique-id-234",
      "title": "my second video",
      "video": {
        "mediaId": "jjiwhsf23wer",
        "originalUrl": "https://livingdocs-videos.imgix.net/2019/11/21/a209790e-1549-46d9-b3c7-cefe28c7ea99.jpeg?auto=format",
        "url": "https://livingdocs-videos.imgix.net/2019/11/21/a209790e-1549-46d9-b3c7-cefe28c7ea99.jpeg?auto=format",
        "width": 100,
        "height": 100,
        "mimeType": "video/png",
        "videoService": "imgix"
      }
    },
    {
      "status": "failed",
      "reason": "Could not upload video",
      "externalId": "external-unique-id-345",
      "title": "my third video"
    }
  ]
}
```
-----
200
---
api/v1/import/videos/status?id=243kdc
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
api/v1/import/videos/status?id=098shjhv9
---
```js
{
  "finished": true,
  "state": "failed",
  "id": "098shjhv9"
}
```

{{< /api-example >}}
