# channel config

The channel config defines the project specific config, contentTypes and designs. To build a custom design the [designSettings](#designSettings) and [components](#components) can be modified.

Example:
```js
module.exports = {
  v: 2,
  $baseRevision: 5,

  settings: require('./settings'),
  contentTypes: [
    require('./content-types/regular')
  ],
  designSettings: require('./design-settings'),
  components: [
    require('./components/title'),
    require('./components/p'),
    require('./components/image')
  ]
}
```

## v

This is the version of the config schema. This value is fixed.

## $baseRevision

This is an internal property used for version management.



## settings

`settings.js` can be used to configure a channel (project). 

#### References
- [channel-config reference documentation](../reference-docs/project-config/README.md)



## contentTypes

A project can have multiple contentTypes. An example for a contentTypes is a "Regular article" or a "Gallery article". Every contentType can have different components and metadata.

#### References
- [contentType reference documentation](../reference-docs/project-config/content_types.md)
- [metadata reference documentation](../reference-docs/editor-configuration/metadata.md)



## designSettings

In designSettings you can build component groups, add external assets, define default components and a lot more.

#### References
- [designSettings reference documentation](./design_settings_config.md)



## components

Components are the heart of a Livingdocs design. You can design your own components like a paragraph-, an image- or a bullet-list-component.

#### :exclamation: Restrictions
At the moment following changes on the design are not supported.
- rename a directive in a component
- rename a component
- add a new directive to a component
- remove a component (please remove it only from the content-type)

#### References
- [components documentation](../reference-docs/project-config/design.md#components)
- [embedded design example](./design_example.md)
- [referenced design example](https://github.com/livingdocsIO/magazine-example) - check also out the magazine design example. But attention the format is not exactly the same, but it gives you a feeling what you can do with a design
