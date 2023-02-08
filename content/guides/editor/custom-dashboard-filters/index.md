---
title: Custom Dashboard Filters
description: Create custom filters with you own UI
weight: 7
---

It is possible to register a custom filter and use it as a [DisplayFilter]({{< ref "/customising/advanced/editor-configuration/display-filter.md" >}}) for Dashboards or search modals.

At the moment there are 2 types of custom filters
- [Custom List v2 Filter](#custom-list-v2-filter)
- [Custom Vue Component Filter](#custom-vue-component-filter)

Hint: If you want to create a filter with metadata, make sure they are setup correctly in the ElasticSearch index (`search.metadata_mapping` config in the server)


## Custom List v2 Filter

##### Example

`searchFilters.registerListV2` registers an object where you can configure a filter object which is used to render the search UI.

{{< img src="filter-dropdown.png" alt="Filter Dropdown" >}}

Process
- `datasource.fetch` fetch data async from a remote service or create a list of filter items
- `mount` - configure the filter object

```js
liEditor.searchFilters.registerListV2('contentTypeV2Filter', {
  datasource: {
    // fetch data and inject response into mount function
    async fetch ({project, user, server, config}) {
      const host = server.host
      const channelId = project.defaultChannel.id
      const uri = `${host}/channel-configs/properties?channelId=${channelId}&properties=contentTypes`

      const response = await window.fetch(uri, {
        method: 'GET',
        headers: new window.Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${server.accessToken}`
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
  //     id: 'regular',
  //     label: 'Regular Article',
  //     type: 'contentType',
  //     value: 'regular'
  //   },
  //   {
  //     id: 'page',
  //     label: 'Page',
  //     type: 'contentType',
  //     value: 'page',
  //     isDefault: true
  //   }
  // ]
  async mount ({data, filter}) {
    const options = data.contentTypes.map((ct) => {
      return {
        id: ct.handle,
        label: ct.info.label,
        // these props are used for creating a search request (see 'Filter Query Types' link below)
        type: 'contentType',
        value: ct.handle
      }
    })
    filter.options = options
  }
})
```

Hint: Look into [Filter Query Types]({{< ref "/customising/advanced/editor-configuration/base-filter.md" >}}) to find possible `{type, value}` combinations for the `filter.options` in the `mount` function.

##### isDefault option

When `isDefault: true` (see example above), the default option will be added to the search query by default. As soon as one selects a filter manually, the default filter option will be ignored.



## Custom Vue Component Filter

[`release-2021-03`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2021-03.md)
Filters for the media-library need to define the `dataType`
```js
$emit('update:filter', {type: 'metadata', key:'transformed', dataType: 'boolean', value: true})
```

##### Example

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
  <div
    @click="$emit('update:filter', {type: 'dateRange', amount: 24, value: 'h'})">
  Filter logic
  </div>
</template>

<style lang="scss" scoped>
  .my-css-class {
  }
</style>

<script>
export default {
  name: 'customFilter',
  // synced with it's parent and the value in the localStorage
  // updated via $emit('update:filter', {...data})
  props: {
    filter: {
      type: Object,
      default () {}
    }
  }
}
</script>
```
