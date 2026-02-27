---
title: 2025 Behavior
description: Improved user experience and functionality (opt-in)
weight: 5
---

## Overview

The `use2025Behavior` represents the future direction of the Media Library. It unlocks new capabilities that were previously not possible. We recommend that new setups always enable it, and existing setups are encouraged to migrate.

- Image editing (colour corrections, rotation and pixelation)
- Automated deletion routines
- Manual media library entry deletion
- Removal of the "Archive" functionality
- "Store in Archive" functionality to prevent deletion
- Preservation of assets when revoking an image
- No longer serving invalid images ([`li-invalid`]({{< ref "/reference/document/metadata/plugins/li-invalid" >}}), [`li-datetime-validity`]({{< ref "/reference/document/metadata/plugins/li-datetime-validity" >}}))

{{< info >}}
Due to changes in the user interface, particularly with the old "Archive" functionality and the new "Store in Archive" functionality, it might be worthwhile holding workshops or informing users within the newsroom before rolling this change out.
{{< /info >}}

## Configuration

To enable this functionality you must enable `use2025Behavior` in the server config:

```js
mediaLibrary: {
  use2025Behavior: true
}
```

{{< warning >}}
Be aware that this also requires additional configuration steps such as modifying your [Image Service]({{< ref "/guides/media-library/image-services/" >}}) (CDN) setup and potentiallty performing data migrations. Please familiarise yourself with all of the feature information below before enabling the new behaviour.
{{< /warning >}}

## Features

### Image Variant Storage / Delivery

{{< added-in "release-2025-03" block >}}

There have been significant enhancements to how images are stored and served within the Media Center. With the new approach, the system now retains the original image upon upload and automatically generates cropped and width-based resized variants for use within the editor.

Resized and cropped image variants are stored in the image storage under the `image-variants-cache/` prefix. To manage storage efficiently, we recommend setting up a retention policy for these cached variants in your blob storage provider.

If the main storage does not support image variants, you can use the `variantsStorage` configuration to store resized images in a separate bucket. This is optional — by default, the system saves variants in the same storage as the original images.

```js
mediaLibrary: {
  use2025Behavior: true,
  images: {
    storage: {
      strategy: 's3',
      config: {
        bucket: 'images',
        // ...
      }
    },
    variantsStorage: {
      strategy: 's3',
      config: {
        bucket: 'image-variants',
        // ...
      }
    }
  }
}
```

Additionally, we've introduced a new public API endpoint:

`/api/2025-03/mediaLibrary/serve-image/:key`

