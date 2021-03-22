---
title: Media-Type Config
menus:
  reference-docs:
    parent: Project Config
---

Added in: [`release-2020-07`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2020-07.md)

`Media Types` describe the content you can manage in the Media Library. You can configure the metadata you want to manage per `Media Type` by using the same metadata schema as on Content-Types. The Media Library will provide forms to edit this data.
If no `Media Type` config is provided it falls back to a default config where `title`, `caption`, `source` and `description` will be taken as metadata.

[`release-2020-07`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2020-07.md) includes the first version of this feature. It has these limitations:
- You can only configure 1 mediaType and it has to have the handle `image`.
- Only one `type` is supported: `mediaImage`

[`release-2020-12`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2020-12.md) includes the type `mediaVideo`
- You can only configure 1 mediaType for the type `mediaVideo` and it has to have the handle `video`.

[`release-2021-03`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2021-03.md) includes `index` on config
- You can configure which metadata should be indexed on the media index. The metadata plugin must support the media index. Set in `config` property `index:true`
- upstream plugins which support media index
   - li-text
   - li-boolean
   - li-enum
   - li-integer
   - li-numeric-list
   - li-string-list
   - li-google-vision


## Example

```js
// projectConfig.mediaTypes: [{...}]
[{
  handle: 'image',
  type: 'mediaImage',
  info: {
    label: 'Image',
    description: 'Media type for images'
  }
  metadata: [
    {
      handle: 'title',
      type: 'li-text',
      config: {
        required: true,
        requiredErrorMessage: 'Please provide a title',
        index: true
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
        requiredErrorMessage: 'Please provide a source',
        index: true
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
      type: 'li-google-vision',
      config: {
        index: true
      }
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
  },
  mediaSources: [
    {
      handle: 'example',
      // the plugin name must match with the registered plugin(-handle)
      plugin: 'examplePlugin',
      info: {
        label: 'Example'
      },
      // config will be passed to the plugin
     config: {
       accessKey: '****'
     }
    }
  ],
  editor: {
    dashboard: { // the dashboard opened from the Document Editor
      displayFilters: [
        {
          filterName: 'liDateTimeRange'
        }
      ]
    },
    managementDashboard: { // the dashboard opened from the Main Navigation
      displayFilters: [
        {
          filterName: 'liDateTimeRange'
        }
      ]
    }
  }
}, {
  type: 'mediaVideo',
  handle: 'video',
  metadata: [
    {
      handle: 'title',
      type: 'li-text',
      config: {
        required: true,
        requiredErrorMessage: 'Please provide a title',
        maxLength: 200
      },
      ui: {component: 'liMetaTextForm'}
    }
  ]
}]

```

## Metadata

