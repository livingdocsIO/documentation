---
title: li-reference
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: |
  {{< removed-in "release-2023-11" >}}. Use [`li-document-reference`]({{< ref "/reference/document/metadata/plugins/li-document-reference" >}}) instead.
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
  With {{< release "release-2022-03" >}} this is superseeded by [`li-document-reference`]({{< ref "/reference/document/metadata/plugins/li-document-reference" >}}).

  Shows a reference to another document. A Document Selection Dialog is shown, based on shorthand queries and `useDashboard` to select documents.
defaultUI: |
  Document selection dialog.

  ![image](https://user-images.githubusercontent.com/172394/164621716-d7dc9fb7-bd6f-4dd5-bc7b-157edd327c34.png)
storageFormat: |
  {
    $ref: 'document',
    reference: {
      id: <String>
    }
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-reference',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          index: true,                             // optional, default: false. {{< added-in "release-2023-07" >}}
          // specific
          referenceType: 'document',
          documentType: 'data-record',             // optional, one of article, page, data-record
          contentType: 'author',                   // optional, content type handle (or array)
          prefillAuthor: true                      // optional, default: false
          published: true                          // optional, shorthand for publication baseFilter, default: false
        },
        ui: {
          label: 'foo',                            // optional, takes camelized name otherwise
          config: {
            displayFilters: ['timeRange']
          }
        }
---
