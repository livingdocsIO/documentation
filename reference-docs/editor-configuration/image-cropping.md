# Image cropping

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
      zoomStep: 1.05,
      maxArea: 0.5
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

### maxArea

Possible values: null or between 0 and 1, Default: null

If set to `null` (or left out in the config) the full image will be shown and changing the horizontal and vertical sizes will keep the other respective size constant.
If set to a value between 0 and 1 changing the sizes will affect the whole ratio (width and height) and fill the area given in max area (e.g. 0.8 -> 80%).

### disableCropFor

An array of mime types for which there should be no "crop image" option displayed in the editor.
