---
title: Custom Dashboard Filters
description: Create custom filters with you own UI
weight: 7
---

It is possible to register a custom filter and use it as a [DisplayFilter]({{< ref "/customising/advanced/editor-configuration/display-filter.md" >}}) for Dashboards or search modals.

At the moment there are 2 types of custom filters

- [Custom List v2 Filter](#custom-list-v2-filter)
  - [Example filter using static options](#example-filter-using-static-options)
  - [Example multi value filter](#example-multi-value-filter)
  - [Example filter using async data fetching](#example-filter-using-async-data-fetching)
  - [isDefault option](#isdefault-option)
- [Custom Vue Component Filter](#custom-vue-component-filter)
  - [Example](#example)

Hint: If you want to create a filter with metadata, make sure they are setup correctly in the ElasticSearch index, using `config: {index: true}` on the [metadata property defined in the content type config]({{< ref "/guides/search/publication-index.md" >}}).

## Custom List v2 Filter

#### Example filter using static options

```js
liEditor.searchFilters.registerListV2('simpleV2Filter', {
  datasource: {
    fetch({user}) {
      return [
        {
          label: {en: 'Published Articles', de: 'Publizierte Artikel'},
          filter: {key: 'lastPublicationId', exists: true}
        },
        {
          label: {en: 'My Articles by updatedAt', de: 'Meine Artikel nach updatedAt'},
          sort: '-updatedAt',
          filter: {key: 'ownerId', term: user.id}
        }
      ]
    }
  },

  // 'mount()' is optional since release-2023-09
  mount({data, filter}) {
    filter.options = data
  }
})
```

#### Example multi value filter

image {{< img src="multi-filter-dropdown.png" alt="Filter Dropdown" >}}

```js
liEditor.searchFilters.registerListV2('multiSelectV2Filter', {
  multiple: true, // allow multiple selections
  label: {en: 'Multi Select', de: 'Mehrfachauswahl'},
  datasource: {
    fetch({user}) {
      return [
        {
          label: {en: 'Published Articles', de: 'Publizierte Artikel'},
          filter: {key: 'lastPublicationId', exists: true}
        },
        {
          label: {en: 'My Articles by updatedAt', de: 'Meine Artikel nach updatedAt'},
          sort: '-updatedAt',
          filter: {key: 'ownerId', term: user.id}
        }
      ]
    }
  },

  // 'mount()' is optional since release-2023-09
  mount({data, filter}) {
    filter.options = data
  }
})
```

The selected values are `OR` combined in the search query.

Request payload if both filters from above are selected:

```js
[
  ...,
  { "or": [
    { "key": "lastPublicationId", "exists": true },
    { "key": "ownerId", "term":1 }
  ]}
]
```

#### Example filter using async data fetching

`searchFilters.registerListV2` registers an object where you can configure a filter object which is used to render the search UI.

{{< img src="filter-dropdown.png" alt="Filter Dropdown" >}}

Process

- `datasource.fetch` fetch data async from a remote service or create a list of filter items
- `mount` - configure the filter object

```js
liEditor.searchFilters.registerListV2('contentTypeV2Filter', {
  datasource: {
    // fetch data and inject response into mount function
    async fetch({project, user, server, config}) {
      const host = server.host
      const channelId = project.defaultChannel.id
      const uri = `${host}/channel-configs/properties?channelId=${channelId}&properties=contentTypes`

      const response = await window.fetch(uri, {
        method: 'GET',
        headers: new window.Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${server.accessToken}`
        })
      })

      // only succeed on status codes 200 - 299
      if (!response.ok) throw new Error('contentTypeV2Filter was not able to fetch data')
      return response.json()
    }
  },

  // Mount a search filter (search behaviour, display options)
  //
  // @param data injected result from datasource.fetch
  //
  // @example options = [
  //   {
  //     label: 'Regular Article',
  //     filter: {key: 'contentType', term: 'regular'}
  //   },
  //   {
  //     label: 'Page',
  //     filter: {key: 'contentType', term: 'page'},
  //     isDefault: true
  //   }
  // ]
  async mount({data, filter}) {
    const options = data.contentTypes.map((ct) => {
      return {
        label: ct.info.label,
        // these props are used for creating a search request (see 'Filter Query Types' link below)
        filter: {key: 'contentType', term: ct.handle}
      }
    })
    filter.options = options
  }
})
```

Hint: Look into [Filter Query Types]({{< ref "/customising/advanced/editor-configuration/base-filter.md" >}}) to find possible `{type, value}` combinations for the `filter.options` in the `mount` function.

#### isDefault option

When `isDefault: true` (see example above), the default option will be added to the search query by default. As soon as one selects a filter manually, the default filter option will be ignored.

## Custom Vue Component Filter

Filters for the media-library need to define the `dataType`

```js
// before release-2023-07
$emit('update:filter', {type: 'metadata', key: 'transformed', dataType: 'boolean', value: true})

// after release-2023-07, uses the new Search DSL
$emit('update:filter', {filter: {key: 'metadata.transformed', term: true}})
```

The value of the emitted `filter` property must be an object. If you need to combine multiple properties these should be assigned to an `and`, `or`, or `not` property within the filter object:

```js
$emit('update:filter', {
  filter: {
    and: [
      {
        key: 'visiblePublicationDate',
        range: {
          gte: '2023-01-01T00:00:00.000Z',
          lte: '2023-01-01T23:59:59.999Z'
        }
      },
      {
        key: 'lastPublicationDate',
        exists: true
      }
    ]
  }
})

// In case the DisplayFilter needs to configure a sort option, use the sort atribute
// '-' indicates descending order
// No prefix indicates ascending order
$emit('update:filter', {sort: '-createdAt'})
```

#### Example

`vueComponentRegistry.registerComponent({type: 'searchFilter'})` registers a Vue component as filter for the search UI. Below you can see a minimal example:

```js
liEditor.vueComponentRegistry.registerComponent({
  type: 'searchFilter',
  name: 'customFilter',
  component: require('./filters/custom-filter.vue').default
})
```

After registering the filter, the vue component will recieve a prop called `filter` and the upstream-editor has some logic behind the scenes. For example the filter is written onto the localStorage so it persists through refreshing or navigating and triggers the search, or is cleared after resetting the filter settings.

```html
<template>
  <!-- the 'update:filter' event is required -->
  <div @click="$emit('update:filter', {filter: {key: 'updatedAt', range: {gte: 'now-24h'}})">
    Filter logic
  </div>
</template>

<style
  lang="scss"
  scoped
>
  .my-css-class {
  }
</style>

<script>
  export default {
    name: 'customFilter',

    props: {
      // synced with it's parent and the value in the localStorage
      // updated via $emit('update:filter', {...data})
      filter: {
        type: Object,
        default() {}
      },
      // the config property defined when configuring the filter on a dashboard
      config: {
        type: Object,
        required: true
      },
      // added in release-2023-11. Use it to change the UI of your filter when the user
      // set a value
      inDefaultState: {
        type: Boolean,
        required: true
      }
    }
  }
</script>
```
