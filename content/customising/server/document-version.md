---
title: DocumentVersion
weight: 4
description: Model of a document on the server.
menus:
  customising:
    parent: Server Extensions
    weight: 5
---

The `documentVersion` is a core object and is returned in a lot of server API calls. It contains information about a document like content, systemdata, metadata and the latest publication.

## DocumentVersion API

```js
const documentVersion = {
  // unique document id
  // (the same as is in the URL of the editor when you have the document opened)
  id,

  // alias to id
  documentId,

  // every project defines contentTypes e.g. 'article', 'gallery'
  // with different settings like metadata
  contentType,

  // 'article', 'page' or 'data-record'
  documentType,

  // id of the project this document belongs to
  projectId,

  // id of the channel this document belongs to
  channelId,

  // gets the name and version of the design that this document was created with
  // e.g. {name: 'bootstrap', version: '1.0.0'}
  design,

  // gets the content Livingdocs data format (JSON), e.g.
  // [
  //   {
  //     component: "title",
  //     identifier: "p:3:4.title",
  //     id: "doc-1f7380g1q0",
  //     content: {
  //       title: "This is a title"
  //     }
  //   }
  // ]
  content,

  // title of the document
  title,

  // metadata proxy (see for more info below) e.g.
  //   {
  //     title: 'This is a title',
  //     slug: 'this-is-a-title'
  //   }
  metadata,

  // metadata source object (used by field extractor), e.g.
  //   {
  //     title: 'manual',
  //   }
  metadataSource,

  // systemdata of a document, e.g.
  // {
  //   projectId: 3,
  //   channelId: 4,
  //   documentId: 10,
  //   contentType: 'regular',
  //   documentType: 'article',
  //   publicationId: 19,
  //   firstPublicationDate: '2021-06-01T07:36:15.474Z',
  //   lastPublicationDate: '2021-06-01T07:40:22.574Z',
  //   significantPublicationDate: '2021-06-01T07:40:22.574Z',
  //   visiblePublicationDate: '2023-09-01T07:40:22.574Z',
  //   expectedOrActualPublicationDate: '2023-09-01T07:40:22.574Z',
  //   design: {
  //       name: 'p:3:4',
  //       version: '7.0.0'
  //   }
  // }
  systemdata,

  // references to other documents/assets, e.g.
  // [
  //   {
  //     componentId: 'doc-1f738fbi40'
  //     componentName: 'image'
  //     directiveName: 'image'
  //     id: '5xTF3D0GK8FP'
  //     location: 'image-directive'
  //     type: 'image'
  //   }
  // ]
  references
}
```

## documentVersion.metadata

`documentVersion.metadata` is a proxy of the metadata object. You can't access a metadata property which is not in the Project Config (even when the data are stored in the database).

There are two options to access a metadata property:

### Get a single Metadata property

```js
const title = documentVersion.metadata.title
```

If you try to access a metadata property which is not in the Project Config, you get this error message:

```js
Failed to get unconfigured Metadata property 'myCustomField'
```

To prevent that error message you can test if a metadata property is defined in the Project Config:

```js
if ('myCustomField' in documentVersion.metadata) {
  const myCustomField = documentVersion.metadata.myCustomField
  // ...
}
```

### Get all Metadata properties

```js
// toJSON() returns a Javascript object
const metadata = documentVersion.metadata.toJSON()
```
