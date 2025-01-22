---
title: li-imatrics-nlp-tags
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: true
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
keywords:
  - iMatrics
  - concepts
  - ignoredConceptTypes
defaultUI: Manage tags, add new tag suggestions
storageFormat: |
  {
    contentVersion: <String>,
    concepts: [
      {
        weight: <Number>,
        title: <String>,
        slug: <String>,
        type: <String>,
        uuid: <String>,
        inappropriate: <Boolean>,
        userAdded: <Boolean>
      }
    ]
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-imatrics-nlp-tags',
        config: {
          // common
          required: {type: 'boolean', default: false},
          requiredErrorMessage: 'string',
          hideFromForm: {type: 'boolean', default: false},
          // specific
          ignoredConceptTypes: ms.arrayOf(ms.string())
        }
---
