# Vue Component Registry

## Description
The Livingdocs Editor can be customized by using your own components. Components are referenced by name in configurations. For Livingdocs to pick up your components, you need to register them first.
Livingdocs provides an API to register custom components writte in VueJS. They are always register with a certain type. Currently only the type `dashboardCard` is supported.
Depending on the `type`, you will get different `props` defined on your component. Please see below for details.

To register a custom component to be used in the result list of a custom dashboard, you would call the API like this:

```js
liEditor = require('@livingdocs/editor')()
liEditor.vueComponentRegistry.registerComponent({type: 'dashboardCard', require('path/to/your/vue/component.vue')})
```

As you can see, [Vue Single File Components](https://vuejs.org/v2/guide/single-file-components.html) are supported.


## Types

### dashboardCard
A `dashboardCard` is used to render a single search result in a dashboard. These are the `props`:
```
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