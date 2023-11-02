---
title: li-estimated-time-of-completion
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Enables a user to set an estimated time of completion for the current document.
support:
  document: true
  media: false
  include: false
  creationFlow: true
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: false
  systemMetadata: true
  planningSystem: true
addedIn: release-2023-03
description: The Estimated Time of Completion Metadata Plugin `li-estimated-time-of-completion` enables a user to set an estimated time of completion for the current document. The plugin is available in the Metadata Form.
defaultUI: |
  Metadata Form:

  {{< img src="../images/li-estimated-time-of-completion-buttons.png" alt="Estimated Time of Completion Metadata Plugin buttons" >}}
  {{< img src="../images/li-estimated-time-of-completion-single-date.png" alt="Estimated Time of Completion Metadata Plugin single date" >}}
  {{< img src="../images/li-estimated-time-of-completion-date-range.png" alt="Estimated Time of Completion Metadata Plugin date range" >}}
storageFormat: |
  {
    date: <ISO8601 String>,   // for a single date
    after: <ISO8601 String>,  // for a date range - start date
    before: <ISO8601 String>, // for a date range - end date
    precision: <String>       // enum: ['date', 'datetime'] - is the date above saved as date or datetime
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-estimated-time-of-completion',
        config: {
          // common
          hideFromForm: false,                      // optional, default: false
          required: false,                          // optional, default: false
          requiredErrorMessage: 'Provide a value',  // optional
        },
        ui: {
          label: 'Ready for publication',           // optional, takes camelized name otherwise
          config: {
            readOnly: false,                        // optional, default: false
          }
        }
---
