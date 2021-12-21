---
title: Video
description: The video directive declared on `video` tags enable a user to make the video editable.
menus:
  reference-docs:
    parent: Directives
    weight: 3
---

## Example

```js
{
  name: 'video',
  label: 'Video',
  iconUrl: `https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_image.svg`,
  html: dedent`
    <div class="m-asset-image m-asset-image--numbered">
      <div class="m-asset-image__image">
        <video class="responsive-img" doc-video="video">
      </div>
      <div class="m-asset-image__options">
        <div class="a-asset-input" doc-editable="caption">Caption</div>
        <div class="a-asset-input" doc-editable="source">Source</div>
      </div>
    </div>
  `
}
```
