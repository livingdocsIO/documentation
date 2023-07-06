---
title: li-document-reference
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
support:
  document: true
  media: true
  tableDashboard: true
  include: true
  displayFilter: false
  dynamicIndexing: true
  systemMetadata: false
  planningSystem: false
description: |
  A `li-document-reference` metadata field shows a reference to another document. To select a document one gets provided a Document Selection Modal.
defaultUI: |
  Selected document, or document selection dialog

  ![image](https://user-images.githubusercontent.com/172394/163945540-02557891-ee21-42c5-a03e-4bfb1723e228.png)
storageFormat: |
  {
    $ref: 'document',
    reference: {
      id: <String>
    }
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-document-reference',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          // specific
          documentType: 'article',                 // optional, one of article, page, data-record
          contentType: 'my-content-type',          // optional, filters the document selection
          published: true,                         // optional, shorthand for publication displayFilter, default: false
          index: true                              // optional, default: false. {{< added-in "release-2023-07" >}}
        },
        ui: {
          label: 'foo',                  // optional, takes camelized name otherwise
          config: {
            style: 'default',            // optional, defaults to 'default'. Other options: 'teaser' | 'minimal'
            useDashboard: '',            // optional, reference to a custom dashboard
            baseFilters: [],             // optional, invisible filters and applied to every search (including the default result list)
            displayFilters: [],          // optional, filters that the user can set in the UI (below the search input)
          }
        }
---
