---
title: release-2021-11
description: Release notes for release-2021-11
excludeFromSearch: true
---
* :new: Fix small issues: Single-line tooltip width, hide toolbar for archived, close dialog on outside click [livingdocs-editor #4810 v74.3.11](https://github.com/livingdocsIO/livingdocs-editor/pull/4810) :gift:
* :new: Fix small issues: Single-line tooltip width, hide toolbar for archived, close dialog on outside click [livingdocs-editor #4810 v74.3.10](https://github.com/livingdocsIO/livingdocs-editor/pull/4810) :gift:
* :new: Remove Deprecation Messages in Workspace (metadataUpdater) [livingdocs-editor #4807 v74.3.9](https://github.com/livingdocsIO/livingdocs-editor/pull/4807) :gift:
* :new: Includes: Fix include w/ multiple services using vue components for UI [livingdocs-editor #4803 v74.3.8](https://github.com/livingdocsIO/livingdocs-editor/pull/4803) :gift:
* :new: fix(menus): Show unpublished document warning without refresh [livingdocs-editor #4811 v74.3.7](https://github.com/livingdocsIO/livingdocs-editor/pull/4811) :gift:
* :new: reset initial crop with setImage [livingdocs-editor #4805 v74.3.6](https://github.com/livingdocsIO/livingdocs-editor/pull/4805) :gift:
* :new: Disable debug mode in local environment [livingdocs-editor #4809 v74.3.5](https://github.com/livingdocsIO/livingdocs-editor/pull/4809) :gift:
* :new: Fix restore Metadata [livingdocs-editor #4797 v74.3.4](https://github.com/livingdocsIO/livingdocs-editor/pull/4797) :gift:
* :new: Improvement/gray color palette [livingdocs-editor #4788 v74.3.3](https://github.com/livingdocsIO/livingdocs-editor/pull/4788) :gift:
* :new: fix/toolbar meta and filters [livingdocs-editor #4798 v74.3.2](https://github.com/livingdocsIO/livingdocs-editor/pull/4798) :gift:
* :new: add basepath to v2 design [livingdocs-server #4051 v157.0.1](https://github.com/livingdocsIO/livingdocs-server/pull/4051) :gift:
* :new: Make whole “Link document” button clickable [livingdocs-editor #4747 v74.3.1](https://github.com/livingdocsIO/livingdocs-editor/pull/4747) :gift:
* :new: Multi-Language Data Records [livingdocs-server #4046 v157.0.0](https://github.com/livingdocsIO/livingdocs-server/pull/4046) :gift:
* :new: Multilanguage Data Records [livingdocs-editor #4761 v74.3.0](https://github.com/livingdocsIO/livingdocs-editor/pull/4761) :gift:
* :new: Media Library: use a dialog for media library selection [livingdocs-editor #4791 v74.2.15](https://github.com/livingdocsIO/livingdocs-editor/pull/4791) :gift:
* :new: Media Library: Fix transcoding state after video replace [livingdocs-editor #4792 v74.2.13](https://github.com/livingdocsIO/livingdocs-editor/pull/4792) :gift:
* :new: Improvement/multilanguage metadata [livingdocs-editor #4793 v74.2.12](https://github.com/livingdocsIO/livingdocs-editor/pull/4793) :gift:

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

### Project Secrets

TODO@marcbachmann / @gabrielhase: Add description and documentation

* References
  * [Documentation](TODO)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3974)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4766)

### Metadata Translations for Data Records

We introduce metadata translations for Data Records. The behavior and look is the same as the metadata translations for the Media Library.

TODO@DaRaFF: add a screenshot / update link to the doc

* References
  * [Documentation](TODO)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4761)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/????)

### Multilist Editor

TODO@romankaravia: Add description and documentation

* References
  * [Documentation](TODO)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4760)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/????)


### Document Inbox

TODO: Add description and documentation

* References
  * [Documentation](TODO)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3911)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4661)





## Breaking Changes :fire:

### Migrate the database

TODO: add migrations

- Expected duration?
- Possible data losses?
- Is it a simple migration? (fast/easy downgradable)

```sh
# run grunt migrate to update to the newest database scheme
# migration - 111-add-comments-table.js
#   create comments table + add events to the stream_events_types table
livingdocs-server migrate up
```

### Remove Deprecated Editor Config :fire:

- 🔥 remove deprecated editor config `hugo.assetHost` - use server config `hugo.assetHost` instead
- 🔥 remove deprecated editor config `app.imageService` - use server config `documents.selectedImageService` instead

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4691)

### Remove DocumentModel Getters :fire:

Some internal methods got removed. If you use any of the following methods, please rather use `documentWriteModel.metadata` directly.

- `documentWriteModel.metadata.setProperties(obj)` got removed. Please use `.setProperty` for now.
- `documentWriteModel.metadata.serialize()` got removed. Please use `.splittedSerialize()`
- `documentWriteModel.metadata.getEntity()` got removed. Please use `documentWriteModel.metadata.entity`

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4024)

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


## Deprecations




## APIs :gift:




## Internal Changes




## Other Changes

### Features

* Show login connections in server admin [livingdocs-editor #4711](https://github.com/livingdocsIO/livingdocs-editor/pull/4711) :gift:

### Design

* Button Cleanup 1 [livingdocs-editor #4656](https://github.com/livingdocsIO/livingdocs-editor/pull/4656) :gift:
* Button Cleanup 2 [livingdocs-editor #4656](https://github.com/livingdocsIO/livingdocs-editor/pull/4759) :gift:
* Improve Embed and Twitter visuals [livingdocs-editor #4689](https://github.com/livingdocsIO/livingdocs-editor/pull/4689) :gift:
* Collaboration Cards spacing polishing [livingdocs-editor #4767](https://github.com/livingdocsIO/livingdocs-editor/pull/4767) :gift:

### Improvements

* Indexing: Get rid of `Invalid index job` logs with custom indexes [livingdocs-server #3965](https://github.com/livingdocsIO/livingdocs-server/pull/3965) :gift:
* Allow task cards to open via middle-click in new tab [livingdocs-editor #4733](https://github.com/livingdocsIO/livingdocs-editor/pull/4733) :gift:
* Import: Within a reimport the design version can be updated [livingdocs-server #3957](https://github.com/livingdocsIO/livingdocs-server/pull/3957) :gift:
* Media Library: Support boolean flag=false / exists filters in metadata search [livingdocs-server #4012](https://github.com/livingdocsIO/livingdocs-server/pull/4012) :gift:
* Push Notifications: Add suport for segments in airship [livingdocs-server #3953](https://github.com/livingdocsIO/livingdocs-server/pull/3953) :gift:
* projectConfigCache: same-process invalidation on updates [livingdocs-server #4050](https://github.com/livingdocsIO/livingdocs-server/pull/4050) :gift:

### Bugfixes

* Editor
  * Fix line wrap behavior [livingdocs-editor #4705](https://github.com/livingdocsIO/livingdocs-editor/pull/4705) :beetle:
  * Fix newline behavior [livingdocs-editor #4726](https://github.com/livingdocsIO/livingdocs-editor/pull/4726) :beetle:
  * Change Toolbar max Offset to fix Overlapping Action Bar Issue [livingdocs-editor #4737](https://github.com/livingdocsIO/livingdocs-editor/pull/4737) :beetle:
  * The Vue metadata plugin `li-form-select` handles undefined values the same way as the Angular plugins [livingdocs-editor #4742](https://github.com/livingdocsIO/livingdocs-editor/pull/4742) :beetle:
  * Clipboard: Stop the clipboard drag event when deleting the last item from the clipboard [livingdocs-editor #4743](https://github.com/livingdocsIO/livingdocs-editor/pull/4743) :beetle:
  * Fix Link Check in Toolbar [livingdocs-editor #4718](https://github.com/livingdocsIO/livingdocs-editor/pull/4718) :beetle:
* Comments
  * Jump to the comment if url is provided in the url [livingdocs-editor #4768](https://github.com/livingdocsIO/livingdocs-editor/pull/4768) :beetle:
  * Merge local comment to remote thread [livingdocs-editor #4762](https://github.com/livingdocsIO/livingdocs-editor/pull/4762) :beetle:
* Billing: Request the correct time range + get the current month [livingdocs-editor #4728](https://github.com/livingdocsIO/livingdocs-editor/pull/4728) :beetle:
* Dashboards
  * Fix page and data record links [livingdocs-editor #4687](https://github.com/livingdocsIO/livingdocs-editor/pull/4687) :beetle:
  * Filters: Update show/hide when items are added asynchronously [livingdocs-editor #4770](https://github.com/livingdocsIO/livingdocs-editor/pull/4770) :beetle:
* Media (Library)
  * Only save document when new images has been added on content load [livingdocs-editor #4697](https://github.com/livingdocsIO/livingdocs-editor/pull/4697) :beetle:
  * Select video after upload [livingdocs-editor #4715](https://github.com/livingdocsIO/livingdocs-editor/pull/4715) :beetle:
  * Able to re-trigger upload after cancelling/reset upload [livingdocs-editor #4698](https://github.com/livingdocsIO/livingdocs-editor/pull/4698) :beetle:
  * Fix not necessary request to `/[object Object]` in upload center [livingdocs-editor #4785](https://github.com/livingdocsIO/livingdocs-editor/pull/4785) :beetle:
  * Fix the selection of an additional language in media library multilanguage [livingdocs-editor #4786](https://github.com/livingdocsIO/livingdocs-editor/pull/4786) :beetle:
  * Remove component on failed/canceled upload [livingdocs-editor #4782](https://github.com/livingdocsIO/livingdocs-editor/pull/4782) :beetle:
  * Improve design of additional language [livingdocs-editor #4793 v74.2.12](https://github.com/livingdocsIO/livingdocs-editor/pull/4793) :gift:
* Menu
  * Fix Lost Menu Entries on save [livingdocs-editor #4703](https://github.com/livingdocsIO/livingdocs-editor/pull/4703) :beetle:
:beetle:
  * Fix Lost Menu Entries on move [livingdocs-editor #4720](https://github.com/livingdocsIO/livingdocs-editor/pull/4720) :beetle:
* Document Lists
  * Add default lister to only show published documents [livingdocs-editor #4693](https://github.com/livingdocsIO/livingdocs-editor/pull/4693)
  * Fixes multiple documents disappearing when removing a single document from a list [livingdocs-editor #4696](https://github.com/livingdocsIO/livingdocs-editor/pull/4696) :beetle:
* Document Inbox: Prevent duplicate references from being added to an inbox [livingdocs-server #3956](https://github.com/livingdocsIO/livingdocs-server/pull/3956) :beetle:
* Storage: Use correct day of the month for storage keys [livingdocs-server #3997](https://github.com/livingdocsIO/livingdocs-server/pull/3997) :beetle:
* Images: Fix imagemagick upload with streams [livingdocs-server #4036](https://github.com/livingdocsIO/livingdocs-server/pull/4036) :beetle:



## Patches

## Livingdocs Server Patches
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v??.?.?): text

## Livingdocs Editor Patches
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v??.?.?): text

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
