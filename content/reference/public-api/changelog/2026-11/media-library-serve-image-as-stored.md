---
title: 'Media Library: Serve Unmodified Images as Stored'
type: changelog-entry
weight: 1

change:
  date: 2026-11
  type: breaking-change
---

With `mediaLibrary.use2025Behavior`, `/api/2026-11/mediaLibrary/serve-image/:key` returns an image without modifications as stored, instead of a re-encoded copy. Image proxies and services get the original file, and the request no longer waits for image processing. Images with modifications, such as colour corrections or redactions, are processed as before.

The stored file keeps its EXIF orientation as a tag instead of having it applied to the pixels. Most camera and phone photos are stored rotated with such a tag. Browsers and image services such as Imgix apply it, but a consumer that ignores it, or sizes the image from the width and height of the media library entry, shows these photos sideways. Make sure your consumers apply the EXIF orientation before switching to `2026-11`. Earlier API versions are unchanged.

Please check the [API reference]({{< ref "/reference/public-api/media-library/#serve-image" >}}) for more details.
