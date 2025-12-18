---
title: Basic Media Type Example (Legacy)
hideSectionTeaser: true
excludeFromSearch: true
---

{{< warning >}}
Before [release-2026-01]({{< ref "/operations/releases/release-2026-01.md#media-library-dashboards" >}}), Display Filters and Base Filters were defined directly on the Media Type, as shown in the example below. While this approach has not yet been deprecated, we recommend configuring the Media Library via a dedicated Media Library Dashboard ([See Media Library Setup Guide]({{< ref "/guides/media-library/media-library-setup/index" >}})) and referencing that dashboard from the Content Type, which shows your Images/Videos/Files.
When using this new setup, any Display Filters and Base Filters defined on the Media Type are automatically ignored for Media Library dashboards opened from the Main Navigation.
For Media Library dashboards opened from the document editor, Display Filters and Base Filters are instead resolved from the [referenced Media Library dashboard]({{< ref "/reference/project-config/content-types#usedashboard" >}}), if one is configured.
{{< /warning >}}

This is a basic mediaType for images. It needs to be added to your project config in an array at the top-level property mediaTypes.

```js
//media-types/image.js
module.exports = {
  handle: 'image', // one mediaImage must have the handle 'image', additional ones can be named as you like
  type: 'mediaImage',
  info: {
    label: 'Images', // used in dashboards generated for this mediaType
    description: ''
  },
  metadata: [
    // any metadata configuration as you know it from contentTypes already
    {
      handle: 'title',
      type: 'li-text',
      config: {
        required: true, // if a metadata property is required, the user will see a form to enter the metadata during upload
        requiredErrorMessage: 'Please provide a title',
        maxLength: 200,
        index: true
      }
    },
    {
      handle: 'description',
      type: 'li-text',
      config: {
        index: true
      }
    },
    {
      handle: 'credit',
      type: 'li-text',
      config: {
        required: true,
        requiredErrorMessage: 'Please provide a source',
        index: true
      }
    },
    {
      handle: 'namedCrops',
      type: 'li-named-crops',
      config: {
        index: true,
        namedCrops: [
          {
            name: 'mobile',
            isOptional: true
          },
          {
            name: 'desktop'
          }
        ]
      },
      ui: {
        label: 'Named Crops'
      }
    }
  ],
  editor: {
    // the dashboard seen by users when opening Images from the document editor
    dashboard: {
      displayFilters: [
        {
          filterName: 'liDateTimeRange'
        }
      ],
      card: {
        name: 'myImageCard'
      },
      baseFilters: [{key: 'metadata.transformed', term: true}]
    },
    // the dashboard opened through the main navigation
    // `card`and `baseFilters` could also be added here
    managementDashboard: {
      displayFilters: [
        {
          filterName: 'liDateTimeRange'
        }
      ]
    }
  }
}
```
