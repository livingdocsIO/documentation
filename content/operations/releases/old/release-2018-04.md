---
type: release-notes
title: April 2018 Release
description: Release notes for release-2018-04
excludeFromSearch: true
---

{{< release-header 
  title="April 2018 Release"
  upcoming=false
  legacy=true
  current=false
  maintained=false
  branchHandle="release-2018-04"
>}}

**Attention:** If you skipped one or more release, please also check the release-notes of the skipped ones.

## Repositories

This release consists of the following new versions of the `livingdocs-server` and the `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `68.5.7`
`@livingdocs/editor` | `28.9.13`

### Livingdocs Server

How to require the server in your package.json:

```json
"dependencies": {
  "@livingdocs/server": "68.5.7",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-2018-04

### Livingdocs Editor

How to require the editor in your package.json:

```json
"dependencies": {
  "@livingdocs/editor": "28.9.13",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-2018-04

# Highlights


## Project-builders :gift: :fire:

Project-builders can be registered on the registration feature and then whitelisted in the configuration. These project builders provide downstreams the ability to register custom behavior on new user registration and their project creation, it allows to create multiple projects per user with full customization of related channels and even seed documents. A more detailed description and examples can be found in the [documentation](https://github.com/livingdocsIO/livingdocs-server/pull/1897).

[server PR #1897](https://github.com/livingdocsIO/livingdocs-server/pull/1897)

## Seeding :gift: :fire:

The seeding is a new API to seed documents for a given project and channel.

A more detailed description and examples can be found in the [documentation](https://github.com/livingdocsIO/livingdocs-server/pull/1905).

[server PR #1905](https://github.com/livingdocsIO/livingdocs-server/pull/1905)


## Postgres :wrench:

We dropped the `plv8` extension. This will make deployment/maintenance easier for self-hosted databases and allows to easily upgrade to postgres v10.

**This change won't affect you** unless you're using the extension by yourself in your custom code. The migration will require permission to drop the extension.

See this [commit](https://github.com/livingdocsIO/livingdocs-server/commit/dc8b2e4835f6eee460877378d28eb84eb0fe67e) for details.



# Other Changes

* UX Improvements
  * List all the projects for an `admin` user [server #1907](https://github.com/livingdocsIO/livingdocs-server/pull/1907) [editor #1960](https://github.com/livingdocsIO/livingdocs-editor/pull/1960) :gift:
  * Add magazine includes to the example server. [server #1910](https://github.com/livingdocsIO/livingdocs-server/pull/1910) :gift:
  * Implement custom workflow for `data-record` documents. [editor #1963](https://github.com/livingdocsIO/livingdocs-editor/pull/1963) :gift:
  * Ensure consistency for `content-type` icons between the menu and the document creation modal. [editor #1979](https://github.com/livingdocsIO/livingdocs-editor/pull/1979) :gift:
  * If the document creation fails an error will be shown in the console or in a notification. [editor #1956](https://github.com/livingdocsIO/livingdocs-editor/pull/1956) :gift:
  * Improve undo `CMD+Z` and redo `CMD+SHIFT+Z` keyboard shortcuts. [editor #1977](https://github.com/livingdocsIO/livingdocs-editor/pull/1977) :gift:
* Tooling
  * Use nyc in place of istanbul for test reporting. [Pull request link](https://github.com/livingdocsIO/livingdocs-server/pull/1913) :gift:
* Chore
  * Automatically create the import user if it doesn't exist, it makes the `grunt import-create` obsolete. [server #1898](https://github.com/livingdocsIO/livingdocs-server/pull/1898) :wrench:
  * Use the default `channelId` of a project if it can not be found in the token. [server #1908](https://github.com/livingdocsIO/livingdocs-server/pull/1908) :wrench:
  * Remove redundant include registration. [editor #1965](https://github.com/livingdocsIO/livingdocs-editor/pull/1965) :wrench:
  * Improve the error handling when parsing the metadata configuration. [editor #1959](https://github.com/livingdocsIO/livingdocs-editor/pull/1959) :wrench:
  * Aggregate all migrations into the least recent js migration file :wrench:
  [server #1906](https://github.com/livingdocsIO/livingdocs-server/pull/1906)
* Bugfixes
  * Cast `import_user` to integer in Postgres. [server #1893](https://github.com/livingdocsIO/livingdocs-server/pull/1893) :beetle:
  * Replace number parsing in config processor helper. [server #1895](https://github.com/livingdocsIO/livingdocs-server/pull/1895) :beetle:
  * Fix a regression bug in the `project-create` grunt task. [server #1903](https://github.com/livingdocsIO/livingdocs-server/pull/1903) :beetle:
  * Test for the existence of the multi-language metadata field before trying to show it. [editor #1947](https://github.com/livingdocsIO/livingdocs-editor/pull/1947) :beetle:
  * Fix a regression where the error reason was not properly forwarded anymore in the login handler. [editor #1962](https://github.com/livingdocsIO/livingdocs-editor/pull/1962) :beetle:
* Print
  * Add validation for print publication date [editor #1966](https://github.com/livingdocsIO/livingdocs-editor/pull/1966) :gift:
  *  Fix a regression bug for Hugo Drag and Drop. [editor #1974](https://github.com/livingdocsIO/livingdocs-editor/pull/1974) :beetle:
---

  **Icon Legend**

  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
