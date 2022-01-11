---
title: Media Library Entries
weight: 2
renderTOC: false
menus:
  reference-docs:
    parent: Media Library
---

{{< api-example
  title="Get Media Library Entries"
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