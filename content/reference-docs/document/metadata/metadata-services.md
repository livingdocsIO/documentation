---
title: Metadata Services
draft: true
---

## Registering a metadata service

Some of the forms require you to provide a service that implements the business logic behind those fields. In order to register a service you will need to [add it as a customization]({{< ref "/guides/setup/editor-customization" >}}). To add a fictional metadata service `foobar` you would add the following line:

```js
editor.metadataServices.register('foobar', require('path/to/foobar'))
```

The file `foobar.js` defines the metadata service *and gives you a metadata instance as well as the angular injector*. It should always have the following format:

```js
module.exports = function ({metadata, $injector}) {
  // your implementation goes here
}
```

In the future we want to write our own injector for this to control more tightly what can be injected and what is private in the core.
