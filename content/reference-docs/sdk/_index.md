---
title: SDK
renderSummaries: false
renderTOC: false
weight: 7
menus:
  reference-docs:
    weight: 7
---

The SDK is a Node.js client for interacting with the Livingdocs [Public API]({{< ref "public-api">}}). 

It can be used to quickly get started with Livingdocs in your application, for example for retrieving publications or searching through them.

### Repository

{{< github "livingdocsIO/livingdocs-node-sdk" "The official Node.js client for Livingdocs" >}}
### Example

If you're looking for a full-fledged use case, implemented using the SDK, consider taking a look at our [magazine example](https://github.com/livingdocsIO/magazine-example)

{{< github "livingdocsIO/magazine-example" "The official Node.js client for Livingdocs" >}}


## Documentation
### Prerequisites

- Minimum Node version: 14
- Read the [Changelog](./CHANGELOG.md) to get up to date

### Getting started

We assume, you already have an account on https://edit.livingdocs.io
If not, create one now.

You can also check the full example in runkit, but make sure to replace the API token with your own: https://runkit.com/gabriel-hase/livingdocs-first-steps

1. Install the SDK

`npm install @livingdocs/node-sdk`

2. Get your access token from `edit.livingdocs.io` by navigating to `Access Management` -> `Api Tokens`

