# Vue Component Registry

## Description
The Livingdocs Editor can be customized by using your own components. Components are referenced by name in configurations. For Livingdocs to pick up your components, you need to register them first.
Livingdocs provides an API to register custom components written in VueJS. They are always register with a certain type. The supported types are:

- [includeParamsSidebarForm](#includeparamssidebarform)
- [dashboardCard](#dashboardcard)
- [searchFilter](#searchfilter)

Depending on the `type`, you will get different `props` defined on your component. Please see below for details.

To register a custom component to be used in the result list of a custom dashboard, you would call the API like this:

```js
liEditor = require('@livingdocs/editor')()
liEditor.vueComponentRegistry.registerComponent({
  // type needs to be a valid type
  type: 'type',
  name: 'myComponent',
  component: require('path/to/your/vue/component.vue').default
})
```

As you can see, [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html) are supported.


## Types

### includeParamsSidebarForm

A `includeParamsSidebarForm` is used to render a form to manipulate `params` for `doc-include`s. [This Guide](includes-embeds/twitter_include_embed) shows you how to use such a component.

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

A full example can be seen [here](../../guides/register_custom_dashboard_filters.md#register-custom-vue-component-filter)