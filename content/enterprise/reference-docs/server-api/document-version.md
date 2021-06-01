---
title: DocumentVersion
description: Model of a document on the server.
menus:
  reference-docs:
    parent: Server API
---

## The documentVersion object

The `documentVersion` is a core object and is returned in a lot of server API calls. It contains information about a document like content, systemdata, metadata and more.

## The documentVersion API

```js
const documentVersion = {
  // unique document id (the same as is in the URL of the editor when you have the document opened)
  id,

  // alias to id
  documentId,

  // every project defines contentTypes e.g. 'article', 'gallery' with different settings like metadata
  contentType,

  // 'article' or 'page' or 'data-record'
  documentType,

  // id of the project that this document belongs to
  projectId,

  // id of the channel that this document belongs to
  channelId,

  // gets the name and version of the design that this document was created with
  // e.g. {name: 'bootstrap', version: '1.0.0'}
  design,

  // gets the document description in the Livingdocs data format (JSON), e.g.
  // {
  //   content: [
  //     {
  //       identifier: "p:3:4.title",
  //       id: "doc-1f7380g1q0",
  //       content: {
  //         title: "This is a title
  //       }
  //     }
  //   ]
  //   design: {name: 'bootstrap', version: '1.0.0'}
  // }
  content,

  // title of the document
  title,

  // metadata object e.g.
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
  //   updatedAt: '2021-06-01T07:53:20.291Z',
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
  references,
}
```
