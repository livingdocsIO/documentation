---
title: Copy Documents Between Projects
description: Enable copying of selected contentTypes to another project
weight: 3
---
## Overview

This feature allows you to drag-and-drop a document from one project to another. It is limited to projects on the same server and in the same environment. It is best suited to copying documents between projects with the same design.

## Configuration

### Server config

The `customerId` property is required in the server config to help identify the source and destination servers. The value is a string which will typically be the same across all of your environments. However, if you use multiple Livingdocs servers for different projects you should give them different `customerId` values.

```js
{
  ...serverConfig,
  customerId: 'daily-planet'
}
```

### Project config

The project config requires two new properties, one which allows documents to be exported to specific projects, and another which configures how to import documents from other projects.

#### Source project

The `export` property is an object which contains an `allowedProjects` property. The `allowedProjects` property is an array of objects containing a `handle` property, which indicates the projects you would like to export to.

```js
// Example for the "service" project
{
  ...projectConfig,
  export: {
    allowedProjects: [
      {
        // Allow documents to be exported to the "service-clone" project
        handle: 'service-clone'
      },
      {
        handle: 'another-service'
      }
    ]
  }
}
```

#### Destination project

The `import` property is very similar to the `export` property above, but the objects inside the `allowedProjects` array now contain additional information on how to map the source content and media types to the destination. Within `contentTypeMapping` and `mediaTypeMapping` the object keys are the source types (i.e. the type handles which belong to the document and media being copied), and the values are the destination types (i.e. the type handles used by the project you're adding the `import` config to). If the handles used by the two projects match, as shown below, then they become optional, because if a source type is not defined it will try to use the same value in the destination project.

```js
// Example for the "service-clone" project
{
  ...projectConfig,
  import: {
    allowedProjects: [
      {
        // Allow documents from "service" project to be imported
        handle: 'service',
        contentTypeMapping: {
          // sourceType: destinationType
          regular: 'regular'
        },
        mediaTypeMapping: {
          image: 'image',
          video: 'video'
        }
      }
    ]
  }
}
```

## Use

This feature can be used with a simple drag-and-drop in the editor, or programatically by using the `li-import` feature API.

### Drag-and-drop

Once the server and projects have been configured it is possible to open two browser windows, one for the source project (with the export config) and one for the destination project (with the import config), and drag an article from the source article dashboard to the destination article dashboard. When you drop the article it will be copied to the destination project, and any directly referenced media will have media library entries created in the destination project. An import summary is shown to the user which contains a link to the new document and a list of any issues/errors encountered.

{{< img src="document-drag-and-drop.gif" alt="Drag-and-drop an article between projects" >}}

### Feature API

You may want to write some custom functionality or a script which copies documents between projects. For this reason we expose the `importDocumentAndMedia()` function on the `li-import` feature API.

#### Request

When calling the `importDocumentAndMedia()` function you need to provide the (destination) `projectId` and `userId` of the user who will become the owner of the copied document, along with information about the source document and server. The source `documentId` and `projectId` are mandatory, while the `channelId` is optional. The source server data, `customerId` and `environment`, should be taken from the server config. If you have already loaded the `documentVersion` from the source project you can pass it through as `sourceDocumentVersion` which saves on a database query.

```js
const importReport = await server.features.api('li-import').importDocumentAndMedia({
  projectId: 1,
  source: {
    channelId: 2,
    documentId: 3,
    projectId: 4,
    server: {
      customerId: 'daily-planet',
      environment: 'development'
    }
  },
  userId: 5,
  sourceDocumentVersion
})
```

#### Response

The response contains the new `documentId` if it was created successfully, a list of errors, and diffs for the content and metadata. This should provide you with enough information to identify which components and metadata properties have been modified, and allow you to take any further actions that may be necessary.

```js
{
  "documentId": 6,
  "errors": [
    {
      "message": "Media with externalId \"EIMA8bfdavuAqlAHsjEnYK\" from system \"WoodWing\" has been archived.",
      "status": 409,
      "componentId": "doc-1f4scs7i50",
      "componentLabel": "Bild",
      "componentName": "image",
      "directiveName": "image",
      "location": "content"
    },
    {
      "message": "Media with externalId \"EIMA8bfdavuAqlAHsjEnYK\" from system \"WoodWing\" has been archived.",
      "status": 409,
      "location": "metadata",
      "metadataProperty": "teaserImage"
    }
  ],
  "contentChanges": [
    // Video replaced
    {
      "type": "updateVideoDirective",
      "component": {
        "id": "doc-1f53okn200",
        "component": "video"
      },
      "directiveName": "video",
      "value": {
        "mediaId": "JIIj4mwxVWpd",
        "originalUrl": "https://bucket-name.s3.amazonaws.com/2021/05/15/a72b2868-cace-4143-baf7-7428459a0ced.mp4",
        "mimeType": "video/mp4",
        "width": 1002,
        "height": 604,
        "durationSeconds": 22.4
      },
      "eventSource": "remote"
    },
    // Image replaced
    {
      "type": "updateImageDirective",
      "component": {
        "id": "doc-1f5luh06k0",
        "component": "image"
      },
      "directiveName": "image",
      "value": {
        "originalUrl": "https://bucket-name.s3.amazonaws.com/2021/05/15/ea9d6206-7947-4f36-b9f9-fdd6689cdac2.jpeg",
        "url": "https://subdomain.imgix.net/2021/05/15/ea9d6206-7947-4f36-b9f9-fdd6689cdac2.jpeg?auto=format",
        "mediaId": "6ViedWmB-TWo",
        "width": 3840,
        "height": 2160,
        "mimeType": "image/jpeg",
        "imageService": "imgix"
      },
      "eventSource": "remote"
    },
    // Image removed due to error
    {
      "type": "updateImageDirective",
      "component": {
        "id": "doc-1f4scs7i50",
        "component": "image"
      },
      "directiveName": "image",
      "value": {},
      "eventSource": "remote"
    }
  ],
  "metadataChanges": [
    // Image removed due to error (no `newValue` set)
    {
      "metadataProperty": "teaserImage",
      "event": "document.metadata.update",
      "oldValue": {
        "originalUrl": "https://bucket-name.s3.amazonaws.com/2021/04/31/974d52f0-c2d2-4d69-a09b-6df055832040.png",
        "url": "https://subdomain.imgix.net/2021/04/31/974d52f0-c2d2-4d69-a09b-6df055832040.png?w=1024&auto=format",
        "mediaId": "AgZFVtb68s-g",
        "width": 1500,
        "height": 1123,
        "mimeType": "image/png",
        "imageService": "imgix"
      }
    }
  ]
}
```

## Known issues and limitations

Currently the feature aims to copy documents between projects which are using the same design. If there are differences between the designs it will still attempt to copy what it can, and then provide feedback in the import report such as an image being reset, or a metadata property removed.

- Referenced documents and lists are not imported. Instead, they are reset/removed.
- Nested media references are not imported (e.g. poster images for videos).
- Document and media metadata properties cannot be mapped.
- Inline links to internal documents within an editable directive are not updated or reset.
- The property `posterImage` is not supported for media content (including overrides in an include directive).
- The property `crops` is not supported for media metadata (including params in an include directive).
- Media library translated assets are not supported (but translated metadata properties are).
- Media library files are not supported.
- If the database transaction fails the media files still remain in the storage.
