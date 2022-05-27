---
type: release-notes
title: February 2020 Release
description: Release notes for release-2020-02
hideSectionTeaser: true
excludeFromSearch: true
---

{{< release-header 
  title="February 2020 Release"
  upcoming=false
  legacy=true
  current=false
  maintained=false
  branchHandle="release-2020-02"
>}}

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

# Newsletter

* Newsletter: [release-2020-02](https://livingdocsag.createsend.com/t/ViewEmail/j/30A473BB76A310C32540EF23F30FEDED/C67FD2F38AC4859C)
* Subscribe here: https://confirmsubscription.com/h/j/61B064416E79453D

# Repositories

This release consists of the following new versions of the `livingdocs-server` and the `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `release-2020-02`
`@livingdocs/editor` | `release-2020-02`

## Livingdocs Server
How to require the server in your package.json:
```json
"dependencies": {
  "@livingdocs/server": "release-2020-02",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-2020-02

### Livingdocs Server Patches
- [v93.2.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.21): fix(impersonify): adapt to createAccessTokenV2
- [v93.2.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.20): fix: provoke tag and build artifacts
- [v93.2.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.19): fix: Upgrade to node 12
- [v93.2.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.18): fix(imatrics): make v1 backward compatible
- [v93.2.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.17): fix(imatrics): commit for tag
- [v93.2.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.16): chore(lint): indexing config
- [v93.2.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.15): fix(document-search): correctly return the promise
- [v93.2.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.14): fix(mutex): Only stop the indexer, when it actually was running
- [v93.2.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.13): fix(hugo): pass projectHandle to transform
- [v93.2.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.12): fix: Fix a rebase issue that resulted in a wrong require
- [v93.2.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.11): fix(setupProjects): auto-update design versions
- [v93.2.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.10): test: Fix an inconsistent test in the registration api
- [v93.2.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.9): fix: Use package-lock.json file to generate the shrinkwrap to fix the optional dependencies
- [v93.2.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.8): fix(includes): dont require preview
- [v93.2.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.7): fix(includes): actually validate context
- [v93.2.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.6): hugo: pass metadata on image upload
- [v93.2.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.5): user-api: add valid_from and valid_to to the editable user properties
- [v93.2.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.4): seeding-import: add default to groupmembership validation
- [v93.2.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.3): change-history: improve query
- [v93.2.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.2): migrations: Mutate the migration.version when using the apis, so multiple calls don't lock each other
- [v93.2.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.1): group-seeding: correctly push group policies
- [v93.2.0](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v93.2.0): create new release-2020-02



## Livingdocs Editor
How to require the editor in your package.json:
```json
"dependencies": {
  "@livingdocs/editor": "release-2020-02",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-2020-02

### Livingdocs Editor Patches
- [v44.4.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.34): fix(resolve-conflicts): check only on content, document.version and userId
- [v44.4.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.33): test(conflict): add tests
- [v44.4.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.32): fix(framework): upgrade framework 13.2.7 to 13.2.8
- [v44.4.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.31): chore: disable parts of the CI
- [v44.4.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.30): fix(collaboration): when a expired softlock is in the metadata
- [v44.4.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.29): fix(editor): pass editableConfig to framework again
- [v44.4.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.28): fix(impersonification): fix setting of token
- [v44.4.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.27): fix(publish-screen): indicate unpublished changes
- [v44.4.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.26): fix(date-picker): never set null when date reset
- [v44.4.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.25): refactor(livingdoc): do not pass editable config anymore
- [v44.4.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.24): fix(image-crop): Reset originalWidth/Height on upload

Fixes: An uploaded image might use the wrong dimensions of a previously selected image when calculating crop.
- [v44.4.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.23): fix: update framework to 13.2.7
- [v44.4.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.22): fix(image): take processedUrl from image service instead of originalUrl for image cropping
- [v44.4.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.21): fix(project-setup): guard against undef props
- [v44.4.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.20): comment(config): add links to list unicode characters
- [v44.4.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.19): fix: iframe scan regex
- [v44.4.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.18): chore: revert resetting localstorage
- [v44.4.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.17): fix: Use package-lock.json file to generate the shrinkwrap to fix the optional dependencies
- [v44.4.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.16): fix(iframe-api): pass interactive false
- [v44.4.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.15): fix: iframe behavior in real-time
- [v44.4.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.14): fix(redirect): correctly redirect with a destination
- [v44.4.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.13): editor: respect srcsets configs again
- [v44.4.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.12): public-api-docs: add design endpoint documentation
- [v44.4.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.11): filters: don't do an extra query on resetting filters
- [v44.4.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.10): icons: re-add timetable icon
- [v44.4.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.9): includes: switch from get to post request
- [v44.4.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.8): dependencies: exactly match sortable versions
- [v44.4.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v44.4.7): pusher: don't emit pusher event during init



# Highlights

## Search API for Publications :tada:

The new publication search API allows customers to search and filter in the set of published documents. You can run your frontend search from it and use it to fetch documents for automated lists such as category lists or feed provider (SDA, DPA) lists. You can also configure custom sort dates as well as scheduled publishing, i.e. embargo dates for your content.

References:
  * [Public API Documentation (under "search Publications")](https://edit.livingdocs.io/public-api)
  * [Documentation](https://docs.livingdocs.io/reference-documentation/server/publication-index)
  * [server PR #2695](https://github.com/livingdocsIO/livingdocs-server/pull/2695)

## Real Time Activity Log on Publish Screen :tada:

The sidebar of the publish screen now receives realtime updates of the document (work status of other users).

![someone-else-editing-while-in-publish](https://user-images.githubusercontent.com/39759830/72153230-9a576900-33ad-11ea-99e2-6fc772c37288.gif)

References:
  * [editor PR #3174](https://github.com/livingdocsIO/livingdocs-editor/pull/3174)


## Login into a Specific Project :tada:

There are 2 new improvements:
- After a login the editor routes the user to the last opened project.
- It's now possible to login into a specific project with `<your-editor-url>/login/:projectHandle`

References:
  * [editor PR #3085](https://github.com/livingdocsIO/livingdocs-editor/pull/3085)


# Breaking Changes :fire:

## Migrate the database

The migration is simple, the duration is short and there are no datalosses expected on up-/downgrade.

```sh
# run grunt migrate to update to the newest database scheme
# migration - 128-add-user-agent-access-tokens.js
#   add field access_tokens.user_agent
# migration - 129-add-index-user-id-created-at-access-tokens.js
#   add index to access_tokens.user_id | access_tokens.created_at
# migration - 130-groups-stream-migration.js
#   add stream_types and stream_event_types for groups

livingdocs-server migrate up
```

## Minimum node and npm version updated :fire:

Due to security reasons, we are bumping node and npm minimum requirements

- minimum node requirement: >= `node@10.13.0`
- minimum NPM requirement: >= `npm@6.13.4`

References:
  * [livingdocs-editor #3134](https://github.com/livingdocsIO/livingdocs-editor/pull/3134)


## Context Object for include API :fire:

To have more infos during the rendering of `doc-includes`, we pass now a context object into the rendering functions of the `includesApi`.

New Required param context on includes API methods
- :fire: includesApi.processHtml({html, context}) - context is now mandatory
- :fire: includesApi.resolveChannelOutputs({renderConfig, channelOutputs, context}) context is now mandatory
- :fire: includesApi.resolveInclude(serviceName, serviceParams, options) - options.context is now mandatory
- :fire: Editing API: POST /includes/preview requires the context param (old Editor versions won't be able to resolve includes).

References:
  * [server PR #2783](https://github.com/livingdocsIO/livingdocs-server/pull/2783) :gift:

## embeds config `allowUnrecognizedEmbeds` is working again :fire:
The config
```json
embeds: {
  options: {
    allowUnrecognizedEmbeds: true
  }
}
```
must be set to true if a free-html component is used and no [custom embedHandler](https://docs.livingdocs.io/general-howtos/instagram_embed#adding-an-embed-class) is registered. Otherwise the free-html component doesn't work anymore and the input is not saved.

# APIs :gift:

## Public API - fetch a design - `api/v1/design/:designVersion`

It's now possible to fetch a design configuration via Public API.

References:
  * [Public API Documentation](https://edit.livingdocs.io/public-api)
  * [server PR #2617](https://github.com/livingdocsIO/livingdocs-server/pull/2617)

## CoreAPI - Improve API for Dashboard Filters :tada:

We introduced a Dashboard List Filter named `List Filter v2`.

This filter has 2 advantages over `List Filter`:
- Fetch the data asynchronous (instead of synchronous)
- Be able to compose the filter with injected data like `project`, `user`, `server`

References:
  * [Dashboard List Filter (deprecated)](https://docs.livingdocs.io/reference-documentation/editor/menu-and-dashboards#register-custom-list-filter)
  * [Dashboard List Filter v2](https://docs.livingdocs.io/reference-documentation/editor/menu-and-dashboards#register-custom-list-v2-filter)
  * [editor PR #3213](https://github.com/livingdocsIO/livingdocs-editor/pull/3213)


# Other Changes

### Features
* Login: New device detection on login [livingdocs-server #2663](https://github.com/livingdocsIO/livingdocs-server/pull/2663) :gift:
* Design: Make defaultContent editable in a design v2 [livingdocs-editor #3192](https://github.com/livingdocsIO/livingdocs-editor/pull/3192) :gift:

### Design
* Dashboards: Overhaul design dashboards [livingdocs-editor #3124](https://github.com/livingdocsIO/livingdocs-editor/pull/3124) :gift:
* Design Bump: Correctly collapse for mobile and tablet [livingdocs-editor #3175](https://github.com/livingdocsIO/livingdocs-editor/pull/3175) :gift:

### Improvements
* Data Migration: Fix the behaviour of the date filter [livingdocs-server #2730](https://github.com/livingdocsIO/livingdocs-server/pull/2730) :beetle:
* Images: Improve error message on image upload when `imagemagick` is missing [livingdocs-server #2667](https://github.com/livingdocsIO/livingdocs-server/pull/2667) :gift:
* Reindexing
  * Add delay when elastic CPU passes threshold [livingdocs-server #2702](https://github.com/livingdocsIO/livingdocs-server/pull/2702) :gift:
  * Allow to reindex by `contentType` or `documentType` [livingdocs-server #2738](https://github.com/livingdocsIO/livingdocs-server/pull/2738) :gift:
* Collaboration
  * Hide collaboration top-bar without another user [livingdocs-editor #3105](https://github.com/livingdocsIO/livingdocs-editor/pull/3105) :gift:
  * Improve save state, messages and more [livingdocs-editor #3109](https://github.com/livingdocsIO/livingdocs-editor/pull/3109) :gift:
  * Improve logs and messages [livingdocs-editor #3144](https://github.com/livingdocsIO/livingdocs-editor/pull/3144) :gift:
  * Lock image component when another user is on the crop screen [livingdocs-editor #3176](https://github.com/livingdocsIO/livingdocs-editor/pull/3176) :gift:
  * Disable soft-lock during editing [livingdocs-editor #3191](https://github.com/livingdocsIO/livingdocs-editor/pull/3191) :gift:
  * Always update metadata on publish screen [livingdocs-editor #3204](https://github.com/livingdocsIO/livingdocs-editor/pull/3204) :gift:
  * On document update errors, show sticky message and go into read-only [livingdocs-editor #3234](https://github.com/livingdocsIO/livingdocs-editor/pull/3234) :gift:
* Login: Allow redirects to outside angular app if on the same origin [livingdocs-editor #3141](https://github.com/livingdocsIO/livingdocs-editor/pull/3141) :gift:
* Document: don't emit pusher event during init[livingdocs-editor #3252](https://github.com/livingdocsIO/livingdocs-editor/pull/3252) :gift:

### Bugfixes

* Project Setup: Always use the downstream server (as intended) [livingdocs-server #2681](https://github.com/livingdocsIO/livingdocs-server/pull/2681) :beetle:
* User: Allow users to correctly change their data [livingdocs-server #2683](https://github.com/livingdocsIO/livingdocs-server/pull/2683) :beetle:
* Data Migration: Validate `livingdoc` after and not before a file migration [livingdocs-server #2740](https://github.com/livingdocsIO/livingdocs-server/pull/2740) :beetle:
* Channel Config: Always reject an empty `channelConfig` [livingdocs-server #2767](https://github.com/livingdocsIO/livingdocs-server/pull/2767) :beetle:
* History: Restore revisions to work again [livingdocs-editor #3108](https://github.com/livingdocsIO/livingdocs-editor/pull/3108) :beetle:
* Metadata
  * Fix ResultOutdated errors for `reference-lists` [livingdocs-editor #3185](https://github.com/livingdocsIO/livingdocs-editor/pull/3185) :beetle:
  * Update `ldPrintMetadata` correctly [livingdocs-editor #3183](https://github.com/livingdocsIO/livingdocs-editor/pull/3183) :beetle:
  * Add mimeType to metadata images [livingdocs-editor #3198](https://github.com/livingdocsIO/livingdocs-editor/pull/3198) :beetle:
* Embeds: Remove and load all embeds on setup interactive view [livingdocs-editor #3188](https://github.com/livingdocsIO/livingdocs-editor/pull/3188) :beetle:
* Print Preview
  * Do show print preview correct again [livingdocs-editor #3203](https://github.com/livingdocsIO/livingdocs-editor/pull/3203) :beetle:
  * Various fixes for the print preview [livingdocs-editor #3224](https://github.com/livingdocsIO/livingdocs-editor/pull/3224) :beetle:
* Editing: on read-only don't show insert side-panel [livingdocs-editor #3226](https://github.com/livingdocsIO/livingdocs-editor/pull/3226) :beetle:
* Document update: after a design bump reload the editor [livingdocs-editor #3242](https://github.com/livingdocsIO/livingdocs-editor/pull/3242) :beetle:

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
