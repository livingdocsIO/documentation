---
title: li-unique-id
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Unique IDs and handles.
support:
  document: true
  media: false
  include: false
  creationFlow: true
  pushMessage: false
  tableDashboard: true
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
  webhookConditions: true
addedIn: release-2024-11
description: |
  The `li-unique-id` plugin is ideal for managing user-defined IDs or handles where uniqueness among values is required. The user interface is similar to an [`li-text`]({{< ref "/reference/document/metadata/plugins/li-text" >}}) field, but it includes additional validation properties:

  - **Uniqueness**: Ensures uniqueness among values within the same `uniquenessScope` per project.
    {{< warning >}}The `uniquenessScope` must not be updated, as doing so would break the uniqueness validation for new values. Changing it requires a manual database migration.{{< /warning >}}
  - **Format**: Enforces the accepted input format using a regular expression.
  - **Required**: Ensures that a value is provided.

  These validations are enforced only when publishing a document, meaning that uniqueness is guaranteed only for published values.

  {{< info >}}Scheduled publishing may fail if another document has claimed the unique value in the meantime. Use scheduled publishing with `li-unique-id` properties carefully to avoid conflicts.{{< /info >}}

  ### Fetch Documents by `li-unique-id`

  Deliveries can query the public API to find documents using their `li-unique-id` metadata property. Unlike document IDs, this approach allows the same identifier to be used across different environments (e.g., staging, production). When querying with the key `metadata.<handle>.id` and the value `<uniquenessScope>.<uniqueId>`, the `li-unique-id` metadata plugin ensures a single matching result.

  ```js
  const filters = JSON.stringify([
    {key: 'metadata.name.id', term: 'menu:main'}
  ])
  const response = await fetch(`api/v1/publications/search?filters=${filters}`)
  ```
storageFormat: <String>
contentTypeConfig: |2
        handle: 'name'
        type: 'li-unique-id',
        config: {
          index: true,                // default: false
          hideFromForm: false,        // default: false
          required: true,             // default: false
          requiredErrorMessage: '',   // default: "The field '{label}' is required"
          // Regular expression the value must match
          regex: '^[a-zA-Z0-9\\-]+$', // default: undefined
          regexErrorMessage: '',      // default: "{label} does not match the required format"
          // Defines the scope within which the value must be unique. Uniqueness
          // is enforced across all values sharing the same uniquenessScope
          uniquenessScope: 'menu'     // required, must not be updated
        },
        ui: {
          label: 'Name',              // default: "{handle}"
          config: {
            placeholder: 'Name',      // default: "{label}"
            readOnly: true            // default: false
          }
        }
---
