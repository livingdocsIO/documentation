---
title: li-manual-document-status
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
  systemMetadata: true
  planningSystem: false
defaultUI: Manage manual document statuses
storageFormat: <String>
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-manual-document-status',
        config: {
          placeholder: ms.$ref('LivingdocsTranslatableString'),
          statuses: ms.arrayOf(ms.strictObj({
            value: 'string',
            label: ms.required.$ref('LivingdocsTranslatableString'),
            color: 'string'
          }))
        }
---
