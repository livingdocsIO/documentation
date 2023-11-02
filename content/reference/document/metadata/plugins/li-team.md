---
title: li-team
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Display team in metadata form or dashboard.
support:
  document: true
  media: false
  include: false
  creationFlow: true
  pushMessage: false
  tableDashboard: true
  displayFilter: true
  searchIndexing: true
  systemMetadata: true
  planningSystem: true
addedIn: release-2023-03
description: The team metadata plugin `li-team` enables a user to associate other users with the current document by adding or removing them from the teams plugin. Additionally one user can be marked as the owner. The owner can not be removed from the team.
defaultUI: |
  Metadata Form:

  {{< img src="../images/li-team-meta.png" alt="Team plugin in the meta data" >}}

  Dashboard:

  {{< img src="../images/li-team-dashboard.png" alt="Team plugin in the Table Dashboard" >}}
storageFormat: |
  {
    // 'id' and '*By' keys are always user ids
    owner: {
      id: <Number>,
      assignedAt: <ISO8601 String>,
      assignedBy: <Number>
    },
    activeUsers: {
      id: <Number>,
      addedAt: <ISO8601 String>,
      addedBy: <Number>
    },
    inactiveUsers: ms.arrayOf(ms.strictObj({
      id: <Number>,
      addedAt: <ISO8601 String>,
      addedBy: <Number>,
      removedAt: <ISO8601 String>,
      removedBy: <Number>'
    }))
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-team',
        config: {
          // common
          hideFromForm: false,                      // optional, default: false
          required: false,                          // optional, default: false
          requiredErrorMessage: 'Provide a value',  // optional
          index: true,                              // optional, default: false. {{< added-in "release-2023-07" >}}
        },
        ui: {
          label: 'My Team',                         // optional, takes camelized name otherwise
          config: {
            readOnly: false,                        // optional, default: false
          }
        }
additionalConfig: |
  [Table Dashboard]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}}) config:

  ```js
  columns: [
    ...,
    {
      label: 'Team',
      metadataPropertyName: 'myTeam',
      editable: true,
      minWidth: 200,
      growFactor: 1,
      priority: 2
    }
  ]
  ```
---
