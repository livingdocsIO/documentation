## Images Configuration

#### Source Policy

Different sources for images can be enabled and disabled. E.g. it is now possible to disable image uploads by users and only allow e.g to use images from HuGo.

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

This config can be placed into the `editor` config and/or the server's `contentType` channelConfig (see below). If both are defined the `contentType` will take precedence.

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

This config is optional. By default upload and hugo are enabled and url is disabled.

Current default policy:

```js
const defaultPolicies = {
  upload: {enabled: true},
  hugo: {enabled: true},
  url: {enabled: false}
}
```

Please refer to the server configuration's `contentType` section to set the `sourcePolicy` there. 
There is also a config that can be set in the `contentType` channelConfig property editorConfig.images.whitelist which is still respected.

See: [ContentType configuration](../server-configuration/content-type-config.md)
