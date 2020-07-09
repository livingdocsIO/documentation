# Editor Settings

The editor settings are sent to the editor and control the behavior of your editor, in particular:
- user menu
- main navigation
- dashboards

An example:
```js
{
  userMenu: [
    {
      label: 'What is new',
      data: {
        lastUpdate: '2020-06-16T13:19:38.560Z'
      },
      // alternative to href = route {name: 'app.state'}
      href: 'https://github.com/livingdocsIO/livingdocs-release-notes',
      icon: 'plus',
      id: 'release_notes'
    }
  ],
   mainNavigation: [
    {liItem: 'articles'},
    {liItem: 'pages'},
    { // custom task dashboard
      label: 'Proofreading',
      dashboard: 'kanban-proofreading',
      icon: 'clipboard-check'
    },
    { // custom document dashboard
      label: 'Authors',
      dashboard: 'authors-dashboard',
      icon: 'account'
    },
    {liItem: 'mediaLibrary'},
    {liItem: 'lists'},
    {liItem: 'menus'},
    {liItem: 'contentSetup'},
    { // external link
      label: 'Livingdocs Website',
      icon: 'rocket',
      href: 'https://www.livingdocs.io',
      group: 'preferences'
    },
    {liItem: 'projectSettings'},
    {liItem: 'serverAdmin'}
  ],
  dashboards: [{
    handle: 'kanban-proofreading',
    type: 'taskBoard',
    pageTitle: 'Proofreading',
    taskName: 'proofreading',
    throttleTime: 2000, // ms
    displayFilters: ['documentState', 'timeRange']
  }, {
    handle: 'authors-dashboard',
    type: 'dashboard',
    pageTitle: 'Author Management',
    entityLabel: 'Author',
    baseFilters: [
      {type: 'documentType', value: 'data-record'},
      {type: 'sortBy', value: '-updated_at'}
    ],
    displayFilters: ['documentState', 'timeRange'],
    sort: '-updated_at',
    fields: ['metadata.*'],
    componentName: 'bluewinDashboardListItem'
  }],
  startPage: {
    path: '/articles'
  },
  mediaLibrary: {
    enabled: true
    dashboard: {
      displayFilters: ['timeRange']
    },
    editorSelection: {
      displayFilters: ['timeRange']
    }
  }
}
```

## User Menu
...TODO...

## Main Navigation

Configures the main navigation see behind the burger menu in Livingdocs.
You can either configure a predefined `liItem`, link a custom dashboard or link an external page.

The possible values for `liItem` are: 'articles', 'pages', 'dataRecords', 'mediaLibrary', 'proofreading', 'lists', 'menus', 'tags' (imatrics), 'contentSetup', 'projectSettings', 'serverAdmin' (enterprise only)

For custom dashboards you configure the handle of your custom dashboard (see belwo) in the `dashboard` key. For external links you set the `href` property. For both you can define: `icon` (visual icon in the main nav), `group` (any of 'preferences', 'dashboards', 'custom', 'top') and `label` (visual title).

## Dashboards

The `dashboards` entry allows you to configure custom dashbaords, e.g. for authors (data-records) or proofreading (tasks).

There are 3 types of dashboards (`type` property):
- `dashboard`
- `kanbanBoard`
- `taskBoard` (predefined `kanbanBoard` for a task)

Kanban Boards are very similar to dashboards, except they do have multiple result columns. Each result column will show a list of documents the same as a single dashboard does. The documents cannot be manually sorted or moved between columns, instead each column typically has its own filter settings.

For example a task board will show all tasks in the `requested` state in one column and tasks with the state `inProgress` and `done` in the other columns. In order to move a card into another column you simply have to open the document and move the task into another state.

### Example: Dashboard
```javascript
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
  // Enterprise only: This is the name of the vue component used in the result list
  componentName: 'liHeroCard',
  // Enterprise only: The componentOptions are injected into the component 
  // `liHeroCard` (in this example)
  componentOptions: {teaserImage: 'teaserImage'},
  // Enterprise only: CSS class set as a wrapper around the result list
  cssWrapper: 'li-result-columns'
}]
```

