---
title: Vue Component Registry
description: Implement a custom Vue component that can be used in dashboards and filters.
weight: 3
menus:
  customising:
    parent: Editor Extensions
---

## Description

The Livingdocs Editor can be customized by using your own components. Components are referenced by name in configurations. For Livingdocs to pick up your components, you need to register them first.
Livingdocs provides an API to register components written in VueJS. Below you find a list of component types:

- [Metadata Plugin](#metadata-plugin)
- [Display Filter](#display-filter)
- [Table Dashboard Cell](#table-dashboard-cell)
- [Include Params Sidebar](#include-params-sidebar)
- [Document List Card Extension](#li-document-list-card-extension)

Depending on the `type`, you will get different `props` defined on your component. [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html) are supported. Please see below for details.


## Types

### Metadata Plugin

A `metadataPlugin` is used to render a metadata field in the Metadata View.

**Registration**
```js
// registration in app/editor.js
const liEditor = require('@livingdocs/editor')()
liEditor.vueComponentRegistry.registerComponent({
  type: 'metadataPlugin',
  name: 'liSlugMetadata',
  component: require('./components/metadata/li-slug-metadata.vue').default
})
```

**Vue Props API**

These are the `props` which are provided to your vue component:
```js
inject: ['authedHttp'], // authed axios client e.g. to call custom livingdocs server endpoints
props: {
  value: {
    // type is depending on the metadata plugin
    // you should be specific here in your component
    type: [Object, String, Array, Number, Boolean],
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  id: {
    type: String,
    required: true
  },
  handle: {
    type: String,
    required: true
  },
  config: {
    type: Object,
    required: true
  },
  uiConfig: {
    type: Object,
    required: true
  },
  // a reactive read-only object with keys for every
  // metadata property on the document/media library entry
  metadataProperties: {
    type: Object,
    required: true
  },
  // holding a video or image or file property when the metadata form
  // is loaded in the media library, empty object otherwise
  entities: {
    type: Object,
    required: true
  },
  // only given if configured
  dataProvider: {
    type: Object,
    default: undefined
  }
}
```


### Display Filter

A `searchFilter` registers a Vue component as Display Filter for the search UI.

**Registration**
```js
// registration in app/editor.js
liEditor.vueComponentRegistry.registerComponent({
    type: 'searchFilter',
    name: 'liDateTimeRangeDisplayFilter',
    component: require('./components/display-filter/li-date-time-range-display-filter.vue').default
  })
```

**Vue Props API**

These are the `props` which are provided to your vue component:
```js
props: {
  filter: {
    type: Object,
    default: () => {}
  }
},
```

A full example can be seen [here]({{< ref "/guides/editor/custom-dashboard-filters#register-custom-vue-component-filter" >}})

### Table Dashboard Cell

A `tableDashboardCell` registers a Vue component that can be configured to be displayed in a `tableDashboard` column.

**Registration**
```js
// registration in app/editor.js
liEditor.vueComponentRegistry.registerComponent({
  type: 'tableDashboardCell',
  name: 'liPublishTimeTableDashboardCell',
  component: require('./components/table-dashboard-cell/li-publish-time-table-dashboard-cell.vue').default
})
```

**Vue Props API**

These are the `props` which are provided to your Vue component:
```js
props: {
  // Instance of the Document model
  document: {
    type: Object,
    required: true
  },
  // Relative URL to the document, e.g. /p/your-project/articles/178959
  documentUrl: {
    type: String,
    default: undefined
  },
  // Custom options provided through `componentOptions` in the dashboard config
  options: {
    type: Object,
    required: true
  }
}
```

A guide to creating simple custom cells can be found [here]({{< ref "/guides/editor/custom-table-dashboard-cells.md" >}})


### Include Params Sidebar

A `includeParamsSidebarForm` is used to render a form to manipulate `params` for `doc-include`s. [This Guide]({{< ref "/guides/documents/includes/twitter-embed" >}}) shows you how to use such a component.

**Registration**
```js
// registration in app/editor.js
liEditor.vueComponentRegistry.registerComponent({
  type: 'includeParamsSidebarForm',
  name: 'liTwitterIncludeParams',
  component: require('./components/include-params/li-twitter-include-params.vue').default
})
```

**Vue Props API**

This component needs to take exactly one prop named `params`. It will contain an object with the params for the `doc-include`.
```js
props: {
  params: {
    type: Object,
    required: true
  }
}
```

**Notification API**

The component needs to emit a CustomEvent to tell Livingdocs when the params have changed. You can do this in a change event handler for example:
```js
const event = new CustomEvent('update:params', {
  detail: this.paramsDraft,
  bubbles: true
})
this.$el.dispatchEvent(event)
```


### Document List Card Extension

A `liDocumentListCardExtension` registers a Vue component that can be configured to be displayed on `liDocumentListCard` dashboard cards.

**Vue Props API**

These are the `props` which are provided to your Vue component:
```js
inject: ['authedHttp'], // authed axios client e.g. to call custom livingdocs server endpoints
props: {
  options: {
    type: Object
  }
},
```
The `options` object looks like this:
```js
{
  column: '', // either empty (when in search column) or 'inbox', 'published', 'inline-list-edit`
  listId: 1,
  documentId: 2
}
```
