---
title: li-bundled-documents
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A list of documents belonging to a bundle.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: true
  planningSystem: true
description: |
  Used for managing bundles of documents.
defaultUI: None
storageFormat: |
  {
    $ref: 'documents',
    references: [
      {
        id: <String>
      }
    ]
  }
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-bundled-documents',
        config: {
          index: true                              // optional, default: false. {{< added-in "release-2023-07" >}}
        }
---
