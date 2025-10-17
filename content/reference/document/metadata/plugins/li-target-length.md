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
  - release: release-2025-07
    version: 2025-07
    description: Add `unit` and `showExactCountCheckbox` config support.
  - release: release-2025-09
    version: 2025-09
    description: Support an array in the `unit` config to enable both selectors in the metadata UI.
  - release: release-2025-11
    version: 2025-11
    description: Add `modes` UI config property.
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
  Enables users to define a target length for a document. The plugin provides feedback to help maintain content within a desired range.
defaultUI: |
  ### Metadata Panel

  Within the document's metadata panel, users can set the desired target length. The plugin offers multiple input modes, and displays the first available one in this priority order: `steps`, `characters`, `lines`. Users can switch between any configured modes.

  #### Input Mode: `steps`

  {{< img src="../images/li-target-length-steps.png" alt="Input Mode: Steps" width="600" >}}

  #### Input Mode: `characters`

  {{< img src="../images/li-target-length-characters.png" alt="Input Mode: Characters" width="600" >}}

  #### Input Mode: `lines`

  {{< img src="../images/li-target-length-lines.png" alt="Input Mode: Lines" width="600" >}}

  ### Editor

  Once a target length is configured, the editor displays an indicator in the bottom left corner. The indicator includes:

  - Difference to target length
  - Total document length
  - Target length
  - Length of the currently focused component

  {{< img src="../images/li-target-length-indicator.png" alt="Target Length Indicator" >}}
storageFormat: |
  {
    characters: <Integer>,
    unit: <String>,
    isChecked: <Boolean>
  }
contentTypeConfig: |2
        handle: 'myHandle'
        type: 'li-target-length',
        ui: {
          config: {
            // Defines which input modes are available to users:
            // - steps: A slider with pre-configured step values,
            //   requires `steps` to be configured (see below).
            // - characters: A number input for entering a
            //   character count.
            // - lines: A number input for entering a line count.
            //   Requires {{< a href="/reference/project-config/editor-settings/#text-count" title="lineCountFraction">}} to convert between
            //   characters and lines.
            // {{< added-in "release-2025-11" >}}
            modes: ['steps', 'characters', 'lines'],

            // Defines the selectable steps when the input mode is
            // "steps" (see above).
            steps: [
              {
                // Use a short label, e.g. "S", "M", "L"
                label: 'S',
                // Number of characters
                value: 100
              },
              {
                label: 'M',
                value: 200
              }
            ],

            // Optional. Number of characters above or below `value`
            // considered acceptable when writing a document
            acceptedCharacterDifference: 20, 

            // Optional. Only allows the input of an exact number
            // instead of picking a step.
            // {{< deprecated-in "release-2025-11" >}}
            // {{< removed-in "release-2026-05" >}}
            allowAnyNumber: true,

            // Optional. Specifies the input unit for exact number
            // inputs. It can be either `characters` or `lines`. In
            // the case of `lines`, the {{< a href="/reference/project-config/editor-settings/#text-count" title="lineCountFraction">}} setting is
            // required to convert between characters and lines.
            // Starting with {{< release "release-2025-09" >}}, multiple units can be
            // specified as an array. Previously, only a single unit
            // (string) was supported.
            // {{< deprecated-in "release-2025-11" >}}
            // {{< removed-in "release-2026-05" >}}
            unit: 'lines',

            // Optional. Allows the input of an exact number besides
            // picking a step. Users can toggle between the input
            // modes. 
            // {{< added-in "release-2025-07" >}}
            // {{< deprecated-in "release-2025-11" >}}
            // {{< removed-in "release-2026-05" >}}
            showExactCountCheckbox: true
          }
        }
---
