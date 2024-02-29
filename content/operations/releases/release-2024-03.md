---
type: release-notes
title: March 2024 Release
description: Technical Release Notes for release-2024-03
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-03/
  - /operations/releases/release-2024-03/release-2024-03/
---

{{< release-header
  title="March 2024 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2024-03"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Fix custom date range display filter](https://github.com/livingdocsIO/livingdocs-editor/pull/8122)
* [Validate metadata property references in project config](https://github.com/livingdocsIO/livingdocs-server/pull/6623)
* [feat(channel-configs): Add postValidate hooks](https://github.com/livingdocsIO/livingdocs-server/pull/6551)
* [Fix media library entry state](https://github.com/livingdocsIO/livingdocs-server/pull/6570)
* [Unify Media Library Metadata schema with Document Metadata schema](https://github.com/livingdocsIO/livingdocs-server/pull/6391)


To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2024-03`, read on.

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
| NPM                            | 10                                                                                        |
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
| Postgres                       | 13                                                            |
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
# migration 195-remove-filter-sets.js
#   deletes filter_sets table, which is not used anymore
# migration 196-document-schedule-at.js
#   creates column schedule_at in documents table
livingdocs-server migrate up
```

{{< feature-info "Media Library" "server" >}}
### Strict image validation :fire:

The metadata plugins [`li-image`]({{< ref "reference/document/metadata/plugins/li-image" >}}) and [`li-poster-image`]({{< ref "reference/document/metadata/plugins/li-poster-image" >}}) now require a `mimeType` attribute.
Image objects always have those attributes, so only tests might need an update to adapt to the new requirement.

Enforce specific mimeType on `doc-image`, `doc-video`, `doc-audio`, `li-image` and `li-poster-image`:

* The mime type of `doc-image` must start with `image/`.
* The mime type of `doc-audio` must start with `audio/`.
* The mime type of `doc-video` must start with `video/`.

[Image directives]({{< ref "reference/document/document-design/directives/image">}}) now require an `originalUrl`, `mimeType`, `width` and `height`.
Image objects always have those attributes, so it's most likely just your tests that need to be fixed.

* [Server PR: Extend image structure](https://github.com/livingdocsIO/livingdocs-server/pull/6537)

{{< feature-info "Server Config" "server" >}}
###  `images`, `files` and `videos` configs removed :fire:

Long-deprecated `images`, `files` and `videos` objects in the [Server config]({{< ref "customising/server-configuration">}}) have been removed.
They got migrated to `mediaLibrary.images`, `mediaLibrary.files` and `mediaLibrary.videos`, but backwards compatibility was in place for a long time. Please move the properties if you see errors. You can find the documentation at [Media Library DAM]({{< ref "customising/server-configuration/#media-library-dam" >}}).

* [Server PR: Extend image structure](https://github.com/livingdocsIO/livingdocs-server/pull/6537)

{{< feature-info "liEditor Methods" "editor" >}}
### `initializeOembedMetadataExtractor()` :fire:

Support for `initializeOembedMetadataExtractor()`, previously used to initialize Oembed with custom extractors, has been removed with `release-2024-03`. If you are using the default extractor, you can safely remove the call to `initializeOembedMetadataExtractor()`. If `initializeOembedMetadataExtractor()` is used for custom extractors please contact your Livingdocs manager.

* [Editor PR: Removed initializeOembedMetadataExtractor()](https://github.com/livingdocsIO/livingdocs-editor/pull/8074)

{{< feature-info "DisplayFilters" "editor" >}}
### displayFilters using `li-category` :fire:

The filter `{filterName: "category"}` is no longer supported starting with `release-2024-03`. Please replace the filter `{filterName: "category"}` in the [displayFilter config]({{< ref "customising/advanced/editor-configuration/display-filter#metadata-filters">}}) with filter `{metadataPropertyName: "category"}` or any other metadata property name of type li-category. This change allows you to use any handle of type `li-category` metadata.

Old configuration:
```
displayFilters: [
  ‘category’
]
```

New configuration:
```
displayFilters: [
  {metadataPropertyName: ‘category’}
]
```

* [Editor PR: li-integer filter](https://github.com/livingdocsIO/livingdocs-editor/pull/6136)

{{< feature-info "Styleguide" "editor" >}}
### Styleguide :fire:

The Styleguide endpoint in the Server and the Editor view has been removed. Previously, under `https://hostname/styleguide`. If you are stil using `li-` prefixed CSS classes or Livingdocs SCSS files you should consider adapting your styles to the new CSS classes and SCSS files, as Livingdocs components might change in the future.

* [Editor PR: Remove Styleguide](https://github.com/livingdocsIO/livingdocs-editor/pull/7872)

{{< feature-info "Operations" "server" >}}
### Postgres v12 support dropped :fire:

Postgres v12 support has been dropped and will be end-of-life in November 2024. Please upgrade to Postgres v16.

* [Server PR: Drop support Postgres v12](https://github.com/livingdocsIO/livingdocs-server/pull/6481)

## Deprecations ⚠️

{{< feature-info "Project Config" "Server" >}}
### `isDefault` for `li-image` and `li-image-crops` ⚠️

The `isDefault` property for named crops is deprecated in both `li-image` and `li-named-crops`. It should be removed from the configuration. Since the value had no effect, its removal will not impact any functionality. The configuration will no longer be allowed in `release-2024-09`.

{{< feature-info "Project Configuration" "server"  >}}
### `defaultComponents` in container directives :warning:

In the release notes for `release-2024-01`, we announced that the behavior for `defaultComponents` in nested containers is going to have a breaking change.

*After some considerations, we decided not to introduce this breaking change.* Nested containers in document content will not inherit the configuration of parent containers. 

Default components are looked up in the direct parent container. If no config for the given type was found, it looks for a config in the documents' Content Type (new in `release-2024-03`) and then in the design config. It will *not* look into the configurations of parent containers.

## APIs :gift:

## Features

{{< feature-info "New Feature" "Server/Editor" >}}
### Conditional Components :gift:

Conditional components introduce the ability to render a component in the delivery based on `dateTime` condition. The conditions are stored with the component data and can be configured in the Livingdocs Editor.

In the contentType config within the project config there is now a new option to define the component conditions you would like to enable:

```js
{
  handle: 'regular',
  // ...
  components: [
    {name: 'title'},
    {name: 'paragraph', conditions: ['dateTime']},
    // ...
  ]
}
```

Only `'dateTime'` is supported.

The following Public API endpoints support conditional components:
- `GET /api/v1/documents/:documentId/latestPublication`
- `GET /api/v1/documents/latestPublications`
- `GET /api/v1/documents/:documentId/latestPublication/renditions/:renditionHandles`
- `GET /api/v1/publications/search`
- `GET /api/v1/document-lists/:id`
- `GET /api/beta/documents/:documentId/latestDraft`
- `GET /api/beta/documents/:documentId/latestPublication`
- `GET /api/beta/documents/latestPublications`
- `POST /api/beta/composition/:documentId`

All of the `GET` endpoints support `ignoreComponentConditions` and `componentConditions` query parameters. The `POST` endpoint supports `ignoreComponentConditions` and `componentConditions` in the request body.

Along with the endpoints, the connected Public API methods also support `ignoreComponentConditions` and `componentConditions` arguments (existing arguments have been excluded for brevity):
- `publicApi.getLatestPublication({ignoreComponentConditions, componentConditions})`
- `publicApi.getLatestPublications({ignoreComponentConditions, componentConditions})`
- `publicApi.getRenditions({ignoreComponentConditions, componentConditions})`
- `publicApi.searchPublications({ignoreComponentConditions, componentConditions})`
- `publicApi.getDocumentList({ignoreComponentConditions, componentConditions})`
- `publicApi.getLatestDraftBeta({ignoreComponentConditions, componentConditions})`
- `publicApi.getLatestDraftsBeta({ignoreComponentConditions, componentConditions})`

`ignoreComponentConditions` is a boolean value which defaults to `false`. In other words, if you do not specify `ignoreComponentConditions=true` then the endpoints will only return the components in the content which pass the conditional checks.

The `componentConditions` value is a JSON stringified object (or a plain object when send in the `POST` request body or provided directly to a Public API method) which contains the conditions you would like to apply. At the moment only `dateTime` is supported. An example of the query parameter would be `?componentConditions={"dateTime":"2024-02-14T17:25:10.391Z"}`. A default of `new Date()` is used when component conditions should be applied and no `dateTime` is provided.

Within the document content, the components now have a `conditions` property which sits alongside the `content` property. The `conditions` value is an object which contains a property for the supported conditions, currently only `dateTime`, and the value of the condition:

```js
{
  "component": "title",
  "identifier": "p:3:4.title",
  "id": "doc-1hkpdrmnl0",
  "content": {
    "title": "My Document Title"
  },
  "conditions": {
    "dateTime": {
      "gte": "2024-02-11T23:00:00.000Z",
      "lt": "2024-02-25T23:00:00.000Z"
    }
  }
}
```

`gte` and `lt` properties are both optional. It is possible to set a start time (`gte`) without an end time (`lt`), and an end time without a start time. The `dateTime` property will not exist if both of the timestamps are removed.

This feature is opt-in. If no component conditions are set in the document content then all components will be returned in the content.

{{< feature-info "Media Library" "server" >}}
### Media Library validity change events :gift:



{{< feature-info "Image storage" "server" >}}
### Bucket independent image storage format :gift:

That means changes of `documents.selectedImageService` are respected and image urls are changed in real time.

The functionality can be enabled by setting `mediaLibrary.generateImageServiceUrlsOnRead` to `true`.
When this is enabled, a new `key` attribute gets added on all asset objects.
Image urls also get patched at the following locations:
  - `doc-image`, `doc-audio`, `doc-file` directives
  - `li-image` and `li-poster-image` metadata plugins (also on include params sub-property values)
  - The `params` object of `doc-include` directives
  - Any other object that has an `originalUrl` and `mimeType` attribute. If you have custom attributes using those attributes, please let us know.

Watch out:
- ⚠️ When you've configured a `storage.computeKey` function, a `storage.extractKey` config is now also required that can extract an asset `key` attribute from an url. If the functions do not result in the same key, the process does not start.
  Possible values are:
  - `stripHostnamePrefix`, this removes just the hostname from the original url
  - `stipDateStringPrefix`, this matches against our default `2024/01/01/filename.jpg` format.
  - a function that must return a key without `/` prefix.
    e.g. `(originalUrl) => new URL(originalUrl).pathname.replace('/', '')`
- ⚠️ If you're still using a static elasticsearch mapping and not the `index: true` options on metadata properties, please add the `key` attribute to the image objects of your Elasticsearch mapping.

{{< feature-info "Webhooks" "server" >}}
### New webhook conditions `contentType` and `metadataPropertyName` :gift:

New webhook conditions `contentType` and `metadataPropertyName` to allow for more fine-grained control when webhooks are triggered. The `contentType` condition allows you to specify which content types will trigger the webhook. The `metadataPropertyName` condition allows you to specify which metadata properties and its value the webhook should be triggered for, `conditions.metadataProperties` can be of any primitive metadata type (e.g. `li-boolean`, `li-text`, `li-integer`, `li-enum`, etc). All `document.*` [webhooks support the new conditions]({{< ref "/reference/webhooks#list-of-available-webhook-events" >}}).

```js
{
  name: 'document.update',
  conditions: { // always AND combined
    metadataProperties: [
      {
        name: 'thePropertyHandle',
        value: '' // strings, numbers, and booleans are supported
      }
    ],
    contentTypes: ['myArticle', 'someNewsletter']
  }
}
```

{{< feature-info "Project Config" "server" >}}
### Named crops `isDefaultIfSet` configuration :gift:

New [configuration property for named crops]({{< ref "/guides/media-library/media-library-setup#image-directives" >}}) `isDefaultIfSet` has been introduced. It specifies the default crop if the crop is set. As a result, it is rendered as the image preview in the editor. For example, an optional named crop becomes the default if it is set. It overwrites the named crop that has `isDefault: true`.

```js
{
  namedCrops: [
    {name: 'desktop', isDefault: true},
    {name: 'mobile', isOptional: true, isDefaultIfSet: true}
  ]
}
```

{{< feature-info "Public API" "server" >}}
### Command API `isPublishedAndHasNoChanges` pre-condition :gift:

New pre-condition `isPublishedAndHasNoChanges` was added to [Command API]({{< ref "reference/public-api/document-command-api" >}}). It checks if the document is published and has no changes. It can be passed as data payload in the `PATCH /api/v1/documents/:id/commands` endpoint. As previous pre-conditions, commands won't be executed if the pre-condition is not met and a 409 error will be returned.

Example request:
```json
{
  "version": 1,
  "preConditions": [
    // Asserts that the document is published and
    // has no changes since last publish
    {"type": "isPublishedAndHasNoChanges"}
  ],
  "commands": [
    {
      // update a single metadata property
      "operation": "setMetadataProperty",
      "propertyName": "title",
      "value": "updated title", // send null to delete metadata property
      "oldValue": "previous title" // optional, for conflict detection (not necessary when sending document version too)
    },
    {
      // sets the content of an editable directive
      "operation": "setEditableDirective",
      "componentId": "doc-1a2b3c4d5",
      "directiveName": "headline",
      "value": "updated headline"
    },
    {
      "operation": "publish"
    }
  ]
}
```

{{< feature-info "Woodwing Integration" "editor" >}}
### Allow drop from Woodwing on `li-image` metadata :gift:

This improvement allows editors to drag images directly from WoodWing Assets into `li-image` metadata fields. No additional configuration is required.

{{< feature-info "Project Configuration" "server" >}}
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

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

* [CVE-2024-24758](https://github.com/advisories/GHSA-3787-6prv-h9w3) patched in `undici` v5.28.3
* [GHSA-9h6g-pr28-7cqp](https://github.com/advisories/GHSA-9h6g-pr28-7cqp) patched in `nodemailer` v6.9.9
* [CVE-2023-26159](https://github.com/advisories/GHSA-jchw-25xp-jwwc) patched in `follow-redirects` v1.15.4

### Livingdocs Editor
* [CVE-2024-24758](https://github.com/advisories/GHSA-3787-6prv-h9w3) patched in `undici` v5.28.3
* [CVE-2023-26159](https://github.com/advisories/GHSA-jchw-25xp-jwwc) patched in `follow-redirects` v1.15.4
* [CVE-2023-51701](https://github.com/fastify/fastify-reply-from/security/advisories/GHSA-v2v2-hph8-q5xp) patched in `@fastify/reply-from` v9.6.0

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v248.5.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.4): fix(deps): Upgrade to @livingdocs/framework@29.2.3
- [v248.5.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.3): fix(local-authentication): Adjust tests to new schema
- [v248.5.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.2): fix(webhooks): Do not rely on order of events in tests
- [v248.5.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.1): fix(release-2024-03): Update framework to v29.2.2 (release-2024-03 tag)

### Livingdocs Editor Patches
- [v110.1.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.13): fix(media-library): Indicate when li-invalid is true
- [v110.1.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.12): fix(dashboard): Use dashboard handle as fallback in cache key
- [v110.1.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.11): fix(deps): Upgrade to @livingdocs/framework@29.2.3
- [v110.1.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.10): fix(url): Allow URLs without a TLD
- [v110.1.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.9): fix: update to latest editable.js version from allowed range
- [v110.1.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.8): fix(groups): Fix li-tag usage in angular. The `text=` attribute gets bound as variable
- [v110.1.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.7): fix(release-2024-03): Update framework to v29.2.2 (release-2024-03 tag)


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
