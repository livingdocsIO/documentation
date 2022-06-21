---
title: Metadata
renderSummaries: false
menus:
  reference-docs:
    weight: 3
    parent: Document
---

## Introduction

Every document is defined by it's `contentType` and every `contentType` has to define it's metadata. The metadata object (storage) consists of key-value pairs where the key is unique per document.

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

A metadata configuration describes the metadata properties each `contentType` (or `mediaType` or `include`) can have.

```js
// Metadata configuration example in a contentType
metadata: [
  {
    handle: 'title',
    type: 'li-text',
    config: {
      // general configs available for all plugins
      required: true,
      requiredErrorMessage: 'please provide a title',
      hideFromForm: false

      // li-text specific configs
      maxLength: 200,
    }
  },
  {handle: 'description', type: 'li-text'},
  {
    handle: 'reference',
    type: 'li-document-reference',
    config: {
      contentType: 'gallery'
    },
    ui: {
      label: 'Gallery',
    }
  }
]
```

## Livingdocs Metadata Plugins

Livingdocs offers metadata [plugins]({{< ref "/reference-docs/document/metadata/metadata-plugin-list" >}}) for a wide array of data types like strings, dates or references to other documents. These plugins should fulfill the most common use cases and have a strict schema.

:information_source: A combination of metadata `type` (plugin) and configuration defines how the UI in the editor looks and in what format data are stored.


## Create your own Plugins

If the provided plugins do not fulfill your needs, you can create your own metadata plugin. Check this [guide]({{< ref "/guides/documents/metadata/metadata-examples" >}}) for an example.


## References

- [Metadata Plugin List]({{< ref "/reference-docs/document/metadata/metadata-plugin-list" >}})
- [Metadata Plugin Guide]({{< ref "/guides/documents/metadata/metadata-examples" >}}).
- [Metadata Plugin Server Extension]({{< ref "/reference-docs/server-extensions/metadata-plugins" >}}).
