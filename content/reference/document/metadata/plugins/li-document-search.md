---
title: li-document-search
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Dynamically select documents based on filters in an include.
support:
  include: true
description: |
  The `li-document-search` plugin enables selecting documents based on defined filter criteria in includes. The documents can be filtered using [displayFilters]({{< ref "/customising/advanced/editor-configuration/display-filter" >}}) and [baseFilters]({{< ref "/customising/advanced/editor-configuration/base-filter" >}}), similar to how dashboards are configured. In addition, the results can be sorted and limited.

  `li-document-search` ensures that documents are only included at most once per document.
defaultUI: |
  Depending on the include's configuration, editors can specify filters and a limit in the UI, according to which the documents are loaded.

  ![li-document-search UI example](/reference/document/metadata/li-document-search-example.png)
storageFormat: |
  {
    displayFilterStates: <Array>, // stores the UI state
    filters: <Array>,
    sort: <String>,
    limit: <Integer>
  }
includeConfig: |2
        handle: 'myHandle',
        type: 'li-document-search',
        config: {
          contentTypes: ['regular'], // optional, shorthand for contentType baseFilter
          baseFilters: [],           // optional
          displayFilters: [],        // optional
          sort: '',                  // optional, default: '-updated_at'
          showLimit: true,           // optional, show limit input in UI
          defaultLimit: 3,           // required, default number of included documents
          minLimit: 2,               // optional if showLimit=true, minimum configurable limit in UI
          maxLimit: 6                // required if showLimit=true, maximum configurable limit in UI
        }
---
