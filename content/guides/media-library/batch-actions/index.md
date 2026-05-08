---
title: Batch Actions
description: Perform actions on multiple media library assets simultaneously
weight: 6
---

{{< added-in "release-2025-11" block >}}

The Media Center supports selecting multiple assets and performing actions on all of them at once. This is useful when you need to manage, enrich, or organize large numbers of assets efficiently.

## Selecting Multiple Assets

- Hold `Shift` and use the arrow keys, or
- Hold `Command` (Mac) / `Ctrl` (Windows) and click the desired assets.
- Press `Escape` to clear the selection.

## Available Actions

Once multiple assets are selected, the following actions are available:

- **Download** - Download all selected assets.
- **Send to inbox** - Assign selected assets to a document inbox.
- **Store in archive / Remove from archive** - Mark assets as archived to prevent deletion.
- **Delete** - Permanently delete selected assets.
- **Add to collection** {{< added-in "release-2026-05" >}} - Add selected image assets to an image collection. Opens a dialog to choose the target collection. Only available when image collections are enabled and all selected assets are of type `mediaImage`.
- **Edit metadata** {{< added-in "release-2026-05" >}} - Open a combined dialog to update metadata fields across all selected assets. Fields that differ between assets are clearly marked: leaving a field unchanged keeps each asset's original value, while editing it applies the new value to all selected assets. The dialog shows thumbnails with status indicators for unsaved changes, validation errors, and saving state.

## Permissions and Constraints

- **Delete** is only available if the user has the required permissions and none of the selected assets are archived.
- **Store in archive** is only available if none of the selected assets are already archived or revoked, and the user has sufficient permissions.

{{< info >}}
The _Store in Archive_, _Remove from Archive_, and _Delete_ actions require `use2025Behavior` to be enabled. Without it, the legacy _Archive_ action is available instead.
For more details, see the [2025 Behavior]({{< ref "/guides/media-library/2025-behavior" >}}) guide.
{{< /info >}}
