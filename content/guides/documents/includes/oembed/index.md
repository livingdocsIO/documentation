---
title: oEmbed
description: oEmbed
weight: 1
---

{{< added-in release-2022-03 block >}}

The oEmbed include service (`li-oembed-service`) allows users to embed content (such as photos, videos, or iframes) by providing a link to a resource, without having to worry about embed scripts. The include service has a small number of core providers, but it can easily be extended with additional providers, or with a generic catch-all provider.

## Core oEmbed Providers

- TikTok (`li-tiktok`)
- Twitter (`li-twitter`)
- Vimeo (`li-vimeo`)
- YouTube (`li-youtube`)

## Server Configuration

The oEmbed feature must be enabled within the server config with the `oembed.enabled` property (default: false). The maximum HTML response length from an oEmbed API can be defined using `maxEmbedSize`, which will limit the size of an embed string (default: 102400 characters). It's also possible to select the [core providers](#core-oembed-providers) you want to enable, or disabled them completely by setting `allowedCoreProviders` to an empty array. By default all core providers will be enabled.

```js
// <environment>.js
{
  // ...
  oembed: {
    // Enables the API, editor route, and include service (default: false)
    enabled: true,
    // Maximum HTML response length from oEmbed API (default: 102400)
    maxEmbedSize: 1024 * 1024,
    // Specify the enabled core providers by provider handle (default: undefined)
    allowedCoreProviders: [{name: 'li-youtube'}],
  },
  // ...
}
```

## Add Custom Providers

The oEmbed providers can be extended with any custom providers you wish to implement. When trying to find the correct provider for the request the core providers will be checked first, and then the custom providers will be checked in the order they were registered.

