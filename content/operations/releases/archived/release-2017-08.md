---
title: release-2017-08
description: Release notes for release-2018-08
draft: true
---

# Release Notes

## Involved Repositories

#### `livingdocs-editor`

- from version `Release 2017-07` -> `v20.7.1`
- link to the release: https://github.com/livingdocsIO/livingdocs-editor/tree/v20.7.1
- livingdocs-framework version: `^7.9.0`

#### `livingdocs-server`

- from version `Release 2017-07` -> `v57.0.2`
- link to the release: https://github.com/livingdocsIO/livingdocs-server/tree/v57.0.2
- livingdocs-framework version: `^7.9.0`

#### `livingdocs-framework`

- from version `v7.8.0` -> `v7.9.0`
- link to the release: https://github.com/livingdocsIO/livingdocs-framework/tree/v7.9.0

## Component changes

Component | Type | Description | PRs | Issues
--- | --- | --- | --- | ---
Server | Feature | Support disabling gzip compression to support offloading it to a loadbalancer. [Read more](#support-disabling-gzip-compression) | [#1575](https://github.com/livingdocsIO/livingdocs-server/pull/1575) | -
Server | Improvement | Lock xml2js to 0.4.17 | [#06b96aaa](https://github.com/livingdocsIO/livingdocs-server/commit/06b96aaa) | -
Server | Bugfix | Enable cdata and update update xml2js to 0.4.18 | [#1580](https://github.com/livingdocsIO/livingdocs-server/pull/1580) | -
Server | Improvement, Bugfix | Convert document API to JS | [#1582](https://github.com/livingdocsIO/livingdocs-server/pull/1582) | [#1348](https://github.com/livingdocsIO/livingdocs-planning/issues/1348)
Server | Feature | Register shutdown handlers. [Read more](#register-shutdown-handlers) | [#1590](https://github.com/livingdocsIO/livingdocs-server/pull/1590) | -
Server | Feature | Register and execute server series of initializedHooks. [Read more](#register-and-execute-server-series-of-initializedhooks) | [#1598](https://github.com/livingdocsIO/livingdocs-server/pull/1598) | -
Server | Feature | Allow integrators to use different node versions. [Read more](#allow-integrators-to-use-different-node-versions) | [#1593](https://github.com/livingdocsIO/livingdocs-server/pull/1593) | -
Server | Feature | Integrate Release-Tools `v1.5.1`. [Read more](#integrate-release-tools-v151) | [#1594](https://github.com/livingdocsIO/livingdocs-server/pull/1594) | [#1563](https://github.com/livingdocsIO/livingdocs-planning/issues/1363)
Server | BREAKING CHANGE | Move dnd-import to import API. [Read more](#move-dnd-import-to-import-api) | [#1591](https://github.com/livingdocsIO/livingdocs-server/pull/1591) | [Epic](https://github.com/livingdocsIO/livingdocs-planning/issues/1331), [#1368](https://github.com/livingdocsIO/livingdocs-planning/issues/1368)
Server | BREAKING CHANGE | Add contentTypes and prepare new channelConfiguration. [Read more](#add-contenttypes-and-prepare-new-channelconfiguration) | [#1576](https://github.com/livingdocsIO/livingdocs-server/pull/1576) | [#1372](https://github.com/livingdocsIO/livingdocs-planning/issues/1372)
Editor | Improvement | Introduce a descriptive title to every sidebar: editing, inserting and tasks | [#1610](https://github.com/livingdocsIO/livingdocs-editor/pull/1610) | [#1050](https://github.com/livingdocsIO/livingdocs-planning/issues/1050)
Editor | Feature | Allow integrators to use different node versions. [Read more](#allow-integrators-to-use-different-node-versions) | [#1630](https://github.com/livingdocsIO/livingdocs-editor/pull/1630) | -
Editor | Bugfix | Fix error reporting for file uploads. [Read more](#fix-error-reporting-for-file-uploads) | [#1597](https://github.com/livingdocsIO/livingdocs-editor/pull/1597) | -
Editor | Bugfix | Remove page refresh when leaving the history mode | [#1594](https://github.com/livingdocsIO/livingdocs-editor/pull/1594) | -
Editor | Bugfix | Fix layout department lookup. [Read more](#fix-layout-department-lookup) | [#1616](https://github.com/livingdocsIO/livingdocs-editor/pull/1616) | -
Editor | Feature | Integrate Release-Tools `v1.5.1`. [Read more](#integrate-release-tools-v151) | [#1633](https://github.com/livingdocsIO/livingdocs-editor/pull/1633) | [#1563](https://github.com/livingdocsIO/livingdocs-planning/issues/1363)
Editor | Feature | Revamp Hugo dashboard drop. [Read more](#revamp-hugo-dashboard-drop) | [#1623](https://github.com/livingdocsIO/livingdocs-editor/pull/1623) | [Epic](https://github.com/livingdocsIO/livingdocs-planning/issues/1331), [#1368](https://github.com/livingdocsIO/livingdocs-planning/issues/1368)
Editor | Feature | Add transformation selection for huGO DnD import. [Read more](#add-transformation-selection-for-hugo-dnd-import) | [#1631](https://github.com/livingdocsIO/livingdocs-editor/pull/1631) | [#1369](https://github.com/livingdocsIO/livingdocs-planning/issues/1369)
Editor | Feature | Show backlink for images imported from huGO. [Read more](#show-backlink-for-images-imported-from-hugo) | [#1643](https://github.com/livingdocsIO/livingdocs-editor/pull/1643) | [#1371](https://github.com/livingdocsIO/livingdocs-planning/issues/1371)
Editor | Feature | Select layout and channel on huGO DnD | [#1640](https://github.com/livingdocsIO/livingdocs-editor/pull/1640) | [Epic](https://github.com/livingdocsIO/livingdocs-planning/issues/1331)
Framework | Feature | Allow removing a view from the livingdoc. [Read more](#allow-removing-a-view-from-the-livingdoc) | [#242](https://github.com/livingdocsIO/livingdocs-framework/pull/242) | [#1214](https://github.com/livingdocsIO/livingdocs-planning/issues/1214)

### Known issues

Component | Type | Description | Issue
--- | --- | --- | ---
Editor | Bug | TypeError: Cannot read property 'rangeCount' of null | [#1497](https://github.com/livingdocsIO/livingdocs-planning/issues/1497)
Editor | Bug | The controller with the name 'TasksController' is not registered. | [#1481](https://github.com/livingdocsIO/livingdocs-planning/issues/1481)
Editor | Bug | view: cannot transition from viewing to viewing | [#1432](https://github.com/livingdocsIO/livingdocs-planning/issues/1432)

## In detail

## Support disabling gzip compression

Support disabling gzip compression to support offloading it by a loadbalancer. Gzip compression offloading to a load balancer results in a better performance. To disable gzip compression on the server, you can set `server.gzip = false`.

## Register shutdown handlers

Register `process` shutdown handlers in the core. This way we can use our logger also for unhandled exceptions and other process termination events.

In the future we can extend the handlers to properly end active connections where possible.

#### New server configuration option

The server can now be configured to properly log unexpected errors with the server logger. These logs have the log level `fatal`. It also logs `info` log messages on `SIGTERM` and on process `exit`. By default this option is disabled.

```js
registerShutdownHandlers: true // defaults to `false`
```

#### Exposed log level `fatal`

The log level `fatal` is now exposed in the server api:
```js
liServer.log.fatal('ups')
```

## Register and execute server series of initializedHooks

### `liServer.registerInitializedHook`

`liServer.registerInitializedHook((done) => {done()})`

Hooks to be executed by `liServer.initialize()` right after all features have been initialized. This method
is useful to configure features dynamically or register feature specific hooks. An example would be to register
a publish hook on the documents feature.

```js
liServer.registerInitializedHook((done) => {
  done(/* err */)
})
```

You can register as many hooks as you'd like. They will be executed sequentially (and always in registration order), which means that no two hooks ever run in parallel and instead each hook waits until the previous one is done executing before running.

For more documentation regarding initializing a Livingdocs Server please refer to the following [link](https://github.com/livingdocsIO/livingdocs/blob/master/reference-docs/server-extensions/server-initalization.md).

## Allow integrators to use different node versions

- Only assert the lower bound of node and npm versions. Customers should be able to use different versions at their own risk and need to ensure that they run some tests. Node versions 7 & 8 aren't tested in our environment yet.
- We'll still use the suggested node version defined in the .nvmrc file, which is v6.

## Integrate Release-Tools v1.5.1

- With the introduction of the `release-tools` it's possible to create and maintain a maintenance branch for an old version with a proper semantic-release approach. You can read more [here](https://github.com/livingdocsIO/release-tools/blob/master/doc/how-to-handle-a-product-release-on-github.md).
- Besides that we also introduced a check to verify that on a maintenance branch only patch commits are allowed.

## Move dnd-import to import API

* Minimum required editor version is `v20.6.1`
* Endpoint `/text/import` changed from get to post.
* Document transform files not used anymore.
* Configuration for hugo import added.
* Hugo import now requires custom code.

Example Configuration

```
hugo:
    targets:
      basePath: path.resolve('./plugins/hugo-import-transformations')
      articleAgency:
        dir: 'agency'
        layouts: [
          design: 'domenica'
          layout: 'regular'
          transformation: 'nzzas_regular'
        ]
      articleArchive:
        dir: 'archive'
        layouts: [
          design: 'morpheus'
          layout: 'regular'
          transformation: 'web_regular'
        ]
```

## Fix error reporting for file uploads.

Fixes error reporting for file uploads. By files here we mean everything except images, e.g. PDFs:
* Add tests for bugs that need fixing.
* Inform users about upload errors.
* Reject promises where needed.

## Fix layout department lookup

- Woodwing uses a new `departmentId` field for identifying a department of a layout. We now use it to pick the right department from the previously received departmentList.
- For NewsNT we fall back to using the `department` field.

## Revamp Hugo dashboard drop

This pull request removes:
- hugo drop on an article

This pull request adds:
- permission check for `create articles` when dropping from hugo
- post to `hugo/text/import`

The permission check is done before the drop can happen:
<img width="488" alt="error-dnd" src="https://user-images.githubusercontent.com/234051/29273033-e214a1dc-8102-11e7-88a9-d6f0e3557788.png">

## Add transformation selection for huGO DnD import

We added the new end point `/hugo/layouts` which for a request like `/hugo/layouts?project_id=1` returns the following response:

``` json
{
    "channels": [
        {
            "id": 1,
            "name": "web",
            "label": "Web",
            "layouts": [
                {
                    "name": "print",
                    "caption": "Print Article"
                }
            ]
        }
    ]
}
```

## Show backlink for images imported from huGO

This pull request shows a backlink to the huGO asset.

<img width="1094" alt="screen shot 2017-08-31 at 15 00 01" src="https://user-images.githubusercontent.com/234051/29924478-55f3134c-8e5d-11e7-8c1e-e9b0765caed9.png">

## Allow removing a view from the livingdoc

Added:
```
Livingdoc#removeView(view)
View#destroy
```

When removing a view, it is also destroyed. This allows to clean up used views and also create a fresh interactive view on the Livingdoc.

## Add contentTypes and prepare new channelConfiguration

#### Breaking Changes

Document Copy:

Metadata Plugins are executed when a document is copied (with the document-copy feature of the livingdocs-server). Now copying works the same as creating a document manually regarding how the metadata plugin onUpdate methods are concerned. This is technically a breaking change but should not require any code changes (except maybe in tests).

#### Preparation for the introduction of `contentTypes`

In the coming September or October release we plan to introduce `contentTypes`. Content Types merge the current documentType on the document and layouts from the design. If databases contain a large number of documents the introduction of contentTypes should be prepared beforehand.

With this release the `documents` database table contains a new column `content_type`. This column should be set for every document. This release ensures that every new document has a `contentType` set. If a document has a layout, the contentType will be set to the layout. Otherwise the contentType will be set to the documentType.

For all existing documents a manual migration will have to be run. We created a manual migration as this is a long running operation for databases with many documents. The migration can be found in `db/manual-migrations/002-write-content-type.js`.
