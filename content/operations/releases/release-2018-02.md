---
title: release-2018-02
description: Release notes for release-2018-02
excludeFromSearch: true
---


## Repositories

This release consists of the following new versions of the `livingdocs-server` and `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `66.3.8`
`@livingdocs/editor` | `27.4.9`

### Livingdocs Server

How to require the server in your package.json:

```json
"dependencies": {
  "@livingdocs/server": "66.3.8",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-2018-02

### Livingdocs Editor

How to require the editor in your package.json:

```json
"dependencies": {
  "@livingdocs/editor": "27.4.9",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-2018-02

# Highlights

## Manual migration script to fix content types :beetle:

In the current releases (january & february) the content_type column on the publication events table is missing all the data. The script db/manual-migrations/004-write-content-type-on-events-table.js inserts that data in a non-blocking script.

We won't do a blocking migration as that might cause downtime for big customers (we'll need to find good solutions for that in the future). Please run the regular migration and after that apply the manual one. A blocking migration that makes sure that all columns are `NOT NULLABLE` will follow in the february or march release.

### Required Action
```bash
./node_modules/@livingdocs/server/db/manual-migrations/003-write-content-type-v2.js
# and
./node_modules/@livingdocs/server/db/manual-migrations/004-write-content-type-on-events-table.js
```
[Server PR #1857](https://github.com/livingdocsIO/livingdocs-server/pull/1857)


## Routing :gift:

The routing now supports contentType specific routing configuration. The
configuration also offers more options and possibilities.

Example contentType configuration:
```js
routing: {
  enabled: true,
  pathPatterns: {
    // type 'article' needs to have an `:id` in the path pattern
    type: 'article',
    // path pattern used to build and parse paths
    current: '/:YYYY/:MM/:DD/:slug--:id',
    // previously used path patterns, used to parse paths if current failed
    legacy: [
      '/article/:slug--:id'
    ]
  }
}
```

For details see: [Server PR #1673](https://github.com/livingdocsIO/livingdocs-server/pull/1673)

For documentation see: [Documentation](https://docs.livingdocs.io/reference-docs/server-public-api/routing-system.html)


## Support for Animated gifs in the Images Editing API :gift:

The editor now supports animated gifs.

[Server PR #1858](https://github.com/livingdocsIO/livingdocs-server/pull/1858)


## Reduce image flashing when uploading an image :beetle:

[Editor PR #1829](https://github.com/livingdocsIO/livingdocs-editor/pull/1829)


## Scroll to inlined errors :gift:

When publishing a document and having a validation error, the browser now scrolls automatically to the erroneous metadata field.

Example:
![screen shot 2018-02-27 at 3 17 53 pm](https://user-images.githubusercontent.com/1951875/36733629-78b552d0-1bd1-11e8-95e1-01cf6fca6821.png)

[Editor PR #1874](https://github.com/livingdocsIO/livingdocs-editor/pull/1874)



## Throw an Error if there are no configured Metadata Plugins :beetle:

- Fix: Improve the warning log when the contentType can not be loaded.
- Fix: Throw an error on workspace creation (open article), when no metadata plugins are configured

### Deprecations

- `channel.getContentTypeConfig` is deprecated and has been replaced with `channel.getContentType`.

[Editor PR #1918](https://github.com/livingdocsIO/livingdocs-editor/pull/1918)


## Add contentType selection to page creation :beetle:

The page creation now includes choosing a content type before setting the page title.

### Deprecations

- ui-router state `app.editor.articles` moved to `app.articles`
- method `documentCreator.createArticle()` changed to the more generic `documentCreator.createDocument()`. The createDocument method also optionally accepts title and metadata parameters. This gives you more flexibility when creating articles.

[Editor PR #1849](https://github.com/livingdocsIO/livingdocs-editor/pull/1849)


# Other Changes

* Editor
  * UI Improvements
    * Еmbed code should break across lines so that everything is visible [#1878](https://github.com/livingdocsIO/livingdocs-editor/pull/1878) :beetle:
    * Position the proofreading box properly [#1820](https://github.com/livingdocsIO/livingdocs-editor/pull/1820) :wrench:
    * Increase padding on the left and right of text inputs [#1835](https://github.com/livingdocsIO/livingdocs-editor/pull/1835) :wrench:
    * Prettify project settings form [#1836](https://github.com/livingdocsIO/livingdocs-editor/pull/1836) :wrench:
  * UX Improvements
    * Migrate profile modal onto separate page [#1843](https://github.com/livingdocsIO/livingdocs-editor/pull/1843) :wrench:
    * Add contentType selection to page creation [#1849](https://github.com/livingdocsIO/livingdocs-editor/pull/1849) :gift:
    * Show only a component transformation if there are valid transformations [#1885](https://github.com/livingdocsIO/livingdocs-editor/pull/1885) :wrench:
    * Improve a dashboards no results feedback [#1859](https://github.com/livingdocsIO/livingdocs-editor/pull/1859) :wrench:
    * Provide a better error message when the server is offline [#1831](https://github.com/livingdocsIO/livingdocs-editor/pull/1831) :wrench:
  * Bugfix
    * Fix endless redirect loop with missing pusher config [#1833](https://github.com/livingdocsIO/livingdocs-editor/pull/1833) :beetle:
    * Missing list assignment in publish screen [#1873](https://github.com/livingdocsIO/livingdocs-editor/pull/1873) :beetle:
    * Anchor links are persisted [#1845](https://github.com/livingdocsIO/livingdocs-editor/pull/1845) :beetle:
    * Hide toolbar when editing teaser image [#1841](https://github.com/livingdocsIO/livingdocs-editor/pull/1841) :beetle:
    * Properly set home page title on selection [#1834](https://github.com/livingdocsIO/livingdocs-editor/pull/1834) :beetle:
    * Use designProxy instead of removed designLoader [#1815](https://github.com/livingdocsIO/livingdocs-editor/pull/1815) :beetle:
    * The editor considers canReset: true for a li-meta-slug-form [#1917](https://github.com/livingdocsIO/livingdocs-editor/pull/1917) :beetle:
    * Prevent input selection for publication date [#1879](https://github.com/livingdocsIO/livingdocs-editor/pull/1879) :beetle:
  * Chore
    * Improved error handling for session initialisation errors [#1863](https://github.com/livingdocsIO/livingdocs-editor/pull/1863) :wrench:
    * Update material-design-icons-svg to version 2.0.0 [#1822](https://github.com/livingdocsIO/livingdocs-editor/pull/1822) :wrench:
    * Disable version check locally [#1838](https://github.com/livingdocsIO/livingdocs-editor/pull/1838) :wrench:
    * Validate editor imageService config [#1884](https://github.com/livingdocsIO/livingdocs-editor/pull/1884) :wrench:
    * Update public api documentation [#1827](https://github.com/livingdocsIO/livingdocs-editor/pull/1827) :wrench:
  * Print
    * Fix print dialogs [#1902](https://github.com/livingdocsIO/livingdocs-editor/pull/1902) :beetle:
    * Fixes print layout select for new release [#1911](https://github.com/livingdocsIO/livingdocs-editor/pull/1911) :beetle:


* Server
  * Stability/Reliability
    * Various bugfixes for server shutdown [#1795](https://github.com/livingdocsIO/livingdocs-server/pull/1795) :beetle:
    * Silently skip indexing for publications that have no path [#1824](https://github.com/livingdocsIO/livingdocs-server/pull/1824) :wrench:
    * Provide a better error message when sending a mail fails [#1803](https://github.com/livingdocsIO/livingdocs-server/pull/1803) :wrench:
    * Validate image service config [#1820](https://github.com/livingdocsIO/livingdocs-server/pull/1820), [#1884](https://github.com/livingdocsIO/livingdocs-editor/pull/1884) :beetle:
  * Expose settings to the edtior
    * Expose `editor.origin` to the editor [#1813](https://github.com/livingdocsIO/livingdocs-server/pull/1813) :beetle:
    * Expose `editor.images` to the editor [#1799](https://github.com/livingdocsIO/livingdocs-server/pull/1799) :beetle:
  * Bugfix
    * Fix data-migration task [#1818](https://github.com/livingdocsIO/livingdocs-server/pull/1818) :beetle:
  * Feature
    * Add a feature for running tasks [#1622](https://github.com/livingdocsIO/livingdocs-server/pull/1622) :wrench:
  * Test
    * Support spaces in directory paths when running tests [#1846](https://github.com/livingdocsIO/livingdocs-server/pull/1846) :wrench:
---

  **Icon Legend**

  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
