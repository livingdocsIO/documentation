---
title: release-2018-05
description: Release notes for release-2018-05
draft: true
---

**Attention:** If you skipped one or more release, please also check the release-notes of the skipped ones.

# Repositories

This release consists of the following new versions of the `livingdocs-server` and the `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `70.9.4`
`@livingdocs/editor` | `30.3.8`


## Livingdocs Server

How to require the server in your package.json:

```json
"dependencies": {
  "@livingdocs/server": "70.9.4",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-2018-05


## Livingdocs Editor

How to require the editor in your package.json:

```json
"dependencies": {
  "@livingdocs/editor": "30.3.8",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-2018-05




# Highlights


##  New API for channel configurations :fire: :gift:

Added `li-channel-configs` feature.

The feature is disabled by default. To activate it add the following config:
```js
  channelConfigs: {
    enabled: true
  }
```

**Breaking change**:
  ```js
  // the return value `renderConfig` has changed:
  channelApi.getRenderConfig({channelId, contentType}, (err, renderConfig) => {})
  ```
  - property rename: `renderConfig.renditionsConfig -> renderConfig.renditions`

  - property added: `renderConfig.path` // absolute path to the render config. Can be required.

  - new methods: `renderConfig.isEmpty()` and `renderConfig.getAvailableRenditions()`

  Also requiring the render config is now delayed. Previously we would require
  the path which points to the render config file when initialising the projects
  feature. Now it is required at runtime whenever it is used. This means we do not update the loaded config anymore and it remains serialisable.

[server #1875](https://github.com/livingdocsIO/livingdocs-server/pull/1875)


## Extend responses for the seed API :fire: :gift:

**Breaking change**: The "seedDocuments" method does no longer just return an array of document versions, but an object with:
  ```js
  type SeedDocumentsRes = {
    documents: DocumentVersion[],
    documentsBySeedId: { [seedDocumentId:number]: DocumentEntity }
  }
  const {documents: documentVersions, documentsBySeedId}: SeedDocumentsRes = await seedApi.seedDocuments(params, seedDocumentsData)
  ```
  This information turned out to be very useful and should be included in the return values.

[server #1921](https://github.com/livingdocsIO/livingdocs-server/pull/1921)


## Replace angular-ui-router with @uirouter/angularjs :fire: :wrench:

**Breaking change**: https://ui-router.github.io/guide/ng1/migrate-to-1_0

[editor #1842](https://github.com/livingdocsIO/livingdocs-editor/pull/1842)


## Disable backwards-compatibility feature for component bindings. :fire: :wrench:

**Breaking change**: Check if your (downstream) editor creates directives/components e.g. `app.component`/`app.directive` and check/move bindings from the controller `constructor` to `$onInit`. More details you can find in the [migration guide](https://github.com/angular/angular.js/blob/master/CHANGELOG.md#breaking-changes)

[editor #2027](https://github.com/livingdocsIO/livingdocs-editor/pull/2027)


## Enable single sign-on with external providers :gift:

It adds the possibility to signup (user registration) and signin (user authentication) using external OAuth 2 providers such as Github, Google or Facebook. When signining a user and its own project are created.

[server #1782](https://github.com/livingdocsIO/livingdocs-server/pull/1782) [editor #1913](https://github.com/livingdocsIO/livingdocs-editor/pull/1913)


## Database cleanup :gift:

It provides a tool to truncate the history (revision/metadata/publication) by user per document.

[server #1736](https://github.com/livingdocsIO/livingdocs-planning/issues/1736)




# Other Changes

  * CLI commands to import and delete projects. [server #1925](https://github.com/livingdocsIO/livingdocs-server/pull/1925) :gift:
  * Extend filtering for the user and project API. [server #1915](https://github.com/livingdocsIO/livingdocs-server/pull/1915) :gift:
  * Router allows query strings on paths. [server #1934](https://github.com/livingdocsIO/livingdocs-server/pull/1934) [server #1935](https://github.com/livingdocsIO/livingdocs-server/pull/1935):beetle:
  * Extend responses for the menu API. [server #1933](https://github.com/livingdocsIO/livingdocs-server/pull/1933) :gift:
  * Extend content-type configuration to include the editor's UI. [server #1937](https://github.com/livingdocsIO/livingdocs-server/pull/1937) :beetle:
  * Enables menu seeding. [server #1923](https://github.com/livingdocsIO/livingdocs-server/pull/1923) :gift:
  * Add a hook for the document seeding API so that documents can be adjusted before being updated. [server #1941](https://github.com/livingdocsIO/livingdocs-server/pull/1941) :gift:
  * Add Single sign-on with external providers such as Github, Google or Facebook. [server #1782](https://github.com/livingdocsIO/livingdocs-server/pull/1782) [editor #1913](https://github.com/livingdocsIO/livingdocs-editor/pull/1913) :gift:
  * Grunt task to create a user with project builders. [server #1943](https://github.com/livingdocsIO/livingdocs-server/pull/1943) :gift:
  * Improve compatibility the Safari browser. [server #1945](https://github.com/livingdocsIO/livingdocs-server/pull/1945) :beetle:
  * Allow to skip a migration based on the migration file callback. [server #1951](https://github.com/livingdocsIO/livingdocs-server/pull/1951) :gift:
  * Pass some systemdata to migration files. [server #1956](https://github.com/livingdocsIO/livingdocs-server/pull/1956) :gift:
  * Simplify project administration pages [editor #1976](https://github.com/livingdocsIO/livingdocs-editor/pull/1976) :gift:
  * Improve error and unauthorize pages. [editor #2001](https://github.com/livingdocsIO/livingdocs-editor/pull/2001) :gift:
  * Configure visibility of the list assignment in the publish screen. [editor #2002](https://github.com/livingdocsIO/livingdocs-editor/pull/2002) :gift:
  * UI improvments on the tasks side panel of the editor. [editor #1915](https://github.com/livingdocsIO/livingdocs-planning/issues/1915) :beetle:
  * Centralize Entry Point Logic in the welcome page. [editor #2011](https://github.com/livingdocsIO/livingdocs-editor/pull/2011) :beetle:
  * Enable creation of a start page for users after login and signup. [editor #2029](https://github.com/livingdocsIO/livingdocs-editor/pull/2029) :gift:
  * Add textarea form to metadata forms. [editor #2030](https://github.com/livingdocsIO/livingdocs-editor/pull/2030) :gift:
  * Add new 1/6em white space. [editor #2035](https://github.com/livingdocsIO/livingdocs-editor/pull/2035) :gift:


---

**Icon Legend**

* Breaking changes: :fire:
* Feature: :gift:
* Bugfix: :beetle:
* Chore: :wrench:
