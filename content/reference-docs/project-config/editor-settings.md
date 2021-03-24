---
title: Editor Settings
menus:
  reference-docs:
    parent: Project Config
---

{{< added-in release-2020-07 >}}

The editor settings control the behavior of your editor UX, in particular:
- user menu
- main navigation
- dashboards
- start page
- media library
- text formatting

An example:
```js
// projectConfig.editorSettings: {...}
{
  userMenu: [
    {
      label: 'What is new',
      data: {
        lastUpdate: '2020-06-16T13:19:38.560Z'
      },
      icon: 'plus',
      id: 'release_notes',
      group: 'string:required',
      // Use either 'href' (external link) or 'route' (internal link)
      href: 'https://github.com/livingdocsIO/livingdocs-release-notes',
      route: {
        name: 'app.state'
      }
    }
  ],
   mainNavigation: [
    {liItem: 'articles'},
    // liItem is a shortcut, one can also define it's own config
    {
      label: 'My Custom Articles',
      route: {
        name: 'app.articles'
      },
      icon: 'file-document',
      scope: 'readArticles',
      group: 'dashboards' // one of 'dashboards', 'preferences', 'admin'
    },
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
    showUi: true, // default true
    altTextPrefilling: {
      metadataPropertyName: 'caption'
    },
    componentDirectivesPrefilling: [
      {metadataPropertyName: 'source', directiveName: 'source'},
      {metadataPropertyName: 'caption', directiveName: 'caption'}
    ],
    // deprected with release-2021-03, move filters to a mediaType
    dashboard: {
      displayFilters: ['timeRange']
    },
    // deprected with release-2021-03, move filters to a mediaType
    editorSelection: {
      displayFilters: ['timeRange']
    },
  },
  textFormatting: {
    bold: {enabled: true},
    italic: {enabled: true},
    superscript: {enabled: false},
    subscript: {enabled: false},
    quotes: {enabled: true, open: '„', close: '“'},
    singleQuotes: {enabled: true, open: '‚', close: '‘'},
    link: {enabled: true},
    specialChars: {enabled: true}
  }
}
```

## User Menu

Makes it possible to configure custom entries within the Livingdocs user menu. If given a `userMenu.data.lastUpdate` property, it will visually indicate changes to the user. While you can add additional menu items, it is not possible to remove or alter the default Livingdocs menu items.

{{< img src="images/custom_user_menu.png" alt="Custom user menu" >}}

## Main Navigation

Configures the main navigation in Livingdocs.
You can either configure a predefined `liItem`, link a custom dashboard or link an external page.

The possible values for `liItem` are: 'articles', 'pages', 'dataRecords', 'mediaLibrary', 'proofreading', 'lists', 'menus', 'tags' (imatrics), 'contentSetup', 'projectSettings', 'serverAdmin' (enterprise only)

For custom dashboards you configure the handle of your custom dashboard (see below) in the `dashboard` key. For external links you set the `href` property. For both you can define: `icon` (visual icon in the main nav), `group` (any of 'preferences', 'dashboards', 'custom', 'top') and `label` (visual title).

## Dashboards

The `dashboards` entry allows you to configure custom dashboards, e.g. for authors (data-records) or proofreading (tasks).

There are 3 `types` of custom dashboards (`type` property):
- `dashboard`
- `kanbanBoard`
- `taskBoard` (predefined `kanbanBoard` for a task)

Kanban Boards are very similar to dashboards, except for having multiple result columns. Each result column shows a list of documents just as a single column dashboard does. The documents cannot be manually sorted or moved between columns, instead each column typically has its own filter settings.

For example a task board will show all tasks in the `requested` state in one column and tasks with the state `inProgress` and `done` in the other columns. In order to move a card into another column you simply have to open the document and move the task into another state.

### Common Dashboard Properties

Custom dashboards have some basic properties in common which are described in more detail below.

#### handle

