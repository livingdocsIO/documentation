---
title: Upcoming Release (release-2021-11)
description: Release notes for release-2021-11
excludeFromSearch: true
---

## Caveat :fire:

This are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize

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
|Livingdocs Server Docker Image|livingdocs/server-base:16.1|
|Livingdocs Editor Docker Image|livingdocs/editor-base:16.1|
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

### Metadata Translations for Data Records

We introduce "Metadata Translations for Data Records". It allows to translate data records into different languages. The behavior and look is similar like for the translation of Media Library Assets.

* References
  * [Guide - Enable Metadata Translations for Data Records](https://docs.livingdocs.io/guides/editor/metadata-translations/)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4761)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4046)

### Multilist Editor

The multilist editor lets a user view and edit multiple document lists in one screen (before you had to jump from list to list)

- the multilist editor is accessible from the editor toolbar while editing a page
- lists can individually be filtered (visible/invisible)
- optionally it shows the inbox for one specific document.

![image](https://user-images.githubusercontent.com/172394/139450007-aba52431-b828-4d58-adba-1700a57bc498.png)

* References
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4760)
  * [Editor PR 2](https://github.com/livingdocsIO/livingdocs-editor/pull/4801)


### Document Inbox

We introduce the "Document Inbox" feature to support teams with splitted responsibilities. In bigger editorial teams there are different roles (e.g. writing an article and orchestrating pages). As an example: Editor A writes an article and put it to the inbox of the front page. Editor B then can decide into which list of the front page the article should go.

* References
  * [Documentation](TODO)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3911)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4661)


### Extended Text Formatting Toolbar

We added 3 new possibilities to select data for custom attributes in the text formattting toolbar
* Select a value from a list
* Select a document reference
* Text input

* [Documentation](TODO)
* [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4799)
* [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4060)



## Breaking Changes :fire:

### Migrate the database

It's a simple/fast migration with no expected data losses.

```sh
# run grunt migrate to update to the newest database scheme
# migration - 167-add-document-inbox.js
#   create new table document_inbox
# migration - 168-add-started_at-index-on-import_jobs.js
#   add index to import_jobs.started_at
# migration - 169-add-li_jsonb_find_index-and-improve-li_jsonb_patch-error-handling.js
#   add new pg function for json patching
# migration - 170-add-translations-to-document_metadata-table.js
#   add column document_metadata.translations
# migration - 170-support-postgres-14.js
#   add support for postgres 14
# migration - 171-add-project-secrets.js
#   add new table project_secrets
# migration - 172-prepare-content_type_id-migration.js
#   add new pg function for content type population
livingdocs-server migrate up
```

### Remove Deprecated Editor Config :fire:

- 🔥 remove deprecated editor config `hugo.assetHost` - use server config `hugo.assetHost` instead
- 🔥 remove deprecated editor config `app.imageService` - use server config `documents.selectedImageService` instead

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4691)

### Remove DocumentModel Getters :fire:

Some internal methods got removed. If you use any of the following methods, please rather use `documentWriteModel.metadata` directly.

- :fire: `documentWriteModel.metadata.setProperties(obj)` got removed. Please use `.setProperty` for now.
- :fire: `documentWriteModel.metadata.serialize()` got removed. Please use `.splittedSerialize()`
- :fire: `documentWriteModel.metadata.getEntity()` got removed. Please use `documentWriteModel.metadata.entity`

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4024)

### Remove documentModel getters :fire:

Some internal methods got removed. If you use any of the following methods, please rather use `documentWriteModel.metadata` directly.

- :fire: `documentModel.document` got removed. Please use `documentModel.documentEntity` instead
- :fire: `documentModel.metadata` got removed. Please use `documentModel.metadataModel` instead
- :fire: `documentModel.revision` got removed. Please use `documentModel.revisionEntity` instead

Instead of using higher level getters like `documentModel.content` and `documentModel.metadataContent`, you can use low level getters instead:
- documentModel.id
- documentModel.documentId
- documentModel.revisionId
- documentModel.projectId
- documentModel.channelId

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4011)

### Rename channelConfig to projectConfig :fire:

- 🔥 removed server config property `channelConfigs.enabled` - it has no effect anymore
- 🔥 removed server config `channelConfigs` - use `projectConfigs` instead

