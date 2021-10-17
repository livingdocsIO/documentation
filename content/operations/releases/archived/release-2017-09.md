---
title: release-2017-09
description: Release notes for release-2018-09
draft: true
---

# Release Notes: `September 2017 Release`

## Repositories

A release consists of new versions of the `livingdocs-server`, the `livingdocs-editor` and the `livingdocs-framework`.


### Livingdocs Server

How to require the server in your package.json:

```json
"dependencies": {
  "@livingdocs/server": "61.2.1",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/maintenance-v61.2.x

#### Patches

* [61.2.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v61.2.1) - **hooks**: Log errors instead of crashing on registration

### Livingdocs Editor

How to require the editor in your package.json:

```json
"dependencies": {
  "@livingdocs/editor": "20.10.4",
}
```
- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/maintenance-v20.10.x

#### Patches

* [20.10.1](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v20.10.1) - add archived state to articles details pages
* [20.10.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v20.10.2) - spellchecker: unload editable when removing the main (interactive) view
* [20.10.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v20.10.3) - reinitialise componentTree events when removing the mainView
* [20.10.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v20.10.4) - guard resrc image service call via framework

### Livingdocs Framework

The framework is already integrated in the package.json of the upstream server and editor. It's **not** necessary to integrate the framework from your side.

The framework does not have a release branch.

How to require the framework in your package.json:

```json
dependencies: {
  "@livingdocs/framework": "7.12.2"
}
```

## Component changes

Component | Type | Description | PRs | Issues
--- | --- | --- | --- | ---
Server | Bugfix | Enable cdata after updating xml2js to 0.4.18 | [bae17234](https://github.com/livingdocsIO/livingdocs-server/commit/bae17234) | -
Server | BREAKING CHANGE, Feature | Categories API. [Read more](#categories-api) | [#1566](https://github.com/livingdocsIO/livingdocs-server/pull/1566) | [#1288](https://github.com/livingdocsIO/livingdocs-planning/issues/1288)
Server | Bugfix | Remove new channel configuration (accidentally slipped in) | [#1607](https://github.com/livingdocsIO/livingdocs-server/pull/1607) | -
Server | Bugfix | Enable metadata in import. [Read more](#enable-metadata-in-import) | [#1615](https://github.com/livingdocsIO/livingdocs-server/pull/1615) | [#1490](https://github.com/livingdocsIO/livingdocs-planning/issues/1490)
Server | Feature | Channel configuration: Hooks are now registered on the feature. | [#1589](https://github.com/livingdocsIO/livingdocs-server/pull/1589) | [#1348](https://github.com/livingdocsIO/livingdocs-planning/issues/1348)
Server | BREAKING CHANGE | Removе deprecated doc-include methods and pusher endpoint. [Read More](#removing-deprecated-doc-include-methods) | [#1613](https://github.com/livingdocsIO/livingdocs-server/pull/1613) | [#1430](https://github.com/livingdocsIO/livingdocs-planning/issues/1430)
Server | Feature | Add `getRoyaltyRecipients` endpoint | [#1606](https://github.com/livingdocsIO/livingdocs-server/commit/1606) | -
Server | BREAKING CHANGE, Feature | `grunt-setup` works now properly within a docker container. [Read More](#grunt-setup-works-now-properly-within-a-docker-container) | [#1617](https://github.com/livingdocsIO/livingdocs-server/pull/1617) | [#1041](https://github.com/livingdocsIO/livingdocs-planning/issues/1041)
Server | Feature | Add document count to document-list endpoint. | [#1627](https://github.com/livingdocsIO/livingdocs-server/pull/1627) | [#1471](https://github.com/livingdocsIO/livingdocs-planning/issues/1471)
Server | Bugfix | Log errors instead of crashing on registration | [#commit](https://github.com/livingdocsIO/livingdocs-server/commit/7b91543) | -
Editor | Bugfix | Show build settings on admin screen. | [#1646](https://github.com/livingdocsIO/livingdocs-editor/pull/1646) | -
Editor | Bugfix | Update to new framework api. [Read More](#update-to-new-framework-api) | [#1651](https://github.com/livingdocsIO/livingdocs-editor/pull/1651) | -
Editor | Bugfix | Use the correct package for semantic-release on maintenance branches | [#1654](https://github.com/livingdocsIO/livingdocs-editor/pull/1654) | -
Editor | Bugfix | Allow print template selection on hugo import. | [#1656](https://github.com/livingdocsIO/livingdocs-editor/pull/1656) | [#1490](https://github.com/livingdocsIO/livingdocs-planning/issues/1490)
Editor | Bugfix | Apply print layout change to document metadata. [Read more](#apply-print-layout-change-to-document-metadata) | [#1658](https://github.com/livingdocsIO/livingdocs-editor/pull/1658) | [#1469](https://github.com/livingdocsIO/livingdocs-planning/issues/1469)
Editor | Feature | Enhance the list's dashboard with document count | [#1661](https://github.com/livingdocsIO/livingdocs-editor/pull/1661) | [#1471](https://github.com/livingdocsIO/livingdocs-planning/issues/1471)
Editor | Feature | Define default image component on containers for drag & drop [Read more](#define-default-image-component-on-containers-for-drag-and-drop) | [#1663](https://github.com/livingdocsIO/livingdocs-editor/pull/1663), [#255](https://github.com/livingdocsIO/livingdocs-framework/pull/255) | [#1264](https://github.com/livingdocsIO/livingdocs-planning/issues/1264)
Editor | Bugfix | When a focus image component gets deleted the image upload icon disappears | [#1663](https://github.com/livingdocsIO/livingdocs-editor/pull/1663) | [#1383](https://github.com/livingdocsIO/livingdocs-planning/issues/1383)
Editor | Bugfix | view: cannot transition from viewing to viewing | [#commmit](https://github.com/livingdocsIO/livingdocs-editor/blob/master/app/scripts/editor/view_manager.coffee#L79) | [#1432](https://github.com/livingdocsIO/livingdocs-planning/issues/1432)
Editor | Bugfix | As an editor I would like to see if I'm working on an archived article | [#commmit](https://github.com/livingdocsIO/livingdocs-editor/commit/05c9bfd91018743350acfe5f7811f55f2191285e) | [#1432](https://github.com/livingdocsIO/livingdocs-planning/issues/1473)
Editor | Bugfix | Components are not shown on drag and drop | [#1680](https://github.com/livingdocsIO/livingdocs-editor/pull/1680) | [#1516](https://github.com/livingdocsIO/livingdocs-planning/issues/1516)
Editor | Bugfix | Uncaught TypeError: Cannot read property 'configure' of undefined | [#1689](https://github.com/livingdocsIO/livingdocs-editor/pull/1689) | [#1527](https://github.com/livingdocsIO/livingdocs-planning/issues/1527)
Editor | Bugfix | TypeError: Cannot read property 'rangeCount' of null | [#1678](https://github.com/livingdocsIO/livingdocs-editor/pull/1678) | [#1497](https://github.com/livingdocsIO/livingdocs-planning/issues/1497)
Framework | Feature | ComponentModel Api Improvements [Read more](#componentmodel-api-improvements) | [#241](https://github.com/livingdocsIO/livingdocs-framework/pull/241) | -
Framework | Feature | Integrate Livingdocs release tools [Read more](#integrate-livingdocs-release-tools) | [#241](https://github.com/livingdocsIO/livingdocs-framework/pull/241) | [#1363](https://github.com/livingdocsIO/livingdocs-planning/issues/1363)
Framework | Bugfix | Image order on multi-upload from local machine [Read more](#image-order-on-multi-upload-from-local-machine) | [#259](https://github.com/livingdocsIO/livingdocs-framework/pull/259) | [#326](https://github.com/livingdocsIO/livingdocs-planning/issues/326)

### Known issues

Component | Type | Description | Issue
--- | --- | --- | ---
Editor | Bug | The controller with the name 'TasksController' is not registered. | [#1481](https://github.com/livingdocsIO/livingdocs-planning/issues/1481)

## In detail

## Categories API

### BREAKING CHANGE

We're adding an experimental Categories api and did some renaming in the event sourcing setup.
Additionally to the new database table which is created by the database migration script, we also renamed some columns on the menu and groups tables.
If your setup automatically applies the migration, there's nothing you have to do. If that's not the case, you'll need to run `grunt migrate`.

### API

```js
const categories = liServer.features.api('li-categories')