This endpoint delivers the image with its original dimensions, as long as it has not been revoked or marked as invalid. If any [image editing](#image-editing) modifications have been made then the modified version will be served.

{{< info >}}
To avoid performance bottlenecks ensure you place a CDN or image proxy in front of Livingdocs, retrieving images via the new API. This prevents excessive load on the Livingdocs Server.

Whenever an asset gets modified, we emit the [`mediaLibraryEntry.update`]({{< ref "/customising/advanced/server-events/#media-library-entry" >}}) server event. This event can be used to purge a CDN or other image service. The `mediaLibraryEntry.update` event also occurs for metadata changes, so if you want to only handle asset changes you can filter the events by checking whether `payload.changes?.some((c) => c.event === 'mediaLibraryEntry.asset.update')`.

When purging a CDN cache for a revoked, invalidated, or updated entry, use `mediaLibraryApi.getAllKeysForMediaLibraryEntry({mediaLibraryEntry})` to retrieve all asset keys associated with the entry, including variant keys from [image editing in documents](#image-editing-in-documents):

```js
liServer.events.subscribe(
  'mediaLibraryEntry.update',
  async (event, {mediaLibraryEntry, changes}) => {
    const isAssetUpdate = changes?.some((c) => c.event === 'mediaLibraryEntry.asset.update')
    if (!isAssetUpdate) return
    const keys = await mediaLibraryApi.getAllKeysForMediaLibraryEntry({mediaLibraryEntry})
    // Purge all keys from your CDN
  }
)

liServer.events.subscribe('mediaLibraryEntry.revoke', async (event, {mediaLibraryEntry}) => {
  const keys = await mediaLibraryApi.getAllKeysForMediaLibraryEntry({mediaLibraryEntry})
  // Purge all keys from your CDN
})

liServer.events.subscribe('mediaLibraryEntry.invalid', async (event, {mediaLibraryEntry}) => {
  const keys = await mediaLibraryApi.getAllKeysForMediaLibraryEntry({mediaLibraryEntry})
  // Purge all keys from your CDN
})
```

{{< /info >}}

{{< warning >}}
If you had a path (and not just a domain) in `serverConfig.mediaLibrary.images.publicUrl`, or if you have documents which were created before {{< release "release-2024-03" >}}, you will need to set `serverConfig.mediaLibrary.generateImageServiceUrlsOnRead: true`.

If both of the above conditions apply you will also need to define `serverConfig.mediaLibrary.images.storage.extractKey` as something like the following:

```js
extractKey(url) {
  const path = new URL(url).pathname
  const pathPrefix = 'images/'
  return path.startsWith(pathPrefix)
    ? path.slice(pathPrefix.length)
    : path
}
```

{{< /warning >}}

### Image Editing

{{< added-in "release-2025-05" block >}}

Livingdocs supports image editing to allow journalists to redact sensitive areas (such as license plates or faces) and apply colour corrections, without the need for external tools.

Image editing is supported for jpg, png, and webp formats. Images must be requested via the public API endpoint [`GET /api/2025-03/mediaLibrary/serve-image/:key`]({{< ref "/reference/public-api/media-library/#serve-image" >}}) for the modifications to be applied.

#### Image Editing in the Media Library

Users can open the image editor by clicking the edit button in the media library detail view. Edits here apply globally to all documents that reference the image. The original is always preserved and can be restored at any time.

This supports:

- Redaction: pixelate areas of the image (e.g. faces, license plates)
- Colour corrections: brightness, contrast, and saturation ({{< removed-in "release-2026-03" >}})

{{< img src="image-editing-pixelate.png" alt="Pixelate image" width="400" caption="Pixelation remains in the media library and applies globally to all placements of the image." >}}

#### Image Editing in Documents

{{< added-in "release-2026-03" block >}}

Journalists can edit images directly within a document using the "Adjust" button on each image placement. Edits here only affect that specific placement within the document. Other documents using the same image are not affected. The original can always be restored by resetting the adjustments.

This supports:

- Colour corrections: brightness, contrast, and saturation
- Rotation

{{< img src="image-editing-adjust.png" alt="Adjust image" width="400" caption="The Adjust button lets users apply colour adjustments or fix a skewed horizon per placement." >}}

{{< img src="image-editing-rotate.png" alt="Rotate image" caption="Images can be rotated per placement directly within a document." >}}

### Archive/Revoke/Delete

{{< added-in "release-2025-03" block >}}

When you enable the new behavior you will notice that the **Archive** action has been removed from the UI at the bottom of the media library entry detail page. To recap, this action removed the entry from Elasticsearch, and therefore all dashboards, but the image still existed in Postgres and remained in documents it had already been added to.

**Revoke** remains largely the same, with the same hooks etc. The main change is that we no longer delete the image from the storage bucket so that we retain the image for legal cases. The new image delivery route will prevent the image from being served, but the CDN or image service cache will still need clearing. You can listen for the the [`mediaLibraryEntry.revoke`]({{< ref "/customising/advanced/server-events/#media-library-entry" >}}) server event.

**Delete** has been introduced as a replacement for the Archive action. Delete completely removes the data from databases and storage. Deleting an entry is only possible when it is not referenced, is not in a document inbox, is not stored in the archive, and has never been published in a document.

Finally, a new **Store in Archive** action has been added (along with **Remove from Archive**). This sets a state on the media library entry which prevents its deletion.

### Deletion Routines

{{< added-in "release-2025-07" block >}}

Deletion Routines are background tasks which run every 30 minutes and delete unwanted media library entries. They can be particularly useful when you have regular imports from image agencies. Filter criteria can be configured per media type to remove specific media library entries.

{{< warning >}}
The deployment steps in {{< release "release-2025-07" >}} must be followed before enabling deletion routines as they are used to update references and media library entry states which determine whether an entry is in use.

You might also need to manually migrate media library entry data depending on how you have previously handled media licensing and how you have used the old archive and revoke functionality.

In addition to this, if you have custom components or metadata which link to media library entries but do not create references then you should not use deletion routines for these media types until the data has been migrated.
{{< /warning >}}

To configure a deletion routine you need to add the `deletionRoutine` config to each media type config that you would like the deletion routine to run for:

```js
{
  type: 'mediaImage',
  handle: 'image',
  // ...
  deletionRoutine: {
    enabled: true,
    filters: [
      {
        // Allow any of the rule sets to trigger a deletion
        or: [
          // Delete unused my-agency and another-agency entries after 30 days
          {
            and: [
              {key: 'createdAt', range: {lte: 'now-30d'}},
              {key: 'metadata.agency', term: ['my-agency', 'another-agency']}
            ]
          },
          // Delete unused yet-another-agency entries after 2 months
          {
            and: [
              {key: 'createdAt', range: {lte: 'now-2M'}},
              {key: 'metadata.agency', term: 'yet-another-agency'}
            ]
          },
          // Delete any unused entries which have not been modified for 1 year
          {key: 'updatedAt', range: {lte: 'now-1y'}}
        ]
      }
    ]
  }
}
```

The filters property uses our usual [Search Filters Query DSL]({{< ref "/reference/public-api/publications/search-filters" >}}) in the same way as a base filter. Any unused media library entry which matches will be deleted.

Livingdocs automatically handles the "unused" part which excludes media library entries that:

- are referenced by documents
- are referenced by other media library entries
- are currently in a document inbox
- have previously been published in a document
- have been stored in archive
