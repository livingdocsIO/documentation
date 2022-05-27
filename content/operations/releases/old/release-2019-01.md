---
type: release-notes
title: January 2019 Release
description: Release notes for release-2019-01
hideSectionTeaser: true
excludeFromSearch: true
---

{{< release-header 
  title="January 2019 Release"
  upcoming=false
  legacy=true
  current=false
  maintained=false
  branchHandle="release-2019-01"
>}}

**Attention:** If you skipped one or more release, please also check the release-notes of the skipped ones.

# Repositories

This release consists of the following new versions of the `livingdocs-server` and the `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `v75.17.12`
`@livingdocs/editor` | `v35.24.24`

## Livingdocs Server
How to require the server in your package.json:
```json
"dependencies": {
  "@livingdocs/server": "v75.17.12",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-2019-01

### Livingdocs Server Patches
- [v75.17.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.17.12): fix: trigger rebuild
- [v75.17.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.17.11): chore(elasticsearch): Remove unnecessary rest argument in addDateFilter
- [v75.17.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.17.10): fix(lock): store tab id
- [v75.17.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.17.9): fix: pin highlight.js to 9.14.2
- [v75.17.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.17.8): fix(add-density-config): add the density to image convert config

Change the convert config to an array and add the density for a convert object
Update the simple config to the extended config

Removed the old coffee script and moved the test to the same location as in the master
- [v75.17.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.17.7): fix(s3): Fix the s3 configs to support a custom http agent
- [v75.17.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.17.6): fix(print-api): Add documentId to export fixed copySourceId
- [v75.17.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.17.5): fix: Remove `assert-node-version.js` from postinstall script as it's causing issues. We'll need to show a warning on server start instead of doing it on install.
- [v75.17.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.17.3): fix(logging): Use the correct object to pick properties
- [v75.17.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.17.2): indexing: Fix query by epochTime in indexing api
- [v75.17.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.17.1): prometheus: Properly listen to event on metricsServer.once
- [v75.17.0](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.17.0): document-indexing: Fix search-index task



## Livingdocs Editor
How to require the editor in your package.json:
```json
"dependencies": {
  "@livingdocs/editor": "v35.24.24",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-2019-01

### Livingdocs Editor Patches
- [v35.24.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.24): fix(print): Tweak print preview bottom bar

Make sure the print preview bottom bar fully covers the text counter it replaces.
- [v35.24.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.23): fix(component-sidebar): Hide filtered components using ng-show

With `ng-show` the sidebar DOM structure remains the same regardless of the filter applied.
- [v35.24.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.22): fix: Sanitize all user input on render to prevent script injection
- [v35.24.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.21): fix(selection-mode-btn): don't disable the selection mode btn in selection mode state
- [v35.24.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.20): fix(scrolling-in-lists): The scrolling on the lists view doesn't work for chrome 73 and firefox
- [v35.24.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.19): fix(lists-alphabetically): the sort is now alphabetically asc
- [v35.24.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.17): fix(lists-sorted-alphabetically): Fixed that the lists sorted alphabetically

The lists are now sorted alphabetically case insensitive.
Before it was case sensitive.
- [v35.24.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.16): fix(prefill-component): Fixed the component prefill and metadata initial extraction

The component prefill and metadata initial extraction worked with isNew
on a document. This feature didn't work anymore and is removed now.
Instead there is a isNew parameter on the transition.
- [v35.24.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.15): fix: improve logging + remove deletion of article after an error
- [v35.24.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.14): chore(lock): implement feedback
- [v35.24.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.13): fix(history): fix highlight for substates
- [v35.24.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.11): fix(project-settings): fix view and form state for static config
- [v35.24.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.10): fix(printPreview): fix bug causing incorrect preview sizing
- [v35.24.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.9): fix(package): pin highlight.js to 9.14.2

The latest version `9.15.1` is breaking the `npm install` due to a
missing build file. Therefore we are pinning it to `9.14.2` with which
the build is working again properly.
- [v35.24.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.8): fix(lock): allow larger minute values
- [v35.24.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.7): fix(print-metadata): check for department.name instead of id
- [v35.24.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.6): fix(printMetadata): add in-code comment
- [v35.24.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.5): fix(document-lists): sort lists alphabetically
- [v35.24.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.4): fix(metadata-mapper): make sure document reference is set on updater
- [v35.24.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.3): fix: improve softlock button styles
- [v35.24.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.2): fix: opposite logic for documentCreationDisabled used
- [v35.24.1](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.1): package: update nanoid to version 2.0.1
- [v35.24.0](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v35.24.0): images: improve image url validation



# Highlights

## Do not disturb mode :gift:

With a soft lock a user can indicate that she wants the document for herself and not to be disturbed by other editors taking over. Other editors are still able to take over (thus soft lock) but they need to confirm that they want to overwrite the soft lock. A soft lock has a configurable timeout after which it expires. If the user that requested the soft lock leaves the document, the soft lock will be automatically released. Same goes for closing of the browser.

Once the soft lock is enabled for a content-type (e.g. articles) a "Lock" button will be visible in the top toolbar.

To enable the do not disturb mode, add this code snippet to your metadata config:

```js
{
  handle: 'documentSoftLock',
  type: 'li-document-soft-lock',
  config: {
    lockTimeout: 5 // change to your desired timeout in minutes
  }
}
```

* Related Pull Requests
  * [editor PR #2455](https://github.com/livingdocsIO/livingdocs-editor/pull/2455)
  * [documentation PR #203](https://github.com/livingdocsIO/livingdocs/pull/203)



## Advanced Component Groups :gift:

In the editor, you can now search for components, expand and collapse groups.

To enable the advanced component groups, you have to add this configuration to the editor.

```js
app: {
    editor: {
      insertPanel: {
        useAdvancedComponentGroups: true
      }
    }
}
```

* Related Pull Requests
  * [editor PR #2415](https://github.com/livingdocsIO/livingdocs-editor/pull/2415)


## Document Tree in Split Panel :gift:

Introduce a structural view of the document (tree view) in the split panel that allows a user to navigate the document by its component and container structure.

* Related Pull Requests
  * [livingdocs-editor #2417](https://github.com/livingdocsIO/livingdocs-editor/pull/2417)


# Breaking Changes :fire:

## Migrate the database

```sh
# run livingdocs-server migrate up to update to the newest database scheme
# migration - 112-add-event-type-content-type-view-after-document-creation-updated.js
#   add event ContentTypeViewAfterDocumentCreationUpdated to the stream_events_types table
# migration - 113-add-event-type-content-type-document-creation-disabled-updated.js
#   add event ContentTypeDocumentCreationDisabledUpdated to the stream_events_types table
livingdocs-server migrate up
```


# Other Changes

* Features
  * Visible
    * Show search result count in footer of the editor dashboard [livingdocs-editor #2480](https://github.com/livingdocsIO/livingdocs-editor/pull/2480) [livingdocs-server #2241](https://github.com/livingdocsIO/livingdocs-server/pull/2241) :gift:
    * Option to set target in menu [livingdocs-editor #2453](https://github.com/livingdocsIO/livingdocs-editor/pull/2453) [livingdocs-server #2223](https://github.com/livingdocsIO/livingdocs-server/pull/2223) :gift:
  * New configs options
    * Add option to disable image upload [livingdocs-editor #2466](https://github.com/livingdocsIO/livingdocs-editor/pull/2466) :gift:
    * Add option to go to publish screen after document creation [livingdocs-server #2221](https://github.com/livingdocsIO/livingdocs-server/pull/2221) [livingdocs-editor #2451](https://github.com/livingdocsIO/livingdocs-editor/pull/2451) :gift:
    * Add option `documentCreationDisabled` to disallow creating new documents of a contentType in the editor [livingdocs-server #2220](https://github.com/livingdocsIO/livingdocs-server/pull/2220) [livingdocs-editor #2448](https://github.com/livingdocsIO/livingdocs-editor/pull/2448) :gift:
    * Add option `notContentType` to control search filter [livingdocs-editor #2439](https://github.com/livingdocsIO/livingdocs-editor/pull/2439) [livingdocs-server #2210](https://github.com/livingdocsIO/livingdocs-server/pull/2210) :gift:
    * Push Notifications: add support for ethinking as provider [livingdocs-server #2178](https://github.com/livingdocsIO/livingdocs-server/pull/2178) :gift:
* Improvements
  * Improve read only mode [livingdocs-editor #2462](https://github.com/livingdocsIO/livingdocs-editor/pull/2462) :gift:
  * Improve login screen error messages [livingdocs-editor #2430](https://github.com/livingdocsIO/livingdocs-editor/pull/2430) :gift:
  * Enable character count for print mode [livingdocs-editor #2426](https://github.com/livingdocsIO/livingdocs-editor/pull/2426) :gift:
* Bugfixes
  * Comment fixes
    * [livingdocs-editor #2456](https://github.com/livingdocsIO/livingdocs-editor/pull/2456) :beetle:
    * [livingdocs-editor #2446](https://github.com/livingdocsIO/livingdocs-editor/pull/2446) :beetle:
  * fix stacked Iframe scrolling [livingdocs-editor #2454](https://github.com/livingdocsIO/livingdocs-editor/pull/2454) :beetle:
  * Do not add default content to a copied component [livingdocs-editor #2443](https://github.com/livingdocsIO/livingdocs-editor/pull/2443) :beetle:
  * Fix shortcuts inadvertently firing in the metadata screen [livingdocs-editor #2421](https://github.com/livingdocsIO/livingdocs-editor/pull/2421) :beetle:
  * Metadata title is empty on publish screen of a page [livingdocs-editor #2419](https://github.com/livingdocsIO/livingdocs-editor/pull/2419) :beetle:
  * fix regular->print copy [livingdocs-editor #2385](https://github.com/livingdocsIO/livingdocs-editor/pull/2385) :beetle:
* Chore
  * Migrate DocumentVersionFetcher to javascript and simplify the query [livingdocs-server #2181](https://github.com/livingdocsIO/livingdocs-server/pull/2181) :wrench:
  * Fix document indexer [livingdocs-server #2173](https://github.com/livingdocsIO/livingdocs-server/pull/2173) :wrench:
  * Improve IP logging [livingdocs-server #2235](https://github.com/livingdocsIO/livingdocs-server/pull/2235) :wrench:
  * fix(nanoid): replace nanoid with generate [livingdocs-editor #2405](https://github.com/livingdocsIO/livingdocs-editor/pull/2405) :wrench:
  * Fix query by epochTime in indexing api [livingdocs-server #2244](https://github.com/livingdocsIO/livingdocs-server/pull/2244) :wrench:
  * Properly listen to event on metricsServer.once [livingdocs-server #2242](https://github.com/livingdocsIO/livingdocs-server/pull/2242) :wrench:
  * Respect `behaveAsLiImage` property for custom images [livingdocs-editor #2411](https://github.com/livingdocsIO/livingdocs-editor/pull/2411) [livingdocs-server #2166](https://github.com/livingdocsIO/livingdocs-server/pull/2166) :wrench:
* Service
  * Analytics for Signup [livingdocs-editor #2461](https://github.com/livingdocsIO/livingdocs-editor/pull/2461) :gift:


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
