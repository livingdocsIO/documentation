# Main Menu

## Triggering the main menu
You can define the way the main menu will be triggered. It can be triggered by `clicking`, `hovering` or both. The default way of opening the navigation menu is by `clicking`.

#### Config options

```js
app: {
  sidePanelBehaviour: {
    // you can also enable both.
    click: true,
    hover: false
  }
}
```

#### Example opening the main-nav by clicking

![Open Livingdocs navigation by clicking](./open-by-click.gif)

## Menu items
You can also customize the entries you want to have in the main menu (the burger icon in the top left of the screen as seen in the previous gif).


Default Configuration:
```js
app: {
  sidePanelItems: [{
    {liItem: 'articles'},
    {liItem: 'pages'},
    {liItem: 'dataRecords'},
    {liItem: 'mediaLibrary'},
    {liItem: 'lists'},
    {liItem: 'menus'},
    {liItem: 'contentSetup'},
    {liItem: 'projectSettings'},
    {liItem: 'serverAdmin'}
  }]
}
```

Add a custom dashboard entry:
```js
app: {
  sidePanelItems: [
  // other entries...
  {
    label: 'Proofreading',
    // 'kanban-proofreading' is the dashboard config handle we will define in the next step
    dashboard: 'kanban-proofreading',
    icon: 'file-document'
  }]
}
```

Extend a `liItem` entry:
```js
app: {
  sidePanelItems: [
  // other entries...
  {
    liItem: 'articles',
    label: 'My articles',
    icon: 'file-document'
  }]
}
```

Fully custom entry:
```js
app: {
  sidePanelItems: [
  // other entries...
  {
    label: 'Articles',
    sref: 'app.editor.articles',
    icon: 'file-document',
    scope: 'readArticles',
    group: 'dashboards' // one of 'dashboards', 'preferences', 'admin'
  }]
}
```


