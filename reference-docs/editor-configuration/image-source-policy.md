## Images Configuration

#### Source Policy

Different sources for images can be enabled and disabled. E.g. it is now possible to disable image uploads by users and only allow e.g to use images from HuGo.

Editor configuration file:
```js
{
  images: {
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
}
```

images.sourcePolicy is a new config option which is optional. By default upload and hugo are enabled and url is disabled.

Current default policy:

```js
const defaultPolicies = {
  upload: {enabled: true},
  hugo: {enabled: true},
  url: {enabled: false}
}
```

There is also a config that can be set in the contentType channelConfig property editorConfig.images.whitelist which is still respected.

See: [ContentType configuration](../server-configuration/content-type-config)
