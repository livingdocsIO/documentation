---
type: release-notes
title: January 2018 Release
description: Release notes for release-2018-01
excludeFromSearch: true
---

{{< release-header 
  title="January 2018 Release"
  upcoming=false
  legacy=true
  current=false
  maintained=false
  branchHandle="release-2018-01"
>}}

## Repositories

This release consists of the following new versions of the `livingdocs-server` and `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `66.0.15`
`@livingdocs/editor` | `27.0.22`

### Livingdocs Server

How to require the server in your package.json:

```json
"dependencies": {
  "@livingdocs/server": "66.0.15",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-2018-01


### Livingdocs Editor

How to require the editor in your package.json:

```json
"dependencies": {
  "@livingdocs/editor": "27.0.22",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-2018-01



# Highlights

## Content Types - Server :fire: :gift:

**Breaking Change** The channel configurations now is based on contentTypes.

### Required Actions

* Postgres data migration needed: Make sure all entries in the `documents`table in postgres have a `content_type` set ([see migration](#postgres-data-migration))
* Elasticsearch Mappings need to be updated.
* Migrate channel configuration to the new format


### Postgres Data Migration

The content types feature depends on the introduced db field `documents.content_type`.

Before you can deploy the January release, you have to run a manual database migration, which pre-fills the `documents.content_type`. We created a manual migration as this is a long running operation for databases with many documents.

If you have installed the `October Release 2017` or `December Release 2017`, you can execute the manual migration with

```bash
`NODE_ENV=<env> ENVIRONMENT=<env> node node_modules/@livingdocs/server/db/manual-migrations/002-write-content-type.js`
```


### Updated elasticsearch mapping

The `contentType` was added to the `documents` index.

To update the mapping run:
```bash
grunt search-index:document:update-mapping
grunt search-index:document
```

### Server Configuration

**Channel Configuration**

Example Channel Configuration in the new format:
```js
projects: {

    // Example static channel configurations
    channelConfigurations: [{
      // If a channel has the channel `name` 'web' the channel configuration with
      // the `handle` 'web' will be used.
      handle: 'web',
      editMode: 'default',

      copy: [{
        source: {
          channelHandle: 'web',
          // If a design contains a layout gallery the content type is 'gallery'
          contentType: 'gallery'
        },
        targets: [{
          channelHandle: 'web',
          contentType: 'gallery'
        }]
      }],

      // Content Types
      contentTypes: [{
        handle: 'gallery',
        documentType: 'article',

        metadata: {},
        renditions: require.resolve('./path/to/rendition/config')
      }]
    }]
  },
```

**Rendition Configuration**

The format is exactly the same as before, it just must be in a different file as it contains code and is not really a configuration:
```js
const CheerioHtml = require('../../../lib/render-pipeline/output/cheerio_html')

module.exports = {
  'web': {
    output: {
      'page-html': new CheerioHtml()
    }
  }
}
```

**Copy Configuration**

An example of the new copy configuration with contentTypes instead of layouts:
```js
projects:
  channelConfigurations [
    copy: [{
      source: {
        // 'channelHandle' instead of 'design'
        channelHandle: 'web',
        // 'contentType' instead of 'layout'
        contentType: 'regular'
      },
      // 'targets' instead of 'target'
      targets: [
        channelHandle: 'print',
        contentType: 'regular'
        // ...other properties remain the same
      ]
    }]
  ]
```


### Public Api

#### GET public-api/v1/project

Changed return value with the contentTypes (array of contentType which contains configuration e.g. metadata) in the response
-> See the public api docs for details ( `<livingdocs-host>/public-api.html#/public-api.html`)

#### GET public-api/v1/channels/:channelHandle

Modified return value. This is exactly the same as one channel in the project response.
(there is also a schema: `LivingdocsPublicChannel`)
-> See the public api docs for details ( `<livingdocs-host>/public-api.html#/public-api.html`)

#### GET public-api/v1/documents/...

`content_type` is now included in the response
-> See the public api docs for details ( `<livingdocs-host>/public-api.html#/public-api.html`)


### Editing Api

#### GET /documents

`content_type` is now included in the response
`content_type` can be used in `fields` (GET /documents?fields=content_type)
`content_type` can be used as a filter (GET /documents?content_type=article)

#### GET /project

New channel configuration is included in the response


### Feature Apis

#### documentApi.create

`content_type` is required. It will be verified, that the `content_type` exists.
`revision.data.layout = content_type`
`document_type` is set as before. It uses the `document_type` defined in the specified `content_type` config.

#### documentCopyApi.copy
-> requires contentType param instead of layout

#### documentCopyApi.getCopyTargets

New return value:
```js
[{
  channelHandle: 'web'
  contentType: 'article'
}, {
  channelHandle: 'web'
  contentType: 'minimal'
}, {
  channelHandle: 'print'
  contentType: 'default'
}]
```

#### channelApi

Changes in `features.api('li-projects').channel`:

- Changed: channelApi.getRenderConfigForRenderWorker
  -> new required param `contentType`
- Removed: channelApi.getChannelsWithLayoutsByProject
- Removed: channelApi.getDocumentTypeConfig
- Removed: channelApi.getPageConfig
- Removed: channelApi.getArticleConfig
- Removed: channelApi.getChannelConfigByChannelName

#### projectApi

- projectsApi.getProject

New return value:
```js
{
  id: 1,
  projectHandle: 'project-handle',
  name: 'project-handle', // deprecated
  defaultChannelId: 10, // previous: default_channel_id
  config: {},
  channels: [{
    channelHandle: 'web', // previous: name
    designName: 'timeline', // previous: design_name
    designVersion: '1.0.0', // previous: current_version
    availableVersions: [], // previous: available_versions
    disabledVersions: [], // previous: disabled_versions
    editMode: 'default', // previous: mode
    copySources: [ // previous: copy_cource_channels
      {channelHandle: 'web', contentType: 'article'}
      {channelHandle: 'web', contentType: 'minimal'}
    ],
    contentTypes: [...], // new
    pushNotifications: {...} // new
  }]
}
```

Removed:

* channels[0].config
  * channel.config.articles.copy_source_channels
  * channel.config.articles.available_versions
  * channel.config.articles.disabled_versions

Previous value for `copy_source_channels`:
```js
copy_cource_channels = [
  {design: 'basic', layout: 'default'}
  {design: 'basic', layout: 'minimal'}
]
```

### RenderPipeline

#### registerRenderHooks

`documentType` got replaced with `contentType` in the `beforeRenderHook`

```js
  # before
  const renderPipeline = liServer.features.api('li-render-pipeline')
  renderPipeline.registerRenderHooks({
    projectHandle: 'my-project',
    channelHandle: 'web',
    beforeRenderHook: ({documentType, rendition}, callback) => {
      liServer.log.warn(`Hook called for documentType: ${documentType}!`)
      callback(null, rendition)
    }
  }, done)

  # after
  const renderPipeline = liServer.features.api('li-render-pipeline')
  renderPipeline.registerRenderHooks({
    projectHandle: 'my-project',
    channelHandle: 'web',
    beforeRenderHook: ({contentType, rendition}, callback) => {
      liServer.log.warn(`Hook called for contentType: ${contentType}!`)
      callback(null, rendition)
    }
  }, done)
```

#### importApi.import

```
// pass `importJob.contentType` instead of `importJob.documentType` the passed layout
// will be ignored (should we implement that backwards compatible?)

import({
  importJob, rawDocument, shouldCreateNew, updateCondition, userId
}, callback)
```

[Server PR #1696](https://github.com/livingdocsIO/livingdocs-server/pull/1696)


## Content Types - Editor :fire:

**Breaking Change** The editor depends on the server >= 66.0.0 Make sure all users refresh their session after the new editor is deployed.

The editor consumes contentTypes from the server through the channel configuration.
The create new document Dialog shows the information from the contentType configuration.
But the groups and defaultContent configuration are still loaded from the layouts in the design.

There is a new filter with type `contentType` that can be used in the dashboard or document searches.

[Editor PR #1759](https://github.com/livingdocsIO/livingdocs-editor/pull/1759)


## Allow to replace an image by an image drop :gift:

When dragging an image from the file system over an image in the editor the image will replace said image.

[Editor PR #1796](https://github.com/livingdocsIO/livingdocs-editor/pull/1796)


## Improved document history :gift: :fire:

### Editing Api

#### PUT /documents/:id

New param `force_new_revision` to force the creation of a new revision (we use that in the editor in the case a user restores an old version in the history)

#### GET /revisions

Mark on the revision (list) if a revision was created because a user published the document. The response will contain an event field that can read publish or be null (for edit).

The /revisions endpoint previously didn't require passing a `document_id`. This is now mandatory since the endpoint makes no sense without a `document_id`.

### History UI

The new document history aims at making the history faster and easier to navigate.

We introduce a small section at the top that shows who has edited a document and a small activity section with a line graph of number of revisions over days and total revisions due to publish and edit changes.

The main section of the history is still segmented by day. In addition each day is then also segmented by user, so if a user made many changes in a day (a common use case) you first see that this user made x changes in time a to b and then can open the entries section to drill deeper.

We also introduced the restore functionality. You can now restore any old revision. The exception is revisions with an outdated design. Those can still be seen but due to the possibility of conflicts in the design versions, can not be restored.

[Server PR #1762](https://github.com/livingdocsIO/livingdocs-server/pull/1762)

[Editor PR #1174](https://github.com/livingdocsIO/livingdocs-editor/pull/1774)


## Extended design loader configurations :gift: :fire:

The Design Loader gets its own configuration:
```js
designLoader: {
  hostedDesigns: [{ // optional
    designName: 'timeline',
    url: 'http://assets.livingdocs.io/timeline'
  }],
  localDesigns: [{ // optional
    path: '/designs/timeline/v1.1.0' // path to design
  }],
  designRepository: { // optional, defaults to the local design server
    remoteHost: 'http://api.livingdocs.io'
  },
  cacheSize: 100 // defaults to '20'
}
```

For details see the detailed changelog in the [Server PR #1787](https://github.com/livingdocsIO/livingdocs-server/pull/1787)

## Removed `designLoader` module in the editor :fire: :wrench:

**Breaking Change**
The module `designLoader` was removed. Use `designProxy` instead. It offers the same api.

From now on the editor always requests the design from the
Livingdocs Server it points to. The design is proxied through the server
in case the server is configured with a different design server.
This solves a few inconsistencies as previously it was possible to
load a different design than the one that was cached on the server.

[Editor PR #1803](https://github.com/livingdocsIO/livingdocs-editor/pull/1803)


## Mark list that have pending changes with a blue dot :gift:

In the editor lists screen a blue circle is shown for lists with pending changes.

In the server the `documentListApi` returns the inbox size of every list.

[Editor PR #1792](https://github.com/livingdocsIO/livingdocs-editor/pull/1792)
[Server PR #1776](https://github.com/livingdocsIO/livingdocs-server/pull/1776)


## Fix the behaviour of read-only mode during collaboration :beetle:

[Editor PR #1791](https://github.com/livingdocsIO/livingdocs-editor/pull/1791)


# Other Changes

* Editor
  * Add visibility config switch for the "transform component" in the side panel
    [#1793](https://github.com/livingdocsIO/livingdocs-editor/pull/1793) :wrench:
  * Show component name when no transformations are available
    [#1864](https://github.com/livingdocsIO/livingdocs-editor/pull/1864) :beetle:
  * Disable copy button on saving [#1795](https://github.com/livingdocsIO/livingdocs-editor/pull/1795) :beetle:
  * Keep image focus after cropping [#1769](https://github.com/livingdocsIO/livingdocs-editor/pull/1769) :beetle:
  * Specify homepage in project settings
    [#1767](https://github.com/livingdocsIO/livingdocs-editor/pull/1767) [#1751](https://github.com/livingdocsIO/livingdocs-server/pull/1751) :gift:
  * Show user profile in a separate page instead of a modal
    [#1843](https://github.com/livingdocsIO/livingdocs-editor/pull/1843) :wrench:
  * Reduce image flashing when uploading an image
    [#1829](https://github.com/livingdocsIO/livingdocs-editor/pull/1829) :beetle:
  * Provide a better login error message when the server is offline
    [#1831](https://github.com/livingdocsIO/livingdocs-editor/pull/1831) :beetle:
  * Improve positioning of the proofreading box for different designs
    [#1820](https://github.com/livingdocsIO/livingdocs-editor/pull/1820) :beetle:
  * Hide toolbar when editing teaser image
    [#1841](https://github.com/livingdocsIO/livingdocs-editor/pull/1841) :beetle:
  * Fix: anchor links are persisted
    [#1845](https://github.com/livingdocsIO/livingdocs-editor/pull/1845) :beetle:
  * Fix: show unpublished inboxed docs in list screen
    [#1848](https://github.com/livingdocsIO/livingdocs-editor/pull/1848)
  * Fix: missing list assignment in publish screen
    [#1850](https://github.com/livingdocsIO/livingdocs-editor/pull/1850)
  * Fix: Drag and Drop in inbox list
    [#1858](https://github.com/livingdocsIO/livingdocs-editor/pull/1858)
  * Bugfix: Show only a component transformation if there are valid transformations
    [#1885](https://github.com/livingdocsIO/livingdocs-editor/pull/1885) :beetle:
  * Consider `canReset: true` for a li-meta-slug-form :beetle: https://github.com/livingdocsIO/livingdocs-editor/pull/1914
  * Guard for undefined user in revision history :beetle: https://github.com/livingdocsIO/livingdocs-editor/pull/1907
* Elasticsearch
  * make elasticsearch apiVersion configurable
    [#1754](https://github.com/livingdocsIO/livingdocs-server/pull/1754) :gift:
  * replace top-level filter parameter with post_filter
    [#1726](https://github.com/livingdocsIO/livingdocs-server/pull/1726) :wrench:
* Hooks
  * handle resolveHandle errors
    [#1766](https://github.com/livingdocsIO/livingdocs-server/pull/1766) :beetle:
  * publication hooks registration ignores missing projects/channels
    [#1771](https://github.com/livingdocsIO/livingdocs-server/pull/1771) :gift:
* Print
  * advanced woodwing infobox
    [#1710](https://github.com/livingdocsIO/livingdocs-server/pull/1710) :gift:
  * send `<br>` to printAPI
    [#1746](https://github.com/livingdocsIO/livingdocs-server/pull/1746) :wrench:
  * set publicationDates period to 30d
    [#1778](https://github.com/livingdocsIO/livingdocs-editor/pull/1778) :wrench:
  * Fixes print layout select for new release :beetle: https://github.com/livingdocsIO/livingdocs-editor/pull/1910
  * Fix print dialogs after refresh :beetle: https://github.com/livingdocsIO/livingdocs-editor/pull/1901

* Redis
  * use ioredis instead of node-redis
    [#1773](https://github.com/livingdocsIO/livingdocs-server/pull/1773) :wrench:
* Tests
  * Get headless chromium properly to work
    [#1784](https://github.com/livingdocsIO/livingdocs-editor/pull/1784) :beetle:
* Server
  * Silently skip indexing for publications that have no path
    [#1824](https://github.com/livingdocsIO/livingdocs-server/pull/1824) :beetle:
  * Validate image service config
    [#1820](https://github.com/livingdocsIO/livingdocs-server/pull/1820) :wrench:
  * Deprecate 'resrc.it' image service
    [#1820](https://github.com/livingdocsIO/livingdocs-server/pull/1820) :wrench:
  * Expose origin array to the editor
    [#1813](https://github.com/livingdocsIO/livingdocs-server/pull/1813) :wrench:
  * /images/upload sets width and height on animated gifs :beetle: https://github.com/livingdocsIO/livingdocs-server/pull/1860
  * Support spaces in directory paths when running tests :wrench: https://github.com/livingdocsIO/livingdocs-server/pull/1845
  * fix: add missing logger object in document feature :beetle: https://github.com/livingdocsIO/livingdocs-server/pull/1839

---

  **Icon Legend**

  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
