---
title: li-external-id
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins
summary: An input field to save an external id of another system.
support:
  document: true
  media: true
  tableDashboard: false
  include: false
  displayFilter: false
  dynamicIndexing: true
  systemMetadata: false
  planningSystem: false
description: |
  A `li-external-id` metadata field can be used to save an external id of another system. For example if you want to have an article reference to your original system. At the moment `li-external-id` by default renders a text area in the UI. If you want to hide it add the config object with `hideFromForm: true`
defaultUI: Text input
storageFormat: <String>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-external-id',
        config: {
          hideFromForm: true // default false
        }
---
