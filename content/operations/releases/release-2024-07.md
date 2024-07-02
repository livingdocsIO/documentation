---
type: release-notes
title: July 2024 Release
description: Technical Release Notes for release-2024-07
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-07/
  - /operations/releases/release-2024-07/release-2024-07/
---

{{< release-header
  title="July 2024 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2024-07"
>}}

## PRs to Categorize

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-july-2024).
To learn about the necessary actions to update Livingdocs to `release-2024-07`, read on.

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

## Deployment

### Before the deployment

No prior preparations are required before rolling for this release.

### After the deployment

No prior preparations are required after rolling out this release.

## Breaking Changes 🔥

{{< feature-info "Release" "server" >}}
### Migrate the Postgres Database :fire:
No upstream migrations were added this release.

{{< feature-info "Exposed functionality" "server" >}}
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

Using Comyan drag&drop without providing a metadata mapping configuration is deprecated and support is removed with release-2025-01.
Please specify a `targetMediaType` for the Comyan integration in the project settings and configure a Comyan metadata mapping for that particular media type.

{{< feature-info "Integrations" "server" >}}
### Comyan reporting from upstream :warning:

The automatic registration for the comyan reporting hooks is deprecated and support is removed with release-2025-01. 
Please migrate to the new config and hook described [here](#comyan-usage-reporting-gift).

## Features

{{< feature-info "Livingdocs Assistants" "server" >}}
### Livingdocs Assistants: Proposals :gift:

{{< feature-info "Livingdocs Assistants" "server" >}}
### Livingdocs Assistants: Metadata properties :gift:

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

Additonally this opens up flexibility to customize when comyan usage is reported for example only registering for a certain project and execute it
for desired `contentTypes`:

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

{{< feature-info "Command API" "server" >}}
### Command API enhancements :gift:


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
- [v254.0.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.11): fix(print): Fix print metadata access in hugo-export
- [v254.0.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.10): fix(documents): Use target content type settings during transform
- [v254.0.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v254.0.9): fix(release-2024-07): Update framework to v29.4.9 (release-2024-07 tag)

### Livingdocs Editor Patches
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
