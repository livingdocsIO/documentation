---
type: release-notes
title: March 2022 Release
description: Release notes for release-2022-03
excludeFromSearch: true
---

{{< release-header
  title="March 2022 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2022-03"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* :new: feat(projectConfig): add valueBefore to patches [livingdocs-server #4164 v161.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4164)
* :new: Add svg imageprocessing test [livingdocs-server #4166 v161.0.1](https://github.com/livingdocsIO/livingdocs-server/pull/4166)
* :new: fix(notification-list): stops notifications covering each other up [livingdocs-editor #4948 v74.20.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4948)
* :new: Migrate knex transactions to pg [livingdocs-server #4163 v161.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4163)
* :new: Support queue deletion in the indexing dashboard [livingdocs-server #4161 v160.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4161)
* :new: Support queue deletion in the indexing dashboard [livingdocs-editor #4947 v74.20.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4947)
* :new: Drop callback support in project api [livingdocs-server #4160 v160.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4160)
* :new: update framework to 22.1.2 [livingdocs-server #4159 v159.4.1](https://github.com/livingdocsIO/livingdocs-server/pull/4159)
* :new: Select text over multiple editables [livingdocs-editor #4638 v74.19.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4638)
* :new: Rewrite database queries - Preparation for non-transactional query pool [livingdocs-server #4157 v159.4.0](https://github.com/livingdocsIO/livingdocs-server/pull/4157)
* :new: fix(document-list): Reorganise tests [livingdocs-editor #4946 v74.19.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4946)
* :new: Table dashboard: first draft of config [livingdocs-server #4145 v159.3.0](https://github.com/livingdocsIO/livingdocs-server/pull/4145)
* :new: Table dashboard: First draft of component [livingdocs-editor #4934 v74.19.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4934)
* :new: Do not throw an error when there are no relations [livingdocs-server #4153 v159.2.1](https://github.com/livingdocsIO/livingdocs-server/pull/4153)
* :new: Fix «click outside» handling [livingdocs-editor #4925 v74.18.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4925)
* :new: System Fonts instead of Roboto [livingdocs-editor #4659 v74.18.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4659)
* :new: feat(navigation): Collapsible groups [livingdocs-editor #4935 v74.17.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4935)
* :new: Publish Control - Part 3: Add new hooks to the instant publishing process [livingdocs-server #4146 v159.2.0](https://github.com/livingdocsIO/livingdocs-server/pull/4146)
* :new: Support modules in metadataPlugins config [livingdocs-server #4148 v159.1.5](https://github.com/livingdocsIO/livingdocs-server/pull/4148)
* :new: Fix console bugs for comments  [livingdocs-editor #4936 v74.16.3](https://github.com/livingdocsIO/livingdocs-editor/pull/4936)
* :new: fix(duplicate-filter): Set fallback list length to 3 [livingdocs-server #4099 v159.1.4](https://github.com/livingdocsIO/livingdocs-server/pull/4099)
* :new: fix(properties-panel): Prevent transformation of pinned components [livingdocs-editor #4926 v74.16.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4926)
* :new: Publish Control - Part 2: Clean up existing publish workflow [livingdocs-server #4141 v159.1.3](https://github.com/livingdocsIO/livingdocs-server/pull/4141)
* :new: Remove support to delete filter sets in other projects [livingdocs-editor #4933 v74.16.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4933)
* :new: Add component property to all components in the public api [livingdocs-editor #4932 v74.16.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4932)
* :new: Migrate knex queries to db.sql [livingdocs-server #4143 v159.1.1](https://github.com/livingdocsIO/livingdocs-server/pull/4143)
* :new: Upgrade to elasticsearch 7.16.1 [livingdocs-server #4144 v159.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4144)
* :new: Make language labels more flexible [livingdocs-editor #4921 v74.15.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4921)
* :new: fix(dialog): don't close dialogs opening other dialogs [livingdocs-editor #4922 v74.15.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4922)
* :new: Fix document cleanup to not break documents [livingdocs-server #4137 v159.0.1](https://github.com/livingdocsIO/livingdocs-server/pull/4137)
* :new: Document inbox extension [livingdocs-server #4081 v159.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4081)
* :new: Document inbox extension [livingdocs-editor #4852 v74.15.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4852)
* :new: feat(document-lists): Store created_by and updated_by userId [livingdocs-server #4121 v158.1.0](https://github.com/livingdocsIO/livingdocs-server/pull/4121)
* :new: Upgrade dependencies [livingdocs-server #4138 v158.0.4](https://github.com/livingdocsIO/livingdocs-server/pull/4138)
* :new: update framework to 22.0.3 [livingdocs-server #4132 v158.0.3](https://github.com/livingdocsIO/livingdocs-server/pull/4132)
* :new: udpate framework to 22.0.3 [livingdocs-editor #4919 v74.14.6](https://github.com/livingdocsIO/livingdocs-editor/pull/4919)
* :new: in data-migration-run use correct contentType argument name [livingdocs-server #4127 v158.0.2](https://github.com/livingdocsIO/livingdocs-server/pull/4127)
* :new: Fix postgres replica compatiblity [livingdocs-server #4130 v158.0.1](https://github.com/livingdocsIO/livingdocs-server/pull/4130)
* :new: Make basePath config optional [livingdocs-editor #4917 v74.14.5](https://github.com/livingdocsIO/livingdocs-editor/pull/4917)
* :new: Change publication hooks api [livingdocs-server #4123 v158.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4123)
* :new: Fix pathname lookup to not fail [livingdocs-editor #4914 v74.14.4](https://github.com/livingdocsIO/livingdocs-editor/pull/4914)
* :new: Task Cards: Fix link positioning [livingdocs-editor #4912 v74.14.3](https://github.com/livingdocsIO/livingdocs-editor/pull/4912)

Bugs
* Ensure script execution from angular templates when renderered in Vue [livingdocs-editor #4899 v74.13.19](https://github.com/livingdocsIO/livingdocs-editor/pull/4899)
* Character Counter: The character counter now works correctly after a component got transformed [livingdocs-editor #4886 v74.13.12](https://github.com/livingdocsIO/livingdocs-editor/pull/4886)
* Kanban Boards: fix race condition from user and metadata update event triggered searches  [livingdocs-editor #4877 v74.13.9](https://github.com/livingdocsIO/livingdocs-editor/pull/4877)
* Fix update concept for imatrics [livingdocs-editor #4873 v74.13.7](https://github.com/livingdocsIO/livingdocs-editor/pull/4873)
* Handle files on drop from hugo for images [livingdocs-editor #4866 v74.13.5](https://github.com/livingdocsIO/livingdocs-editor/pull/4866)
* Fix endless redirect after login with custom startpage [livingdocs-editor #4856 v74.13.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4856)
* Print: Only load/require the print feature if it's configured [livingdocs-server #4088 v157.5.5](https://github.com/livingdocsIO/livingdocs-server/pull/4088)
* Fix potential event loop blocking by logging circular references [livingdocs-server #4068 v157.5.2](https://github.com/livingdocsIO/livingdocs-server/pull/4068)
* Translations: Show all * related translations [livingdocs-editor #4816 v74.9.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4816)
* Fix date after remote update [livingdocs-editor #4844 v74.12.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4844)

Features
* Set default value in metadata of a data source [livingdocs-editor #4854 v74.13.8](https://github.com/livingdocsIO/livingdocs-editor/pull/4854)
* Media: Allow opening Image/Video in MediaLibrary from Properties Panel [livingdocs-editor #4846 v74.13.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4846)
* Print: Extend print metadata [livingdocs-server #4078 v157.5.6](https://github.com/livingdocsIO/livingdocs-server/pull/4078)
* Service switch for schema form [livingdocs-editor #4853 v74.13.17](https://github.com/livingdocsIO/livingdocs-editor/pull/4853)

Breaking Changes
* :new: Improvement/button group [livingdocs-editor #4825 v74.12.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4825)

API
* Remove renderInProcess option of renderPipeline [livingdocs-server #4106 v157.6.1](https://github.com/livingdocsIO/livingdocs-server/pull/4106)
* Public API: replace asset [livingdocs-server #4109 v157.7.0](https://github.com/livingdocsIO/livingdocs-server/pull/4109)
* Add server config `auth.accessTokenCacheSize` to increase the token cache size on heavy used servers [livingdocs-server #4118 v157.7.1](https://github.com/livingdocsIO/livingdocs-server/pull/4118)

Design
* Normalize language labels [livingdocs-editor #4897 v74.14.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4897)




**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Newsletter

* Newsletter: **TODO**
* Subscribe here: https://confirmsubscription.com/h/j/61B064416E79453D


## Webinar

### Features

* Recording: **TODO**
* Documentation: **TODO**

### Developers

* Recording: **TODO**
* Slides: **TODO**

## System Requirements

### Suggested
|Name|Version|
|-|-|
|Node|16|
|NPM|7|
|Postgres|13|
|Elasticsearch|7|
|Redis|6|
|Livingdocs Server Docker Image|livingdocs/server-base:16|
|Livingdocs Editor Docker Image|livingdocs/editor-base:16|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|

### Minimal
|Name|Version|
|-|-|
|Node|14|
|NPM|7|
|Postgres|9.6 (Deprecated Postgres 9 and 10)|
|Elasticsearch|6.x|
|Redis|5|
|Livingdocs Server Docker Image|livingdocs/server-base:14.3|
|Livingdocs Editor Docker Image|livingdocs/editor-base:14.3|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|


## Highlights

## Video Includes

TODO: add a description

* References
  * [TODO: Documentation]()
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4796)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4054)
  * [Video reference form upload](https://github.com/livingdocsIO/livingdocs-editor/pull/4823)

## Breaking Changes :fire:

### Migrate the database

- Expected duration?
- Possible data losses?
- Is it a simple migration? (fast/easy downgradable)

```sh
# run grunt migrate to update to the newest database scheme
# migration - 111-add-comments-table.js
#   create comments table + add events to the stream_events_types table
livingdocs-server migrate up
```




## Deprecations

### Configuration `auth.accessTokenSecret`

The configuration `auth.accessTokenSecret` gets replaced by `auth.accessTokenSigningKeys`.
Old configurations are still valid, but make sure you'll convert your secret to a JSON web key as soon as you use the new configuration property.

```diff
  auth: {
-    accessTokenSecret: "some-secret-for-hmac256-token-signing"
      // Generate the JSON web key using
      //   $ livingdocs-server key-generate convert-hs256 'some-secret-for-hmac256-token-signing'
+    accessTokenSigningKeys: [{"kty":"oct","k":"c29tZS1zZWNyZXQtZm9yLWhtYWMyNTYtdG9rZW4tc2lnbmluZw","kid":"","alg":"HS256","use":"sig"}]
}
```

Take the existing `auth.accessTokenSecret` value and convert it to a JSON web key.
To ease the conversion, we have the following command that outputs the json
for the `auth.accessTokenSigningKeys` array:

```bash
livingdocs-server key-generate convert-hs256 'some-secret-for-hmac256-token-signing'
```


## APIs :gift:




## Internal Changes




## Other Changes

### Features

* ... :gift:

### Design

* ... :gift:

### Improvements

* ... :gift:

### Bugfixes

* ... :beetle:


## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v??.?.?): text

### Livingdocs Editor Patches
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v??.?.?): text

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