References: [Server PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4047)

### Button cleanup iteration 1 :fire:

If you have any custom UI in your downstream that makes use of any of the following you want to read this:

classes:
- `.ld-btn-group--link`, `.ld-btn-group--narrow`, `.ld-btn-group--no-margin`
- `.ld-btn--center`, `.ld-btn--kill-radius`, `.ld-btn--text-left`, `.ld-btn--project-setup`, `.ld-btn--primary-dark`, `.ld-btn--white`, `.ld-btn--border`, `.ld-btn--refresh`, `.ld-btn--dropdown`, `.ld-btn--bar`
- `.ld-btn__bar`, `.ld-btn .li-icon`, `.li-toolbar-action-button`

SCSS variabales:
- `$ld-btn--border-color`, `$ld-btn--border-background`, `$ld-btn--border-border`, `$ld-btn--border-hover`

You are highly encouraged to refactor your markup / custom stylesheets to not use these things anymore. In order to ease that process, there is a file you can `@import` in your custom SCSS to get support for the mentioned classes and variables:
In the SCSS file you have configured as `CUSTOM_STYLE_PATH_BEFORE` or `CUSTOM_STYLE_PATH_AFTER` add this line at the top:

```sass
@import "~styles/backwards-compatibiliy/release-2021-11.scss";
```

This will define the removed classes and variables within your SCSS file tree. Your Sass files will compile again and your custom UI will most probably look just fine. From there on you can refactor your code and remove the `@import "~styles/backwards-compatibiliy/release-2021-11.scss";` after you are done. We will keep this file around for some time, but it will eventually get removed. If you have any questions about this, don't hesitate to contact us.

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4656)

### Button cleanup iteration 2 :fire:

If you have any custom UI in your downstream that makes use of any of the following you want to read this:

classes:
- `.ld-btn`, `.ld-btn--full`, `.ld-btn--large`, `.ld-btn--small`, `.ld-btn--tiny`, `.ld-btn--square`, `.ld-btn--circle`, `.ld-btn--circle-small`, `.ld-btn--primary`, `.ld-btn--confirm`, `.ld-btn__extension`, `.ld-btn--tab`, `.ld-btn--tab-blocky-on-mobile`, `.ld-btn--default`, `.ld-btn--ghost`, `.ld-btn--link`, `.ld-btn--negative`, `.ld-btn--link-negative`, `.ld-btn--icon`, `.ld-btn[disabled]`, `.ld-btn--disabled`, `.ld-btn--in-progress`, `.ld-btn--loading`, `.ld-btn--loading-auto`, `.d-btn--numberdot`, `.ld-btn--github`, `.ld-btn--google`, `.ld-btn--facebook`, `.ld-btn--pagination`, `.ld-btn--overlay`, `.ld-btn--icon-only-small`, `.ld-btn--icon-only-large`, `.ld-btn--clean`, `.ld-modal__footer`, `.ld-btn-file`

SCSS variables:
- `$ld-btn-radius`, `$ld-btn-vertical-padding`, `$ld-btn-horizontal-padding`, `$ld-btn-padding`, `$ld-btn-padding--tiny`, `$ld-btn-padding--small`, `$ld-btn-padding--large`, `$ld-btn--primary-color`, `$ld-btn--primary-background`, `$ld-btn--primary-border`, `$ld-btn--primary-hover`, `$ld-btn--negative-color`, `$ld-btn--negative-background`, `$ld-btn--negative-border`, `$ld-btn--negative-hover`, `$ld-btn--link-color`, `$ld-btn--link-background`, `$ld-btn--link-hover`, `$ld-btn--default-color`, `$ld-btn--default-background`, `$ld-btn--default-border`, `$ld-btn--default-hover`

No longer existing button types:
- `Default` (li-button is the default button), `Tab`, `Square`, `Confirm`, `Tab Blocky on Mobile`, `Kill Radius`, `Text Left`, `Project Setup`, `Primary Dark`, `White`, `Border`, `Dropdown`

You are highly encouraged to refactor your markup / custom stylesheets to not use these things anymore. In order to ease that process, there is a file you can `@import` in your custom SCSS to get support for the mentioned classes and variables:
In the SCSS file you have configured as `CUSTOM_STYLE_PATH_BEFORE` or `CUSTOM_STYLE_PATH_AFTER` add this line at the top:

