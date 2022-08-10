---
title: Media Library Entries 
weight: 4
renderTOC: false
menus:
  reference-docs:
    parent: Imports
---

{{< api-example
  title="Import Media Library Entries (public-api:write)"
>}}

--query--

```bash
ACCESS_TOKEN=ey1234
curl -k -X POST "https://edit.livingdocs.io/proxy/api/api/v1/import/mediaLibrary" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  -H 'Content-Type: application/json; charset=utf-8' \
  --data-binary @- << EOF 
  {
    "mediaLibraryEntries": []
  } 
EOF
```

--endpoint--
```
POST api/v1/import/mediaLibrary
```

--parameters--
|Name|Type|Required|Notes|
|-|-|-|-|
|mediaLibraryEntries|array|x|An array of documents to import. Each entry is an object.|
|mediaLibraryEntries.id|string||Custom id (Allowed characters: a-z, A-Z, 0-9, and -). If omitted a random id will be generated.|
|mediaLibraryEntries.systemName|string||A string identifiyng the external system where the asset is imported from. It is recommended that you always set this value and it is required if you provide an `externalId`.|
|mediaLibraryEntries.externalId|string||Must be unique in combination with `systemName`.|
|mediaLibraryEntries.mediaType|string|x|Currently only `image` is supported.|
|mediaLibraryEntries.asset|object|x||
|mediaLibraryEntries.metadata|object|||

#### Example Request
```js
{
  "mediaLibraryEntries": [
    {
      "id": "custom-1",
      "systemName": "externalSystem",
      "externalId": "6hedie82",
      "mediaType": "image",
      "asset": {
        "key": "2020/1/22/3a2ede93.jpeg",
        "url": "http://li.s3.amazonaws.com/2020/1/22/3a2ede93.jpeg",
        "size": 290339,
        "width": 1200,
        "height": 750,
        "filename": "image.jpg",
        "mimeType": "image/jpeg"
      },
      "metadata": {
        "title": "Custom title"
      }
    }
  ]
}
```

--description--
When you can upload images to the configured Media Library storage (e.g. AWS S3) yourself it is possible to create Media Library Entries through the API.

This has the advantage that the entris will be included in the response directly in contrast to the importImages endpoint where you only get a job id.

You can also provide a custom id to entries which helps with importing documents where images in the document should be referenced with the correct `mediaId` maybe even before creating the Media Library Entries themselves.

--response--
200
---
api/v1/import/mediaLibraryEntries
---
```js
{
  "mediaLibraryEntries": [
    {
      "ok": true,
      "status": 200,
      "id": "custom-1",
      "record": {}
    }
  ]
}
```
-----
200
---
api/v1/import/mediaLibraryEntries (error cases for individual entries)
---
```js
{
  "mediaLibraryEntries": [
    {
      "ok": false,
      "correlation": "id: custom-1",
      "status": 409,
      "error": "UniqueIdViolation",
      "error_details": {
        "message": "id is not unique: 'custom-1'"
      }
    },
    {
      "ok": false,
      "correlation": "id: custom-2",
      "status": 409,
      "error": "UniqueIdViolation",
      "error_details": {
        "message": "externalId is not unique: 'external-1'"
      }
    },
    {
      "ok": false,
      "correlation": "id: custom-3",
      "status": 400,
      "error": "ValidationError",
      "error_details": {
        "message": "An asset with an externalId also requires a systemName"
      }
    },
    {
      "ok": false,
      "correlation": "id: custom-4",
      "status": 400,
      "error": "MetadataValidationErrors",
      "error_details": {
        "message": "Metadata validation failed.",
        "invalidMetadata": [
          {
            "metadataProperty": "title",
            "message": "The value of '/title' should be string"
          }
        ]
      }
    }
  ]
}
```

{{< /api-example >}}