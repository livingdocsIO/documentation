---
type: release-notes
title: November 2021 Release
description: Release notes for release-2021-11
---

{{< release-header
  title="November 2021 Release"
  upcoming=false
  legacy=false
  current=true
  maintained=true
  branchHandle="release-2021-11"
>}}

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Newsletter

* Subscribe here: https://confirmsubscription.com/h/j/61B064416E79453D

## Webinar

### Features

* [Recording](https://us02web.zoom.us/rec/share/T59ekBnRxOoWtQPAX6vJTV8db8QmNkvmvcy3qBF0FYYtP_-cDgfSbbzKqSfRSIl7.X4BCYQcsWkeDfxkT) | PW: Lh0S9C$T
* [Documentation](https://docs.google.com/document/d/18A1WWlCnE7xanwSh5ADi8dgYanX0rwUzdY7Koi2Jnt4/edit?usp=sharing)

### Developers

* [Recording](https://us02web.zoom.us/rec/share/Oj7q86DWOCR0DGVlIuDImPwTuLz1bmYwPGg0ZDWFxILFtPtdYkFNXGBhr4nyN9lc.c9vQmi5TDjzhDUk3) | PW: zfuPUe+0
* [Slides](https://docs.google.com/presentation/d/1HdSc7Ut06hCyGGXzrrPdMer7wvF71pZJHm_yozrxTlU/edit#slide=id.g5d9a6eb16f_1_0)


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
  * [Documentation]({{< ref "../../../../reference-docs/project-config/content-types.md#document-inbox" >}})
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3911)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4661)


### Extended Text Formatting Toolbar

We added 3 new possibilities to select data for custom attributes in the text formattting toolbar
* Select a value from a list
* Select a document reference
* Text input

* [Documentation](https://docs.livingdocs.io/reference-docs/project-config/editor-settings/#text-formatting)
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

### Remove DocumentWriteModel Getters I :fire:

Some internal methods got removed. If you use any of the following methods, please rather use `documentWriteModel.metadata` directly.

- :fire: `documentWriteModel.metadata.setProperties(obj)` got removed. Please use `documentWriteModel.metadata.setProperty` for now.
- :fire: `documentWriteModel.metadata.serialize()` got removed. Please use `documentWriteModel.metadata.splittedSerialize()`
- :fire: `documentWriteModel.metadata.getEntity()` got removed. Please use `documentWriteModel.metadata.entity`

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4024)

### Remove DocumentWriteModel Getters II :fire:

- :fire: `documentWriteModel.document` got removed. Please use `documentWriteModel.documentEntity` instead
- :fire: `documentWriteModel.metadata` got removed. Please use `documentWriteModel.metadataModel` instead
- :fire: `documentWriteModel.revision` got removed. Please use `documentWriteModel.revisionEntity` instead

Instead of using higher level getters like `documentWriteModel.content` and `documentWriteModel.metadataContent`, you can use low level getters instead:
- documentModel.id
- documentModel.documentId
- documentModel.revisionId
- documentModel.projectId
- documentModel.channelId

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4011)

### Rename channelConfig to projectConfig :fire:

- 🔥 removed server config property `channelConfigs.enabled` - it has no effect anymore
- 🔥 removed server config `channelConfigs` - use `projectConfigs` instead

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4047)

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
@import "~styles/backwards-compatibility/release-2021-11";
```

This will define the removed classes and variables within your SCSS file tree. Your Sass files will compile again and your custom UI will most probably look just fine. From there on you can refactor your code and remove the `@import "~styles/backwards-compatibiliy/release-2021-11.scss";` after you are done. We will keep this file around for some time, but it will eventually get removed. If you have any questions about this, don't hesitate to contact us.

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4759)


## Deprecations

### Formatting Toolbar  - Custom Elements

`customElements[].placeholder` are deprecated. Please replace them with with `customElements[].attributes[]`

```js
// deprecated
customElements: [{
      label: 'icon',
      handle: 'customIcon',
      tagName: 'span',
      icon: 'format-color-highlight',
      attributes: [
        {name: 'class', value: 'custom-icon'}
      ],
      // deprecated: the placeholder attribute which will be filled with the inserted value
      placeholder: {name: 'data-input'}
}]

// new approach with attributes
customElements: [{
      label: 'icon',
      handle: 'customIcon',
      tagName: 'span',
      icon: 'format-color-highlight',
      attributes: [
        {name: 'class', value: 'custom-icon'},
        // add li-text attribute
        {
          handle: 'input',
          type: 'li-text',
          name: 'data-input'
        }
      ]
}]
```

References:
* [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4060)

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
- [v157.2.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.20): fix(force reset email): user emailed, delay removed
- [v157.2.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.19): fix(image-processing): Allow application/xml mimetype to support svg image uploads
- [v157.2.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.18): fix(document-relations): Do not throw an error when there are no relations
- [v157.2.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.17): test(metadata-plugins): Write more tests for metadata plugin lookups
- [v157.2.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.16): fix(duplicate-filter): Set fallback list length to 3
- [v157.2.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.15): chore(public-api): Fix shaky document import test
- [v157.2.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.14): fix: Fix typo in handle checks of documents and media library config
- [v157.2.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.13): fix(data-migration-run): use correct contentType argument name
- [v157.2.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.12): fix(media-library): Fix support for running the livingdocs server against postgres replicas
- [v157.2.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.11): fix(document-lists): Sort results by id
- [v157.2.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.10): fix: Support a `accessTokenCacheSize` config to increase the token cache size on heavy used servers
- [v157.2.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v157.2.9): return revision also in case metadata_id is null

### Livingdocs Editor Patches
- [v74.4.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.43): fix(navigation-toolbar): button positioning
- [v74.4.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.42): fix(hugoDrag): hugo metadata now is populated
- [v74.4.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.41): fix: upgrade framework to 21.1.7
- [v74.4.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.40): fix(document-list): Reorganise tests
- [v74.4.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.39): fix(dialogs): simplify outside click handling for dialogs opened through the dialogService
- [v74.4.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.38): fix(notificatins): Stacking
- [v74.4.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.37): fix(service start screen): Activity feed
- [v74.4.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.36): fix(dialog): don't close on click outside to not close dialogs opening other dialogs automatically
- [v74.4.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.35): fix: Fix pathname lookup to not fail
- [v74.4.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.34): fix(task card): ensure invisible a tag covering the card is correctly positioned
- [v74.4.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.33): fix(media source drop handler): Use correct target component
- [v74.4.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v74.4.32): fix error in defaultSelectService and defaultMultiSelectService

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
