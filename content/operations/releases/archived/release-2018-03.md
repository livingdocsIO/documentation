---
title: release-2018-03
description: Release notes for release-2018-03
draft: true
---

**Attention:** If you skipped one or more release, please also check the release-notes of the skipped ones.

## Repositories

This release consists of the following new versions of the `livingdocs-server` and the `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `68.0.8`
`@livingdocs/editor` | `28.4.15`

### Livingdocs Server

How to require the server in your package.json:

```json
"dependencies": {
  "@livingdocs/server": "68.0.8",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-2018-03

### Livingdocs Editor

How to require the editor in your package.json:

```json
"dependencies": {
  "@livingdocs/editor": "28.4.15",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-2018-03

# Highlights

## Multi Language Support :gift: :fire:

This release introduce multi language support in the Livingdocs core. A more detailed description about the setup and the feature can be found in the [documentation](https://docs.livingdocs.io/walkthroughs/setup_multilanguage.html).

The activation of the feature requires a re-index of elasticsearch (including the new mapping): `grunt search-index:document:reset`

[server PR #1881](https://github.com/livingdocsIO/livingdocs-server/pull/1881) / [editor PR #1929](https://github.com/livingdocsIO/livingdocs-editor/pull/1929)

## Configurable search filter for empty queries on the dashboard :gift: :fire:

This change brings a new option named `emptySearchQueries` for `filters` (e.g. `articleList`). `emptySearchQueries` specifies the filter & sorting rules when the search field is empty.


### Required Actions

To get the previous search behaviour back of the last version, you have to provide `-updated_at` in the editor `emptySearchQueries` option (compare `defaultQueries` and `emptySearchQueries`):
```
filters: {
  articleList: {
    displayFilters: ['channels', 'contentType', 'timeRange'],
    defaultQueries: [
      {type: 'documentType', value: 'article'},
      {type: 'sortBy', value: 'relevance'}
    ],
    emptySearchQueries: [
      {type: 'documentType', value: 'article'},
      {type: 'sortBy', value: '-updated_at'}
    ]
  }
}
```

This tells the editor to provide `sortBy` -> `-updated_at` in case there is no search query input available.


For a more detailed description have a look at the [documentation](https://docs.livingdocs.io/reference-docs/editor-configuration/search-filters.html), the [server PR #1885](https://github.com/livingdocsIO/livingdocs-server/pull/1885) and the [editor PR #1939](https://github.com/livingdocsIO/livingdocs-editor/pull/1939)


## Project toggle support (alpha) :gift: :fire:

A user can now switch between 2 or more projects in the Editor. This feature is in alpha state and can only be activated with manually assigning a user to another project via the database.

### BREAKING CHANGES

#### Server
* Editor API
  * The `GET /projects/:id` endpoint now uses properties that are in **camelCase**.
   That shouldn't have any affect in the editor as we transform everything anyways.
  * `GET /projects` now returns the projects of a specific user.
    An admin can't call that endpoint to retrieve all the projects anymore.
* Public API
  * no breaking changes
* Core API
  * `project.default_channel_id` has been renamed to `project.defaultChannelId`
  * `project.config.import_user` has been renamed to `project.importUserId`

For a more detailed description (including deprecations) check the [server PR #1775](https://github.com/livingdocsIO/livingdocs-server/pull/1775) and the [editor PR #1787](https://github.com/livingdocsIO/livingdocs-editor/pull/1787)


# Other Changes

* UX Improvements
  * Data dashboard (beta) [#1879](https://github.com/livingdocsIO/livingdocs-server/pull/1879) [#1927](https://github.com/livingdocsIO/livingdocs-editor/pull/1927) :gift:
  * Allow image replacement for hugo image drop [#1915](https://github.com/livingdocsIO/livingdocs-editor/pull/1915) :gift:
  * Realtime Progress Bar Positioning [#1890](https://github.com/livingdocsIO/livingdocs-editor/pull/1890) :wrench:
* Chore
  * Update angular to 1.6.9 [#1823](https://github.com/livingdocsIO/livingdocs-editor/pull/1823) :wrench:
  * Use pusher warnings instead of errors for expected failures [#1888](https://github.com/livingdocsIO/livingdocs-editor/pull/1888) :wrench:
  * Support spaces in directory paths when running tests [#1842](https://github.com/livingdocsIO/livingdocs-server/pull/1842) :wrench:
  * Automatically create the import user if it doesn't exist [#1902](https://github.com/livingdocsIO/livingdocs-server/pull/1902) :wrench:
* Bugfixes
  * Prevent endless redirects  [#1924](https://github.com/livingdocsIO/livingdocs-editor/pull/1924) :beetle:
  * Fix events-publications migration [#1878](https://github.com/livingdocsIO/livingdocs-server/pull/1878) :beetle:
  * Guard for undefined user in revision-history [#1912](https://github.com/livingdocsIO/livingdocs-editor/pull/1912) :beetle:
  * Make content_type on documents and publication events `NOT NULLABLE` [#1855](https://github.com/livingdocsIO/livingdocs-server/pull/1855) :beetle:
* Print
  * Fixes print layout select for new release [#1909](https://github.com/livingdocsIO/livingdocs-editor/pull/1909) :beetle:
---

  **Icon Legend**

  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
