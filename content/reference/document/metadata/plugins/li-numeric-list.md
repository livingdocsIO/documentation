---
title: li-numeric-list
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Input for multiple numbers.
support:
  document: true
  media: true
  include: true
  creationFlow: true
  pushMessage: true
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
defaultUI: |
  Input for multiple numbers.

  {{< img src="../li-numeric-list-example.png" alt="Numeric List Example" >}}
storageFormat: |
  [<Integer>]
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-numeric-list',
        config: {
          // common
          required: true,                                   // optional, default: false
          requiredErrorMessage: 'Custom required message',  // optional
          index: true,                                      // optional, default: false. {{< added-in "release-2023-07" >}}
          // specific
          maxItems: 5,                                      // optional
        },
        ui: {
          label: 'foo',                   // optional, takes camelized name otherwise
          config: {
            placeholder: 'bar',           // optional, takes capitalized handle name otherwise
            readOnly: true                // optional, default: false
          }
        }
---
