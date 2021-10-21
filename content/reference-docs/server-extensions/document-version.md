---
title: DocumentVersion
weight: 12
description: Model of a document on the server.
menus:
  reference-docs:
    parent: Server Extensions
---

## The documentVersion object

The `documentVersion` is a core object and is returned in a lot of server API calls. It contains information about a document like content, systemdata, metadata and the lastest publication.

## The documentVersion Interface

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

  // gets the content Livingdocs data format (JSON), e.g.
  // [
  //   {
  //     identifier: "p:3:4.title",
  //     id: "doc-1f7380g1q0",
  //     content: {
  //       title: "This is a title
  //     }
  //   }
  // ]
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
  //   project_id: 3,
  //   channel_id: 4,
  //   document_id: 10,
  //   content_type: 'regular',
  //   document_type: 'article',
  //   publication_id: 19,
  //   first_publication_date: '2021-06-01T07:36:15.474Z',
  //   updated_at: '2021-06-01T07:53:20.291Z',
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
