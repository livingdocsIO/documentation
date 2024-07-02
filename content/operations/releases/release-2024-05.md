---
type: release-notes
title: May 2024 Release
description: Technical Release Notes for release-2024-05
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-05/
  - /operations/releases/release-2024-05/release-2024-05/
---

{{< release-header
  title="May 2024 Release"
  upcoming=false
  legacy=false
  current=true
  maintained=true
  branchHandle="release-2024-05"
>}}

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-may-2024).
To learn about the necessary actions to update Livingdocs to `release-2024-05`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* [Feature Webinar Recording](https://us02web.zoom.us/rec/share/pmD56kbJKG8di60M-AlufDxH3GV5MDzZ0PrDUQ01ne1BI3Fu8VqrEwgolphXynex.4gNqT3onkGCmVxSf) | Passcode: %k#RI*8%
* [Feature Webinar Documentation](https://docs.google.com/presentation/d/17qMzFWOMIwfkpCb9lunktFfE5oJFwX1IhYqjbj8IQ40/edit)
* [Dev Webinar Recording](https://us02web.zoom.us/rec/share/csVwIwhsBPUbc1mEQKqr5xLzEahFpto7-4XlDeVk55kKO_ee4e44jfrFhsUTP4YE.tu3OWjjjjVe6erNJ) | Passcode: tRdq!9OW
* [Dev Webinar Slides](https://docs.google.com/presentation/d/1OHzs_RrQXWyecb8hElK2rOydT8wRE_BNIUdtAX3kuZA/edit?usp=sharing)
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
# migration 200-assistants-unique-constraint.js
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

Be careful, the `textCount` configuration needs to be written in camelCase in the new location. 
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

Livingdocs provides with Table Dashboards a structured and customizable approach to searching and managing documents. Since `release-2022-09`, they are the recommended way to create dashboards. Therefore, we are deprecating dashboards of type `dashboard` and will remove support for them in `release-2024-11`. Customers using dashboards of type `dashboard` should migrate to `tableDashboard`.

{{< feature-info "Dashboards" "server" >}}
### Angular custom dashboard cards :warning:

As part of our ongoing migration from Angular to Vue, we are deprecating Angular dashboard cards and will remove support for them in `release-2024-11`. Custom dashboard cards are currently supported in media library dashboards and dashboards of type `kanbanBoard`, `taskBoard`, and `dashboard` (deprecated, see  [Deprecating dashboards of type `dashboard`]({{< relref "#dashboards-of-type-dashboard-warning" >}})). If you are affected by this change, you should consider using the provided upstream dashboard cards instead. If these do not meet your requirements, please migrate your custom dashboard cards to Vue components.

## Features

{{< feature-info "New Feature" "server/editor" >}}
### Livingdocs Assistants :gift:

We are happy to announce the first version of the Livingdocs Assistants Platform.
Use it to understand the system and start learning, what can be done.

Livingdocs Assistants are designed to understand the user's context, namely the current document and focused components.
Assistants can generate an array of [Document Commands]({{< ref "/reference/public-api/document-command-api" >}}) that are then executed server-side.
This feature allows for complex document manipulations through a simplified interface,
initiated from the editor UI using the `Cmd+K` (macOS) or `Ctrl+K` (Windows/Linux) shortcut,
where users can find and execute available Assistants.

Please share your ideas for assistants with us, we would love to learn and gather more perspectives.

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

The full guide how to implement an assistant can be found [here]({{< ref "/guides/editor/assistants" >}}).

{{< feature-info "Teasers" "editor" >}}
### Dynamic Teaser Lists

Dynamic Teaser Lists simplify the management and rendering of teaser lists within pages, providing an efficient solution for semi-automatic page management. This feature reduces the need for custom code compared to other solutions within Livingdocs. Additionally, it supports deduplication across all components in a page, ensuring each teaser is displayed at most once.

Dynamic Teaser Lists can be created with the new `li-document-search` includes plugin, which supports filtering articles with base filters and display filters. Base filters are always applied and cannot be modified by editors, whereas display filters are rendered in the interface and adjustable by editors. Additionally, sorting order and a limit can be defined, with the latter also being adjustable by editors.

Whenever a new article matches the configured conditions, it is passed to your include's render function. The conditions are applied on request. Therefore, Dynamic Teaser Lists may contain other teasers over time as new articles match the conditions, without requiring editors to republish the page. Thus, it is recommended to configure your delivery to repeatedly invalidate the cache for such pages and refetch them occasionally from the Composition API to obtain the latest state.

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

{{< feature-info "Search" "editor" >}}
### Document search improvements

In this release we improve the "simple" search strategy based on feedback we received. When searching for document ids we again show the document in the table dashboard as it was in the old search mechanism. We also add the recency boosting from the old search to the simple search and give the option to decide on which field it should be applied.

To configure the recency boosting add the `propertyName` in the dashboard configs:

```js
{
  handle: 'articles',
  type: 'tableDashboard',
  search: {
    strategy: 'simple',
    recencyBoost: {
      propertyName: 'updated_at'
    }
  }
  // ...
}
```

Next we are improving language support by using language specific fields which are configured with the correct elasticsearch analyzers. This will also enable to exact match a word when a search term is written in quotes. To enable it you have to set the `useLanguageSpecificFields` in the elasticindex settings:

```js
{
  elasticIndex: {
    indexNamePrefix: 'li-example',
    indexSettings: {
      useLanguageSpecificFields: true
    },
    // ...
  },
}
```

We also add the option to configure a german decompounder which will break up compound words. This needs two files a dictionary and a file with hyphenation patterns. Specify the path to those in the settings:
```js
{
  elasticIndex: {
    indexNamePrefix: 'li-example',
    indexSettings: {
      useLanguageSpecificFields: true,
      germanDecompounder: {
        enabled: true,
        dictionary: 'decompounder/dictionary-de.txt',
        hyphenation: 'decompounder/de_DR.xml'
      }
    },
    // ...
  },
}
```

Note that both the language specific fields and the german decompounder need a recreation of the elastic index.


{{< feature-info "Document State" "editor" >}}
### Manual document status

Many Newsrooms work with a manual status that progresses linearly. The new `li-manual-document-status` allows to accomadate such usecases by giving the possibility to define a set of statuses along with hex colors.

To configure the manual document status add a metadata property of type `li-document-status` to a content type:

```js
{
  handle: 'manualDocumentStatus',
  type: 'li-manual-document-status',
  config: {
    index: true,
    placeholder: { en: 'Select status', de: 'Status wählen' },
    statuses: [
      {
        value: 'in-progress',
        label: {en: 'In progress', de: 'In Arbeit'},
        color: '#E04D66'
      },
      {
        value: 'edited',
        label: {en: 'Edited', de: 'Redigiert'},
        color: '#1251CE'
      },
      {
        value: 'ready-for-online',
        label: {en: 'Ready for online', de: 'Fertig für Online'},
        color: '#954FBD'
      },
      {
        value: 'finished',
        label: {en: 'Finished', de: 'Fertig/Schlusskorrigiert'},
        color: '#1FC47A'
      }
    ]
  },
  ui: {
    label: {en: 'Manual status', de: 'Manueller Status'}
  }
}
```

Reference the metadata property in the display filter:

```js
dashboards: [
  {
    displayFilters: [
      {metadataPropertyName: 'manualDocumentStatus'}
    ]
  }
]
```

{{< feature-info "Integrations" "server" >}}
### Desk-net Global Integration

It's now possible to use Desk-Net's "global" integration with Livingdocs. This links a Livingdocs document directly to the story without having to set a publication platform. The new integration also provides a more flexible way to synchronise data between Livingdocs and Desk-Net (in both directions). In addition, a way of creating Desk-Net elements for existing Livingdocs documents is provided to ease some real-world workflows.

Please read the [integration guide]({{< ref "/guides/integrations/desknet" >}}) or [migration guide]({{< ref "/guides/integrations/desknet-migration" >}}) for further details.

{{< feature-info "Integrations" "server" >}}
### Migration to iMatrics tag management

The tag suggestion feature has been migrated to iMatrics' own tag suggestion functionality. Starting with this release, tag suggestions are created directly within iMatrics. Customers can find the new management interface in the iMatrics webportal.

Check out the [breaking changes]({{< ref "#migrate-imatrics-tag-suggestion-management-fire" >}}) for guidance on migrating your tag suggestions.

{{< feature-info "Media Library" "server" >}}
### File import via Public API

For a long time, the Livingdocs Server has supported images and videos import via the Public API. With this release, we also added support for general file imports (e.g. PDF). Now, for all media types, files can be imported into the Livingdocs Media Library from external systems, such as DAMs or similar.

An [additional endpoint]({{< ref "/reference/public-api/imports/files#import-files" >}}) has been introduced `POST api/v1/import/files` to support [Public API file imports]({{< ref "/reference/public-api/imports/files" >}}). Similar to images and videos imports, the endpoint requires parameters an array `files` and `systemName` as input and returns the media library's file id. 

```js
{
  "systemName": "identifier-for-your-system",
  "webhook": "https://my-domain.com/webhooks/file-import",
  "context": {
    "myIdentifier": "some-identifier-sent-to-the-webhook"
  },
  "files": [
    {
      "url": "https://placekitten.com/800/600",
      "id": "123abc",
      "fileName": "cat",
      "metadata": {
        "caption": "foo"
      }
    }
  ]
}
```

{{< feature-info "New Feature" "server/editor" >}}
### Document Statistics :gift:

Document Statistics allow users to better understand the shape and completeness of an article by looking at a dashboard.
Statistics include the component counts of a document as well as the character count.

The feature builds on top of existing concepts, respectively extends them:
- New table dashboard cell component [`liTableDashboardCellStatistics`]({{< ref "/reference/project-config/editor-settings#upstream-components" >}})
- Query DSL for [Base Filters]({{< ref "/customising/advanced/editor-configuration/base-filter#example---filter-by-document-statistics" >}})
- [Named Display Filters]({{< ref "/customising/advanced/editor-configuration/display-filter#named-filters" >}}) for `includedComponents`, `missingComponents` and `characterCount`

Example Dashboard config excerpt:
```js
{
  handle: 'articles',
  type: 'tableDashboard',
  baseFilters: [
    {key: 'statistics.componentCount.image', exists: true},
    // ...
  ],
  displayFilters: [
    'includedComponents',
    'missingComponents',
    {
      filterName: 'characterCount',
      config: {
        thresholds: [100, 500, 2000]
      }
    },
    // ...
  ],
  columns: [
    {
      label: 'Statistics',
      minWidth: 200,
      growFactor: 1,
      priority: 2,
      componentName: 'liTableDashboardCellStatistics',
      componentOptions: {
        characterCount: true,
        componentCount: [
          'title',
          'p',
          'image',
          'image-named-crops'
        ]
      }
    },
    // ...
  ]
}
```

Watch out:
- ⚠️&nbsp;&nbsp;Statistics are only computed for new documents. To get them also for old documents, please run the following manual migration and the elasticsearch indexing.

  ```bash
  node node_modules/@livingdocs/server/db/manual-migrations/010-compute-document-statistics.js
  livingdocs-server elasticsearch-index --handle=li-documents -y
  ```

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2024-4068](https://github.com/advisories/GHSA-grv7-fg5c-xmjg) patched in `braces` v3.0.3
* [CVE-2024-28863](https://github.com/advisories/GHSA-f5x3-32g6-xq36) patched in `tar` v6.2.1
* [CVE-2024-30260](https://github.com/advisories/GHSA-m4v8-wqvr-p9f7) patched in `undici` v5.28.4
* [CVE-2024-30261](https://github.com/advisories/GHSA-9qxr-qj54-h672) patched in `undici` v5.28.4
* [CVE-2024-37168](https://github.com/advisories/GHSA-7v5v-9h63-cj86) patched in `@grpc/grpc-js` v1.9.15
* [CVE-2024-37890](https://github.com/advisories/GHSA-3h5v-q93c-6h6q) patched in `ws` v8.17.1

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2024-4068](https://github.com/advisories/GHSA-grv7-fg5c-xmjg) patched in `braces` v3.0.3
* [CVE-2024-4367](https://github.com/advisories/GHSA-wgrm-67xf-hhpq) patched in `pdfjs-dist` v4.3.136
* [CVE-2024-28863](https://github.com/advisories/GHSA-f5x3-32g6-xq36) patched in `tar` v6.2.1
* [CVE-2024-30260](https://github.com/advisories/GHSA-m4v8-wqvr-p9f7) patched in `undici` v5.28.4
* [CVE-2024-30261](https://github.com/advisories/GHSA-9qxr-qj54-h672) patched in `undici` v5.28.4
* [CVE-2024-37890](https://github.com/advisories/GHSA-3h5v-q93c-6h6q) patched in `ws` v8.17.1

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v251.8.27](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.27): fix(print): Fix print metadata access in hugo-export
- [v251.8.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.26): fix(deps): update dependency @livingdocs/framework from 29.3.11 to v29.3.13
- [v251.8.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.25): fix: document create functions require a title property
- [v251.8.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.24): fix(desknet): Provide userId to Desk-Net Global functions
- [v251.8.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.23): chore: Test volume moounts on elasticsearch containers
- [v251.8.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.22): chore(webhooks): Add err attribute to webhook log for errors
- [v251.8.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.21): fix(realtime): Add `livingdocs_pusher_messages_count` metric and log when >200 Pusher messages are queued in 1s
- [v251.8.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.20): fix(desknet): Make content schema less strict in create function
- [v251.8.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.19): fix(scheduled-publishing): Parse dates instead of relying on string strict comparison, which is error prone if we get postgres dates
- [v251.8.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.18): fix(documents): Require toISOString correctly for repo config cache
- [v251.8.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.17): fix: add LIFEAT003 customer feature flag for NZZ
- [v251.8.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.16): fix(includes): Convert preloaded metadata to JSON
- [v251.8.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.15): chore(oidc-api): Replace `server.log` with `log`
- [v251.8.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.14): fix(api-clients): Do not return archived clients when querying them
- [v251.8.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.13): fix(deps): update dependency @livingdocs/framework from 29.3.7 to v29.3.8
- [v251.8.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.12): chore(example-server): Use getCount for documentPreloader example
- [v251.8.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.11): chore(queue): Automatically delete processed jobs without calling job.del()
- [v251.8.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.10): fix(link-directive): Fix link directive html validation to support links without hostname
- [v251.8.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.9): fix: fix call to assertFunction generator
- [v251.8.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.8): chore(assistants): Add tests
- [v251.8.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.7): fix(retresco): Only filter entities in mock API if query is provided
- [v251.8.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.6): fix(azure-blob-storage): Correctly handle processing errors by propagating to all the streams
- [v251.8.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.5): fix: Do not load publication references when loading drafts
- [v251.8.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.4): test(search): Add publication statistics search filter tests
- [v251.8.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.3): fix(statistics): Decode html entities before counting characters
- [v251.8.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v251.8.2): fix(release-2024-05): Update framework to v29.3.7 (release-2024-05 tag)

### Livingdocs Editor Patches
- [v110.13.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.53): fix(workspace): Prevent window reload during tests
- [v110.13.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.52): fix(deps): update dependency @livingdocs/framework from 29.3.12 to v29.3.13
- [v110.13.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.51): fix: active translation not highlighted
- [v110.13.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.50): fix(dashboard): Enable sync url params for dashboards
- [v110.13.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.49): fix(auth): Redirect all tabs to previous URL when logging in after session expiration
- [v110.13.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.48): fix(history): translate assistant label and break long words
- [v110.13.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.47): fix: resolving comments from deleted components
- [v110.13.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.46): fix(documents): Do not show metadata conflicts notification triggered by server side metadata hooks
- [v110.13.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.45): fix(security): Patch security vulnerabilities CVE-2024-4068 in `braces`, CVE-2024-4367 in `pdfjs-dist`, and CVE-2024-37890 in `ws`
- [v110.13.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.44): chore(metadata): Improve li-image dropzone message
- [v110.13.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.43): fix(storage): Strip angular $$hashKey attributes from the serialized document to prevent prevent diffing conflicts caused by them
- [v110.13.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.42): fix: sz article opening bug
- [v110.13.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.41): fix(sz): register function to disable external system routing
- [v110.13.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.40): fix(comments): Do not emit comment update events for `eventSource: remote`
- [v110.13.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.39): test: Fix tests for image.key attribute
- [v110.13.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.38): fix(workspace): Prevent infinite refetch loop while on conflict screen
- [v110.13.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.37): fix(useDocumentSearch): transform baseFilters to filterStates
- [v110.13.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.36): fix(draft-storage): Fix function context in backported fix
- [v110.13.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.35): fix(editor): Do not load ticker panel for non-ticker documents
- [v110.13.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.34): fix: update framework to fix safari 17.5 bug
- [v110.13.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.33): fix(ticker): Re-render content before editing
- [v110.13.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.32): fix(draft-storage): Log error when journalist enters the conflict ui that requires conflict resolution
- [v110.13.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.31): fix(draft-storage): Fix document conflicts with self
- [v110.13.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.30): fix(webhooks): Normalize webhook events defined as strings
- [v110.13.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.29): fix(li-integer): Disable input if not editable
- [v110.13.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.28): fix(print): Fix this.draft context in print metadata plugin
- [v110.13.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.27): fix(kanban-dashboard): Run angular digest when resolving result lists on the kanban dashboards
- [v110.13.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.26): fix(draft-storage): Trigger digest when entering document conflict screen
- [v110.13.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.25): fix(kanban-board): Add card actions open and openInNewWindow
- [v110.13.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.24): fix(drop-actions): Make uploadOptions optional
- [v110.13.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.23): fix: do not query parent bundles when no bundle content type defined
- [v110.13.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.22): fix(trackjs): Do not use serialize-error as we suspect it can't handle circular references in our production workloads
- [v110.13.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.21): fix: update framework to fix override snapshot diffing
- [v110.13.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.20): fix(project setup): URLs in tables
- [v110.13.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.19): chore: Revert reactive change on draft.remoteDocument
- [v110.13.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.18): chore: Add last save try and save success to autosave issue log
- [v110.13.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.17): fix(manual document status): disable in conflict mode
- [v110.13.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.16): fix(comments): Sync comment store updates over pusher
- [v110.13.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.15): fix(print modal): Layout
- [v110.13.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.14): fix(create print article): handle overflow for the publication dropdown
- [v110.13.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.13): fix: don't fail adding components with include service without paramsSchema
- [v110.13.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.12): fix(groups): Increment version when updating group members
- [v110.13.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.11): fix(desknet): Display error notification when story creation fails
- [v110.13.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.10): fix(kanban-dashboard): Load document state from database on kanban dashboards
- [v110.13.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.9): fix(permissions): Also extract content types from `{not: {key: 'contentType', term: 'regular'}}` baseFilters to support permissions correctly
- [v110.13.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.8): fix(user merge): Spacing
- [v110.13.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.7): refactor: improve code
- [v110.13.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.6): fix(images): Fix image upload maxFileSize detection
- [v110.13.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.5): fix: comment UI labels
- [v110.13.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.4): fix: delivery links on table dashboard
- [v110.13.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.3): fix(bundle): don't show "add to bundle" if no bundle configured
- [v110.13.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.13.2): fix(deps): Upgrade @livingdocs/framework@release-2024-05


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