categories.getCategoryTrees({projectId, channelId}, cb)
categories.getPublishedCategoryTree({projectId, channelId}, cb)
categories.getPublishedCategoryTrees({projectId, channelId, categoryTreeId}, cb)

// required params for all methods: {action, projectId, channelId, categoryTreeId, data}
//` action` must equal the method name
categories.createCategoryTree({params..., data: {label}, cb)
categories.publishCategoryTree(params, cb)
categories.deleteCategoryTree(params, cb)
categories.addCategory({params..., data: {id, label, slug, pathToHere, metadata}}, cb)
categories.updateCategory({params..., data: {id, label, slug, pathToHere, metadata}}, cb)
categories.removeCategory({params..., data: {id}}, cb)
categories.moveCategory({params..., data: {id, previous, parent}}, cb)
```

## Enable metadata in import

The data object passed to the HugoImportApi can now contain a metadata object. E.g. NZZ can use it to pass their print metadata to the importer so an imported print article can be exported correctly.

## Removing deprecated doc-include methods

### BREAKING CHANGES

- The `registerServiceRenderer` method on the `server.features.api('li-includes')` feature was removed. Please use the `registerService` method, which was introduced in https://github.com/livingdocsIO/livingdocs-server/pull/1470

- The method `includeApi.getServiceRendererMethod` got removed.
Please use `includeApi.resolveInclude` to render an include.

- We've removed the deprecated `/authenticate/pusher` endpoint. Please make sure your editor is up to date and that your pusher configuration isn't using that endpoint.

- The url you should use  is `/pusher/authorize`:

  ```js
    pusher:
      isEnabled: true
      endpoint: '/pusher/authorize'
  ```

## `grunt-setup` works now properly within a docker container

- The config option `config.docker.enabled` has been replaced by `config.db.run_db_setup_commands_within_docker_container`.

- `config.db.run_db_setup_commands_within_docker_container` defaults to `true` and executes the db commands during `grunt setup` in a docker container. `grunt setup` is not supported, when you start docker containers with `docker-compose` and point to a container by a dns name.

- `config.db.run_db_setup_commands_within_docker_container = false` executes the db commands during `grunt setup` on the host system. For that `createdb` and `dropdb` needs to be available as binaries on the host system.

- the documentation has been updated as well: https://github.com/livingdocsIO/livingdocs/pull/136/files.

## Update to new framework api

The framework's `livingdoc` objects has changed its signature with regard to removing event listerners. The following code does not work anymore:

    livingdoc.off()

It was replaced by:

    livingdoc.removeListener()

## Apply print layout change to document metadata

Each time when the metadata was applied to the document (e.g. `document.update()`) the metadata reference which was passed to the `MetadataService` in the `Workspace` went stale and metadata updates didn't arrive on the document.

## Define default image component on containers for drag & drop

### Feature: New defaultComponents configuration option

Image components can now also be defined as default components. A use case may be an image gallery where a different component should be used for images by default.

Example `component configuration` in a livingdocs design:
```js
{
  name: 'gallery',
  label: 'Image Gallery',
  directives: {
    children: {
      defaultComponents: {
        image: 'image-slide'
      }
    }
  }
}
```

### Feature: Browser Drag API

Interactive pages have a new `startBrowserDrag()` method. This method has an `onDrop` callback that provides a `dropLocation`.

```js
livingdoc.createView({host, interactive, wrapper}).then ({iframe, renderer}) => {
  renderer.page.startBrowserDrag({
    event: event,
    onDrop: ({event, dropLocation}) => {
      // getDefaultComponent() will return the defaultComponent for the droplocation.
      // Possible types are `editable` and `image`.
      const imageComponentName = dropLocation.getDefaultComponent({type: 'image'})
      const component = livingdoc.createComponent(imageComponentName)

      // insert can be called multiple times. It will append each inserted component at the
      // end of the dropLocation.
      dropLocation.insert(component)
    }
  })
}
```

## ComponentModel Api Improvements

### ComponentModel

Allow to call `setContent` with an object:
```js
componentModel.setContent({
  title: 'Moby Dick',
  tagline: 'Whaling Weekly'
})
```

Allow to call `getContent` without passing a directive name:
```js
componentModel.getContent()
// returns
// {
//    title: 'Moby Dick'
//    tagline: 'Whaling Weekly'
// }
```

### ComponentTree

Allow to pass content when creating a component:
```js
componentTree.createComponent('title', {
  title: 'Moby Dick'
})
```

(this also works for `livingdoc.createComponentTree()`)

## Integrate Livingdocs release tools

* With the introduction of the `release-tools` it's possible to create and maintain a maintenance branch for an old version with a proper semantic-release approach. You can read more [here](https://github.com/livingdocsIO/release-tools/blob/master/doc/how-to-handle-a-product-release-on-github.md).

* We introduced a check to verify that on a `maintenance` branch only patch commits are allowed.

## Image order on multi-upload from local machine

This is a framework fix and you need to ensure that your framework version is at least `7.12.1`. Since the editor and the server consumes the framework with `^`, they both should get the latest framework version.
