---
title: li-text
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: A simple text value store.
support:
  document: true
  media: true
  include: true
  creationFlow: true
  pushMessage: true
  tableDashboard: true
  displayFilter: true
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
  webhookConditions: true
description: |
  A simple text value store.

  [Display Filters]({{< ref "/customising/advanced/editor-configuration/display-filter#metadata-filters" >}}) support {{< added-in "release-2023-09" >}}
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
          minLength: 100,                          // optional
          maxLength: 200,                          // optional
          recommendedMinLength: 110,               // optional
          recommendedMaxLength: 150,               // optional
          allowNewlines: false,                    // default: undefined, validated if set. Effect on ui: newlines are stripped uf not true and ui.config.rows is undefined and ui.component is not liMetaTextareaForm
          useAsTitle: true,                        // optional. {{< removed-in "release-2023-07" >}}, migrate to `displayTitlePattern`
          index: true,                             // optional, default: false. {{< added-in "release-2023-07" >}}
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
