# Media-Type Config

Media-Types describe the content you can manage in the Media Library. You can configure the metadata you want to manage per Media-Type by using the same metadata schema as on Content-Types. The Media Library will provide forms to edit this data.

Release 2020-07 includes the first version of this feature. It has these limitations:
- You can only configure 1 mediaType and it has to have the handle `image`.
- Only one `mediaType` is supported: `mediaImage`

## Example

```javascript
{
  handle: 'image',
  type: 'mediaImage',
  metadata: [
    {
      handle: 'title',
      type: 'li-text',
      config: {
        required: true,
        requiredErrorMessage: 'Please provide a title'
      },
      ui: {component: 'liMetaTextForm'}
    },
    {
      handle: 'caption',
      type: 'li-text',
      ui: {component: 'liMetaTextForm'}
    },
    {
      handle: 'source',
      type: 'li-text',
      config: {
        required: true,
        requiredErrorMessage: 'Please provide a source'
      },
      ui: {component: 'liMetaTextForm'}
    },
    {
      handle: 'note',
      type: 'li-text',
      ui: {component: 'liMetaTextareaForm'}
    },
    {
      handle: 'validDateRange',
      type: 'li-datetime-validity',
      ui: {component: 'liMetaDateTimeValidityForm'}
    },
    {
      handle: 'googleVision',
      type: 'li-google-vision'
    }
  ],
  exifExtraction: {
    mappings: [
      {
        field: 'Title',
        metadataPropertyName: 'title'
      },
      {
        field: 'Source',
        metadataPropertyName: 'source'
      },
      {
        field: 'Description',
        metadataPropertyName: 'caption'
      }
    ]
  }
}

```

## Exif Extraction
Whenever in image file is stored in the Media Library, we can extract the IPTC data from the image file and store it in the metadata.
You can configure this behavior with the `mappings` defined in `exifExtraction`.

We follow https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata and provide a mapping of the field names (and some aliases) to the actual value in IMM or XMP, following the standard with best effort. If the same field is available in IIM and XMP defined fields, we prefer the one in XMP. And example for this is the field `Creator` (https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#creator). It was first defined in IIM as `2:80 By-line`. Later it was renamed in XMP to `dc:creator`. Both fields have effectively the same meaning: "Contains the name of the photographer, but in cases where the photographer should not be identified the name of a company or organisation may be appropriate."
You can extract this field these strings as the value for `field` in a mapping: `Creator`, `By-line`.