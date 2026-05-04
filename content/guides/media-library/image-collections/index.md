---
title: Image Collections
description: Organise images from the media library into persistent, named collections for long-term projects and team workflows.
weight: 3
---

{{< added-in "release-2026-03" block >}}

The Livingdocs Media Center already offers [Media Library Dashboards]({{< ref "/guides/media-library/media-library-setup/" >}}) for researching and browsing images, and the Document Inbox for collecting images for a specific article. However, neither provides a structured way to organise images for large or ongoing topics where collaboration across teams over a longer period of time matters.

**Image Collections** fill this gap.
Editors can create named image collections and quickly access them whenever they need to pick an image for a document.
For example, a collection might include photos from a recurring annual event, a specific photo shoot, or a defined subject area.
Collections are persistent and shared across the project, making them suitable for team-based workflows.

## Prerequisites

Before enabling Image Collections, you need at least one media type of type `mediaImage` configured in your project. See the [Media Library Setup guide]({{< ref "/guides/media-library/media-library-setup/" >}}) for details.

## Configuration

### Project Config

Add the `imageCollections` property at the root of your project config:

```js
// project-config
module.exports = {
  // ...
  imageCollections: {
    // Required: handles of mediaImage media types to make available in Image Collections
    mediaTypes: ['image'],
    // Optional: handle of a media library dashboard shown in the collection picker dialog,
    // when editors add images to a collection. Make sure its mediaTypes match the ones above.
    useDashboard: 'myImagesDashboard',
    // Optional
    pageTitle: {en: 'Image Collections', de: 'Bild-Sammlungen'}
  }
}
```

**`mediaTypes`** (required): An array of media type handles. All referenced media types must be of type `mediaImage`. At least one handle is required.

**`useDashboard`** (optional): The handle of an existing [Media Library Dashboard]({{< ref "/guides/media-library/media-library-setup/#media-library-dashboard-configuration" >}}) to show inside the dialog when editors browse for images to add to a collection. Make sure the dashboard's filters and base filters cover the same media types listed in `mediaTypes`.

**`pageTitle`** (optional): Used as the page title of the Image Collections screen.

### Main Navigation

To make the Image Collections screen accessible from the main navigation, add an entry with the `imageCollections` property to `editorSettings.mainNavigation`:

```js
// editor-settings
module.exports = {
  // ...
  mainNavigation: [
    // ...
    {
      handle: 'imageCollections',
      label: {en: 'Image Collections', de: 'Bild-Sammlungen'},
      imageCollections: 'myImageCollections', // the value is not used, only the presence of the key matters
      icon: 'image-filter-hdr'
    }
  ]
}
```

{{< info >}}
Only one Image Collections entry can be added to the main navigation per project. Multiple entries are not supported.
{{< /info >}}

### Permissions

Two sets of permissions are required for Image Collections to work correctly.

#### Media type access

The Image Collections navigation entry is only shown to users who have the `mediaLibraryEntry.read` permission for **all** media types listed in `imageCollections.mediaTypes`. If a user lacks access to any one of them, the navigation entry is hidden entirely.

Make sure the relevant roles have read access to all configured media types.

#### Collection content type access

When Image Collections are enabled, Livingdocs automatically adds a built-in content type called **"Collection"** (internal handle: `liImageCollection`) to the project. This content type is a data-record that stores collection documents.

You must explicitly grant permissions for this content type to the roles that should be able to manage collections. This is done in the **Permissions** panel in the project settings:

1. Open **Project Settings → Permissions**
2. Find the content type named **"Collection"**
3. Enable the required permissions (read, create, update, delete) for each role that should have access

Without these permissions, users will not be able to create or open collections even if the navigation entry is visible to them.

## How Image Collections Work

### Collections Dashboard

The Image Collections screen lists all collections in the project, sorted alphabetically by title. Editors can search collections by name.

From this screen, editors can:

- **Create a new collection**: clicking the create button opens a dialog where a unique title must be entered. Collection titles must be unique within the project.
- **Open a collection**: clicking on a collection card opens the collection detail page.
- **Delete a collection**: the context menu on each card provides a delete option.

### Inside a Collection

Each collection has its own page. It is built on the same component as the Document Inbox, configured for images only and extended with collection-specific actions. A collection displays its images in a grid and supports the following:

**Adding images:**
Clicking the **"Add image"** button opens a dialog with two tabs.
A media library feed and a "Collections" tab for browsing existing collections and selecting one Image.

**Organising with groups:**
Images within a collection can be organised into collapsible groups using the **"Create group"** button.
Groups help structure large collections.
Groups can be collapsed and expanded individually, or all at once using the toolbar controls.

**Moving content to another collection:**
Both individual images and entire groups can be added to a different collection via their context menu.
This opens the collection picker dialog, which shows breadcrumbs when navigating inside a collection.

**Ungrouping:**
A group can be removed (ungrouped) while keeping its images in the collection.
The images are moved back to the top level of the collection.

### Adding Images to Collections from Anywhere

Any image visible in a media library dashboard can be added to a collection without opening the collection first.

Select one or more images, then use the **"Add to collection"** action in the context menu. This opens the collection picker dialog where the target collection (and optionally a group within it) can be chosen.

### Picking Images from Collections in the Editor

When selecting an image for a metadata field or for an image component in the document editor, the media library picker shows a **Collections** tab alongside the standard media library feed. Editors can switch to that tab, browse their collections, and pick an image directly from within a collection.

## Constraints

- Image Collections only support media types of type `mediaImage`. Video and file types cannot be added to a collection.
- Only **one** Image Collections screen can be configured per project.
- Collection titles must be unique within the project.
- The `liImageCollection` content type is fully managed by Livingdocs and cannot be customised (e.g. no custom metadata can be added to it).
