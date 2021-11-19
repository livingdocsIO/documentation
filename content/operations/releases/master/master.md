---
title: Upcoming Release (release-2022-02)
description: Release notes for release-2022-02
excludeFromSearch: true
---

## Caveat :fire:

This are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* :new: Add multilang teaser example in service [livingdocs-server #4097 v157.6.0](https://github.com/livingdocsIO/livingdocs-server/pull/4097)
* :new: Set default value in metadata of a data source [livingdocs-editor #4854 v74.13.8](https://github.com/livingdocsIO/livingdocs-editor/pull/4854)
* :new: fix update concept for imatrics [livingdocs-editor #4873 v74.13.7](https://github.com/livingdocsIO/livingdocs-editor/pull/4873)
* :new: Multilist Editor: Show 20 (instead of 4) cards without scrolling [livingdocs-editor #4867 v74.13.6](https://github.com/livingdocsIO/livingdocs-editor/pull/4867)
* :new: handle files on drop from hugo for images [livingdocs-editor #4866 v74.13.5](https://github.com/livingdocsIO/livingdocs-editor/pull/4866)
* :new: 🐞 fix missing label in password reset screen [livingdocs-editor #4855 v74.13.4](https://github.com/livingdocsIO/livingdocs-editor/pull/4855)
* :new: 🐞  add type='submit' to 'create group' button to trigger an action [livingdocs-editor #4860 v74.13.3](https://github.com/livingdocsIO/livingdocs-editor/pull/4860)
* :new: 🐞 fix endless redirect after login with custom startpage [livingdocs-editor #4856 v74.13.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4856)
* :new: Fix opensearch compatibility [livingdocs-server #4100 v157.5.9](https://github.com/livingdocsIO/livingdocs-server/pull/4100)
* :new: fix: Be able to start the server without Hugo config [livingdocs-server #4101 v157.5.8](https://github.com/livingdocsIO/livingdocs-server/pull/4101)
* :new: Multilist editor: Fix max-height per list for Firefox [livingdocs-editor #4850 v74.13.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4850)
* :new: Media: Allow opening Image/Video in MediaLibrary from Properties Panel [livingdocs-editor #4846 v74.13.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4846)
* :new: Upgrade semantic release [livingdocs-server #4096 v157.5.7](https://github.com/livingdocsIO/livingdocs-server/pull/4096)
* :new: Fix date remote update [livingdocs-editor #4844 v74.12.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4844)
* :new: add more information to the remoteError from airship [livingdocs-server #4091 v157.5.7](https://github.com/livingdocsIO/livingdocs-server/pull/4091)
* :new: fix(button group): fix usage of li-button-group vue component [livingdocs-editor #4845 v74.12.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4845)
* :new: Extend print metadata [livingdocs-server #4078 v157.5.6](https://github.com/livingdocsIO/livingdocs-server/pull/4078)
* :new: Improvement/button group [livingdocs-editor #4825 v74.12.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4825)
* :new: Only load/require the print feature if it's configured [livingdocs-server #4088 v157.5.5](https://github.com/livingdocsIO/livingdocs-server/pull/4088)
* :new: Fix/Loader Color [livingdocs-editor #4840 v74.11.6](https://github.com/livingdocsIO/livingdocs-editor/pull/4840)
* :new: Fix/Top Banner [livingdocs-editor #4837 v74.11.5](https://github.com/livingdocsIO/livingdocs-editor/pull/4837)
* :new: fix(references): Fix image and language composite id generation [livingdocs-server #4080 v157.5.4](https://github.com/livingdocsIO/livingdocs-server/pull/4080)
* :new: Fix backfilling of the content_type_id column on the document_publication_events table [livingdocs-server #4075 v157.5.3](https://github.com/livingdocsIO/livingdocs-server/pull/4075)
* :new: Document list: Correctly update internal state when dragging item out of list [livingdocs-editor #4832 v74.11.4](https://github.com/livingdocsIO/livingdocs-editor/pull/4832)
* :new: Multilist Editor: inbox and search card actions [livingdocs-editor #4831 v74.11.3](https://github.com/livingdocsIO/livingdocs-editor/pull/4831)
* :new: Upgrade to pino v7 [livingdocs-server #4068 v157.5.2](https://github.com/livingdocsIO/livingdocs-server/pull/4068)
* :new: Multilist Editor: apply configured filters for the document search [livingdocs-editor #4830 v74.11.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4830)
* :new: Fix/User Avatar [livingdocs-editor #4828 v74.11.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4828)
* :new: fix(environments): Use files bucket [livingdocs-server #4069 v157.5.1](https://github.com/livingdocsIO/livingdocs-server/pull/4069)
* :new: Video reference form upload [livingdocs-editor #4823 v74.11.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4823)
* :new: feat(schema-form): Use updated video reference schema [livingdocs-editor #4824 v74.10.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4824)
* :new: feat(references): Change media schemas [livingdocs-server #4067 v157.5.0](https://github.com/livingdocsIO/livingdocs-server/pull/4067)
* :new: 🐞 Translation Action in Editor Toolbar (show all related translations) [livingdocs-editor #4816 v74.9.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4816)
* :new: Video include [livingdocs-editor #4796 v74.9.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4796)
* :new: Video include [livingdocs-server #4054 v157.4.0](https://github.com/livingdocsIO/livingdocs-server/pull/4054)
* :new: design improvements for document-list and soft-lock [livingdocs-editor #4820 v74.8.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4820)


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
