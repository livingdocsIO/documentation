---
type: release-notes
title: November 2023 Release
description: Technical Release Notes for release-2023-11
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-11/
  - /operations/releases/release-2023-11/release-2023-11/
---

{{< release-header
  title="November 2023 Release"
  upcoming=false
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2023-11"
>}}

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-november-2023).
To learn about the necessary actions to update Livingdocs to `release-2023-11`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* [Feature Webinar Recording](https://us02web.zoom.us/rec/share/Itybn2qYQy8T4k4P4_JStpeOsz6pKfDZr2NZLefQWxqZoZ3DyuoR_Weja7AZYi40.aHaypmIkMkhB20YN) | Passcode: .9nrZ6&E
* [Feature Webinar Documentation](https://docs.google.com/presentation/d/1upho7HMTD5o299quylTpuaepHoqxhxkfvtDp1lCYbj8/edit?usp=sharing)
* [Dev Webinar Recording](https://us02web.zoom.us/rec/share/0fcDceS2xS_USakTITa9o3APdY3OV3-TEmXk8NJxB022zFLiFDWEyY1l3WxejQ-J.3d0kEkKXVKi15Nom) | Passcode: QbEfU+6t
* [Dev Webinar Slides](https://docs.google.com/presentation/d/1Q5KMPQVOlheVf5D4Zk1QgQN44BhVGIVtwTmtohwcpIY/edit#slide=id.g29a941935ef_0_36)
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
| Postgres                       | 12 (Deprecated Postgres v12)                                                             |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:18.3                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.5                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Breaking Changes 🔥

### Migrate the Postgres Database :fire:

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
# migration 194-actors.js
#   adds new table actors
livingdocs-server migrate up
```

Before upgrading to November release, please upgrade to the latest `release-2023-09` v237.2.32. A patch was released to allow compatibility with the new database schema.

The next step, you should run `livingdocs-server migrate up` from November release instance to apply the new User/Actors schema. New release instances will not work until the migrations above are applied.

Previous release instances will continue to work with the new database schema after running the migrations. Finally, you can deploy the new release instances. 

Note: After running the migration `userApi.findById()` using the import user id doesn't work anymore, but `projectApi.getImportUser(projectId)` still returns the same id as before.

{{< feature-info "li-includes feature" "server" >}}
### `includeApi.registerService()` and `includeApi.registerServices()` are now synchronous methods :fire:

`includesApi.registerService()` and `includesApi.registerServices()` behaviour has changed and are now synchronous methods.
If you rely on its return value to be a Promise (e.g. when accessing `.then`), you have to update your code.

But with this release it is recommended to use `liServer.registerIncludeServices()` directly.

* [Server PR: Add new downstream extension API methods](https://github.com/livingdocsIO/livingdocs-server/pull/6169)

{{< feature-info "Metadata plugins" "server" >}}
### `li-reference` and `li-reference-list` metadata plugins support has been removed :fire:

Please replace `li-reference` with `li-document-reference` and `li-reference-list` with `li-document-references`.
No data migration is required, but you will need to remove `referenceType` from the metadata plugin config.
If you were using `ui.config.searchOnlyPublished` on `li-reference` definitions, you should migrate to `config.published`.

* [Server PR: Remove legacy li-reference and li-reference-list metadata plugins](https://github.com/livingdocsIO/livingdocs-server/pull/6186)
* [Editor PR: Remove legacy li-reference and li-reference-list metadata plugins](https://github.com/livingdocsIO/livingdocs-editor/pull/7569)

{{< feature-info "DocumentVersion" "server" >}}
### Remove old getter functions on DocumentVersion class :fire:

Remove getter functions which have a replacement on the `DocumentVersion` class:
- Remove `documentVersion.getContentType()`, please use `documentVersion.contentType`
- Remove `documentVersion.getDocumentType()`, please use `documentVersion.documentType`
- Remove `documentVersion.getProjectId()`, please use `documentVersion.projectId`
- Remove `documentVersion.getChannelId()`, please use `documentVersion.channelId`
- Remove `documentVersion.getDocumentId()`, please use `documentVersion.documentId`
- Remove `documentVersion.getDesignDescriptor()`, please use `documentVersion.design`
- Remove `documentVersion.getDesignVersion()`, please use `documentVersion.design.version`
- Remove `documentVersion.getTitle()`, please use `documentVersion.title`
- Remove `documentVersion.getMetadata()`, please use `documentVersion.metadata`
- Remove `documentVersion.getMetadataSource()`, please use `documentVersion.metadataSource`
- Remove `documentVersion.getSystemdata()`, please use `documentVersion.systemdata`

* [Server PR: Clean up DocumentVersion class](https://github.com/livingdocsIO/livingdocs-server/pull/6153)

{{< feature-info "Editor configuration" "editor" >}}
### Remove support for metadata based scheduling supported via `customPublicationDateField` config

Editor configuration parameter `document.customPublicationDateField` support has been removed. With this change metadata based scheduling is no longer supported.
Please migrate to `contentType.publishControl.publishSchedule` within [Publish Control feature](https://docs.livingdocs.io/guides/editor/publish-control/publish-control-migration/).

* [Editor PR: Remove support for configuration `document.customPublicationDateField`](https://github.com/livingdocsIO/livingdocs-editor/pull/7622)

{{< feature-info "Project configuration" "server" >}}
### Remove `label` config of `li-language` metadata plugin :fire:

The deprecated `label` configuration for metadata properties of type `li-language` does not have an effect anymore. Please remove the `li-language` `label` from your metadata configs in contentType configurations.

The language labels are now supported natively in the Livingdocs Editor.

* [Editor PR: Remove li-language's label property from the UI](https://github.com/livingdocsIO/livingdocs-editor/pull/7619)

## Deprecations 🚧

{{< feature-info "Operations" "server" >}}
### Postgres v12 :warning:

Postgres v12 support is deprecated and will be removed in March 2024 release (`release-2024-03`).

{{< feature-info "li-documents feature" "server" >}}
### Document Patch API :warning:

Document patch API `document.patch` has been deprecated, and will be removed in `release-2024-01`. Please replace it with `documentApi.executeDocumentCommands`. No data migration is required, but you will need to swap `patches` parameter with `commands`, and `user` with `userId`.

{{< feature-info "Editor configuration" "editor" >}}
### iFramely default extractor added by default :warning:
`initializeOembedMetadataExtractor()` is deprecated and will be removed in `release-2024-03`.

The following code should be removed from the editor configuration:
```js
// app/editor.js
const Iframely = require('@livingdocs/editor/app/scripts/modules/iframely')
const defaultExtractor = require('@livingdocs/editor/app/scripts/modules/iframely/default_metadata_extractor')
Iframely.initializeOembedMetadataExtractor(defaultExtractor)
```
If initializeOembedMetadataExtractor() is called with a custom extractor please get in touch.

* [Editor PR: iframely - always add default oembedExtractor](https://github.com/livingdocsIO/livingdocs-editor/pull/7564)

{{< feature-info "Editing api" "server" >}}
### Endpoint `PATCH /document/:id` :warning:

This concerns an internal API used by the Livingdocs Editor which has been used
in the past by customizations.

The Endpoint `PATCH /document/:id` will be removed in `release-2024-01`. Please replace it with `PATCH /document/:id/commands`. No data migration is required, but you will need to swap `patches` parameter with `commands`.

{{< feature-info "Project configuration" "server" >}}
### Metadata plugins and paramSchema validation changes :warning:

Plugins used in other contexts than the ones stated in the [docs](https://docs.livingdocs.io/reference/document/metadata/plugins/), will report an error during server startup with release-2024-01.

All downstream plugins are supported by default in document metadata and media library metadata. But if a downstream plugin is used in include services, creation flows or push messages, that will cause an error during startup.

If a downstream plugin is being used in an include service or creation flow params schema the following configuration needs to be added to the plugin declaration:

```js
supportedPluginContexts: [
  'documentMetadata',
  'mediaLibraryEntryMetadata', 
  'includeParams',
  'creationFlowParams'
]
```

To opt-in to the new validation you can set `serverConfig.useStrictSchemas: true`. This will allow you to find any invalid usage of plugins and fix them before release-2024-01.

Please contact your Livingdocs customer manager if you have any problems with the limitations imposed by the supported plugin contexts.

{{< feature-info "Server configuration" "server" >}}
### Config option `realtimeUpdates.enabled` :warning:

The option `serverConfig.documents.realtimeUpdates.enabled` has been deprecated. It will be removed in {{< release "release-2024-01" >}}.

Please remove the `enabled` property and use `pollingEnabled` and/or `websocketsEnabled` instead. The `enabled` value will be transferred to `pollingEnabled` if `pollingEnabled` does not have a value defined.

This deprecation is related to the [Teaser includes reload]({{< relref "#real-time-teaser-includes-gift" >}}) feature. Please read the feature documentation for more information.


## Features 🎁

{{< feature-info "Public api" "server" >}}
### Document Command API :gift:

The Document Command API is exposed on the Public API and allows external services to change document content and metadata and even publish, e.g. making article title A/B-test easier.

Document Command API adds `PATCH /api/v1/documents/:documentId/commands` endpoint on the Public API, which accepts the following commands to be executed on the document: `setMetadataProperty`, `setEditableDirective` and `publish`. The scope to authenticate requests for this new endpoint is `public-api:write`.

More information about the Document Command API can be found in the [Document Command API documentation]({{< ref "reference/public-api/document-command-api.md" >}}).

An example of a `setMetadataProperty` command would look like this:

```shell
ACCESS_TOKEN=ey1234
curl -k -X PATCH "https://server.livingdocs.io/api/v1/documents/:id/commands" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $ACCESS_TOKEN" \
  --data-binary @- << EOF
  {
    "commands": [{"operation": "setMetadataProperty", "propertyName": "title", "value": "updated title"}]
  }
EOF
```

With the introduction of the Document Command API, we needed a way to differenciate if a document was modified by a user (human) or a token (machine), therefore the 'actor' concept has been introduced. When a document is updated by a token via the Document Command API, the document will show the specific token that authorized the request.

Please run the migrations for this release to add the new `actors` table to your database. This migration will add Import users and API clients to `actors` table. The actor name will be used to show the actor that modified a document. When reporting modifications on a document users will be obscured and the UI will only report that a human did a modification, while API clients will be reported with their name.

`userApi.findById()` using the import user id doesn't work anymore, but `projectApi.getImportUser(projectId)` still returns the same id as before.
Every user has an `actorId` which is equal to `userId`.


{{< feature-info "Search bar" "Editor" >}}
### Enhanced search syntax 'simple search' :gift:

Users in the Editor can now use new syntax in the Media Library search bar
and also in document dashboards that use the new config option `search` described below.

This release we have improved query syntax to allow users to use special operator to improve text based search results. The new search query syntax supports the following operators:
- `+` signifies AND operator
- `|` signifies OR operator
- `-` negates a single token
- `"` wraps a number of tokens to signify a phrase for searching

For example, the query `quick brown +fox -news` will search for documents containing `quick` and `brown` and `fox` and documents that do not contain `news`, i.e. `quick` AND `brown` AND `fox` AND NOT `news`.

Previously the default operator was `OR`, which meant that the query `quick brown fox` was interpreted as `quick` OR `brown` OR `fox`, i.e. documents would match if they contained any of the three tokens.

You can also use `"` to search for phrases, for example `quick "brown fox"` will only match documents that contain the exact phrase `brown fox` and `quick`, e.g. `The quick fox is brown` wouldn't result in a match, but `The brown fox is quick` would.

Using `|` (OR) operator will result in a match if any of the tokens are present in the document, e.g. `quick | brown | fox` will match documents that contain `quick` OR `brown` OR `fox`, not necessarily all three. Which was the behaviour of search queries in previous releases.

This behaviour is enabled in the Media Library search, and it can be enabled per dashboard for documents with the following dashboard configuration in your editorSettings within the project configuration:

```js
editorSettings: {
  dashboards: [{
    // ...
    search: {
      strategy: "simple"
    }
  }]
}
```


{{< feature-info "liServer methods" "server" >}}
### Add `liServer.register...()` methods :gift:

We have extended the liServer API to allow to register extensions and
custom routes. This simplifies the server initialization and also improves
IDE autocomplete support.

- Direct Extension Registration
  - `liServer.registerPublicationHooks({...})`, previously `liServer.features.api('li-documents').registerPublicationHooks({...})`
  - `liServer.registerGlobalPublicationHooks({...})`, previously `liServer.features.api('li-documents').registerPublicationServerHooks({...})`
  - `liServer.registerListHooks({...})`, previously `liServer.features.api('li-document-lists').registerListHooks({...})`

- Data Sources
  - `liServer.registerDataSource({...})`, previously `liServer.features.api('li-data-sources').register({...})`
  - `liServer.registerDataSources([{...}, {...}])`, previously `liServer.features.api('li-data-sources').register({...})`

- Create / Generate Functions
  - `liServer.registerCreateFunction({...})`, previously `liServer.features.api('li-documents').document.registerCreateFunction({...})`
  - `liServer.registerTransformFunction({...})`, previously `liServer.features.api('li-documents').document.registerTransformFunction({...})`
  - `liServer.registerCreateFunctions([{...}, {...}])`, previously `liServer.features.api('li-documents').document.registerCreateFunctions({...})`
  - `liServer.registerTransformFunctions([{...}, {...}])`, previously `liServer.features.api('li-documents').document.registerTransformFunction({...})`

- Includes
  - `liServer.registerIncludeService({...})`, previously `liServer.features.api('li-includes').registerServices({...})`
  - `liServer.registerIncludeServices([{...}, {...}])`, previously `liServer.features.api('li-includes').registerServices([{...}, {...}])`

- Oembed Providers
  - `liServer.registerOembedProvider({...})`, previously `liServer.features.api('li-oembed').registerProvider({...})`
  - `liServer.registerOembedProviders([{...}, {...}])`, previously `liServer.features.api('li-oembed').registerProviders([{...}, {...}])`

- Media Sources
  - `liServer.registerMediaSource({...})`, previously `liServer.features.api('li-media-library').registerMediaSource({...})`
  - `liServer.registerMediaSources([{...}, {...}])`, previously `liServer.features.api('li-media-library').registerMediaSource({...})`

- Register Custom Routes
  - `liServer.registerEditorRoutes({method, path, auth, action, ...})`
  - `liServer.registerServerRoutes({method, path, auth, action, ...})`
The params for both `registerEditorRoutes` and `registerServerRoutes` are the same.
The difference is only in what values are accepted in the `auth` param. The editor routes accept user token scopes and the server routes accept no auth or api token scopes.

By convention these methods would be called in a single file that starts the downstream server.

`server/app/server.js`
```js
const liServer = require('@livigdocs/server')()

liServer.registerInitializedHook(() => {
  liServer.registerCreateFunctions([
    require('./create-functions/article')
  ])

  // ...
})
```

{{< feature-info "liEditor methods" "editor" >}}
### Add `liEditor.registerIframePlugin()` :gift:

Expose IframePlugin register function via `liEditor`: `liEditor.registerIframePlugin({IframePlugin})`.


{{< feature-info "Project configuration" "server" >}}
### Push Notifications within articles :gift:

The [Push Notifications]({{< ref "/reference/document/metadata/plugins/li-push-messages" >}}) feature can now trigger pushes from within the Article Editor Toolbar (previously it could only trigger pushes on Dashboards).

If a `li-push-messages` metadata plugin is configured on a document a "Push" button will be availalbe in the document editor.

{{< feature-info "Document editing" "editor" >}}
### Real-time teaser includes :gift:

Teasers can be reloaded automatically on all publish and unpublish events within the current project. This can be enabled by updating the server config:

```js
{
  documents: {
    realtimeUpdates: {
      websocketsEnabled: true
    }
  }
}
```

If there is a teaser list in the document then all teasers will be reloaded for every event (with throttling and jitter applied). If there are only document teasers then we only refresh if the specific document references are published or unpublished. There is throttling in place to prevent a client from making too many requests (default: 5 seconds), and a jitter is applied to spread the server load of multiple connected clients (set to half of `websocketsThrottling`).

Note: Setting `websocketsEnabled: true` will also use the websocket events to update table dashboard rows, or indicate a new result is available within a table dashboard. More details about real-time updates can be found in the [Server Configuration]({{< ref "/customising/server-configuration/#documents" >}}) documentation.

{{< feature-info "Document editing" "editor" >}}
### Allow `tel:` and `mailto:` inline links :gift:

We have added support for `tel:` and `mailto:` URL links in the editor. This feature is enabled by default and doesn't require any configuration.


## Vulnerability Patches :shield:

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.


### Livingdocs Server :shield:

This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2023-43646](https://github.com/advisories/GHSA-4q6p-r6v2-jvc5) patched in `get-func-name` v2.0.2
* [CVE-2023-45143](https://github.com/advisories/GHSA-wqq4-5wpv-mx2g) patched in `undici` v5.26.2
* [CVE-2023-4863](https://nvd.nist.gov/vuln/detail/CVE-2023-4863) patched in `sharp` v0.32.6
* [CVE-2023-26159](https://github.com/advisories/GHSA-jchw-25xp-jwwc) patched in `follow-redirects` v1.15.5
* [CVE-2023-36665](https://github.com/advisories/GHSA-h755-8qp9-cq85) patched in `protobufjs` v7.2.5
* [CVE-2024-28176](https://github.com/advisories/GHSA-hhhv-q57g-882q) patched in `jose` v4.15.5
* [CVE-2024-28849](https://github.com/advisories/GHSA-cxjh-pqwp-8mfp) patched in `follow-redirects` v1.15.6
* [CVE-2024-28863](https://github.com/advisories/GHSA-f5x3-32g6-xq36) patched in `tar` v6.2.1
* [CVE-2024-29041](https://github.com/advisories/GHSA-rv95-896h-c2vc) patched in `express` v4.19.2
* [CVE-2024-30260](https://github.com/advisories/GHSA-m4v8-wqvr-p9f7) patched in `undici` v5.28.4
* [CVE-2024-30261](https://github.com/advisories/GHSA-9qxr-qj54-h672) patched in `undici` v5.28.4

We are aware of the following vulnerabilities in the Livingdocs Server:

* [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Editor because `rangy` module is scoped in the `livingdocs-framework` and not exposed to the users.

### Livingdocs Editor :shield:
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2023-43646](https://github.com/advisories/GHSA-4q6p-r6v2-jvc5) patched in `get-func-name` v2.0.2
* [CVE-2023-45143](https://github.com/advisories/GHSA-wqq4-5wpv-mx2g) patched in `undici` v5.26.2
* [CVE-2023-45133](https://github.com/advisories/GHSA-67hx-6x53-jw92) patched in `@babel/traverse`  v7.23.2
* [CVE-2023-26159](https://github.com/advisories/GHSA-jchw-25xp-jwwc) patched in `follow-redirects` v1.15.5
* [CVE-2023-51701](https://github.com/advisories/GHSA-v2v2-hph8-q5xp) patched in `@fastify/reply-from` v9.7.0
* [CVE-2024-21501](https://github.com/advisories/GHSA-rm97-x556-q36h) patched in `sanitize-html` v2.12.1
* [CVE-2024-28849](https://github.com/advisories/GHSA-cxjh-pqwp-8mfp) patched in `follow-redirects` v1.15.6
* [CVE-2024-28863](https://github.com/advisories/GHSA-f5x3-32g6-xq36) patched in `tar` v6.2.1
* [CVE-2024-29180](https://github.com/advisories/GHSA-wr3j-pwj9-hqq6) patched in `webpack-dev-middleware` v6.1.2
* [CVE-2024-30260](https://github.com/advisories/GHSA-m4v8-wqvr-p9f7) patched in `undici` v5.28.4
* [CVE-2024-30261](https://github.com/advisories/GHSA-9qxr-qj54-h672) patched in `undici` v5.28.4

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Editor because `rangy` module is scoped in the `livingdocs-framework` and not exposed to the users.
* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v241.0.54](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.54): fix(deps): update dependency @livingdocs/framework from 27.1.9 to v27.1.10
- [v241.0.53](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.53): fix(azure-blob-storage): Correctly handle processing errors by propagating to all the streams
- [v241.0.52](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.52): fix(security): Patch security vulnerabilities CVE-2024-30260 and CVE-2024-30261 in `undici`, CVE-2024-29041 in `express`, CVE-2024-28863 in `tar`, CVE-2024-28849 in `follow-redirects`, CVE-2024-28176 in `jose`, and CVE-2023-36665 in `protobufjs`
- [v241.0.51](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.51): fix(queue): Properly await in lib/async-queue
- [v241.0.50](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.50): fix(deps): update dependency ioredis from 5.3.2 to v5.4.1
- [v241.0.49](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.49): fix(hugo): Return promise from async controller functions
- [v241.0.48](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.48): fix(deps): update dependency @livingdocs/framework from 27.1.7 to v27.1.9
- [v241.0.47](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.47): fix(lists): Define limit as option on `documentListModel.getInbox()`, as it is possible to retrieve more than 1010 leading to `Too many results` error
- [v241.0.46](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.46): fix(deps): update dependency exifreader from 4.15.0 to v4.21.1
- [v241.0.45](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.45): fix(media-library): Append file extension to download url
- [v241.0.44](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.44): fix(document-inbox): Only retrieve documentId and title fields from elasticsearch
- [v241.0.43](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.43): fix(security): Patch vulnerabilities `CVE-2024-24758` on `undici` and `GHSA-9h6g-pr28-7cqp` on `nodemailer`
- [v241.0.42](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.42): fix(memory-cache): Delete channel config key from cache if value is falsy
- [v241.0.41](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.41): chore(desknet): Add tests for token refresh
- [v241.0.40](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.40): chore(example-server): use `li-push-messages` handler with longer execution time
- [v241.0.39](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.39): fix(project): Allow `_` on project name, add tests for valid/invalid handle names
- [v241.0.38](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.38): fix(test): update to trigger a new release version
- [v241.0.37](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.37): fix(image-processing): Fix extracting metadata from large image headers
- [v241.0.36](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.36): fix(mediaLibrary): Map the state attribute on media library entries based on the archived flag
- [v241.0.35](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.35): fix(openid-connect): Remove log when nonce expires in Redis
- [v241.0.34](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.34): fix(designs): Await async createReadStream
- [v241.0.33](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.33): fix(realtime): Emit 'document.updated' to avoid collaboration UI issues
- [v241.0.32](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.32): fix(security): Patch vulnerabilities `CVE-2023-26159` on `follow-redirects`
- [v241.0.31](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.31): fix(deps): update dependency @livingdocs/secure-password from 5.0.2 to v5.0.3
- [v241.0.30](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.30): fix(composition-api): Make sure we never load errors or null values into preloaded values
- [v241.0.29](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.29): fix(notifications): Use link which opens the task side panel
- [v241.0.28](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.28): chore(commands): Add failed precondition name into conflict error
- [v241.0.27](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.27): fix(deps): Update dependency @livingdocs/framework from 27.1.5 to 27.1.7
- [v241.0.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.26): fix(imports): Remove result count rendering on imports page
- [v241.0.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.25): fix(dashboard-sources): ensure correct order of returned documents
- [v241.0.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.24): fix(notifications): Use project defaultLocale for labels in task emails
- [v241.0.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.23): fix: allow downstream plugin in creation flow params
- [v241.0.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.22): chore: pin framework to 27.1.5
- [v241.0.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.21): fix(media-library): Use extracted mime type for file uploads
- [v241.0.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.20): fix(schema): Add message to createSchemaApi validation errors
- [v241.0.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.19): fix(history): Upgrade @livingdocs/framework to fix include history
- [v241.0.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.18): fix(readme): Remove newlines
- [v241.0.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.17): fix(media-library): Fix sort support in media library
- [v241.0.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.16): fix(deps): Upgrade metalman-schema to fix response body transformation
- [v241.0.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.15): fix(webhooks): Normalize webhooks configuration and consumer only enabled when instance is configured with role worker
- [v241.0.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.14): fix(project): Allow handles that are 2 characters long and improve validation error message
- [v241.0.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.13): fix(http): agent updated to only support https
- [v241.0.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.12): fix(exif-extraction): Normalize the `Date Created` exif field to a full iso timestamp supported everywhere
- [v241.0.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.11): fix(editable): Revert editable.js upgrade as there have been issues on Firefox
- [v241.0.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.10): fix: update wrong method call
- [v241.0.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.9): fix(image-processing): Detect SVG uploads
- [v241.0.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.8): chore(includes): Reduce loops when assigning preloaded li-tree values
- [v241.0.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.7): chore(includes): Adapt preloader tests for fallback serverServiceSchema
- [v241.0.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.6): fix(http): Define longer `requestTimeout` on `liServer.httpServer` to avoid requests being cancelled by the socket timeout
- [v241.0.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.5): fix(includes): Remove breaking change introduced by schema changes

### Livingdocs Editor Patches
- [v102.1.111](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.111): fix(workspace): Prevent infinite refetch loop while on conflict screen
- [v102.1.110](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.110): fix(draft-storage): Fix function context in backported fix
- [v102.1.109](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.109): fix: update framework to fix safari 17.5 bug
- [v102.1.108](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.108): fix(draft-storage): Fix document conflicts with self
- [v102.1.107](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.107): fix(print): Fix this.draft context in print metadata plugin
- [v102.1.106](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.106): fix(draft-storage): Trigger digest when entering document conflict screen
- [v102.1.105](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.105): fix: change retresco idle to 30s
- [v102.1.104](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.104): fix(trackjs): Do not use serialize-error as we suspect it can't handle circular references in our production workloads
- [v102.1.103](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.103): fix: Explicitly pass empty event object to _updateDraft
- [v102.1.102](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.102): chore: Do not make remoteDocument reactive. It causes issues on the november release
- [v102.1.101](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.101): fix(documents): Prevent overwriting newer revisions on save errors
- [v102.1.100](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.100): chore(deps): Remove worker check
- [v102.1.99](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.99): fix(groups): Hide api clients from group invitation screen
- [v102.1.98](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.98): fix(li-date-time-range-filter): Select correct filter key
- [v102.1.97](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.97): fix(security): Update vulnerable dependencies in `cypress/` and `server/`, namely `follow-redirects`, `@fastify/reply-from`, `axios` and `undici`
- [v102.1.96](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.96): fix(security): Patch security vulnerabilities CVE-2024-30260 and CVE-2024-30261 in `undici`, CVE-2024-21501 in `sanitize-html`, CVE-2024-28863 in `tar`, CVE-2024-28849 in `follow-redirects`, and CVE-2024-29180 in `webpack-dev-middleware`
- [v102.1.95](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.95): fix(editor): Disable proofreading for history
- [v102.1.94](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.94): fix(ticker): Reassign shallowReactive attributes to trigger reactivity
- [v102.1.93](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.93): fix: hide remaining media library button when `showUi: false`
- [v102.1.92](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.92): fix: Blur components when exiting the edit mode
- [v102.1.91](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.91): fix(deps): update dependency @livingdocs/framework from 27.1.7 to v27.1.9
- [v102.1.90](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.90): chore(collaboration): Simplify collaboration bar to only use one event listener
- [v102.1.89](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.89): fix(properties-panel): Only show transforms when there are alternatives
- [v102.1.88](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.88): fix(comments): Do not allow `@assignment` of api client and import users
- [v102.1.87](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.87): fix: ensure same mediaId and recreate crops after image was replaced
- [v102.1.86](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.86): test: Use cy.spy instead of download request interceptor
- [v102.1.85](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.85): fix(proofreading): skip highlighting of invisible component elements
- [v102.1.84](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.84): fix(drag-and-drop): Always pass the mediaLibraryEntry.asset.duration when dropping a video media library entry on directives
- [v102.1.83](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.83): chore(vue-components): Use correct lifecycle method in li-angular-component
- [v102.1.82](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.82): fix(url): Allow URLs without a TLD
- [v102.1.81](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.81): fix(display-filter): Reset filter if custom range is not defined properly
- [v102.1.80](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.80): fix(security): Patch vulnerability `CVE-2024-24758` on `undici`
- [v102.1.79](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.79): fix(media-library): Show better error message if a network error occurs
- [v102.1.78](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.78): fix(properties): Don't warn about config when there is no reference
- [v102.1.77](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.77): fix(workspace): Reload document on design change
- [v102.1.76](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.76): fix(document-preview): Post to wildcard if the origin uses a sandbox without `allow-same-site`. Without it postMessage doesn't work at all.
- [v102.1.75](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.75): fix(ticker): Skip softLock checks for ticker entries
- [v102.1.74](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.74): chore: Remove TODO, leave the comment about workspace initialization
- [v102.1.73](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.73): fix(li-table): Correctly compute whether a table cell is in the overflow
- [v102.1.72](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.72): fix(toolbar): Hide metadata overlay when opening tasks sidebar
- [v102.1.71](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.71): chore(publish-control): Remove unused property
- [v102.1.70](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.70): fix(home-screen): Add cacheKey to dashboards
- [v102.1.69](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.69): fix(link-edit): Return link data property for prefilling
- [v102.1.68](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.68): fix: Use input or change events instead of keyup
- [v102.1.67](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.67): fix(popover): save on removing specialproviders and make custom elements work on vue popover
- [v102.1.66](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.66): fix(video upload): showing transcoding when uploading single file
- [v102.1.65](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.65): fix(filters): Reposition filter popups when selecting values
- [v102.1.64](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.64): fix(li-image): actually reload document images when content changed
- [v102.1.63](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.63): refactor: implement review comments
- [v102.1.62](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.62): fix(publish-control-delivery): Show delivery state when opening publish control panel
- [v102.1.61](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.61): fix(canvas): Reassign state.areas to trigger reactivity
- [v102.1.60](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.60): fix(realtime): Add version to refetch stub response in tests
- [v102.1.59](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.59): fix(external systems): show goTo action in dashboards only for documents without an externalSystem
- [v102.1.58](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.58): fix(publish-control-panel): Update running task whenever publish control panel changes visibility state
- [v102.1.57](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.57): fix(table-dashboard): Update model when dashboardConfig changes
- [v102.1.56](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.56): fix(metadata): Feedback stacking
- [v102.1.55](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.55): fix(push messages): allow push for published articles with unpublished changes
- [v102.1.54](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.54): test(links): Add cypress tests
- [v102.1.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.53): fix(dashboards): Fix tests
- [v102.1.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.52): fix(account form): Syntax
- [v102.1.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.51): fix(li-link-edit): apply correct default attributes for internal urls
- [v102.1.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.50): fix: pass directive config.search.displayFilters and config.search.baseFilters to the Angular embed teaser
- [v102.1.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.49): fix(deps): Update dependency @livingdocs/framework from 27.1.6 to 27.1.7
- [v102.1.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.48): chore(editor): Remove online listener from autosave on unload
- [v102.1.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.47): fix(text-formatting): Re-calculate the text formatting states when toggling bold/italic buttons
- [v102.1.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.46): fix: avoid invalid component inserted after pressing enter
- [v102.1.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.45): fix: make sure publish button is not rendered outside of table
- [v102.1.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.44): fix(tasks): Add metadataProperty.config.label fallback
- [v102.1.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.43): fix(workspace): Add cleanup fn to leaveWindow event handler response
- [v102.1.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.42): fix: translate unpublished
- [v102.1.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.41): fix(shortcuts): allow shortcuts for double low-9 quotation mark and it's mirror
- [v102.1.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.40): fix(ticker): Save publication date on first attempt
- [v102.1.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.39): fix(tasks): Only show remove action when the task has a value
- [v102.1.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.38): fix(editor): Prefill teasers when dropped from side panel
- [v102.1.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.37): fix: resolve default components via container method
- [v102.1.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.36): fix: add back the stopping of click event propagation
- [v102.1.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.35): fix: support component drag&drop in safari 17.2
- [v102.1.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.34): fix(li-link-edit): extend typeahead search baseFilters from useDashboard
- [v102.1.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.33): fix(ticker): Stop editing ticker before deleting
- [v102.1.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.32): fix(delivery-builds): start listening to realtime updates after publish
- [v102.1.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.31): fix(editor): close publish control panel when user clicks into content to make room for properties panel
- [v102.1.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.30): chore: fix cypress test for video includes
- [v102.1.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.29): fix(history): Upgrade @livingdocs/framework to fix include history
- [v102.1.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.28): fix(tasks): ensure tasks panel and toolbar button updates when a task is updated by another user
- [v102.1.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.27): improvement(icon link): Spacing
- [v102.1.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.26): chore(collaboration): Set CollaborationUser values on creation
- [v102.1.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.25): fix(admin): Fix api client url after creating a project in the admin UI
- [v102.1.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.24): fix(link-tool): close tooltip on click outside
- [v102.1.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.23): fix(li-link-edit): allow to reopen and edit links with invalid href
- [v102.1.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.22): fix(url-util): Take subdomains into account when validating URL TLD
- [v102.1.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.21): fix: allow for usage of the same filter twice with different config on one dashboard
- [v102.1.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.20): fix(media-library): Fix error when opening media side panel in editor
- [v102.1.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.19): fix(media-library): Allow upload center scrolling on mobile
- [v102.1.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.18): fix(image-crop): Prevent focal point button overlapping content
- [v102.1.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.17): fix(realtime): Don't refresh includes when editable teaser is focused
- [v102.1.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.16): fix(realtime): Fix function rename that prevents teaser reloading
- [v102.1.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.15): fix(ticker): Support rendering includes in multiple ticker entries
- [v102.1.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.14): fix(display filters): allow a label configuration for liDateTimeRange display filter
- [v102.1.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.13): fix(forms): ld-select
- [v102.1.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.12): fix(menus): Pass menu handle during creation to catch handle conflicts
- [v102.1.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.11): fix(search): Support search.strategy config to allow switching to the simple query string
- [v102.1.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.10): fix: don't prevent click events in li-link-edit
- [v102.1.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v102.1.9): fix: only support getDocument


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Security: :shield:
  * Bugfix: :beetle:
  * Chore: :wrench:
