---
title: Media Library
weight: 9
renderTOC: false
menus:
  reference-docs:
    parent: Public API
---

{{< api-example
  title="Get a Single Media Library Entry (public-api:read)"
>}}

--query--

--endpoint--
```
GET api/v1/mediaLibrary/:id
```

--parameters--

--description--
Fetch a Media Library Entries by its `id`.

--response--
200
---
api/v1/mediaLibrary/:id
---
```js
{
  "id": "asze63i9",
  "version": 1,
  "mediaType": "image",
  "asset": {
    "url": "https://livingdocs.io/img.jpg",
    "mimeType": "image/jpeg",
    "width": 1600,
    "height": 900,
    "size": 21000
  },
  "metadata": {
    "title": "An Image"
  },
  "createdAt": "2020-12-27T09:19:00.928Z",
  "updatedAt": "2020-12-27T09:19:00.928Z"
}
```

{{< /api-example >}}

{{< api-example
  title="Patch a Media Library Entry (public-api:write)"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X PATCH "https://edit.livingdocs.io/proxy/api/api/v1/mediaLibrary/:id" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
PATCH api/v1/mediaLibrary/:id
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|version|string||current mediaLibraryEntry version. When set on update the version is checked.|
|patches|array|x|an array of patches to execute. Each entry is an object with the following keys:<br><br>**operation** `setMetadataProperty`, `replaceAsset`, `revokeAsset` or `archive`<br>**propertyName** string of the propertyName (only for setMetadataProperty)<br>**value** string or object for the new value. If set to null or value is not set it will remove the property for setMetadataProperty. **required** for replaceAsset operation.|

#### Example Request
```js
{
  "version": "1",
  "patches": [
    {
      // update a single metadata property
      "operation": "setMetadataProperty",
      "propertyName": "title",
      "value": "updated title"
    },
    {
      // replace the asset
      "operation": "replaceAsset",
      "value": {
        // the file with this key should exist in the configured storage
        key: '2021/11/23/my-new-file.png',
        url: 'https://example.com/my-new-file.png',
        size: 10000,
        width: 1000,
        height: 800,
        filename: 'my-new-file.png',
        mimeType: 'image/png'
      }
    },
    {
      // revoke the asset (added-in release-2022-05)
      "operation": "revokeAsset"
    },
    {
      // archives a Media Library Entry (added-in release-2022-07)
      "operation": "archive"
    }
  ]
}
```

--description--
Patch a Media Library Entry by its `id`.

--response--
200
---
api/v1/mediaLibrary/:id
---
```js
{
  "status": 200
}
```
-----
400
---
api/v1/mediaLibrary/:id
---
```js
{
  "status": 400,
  "error": "Bad Request",
  "error_details": {
    "patches.0.operation": "No enum match for: \"notExistingOperation\""
  }
}
```
-----
404
---
api/v1/mediaLibrary/:id
---
```js
{
  "status": 404,
  "error": "Not Found",
  "error_details": {
    "name": "NotFound",
    "message": "MediaLibrary Entry does not exist (id: 'yLBGtTjWN4ba')"
  }
}
```
-----
409
---
api/v1/mediaLibrary/:id
---
```js
{
  "status": 409,
  "error": "Conflict",
  "error_details": {
    "name": "Conflict",
    "message": "Version: Expected 36 to be equal to 1"
  }
}
```

{{< /api-example >}}

{{< api-example
  title="Get Media Library Entries (public-api:read)"
>}}

--query--

--endpoint--
```
GET api/v1/mediaLibrary?ids=
```
```
GET api/v1/mediaLibrary?externalId=&systemName=
```

--parameters--

--description--
Fetch multiple Media Library Entries by their `id`s or `externalId`s

--response--
200
---
api/v1/mediaLibrary?ids=asze63i9,2er11b3i
---
```js
{
  "mediaLibraryEntries": [
    {
      "id": "asze63i9",
      "version": 1,
      "mediaType": "image",
      "asset": {
        "url": "https://livingdocs.io/img.jpg",
        "mimeType": "image/jpeg",
        "width": 1600,
        "height": 900,
        "size": 21000
      },
      "metadata": {
        "title": "An Image"
      },
      "createdAt": "2020-12-27T09:19:00.928Z",
      "updatedAt": "2020-12-27T09:19:00.928Z"
    },
    {
      "id": "2er11b3i",
      "version": 1,
      "mediaType": "image",
      "asset": {
        "url": "https://livingdocs.io/img2.jpg",
        "mimeType": "image/jpeg",
        "width": 1600,
        "height": 900,
        "size": 21000
      },
      "metadata": {
        "title": "An Other Image"
      },
      "createdAt": "2020-12-27T09:19:00.928Z",
      "updatedAt": "2020-12-27T09:19:00.928Z"
    }
  ]
}
```
-----
200
---
api/v1/mediaLibrary?externalId=ex-1&systemName=externalSystem
---
```js
{
  "mediaLibraryEntries": [
    {
      "id": "a77ei8nm",
      "version": 1,
      "systemName": "externalSystem",
      "externalId": "ex-1",
      "mediaType": "image",
      "asset": {
        "url": "https://livingdocs.io/img.jpg",
        "mimeType": "image/jpeg",
        "width": 1600,
        "height": 900,
        "size": 21000
      },
      "metadata": {
        "title": "An Image"
      },
      "createdAt": "2020-12-27T09:19:00.928Z",
      "updatedAt": "2020-12-27T09:19:00.928Z"
    }
  ]
}
```

{{< /api-example >}}

{{< api-example
  title="Get Incoming Publication References for a Media Library Entry (public-api:read)"
  release="release-2022-03"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/mediaLibrary/:mediaId/incomingDocumentReferences" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/mediaLibrary/:mediaId/incomingDocumentReferences
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:mediaId|string|x||
|?limit|integer||A limit for how much published documents to retrieve. Defaults to 100. Max. 100.|
|?offset|integer||An offset into the query. Useful when getting more than 100 results (pagination).|

--description--

--response--
200
---
---
```js
[
  {
    "id": 2,
    "references": [
      {
        "id": "9fKagDCiN6sb",
        "type": "image",
        "location": "image-directive",
        "componentId": "doc-1ev8345oj0",
        "componentName": "image",
        "directiveName": "image"
      },
      {
        "id": "9fKagDCiN6sb",
        "type": "image",
        "location": "metadata",
        "propertyName": "teaserImage"
      }
    ]
  },
  {
    "id": 3,
    "references": [
      {
        "id": "9fKagDCiN6sb",
        "type": "image",
        "location": "image-directive",
        "componentId": "doc-1euq8lq1o0",
        "componentName": "image",
        "directiveName": "image"
      },
      {
        "id": "9fKagDCiN6sb",
        "type": "image",
        "location": "metadata",
        "propertyName": "teaserImage"
      }
    ]
  }
]
```

{{< /api-example >}}

{{< api-example
  title="Get Incoming Media References for a Media Library Entry (public-api:read)"
  release="release-2022-03"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X GET "https://edit.livingdocs.io/proxy/api/api/v1/mediaLibrary/:mediaId/incomingMediaReferences" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN"
```

--endpoint--
```
GET api/v1/mediaLibrary/:mediaId/incomingMediaReferences
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|:mediaId|string|x||
|?limit|integer||A limit for how much published documents to retrieve. Defaults to 100. Max. 100.|
|?offset|integer||An offset into the query. Useful when getting more than 100 results (pagination).|

--description--

--response--
200
---
---
```js
[
  {
    "id": "B1LPgANhJFpo",
    "references": [
      {
        "id": "9fKagDCiN6sb",
        "type": "image",
        "location": "metadata",
        "propertyName": "imageLink"
      }
    ]
  }
]
```

{{< /api-example >}}
