---
title: Videos
weight: 3
renderTOC: false
menus:
  reference-docs:
    parent: Imports
---

{{< api-example
  title="Import Videos"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X POST "https://edit.livingdocs.io/proxy/api/api/v1/import/videos" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H 'Content-Type: application/json; charset=utf-8' \
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
|videos|array|x|An array of videos to import. Each entry is an object with the following keys, all of which are required:<br><br>**url:** a URL to an video record, no data urls allowed, must be an video, allowed types: png, jpg, gif, svg<br>**id:** a unique id (stored as externalId in Livingdocs) that identifies the video on your end, must be unique within your project<br>**fileName:** the title that the video should get in livingdocs<br>**metadata:** An object of metadata according to your project config|

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
-----
429
---
api/v1/import/videos
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