---
title: li-reference-list
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
support:
  document: true
  media: true
  tableDashboard: false
  include: false
  displayFilter: false
  dynamicIndexing: true
  systemMetadata: false
  planningSystem: false
description: With `release-2022-11` this is superseeded by [`li-document-references`]({{< ref "/reference/document/metadata/plugins/li-document-references" >}}).
defaultUI: Document selection dialog.
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
        type: 'li-reference-list',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          // specific
          referenceType: 'documents',              // required, must be 'documents'
          documentType: 'article',                 // optional, one of article, page, data-record
          contentType: 'my-content-type',          // optional, content type handle (or array)
          min: 3,                                  // optional, minimum number of references
          max: 6                                   // optional, maximum number of references
        }
---