Identifier for a custom dashboard. Is also used as a reference for the [main navigation](#main-navigation)

#### type

Type of the dashboard, one of these: `dashboard`, `kanbanBoard`, `taskBoard`

#### displayFilters

[Display Filters]({{< ref "/reference/display_filter.md" >}}) are filters that the user can set in the UI (below the search input).

With `release-2021-03` the `displayFilters` for the Media Library Dashboards are defined on the [Media Type]({{< ref "/reference-docs/project-config/media_types.md" >}}).

#### baseFilters

[Base Filters]({{< ref "/reference/base_filter.md" >}}) are invisible filters and applied to every search (including the default result list).

With `release-2021-03` the `baseFilters` for the Media Library Dashboards are defined on the [Media Type]({{< ref "/reference-docs/project-config/media_types.md" >}}).

#### sort

Sort the result, possible values are:
- `relevance` (default),
- `-created_at` / `created_at`,
- `-updated_at` / `updated_at`
- a metadata property e.g. `metadata.proofreading.priority`


### Example: Dashboard
```js
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

## startPage

Set custom `startPage: {path: '/my-custom-path'}}` to set the path used to render on login or when switching projects.

## Media Library

### Dashboards
If you linked the media library on the `mainNavigation` (see above), Livingdocs automatically inserts separate dashboards per type (`mediaImage`/`mediaVideo`).
If you only have `mediaImage` mediaTypes, you will see a Dashboard `Images`. If you also have `mediaVideo`, you will see `Videos` as well.

As of `release-2021-03` the `baseFilters` and `displayFilters` are to be configured on the `mediaType` config.
See [Media Type]({{< ref "/reference-docs/project-config/media_types.md" >}}) documentation for more information.

Any release before `release-2021-03` takes the following config
- `mediaLibrary.dashboard.displayFilters`: an array of [Display Filters]({{< ref "/reference/display_filter.md" >}}) for the Dashboard accessible via the Main Navigation
- `mediaLibrary.editorSelection.displayFilters`: an array of [Display Filters]({{< ref "/reference/display_filter.md" >}}) for the Dashboard accessible via the Media Button in the Document Editing Toolbar


### Behavior
Then there are 2 configs to define the behavior when Images are inserted into a Document from the Media Library:
- `mediaLibrary.altTextPrefilling: {metadataPropertyName: ''}`: a metadata property handle from which the `alt` attribute on an image tag is filled.
- `mediaLibrary.componentDirectivesPrefilling`: an array of mappings to prefill `doc-editable` directives with Media Library Entry Metadata
```js
[
  {metadataPropertyName: 'source', directiveName: 'source'},
  {metadataPropertyName: 'caption', directiveName: 'caption'}
]
```

## Text Formatting

The text formatting toolbar can be customized globally here. You can also overwrite this settings for each content type.
Enable or disable the existing elements for text formatting:
```js
textFormatting: {
  bold: {enabled: true},
  italic: {enabled: true},
  superscript: {enabled: false},
  subscript: {enabled: false},
  singleQuotes: ['`', '`'],
  quotes: ['"', '"'],
  link: {enabled: true},
  specialChars: {enabled: false}
}
```

Extend the text formatting toolbar with custom configured elements. The elements will be shown after the default elements. Add this configuration to the textFormatting configuration above.
```js
 customElements: [{
      label: 'blue color',
      handle: 'bluecolor',
      // the tag which is set around the selection
      tagName: 'span',
      // the icon which will be displayed. Only existing icons in the editor can be used.
      icon: 'format-color-highlight',
      // the attributes which are set on the tag
      attributes: [{name: 'class', value: 'blue'}]
    }]
```

Add placeholder config to a custom elements. This enables the possibility for the user to add a value to the defined placeholder attribute. The existing value can be removed and after a change applied. This can be used when the user should have the possibility to add some information to a selection. The information can be used for example in the delivery.
```js
 customElements: [{
      label: 'icon',
      handle: 'customIcon',
      tagName: 'span',
      icon: 'format-color-highlight',
      attributes: [{name: 'class', value: 'custom-icon'}],
      // the placeholder attribute which will be filled with the inserted value
      placeholder: {name: 'ld-placeholder'}
    }]
```
