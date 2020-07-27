# Register Custom Dashboard Filters

It is possible to register a custom filter and use it as a [displayFilter](../reference-docs/project-config/search/display_filter.md) for dashboards or search modals.

At the moment there are 3 types of custom filters:
- [Register Custom List v2 Filter](#register-custom-list-v2-filter)
  - [Example](#example)
  - [isDefault option](#isdefault-option)
- [Register Custom List Filter](#register-custom-list-filter)
  - [Example](#example-1)
- [Register Custom Angular Component Filter](#register-custom-angular-component-filter)
  - [Example](#example-2)

Hint: If you want to create a filter with metadata, make sure they are setup correctly in the ElasticSearch index (`search.metadata_mapping` config in the server)


## Register Custom List v2 Filter

Added in: `release-2020-02`

### Example

`searchFilters.registerListV2` registers an object where you can configure a filter object which is used to render the search UI.

![image](https://user-images.githubusercontent.com/172394/73385319-431e2780-42cd-11ea-975c-3206a25ac4c7.png)

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
        // these props are used for creating a search request (see above section 'Filter Query Types')
        type: 'contentType',
        value: ct.handle
      }
    })
    filter.options = options
  }
})
```

### isDefault option

Added in: `release-2020-07`

When `isDefault: true` (see example above), the default option will be added to the search query by default. As soon as one selects a filter manually, the default filter option will be ignored.


## Register Custom List Filter

Deprecated since: `release-2020-02`

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

## Register Custom Angular Component Filter

### Example

`searchFilters.registerAngularComponent` registers an Angular component as filter for the search UI.
Display is controlled with the `filters` key in the configuration.

```js
coreApi.searchFilters.registerAngularComponent('test', {
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
