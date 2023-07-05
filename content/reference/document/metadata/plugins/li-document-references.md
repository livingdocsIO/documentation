---
title: li-document-references
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
support:
  document: true
  media: true
  tableDashboard: false
  include: true
  displayFilter: false
  dynamicIndexing: true
  systemMetadata: false
  planningSystem: false
description: A `li-document-references` metadata field is a list of references to other documents. A Document Selection Dialog is shown, based on shorthand queries and `useDashboard` to select documents.
defaultUI: |
  Selected documents, or document selection dialog

  ![image](https://user-images.githubusercontent.com/172394/163945540-02557891-ee21-42c5-a03e-4bfb1723e228.png)
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
        handle: 'myHandle'
        type: 'li-document-references',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          index: true,                              // optional, default: false, added in {{< release "release-2023-07" >}}
          // specific
          documentType: 'article',                 // optional, one of article, page, data-record
          contentType: 'my-content-type',          // optional, filters the document selection
          published: true,                         // optional, shorthand for publication displayFilter, default: false
        },
        ui: {
          label: 'foo',                  // optional, takes camelized name otherwise
          config: {
            style: 'default',            // optional, defaults to 'default'. Other options: 'teaser'
            useDashboard: '',            // optional, reference to a custom dashboard
            baseFilters: [],             // optional, invisible filters and applied to every search (including the default result list)
            displayFilters: [],          // optional, filters that the user can set in the UI (below the search input)
          }
        }
---
