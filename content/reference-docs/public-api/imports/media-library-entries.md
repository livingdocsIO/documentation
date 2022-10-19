---
title: Media Library Entries 
weight: 4
renderTOC: false
menus:
  reference-docs:
    parent: Imports
---

{{< api-example
  title="Import Media Library Entries"
  scopes="public-api:write"
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
|mediaLibraryEntries.mediaType|string|x|`image`, `video` (release-2022-09), `file` (release-2022-09)|
|mediaLibraryEntries.asset|object|x||
|mediaLibraryEntries.metadata|object|||
|mediaLibraryEntries.translations|object||

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
                "key": "2022/08/25/d6068c02-ca85-421d-948d-ee0e2c15f372.jpeg",
                "url": "https://livingdocs-images-development.s3.amazonaws.com/2022/08/25/d6068c02-ca85-421d-948d-ee0e2c15f372.jpeg",
                "size": 34910,
                "width": 640,
                "height": 427,
                "filename": "super-mario.jpeg",
                "mimeType": "image/jpeg"
            },
            "metadata": {
                "title": "An image title"
            },
            "translations": [
                {
                    "locale": "fr",
                    "metadata": {
                        "title": "Un titre d'image"
                    },
                    "asset": {
                        "key": "2022/08/25/another-asset.jpeg",
                        "url": "https://livingdocs-images-development.s3.amazonaws.com/2022/08/25/another-asset.jpeg",
                        "size": 34910,
                        "width": 640,
                        "height": 427,
                        "filename": "super-mario-modified.jpeg",
                        "mimeType": "image/jpeg"
                    }
                }
            ]
        },
        {
            "id": "custom-2",
            "systemName": "externalSystem",
            "externalId": "ahedie8x",
            "mediaType": "file",
            "asset": {
                "key": "2022/09/30/a1cb173d-e85f-498b-996e-5ce46058e9b9.pdf",
                "url": "https://livingdocs-files-development.s3.amazonaws.com/2022/09/30/a1cb173d-e85f-498b-996e-5ce46058e9b9.pdf",
                "size": 3028,
                "filename": "a-simple-pdf.pdf",
                "mimeType": "application/pdf"
            },
            "metadata": {
                "title": "A simple PDF"
            },
            "translations": [
                {
                    "locale": "fr",
                    "metadata": {
                        "title": "Un simple PDF"
                    },
                    "asset": {
                        "key": "2022/09/30/another-asset.pdf",
                        "url": "https://livingdocs-files-development.s3.amazonaws.com/2022/09/30/another-asset.pdf",
                        "size": 3028,
                        "filename": "a-simple-pdf-fr.pdf",
                        "mimeType": "application/pdf"
                    },
                }
            ]
        },
        {
            "id": "custom-3",
            "systemName": "externalSystem",
            "externalId": "srfhediess",
            "mediaType": "video",
            "asset": {
                "key": "2022/09/30/2804fc3d-098d-4f8f-b25c-c6c15583d672.mp4",
                "url": "https://livingdocs-videos-development.s3.amazonaws.com/2022/09/30/2804fc3d-098d-4f8f-b25c-c6c15583d672.mp4",
                "size": 8633462,
                "width": 1280,
                "height": 720,
                "duration": 35.241667,
                "filename": "fire.mp4",
                "mimeType": "video/mp4"
            },
            "metadata": {
                "title": "This is a fire"
            },
            "translations": [
                {
                    "locale": "fr",
                    "metadata": {
                        "title": "C'est un feu"
                    },
                    "asset": {
                        "key": "2022/09/30/another-asset.mp4",
                        "url": "https://livingdocs-videos-development.s3.amazonaws.com/2022/09/30/another-asset.mp4",
                        "size": 8633462,
                        "width": 1280,
                        "height": 720,
                        "duration": 35.241667,
                        "filename": "fire-fr.mp4",
                        "mimeType": "video/mp4"
                    },
                }
            ]
        }
    ]
}
```

--description--
When you can upload images, videos or files to the configured Media Library storage (e.g. AWS S3) yourself it is possible to create Media Library Entries through the API.

This has the advantage that the entries will be included in the response directly in contrast e.g. to the `api/v1/import/images` endpoint where you only get a `jobId`.

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
