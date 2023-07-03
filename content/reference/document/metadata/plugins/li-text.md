---
title: li-text
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
summary: A simple text value store.
support:
  document: true
  media: true
  tableDashboard: true
  include: true
  displayFilter: false
  dynamicIndexing: true
  systemMetadata: false
  planningSystem: false
description: A simple text value store.
defaultUI: Renders a select element if a `dataProvider` is configured, otherwise renders an autogrowing reasonably sized textarea.
storageFormat: <String>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-text',
        config: {
          // common
          hideFromForm: false,                     // optional, default: false
          required: true,                          // optional, default: false
          requiredErrorMessage: 'Provide a value', // optional
          // specific
          minLength: 100,                          // optional, added in release-2022-09
          maxLength: 200,                          // optional
          recommendedMinLength: 110,               // optional, added in release-2022-09
          recommendedMaxLength: 150,               // optional, added in release-2022-09
          allowNewlines: false,                    // default: undefined, added in release-2022-09, validated if set. Effect on ui: newlines are stripped uf not true and ui.config.rows is undefined and ui.component is not liMetaTextareaForm
          useAsTitle: true,                        // optional, removed in {{<release release-2023-07 >}}, migrate to `displayTitlePattern`
          translatable: true,                      // optional, default: false, translations are only supported for data-record and mediaLibrary
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
