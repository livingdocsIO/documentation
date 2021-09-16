---
title: Metadata
renderSummaries: false
menus:
  reference-docs:
    weight: 3
    parent: Document
---

## Introduction

Every document can have metadata. Which metadata properties a document has is defined by its `contentType`. A metadata object consists of key-value pairs where the key is unique per document.

Every metadata property has a type which is called a `metadata plugin`.
Livingdocs offers pre-made plugins for a wide array of data types like strings, dates or references to other documents. Where this is not enough, it's possible to create your own metadata plugins.

Example of a metadata object as it could be returned by the Public API:
```json
{
  "title": "Doctor Who 2",
  "url": "/test/doctor-who",
  "seo": {
    "title": "BBC TV Show - Doctor Who",
    "description": "Best TV show of all times",
    "newsKeywords": "tv bbc",
    "excludeFromSpiders": false
  }
}
```

## Configuration

A metadata configuration describes the metadata properties. Each `contentType` must provide its own configuration.

```js
// Metadata configuration example in a contentType
metadata: [{
  handle: 'title',
  plugin: 'li-text',
  config: {
    maxLength: 200,
    required: true,
    requiredErrorMessage: 'please provide a title'
  }
}, {
  handle: 'slug',
  plugin: 'li-text',
}, {
  handle: 'slug',
  plugin: 'li-seo'
}]
```

## Guides

- [Guide: Setup Metadata]({{< ref "/guides/documents/metadata/metadata-examples" >}}).
