---
title: Include
menus:
  reference-docs:
    parent: Directives
---

Includes allow you to define parts of your markup that will be controlled from a third-party micro-service. Examples are services like highcharts or mathjax that render HTML given a set of given parameters and config. HTML is not only rendered one-time but evaluated on every request.

## Example

```js
module.exports = {
  name: 'echo',
  label: 'Echo',
  iconUrl: 'https://livingdocs-assets.s3.amazonaws.com/magazine-design/assets/images/icons-components/icon_image.svg',
  directives: [{
    name: 'foo',
    type: 'include',
    service: 'foo-service',
    config: {
        language: 'en'
    },
    defaultParams: {
        tag: 'livingdocs'
    }
  }],
  html: dedent`
    <div doc-include="foo">
      <div>Foo Service</div>
    </div>
  `
}
```

## Config Options

### Parameters

- `config`: object, allows you to pass static configuration to your third-party microservice. In the example above we pass a language as a fixed config.
- `defaultParams`: object, allows you to define defaults for the dynamic params of an include. Dynamic params are set by the user over a UI in the editor and are defined in the [Settings for the include]({{< ref "../project-config#includes" >}}).

### Service definition

The service defines what kind of include is inserted, i.e. the microservice to use for rendering.
You can define one service (`service`) or an array of `services` in which case the editor will provide a dropdown to change the service dynamically on a component.

- `service`, string, name of the service used to render the HTML within the tag. Service name [must be registered]({{< ref "../project-config#includes" >}}).
- `services`, array, defines a set of services that can be changed manually in the editor, each service contains each own service name, default params and config.

schema of services:
```js
services: ms.arrayOf(ms.strictObj({
        service: 'string:required',
        label: 'string:required',
        defaultParams: ms.obj(),
        config: ms.obj()
      }))
```
