---
title: release-2019-03
description: Release notes for release-2019-03
draft: true
---

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

# Repositories

This release consists of the following new versions of the `livingdocs-server` and the `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `v76.8.13`
`@livingdocs/editor` | `v35.36.29`

## Livingdocs Server
How to require the server in your package.json:
```json
"dependencies": {
  "@livingdocs/server": "v76.8.13",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-2019-03

### Livingdocs Server Patches
- [v76.8.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v76.8.13): fix: use local asset in the queue dashboard
- [v76.8.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v76.8.12): fix(search): resolve channel correctly
- [v76.8.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v76.8.11): fix: Work around alpine linux issue in droneci tagging
- [v76.8.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v76.8.8): resolve hugo author when dnd
- [v76.8.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v76.8.7): elasticsearch: Fix optional date filters in elasticsearch 6
- [v76.8.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v76.8.6): merge: fix json schema
- [v76.8.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v76.8.5): lock: store tab id
- [v76.8.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v76.8.4): push-notifications: add placeholder id mappings for local env conf
- [v76.8.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v76.8.3): config: do not camelize storage.config
- [v76.8.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v76.8.2): pin highlight.js to 9.14.2
- [v76.8.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v76.8.1): languages: index with custom lang handle
- [v76.8.0](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v76.8.0): initial version for release



## Livingdocs Editor
How to require the editor in your package.json:
```json
"dependencies": {
  "@livingdocs/editor": "v35.36.29",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-2019-03

### Livingdocs Editor Patches
- [v35.36.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.29): fix(print): Remove unneeded bottom bar CSS

Removes a workaround that is no longer needed. This fixes a display bug where the bottom preview image was covered by the print preview bottom bar.
- [v35.36.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.28): fix(dependencies): update livingdocs framework
- [v35.36.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.27): fix(print): Use document state notification for remote lock
- [v35.36.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.26): fix(print): Tweak print preview bottom bar

Make sure the print preview bottom bar fully covers the text counter it replaces.
- [v35.36.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.25): fix(cropping): correctly round the decimals
- [v35.36.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.24): fix: remove todo and retrigger semantic release
- [v35.36.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.23): fix(component-sidebar): Hide filtered components using ng-show

With `ng-show` the sidebar DOM structure remains the same regardless of the filter applied.
- [v35.36.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.22): fix(readOnly): robustify read only mode
- [v35.36.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.21): fix(lock): fix remove lock behavior
- [v35.36.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.20): refactor: improve naming and use helper function
- [v35.36.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.19): fix(lists): move instead of copy on DnD
- [v35.36.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.18): fix(eslint): remove unused import
- [v35.36.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.17): fix: Sanitize all user input on render to prevent script injection
- [v35.36.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.16): fix(queries): add filter by channel handle
- [v35.36.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.15): chore: Improve display of buildInfo
- [v35.36.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.14): fix(scrolling-in-lists): The scrolling on the lists view doesn't work for chrome 73 and firefox
- [v35.36.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.13): fix(selection-mode-btn): don't disable the selection mode btn in selection mode state
- [v35.36.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.12): chore: Fix eslint errors
- [v35.36.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.11): chore: Ignore updates of angular-ui-tree as it has a bug and not maintained anyways
- [v35.36.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.10): fix(lists-alphabetically): the sort is now alphabetically asc ordered
- [v35.36.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.9): fix(printModal): delete keys and add remove button
- [v35.36.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.8): fix(print): guard the access of publicationPreset if its undefined
- [v35.36.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.7): fix(prefill-component): Fixed the component prefill and metadata initial extraction

The component prefill and metadata initial extraction worked with isNew
on a document. This feature didn't work anymore and is removed now.
Instead there is a isNew parameter on the transition.
- [v35.36.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.6): fix(lists-sorted-alphabetically): Fixed that the lists sorted alphabetically

The lists are now sorted alphabetically case insensitive.
Before it was case sensitive.
- [v35.36.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.5): history: load more revisions with a load more button
- [v35.36.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.4): print: use presets to fill the modal with a prefered publication
- [v35.36.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.3): max width: Preparing for themeing
- [v35.36.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.2): do not delete document after transform errors
- [v35.36.1](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.1): Fix nzz soft lock issues
- [v35.36.0](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.36.0): initial version for release



# Highlights

## Recover Document :gift:

Sometimes it's possible that the editor comes into a conflict state. This can have different reasons. The most probable scenario is, that user 1 has a bad connection or works offline while another user is updating the document. When user 1 is back online and tries to save the document, he runs into a conflict.

User 1 will now be notified that the document has a conflict and get a link to recover the local document. If user 1 clicks on the recover link, a copy of his local document will be created.

* Related
  * [editor PR #2518](https://github.com/livingdocsIO/livingdocs-editor/pull/2518)
  * [editor PR #2477](https://github.com/livingdocsIO/livingdocs-editor/pull/2477)

## Custom Document Drag + Drop :gift:

The editor has some built in Drag & Drop implementations, to handle image, file and text drops onto a document. And It is possible to register your own drag & drop handlers.
Dropping objects over a dashboard is a separate subject.

* Related
  * [editor PR #2530](https://github.com/livingdocsIO/livingdocs-editor/pull/2530)
  * [documentation](https://upfrontio.gitbook.io/livingdocs/reference-documentation/editor/document-drag-drop#add-custom-drag-and-drop-handlers)

## Merge users :gift:

A project admin can now merge n users into 1 in the editor.

* Related
  * [editor PR #2555](https://github.com/livingdocsIO/livingdocs-editor/pull/2555)

## Remove editor reload and live updates in read-only mode :gift:

When you are switched to read-only mode, e.g. because another user is editing, then the screen
does not reload anymore and the position in the document stays as it is.
When you are in read-only mode, you also don't see live updates of other typing users anymore.

* Related
  * [editor PR #2464](https://github.com/livingdocsIO/livingdocs-editor/pull/2464)




# Breaking Changes :fire:

## Migrate the database

```sh
# run grunt migrate to update to the newest database scheme
#   112-add-event-type-content-type-view-after-document-creation-updated.js
#   113-add-event-type-content-type-document-creation-disabled-updated.js
#   114-alter-user-config-value.js
livingdocs-server migrate up
```

## Removed functions

* Removed `grunt repair-teasers` task :fire:
* Removed `getExternalList` option on `registerListHooks`

* Related
  * [server PR #2250](https://github.com/livingdocsIO/livingdocs-editor/pull/2250)



# Other Changes

* UI/UX
  * Updated look of delete confirmation [livingdocs-editor #2536](https://github.com/livingdocsIO/livingdocs-editor/pull/2536) :gift:
  * Improve button styles on dark backgrounds [livingdocs-editor #2496](https://github.com/livingdocsIO/livingdocs-editor/pull/2496) :gift:
  * UI improvements for Static Project Settings [livingdocs-editor #2567](https://github.com/livingdocsIO/livingdocs-editor/pull/2567) :gift:
  * (Service only) Start page design rework [livingdocs-editor #2520](https://github.com/livingdocsIO/livingdocs-editor/pull/2520) :gift:
* Features
  * Support channel config v2 for static files [livingdocs-server #2282](https://github.com/livingdocsIO/livingdocs-server/pull/2282) :gift:
* Admin Tasks
  * New task to create admin user (`livingdocs-server create-admin-user`) [livingdocs-server #2288](https://github.com/livingdocsIO/livingdocs-server/pull/2288) :gift:
  * New task to create admin users (`livingdocs-server create-admin-users`) [livingdocs-server #2259](https://github.com/livingdocsIO/livingdocs-server/pull/2259) :gift:
  * New task to add a design (`livingdocs-server add-design`) [livingdocs-server #2259](https://github.com/livingdocsIO/livingdocs-server/pull/2259) :gift:
  * New task to flush redis db (`livingdocs-server redis-flushdb`) [livingdocs-server #2279](https://github.com/livingdocsIO/livingdocs-server/pull/2279) :gift:
* Improvements
  * Add density to image convert config [livingdocs-server #2303](https://github.com/livingdocsIO/livingdocs-server/pull/2303) :wrench:
  * Deep camelize ignore [livingdocs-server #2316](https://github.com/livingdocsIO/livingdocs-server/pull/2316) :wrench:
  * Improve config loading [livingdocs-server #2301](https://github.com/livingdocsIO/livingdocs-server/pull/2301) :wrench:
  * Promise support in lib cli [livingdocs-server #2249](https://github.com/livingdocsIO/livingdocs-server/pull/2249) :wrench:
  * Provide project id and channel id to list update hook [livingdocs-server #2260](https://github.com/livingdocsIO/livingdocs-server/pull/2260) :wrench:
  * Map Metadata from Default Content [livingdocs-editor #2516](https://github.com/livingdocsIO/livingdocs-editor/pull/2516) :wrench:
  * Improve cypress helpers [livingdocs-editor #2503](https://github.com/livingdocsIO/livingdocs-editor/pull/2503) :wrench:
* Bugfixes
  * fix history mode [livingdocs-editor #2544](https://github.com/livingdocsIO/livingdocs-editor/pull/2544) :beetle:
  * fix sorting after a search on the list tool [livingdocs-editor #2515](https://github.com/livingdocsIO/livingdocs-editor/pull/2515) :beetle:
  * fix soft lock for multiple tabs of same user [livingdocs-editor #2573](https://github.com/livingdocsIO/livingdocs-editor/pull/2573) :beetle:
  * fix async ranges after regaining focus [livingdocs-editor #2558](https://github.com/livingdocsIO/livingdocs-editor/pull/2558) :beetle:
  * fix request id to use a string in the logs [livingdocs-editor #2543](https://github.com/livingdocsIO/livingdocs-editor/pull/2543) :beetle:
  * fix copy modal [livingdocs-editor #2507](https://github.com/livingdocsIO/livingdocs-editor/pull/2507) :beetle:
  * fix print publication info [livingdocs-editor #2510](https://github.com/livingdocsIO/livingdocs-editor/pull/2510) :beetle:
  * fix language handle conflict [livingdocs-server #2308](https://github.com/livingdocsIO/livingdocs-server/pull/2308) :beetle:
  * fix config loading for downstreams [livingdocs-server #2311](https://github.com/livingdocsIO/livingdocs-server/pull/2311) :beetle:
  * fix revision.user.id presence in indexer [livingdocs-server #2305](https://github.com/livingdocsIO/livingdocs-server/pull/2305) :beetle:
  * fix object to pick properties [livingdocs-server #2248](https://github.com/livingdocsIO/livingdocs-server/pull/2248) :beetle:
  * remove `assert-node-version.js` from preinstall script as it's causing issues [livingdocs-server #2277](https://github.com/livingdocsIO/livingdocs-server/pull/2277) :beetle:
  * add documentId to export [livingdocs-server #2294](https://github.com/livingdocsIO/livingdocs-server/pull/2294) :beetle:
* DAM (digital asset management) for Livingdocs Service
  * DAM/Images API [livingdocs-server #2156](https://github.com/livingdocsIO/livingdocs-server/pull/2156) :gift:
  * use thumbnails for Media Index [livingdocs-editor #2550](https://github.com/livingdocsIO/livingdocs-editor/pull/2550) :gift:
  * Design Asset Management Responsiveness [livingdocs-editor #2547](https://github.com/livingdocsIO/livingdocs-editor/pull/2547) :gift:
  * hide `upload Origin` in detail view of an image [livingdocs-editor #2540](https://github.com/livingdocsIO/livingdocs-editor/pull/2540) :gift:
  * configure default required imageService when DAM is disabled   [livingdocs-editor #2534](https://github.com/livingdocsIO/livingdocs-editor/pull/2534) :gift:
  * fix: edit buttons work in FF; [livingdocs-editor #2532](https://github.com/livingdocsIO/livingdocs-editor/pull/2532) :beetle:
  * fix thumbails in DAM [livingdocs-editor #2562](https://github.com/livingdocsIO/livingdocs-editor/pull/2562) :beetle:
  * fix media library jumping when selecting image [livingdocs-editor #2527](https://github.com/livingdocsIO/livingdocs-editor/pull/2527) :beetle:
  * fix: the cross button resets the search in the image view; [livingdocs-editor #2524](https://github.com/livingdocsIO/livingdocs-editor/pull/2524) :beetle:

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