![Api Tokens in Livingdocs](http://livingdocs-assets.s3.amazonaws.com/sdk/api_tokens.png)

3. Get a document

```js
const liSDK = require('@livingdocs/node-sdk')
const liClient = new liSDK.Client({
  url: 'https://server.livingdocs.io',
  accessToken: 'my-awesome-token'
})

// you can see the document id in the URL of an article in the Livingdocs Editor
const publication = await liClient.getPublication({documentId: 1})
```

We assume that you used the standard signup flow. This would give you a document with id 1. Of course you can change this id to any document in your project.

4. Get a design

```js
const design = await liClient.getProjectDesign()
```

This gets the design used in the project with the API token provided.

A special case (mostly for non-service use cases) is if you want to get a specific globally referenced design. This might not be the design used in your project.

```js
const design = await liClient.getDesign({name: 'living-times', version: '1.0.2'})
```

5. Create a living document

```js
const liSDK = require('@livingdocs/node-sdk')
const livingdoc = liSDK.document.create({content: publication.content, design})
```

6. Render a living document to HTML

```js
livingdoc.render()
```

7. ...or render single components

```js
const liSDK = require('@livingdocs/node-sdk')
const html = liSDK.document.renderComponent(livingdoc.componentTree.first())
```

### Rendering a Document

To sum up, we wrapped the whole procedure in a snippet below:

```js
const liSDK = require('@livingdocs/node-sdk')
const liClient = new liSDK.Client({
  url: 'https://server.livingdocs.io',
  accessToken: 'my-awesome-token'
})

// fetch document from server
const publication = await liClient.getPublication({documentId: 1})

// fetch design
const design = await liClient.getProjectDesign()

// create document and render it
const livingdoc = liSDK.document.create({content: publication.content, design})
const html = livingdoc.render() // you can also use liSDK.document.render(livingdoc)

// now, do something great with your html... :)
```

Note: This snippet loads the latest design from your service project and uses our default image service.

### Where to go from here

#### I don't want to use document ids

Livingdocs provides you with a homepage for each project and configurable menus.
You can set a homepage and create a menu in the Livingdocs editor (edit.livingdocs.io).

Check out the Client API reference documentation below for the respective methods to fetch the homepage or a menu from Livingdocs.

#### I need my own design

Currently, you can only use embedded designs in your livingdocs editor. [getting started with your own design](https://developers.livingdocs.io/getting_started)

Otherwise you can use one of the given design in the editor and adapt the rendering on your side.
For the delivery rendering you can have a local copy of our magazine design and adjust the HTML / CSS for the rendering. This means that you will write in the Livingdocs editor in our prebuilt design but render to your own custom design using the SDK.

Check out the Livingdocs [magazine example frontend](https://github.com/livingdocsIO/magazine-example) on how to achieve this.

#### I want to change the output before rendering

The Livingdocs API provides you with our Livingdocs JSON format. The SDK allows you to build a native livingdoc instance out of the JSON response. The livingdoc instance gives you many options to change the output of your rendering, e.g. skipping certain components, set global styling options or change the way images are rendered.

Check out the livingdoc reference documentation for an intro to the livingdoc API.

### API Reference Documentation
```js
const liSDK = require('@livingdocs/node-sdk')
```

#### Document API
```js
/**
 * @function document.create Creates a Livingdoc instance.
 * @param options.design: serialised design (required)
 * @param options.content: content of a serialised livingdoc (required)
 * @param options.config: livingdoc configuration (optional)
 * @return Livingdoc
 */
const document = liSDK.document.create({design, content, config})

// Configure an image service (If you define nothing, the default settings below will be used)
// This configures Livindocs' image service (the same that is used on edit.livingdocs.io).
// You can of course also specify your own here or change the parameters for image rendering.

const config = {
  imageServices: {
    liImageProxy: {
      host: 'https://server.livingdocs.io',
      preferWebp: true,
      backgroundImage: {
        maxWidth: 2048
      },
      srcSet: {
        defaultWidth: 1024,
        widths: [2048, 1024, 620, 320],
        sizes: ['100vw']
      }
    }
  }
}

/**
 * @function document.visit Visits components in a ComponentTree.
 * @param document: Livingdoc
 * @param filter: Object | Function
 * @param visitor: (component: Component) => void
 * @return Livingdoc
 */
const visitedDocument = liSDK.document.visit(document, filter, visitor)

/**
 * @function document.getIncludes Aggregates and groups includes by service name and returns a Map of includes.
 * @param document: Livingdoc
 * @return { [service: string]: IncludeDirective[] }
 */
const includes = liSDK.document.getIncludes(document)

/**
 * @function document.renderComponent Renders a specific component to html.
 * @param component: Component
 * @return string
 */
const html = liSDK.document.renderComponent(component)

/**
 * @function document.render Renders a document to html.
 * @param document: Livingdoc
 * @return string
 */
const html = liSDK.document.render(document)
```

#### Client API
```js
// get an instance of the api client
const liClient = new liSDK.Client({
  url: 'http://localhost:3001', // required
  accessToken: 'my-awesome-token', // required
  proxy: 'http://path.to.proxy', // optional, uses HttpsProxyAgent (https-proxy-agent)
  agent: new CustomHttpsAgent() // optional, bring your own (node-fetch compatible) agent, this overrides and ignores the `proxy` config
})

/**
 * @function getMenus Fetches menus with optional filters.
 * @param filters?: { handle?: string } handle - The given menu handle.
 * @return Menu[]
 */
const [menu] = await liClient.getMenus({handle: 'main'})

/**
 * @function getDesignVersions Fetches available design versions by name.
 * @param options: { name: string } name - The given design name.
 * @return {versions: string[]}
 */
const {versions} = await liClient.getDesignVersions({name: 'living-times'})

/**
 * @function getProjectDesign Fetches a design by name and version.
 * @param options: { version: string } version - Optional property when not the current version should be fetched
 * @return Design
 */
const design = await liClient.getProjectDesign({version: '1.0.2'})

/**
 * @function getDesign Fetches a design by name and version.
 * @param options: { name: string, version: string } - The full design descriptor.
 * @return Design
 */
const design = await liClient.getDesign({name: 'living-times', version: '1.0.2'})


/**
 * @function getPublications Fetches latest publications with optional filters.
 * @param filters?: { homepage?: boolean, limit?: number = 10 }
 * @return Publication[]
 */
const [homepagePublication] = await liClient.getPublications({homepage: true, limit: 1})

/**
 * @function getPublication Fetches a publication by id.
 * @param options: { documentId: number }
 * @return Publication
 */
const publication = await liClient.getPublication({documentId})


/**
 * @function getMedia Fetches a media objects by id or externalId.
 * @param options.id: number Id from the media object
 * @param options.ids: array of Ids from the media objects
 * @param options.externalId: string Id from the media object from the external system
 * @param options.systemName: string name of the external system
 * @return Media[]
 */
const media = await liClient.getMedia({id, ids, externalId, systemName})


/**
 * @function search Search for publications
 * @param options.search: string	Search term to perform a full-text search with. For exact word matches use ", e.g. 'search="Ukulele"'
 * @param options.categories: string		Comma separated list of category ids for which documents should be found. Categories are concatenated with OR. Example: 'sport,fashion'
 * @param options.languages: string		Comma separated list of languages for which documents should be found. Languages are concatenated with OR. Example: 'en,de'
 * @param options.contentTypes: string		Comma separated list of content-types for which documents should be found. Content types are concatenated with OR. Example: 'article,author'
 * @param options.fields: string		Filters which (comma separated) properties are included in the response. Defaults to 'systemdata,metadata,content' (no renditions). Use 'id' if you only want to retrieve the ids of the published documents. Useful (and faster) if you are fully synchronizing your frontend with the publication events.
 * @param options.limit: integer		A limit for how much published documents to retrieve. Defaults to 10. Max. 100.
 * @param options.offset: integer		An offset into the query. Useful when getting more than 100 results (pagination)}
 * @return Publications
 */

const publications = await liClient.search({search, categories, languages, contentTypes, fields, limit, offset})
```

#### Livingdoc Content Model API

[Check out the reference docs](https://developers.livingdocs.io/reference-docs/content-model)