Possible value for display filters are:
- `documentState`, unpublished, published, not yet published, my articles, needs proofreading, currently proofreading
- `timeRange`, filter the search results in time ranges such as last 24 hours
- `sortBy`: `relevance` (default), `creation_date`, `updated_at`, `alphabetical`
- `language`: uses the project configuration for [available languages](./settings.md) to offer a select box to filter for languages (requires multi-language feature to be enabled)
- `contentType`: uses the content-types configuration in your server to filter for different content-types, e.g. galleries or regular articles.
- `category`: uses the channel configuration for categories to offer a multi-select box to filter for categories (OR filter)
- Enterprise-only: `channels` give the user a dropdown to filter by a specific channel

For the base filters you can use the following formats:
```javascript
// documentType
{type: 'documentType', value: 'article'}

// locale
{type: 'locale', value: 'de-DE'}

// Enterprise-only: channelHandle
{type: 'channelHandle', value: 'web'}

// contentType
{type: 'contentType', value: 'regular'}

// notContentType (multiple value combinations possible)
{type: 'notContentType', value: 'regular'}

// ownerId
{type: 'ownerId', value: 1}

// channelId
{type: 'channelId', value: 2}

// dateRange
const from = new Date('2016-01-23T15:00')
const to = new Date('2015-04-05T20:00')
{type: 'dateRange', key: 'created_at', from, to}

// documentState (value: 'published', 'unpublished', 'deleted', 'draft', 'publishedWithDraft')
{type: 'documentState', value: 'published'}

// Enterprise-only: metadata (multiple key, value combinations possible)
{type: 'metadata', key: 'foo', value: 'bar'}
{type: 'metadata', key: 'foo', value: {exists: true}}
{type: 'metadata', key: 'foo.bar.id', value: 42}

// task (multiple taskName and taskValue combinations possible)
// taskValue: 'todo', 'doing', 'done'
{type: 'task', taskName: 'proofreading', taskValue: 'pending'},
{type: 'task', taskName: 'review', taskValue: 'done'}

// sortBy (multiple values possible)
{type: 'sortBy', value: '-created_at'},
{type: 'sortBy', value: 'title'}
```

### Example: Taskboard (simple config)

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

### Example: Kanbanboard (full config)

```js
dashboards: [{
  handle: 'kanban-proofreading',
  type: 'kanbanBoard',
  pageTitle: 'Proofreading',
  // Label used to describe the documents in this KanbanBoard
  entityLabel: 'Article',
  displayFilters: [],
  // Base filters are applied to all columns
  baseFilters: [{type: 'documentType', value: 'article'}],
  // This is the name of the angular component to use in all columns
  // (can also be defined for each columns separately)
  componentName: 'liTaskCard',
  // include all metadata properties in the search response data
  fields: ['metadata.*'],
  // Set the target when clicking on a card. Currently supported:
  // - 'article' (default setting)
  // - 'tasks'
  openState: 'tasks',
  showFooter: true,
  columns: [{
    handle: 'requested',
    label: 'Needs Proofreading',
    // Filter applied for this column on top of the `baseFilter`
    columnFilter: [{type: 'metadata', key: 'proofreading.state', value: 'requested'}],
    sort: [`metadata.proofreading.priority`, `metadata.proofreading.deadline`]
    // The componentOptions are injected into the component `liTaskCard` (in this example)
    componentOptions: {column: 'todo', taskName: 'proofreading'}
  }, {
    handle: 'in-progress',
    label: 'In Progress',
    columnFilter: [{type: 'metadata', key: 'proofreading.state', value: 'accepted'}],
    sort: [`metadata.proofreading.priority`, `-metadata.proofreading.accepted.date`],
    componentOptions: {column: 'doing', taskName: 'proofreading'}
  }, {
    handle: 'done',
    label: 'Finished Proofreading',
    columnFilter: [{type: 'metadata', key: 'proofreading.state', value: 'completed'}],
    sort: [`-metadata.proofreading.completed.date`],
    componentOptions: {column: 'done', taskName: 'proofreading'}
  }]
}]
```

## Media Library

After linking the media library on the `mainNavigation` (see above), one can also define `displayFilters` to customise the media library dashboard.
