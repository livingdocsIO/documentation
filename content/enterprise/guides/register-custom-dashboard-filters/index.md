---
menu: guides
title: Register Custom Dashboard Filters
---

It is possible to register a custom filter and use it as a [displayFilter]({{< ref "/enterprise/reference/display_filter.md" >}}) for dashboards or search modals.

At the moment there are 4 types of custom filters
- [Register Custom List v2 Filter](#register-custom-list-v2-filter)
  - [Example](#example)
  - [isDefault option](#isdefault-option)
- [Register Custom List Filter](#register-custom-list-filter)
  - [Example](#example-1)
- [Register Custom Vue Component Filter](#register-custom-vue-component-filter)
  - [Example](#example-2)
- [Register Custom Angular Component Filter](#register-custom-angular-component-filter)
  - [Example](#example-3)

Hint: If you want to create a filter with metadata, make sure they are setup correctly in the ElasticSearch index (`search.metadata_mapping` config in the server)


## Register Custom List v2 Filter

{{< added-in release-2020-02 >}}

### Example

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
  // @example options = [{
  //     id: 'regular',
  //     label: 'Regular Article',
  //     type: 'contentType',
  //     value: 'regular'
  //   }, {
  //     id: 'page',
  //     label: 'Page',
  //     type: 'contentType',
  //     value: 'page',
  //     isDefault: true
  //   }]
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

Hint: Look into [Filter Query Types]({{< ref "/enterprise/reference/base_filter.md" >}}) to find possible `{type, value}` combinations for the `filter.options` in the `mount` function.

### isDefault option

{{< added-in release-2020-07 >}}

When `isDefault: true` (see example above), the default option will be added to the search query by default. As soon as one selects a filter manually, the default filter option will be ignored.


## Register Custom List Filter

Deprecated since: [`release-2020-02`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2020-02.md)

### Example

`searchFilters.registerList` registers a filter based on a config object to create an Angular directive for the search UI.
Display is controlled with the `filters` key in the configuration.

There are two flavors to this function

```js
liEditor.searchFilters.registerList('creation-date', ['session', 'config', (session, config) => {
  const channels = _map(session.project.channels, (channel) => ({
    id: channel.id,
    label: channel.label,
    // type and value are used in the query builder
    type: 'channelId',
    value: channel.id
  }))

  return {
    title: 'Filter by channels',
    options: channels
  }
}])

liEditor.searchFilters.registerList('creationDate', {
  title: 'Filter by creation date',
  options: [{
    id: '2015',
    label: 'Created in 2015',
    type: 'dateRange',
    key: 'created_at',
    from: new Date('2015-01-01'),
    to: new Date('2016-01-01')
  }, {
    id: '2016',
    label: 'Created in 2016',
    type: 'dateRange',
    key: 'created_at',
    from: new Date('2016-01-01'),
    to: new Date('2017-01-01'),
    isDefault: true
  }]
})
```

## Register Custom Vue Component Filter

{{< added-in release-2020-10 >}}

[`release-2021-03`](https://github.com/livingdocsIO/livingdocs-release-notes/blob/master/releases/release-2021-03.md)
Filters for the media-library need to define the `dataType`
```js
$emit('update:filter', {type: 'metadata', key:'transformed', dataType: 'boolean', value: true})
```

### Example

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

## Register Custom Angular Component Filter

### Example

`searchFilters.registerAngularComponent` registers an Angular component as filter for the search UI.
Display is controlled with the `filters` key in the configuration.

```js
liEditor.searchFilters.registerAngularComponent('test', {
  bindings: {
    value: '=',
    config: '='
  },
  template: `
    <div
      ng-class="{'is-set': $ctrl.isActive}"
      class="ld-filter"
      ng-click="$ctrl.toggleProjectFilter()"
      ng-if="$ctrl.hasPrint"
    >
      <div class="ld-dropdown__text">
        Show print documents
      </div>
    </div>
  `,
  controller: class PrintController {
    static get $inject () { return ['session'] }

    constructor (session) {
      this.session = session
      this.channel = _find(session.project.channels, {handle: 'print'}) || {}
      this.hasPrint = !!this.channel.id
    }

    $doCheck () {
      this.isActive = this.value.get()
    }

    toggleProjectFilter () {
      if (this.channel.id) this.isActive = !this.isActive
      if (this.isActive && this.channel.id) {
        this.value.set({type: 'channelId', value: this.channel.id})
      } else {
        this.value.set()
      }
    }
  }
})
```
