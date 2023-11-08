---
type: release-notes
title: November 2023 Release
description: Technical Release Notes for release-2023-11
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-11/
  - /operations/releases/release-2023-11/release-2023-11/
---

{{< release-header
  title="November 2023 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2023-11"
>}}

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2023-11`, read on.

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
| Postgres                       | 12 (Deprecated Postgres v12)                                                             |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:18.3                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.5                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Breaking Changes 🔥

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
# migration 194-actors.js
#   adds new table actors
livingdocs-server migrate up
```

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

{{< feature-info "Editing api" "server" >}}
### Endpoint `PATCH /document/:id` :warning:

This concerns an internal API used by the Livingdocs Editor which has been used
in the past by customizations.

The Endpoint `PATCH /document/:id` will be removed in `release-2024-01`. Please replace it with `PATCH /document/:id/commands`. No data migration is required, but you will need to swap `patches` parameter with `commands`.

{{< feature-info "Project config" "server" >}}
### Custom downstream plugins paramSchema validation changes :warning:

Plugins used in other contexts than the ones stated in the [docs](https://docs.livingdocs.io/reference/document/metadata/plugins/), will report an error during server startup.

All downstream plugins are supported by default in document metadata and media library metadata. But if a downstream plugin is used in include services, creation flows or push messages, that will cause an error during startup.

If a downstream plugin is being used in an include service params schema the following configuration needs to be added to the plugin declaration:

```
supportedPluginContexts: [
  'documentMetadata',
  'mediaLibraryEntryMetadata', 
  'includeParams'
]
```

To opt-in to the new schemas you can set `serverConfig.useStrictSchemas: true`. This will allow you to find any invalid useage of plugins and fix them before the next release.

Please contact your Livingdocs customer manager if you have any problems with the limitations imposed by the supported plugin contexts.

{{< feature-info "Server config" "server" >}}
### Config option `realtimeUpdates.enabled` :warning:

The options `serverConfig.documents.realtimeUpdates.enabled` is deprecated.

Please remove the 'enabled' property and use 'pollingEnabled' and/or 'websocketsEnabled' instead. The value for 'enabled' will be transferred to 'pollingEnabled', if 'pollingEnabled' does not have a value defined.

This deprecation is related to the [Teaser includes reload](#teaser-includes-reload) feature. Please read the feature documentation for more information.


## Features 🎁

{{< feature-info "Public api" "server" >}}
### Command API :gift:

The Command API is exposed on the Public API and allows external services to change document content and metadata and even publish, e.g. making article title A/B-test easier.

Command API adds `PATCH /api/v1/documents/:documentId/commands` endpoint on the Public API, which accepts the following commands to be executed on the document: `setMetadataProperty`, `setEditableDirective` and `publish`. The scope to authenticate requests for this new endpoint is `public-api:write`.

More information about the Command API can be found in the [Command API documentation]({{< ref "reference/public-api/command-api.md" >}}).

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

With the introduction of the Command API, we needed a way to differenciate if a document was modified by a user (human) or a token (machine), therefore the 'actor' concept has been introduced. When a document is updated by a token via the Command API, the document will show the specific token that authorized the request.

Please run the migrations for this release to add the new `actors` table to your database. This migration will add Import users and API clients to `actors` table. The actor name will be used to show the actor that modified a document. When reporting modifications on a document users will be obscured and the UI will only report that a human did a modification, while API clients will be reported with their name.


{{< feature-info "Search bar" "Editor" >}}
### Enhancded search syntax 'simple search' :gift:

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
### Teaser includes reload :gift:

If a document embeds teasers using includes, those teasers will get updated if referenced documents are updated.

{{< feature-info "Project configuration" "server" >}}
### Metadata validation :gift:

Introduction of metadata plugin validation in documents, media library and paramSchema. This will prevent using a metadata plugin in the wrong place in the project configuration to help spot configuration errors.

Plugins used in other contexts than the ones stated in the [docs](https://docs.livingdocs.io/reference/document/metadata/plugins/), will now report an error during server startup.

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

No known vulnerabilities are present in the Livingdocs Server.


### Livingdocs Editor :shield:

* [CVE-2023-43646](https://github.com/advisories/GHSA-4q6p-r6v2-jvc5) patched in `get-func-name` v2.0.2
* [CVE-2023-45143](https://github.com/advisories/GHSA-wqq4-5wpv-mx2g) patched in `undici` v5.26.2
* [CVE-2023-45133](https://github.com/advisories/GHSA-67hx-6x53-jw92) patched in `@babel/traverse`  v7.23.2

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v241.0.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.9): fix(image-processing): Detect SVG uploads
- [v241.0.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.8): chore(includes): Reduce loops when assigning preloaded li-tree values
- [v241.0.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.7): chore(includes): Adapt preloader tests for fallback serverServiceSchema
- [v241.0.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.6): fix(http): Define longer `requestTimeout` on `liServer.httpServer` to avoid requests being cancelled by the socket timeout
- [v241.0.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v241.0.5): fix(includes): Remove breaking change introduced by schema changes

### Livingdocs Editor Patches
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
