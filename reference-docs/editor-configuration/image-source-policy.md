## Images Configuration

#### Source Policy

Different sources for images can be enabled and disabled. E.g. it is possible to disable image uploads by users and only allow e.g to use images from HuGo.

This config can be defined per project and overwritten per contentType.
(It is also possible to configure it generally in the editor).

Example config with multiple sources:
```js
{
  sourcePolicy: [{
    provider: 'upload',
    enabled: true
  }, {
    provider: 'hugo',
    enabled: true
  }, {
    provider: 'url',
    enabled: true,
    hosts: ['https://cdn.pixabay.com']
  }]
}
```


#### Server Configuration

This config can be defined as `imageSourcePolicy` in these places:

For a project: [Settings configuration](../channel-config/README.md)
Overwrite per contentType: [ContentType configuration](../channel-config/content_types.md)


#### Editor Configuration

This config can be placed into the `editor` config
If both are defined the project or `contentType` specific configs will take precedence.

Editor config:
```js
{
  images: {
    sourcePolicy: [
      // ...
    ]
  }
}
```

#### Default Config

This whole config is optional. By default upload and hugo are enabled and url is disabled.

Current default policy:
```js
const defaultPolicies = {
  upload: {enabled: true},
  hugo: {enabled: true},
  url: {enabled: false}
}
```