The metadata follows the rules that also apply to document metadata [defined on a content-type](content_types.md#metadata). All the same metadata plugins are available. Different from the document metadata, media metadata does not have UI support as of now.

## Exif Extraction
This feature is only supported for the `mediaImage` mediaType.

Whenever in image file is stored in the Media Library, we can extract the IPTC data from the image file and store it in the metadata.
You can configure this behavior with the `mappings` defined in `exifExtraction`.

We follow https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata and provide a mapping of the field names (and some aliases) to the actual value in IMM or XMP, following the standard with best effort. If the same field is available in IIM and XMP defined fields, we prefer the one in XMP. And example for this is the field `Creator` (https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata#creator). It was first defined in IIM as `2:80 By-line`. Later it was renamed in XMP to `dc:creator`. Both fields have effectively the same meaning: "Contains the name of the photographer, but in cases where the photographer should not be identified the name of a company or organisation may be appropriate."
You can extract this field by using either `Creator` or `By-line` as the value for `field` in a mapping, for example:

```
{
  field: 'By-line',
  metadataPropertyName: 'creator'
}
```

We found inconsistencies with the EXIF data provided in different images. If you have any problems with the extraction of these metadata, please provide us with an example file. We will try to improve our extraction system.

Here is a complete list of fields you can use. Please consult https://www.iptc.org/std/photometadata/specification/IPTC-PhotoMetadata for detailed descriptions of the meaning of the single fields.
| Field                                      | Aliases (comma separated)                                    |
|--------------------------------------------|--------------------------------------------------------------|
| City (legacy)                              | City, City legacy, cityName                                  |
| Copyright Notice                           | rights                                                       |
| Country (legacy)                           | Country legacy, Country/Primary Location Name                |
| Country Code (legacy)                      | Country Code                                                 |
| Creator                                    | By-line                                                      |
| Creator’s Contact Info                     | Creator Contact Info, creatorContactInfo, CreatorContactInfo |
| Creator’s jobtitle                         | AuthorsPosition, By-line Title                               |
| Credit Line                                | Credit, Provider                                             |
| Date Created                               | DateCreated                                                  |
| Time Created                               |                                                              |
| Description                                | Caption/Abstract, Caption, description, caption              |
| Description Writer                         | Writer/Editor, CaptionWriter                                 |
| Headline                                   | headline                                                     |
| Instructions                               | instructions                                                 |
| Intellectual Genre                         | Object Attribute Reference                                   |
| Job Id                                     | TransmissionReference, Original Transmission Reference       |
| Keywords                                   | subject                                                      |
| Province or State                          | State, Province/State                                        |
| Rights Usage Terms                         | UsageTerms                                                   |
| Scene Code                                 | Scene                                                        |
| Source                                     | source                                                       |
| Subject Code                               | Subject Reference                                            |
| Sublocation (legacy)                       | Location, Sub-location                                       |
| Title                                      | Object Name, title                                           |
| Additional Model Information               | AddlModelInfo                                                |
| Artwork or Object in the Image             | ArtworkOrObject                                              |
| Code of Organisation Featured in the Image | OrganisationInImageCode                                      |
| Copyright Owner                            | CopyrightOwner                                               |
| CV-Term About Image                        | AboutCvTerm                                                  |
| Digital Image GUID                         | DigImageGUID                                                 |
| Digital Source Type                        | DigitalSourceType                                            |
| Embedded Encoded Rights Expression         | EmbdEncRightsExpr                                            |
| Event                                      |                                                              |
| Genre                                      |                                                              |
| Image Creator                              | ImageCreator                                                 |
| Image Rating                               | Rating                                                       |
| Image Region                               | ImageRegion                                                  |
| Image Registry Entry                       | RegistryId                                                   |
| Image Supplier                             | ImageSupplier                                                |
| Image Supplier Image ID                    | ImageSupplierImageID                                         |
| Licensor                                   |                                                              |
| Linked Encoded Rights Expression           | LinkedEncRightsExpr                                          |
| Location created                           | LocationCreated                                              |
| Location Shown in the Image                | LocationShown                                                |
| Max Avail Height                           | MaxAvailHeight                                               |
| Max Avail Width                            | MaxAvailWidth                                                |
| Minor Model Age Disclosure                 | MinorModelAgeDisclosure                                      |
| Model Age                                  | ModelAge                                                     |
| Model Release Id                           | ModelReleaseID                                               |
| Model Release Status                       | ModelReleaseStatus                                           |
| Name of Organisation Featured in the Image | OrganisationInImageName                                      |
| Person Shown in the Image                  | PersonInImage                                                |
| Person Shown in the Image with Details     | PersonInImageWDetails                                        |
| PLUS Version                               |                                                              |
| Product Shown in the Image                 | ProductInImage                                               |
| Property Release Id                        | PropertyReleaseID                                            |
| Property Release Status                    | PropertyReleaseStatus                                        |
| Web Statement of Rights                    | WebStatement                                                 |
| Artwork or Object in the Image structure   | ArtworkOrObject                                              |

## Media Sources


Added in: [`release-2021-03`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2021-03.md)

This feature is only supported for mediaTypes of type `mediaImage`.

With [Media Sources]({{< ref "/reference/media-source-example.md" >}}) you can integrate asset research/import into Livingdocs. Instead of having to log in to another platform like Unsplash and then drag + drop images into Livingdocs, you can have Unsplash assets search results available directly in Livingdocs.
