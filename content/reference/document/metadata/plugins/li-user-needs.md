---
title: li-user-needs
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: User needs metadata feature for dashboard, editor and creation-flow.
support:
  document: true
  media: false
  include: false
  creationFlow: true
  pushMessage: false
  tableDashboard: true
  displayFilter: true
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
  webhookConditions: false
addedIn: release-2025-01
description: |
  This plugin allows newsrooms to categorize Livingdocs articles based on the [*User Needs Model 2.0*](https://smartocto.com/blog/explaining-user-needs).
  __User Needs__ provide an easy and intuitive way to align content creation with audience-focused goals.  
  By considering these needs during story planning or writing, newsrooms can create articles that better resonate with their audiences, leading to increased interaction and engagement.  
  The categorization can also be leveraged for algorithmic content placement on pages, ensuring articles are delivered more effectively and with greater relevance.
  Additionally, it helps identify which needs are currently most significant to users, providing actionable insights for editorial strategy.

  Within Livingdocs, authors can select one of the eight user-need categories for their articles. 
  Depending on where the plugin is configured, user needs categories can be selected
  - in the creation-flow panel
  - in the editor metadata panel
  - in the dashboard.

  Categories can be edited or removed at any time in both the editor and the dashboard.
  Furthermore, filtering articles based on user needs can be enabled in the dashboard, helping teams streamline content discovery and analysis.

defaultUI: |
  User Needs in the __metadata panel of the editor__: 

  {{< img src="../images/li-user-needs-meta.png" alt="User Needs plugin in the metadata form" >}}

  User Needs in the __dashboard__: 

  {{< img src="../images/li-user-needs-dashboard.png" alt="User Needs plugin in the Table Dashboard"  width="300">}}

  User Needs as __display filter__:

  {{< img src="../images/li-user-needs-display-filter.png" alt="User Needs plugin as Display Filter" width="400">}}

  User Needs in the __creation flow panel__:

  {{< img src="../images/li-user-needs-creationd-flow.png" alt="User Needs plugin in Creation Flow" >}}

storageFormat: |
  <String> // 'engage' | 'update' | 'educate' | 'perspective' | 'divert' | 'inspire' | 'connect' | 'help'

contentTypeConfig: |2
        handle: 'userNeeds',
        type: 'li-user-needs',
        config: {
          index: true,                                                // optional, default: false
          hideFromForm: false,                                        // optional, default: false
          required: false,                                            // optional, default: false
          requiredErrorMessage: 'Provide a value',                    // optional
        },
        ui: {
          label: {de: 'Nutzer:innen- Bedürfnisse', en: 'User Needs'}  // optional, can also be string
          config: {
            readOnly: false,                                          // optional, default: false
          }
        }

additionalConfig: |
  [Table Dashboard]({{< ref "/reference/project-config/editor-settings#example-table-dashboard" >}}) config:

  ```js
  columns: [
    // ...
    {
      label: {de: 'Nutzer:innen- Bedürfnisse', en: 'User Needs'},   // can also be a string
      metadataPropertyName: 'userNeeds',
      editable: true,
      minWidth: 200,
      growFactor: 1,
      priority: 2
    }
    // ...
  ]
  ```
  **Display Filter** config: 

  ```js
  displayFilter: [
    {metadataPropertyName: 'userNeeds'}
  ]
  ```

  **Creation Flow** config: 

  ```js
  paramsSchema: [
    {
      handle: 'liUserNeeds',
      type: 'li-user-needs',
      ui: {
        label: {de: 'Nutzer:innen- Bedürfnisse', en: 'User Needs'},   // optional, can also be a string
        config: {
          readOnly: false                                             // optional, default: false
        }                                     
      }
    }
  ]
  ```
---
