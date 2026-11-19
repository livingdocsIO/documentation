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
  usageLog: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: false
  systemMetadata: true
  planningSystem: true
  webhookConditions: false
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
          label: 'Ready for publication',           // optional, default: start case of handle
          config: {
            readOnly: false,                        // optional, default: false
          }
        }
---

## Display on Dashboards

{{< added-in "release-2027-01" block >}}

When a document has no publication date yet, dashboards, the editor toolbar and [Planning Calendar]({{< ref "/guides/editor/planning-calendar" >}}) cards show its estimated time of completion in place of the publication date. They show the `ui.label` of this property, followed by a preposition and the date, e.g. "Ready for publication on 07.01.2027". Choose a label that reads well in front of a date in every UI language your editors use. Avoid labels that end in a preposition. For example, "Ready until" would read "Ready until on 07.01.2027".

{{< img src="../images/li-estimated-time-of-completion-table-dashboard.png" alt="Publish state cell of a table dashboard showing Ready for publication on 07.01.2027" width="300" caption="Estimated time of completion in the publish state cell of a table dashboard." >}}

The label shown depends on the `ui.label` config:

- Without a `ui.label`: the handle in start case, e.g. "Estimated Time Of Completion" for `estimatedTimeOfCompletion`.
- With a `ui.label`: its text in the editor's UI language. If it has none, its English text is used, and if that is missing too, the built-in label "Ready for publication", translated into all editor languages.

The same label is also shown in the metadata form.
