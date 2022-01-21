---
title: Vue Component Registry
description: Implement a custom Vue component that can be used in dashboards and filters.
weight: 3
menus:
  reference-docs:
    parent: Editor Extensions
---

## Description
The Livingdocs Editor can be customized by using your own components. Components are referenced by name in configurations. For Livingdocs to pick up your components, you need to register them first.
Livingdocs provides an API to register custom components written in VueJS. They are always register with a certain type. The supported types are:

- [metadataPlugin](#metadataPlugin)
- [includeParamsSidebarForm](#includeparamssidebarform)
- [dashboardCard](#dashboardcard)
- [searchFilter](#searchfilter)
- [liDocumentListCardExtension](#liDocumentListCardExtension)

Depending on the `type`, you will get different `props` defined on your component. Please see below for details.

To register a custom component to be used in the result list of a custom dashboard, you would call the API like this:

```js
const liEditor = require('@livingdocs/editor')()
liEditor.vueComponentRegistry.registerComponent({
  // type needs to be a valid type
  type: 'type',
  name: 'myComponent',
  component: require('path/to/your/vue/component.vue').default
})
```

As you can see, [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html) are supported.


## Types

### metadataPlugin

A `metadataPlugin` is used to render a metadata plugin UI in the Metadata Form.

These are the `props` which are provided to your vue component:
```js
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

### searchFilter
A `searchFilter` registers a Vue component as filter for the search UI.

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



### includeParamsSidebarForm

A `includeParamsSidebarForm` is used to render a form to manipulate `params` for `doc-include`s. [This Guide]({{< ref "/guides/documents/includes/twitter-embed" >}}) shows you how to use such a component.

This component needs to take exactly one prop named `params`. It will contain an object with the params for the `doc-include`.
```js
props: {
  params: {
    type: Object,
    required: true
  }
}
```

The component needs to emit a CustomEvent to tell Livingdocs when the params have changed. You can do this in a change event handler for example:
```js
const event = new CustomEvent('update:params', {
  detail: this.paramsDraft,
  bubbles: true
})
this.$el.dispatchEvent(event)
```


### dashboardCard

A `dashboardCard` is used to render a single search result in a dashboard.

These are the `props` which are provided to your vue component:
```js
props: {
  result: {
    type: Object,
    required: true
  },
  options: {
    type: Object,
    required: true
  },
  contextMenuActions: {
    type: Array,
    required: true
  },
  cardActions: {
    type: Object,
    required: true
  }
}
```

### searchFilter
A `searchFilter` registers a Vue component as filter for the search UI.

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


### liDocumentListCardExtension
A `liDocumentListCardExtension` registers a Vue component that can be configured to be displayed on `liDocumentListCard` dashboard cards.
[here]({{< ref "/guides/editor/custom-dashboard-filters#register-custom-vue-component-filter" >}})

These are the `props` which are provided to your vue component:
```js
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

Valid `inject`:
- `authedHttp`
