---
title: li-reference-list
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: |
  {{< removed-in "release-2023-11" >}}. Use [`li-document-references`]({{< ref "/reference/document/metadata/plugins/li-document-references" >}}) instead.
support:
  document: true
  media: true
  tableDashboard: false
  include: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
deprecatedIn: release-2023-09
removedIn: release-2023-11
description: |
  With {{< release "release-2022-11" >}} this is superseeded by [`li-document-references`]({{< ref "/reference/document/metadata/plugins/li-document-references" >}}).

  A list of references to other documents. A Document Selection Dialog is shown, based on shorthand queries and `useDashboard` to select documents.
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
          index: true,                             // optional, default: false. {{< added-in "release-2023-07" >}}
          // specific
          referenceType: 'documents',              // required, must be 'documents'
          documentType: 'article',                 // optional, one of article, page, data-record
          contentType: 'my-content-type',          // optional, content type handle (or array)
          min: 3,                                  // optional, minimum number of references
          max: 6                                   // optional, maximum number of references
        }
---