For an idea of websites which support oEmbed you can take a look at the oEmbed [providers.json](https://oembed.com/providers.json) file. If you want to support as many websites as possible then it would be possible to create a generic catch-all provider which parses website data to find [discoverable](https://oembed.com/#section4) providers.

### Provider Registration

During server initialization the oEmbed providers used by all projects need to be registered.

```js
// runtime-config.js
liServer.registerInitializedHook(async () => {
  const oembedProviders = require('./providers')
  liServer.features.api('li-oembed').registerProviders(oembedProviders)
})
```

The parameter passed to the `registerProviders()` functions should be an array of provider objects.

```js
// providers.js
module.exports = [
  require('./soundcloud'),
  require('./twitter')
]
```

### Simple Provider

{{< img src="simple-provider.png" alt="Simple provider (SoundCloud)" >}}

As oEmbed providers must return a standardised response payload it is possible to configure a simple provider using only a few string values. In this example, when a user pastes a URL into the oEmbed form it will be parsed, and then the `hostname` will be compared with the `hostname` string from the provider config. If the strings are equal then a request will be sent to the `oembedApiUrl` with the user input URL as a query parameter. The provider should then return the embed HTML with a JSON response (XML is not supported without [additonal configuration](#advanced-provider)).

```js
// soundcloud.js
module.exports = {
  handle: 'soundcloud',
  providerName: 'soundcloud',
  providerLabel: 'SoundCloud',
  hostname: 'soundcloud.com',
  oembedApiUrl: 'https://soundcloud.com/oembed?format=json'
}
```

### Advanced Provider

{{< img src="advanced-provider.png" alt="Advanced provider (Twitter)" >}}

A more complex oEmbed provider can extend the simple configuration above with some additional properties.

Firstly, it's possible to use a regular expression for the `hostname` comparison to support multiple subdomains and top-level domains with a single provider. It would also be possible to create a catch-all provider this way.

A `uiParamsSchema` array of metadata plugins can also be provided which enables you to generate a form for the user to customise the embed. Default values for the form can optionally be set using the `defaultParams` object, with the object keys matching the metadata plugin handle, and the property value being set as a valid value for the plugin.

There are two hooks which can be set: `prepareRequest` and `parseResponse`.

The `prepareRequest` hook receives an object containing the `url` which the user pasted into the form, along with any properties set using the `uiParamsSchema` form. The hook should return an object which contains a `params` property. The property's value should be an object which contains keys and values that will be sent to the oEmbed provider's API endpoint as query parameters. To support multiple endpoints within a single provider it is also possible to return a `url` instead of defining `oembedApiUrl` for the provider. This property should be a sibling of `params`, and should not be confused with the `url` property inside the `params` object. The top-level `url` is the API endpoint to query, and `params.url` is the resource to be embedded.

The `parseResponse` hook receives the response body from the oEmbed API. It must return an object containing a `html` property with a HTML string value. This hook can be used to parse an XML response if JSON is not supported by the API. It could also be used to manipulate content within the HTML, or wrap the HTML inside a container element. The HTML returned by this hook will replace the inner HTML of the include directive in your [component](#component).

```js
// twitter.js
module.exports = {
  handle: 'twitter',
  providerName: 'twitter',
  providerLabel: 'Twitter',
  hostname: /^(www\.)?twitter\.com$/,
  defaultParams: {
    theme: 'dark',
    lang: 'de'
  },
  uiParamsSchema: [
    {
      handle: 'theme',
      type: 'li-enum',
      config: {
        dataProvider: {
          handle: 'li-oembed-twitter-theme',
          type: 'labelValuePair',
          items: [
            {label: 'Light', value: ''},
            {label: 'Dark', value: 'dark'}
          ]
        }
      }
    },
    {
      handle: 'lang',
      type: 'li-enum',
      config: {
        dataProvider: {
          handle: 'li-oembed-twitter-lang',
          type: 'labelValuePair',
          items: [
            {label: 'English', value: ''},
            {label: 'German', value: 'de'},
            {label: 'French', value: 'fr'}
          ]
        }
      }
    }
  ],
  prepareRequest (queryParams) {
    return {
      url: 'https://publish.twitter.com/oembed',
      params: {
        ...this.defaultParams,
        ...queryParams,
        dnt: true
      }
    }
  },
  parseResponse (responseData) {
    return {
      html: `<div class="oembed-wrapper">${responseData.html}</div>`
    }
  }
}
```

## Component

The core Livingdocs oEmbed feature does not include a component, so you will need to create and register your own in your [document design]({{< ref "/reference-docs/document/document-design/#components" >}}).
Careful: You will want to register only **one** component for all embeds since the `li-oembed-service` assumes a generic concept. If you for example do a component for tiktok and one for podigee both using the `li-oembed-service` then users would be able to insert podigee embeds in tiktok components and vice versa. This leads to data inconsitencies.
If you want an embed component for a specific embed like e.g. datawrapper, consider doing an [include]({{< ref "/guides/documents/includes/twitter-embed/index.md" >}}) and providing a custom user interface such as a search modal to serach for datawrapper graphics from inside of Livingdocs.
An example generic oEmbed component can be seen below. The important part is to use the `li-oembed-service` include service. You can then set your own label and icon, and style the placeholder. When the oEmbed provider returns valid HTML then it will directly replace the inner HTML of the element with the `doc-include` directive.

```js
// oembed-component.js
module.exports = {
  name: 'oembed-include',
  label: 'Embed',
  iconUrl: `https://livingdocsio.github.io/livingdocs-design-assets/docs/icons/component-icons/icon_component_embed.svg`,
  directives: [{
    name: 'oembed-directive',
    type: 'include',
    service: 'li-oembed-service'
  }],
  html: `
    <div doc-include="oembed-directive">
      <div style="
        min-height: 200px;
        background-image: url('https://livingdocsio.github.io/livingdocs-design-assets/docs/icons/component-icons/icon_component_embed.svg');
        background-size: 64px;
        background-color: #f7f7f7;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        opacity: .7;
        box-shadow: 0 1px 2px rgba(0,0,0,.15);
      "></div>
    </div>
  `
}
```
