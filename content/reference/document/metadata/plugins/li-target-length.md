---
title: li-target-length
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
  systemMetadata: false
  planningSystem: false
description: |
  This plugin is used to provide a suggested total character count for the text in the document.

  {{< added-in "release-2025-09" >}} When the `unit` config is set to an array containing both `characters` and `lines`, the plugin displays automatic unit conversion next to the input field (e.g., "~ 125 lines" or "~ 10,000 characters"). The `steps` value must always be in characters when using this feature.
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
        type: 'li-target-length',
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
            // optional, default: 'characters', options: 'characters' or 'lines', {{< added-in "release-2025-07" >}}
            // can be an array of ['characters', 'lines'], {{< added-in "release-2025-09" >}}
            unit: 'lines', 
            // optional, {{< added-in "release-2025-07" >}}
            showExactCountCheckbox: true
          }
        }
---
