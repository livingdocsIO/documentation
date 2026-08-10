---
title: li-document-reference
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Shows a reference to another document.
support:
  document: true
  media: true
  include: true
  creationFlow: true
  pushMessage: true
  usageLog: false
  tableDashboard: true
  displayFilter: true
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
  webhookConditions: false
description: |
  A `li-document-reference` metadata field shows a reference to another document. To select a document one gets provided a Document Selection Modal.
defaultUI: |
  Selected document, or document selection dialog

  ![image](../images/li-document-reference-ui.png)

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
          index: true,                             // optional, default: false
          // specific
          documentType: 'article',                 // optional, one of article, page, data-record
          contentType: 'my-content-type',          // optional, filters the document selection
          published: true,                         // optional, shorthand for publication displayFilter, default: false
          prefillAuthor: true                      // optional, set value to document creator if the prefilling configuration for the current user exists, default: false
        },
        ui: {
          label: 'foo',         // optional, takes camelized handle otherwise
          config: {
            style: 'default',   // optional, defaults to 'default'. Other options: 'teaser' | 'minimal'
            useDashboard: '',   // optional, reference to a custom dashboard
            baseFilters: [],    // optional, extends base filters from the dashboard specified in useDashboard
            displayFilters: [], // optional, overrides display filters in selection dialog
            cacheSearch: false, // optional, used to persist search query and filters when reopening search dialog, default: false
            readOnly: false     // optional, default: false
          }
        }
---
