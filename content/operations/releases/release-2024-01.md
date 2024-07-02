---
type: release-notes
title: January 2024 Release
description: Technical Release Notes for release-2024-01
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-01/
  - /operations/releases/release-2024-01/release-2024-01/
---

{{< release-header
  title="January 2024 Release"
  upcoming=false
  legacy=true
  current=false
  maintained=false
  branchHandle="release-2024-01"
>}}

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-january-2024).
To learn about the necessary actions to update Livingdocs to `release-2024-01`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* [Feature Webinar Recording](https://us02web.zoom.us/rec/share/9o-Nb7rIqNkO3C9ATe2D5b7aDv-ASn8et9UEum9glHnkBmHa7MZlyt3Cr7eBVLU.WJNKFH8Lv4nKGYWT) | Passcode: j@PkK@96
* [Feature Webinar Documentation](https://docs.google.com/presentation/d/1HRI9w_mhPuIoMJeUUChel0aSqF8zu5d6CQJ_QgebqFE)
* [Dev Webinar Recording](https://us02web.zoom.us/rec/share/JML9yz-8d9z0ctgtbcRsyETNDgRypIEvZghC_EIj0gf_71c6RMpXhiOFnWg2omsw.EP2TAfIYs4uUL2GC) | Passcode: $2BSSyTt
* [Dev Webinar Slides](https://docs.google.com/presentation/d/14qFd0X_G49WWuYRlH8rTLzDlM_rMky_Ofafojr1OhS4)
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 20                                                                                       |
| NPM                            | 9                                                                                        |
| Postgres                       | 15                                                                                       |
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
| Postgres                       | (Deprecated Postgres v12)  12                                                            |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:18.4                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.6                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Breaking Changes 🔥

{{< feature-info "Release" "server" >}}
### Migrate the Postgres Database :fire:

No upstream migrations were added this release.

{{< feature-info "Requirements" "server" >}}
### Drop support for Node v18.17 :fire:

Drop support for Node versions below 18.17 due to a dependency. Use `livingdocs/server-base:20` and `livingdocs/editor-base:20` or the latest `livingdocs/server-base:18.x` or `livingdocs/editor-base:18.x` container images: `livingdocs/server-base:18.4` and `livingdocs/editor-base:18.6`.

* [Server: Remove Node <v18.17 support](https://github.com/livingdocsIO/livingdocs-server/pull/6363)

{{< feature-info "Project configuration" "server" >}}
### Custom downstream plugins paramSchema validation changes :fire:

Plugins used in other contexts than the ones stated in the [docs](https://docs.livingdocs.io/reference/document/metadata/plugins/), will now report an error during server startup.

All downstream plugins are supported by default in document metadata and media library metadata. But if a downstream plugin is used in include services, creation flows or push messages, that will now cause an error during startup.

If a downstream plugin is being used in an include service or a creation flow params schema the following configuration needs to be added to the plugin declaration:

```js
supportedPluginContexts: [
  'documentMetadata',
  'mediaLibraryEntryMetadata',
  'includeParams',
  'creationFlowParams'
]
```

You should remove the `serverConfig.useStrictSchemas` property if you set it in the previous release.

Please contact your Livingdocs customer manager if you have any problems with the limitations imposed by the supported plugin contexts.

* [Server PR: Validate plugin configuration in various contexts](https://github.com/livingdocsIO/livingdocs-server/pull/6205)

{{< feature-info "Server configuration" "server" >}}
### Config option `realtimeUpdates.enabled` :fire:

The option `serverConfig.documents.realtimeUpdates.enabled` has been removed. 
Please remove the `enabled` property from your Server configuration and replace it with one or both of the following properties instead:
  - `serverConfig.documents.realtimeUpdates.pollingEnabled`
  - `serverConfig.documents.realtimeUpdates.websocketsEnabled`

This breaking change concerns the [Teaser includes reload]({{< ref "operations/releases/release-2023-11#teaser-includes-reload" >}}) feature. Please read the feature documentation for more information.

* [Server PR: Remove `enabled` config property from `serverConfig.documents.realtimeUpdates`](https://github.com/livingdocsIO/livingdocs-server/pull/6380)

{{< feature-info "li-documents feature" "server" >}}
### Document Patch API :fire:

Document patch API `document.patch` support has been removed. Please replace it with `documentApi.executeDocumentCommands`. No data migration is required, but you will need to swap `patches` parameter with `commands`, and `user` with `userId`.

* [Server PR: Remove document patch endpoint and method](https://github.com/livingdocsIO/livingdocs-server/pull/6378)

{{< feature-info "Editing api" "server" >}}
### Endpoint `PATCH /documents/:id` :fire:

This concerns an internal API used by the Livingdocs Editor which has been used
in the past by customizations.

The Endpoint `PATCH /documents/:id` support has been removed. Please replace it with `PATCH /documents/:id/commands`. No data migration is required, but you will need to swap `patches` parameter with `commands`.

* [Server PR: Remove document patch endpoint and method](https://github.com/livingdocsIO/livingdocs-server/pull/6378)

{{< feature-info "Project configuration" "server" >}}
### Custom Channel config Properties via `uiComponent` property :fire:

Support for custom Channel config Properties via `uiComponent` property has been removed.
Please remove your property registration on the server `liServer.registerChannelConfigProperty()`.
There isn't a replacement for this functionality.

* [Server PR: Remove support for custom Channel config property](https://github.com/livingdocsIO/livingdocs-server/pull/6379)
* [Editor PR: Remove support for custom Channel config property](https://github.com/livingdocsIO/livingdocs-editor/pull/7766)

{{< feature-info "Editor UI" "editor" >}}
### Prepare Publish Flow feature :fire:

Support for the Prepare Publish Flow is removed, Publish Control is always used. No action is required.

* [Editor PR: Remove Prepare Publish Flow](https://github.com/livingdocsIO/livingdocs-editor/pull/7664)

{{< feature-info "Dashboards" "editor" >}}
### Filter Sets feature :fire:

Filter Sets feature has been removed in favor of configuring multiple dashboards to provide fast access to different sets of documents for different roles.

* [Editor PR: Remove Filter Sets](https://github.com/livingdocsIO/livingdocs-editor/pull/7737)

## Deprecations :warning:

{{< feature-info "Project Configuration" "server"  >}}
### `defaultComponents` in container directives :warning:

Container directives can define `defaultComponents`, but the config has only an effect on direct children. With `release-2024-03`, nested containers inherit the `defaultComponents` from parent containers.
Please add explicit `defaultComponents` to containers, if they shall not inherit the `defaultComponents` from parent containers.

## Features

{{< feature-info "Media Library" "editor" >}}
### Media Library UX improvements :gift:

New behavior added to the Media Library. When clicking a thumbnail on the Media Library view, a sidepanel appears with reduced details. The sidepanel allows users to edit metadata properties, but media actions and multi-language edit are not available. This view allows you to quickly inspect the details of a media library entry without leaving the Media Library view.

Hovering over the thumbnail will show the actions:
- Pencil button links to full edit page
- Magnifying glass button opens overlay with large image preview with the possibility to show a reduced set of metadata properties. The supported metadata property types are:
  - li-text
  - li-integer
  - li-boolean
  - li-date
  - li-datetime
  - li-enum
  - li-string-list

{{< feature-info "Public api" "server" >}}
### Event Actors :gift:

`actor` property has been added to the webhook payload. This property reports the actor that triggered the event. The use case can be defining a priority lane to prioritise events triggered by humans over machines or filter events by trigger actor.

The following actors are supported:
  - `user` - user triggered the event, user name is not reported in the webhook payload: `{type: 'user'}`
  - `importer` - import actor triggered the event, actor name is reported in the webhook payload: `{type: 'importer', name: 'importer-name'}`
  - `api-client` - api client triggered the event, actor name is reported in the webhook payload: `{type: 'api-client', name: 'api-client-name'}`

Example webhook payload:

```json
{
  "event": "document.delete",
  "deliveryId": "Vulsdw3-y2JLqnE13NjPa",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "test-1",
  "documentId": 123,
  "actor": {
    "type": "importer",
    "name": "Importer"
  }
}
```

{{< feature-info "Server Configuration" "server" >}}
### Secure Opensearch/Kibana :gift:

To improve security in the Livingdocs infrastructure, we have added a new authentication method to the Opensearch/Kibana stack. It is now possible to use AWS credentials methods to access the Opensearch/Kibana. The new configuration can be found in the [Server config withing `search` property]({{< ref "customising/server-configuration#search" >}}):

```js
search: {
  elasticsearchClient: {
    // AWS Credentials support for OpenSearch
    // You can configure any AWS Credentials provider supported by the AWS SDK credentials-provider-node
    // configuration provided: https://www.npmjs.com/package/@aws-sdk/credential-provider-node#supported-configuration
    // Please make sure to always define aws object, even if you don't use AWS credentials 
    aws: {
      accessKeyId: '*****',
      secretAccessKey: '*****',
      region: 'eu-central-1'
    }
  }
}
```

For production environments:
- using AWS IAM Roles you can define a token with `accessKeyId` and `secretAccessKey` in the `aws` object
- when running the Livingdocs Server in EKS, use the [IAM Roles for Service Accounts](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) feature to assign the required permissions to the Livingdocs Server pod.
- when running the Livingdocs Server in ECS/Fargate, use the [IAM Roles for Tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) feature to assign the required permissions to the Livingdocs Server task.

For local development, AWS Profile credentials can be used when connecting to remote Opensearch/Kibana. In both cases make sure to define the `region` property.

```js
search: {
  elasticsearchClient: {
    aws: {
      region: 'eu-central-1'
    }
  }
}
```

{{< feature-info "Public api" "server" >}}
### Support `publishControl.visiblePublicationDateOverride` on Import API :gift:

The `publishControl.visiblePublicationDateOverride` property can now be set within the `documents` parameter when [importing articles via the Import API]({{< ref "reference/public-api/imports/documents#import-documents" >}}). This allows you to set the visible publication date override when importing documents. As with other publish related properties, `"flags": {"autoPublish": true}` must be defined when using the Public API.

{{< feature-info "Webhooks" "server" >}}
### Add support for 'document.create' and 'document.delete' webhooks :gift:

New webhooks for document create and delete have been added to the [webhooks list]({{< ref "reference/webhooks#list-of-available-webhook-events" >}}). These webhooks are triggered when a document is created or deleted. Please find webhook payload examples below:

```json
{
  "event": "document.create",
  "deliveryId": "KIOSZpPUt8X6X-FDlnLTX",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "test-1",
  "documentId": 123,
  "actor": {
    "type": "user"
  }
}
```

```json
{
  "event": "document.delete",
  "deliveryId": "Vulsdw3-y2JLqnE13NjPa",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "test-1",
  "documentId": 123,
  "actor": {
    "type": "api-client",
    "name": "Publibot 3000"
  }
}
```

{{< feature-info "Media Library Search" "editor" >}}
### Sort options of DisplayFilters are respected in Media Library :gift:

The Media Library DisplayFilter respects sorting options. This adapts the behavior of the Table Dashboards. The sorting options are defined in the [DisplayFilter configuration]({{< ref "guides/editor/custom-dashboard-filters/index" >}}).

This feature has also been backported to `release-2023-11` and `release-2023-09`.

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2024-4068](https://github.com/advisories/GHSA-grv7-fg5c-xmjg) patched in `braces` v3.0.3
* [CVE-2023-26159](https://github.com/advisories/GHSA-jchw-25xp-jwwc) patched in `follow-redirects` v1.15.5
* [CVE-2023-36665](https://github.com/advisories/GHSA-h755-8qp9-cq85) patched in `protobufjs` v7.2.5
* [CVE-2024-28176](https://github.com/advisories/GHSA-hhhv-q57g-882q) patched in `jose` v4.15.5
* [CVE-2024-28849](https://github.com/advisories/GHSA-cxjh-pqwp-8mfp) patched in `follow-redirects` v1.15.6
* [CVE-2024-28863](https://github.com/advisories/GHSA-f5x3-32g6-xq36) patched in `tar` v6.2.1
* [CVE-2024-29041](https://github.com/advisories/GHSA-rv95-896h-c2vc) patched in `express` v4.19.2
* [CVE-2024-30260](https://github.com/advisories/GHSA-m4v8-wqvr-p9f7) patched in `undici` v5.28.4
* [CVE-2024-30261](https://github.com/advisories/GHSA-9qxr-qj54-h672) patched in `undici` v5.28.4
* [CVE-2024-37168](https://github.com/advisories/GHSA-7v5v-9h63-cj86) patched in `@grpc/grpc-js` v1.9.15
* [CVE-2024-37890](https://github.com/advisories/GHSA-3h5v-q93c-6h6q) patched in `ws` v8.17.1

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2024-4068](https://github.com/advisories/GHSA-grv7-fg5c-xmjg) patched in `braces` v3.0.3
* [CVE-2023-26159](https://github.com/advisories/GHSA-jchw-25xp-jwwc) patched in `follow-redirects` v1.15.5
* [CVE-2023-51701](https://github.com/advisories/GHSA-v2v2-hph8-q5xp) patched in `@fastify/reply-from` v9.7.0
* [CVE-2024-21501](https://github.com/advisories/GHSA-rm97-x556-q36h) patched in `sanitize-html` v2.12.1
* [CVE-2024-28849](https://github.com/advisories/GHSA-cxjh-pqwp-8mfp) patched in `follow-redirects` v1.15.6
* [CVE-2024-28863](https://github.com/advisories/GHSA-f5x3-32g6-xq36) patched in `tar` v6.2.1
* [CVE-2024-29180](https://github.com/advisories/GHSA-wr3j-pwj9-hqq6) patched in `webpack-dev-middleware` v6.1.2
* [CVE-2024-30260](https://github.com/advisories/GHSA-m4v8-wqvr-p9f7) patched in `undici` v5.28.4
* [CVE-2024-30261](https://github.com/advisories/GHSA-9qxr-qj54-h672) patched in `undici` v5.28.4
* [CVE-2024-37890](https://github.com/advisories/GHSA-3h5v-q93c-6h6q) patched in `ws` v8.17.1

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v245.0.50](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.50): fix(li-tree): Fix reference extraction of translated document references in li-tree
- [v245.0.49](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.49): fix(deps): update dependency @livingdocs/framework from 27.2.17 to v27.2.18
- [v245.0.48](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.48): fix(deps): update dependency @livingdocs/framework from 27.2.14 to v27.2.17
- [v245.0.47](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.47): fix: document create functions require a title property
- [v245.0.46](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.46): fix(includes): Convert preloaded metadata to JSON
- [v245.0.45](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.45): fix(api-clients): Do not return archived clients when querying them
- [v245.0.44](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.44): fix(retresco): Properly delete retresco enrich jobs from redis after processing
- [v245.0.43](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.43): fix(azure-blob-storage): Correctly handle processing errors by propagating to all the streams
- [v245.0.42](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.42): fix(security): Patch security vulnerabilities CVE-2024-30260 and CVE-2024-30261 in `undici`, CVE-2024-29041 in `express`, CVE-2024-28863 in `tar`, CVE-2024-28849 in `follow-redirects`, CVE-2024-28176 in `jose`, and CVE-2023-36665 in `protobufjs`
- [v245.0.41](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.41): fix(queue): Properly await in lib/async-queue
- [v245.0.40](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.40): fix(planning boards): allow search strategy config
- [v245.0.39](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.39): fix(project-secrets): Fix support for AWS Aurora for Postgres v14.9
- [v245.0.38](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.38): fix(deps): update dependency ioredis from 5.3.2 to v5.4.1
- [v245.0.37](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.37): fix(hugo): Return promise from async controller functions
- [v245.0.36](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.36): fix(lists): Define limit as option on `documentListModel.getInbox()`, as it is possible to retrieve more than 1010 leading to `Too many results` error
- [v245.0.35](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.35): fix(deps): update dependency exifreader from 4.17.0 to v4.21.1
- [v245.0.34](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.34): fix(deps): Upgrade @livingdocs/framework@release-2024-01
- [v245.0.33](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.33): fix(document-inbox): Only retrieve documentId and title fields from elasticsearch
- [v245.0.32](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.32): fix(local-authentication): Allow null for projectId
- [v245.0.31](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.31): fix(deps): Upgrade to @livingdocs/framework@27.2.12
- [v245.0.30](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.30): fix(local-authentication): Adjust tests to new schema
- [v245.0.29](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.29): fix(security): Patch vulnerabilities `CVE-2024-24758` on `undici` and `GHSA-9h6g-pr28-7cqp` on `nodemailer`
- [v245.0.28](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.28): fix(images): Do not abort exif extraction with invalid dates
- [v245.0.27](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.27): fix(memory-cache): Delete channel config key from cache if value is falsy
- [v245.0.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.26): chore(desknet): Add tests for token refresh
- [v245.0.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.25): chore(example-server): use `li-push-messages` handler with longer execution time
- [v245.0.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.24): chore(example-server): use `li-push-messages` handler with longer execution time
- [v245.0.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.23): fix(OIDC): Skip logging an error when thrown error is `nonce expired` during OIDC flow
- [v245.0.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.22): fix: add npg for duplicate filtering
- [v245.0.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.21): fix(image-processing): Fix extracting metadata from large image headers
- [v245.0.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.20): fix(mediaLibrary): Map the state attribute on media library entries based on the archived flag
- [v245.0.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.19): fix(openid-connect): Remove log when nonce expires in Redis
- [v245.0.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.18): fix(realtime): Emit 'document.updated' to avoid collaboration UI issues
- [v245.0.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.17): fix(public-api): Restrict /search ids offset to 9'999 entries as elasticsearch only supports 10'000 and we prefetch 1 for the cursor
- [v245.0.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.16): fix(documents): Throw better error when calling unpublish on a document that's not public
- [v245.0.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.15): fix: update package-lock for argon2
- [v245.0.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.14): fix(deps): update dependency @livingdocs/secure-password from 5.0.2 to v5.0.3
- [v245.0.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.13): fix(composition-api): Make sure we never load errors or null values into preloaded values
- [v245.0.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.12): fix(notifications): Use link which opens the task side panel
- [v245.0.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.11): chore(commands): Add failed precondition name into conflict error
- [v245.0.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.10): fix(imports): Remove result count rendering on imports page
- [v245.0.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.9): fix(dashboard-sources): ensure correct order of returned documents
- [v245.0.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.8): fix(notifications): Use project defaultLocale for labels in task emails
- [v245.0.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.7): fix: allow downstream plugin in creation flow params
- [v245.0.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.6): chore: pin framework to 27.2.7
- [v245.0.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.5): fix(media-library): Normalize upload error code
- [v245.0.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.4): fix(media-library): Use extracted mime type for file uploads
- [v245.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.3): fix(schema): Add message to createSchemaApi validation errors
- [v245.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.2): fix(release-2024-01): Update framework to 27.2.5 (release-2024-01 tag)

### Livingdocs Editor Patches
- [v106.0.114](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.114): fix(deps): update dependency @livingdocs/framework from 27.2.17 to v27.2.18
- [v106.0.113](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.113): fix(security): Patch security vulnerabilities CVE-2024-4068 in `braces`, and CVE-2024-37890 in `ws`
- [v106.0.112](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.112): chore(metadata): Improve li-image dropzone message
- [v106.0.111](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.111): fix(deps): update dependency @livingdocs/framework from 27.2.16 to v27.2.17
- [v106.0.110](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.110): fix(comments): Do not emit comment update events for `eventSource: remote`
- [v106.0.109](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.109): fix(useDocumentSearch): transform baseFilters to filterStates
- [v106.0.108](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.108): fix(workspace): Prevent infinite refetch loop while on conflict screen
- [v106.0.107](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.107): fix(draft-storage): Fix function context in backported fix
- [v106.0.106](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.106): fix: update framework to fix safari 17.5 bug
- [v106.0.105](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.105): fix(draft-storage): Fix document conflicts with self
- [v106.0.104](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.104): fix(print): Fix this.draft context in print metadata plugin
- [v106.0.103](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.103): fix(draft-storage): Trigger digest when entering document conflict screen
- [v106.0.102](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.102): fix: change retresco idle to 30s
- [v106.0.101](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.101): fix(drop-actions): Make uploadOptions optional
- [v106.0.100](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.100): fix(trackjs): Do not use serialize-error as we suspect it can't handle circular references in our production workloads
- [v106.0.99](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.99): chore: Revert reactive change on draft.remoteDocument
- [v106.0.98](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.98): chore: Add last save try and save success to autosave issue log
- [v106.0.97](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.97): fix(documents): Prevent overwriting newer revisions on save errors
- [v106.0.96](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.96): fix(print modal): Layout
- [v106.0.95](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.95): fix(create print article): handle overflow for the publication dropdown
- [v106.0.94](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.94): fix(groups): Increment version when updating group members
- [v106.0.93](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.93): fix(kanban-dashboard): Load document state from database on kanban dashboards
- [v106.0.92](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.92): chore(deps): Remove worker check
- [v106.0.91](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.91): fix(permissions): Also extract content types from `{not: {key: 'contentType', term: 'regular'}}` baseFilters to support permissions correctly
- [v106.0.90](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.90): fix(li-date-time-range-filter): Select correct filter key
- [v106.0.89](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.89): fix(tests): adapt tests for better li-image metadata UI testing
- [v106.0.88](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.88): fix(security): Update vulnerable dependencies in `cypress/` and `server/`, namely `follow-redirects`, `@fastify/reply-from` and `undici`
- [v106.0.87](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.87): fix(comyan): correctly notify the user on comyan imageData loading error
- [v106.0.86](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.86): fix(editor): Disable proofreading for history
- [v106.0.85](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.85): fix(ticker): Reassign shallowReactive attributes to trigger reactivity
- [v106.0.84](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.84): fix: hide remaining media library button when `showUi: false`
- [v106.0.83](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.83): fix(editor): Prefill existing teasers when dropped from side panel
- [v106.0.82](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.82): fix: Blur components when exiting the edit mode
- [v106.0.81](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.81): fix(dashboards): Do not rename dashboardType variable
- [v106.0.80](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.80): fix(tasks): the task panel is not hidden anymore for narrow screens, so we can allow the toolbar action
- [v106.0.79](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.79): chore(collaboration): Simplify collaboration bar to only use one event listener
- [v106.0.78](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.78): fix(properties-panel): Only show transforms when there are alternatives
- [v106.0.77](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.77): fix(comments): Do not allow `@assignment` of api client and import users
- [v106.0.76](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.76): refactor: remove lodash get
- [v106.0.75](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.75): fix(page): list button only enabled with permissions
- [v106.0.74](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.74): fix: ensure same mediaId and recreate crops after image was replaced
- [v106.0.73](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.73): test: Use cy.spy instead of download request interceptor
- [v106.0.72](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.72): fix(proofreading): skip highlighting of invisible component elements
- [v106.0.71](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.71): fix(deps): Upgrade @livingdocs/framework@release-2024-01
- [v106.0.70](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.70): fix(ticker): Always load the design of ticker entries before rendering them
- [v106.0.69](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.69): fix(images): Fix named crops for imported images that don't have an imageService configured
- [v106.0.68](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.68): fix(local-authentication): Do not include projectId if it is null
- [v106.0.67](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.67): chore(vue-components): Use correct lifecycle method in li-angular-component
- [v106.0.66](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.66): fix(dashboard): Use dashboard handle as fallback in cache key
- [v106.0.65](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.65): fix(deps): Upgrade to @livingdocs/framework@27.2.12
- [v106.0.64](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.64): fix(url): Allow URLs without a TLD
- [v106.0.63](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.63): fix(groups): Fix li-tag usage in angular. The `text=` attribute gets bound as variable
- [v106.0.62](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.62): fix(media-library): no longer show error in console
- [v106.0.61](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.61): fix(display-filter): Reset filter if custom range is not defined properly
- [v106.0.60](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.60): fix(security): Patch vulnerability `CVE-2024-24758` on `undici`
- [v106.0.59](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.59): fix(properties): Don't warn about config when there is no reference
- [v106.0.58](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.58): chore: Remove debug console log
- [v106.0.57](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.57): fix(workspace): Reload document on design change
- [v106.0.56](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.56): fix(lightbox): use 1680px breakpoint for metadata visibility
- [v106.0.55](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.55): fix: close cropping dialog on cancel for `focalPointOnly` behavior
- [v106.0.54](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.54): fix(ticker): Skip softLock checks for ticker entries
- [v106.0.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.53): fix(document-preview): Post to wildcard if the origin uses a sandbox without `allow-same-site`. Without it postMessage doesn't work at all.
- [v106.0.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.52): chore: Remove TODO, leave the comment about workspace initialization
- [v106.0.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.51): fix(li-table): Correctly compute whether a table cell is in the overflow
- [v106.0.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.50): fix(toolbar): Hide metadata overlay when opening tasks sidebar
- [v106.0.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.49): chore(publish-control): Remove unused property
- [v106.0.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.48): fix(li-image): Do not allow picking images from a document that are not present in the media library
- [v106.0.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.47): fix(link-edit): Return link data property for prefilling
- [v106.0.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.46): fix: Use input or change events instead of keyup
- [v106.0.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.45): fix(popover): save on removing specialproviders and make custom elements work on vue popover
- [v106.0.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.44): fix(video upload): showing transcoding when uploading single file
- [v106.0.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.43): fix(filters): Reposition filter popups when selecting values
- [v106.0.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.42): fix(li-image): actually reload document images when content changed
- [v106.0.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.41): fix(publish-control-delivery): Show delivery state when opening publish control panel
- [v106.0.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.40): fix(canvas): Reassign state.areas to trigger reactivity
- [v106.0.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.39): fix(realtime): Add version to refetch stub response in tests
- [v106.0.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.38): fix(external systems): show goTo action in dashboards only for documents without an externalSystem
- [v106.0.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.37): fix(publish-control-panel): Update running task whenever publish control panel changes visibility state
- [v106.0.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.36): fix(ticker): Ensure currently created ticker entries never get removed as they are not present in the elasticsearch result for a few seconds
- [v106.0.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.35): fix(table-dashboard): Update model when dashboardConfig changes
- [v106.0.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.34): fix(metadata): Feedback stacking
- [v106.0.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.33): fix(push messages): allow push for published articles with unpublished changes
- [v106.0.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.32): test(links): Add cypress tests
- [v106.0.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.31): fix(dashboards): Fix tests
- [v106.0.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.30): fix(docked content): Layering
- [v106.0.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.28): fix(li-link-edit): apply correct default attributes for internal urls
- [v106.0.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.27): fix: pass directive config.search.displayFilters and config.search.baseFilters to the Angular embed teaser
- [v106.0.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.26): chore(editor): Remove online listener from autosave on unload
- [v106.0.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.25): fix(deps): update dependency @livingdocs/editable.js from 5.0.0 to 5.0.2
- [v106.0.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.24): fix(text-formatting): Re-calculate the text formatting states when toggling bold/italic buttons
- [v106.0.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.23): fix(imports): Remove result count rendering on imports page
- [v106.0.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.22): fix: avoid invalid component inserted after pressing enter
- [v106.0.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.21): fix: make sure publish button is not rendered outside of table
- [v106.0.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.20): chore: remove unused `li-metadata-form-component` component
- [v106.0.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.19): fix(tasks): Add metadataProperty.config.label fallback
- [v106.0.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.18): fix(workspace): Add cleanup fn to leaveWindow event handler response
- [v106.0.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.17): fix(search): Hide load more button when returning to result groups
- [v106.0.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.16): fix: translate unpublished
- [v106.0.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.15): fix(shortcuts): allow shortcuts for double low-9 quotation mark and it's mirror
- [v106.0.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.14): fix(delivery builds): fix label for relative time of build start
- [v106.0.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.13): fix(ticker): Save publication date on first attempt
- [v106.0.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.12): fix(tasks): Only show remove action when the task has a value
- [v106.0.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.11): fix(publish-control): Hide update tasks link when in read-only mode
- [v106.0.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.10): fix(editor): Prefill teasers when dropped from side panel
- [v106.0.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.9): fix: resolve default components via container method
- [v106.0.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.8): fix(api): Improve asset proxy error handling
- [v106.0.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.7): fix: add back the stopping of click event propagation
- [v106.0.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.6): fix: support component drag&drop in safari 17.2
- [v106.0.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.5): fix(themes): Move theme logic from bootstrap to session initialization
- [v106.0.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.4): fix(li-link-edit): extend typeahead search baseFilters from useDashboard
- [v106.0.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v106.0.3): fix(release-2024-01): Update framework to 27.2.5 (release-2024-01 tag)


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
