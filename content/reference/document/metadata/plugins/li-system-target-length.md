---
title: li-system-target-length
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
summary: Provide a suggested total character count for the text in the document.
history:
  - release: release-2025-05
    version: 2025-05
    description: Table dashboard support was added in the `2025-05` release.
support:
  document: true
  media: false
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: true
  displayFilter: false
  searchIndexing: false
  systemMetadata: true
  planningSystem: false
description: |
  This plugin is used to provide a suggested total character count for the text in the document.
defaultUI: |
  **Input**: Number input, or slider if `steps` are defined.

  **Editor**: Difference, Total Characters, Target Range, Characters in Focussed Component

  {{< img src="../images/li-target-length.png" alt="Target Length Indicator" >}}
storageFormat: |
  {
    characters: <Integer>
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-system-target-length',
        ui: {
          config: {
            acceptedCharacterDifference: 20, // Range above and below `value` considered accepted
            // optional, allows picking a step instead of entering an exact number
            steps: [
              {
                label: 'S', // use a short one, e.g. "S" "M" "L"
                value: 100 // number of characters
              },
              {
                label: 'M',
                value: 200
              }
            ],
            // optional, allows the input of an exact number besides picking a step
            allowAnyNumber: true,
            // optional, default: 'characters' {{< added-in "release-2025-07" >}}
            unit: 'lines', 
            // optional, {{< added-in "release-2025-07" >}}
            showExactCountCheckbox: true
          }
        }
---