To hide an entry, simply delete it from the list.
You can also customize the scopes that you assign to a menu item to control access rights. See [all available scopes](../../administration/access_rights.md#available-scopes).
You can also customize the icons. We use https://materialdesignicons.com/ just use the respective icon string.

To link to an external page add an entry as follows:
```
{
  label: 'Your page',
  href: 'https://www.livingdocs.io',
  icon: 'settings'
}
```

Note that you use `href` instead of `sref` for external links.


# Dashboard

Define a custom item for the dashboard list of articles. This is useful when you want to show additional data on the dashboard such as the open tasks on an article.

```
search: {
  articleSearch: {
    listItemComponent: 'custom-dashboard-list-item'
  }
}
```

Note that the custom component can only use document metadata that has been explicitly [whitelisted](../server-configuration/config.md#search).


# Search Filters

The editor core API exposes functions to customize the search filters on the dashboard.

![Search filters](search-filters.png)


## Available config options

- `articleList`

  This configures the dashboard that users see after logging in.

- `inlineArticleList`

  This configures inline article search like the one used in the List screen.

- `pageList`

  This configures the pages screen.

- `dataRecordList`

  This configures the data-record screen.

- `documentListList`

  This configures the List screen.

- `menuList`

  This configures the Menu screen.



Properties:

- displayFilters

  The filters that are shown to the user.

- defaultQueries

  This setting determines the default filter. This filter is discarded as
  soon as a user manually selects a filter and reapplied when all manually
  chosen filters are deselected.

- emptySearchQueries

  This setting determines the empty search filter. This filter is taken into
  account when there is no search query input present. Note that this filter is
  treated mutually exclusive with the default filter that is used in case there is
  a query present.


Example:
```js
filters: {
  articleList: {
    displayFilters: ['channels', 'contentType', 'timeRange', 'sortBy'],
    defaultQueries: [{type: 'documentType', value: 'article'}],
    emptySearchQueries: [{type: 'documentType', value: 'article'}]
  },
  inlineArticleList: {
    displayFilters: [],
    defaultQueries: [
      {type: 'documentType', value: 'article'},
      {type: 'sortBy', value: 'relevance'}
      // because `sortBy` is used here, it cannot be used as `displayFilters`
    ],
    emptySearchQueries: [
      {type: 'documentType', value: 'article'},
      {type: 'sortBy', value: '-updated_at'}
    ]
  },
  pageList: {
    displayFilters: [],
    defaultQueries: [
      {type: 'documentType', value: 'page'},
      {type: 'sortBy', value: 'relevance'}
    ],
    emptySearchQueries: [
      {type: 'documentType', value: 'article'},
      {type: 'sortBy', value: '-updated_at'}
    ]
  },
  dataRecordList: {
    displayFilters: ['timeRange'],
    defaultQueries: [
      {type: 'documentType', value: 'data-record'},
      {type: 'sortBy', value: '-updated_at'}
    ]
  },
  documentListList: {
    displayFilters: ['timeRange'],
    defaultQueries: [
      {type: 'documentType', value: 'article'},
      {type: 'documentState', value: 'published'},
      {type: 'channelHandle', value: 'web'},
      {type: 'sortBy', value: 'relevance'}
    ],
    emptySearchQueries: [
      {type: 'documentType', value: 'article'},
      {type: 'documentState', value: 'published'},
      {type: 'sortBy', value: '-updated_at'}
    ]
  }
}
```

## Predefined core properties

The core allows you to use the following values for `displayFilters`:
- `channels` give the user a dropdown to filter by a specific channel
- `channelHandle` resolves the channel id by the handle such as "web" or "newsletter"
- `documentState`, unpublished, published, not yet published, my articles, needs proofreading, currently proofreading
- `timeRange`, filter the search results in time ranges such as last 24 hours
- `sortBy`: `relevance` (default), `creation_date`, `updated_at`, `alphabetical`  
  **ATTENTION:** if you use the `sortBy` in the displayFilters you can not at the same time configure a `sortBy` in the `defaultQueries`, only one is allowed.
- `language`: uses the channel configuration for [available languages](../server-configuration/channel-config.md) to offer a select box to filter for languages (requires multi-language feature to be enabled)
- `contentType`: uses the content-types configuration in your server to filter for different content-types, e.g. galleries or regular articles.

The next section shows you how you can add your own custom filters to the ones defined in the core.

The configuration also allows you to set `defaultQueries`. Those are hidden search queries that are appended to each search query of the user. In the `type` you can use the same values as described in the `displayFilters` (including your own custom filters). The `value` describes the (fixed) value you want to set for this hidden query. Example:

```
defaultQueries: [
  {type: 'documentType', value: 'article'}
]
```

This would reduce the search to only articles (no pages). The user has no way to change this.

In addition to the values in the `displayFilters` you can also use a metadata query and a task query in the `defaultQueries`. The metadata query looks as follows:

```
defaultQueries: [
  {type: 'metadata', key: 'foo', value: 'bar'}
]
```

This would filter for only documents that have the value bar in the metadata field foo. You have to make sure that foo is a correctly indexed metadata field.

The tasks query looks as follows:

```
defaultQueries: [
  {type: 'task', taskName: 'proofreading', taskValue: 'done'}
]
```

This would filter for only documents that have had a successful proofreading. The core only exposes the 'proofreading' taks but you can define your own custom tasks. The values are 'todo', 'doing', 'done' for the 3 states that a task can have.

## Registering Custom Filters

#### Example: Register list

`searchFilters.registerList` registers a filter based on a config object to create an Angular directive for the search UI.
Display is controlled with the `filters` key in the configuration.

There are two flavors to this function

```js
liEditor.searchFilters.registerList('creation-date', ['session', (session) => {
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
    to: new Date('2017-01-01')
  }]
})
```

#### Example: Register angular directive

`searchFilters.register` registers an Angular directive as filter for the search UI.
Display is controlled with the `filters` key in the configuration.

```js
liEditor.searchFilters.register('project', ['session', (session) => ({
  scope: {value: '='},
  template: `
    <div
      ng-class="{'filter-active': isActive}"
      ng-click="toggleProjectFilter()">
        Show print documents
    </div>
  `,
  link: (scope) => {
    channel = _find(session.project.channels, {name: 'print'})
    scope.isActive = scope.value.get().value
    scope.toggleProjectFilter: () => {
      scope.isActive = !scope.isActive
      if (scope.isActive) {
        scope.value.set({type: 'channelId', value: !scope.isActive})
      } else {
        scope.value.set()
      }
    }
  }
})])
```

## Custom Dashboards

Custom Dashboards are configurable versions of the current Articles / Pages / Date-Records Screens. You can add as many custom dashboards as you want in the Editor configuration.

First add a navigation entry into the main navigation:
```js
app: {
  sidePanelItems: [
  // other entries...
  {
    label: 'Proofreading',
    // 'kanban-proofreading' is the dashboard config handle we will define in the next step
    dashboard: 'kanban-proofreading',
    icon: 'file-document'
  }]
}
```

There are three types of dashboard configurations `dashboard`, `kanbanBoard` and `taskBoard`.
Where `taskBoard` is simply a predefined `kanbanBoard` for a task. These configurations also go into your editor config file.

Normal Dashboard:
```js
// note: not within the config of app: {...}
dashboards: [{
  handle: 'gallery-dashboard',
  type: 'dashboard',
  pageTitle: 'Gallery Board',
  // Label used to describe the documents in this Dashboard
  entityLabel: 'Article',
  // Invisible base filters applied to every search (including the default result list)
  baseFilters: [{type: 'documentType', value: 'article'}],
  // Filters shown to the user below the search input
  displayFilters: ['documentState', 'timeRange'],
  sort: '-updated_at',
  // fields to be returned from the server (not all metadata fields are returned by default)
  fields: ['metadata.*'],
  // This is the name of the angular component used in the result list
  componentName: 'liHeroCard',
  // The componentOptions are injected into the component `liHeroCard` (in this example)
  componentOptions: {teaserImage: 'teaserImage'},
  // CSS class set as a wrapper around the result list
  cssWrapper: 'li-result-columns'
}]
```

Kanban Boards are very similar to dashboards, except they do have multiple result columns. Each result column will show a list of documents the same as a single dashboard does. The documents cannot be manually sorted or moved between columns, instead each column typically has its own filter settings.

For example a task board will show all tasks in the `requested` state in one column and tasks with the state `inProgress` and `done` in the other columns. In order to move a card into another column you simply have to open the document and move the task into another state.

Simple Task KanbanBoard Config:
```js
dashboards: [{
  handle: 'kanban-proofreading',
  type: 'taskBoard',
  pageTitle: 'Proofreading',
  // This is the name of a metadataProperty of `type: 'li-task-v2'`
  taskName: 'proofreading',
  displayFilters: ['documentState', 'timeRange']
}]
```

Full KanbanBoard Config:
```js
dashboards: [{
  handle: 'kanban-proofreading',
  type: 'kanbanBoard',
  pageTitle: 'Proofreading',
  // Label used to describe the documents in this KanbanBoard
  entityLabel: 'Article',
  displayFilters: [],
  // Base filters are applied to all columns
  baseFilter: [{type: 'documentType', value: 'article'}],
  // This is the name of the angular component to use in all columns
  // (can also be defined for each columns separately)
  componentName: 'liTaskCard',
  openState: 'tasks',
  columns: [{
    handle: 'requested',
    label: 'Needs Proofreading',
    // Filter applied for this column on top of the `baseFilter`
    columnFilter: [{type: 'metadata', propertyName: 'proofreading', value: 'requested'}],
    sort: ['-proofreading_deadline'],
    // The componentOptions are injected into the component `liTaskCard` (in this example)
    componentOptions: {column: 'todo', taskName: 'proofreading'}
  }, {
    handle: 'in-progress',
    label: 'In Progress',
    columnFilter: [{type: 'metadata', propertyName: 'proofreading', value: 'inProgress'}],
    sort: ['-updated_at'],
    componentOptions: {column: 'doing', taskName: 'proofreading'}
  }, {
    handle: 'done',
    label: 'Finished Proofreading',
    columnFilter: [{type: 'metadata', propertyName: 'proofreading', value: 'done'}],
    sort: '-updated_at',
    componentOptions: {column: 'done', taskName: 'proofreading'}
  }]
}]
```
