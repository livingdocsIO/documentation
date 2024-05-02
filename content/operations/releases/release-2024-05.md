---
type: release-notes
title: May 2024 Release
description: Technical Release Notes for release-2024-05
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-05/
  - /operations/releases/release-2024-05/release-2024-05/
---

{{< release-header
  title="May 2024 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2024-05"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-editor/pull/8398)
* [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-server/pull/6850)
* [fix(deps): update babel from 7.24.4 to v7.24.5 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/8396)
* [Do not try to render includes with no value/params when using the Composition API](https://github.com/livingdocsIO/livingdocs-server/pull/6734)
* [Add Desk-Net Global metadata plugin form](https://github.com/livingdocsIO/livingdocs-editor/pull/8378)
* [Desk-Net Global Integration](https://github.com/livingdocsIO/livingdocs-server/pull/6817)
* [Check immediately whether shortcuts should be paused](https://github.com/livingdocsIO/livingdocs-editor/pull/8391)
* [Add file import support to public api](https://github.com/livingdocsIO/livingdocs-server/pull/6847)
* [Feat: simple search iteration improve tokenizer for languages](https://github.com/livingdocsIO/livingdocs-server/pull/6812)
* [fix(deps): update dependency @google-cloud/storage from 7.10.1 to v7.10.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6844)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2024-05`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 20                                                                                       |
| NPM                            | 10                                                                                       |
| Postgres                       | 16                                                                                       |
| Elasticsearch<br/>OpenSearch   | 8.x<br/>v2.3.0                                                                           |
| Redis                          | 7                                                                                        |
| Livingdocs Server Docker Image | livingdocs/server-base:20                                                                |
| Livingdocs Editor Docker Image | livingdocs/editor-base:20                                                                |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

### Minimal

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 18                                                                                       |
| NPM                            | 9                                                                                        |
| Postgres                       | 13                                                                                       |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:18.3                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.5                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}
### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
# migration 198-assistants.js
#   creates assistant table and support function
# migration 199-remove-tag-suggestions.js
#   removes tag_suggestions table from the database
# migration 200-assistants-unique=constraint.js
#   adds unique constraint to the assistant table
livingdocs-server migrate up
```

{{< feature-info "Integrations" "server/editor" >}}
### Migrate iMatrics Tag Suggestion Management :fire:

The tag suggestion management feature has been removed from the Livingdocs Editor and Server in favour of iMatrics' own tag suggestion functionality. Starting with this release, suggestions are created directly within iMatrics. Customers can find the new management interface in the iMatrics webportal.

#### Required Actions

##### Database Migration

Customers should apply the new database migration by running `li-server migrate up`. This drops the `tag_suggestions` table.

⚠️  **Warning:** All data within this table will be irreversibly deleted. Customers must ensure that any open suggestions are migrated to iMatrics' new suggestion management system. To determine that there are no pending suggestions, they should open the Livingdocs editor at `/<project>/tags/imatrics` and verify that there are no pending suggestions visible. Alternatively, they can also execute the following database query and confirm that it returns no results.

```sql
SELECT * FROM tag_suggestions WHERE status LIKE 'open';
```

In case there are pending suggestions, customers should either accept or reject them within our interface, provided they are using an older release. Alternatively, they can refer to the iMatrics API documentation on how to programmatically insert them into the new suggestion system.

##### Menu Item

Customers should remove menu items `{liItem: 'tags'}` from their project configurations.

##### iMatrics Webportal

Customers should verify that _Concept Management and Concept Suggestions_ is enabled in their iMatrics account. If this is not the case, they should reach out to iMatrics to have it enabled.

* [Server PR: Replace iMatrics suggestion management](https://github.com/livingdocsIO/livingdocs-server/pull/6774)

{{< feature-info "liServer" "server" >}}
### Remove internal arrays `liServer.onShutdownHandlers` and `liServer.initializedHooks` :fire:

The internal arrays `liServer.onShutdownHandlers` and `liServer.initializedHooks` have been removed. Other existing hooks can be used to achieve the same functionality.

## Deprecations

{{< feature-info "Server Configuration" "server" >}}
### `appConfig.textcount` configuration :warning:

`appConfig.textcount` configuration has been moved to `projectConfig.editorSettings.textCount`. The `appConfig.textcount` configuration will be removed in `release-2024-11`.

Please migrate text count config from `appConfig.textcount` to `projectConfig.editorSettings.textCount`.
```js
editorSettings: {
  ...
  textCount: {
    isEnabled: true,
    timeout: 200,
    showEditableCount: true,
    lineCountFraction: 39.5 // Added in release-2024-05
  }
}
```

{{< feature-info "Desk-net API" "server" >}}
### Desk-net API function parameters :warning:

- Instead of `createFromDesknet(projectId, element)` please use `createFromDesknet({projectId, userId, element})`. `userId` is a new required property.
- Instead of `updateFromDesknet(projectId, documentId, element, opts)` please use `updateFromDesknet({projectId, documentId, userId, element, linkPublication})`. `userId` is a new required property.
- Instead of `unlinkFromDesknet(projectId, documentId)` please use `unlinkFromDesknet({projectId, documentId, userId})`. `userId` is a new required property.

{{< feature-info "Dashboards" "server" >}}
### Dashboards of type `dashboard` :warning:

{{< feature-info "Dashboards" "server" >}}
### Angular custom dashboard cards :warning:


## Features

{{< feature-info "Assistants" "server" >}}
### Livingdocs Assistants

#### Register an assistant

```js
  liServer.registerAssistant({
    projectHandles: ['example'], // skip to register it for all projects
    handle: 'generateTitle',
    label: 'Generate Title',
    description: 'Generate an article title',
    iconUrl: 'https://livingdocsio.github.io/livingdocs-design-assets/docs/icons/component-icons/header_simple.svg',
    async assist ({context}) {
      const {document, projectConfig} = context
      const projectHandle = projectConfig.key.projectHandle
      const contentType = document.contentType

      // Apply context validations before executing the command
      if (projectHandle !== 'service' && contentType !== 'article') {
        throw validationError(
          'Cool Title assistant is only available on articles in example project'
        )
      }
      if (!document) {
        throw validationError('Generate Title assistant requires a document')
      }

      const oldTitle = document.metadata.title
      const newTitle = await aiService.generateTitle(document.content)

      // Use Command API compatible commands to modify a document.
      // Return undefined if not applicable.
      return {
        commands: [
          {
            operation: 'setMetadataProperty',
            propertyName: 'title',
            value: newTitle,
            oldValue: oldTitle
          }
        ]
      }
    }
  })
})
```

Possible properties on `context`:
- `projectConfig`
- `documentId` (optional)
- `document` (optional)
- `focusedComponentId` (optional)

Commands are executed with an assistant actor (one per project/assistant combination).
Actors are created on demand.

{{< feature-info "Teasers" "editor" >}}
### Dynamic Teaser Lists

Dynamic Teaser Lists simplify the management and rendering of teaser lists within pages, providing an efficient solution for semi-automatic page management. This feature reduces the need for custom code compared to other solutions within Livingdocs. Additionally, it supports deduplication across all components in a page, ensuring each teaser is displayed at most once.

Dynamic Teaser Lists can be created with the new `li-document-search` includes plugin, which supports filtering articles with base filters and display filters. Base filters are always applied and cannot be modified by editors, whereas display filters are rendered in the interface and adjustable by editors. Additionally, sorting order and a limit can be defined, with the latter also being adjustable by editors.

Whenever a new article matches the configured conditions, it is passed to your include's render function. Consequently, Dynamic Teaser Lists contain other teasers over time as new articles match the conditions, without requiring editors to republish the page. Therefore, it is recommended to configure your delivery to repeatedly invalidate the cache for such pages and refetch them occasionally from the Composition API to obtain the latest state.

To configure a Dynamic Teaser List, add the `li-document-search` to the `paramsSchema` of your include service:

```js
{
  name: 'dynamic-teaser-list-service',
  paramsSchema: [{
    handle: 'teasers',
    type: 'li-document-search',
    config: {
      contentTypes: [],    // optional, shorthand for contentType base filter
      baseFilters: [],     // optional
      displayFilters: [],  // optional
      sort: '',            // optional
      showLimit: true,     // optional, show limit input in UI
      defaultLimit: 3,     // required, default number of included documents
      minLimit: 1,         // optional if showLimit=true, minimum configurable limit in UI
      maxLimit: 5          // required if showLimit=true, maximum configurable limit in UI
    }
  }],
  rendering: {
    type: 'function',
    render (params, context) {
      const content = params.teasers?.values
        .map((document) => ({
          component: 'teaser',
          content: {
            title: document.metadata.title
          }
        }))
      return {content}
    }
  }
}
```

{{< feature-info "Integrations" "editor" >}}
### Display filter for `li-imatrics-nlp-tags`

The new display filter for iMatrics enables editors to filter documents on dashboards or in Dynamic Teaser Lists by iMatrics metadata properties.

To set it up, add an indexed metadata property of type `li-imatrics-nlp-tags` to a content type:

```js
{
  handle: 'imatrics',
  type: 'li-imatrics-nlp-tags',
  config: {index: true}
}
```

Reference the metadata property in the display filter:

```js
dashboards: [
  {
    displayFilters: [
      {metadataPropertyName: 'imatrics'}
    ]
  }
]
```

{{< feature-info "Integrations" "editor" >}}
### Display filter for `li-retresco`

The new display filter for Retresco enables editors to filter documents on dashboards by Retresco metadata properties.

To set it up, add an indexed matadata property of type `li-retresco` to a content type:

```js
{
  handle: 'retresco',
  type: 'li-retresco',
  config: {index: true}
}
```

Reference the metadata property in the display filter:

```js
dashboards: [
  {
    displayFilters: [
      {metadataPropertyName: 'retresco'}
    ]
  }
]
```

{{< feature-info "Documents State" "editor" >}}
### Document statistics



{{< feature-info "Search" "editor" >}}
### Document search improvements



{{< feature-info "Document State" "editor" >}}
### Manual document status



{{< feature-info "Integrations" "server" >}}
### Desk-net Global Integration



{{< feature-info "Integrations" "server" >}}
### Migration to iMatrics tag management

The tag suggestion feature has been migrated to iMatrics' own tag suggestion functionality. Starting with this release, tag suggestions are created directly within iMatrics. Customers can find the new management interface in the iMatrics webportal.

Check out the [breaking changes]({{< ref "#migrate-imatrics-tag-suggestion-management-fire" >}}) for guidance on migrating your tag suggestions.

{{< feature-info "Media Library" "server" >}}
### File import via Public API



## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2024-28863](https://github.com/advisories/GHSA-f5x3-32g6-xq36) patched in `tar` v6.2.1
* [CVE-2024-30260](https://github.com/advisories/GHSA-m4v8-wqvr-p9f7) patched in `undici` v5.28.4
* [CVE-2024-30261](https://github.com/advisories/GHSA-9qxr-qj54-h672) patched in `undici` v5.28.4

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2024-28863](https://github.com/advisories/GHSA-f5x3-32g6-xq36) patched in `tar` v6.2.1
* [CVE-2024-30260](https://github.com/advisories/GHSA-m4v8-wqvr-p9f7) patched in `undici` v5.28.4
* [CVE-2024-30261](https://github.com/advisories/GHSA-9qxr-qj54-h672) patched in `undici` v5.28.4

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v251.8.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.3): fix(statistics): Decode html entities before counting characters
- [v251.8.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.2): fix(release-2024-05): Update framework to v29.3.7 (release-2024-05 tag)

### Livingdocs Editor Patches
- [v110.13.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.3): fix(bundle): don't show "add to bundle" if no bundle configured
- [v110.13.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.2): fix(deps): Upgrade @livingdocs/framework@release-2024-05


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
