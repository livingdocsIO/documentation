---
title: Image cropping
menus:
  reference-docs:
    parent: Editor Config
---

The image cropping in Livingdocs is implemented as an open-source library available [here](https://github.com/livingdocsIO/srcissors).
The Livingdocs editor allows you to set certain configuration options to customize the behavior of the cropping interface.

For all configurable options in the library, see [here](https://github.com/livingdocsIO/srcissors#configuration-options)

## Example Editor configuration

```js
{
  editor: {
    imageCrop: {
      showSurroundingImage: 'always',
      surroundingImageOpacity: 0.5,
      zoomStep: 1.05
    }
  },
  disableCropFor: ['image/svg+xml']  
}
```

### showSurroundingImage

Possible values: `always`, `panning`, `never`, Default: `never`

If set to `always` you will see the cropped out parts in opacity, if set to `never` you will not see the cropped out parts, if set to `panning` you will only see the cropped out parts in opacity when dragging.

### surroundingImageOpacity

Possible values: between 0 and 1, Default: 0.2

Deduces the opacity with which the cropped out parts are shown (see above).

### zoomStep

Possible values: between 1 and 2, Default: 1.25

Deduces zoom steps when zooming into an image and out. 1.05 zooms in 5% with every step.

### disableCropFor

An array of mime types for which there should be no "crop image" option displayed in the editor.
