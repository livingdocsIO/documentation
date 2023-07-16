---
title: li-dependencies
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
support:
  document: true
  media: false
  tableDashboard: false
  include: false
  displayFilter: false
  dynamicIndexing: false
  systemMetadata: false
  planningSystem: false
defaultUI: None
storageFormat: |
  {
    js: [
      {
        src: <String>,
        code: <String>,
        inline: <Boolean>,
        library: <String>,
        namespace: <String>,
        componentIds: [
          <String>
        ]
      }
    ],
    css: [
      {
        src: <String>,
        code: <String>,
        inline: <Boolean>,
        library: <String>,
        namespace: <String>,
        componentIds: [
          <String>
        ]
      }
    ]
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-dependencies',
---
