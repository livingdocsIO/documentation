---
type: release-notes
title: July 2024 Release
description: Technical Release Notes for release-2024-07
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-07/
  - /operations/releases/release-2024-07/release-2024-07/
---

{{< release-header
  title="July 2024 Release"
  upcoming=false
  legacy=false
  current=true
  maintained=true
  branchHandle="release-2024-07"
>}}

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-july-2024).
To learn about the necessary actions to update Livingdocs to `release-2024-07`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* [Feature Webinar Recording](https://us02web.zoom.us/rec/share/jw7nMK9kSKHnjwQCJYfYzoH0uua9CUJjEoPm3iNvx-3_x1kc1gc83pJ-NDX6UP4V.4vIw976faThcRyr8) | Passcode: D8y%8now
* [Feature Webinar Documentation](https://docs.google.com/presentation/d/1Yktf7SP-BGc0gWYSiJJXk84mL_bar50ygEdg4iBKtD4)
* [Dev Webinar Recording](https://us02web.zoom.us/rec/share/ivji1tt1wPpYWcdR-g3ty3s9X6Q6nzUtLeiDpVAawlCXbKL4Ag42qUwKpiWfUO3z.7RSfsZDMX8rqO3eZ) | Passcode: 5X$j0aNY
* [Dev Webinar Slides](https://docs.google.com/presentation/d/17wBA60msrWsraJBXJCMljGh3aoV5eM8b0-u_T7S7Hco/)
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

## Deployment

### Before the deployment

No prior preparations are required before rolling for this release.

### After the deployment

No prior preparations are required after rolling out this release.

## Breaking Changes 🔥

{{< feature-info "Release" "server" >}}
### Migrate the Postgres Database :fire:
No upstream migrations were added this release.

{{< feature-info "API" "server" >}}
### Remove support for require('@livingdocs/server/exports') :fire:

`require('@livingdocs/server/exports')` is no longer useful and was removed.

Server PR: [Remove support for require('@livingdocs/server/exports')](https://github.com/livingdocsIO/livingdocs-server/pull/7037)

{{< feature-info "Import API" "server" >}}
### `importApi.getImageBatchLog` :fire:

`importApi.getImageBatchLog` has been removed.
Please use `publicApi.getMediaLibraryImportStatus({projectId, id, type: 'image'})` instead.

Server PR: [Remove importApi.getImageBatchLog')](https://github.com/livingdocsIO/livingdocs-server/pull/7037)

{{< feature-info "Desk-net API" "server" >}}
### Desk-net API function parameters :fire:

- Drop support for separate Desk-Net platform integration API function arguments
- Require userId to be passed to Desk-Net platform integration API functions

Before:
```js
liServer.features.api('li-desknet-integration').createFromDesknet(projectId, element)
liServer.features.api('li-desknet-integration').updateFromDesknet(projectId, documentId, element, opts)
liServer.features.api('li-desknet-integration').unlinkFromDesknet(projectId, documentId)
```

After:
```js
liServer.features.api('li-desknet-integration').createFromDesknet({projectId, userId, element})
liServer.features.api('li-desknet-integration').updateFromDesknet({projectId, documentId, userId, element, linkPublication})
liServer.features.api('li-desknet-integration').unlinkFromDesknet({projectId, documentId, userId})
```

Server PR: [Drop support for separate Desk-Net platform integration API function arguments](https://github.com/livingdocsIO/livingdocs-server/pull/7032)

## Deprecations

{{< feature-info "Integrations" "server" >}}
### Comyan drag&drop without metadata mapping configuration :warning:

With the introduction of the new metadata mapping configuration for Comyan, using Comyan drag&drop without providing those configurations is deprecated and support will be removed with `release-2025-01`.
For more information check the [Comyan metadata mapping feature](#comyan-metadata-mapping-).

{{< feature-info "Integrations" "server" >}}
### Comyan reporting from upstream :warning:

The automatic registration for the comyan reporting hooks is deprecated and support is removed with `release-2025-01`. 
Please migrate to the new config and hook described [here](#comyan-usage-reporting-).

## Features

{{< feature-info "Livingdocs Assistants" "server" >}}
### Livingdocs Assistants: Proposals :gift:

Instead of executing the commands from an assistant immediately, an assistant can also return a proposal.
The proposal contains a description and one or multiple options. Each option has a label and a set of commands.
Users can decide between the proposal options and only after selecting an option, the associated commands are executed.

```js
liServer.registerAssistant({
  handle: 'exampleAssistant',
  ...,
  async assist ({context}) {
    return {
      proposal: {
        description: {en: '...'},
        options: [
          {
            label: {en: '...'},
            commands: [{operation: '...'}]
          }
        ]
      }
    }
  }
})
```

{{< feature-info "Livingdocs Assistants" "server" >}}
### Livingdocs Assistants: Context conditions :gift:

In the first iteration of Livingdocs Assistants, all assistants registered for a project have been shown in the K-Menu and the context had to be validated in the `assist` function.
With this release, it's possible to specify context conditions for an assistant, so it will only show up if the context in the editor matches those conditions.
It's no longer necessary to validate the same conditions in the `assist` function. 

```js
liServer.registerAssistant({
  handle: 'exampleAssistant',
  ...,
  contextConditions: {
    documentRequired: true,
    contentTypes: ['exampleContentType']
  },
  async assist ({context}) {
    console.log(context.document.contentType === 'exampleContentType') // true
  }
})
```

{{< feature-info "Livingdocs Assistants" "server" >}}
### Livingdocs Assistants: Metadata properties :gift:

All assistants available in the context can be accessed through the K-Menu. With this release, it's also possible to display an assistant button next to metadata form fields.
The button has no logical connection that metadata property though. It is not part of the context and an assistant can only be shown for a single metadata form field.

```js
liServer.registerAssistant({
  handle: 'exampleAssistant',
  ...,
  showAssistantTriggerButton: {
    metadataPropertyName: 'examplePropertyName'
  },
  async assist ({context}) {
    ...
  }
})
```

{{< feature-info "Saving Feature" "server" >}}
### Offline Mode Improvements :gift:

Livingdocs allows users to edit documents while offline. However, during offline periods, changes cannot be saved immediately, which could result in data loss if documents are closed before the connection is restored and changes can be saved. To prevent this, it is essential to keep documents open until they can be saved.

To enhance the offline editing experience, we have improved the user interface to more clearly indicate when a user is offline and provide better guidance on what to do. If users remain disconnected for a prolonged period, they are required to acknowledge it, ensuring they are aware of their offline status.

{{< feature-info "Delivery Builds" "server" >}}
### Delivery Builds: User Choices :gift:

Delivery Builds support products requiring a build stage, allowing users to trigger an external system via webhook from within the Livingdocs Editor to initiate the build process. The external system can report the build status back via the Public API. This information is displayed in the editor, providing users with an overview of the product life cycle.

With this release, we are extending Delivery Builds to facilitate advanced use cases where actions and feedback need to be repeatedly exchanged between Livingdocs users and external systems. User choices for Delivery Build enable delivery systems to provide possible actions (user choices), from which users can choose from. When the user selects an action, the external system is informed about the choice and can continue the build.

For instructions on how to implement user choices, please refer to our [guide]({{< ref "/guides/editor/publish-control/delivery" >}}).

- _Modified_ [`/api/v1/documents/:documentId/addDeliveryStatus`]({{< ref "/reference/public-api/add-delivery-status" >}}). It now supports an optional `userChoices` property with which actions can be provided to the user. The status must be set to "in-progress" for `userChoices` to be accepted.

  ```js
  userChoices: ms.arrayOf(ms.strictObj({
    value: ms.required.string(),
    label: ms.required.string()
  }))
  ```

- _Added_ [`document.build.userChoice`]({{< ref "/reference/webhooks/#documentbuilduserchoice" >}}) and [`document.build.draft.userChoice`]({{< ref "/reference/webhooks/#documentbuilddraftuserchoice" >}}) events. They contain a `selectedUserChoice` property. Together with webhooks, these should be used to inform delivery systems about selected user choices.

  ```js
  selectedUserChoice: ms.strictObj({
    value: ms.required.string(),
    label: ms.required.string()
  })
  ```

{{< feature-info "Delivery Builds" "server" >}}
#### Aborting Delivery Builds

By default, Livingdocs adds an abort option to user choices. You can change this behavior with the `abortButtonEnabled` option in the Project Config. If a build is aborted, your external system will be notified via a webhook event.

- _Added_ new Project Config properties [`abortButtonEnabled`]({{< ref "/reference/project-config/deliveries#delivery-builds" >}}) and [`abortButtonLabel`]({{< ref "/reference/project-config/deliveries#delivery-builds" >}}) to `deliveries.[].build`. When `abortButtonEnabled` is set to `false`, the abort button will never be shown. When set to `true`, the abort button will be shown for builds that are in "in-progress", including user choices. When undefined, the abort button will be shown only with user choices.

  ```js
  abortButtonEnabled: ms.boolean(),
  abortButtonLabel: ms.$ref('LivingdocsTranslatableString')
  ```

- _Added_ [`document.build.abort`]({{< ref "/reference/webhooks/#documentbuildabort" >}}) and [`document.build.draft.abort`]({{< ref "/reference/webhooks/#documentbuilddraftabort" >}}) events. These are triggered when a build is aborted by a user.

{{< feature-info "Integrations" "server" >}}
### Comyan: Usage reporting :gift:

By default, Livingdocs reports comyan usage for every image. We're adding a config option to disable this and customize the behavior in the downstream.
Please note that the built-in `postPublishHookAsync` used for reporting in Livingdocs is [deprecated](#comyan-reporting-from-upstream-warning) and will be removed at a later point.

To disable the reporting from Livingdocs add the following to the configuration:
```js
integrations: {
  comyan: {
    allowed: true,
    registerHooks: false
  }
}
```

To enable the same behavior as before configure the following in the downstream:

```js
liServer.registerInitializedHook(() => {
  const {reportDocumentVersion} = liServer.features.api('li-comyan')
  liServer.registerPublicationServerHooks({postPublishHookAsync: reportDocumentVersion})
})
```

Additonally this opens up flexibility to customize when comyan usage is reported for example only registering for a certain project and execute it for desired `contentTypes`:

```js
liServer.registerInitializedHook(() => {
  const {reportDocumentVersion} = liServer.features.api('li-comyan')
  liServer.registerPublicationHooks({
    projectHandle: 'myproject',
    postPublishHookAsync ({documentVersion}) {
      if (documentVersion.contentType !== 'article') return
      return reportDocumentVersion({documentVersion})
    }
  })
})
```

{{< feature-info "Integrations" "server" >}}
### Comyan: Metadata mapping :gift:

Prior `release-2024-07`, the mapping of Comyan data fields and media type metadata was hardcoded in the upstream codebase and the media type had to have metadata properties with a certain handle.
With this release, the mapping can be configured in the media type.

The following mapping configuration replicates the same mapping that has been hardcoded in the past:

```js
mediaTypes: [
  {
    handle: 'image',
    type: 'mediaImage',
    metadata: [
      {handle: 'title', ...},
      {handle: 'caption', ...},
      {handle: 'source', ...},
      {handle: 'comyan', ...}, // custom plugin with an object storage schema
    ],
    comyanExtraction: {
      mappings: [
        {field: 'ImgName', metadataPropertyName: 'title'},
        {field: 'IPTCCaption', metadataPropertyName: 'caption'},
        {field: 'IPTCByLine', metadataPropertyName: 'source'},
        {fullObject: true, metadataPropertyName: 'comyan'},
      ]
    }
  }
]
```

The handle of the media type which is being used as target for images from Comyan has to be defined in the integration settings:

```js
integrations: {
  comyan: {
    enabled: true,
    buttonLabel: 'open comyan',
    targetMediaType: 'image',
    mediaSystem: {
      credentials: {...},
      baseUrl: 'https://showcase.comyan.com'
    }
  }
}
```

{{< feature-info "Command API" "server" >}}
### Command API enhancements :gift:

We have enhanced and extended the capabilities of the [Document Command API]({{< ref "/reference/public-api/document-command-api" >}}) in the following ways:

- Enhanced `insertComponent`: supports a custom component id, which enables more complex content changes (e.g. inserting entire component hierarchies)
- Added `removeComponent`
- Added `unpublish`
- Improved error handling: a `commandIndex` property is exposed in `error_details` to better understand which exact command has failed

Please note that `publish` and `unpublish` commands are not supported by assistants. 

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2024-4068](https://github.com/advisories/GHSA-grv7-fg5c-xmjg) patched in `braces` v3.0.3
* [CVE-2024-37168](https://github.com/advisories/GHSA-7v5v-9h63-cj86) patched in `@grpc/grpc-js` v1.9.15
* [CVE-2024-37890](https://github.com/advisories/GHSA-3h5v-q93c-6h6q) patched in `ws` v8.17.1

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2024-4068](https://github.com/advisories/GHSA-grv7-fg5c-xmjg) patched in `braces` v3.0.3
* [CVE-2024-4367](https://github.com/advisories/GHSA-wgrm-67xf-hhpq) patched in `pdfjs-dist` v4.3.136
* [CVE-2024-37890](https://github.com/advisories/GHSA-3h5v-q93c-6h6q) patched in `ws` v8.17.1

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v254.0.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.22): fix(references): Support data-li-external-system attribute of links in reference extraction
- [v254.0.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.21): fix(package.json): Defined channel to release branch name, desired tag
- [v254.0.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.20): fix(package.json): Define channel 'latest' on package.json to properly tag the branch
- [v254.0.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.19): fix(deps): update dependency @livingdocs/framework from 29.4.10 to v29.4.11
- [v254.0.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.18): fix(documents): Set event source for scheduled publish notification
- [v254.0.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.17): chore(example-server): Remove Desk-Net schedule status filtering
- [v254.0.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.16): fix(desknet): Increase limit for schedule linked document search
- [v254.0.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.15): fix(migrations): Make the `migrations.versionBumpBatchSize` and `migrations.versionBumpConcurrency` configurable
- [v254.0.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.14): fix: Fix support for `component` attribute in livingdocs helpers. `component` must always be preferred over `identifier`
- [v254.0.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.13): fix: make hugo.assetHost required
- [v254.0.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.12): fix(li-tree): Fix reference extraction of translated document references in li-tree
- [v254.0.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.11): fix(print): Fix print metadata access in hugo-export
- [v254.0.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.10): fix(documents): Use target content type settings during transform
- [v254.0.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.9): fix(release-2024-07): Update framework to v29.4.9 (release-2024-07 tag)

### Livingdocs Editor Patches
- [v110.21.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.33): test(document-statistics): fix e2e test after filter label got renamed
- [v110.21.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.32): fix(deps): update dependency @livingdocs/framework from 29.4.10 to v29.4.11
- [v110.21.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.31): fix(moment): Do not call defineLocale multiple times
- [v110.21.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.30): fix(ticker): Support initial metadata extraction and component prefilling for ticker entries
- [v110.21.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.29): fix(draft-storage): Only persist document to local storage when it is dirty
- [v110.21.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.28): fix(date time fields): Clear function
- [v110.21.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.27): fix(comments): Prevent selected comment from overlaying component insert panel
- [v110.21.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.26): fix(assistants): Wording
- [v110.21.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.25): fix(publish-control): Hide history link for data records
- [v110.21.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.24): fix(transform-flows): Update documentTransformFlows in tests
- [v110.21.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.23): fix(publication status): quick publish button not correctly aligned
- [v110.21.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.22): fix(metadata): Desk-net
- [v110.21.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.21): chore(document reference states): Support externalSystemLabel and error tooltips everywhere
- [v110.21.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.20): fix: Reenable GET requests after resolving a conflict
- [v110.21.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.19): fix(lists): Only show create button if user has create permissions
- [v110.21.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.18): fix(draftStorage): make reactive `isDirty` property computed
- [v110.21.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.17): fix: teaser sidepanel showing go to document button on wrong condition
- [v110.21.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.16): fix(comments): Make toolbar comment flyout reactive
- [v110.21.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.15): fix(deps): update dependency @livingdocs/framework from 29.4.9 to v29.4.10
- [v110.21.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.14): fix(workspace): Prevent window reload during tests
- [v110.21.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.13): fix: active translation not highlighted
- [v110.21.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.21.12): fix(dashboard): Enable sync url params for dashboards


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
