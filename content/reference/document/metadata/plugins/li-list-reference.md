---
title: li-list-reference
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
support:
  document: false
  media: false
  include: true
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
defaultUI: Selected list, or list selection dialog
storageFormat: |
  {
    $ref: 'list',
    reference: {
      id: <String>,
      count: <Integer>,
      priority: <Integer>
    }
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-list-reference',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          index: true,                             // optional, default: false. {{< added-in "release-2023-07" >}}
          // specific
          defaultCount: true
        }
---
