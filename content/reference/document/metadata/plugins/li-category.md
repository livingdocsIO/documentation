---
title: li-category
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Single category selection.
support:
  document: true
  media: false
  include: true
  creationFlow: true
  pushMessage: false
  tableDashboard: true
  displayFilter: true
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
defaultUI: Select input, with category tree view and search
storageFormat: |
  {
    id: <String>,
    path: <String>
  }
contentTypeConfig: |2
        handle: 'myHandle',
        type: 'li-category',
        config: {
          index: true         // optional, default: false. {{< added-in "release-2023-07" >}}
        }
---
