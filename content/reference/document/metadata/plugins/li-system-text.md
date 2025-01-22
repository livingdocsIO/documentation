---
title: li-system-text
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A simple text value store as system metadata.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: true
  searchIndexing: true
  systemMetadata: true
  planningSystem: false
  webhookConditions: true
description: |
  A simple text value store, almost identical to `li-text`, but as system metadata (does not indicate a draft content change).
  {{< added-in "release-2024-09" >}}.

  It can be used in cases where a simple text value should be stored in the metadata, but the document version should not
  be increased when the metadata value changes. Or in other words, it will not show up as unpublished change.

  Key differences to `li-text`:
  - Does not indicate a draft content change (system metadata)
  - Restricted to document metadata
  - Not translatable
  - No validation hooks
defaultUI: Renders a select element if a `dataProvider` is configured, otherwise renders an autogrowing reasonably sized textarea.
storageFormat: <String>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-system-text',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          // specific
          minLength: 100,                          // optional
          maxLength: 200,                          // optional
          recommendedMinLength: 110,               // optional
          recommendedMaxLength: 150,               // optional
          allowNewlines: false,                    // default: undefined, validated if set. Effect on ui: newlines are stripped uf not true and ui.config.rows is undefined and ui.component is not liMetaTextareaForm
          index: true,                             // optional, default: false.
          dataProvider: {                          // optional
            // Option 1 - list of items
            type: 'labelValuePair',
            items: [
              {label: 'Item A', value: 'a'},
              {label: 'Item B', value: 'b', isDefault: true}, // isDefault sets the value if document opened the first time
              {label: 'Item C', value: 'c'}
            ]
            // Option 2 - DataSource
            dataSource: 'labelValuePairDataSource'
          }
        },
        ui: {
          label: 'foo',                   // optional, takes camelized name otherwise
          config: {
            placeholder: 'bar',           // optional, takes camelized name otherwise
            readOnly: true                // optional, default: false
          }
        }
---