```sass
@import "~styles/backwards-compatibiliy/release-2021-11.scss";
```

This will define the removed classes and variables within your SCSS file tree. Your Sass files will compile again and your custom UI will most probably look just fine. From there on you can refactor your code and remove the `@import "~styles/backwards-compatibiliy/release-2021-11.scss";` after you are done. We will keep this file around for some time, but it will eventually get removed. If you have any questions about this, don't hesitate to contact us.

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4759)


## Other Changes

### Features

* Security: Support access token key rotation [livingdocs-server #4062 v157.2.0](https://github.com/livingdocsIO/livingdocs-server/pull/4062)
* Hugo: Use upload center and metadata forms for image uploads [livingdocs-editor #4677 v74.4.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4677)
* Introduce Project Secrets Storage [livingdocs-server #3974 v155.1.4](https://github.com/livingdocsIO/livingdocs-server/pull/3974)
* Show login connections in server admin [livingdocs-editor #4711](https://github.com/livingdocsIO/livingdocs-editor/pull/4711)

### Design

* Button Cleanup 1 [livingdocs-editor #4656](https://github.com/livingdocsIO/livingdocs-editor/pull/4656)
* Button Cleanup 2 [livingdocs-editor #4656](https://github.com/livingdocsIO/livingdocs-editor/pull/4759)
* Improve Embed and Twitter visuals [livingdocs-editor #4689](https://github.com/livingdocsIO/livingdocs-editor/pull/4689)
* Collaboration Cards spacing polishing [livingdocs-editor #4767](https://github.com/livingdocsIO/livingdocs-editor/pull/4767)
* Improvement/gray color palette [livingdocs-editor #4788 v74.3.3](https://github.com/livingdocsIO/livingdocs-editor/pull/4788)

### Improvements

* Indexing: Get rid of `Invalid index job` logs with custom indexes [livingdocs-server #3965](https://github.com/livingdocsIO/livingdocs-server/pull/3965)
* Allow task cards to open via middle-click in new tab [livingdocs-editor #4733](https://github.com/livingdocsIO/livingdocs-editor/pull/4733)
* Import: Within a reimport the design version can be updated [livingdocs-server #3957](https://github.com/livingdocsIO/livingdocs-server/pull/3957)
* Media Library: Support boolean flag=false / exists filters in metadata search [livingdocs-server #4012](https://github.com/livingdocsIO/livingdocs-server/pull/4012)
* Push Notifications: Add suport for segments in airship [livingdocs-server #3953](https://github.com/livingdocsIO/livingdocs-server/pull/3953)
* projectConfigCache: same-process invalidation on updates [livingdocs-server #4050](https://github.com/livingdocsIO/livingdocs-server/pull/4050)

### Bugfixes

* Editor
  * Fix line wrap behavior [livingdocs-editor #4705](https://github.com/livingdocsIO/livingdocs-editor/pull/4705)
  * Fix newline behavior [livingdocs-editor #4726](https://github.com/livingdocsIO/livingdocs-editor/pull/4726)
  * Change Toolbar max Offset to fix Overlapping Action Bar Issue [livingdocs-editor #4737](https://github.com/livingdocsIO/livingdocs-editor/pull/4737)
  * The Vue metadata plugin `li-form-select` handles undefined values the same way as the Angular plugins [livingdocs-editor #4742](https://github.com/livingdocsIO/livingdocs-editor/pull/4742)
  * Clipboard: Stop the clipboard drag event when deleting the last item from the clipboard [livingdocs-editor #4743](https://github.com/livingdocsIO/livingdocs-editor/pull/4743)
  * Fix Link Check in Toolbar [livingdocs-editor #4718](https://github.com/livingdocsIO/livingdocs-editor/pull/4718)
  * Fix "null" in links [livingdocs-editor #4814 v74.6.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4814)
* Comments
  * Jump to the comment if url is provided in the url [livingdocs-editor #4768](https://github.com/livingdocsIO/livingdocs-editor/pull/4768)
  * Merge local comment to remote thread [livingdocs-editor #4762](https://github.com/livingdocsIO/livingdocs-editor/pull/4762)
* Billing: Request the correct time range + get the current month [livingdocs-editor #4728](https://github.com/livingdocsIO/livingdocs-editor/pull/4728)
* Dashboards
  * Fix page and data record links [livingdocs-editor #4687](https://github.com/livingdocsIO/livingdocs-editor/pull/4687)
  * Filters: Update show/hide when items are added asynchronously [livingdocs-editor #4770](https://github.com/livingdocsIO/livingdocs-editor/pull/4770)
* Media (Library)
  * Only save document when new images has been added on content load [livingdocs-editor #4697](https://github.com/livingdocsIO/livingdocs-editor/pull/4697)
  * Select video after upload [livingdocs-editor #4715](https://github.com/livingdocsIO/livingdocs-editor/pull/4715)
  * Able to re-trigger upload after cancelling/reset upload [livingdocs-editor #4698](https://github.com/livingdocsIO/livingdocs-editor/pull/4698)
  * Fix not necessary request to `/[object Object]` in upload center [livingdocs-editor #4785](https://github.com/livingdocsIO/livingdocs-editor/pull/4785)
  * Fix the selection of an additional language in media library multilanguage [livingdocs-editor #4786](https://github.com/livingdocsIO/livingdocs-editor/pull/4786)
  * Remove component on failed/canceled upload [livingdocs-editor #4782](https://github.com/livingdocsIO/livingdocs-editor/pull/4782)
  * Improve design of additional language [livingdocs-editor #4793 v74.2.12](https://github.com/livingdocsIO/livingdocs-editor/pull/4793)
  * Fix transcoding state after video replace [livingdocs-editor #4792 v74.2.13](https://github.com/livingdocsIO/livingdocs-editor/pull/4792)
* Menu
  * Fix Lost Menu Entries on save [livingdocs-editor #4703](https://github.com/livingdocsIO/livingdocs-editor/pull/4703)
  * Fix Lost Menu Entries on move [livingdocs-editor #4720](https://github.com/livingdocsIO/livingdocs-editor/pull/4720)
  * Show unpublished document warning without refresh [livingdocs-editor #4811 v74.3.7](https://github.com/livingdocsIO/livingdocs-editor/pull/4811)
* Document Lists
  * Add default lister to only show published documents [livingdocs-editor #4693](https://github.com/livingdocsIO/livingdocs-editor/pull/4693)
  * Fixes multiple documents disappearing when removing a single document from a list [livingdocs-editor #4696](https://github.com/livingdocsIO/livingdocs-editor/pull/4696)
* Document Inbox: Prevent duplicate references from being added to an inbox [livingdocs-server #3956](https://github.com/livingdocsIO/livingdocs-server/pull/3956)
* Storage: Use correct day of the month for storage keys [livingdocs-server #3997](https://github.com/livingdocsIO/livingdocs-server/pull/3997)
* Images: Fix imagemagick upload with streams [livingdocs-server #4036](https://github.com/livingdocsIO/livingdocs-server/pull/4036)
* History: Several fixes with metadata restoring [livingdocs-editor #4797 v74.3.4](https://github.com/livingdocsIO/livingdocs-editor/pull/4797)
* Includes: Fix include w/ multiple services using vue components for UI [livingdocs-editor #4803 v74.3.8](https://github.com/livingdocsIO/livingdocs-editor/pull/4803)
* Invote Email: Fix project URL [livingdocs-server #3982 v157.2.1](https://github.com/livingdocsIO/livingdocs-server/pull/3982)


## Patches

### Livingdocs Server Patches
- [v157.2.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.3): fix: Fix backfilling of the content_type_id column on the document_publication_events table
- [v157.2.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.2): fix: Upgrade to pino v7

### Livingdocs Editor Patches
- [v74.4.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.9): fix(top banner): Max width mobile
- [v74.4.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.8): fix(document list): Correctly update internal state when dragging item out of list
- [v74.4.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.7): fix(multilist editor): use configured searchFilters for the document search
- [v74.4.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.6): fix(multilist editor): Update document inbox on remote after remove action
- [v74.4.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.5): fix(multilist editor): Improvements from PR feedback
- [v74.4.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.4): fix(user avatar): Firefox
- [v74.4.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.3): fix(collab card): Text selection
- [v74.4.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.2): fix: design improvements for document-list and soft-lock

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
