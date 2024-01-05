---
type: release-notes
title: January 2024 Release
description: Technical Release Notes for release-2024-01
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-01/
  - /operations/releases/release-2024-01/release-2024-01/
---

{{< release-header
  title="January 2024 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2024-01"
>}}

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-january-2024).
To learn about the necessary actions to update Livingdocs to `release-2024-01`, read on.

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
| Livingdocs Server Docker Image | livingdocs/server-base:18.3                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.5                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}
### Migrate the Postgres Database :fire:

No upstream migrations were added this release.

{{< feature-info "Operations" "server" >}}
### Drop support for Node v18.17 :fire:

Drop support for Node versions below 18.17 due to a dependency. If you use Livingdocs' `livingdocs/server-base:18.3` or `livingdocs/editor-base:18.3` make sure you update to the latest Docker container images: `livingdocs/server-base:18.4` and `livingdocs/editor-base:18.4` or upgrade `livingdocs/server-base:20` and `livingdocs/editor-base:20`.

* [Server: Remove Node <v18.17 support](https://github.com/livingdocsIO/livingdocs-server/pull/6363)

{{< feature-info "Project config" "server" >}}
### Custom downstream plugins paramSchema validation changes :fire:

Plugins used in other contexts than the ones stated in the [docs](https://docs.livingdocs.io/reference/document/metadata/plugins/), will now report an error during server startup.

All downstream plugins are supported by default in document metadata and media library metadata. But if a downstream plugin is used in include services, creation flows or push messages, that will now cause an error during startup.

If a downstream plugin is being used in an include service params schema the following configuration needs to be added to the plugin declaration:

```
supportedPluginContexts: [
  'documentMetadata',
  'mediaLibraryEntryMetadata',
  'includeParams'
]
```

You should remove the `serverConfig.useStrictSchemas` property if you set it in the previous release.

Please contact your Livingdocs customer manager if you have any problems with the limitations imposed by the supported plugin contexts.

* [Server PR: Validate plugin configuration in various contexts](https://github.com/livingdocsIO/livingdocs-server/pull/6205)

{{< feature-info "Server config" "server" >}}
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
### Endpoint `PATCH /document/:id` :fire:

This concerns an internal API used by the Livingdocs Editor which has been used
in the past by customizations.

The Endpoint `PATCH /document/:id` support has been removed. Please replace it with `PATCH /document/:id/commands`. No data migration is required, but you will need to swap `patches` parameter with `commands`.

* [Server PR: Remove document patch endpoint and method](https://github.com/livingdocsIO/livingdocs-server/pull/6378)

{{< feature-info "Publish Flow" "editor" >}}
### Custom Channel config Properties via `uiComponent` property :fire:

Support for custom Channel config Properties via `uiComponent` property has been removed.
Please remove your property registration on the server `liServer.registerChannelConfigProperty()`.
There isn't a replacement for this functionality.

* [Server PR: Remove support for custom Channel config property](https://github.com/livingdocsIO/livingdocs-server/pull/6379)
* [Editor PR: Remove support for custom Channel config property](https://github.com/livingdocsIO/livingdocs-editor/pull/7766)

{{< feature-info "Publish Flow" "editor" >}}
### Prepare Publish Flow feature :fire:

Support for the Prepare Publish Flow is removed, Publish Control is always used. No action is required.

* [Editor PR: Remove Prepare Publish Flow](https://github.com/livingdocsIO/livingdocs-editor/pull/7664)

{{< feature-info "Dashboards" "editor" >}}
### Filter Sets feature :fire:

Filter Sets feature has been removed in favor of configuring multiple dashboards to provide fast access to different sets of documents for different roles.

* [Editor PR: Remove Filter Sets](https://github.com/livingdocsIO/livingdocs-editor/pull/7737)

## Deprecations :warning:

No Deprecations listed this release.

## Features

{{< feature-info "Media Library" "editor" >}}
### Media Library UX improvements :gift:

When a user wants to compare metadata information of several different images, the detail view needs to be opened and the scrolling and pagination state of the dashboard is lost. We'd like to improve that by allowing the user to see a slightly stripped down detail view of the media entry directly in a side panel on the dashboard, so the context is not lost. Media Library Lightbox. When users are browsing the media library, they want a quick way to view the image in a larger size and also see some basic information about it.
Move edit action from context-menu into card

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


{{< feature-info "Operations" "server" >}}
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
### Add support for 'document.create', and 'document.delete' webhooks :gift:

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

{{< feature-info "Project configuration" "server" >}}
### Allow `contentType.defaultComponents` config :gift:

Configuration `contentType.defaultComponents` has been added to the [project configuration]({{< ref "reference/project-config/content-types" >}}). This configuration allows you to define default components for a content type. The default components will be added to the document when the content type is selected. The default components are added to the end of the document.

```js
contentTypes: [
  {
    handle: 'gallery',
    documentType: 'article',
    defaultComponents: {
      paragraph: 'p',
      image: 'img',
      video: 'video',
      audio: 'audio',
      html: 'html'
    }
  }
]
```

This feature has also been backported to `release-2023-11`.

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

No known vulnerabilities. :tada:

### Livingdocs Editor

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v245.0.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.9): fix(dashboard-sources): ensure correct order of returned documents
- [v245.0.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.8): fix(notifications): Use project defaultLocale for labels in task emails
- [v245.0.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.7): fix: allow downstream plugin in creation flow params
- [v245.0.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.6): chore: pin framework to 27.2.7
- [v245.0.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.5): fix(media-library): Normalize upload error code
- [v245.0.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.4): fix(media-library): Use extracted mime type for file uploads
- [v245.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.3): fix(schema): Add message to createSchemaApi validation errors
- [v245.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v245.0.2): fix(release-2024-01): Update framework to 27.2.5 (release-2024-01 tag)

### Livingdocs Editor Patches
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
