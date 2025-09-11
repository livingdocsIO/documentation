---
title: li-media-handle
type: metadata-plugins
menus:
  reference:
    parent: Metadata Plugins List
support:
  document: false
  media: true
  include: false
  creationFlow: false
  pushMessage: false
  tableDashboard: false
  displayFilter: false
  searchIndexing: true
  systemMetadata: false
  planningSystem: false
defaultUI: |
  Tag with an ID in the Media Library Image Card and Metadata Form

  {{< img src="../images/li-media-handle-card.png" alt="Image cards with a media handle tag." >}}
  {{< img src="../images/li-media-handle-metadata.png" alt="Metadata form with a li-media-handle property." >}}
storageFormat: <String>
addedIn: release-2025-09
description: |
  When looking at a series of similar images, they can be hard to distinguish based on the visible information. By providing a visually recognizable and unique identifier, it becomes easier to communicate and locate a particular image.

  If a media library entry has a `li-media-handle` metadata property, that value appears as a tag alongside the image. The tag also appears in metadata forms and is not editable by users.

  By default, and if the property does not hold a value, we display the ID of the media library entry. However, it is possible to set a value yourself using the Import API or Command API. In that case, you have to ensure yourself that the ID you provide is unique within the system, otherwise users searching for the media handle would be served with multiple results. We do not check for uniqueness when storing a value.
  For the search to work, you have to enable indexing of the metadata property.
mediaTypeConfig: |2
        handle: 'myMediaHandle'
        type: 'li-media-handle',
        config: {
          hideFromForm: false,                      // optional, default: false
          index: true                               // always set this to true
        }
        ui: {
          label: 'Image ID',                        // optional
        }
---
