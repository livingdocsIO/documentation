---
title: Images
weight: 2
renderTOC: false
menus:
  reference:
    parent: Imports
---

{{< api-example
  title="Import Images"
  scopes="public-api:write"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X POST "https://server.livingdocs.io/api/v1/import/images" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H "Content-Type: application/json; charset=utf-8" \
  --data-binary @- << EOF
  {
    "systemName": "identifier-for-your-system",
    "webhook": "https://my-domain.com/webhooks/image-import",
    "images": [
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
POST api/v1/import/images
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|systemName|string|x|Identifier for the system you are importing from, e.g. an archive.|
|webhook|uri||Endpoint at the importing system that gets notified by POST when import job is done. Notification contains the id of the import job, the state and an overview.|
|context|object||An object that is passed as context in the body of the request to the webhook. Limited to 8192 Bytes.|
|images|array|x|An array of images to import. Each entry is an object with the following keys, all of which are required:<br><br>**url:** a URL to an image file, no data urls allowed, allowed types: png, jpg, gif, svg<br>**id:** a unique id (stored as externalId in Livingdocs) that identifies the image on your end, must be unique within your project<br>**fileName:** the title that the image should get in livingdocs<br>**metadata:** An object of metadata according to your project config<br>**mediaType** the handle of one of the mediaTypes from your project configuration|

#### Example Request
```js
{
  "systemName": "identifier-for-your-system",
  "webhook": "https://my-domain.com/webhooks/image-import",
  "context": {
    "myIdentifier": "some-identifier-sent-to-the-webhook"
  },
  "images": [
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

The image import creates images. The image import in Livingdocs is asynchronous. You post a batch of images that you want to import and get back an id with which you can query later to get your result.

You can patch existing media library entries with the [patch endpoint]({{< ref "/reference/public-api/media-library" >}}).

##### Use Cases

- [Initial import from a legacy system]({{< ref "/guides/setup/import-legacy-system-documents" >}}) - When doing an initial import one usually first imports all images and then imports documents referencing the images.

##### Related

- [Document Import API]({{< ref "/reference/public-api/imports/documents" >}})
- [Import Media Library Entries]({{< ref "/reference/public-api/imports/media-library-entries" >}})

--response--
200
---
api/v1/import/images
---
```js
{
  "id": "25bzj8j"
}
```


{{< /api-example >}}

{{< api-example
  title="Check Import Status for Images"
  scopes="public-api:write"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://server.livingdocs.io/api/v1/import/images/status" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/import/images/status
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|?id|string|x|The id that Livingdocs provided you for your prior call to "/import/images"|

--description--
You can use this endpoint to check for the status and/or result of an image import.

--response--
200
---
api/v1/import/images/status?id=25bzj8j
---
```js
{
  "finished": true,
  "state": "success",
  "id": "25bzj8j",
  "images": [
    {
      "status": "success",
      "externalId": "external-unique-id-123",
      "title": "my image",
      "image": {
        "mediaId": "jjiwhsf23kdk",
        "originalUrl": "https://livingdocs-images.imgix.net/2019/11/21/a209790e-1549-46d9-b3c7-cefe28c7ea99.jpeg",
        "url": "https://livingdocs-images.imgix.net/2019/11/21/a209790e-1549-46d9-b3c7-cefe28c7ea99.jpeg?auto=format",
        "width": 100,
        "height": 100,
        "mimeType": "image/png",
        "imageService": "imgix"
      }
    },
    {
      "status": "skipped",
      "reason": "already exists",
      "externalId": "external-unique-id-234",
      "title": "my second image",
      "image": {
        "mediaId": "jjiwhsf23wer",
        "originalUrl": "https://livingdocs-images.imgix.net/2019/11/21/a209790e-1549-46d9-b3c7-cefe28c7ea99.jpeg?auto=format",
        "url": "https://livingdocs-images.imgix.net/2019/11/21/a209790e-1549-46d9-b3c7-cefe28c7ea99.jpeg?auto=format",
        "width": 100,
        "height": 100,
        "mimeType": "image/png",
        "imageService": "imgix"
      }
    },
    {
      "status": "failed",
      "reason": "Could not upload image",
      "externalId": "external-unique-id-345",
      "title": "my third image"
    }
  ]
}
```
-----
200
---
api/v1/import/images/status?id=243kdc
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
api/v1/import/images/status?id=098shjhv9
---
```js
{
  "finished": true,
  "state": "failed",
  "id": "098shjhv9"
}
```

{{< /api-example >}}
