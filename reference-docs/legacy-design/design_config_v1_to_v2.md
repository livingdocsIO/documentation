# Design Configuration v1 to v2 mapping

If you want to migrate from a design configuration v1 (deprecated) to a design configuration v2 (current), you can follow this abstract example to migrate your design.

## Design Config v1

```javascript
const v1 = {
  name: '', // move this to v2.name
  version: '', // move this to v2.version
  label: '', // removed property - does not exist in v2
  license: '', // removed property - does not exist in v2
  description: '', // removed property - does not exist in v2
  author: '', // removed property - does not exist in v2
  assets: {}, // move this to v2.designSettings.assets

  // move this to v2.designSettings.componentProperties and convert into
  // an array. Add the key under the property `name`.
  componentProperties: {},

  // moved out of design config, every layout is a contentType in the project config, e.g.
  layouts: [{
    name: '', // should already exist as contentType.handle
    caption: '', // move to contentType.info.label
    wrapper: '', // move to contentType.editorWrapper
    defaultContent: [], // move to contentType.defaultContent
    // migrate this config to contentType.components
    // contentType.components are grouped by v2.designSettings.componentGroups
    groups: []
  }],
  components: [{name, label, iconUrl, directives, html, ...}], // move this to v2.components
  defaultComponents: {}, // move this to v2.designSettings.defaultComponents
  prefilledComponents: {}, // TODO: put it into v2.designSettings.prefilledComponents
  groups: [], // move this to v2.designSettings.componentGroups
  metadata: {}, // move this to v2.designSettings.fieldExtractor
  defaultContent, // move this to contentType.defaultContent
  imageRatios: {}, // removed property - does not exist in v2
  defaultLayout: '', // removed property (this was used when no v1.layouts array exists)
}
```

## Design Config v2

This is an example of a design config v2 of a referenced design. If you use an embedded design, you only will have to specify `components` and `designSettings`
in your project configuration.

```javascript
const v2 = {
  v: 2,
  name: 'testv2',
  version: '1.0.0',  
  components: [{name, label, iconUrl, directives, html, ...}],
  designSettings: {
    assets: {},
    componentGroups: [],
    defaultComponents: {},
    fieldExtractor: [],
    componentProperties: []
  }
}
```
