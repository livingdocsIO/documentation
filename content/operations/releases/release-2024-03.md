---
type: release-notes
title: March 2024 Release
description: Technical Release Notes for release-2024-03
excludeFromSearch: false
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-03/
  - /operations/releases/release-2024-03/release-2024-03/
---

{{< release-header
  title="March 2024 Release"
  upcoming=false
  legacy=false
  current=false
  maintained=true
  branchHandle="release-2024-03"
>}}

## PRs to Categorize
* [Fix custom date range display filter](https://github.com/livingdocsIO/livingdocs-editor/pull/8122)
* [Validate metadata property references in project config](https://github.com/livingdocsIO/livingdocs-server/pull/6623)
* [feat(channel-configs): Add postValidate hooks](https://github.com/livingdocsIO/livingdocs-server/pull/6551)
* [Fix media library entry state](https://github.com/livingdocsIO/livingdocs-server/pull/6570)
* [Unify Media Library Metadata schema with Document Metadata schema](https://github.com/livingdocsIO/livingdocs-server/pull/6391)


To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-march-2024).
To learn about the necessary actions to update Livingdocs to `release-2024-03`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* [Feature Webinar Recording](https://us02web.zoom.us/rec/share/J2j5GMMBacMVr7GdwwCRReM2nFQDQo3C6QGlhpQak1DAY8VA_JqW8yl6Gqftrb1u.NyG_kMexZ6DMsc-S) | Passcode: G%N^41+R
* [Feature Webinar Documentation](https://docs.google.com/presentation/d/1RpNYURKUZZ3y3squnTZ68wDFsQhV2Vd6qJjpigR68BQ/edit?usp=sharing)
* [Dev Webinar Recording](https://us02web.zoom.us/rec/share/IJLeHgN2ecSYIoyJ47GaDIBgrxIID7zK7UW-MQKWl_3letN_CD5wqT_2Vx-0j0A8.UTfMHsJdfV0aIqaz) | Passcode: Nwj3z%0t
* [Dev Webinar Slides](https://docs.google.com/presentation/d/1PUPS02t1XDlAg90VSRkPRx7mhvrU_0bzik7ymrHeUzE/edit?usp=sharing)
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
#   creates column schedule_at in documents table and migrates any existing schedule timestamps
# migration 197-media-library-schedule-at.js
#   creates column schedule_at in media_library_entries table
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
```js
displayFilters: [
  'category'
]
```

New configuration:
```js
displayFilters: [
  {metadataPropertyName: 'category'}
]
```

* [Editor PR: li-integer filter](https://github.com/livingdocsIO/livingdocs-editor/pull/6136)

{{< feature-info "Metadata Plugins" "server" >}}
### Changes in metadata plugin schemas :fire:

The metadata plugin schemas are more strict. The server will throw an error for `uiSchema` errors. And log a deprecation for common misusage. There have been certain cases where `ui.config.label` was defined. Please remove that, replace it with `ui.label`.
```diff
    {
      handle: 'teaserImage',
      type: 'li-image',
      ui: {
+        label: 'Teaser Image',
-        config: {
-          label: 'Teaser Image',
-        }
      }
    }
```

Remove the default `uiSchema` for metadata properties of the media library.
The schema below was defined as default.
Plugins now need to list their properties explicitly if they need any of the properties in the config.

```js
uiSchema: ms.obj({
  component: 'string',
  useDefaultComponent: 'boolean',
  service: 'string',
  placeholder: ms.$ref('LivingdocsTranslatableString'),
  config: ms.obj({
    canReset: 'boolean',
    limitTo: 'integer',
    maxSelectable: 'integer',
    readOnly: 'boolean',
    rows: 'integer', // for li-text (not used anymore since release-2022-09)
    sortable: 'boolean', // for li-document-references
    index: 'boolean'
  })
})
```

Please define a `uiSchema` and `configSchema` json schema on the custom metadata plugins. A deprecation is logged if a plugin doesn't define those. Use `uiSchema: null` to not allow any config at all.

* [Server PR: Integration Media Library and Document Metadata schema](https://github.com/livingdocsIO/livingdocs-server/pull/6391)

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

{{< feature-info "New Feature" "server/editor" >}}
### Conditional Components :gift:

Conditional components introduce the ability to render a component in the delivery based on a `dateTime` condition. The conditions are stored with the component data and can be configured in the Livingdocs Editor.

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

Component conditions are only active when the document revision is published. Before publishing, the conditions considered to be part of the draft and will have no effect. When a component condition time passes the background scheduler will trigger a `publication.update` server event and process any configured webhooks, then schedule a future event if one exists.

Below is an example of the `publication.update` webhook payload. The `actor` property is not available for events triggered by conditional components.

```json
{
  "event": "publication.update",
  "deliveryId": "2um3G07jkaMVp7TudVzAY",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "documentId": 187,
}
```

This feature is opt-in. If no component conditions are set in the document content then all components will be returned in the content. If you disable conditions at a later date the conditions will still be respected to avoid any unwanted/unscheduled data from being returned by the API.

{{< feature-info "Media Library" "server" >}}
### Media Library validity change events :gift:

There is now a media library scheduler running in the server which will emit `mediaLibraryEntry.active` and `mediaLibraryEntry.invalid` webhook events for values defined in the existing [`li-datetime-validity`]({{< ref "/reference/document/metadata/plugins/li-datetime-validity" >}}) plugin. Schedule jobs are created based on the 'from' and 'to' dates, and once the time is reached we recompute the media library entry state.

In addition to this there is a new [`li-invalid`]({{< ref "/reference/document/metadata/plugins/li-invalid" >}}) metadata plugin which has a boolean state. In the UI it is displayed as a checkbox in the media library entry metadata form, and overlays will be displayed on the media when viewed in the editor to indicate an invalid state. When it is toggled the media library entry state is computed.

If there is a state change we emit the relevant event. Please be aware that we emit a create or update event along side any state change event, so if you need a generic event use `mediaLibraryEntry.create` and `mediaLibraryEntry.update`, and for specific state events use `mediaLibraryEntry.archive`, `mediaLibraryEntry.revoke`, `mediaLibraryEntry.active` and `mediaLibraryEntry.invalid`.

The [`li-invalid`]({{< ref "/reference/document/metadata/plugins/li-invalid" >}}) metadata plugin can be configured in the media type config:
```js
{
  type: 'mediaImage',
  handle: 'image',
  // ...
  metadata: [
    // ...
    {
      handle: 'invalid',
      type: 'li-invalid',
      ui: {
        label: 'Invalid'
      },
      config: {index: true}
    }
  ]
}
```

The webhook payloads will look similar to the JSON below:
```json
{
  "event": "mediaLibraryEntry.active",
  "deliveryId": "Ty7XErALFZSi1b96G76KB",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "mediaId": "PNIi08x4UdEA",
  // Actor available for immediate li-invalid and li-datetime-validity changes,
  // but not when triggered by li-datetime-validity events
  "actor": {
    "type": "user"
  }
}
```
```json
{
  "event": "mediaLibraryEntry.invalid",
  "deliveryId": "ql-_3zjSdCrHesEcAERFs",
  "projectId": 3,
  "projectHandle": "service",
  "webhookHandle": "handle",
  "mediaId": "PNIi08x4UdEA",
  // Actor available for immediate li-invalid and li-datetime-validity changes,
  // but not when triggered by li-datetime-validity events
  "actor": {
    "type": "user"
  }
}
```

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

If you want to read more on how to compute URLs in the delivery read our guide [here]({{< ref "/guides/media-library/image-services.md#delivery" >}})


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
      video: 'video'
    }
  }
]
```

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2024-4068](https://github.com/advisories/GHSA-grv7-fg5c-xmjg) patched in `braces` v3.0.3
* [CVE-2024-24758](https://github.com/advisories/GHSA-3787-6prv-h9w3) patched in `undici` v5.28.3
* [GHSA-9h6g-pr28-7cqp](https://github.com/advisories/GHSA-9h6g-pr28-7cqp) patched in `nodemailer` v6.9.9
* [CVE-2023-26159](https://github.com/advisories/GHSA-jchw-25xp-jwwc) patched in `follow-redirects` v1.15.4
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
* [CVE-2024-24758](https://github.com/advisories/GHSA-3787-6prv-h9w3) patched in `undici` v5.28.3
* [CVE-2023-26159](https://github.com/advisories/GHSA-jchw-25xp-jwwc) patched in `follow-redirects` v1.15.4
* [CVE-2023-51701](https://github.com/fastify/fastify-reply-from/security/advisories/GHSA-v2v2-hph8-q5xp) patched in `@fastify/reply-from` v9.6.0
* [CVE-2024-28849](https://github.com/advisories/GHSA-cxjh-pqwp-8mfp) patched in `follow-redirects` v1.15.6
* [CVE-2024-28863](https://github.com/advisories/GHSA-f5x3-32g6-xq36) patched in `tar` v6.2.1
* [CVE-2024-29180](https://github.com/advisories/GHSA-wr3j-pwj9-hqq6) patched in `webpack-dev-middleware` v6.1.2
* [CVE-2024-30260](https://github.com/advisories/GHSA-m4v8-wqvr-p9f7) patched in `undici` v5.28.4
* [CVE-2024-30261](https://github.com/advisories/GHSA-9qxr-qj54-h672) patched in `undici` v5.28.4
* [CVE-2024-4367](https://github.com/advisories/GHSA-wgrm-67xf-hhpq) patched in `pdfjs-dist` v4.3.136
* [CVE-2024-37890](https://github.com/advisories/GHSA-3h5v-q93c-6h6q) patched in `ws` v8.17.1

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v248.5.41](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.41): fix(li-tree): Fix reference extraction of translated document references in li-tree
- [v248.5.40](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.40): fix(deps): update dependency @livingdocs/framework from 29.2.11 to v29.2.13
- [v248.5.39](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.39): fix(security): Patch security vulnerabilities CVE-2024-37168 in `@grpc/grpc-js`, CVE-2024-4068 in `braces`, and CVE-2024-37890 in `ws`
- [v248.5.38](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.38): fix: document create functions require a title property
- [v248.5.37](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.37): chore(webhooks): Add err attribute to webhook log for errors
- [v248.5.36](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.36): fix(new-device-email): Do not send new device email for revoked sessions
- [v248.5.35](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.35): fix(scheduled-publishing): Parse dates instead of relying on string strict comparison, which is error prone if we get postgres dates
- [v248.5.34](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.34): fix(documents): Require toISOString correctly for repo config cache
- [v248.5.33](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.33): fix(includes): Convert preloaded metadata to JSON
- [v248.5.32](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.32): fix(api-clients): Do not return archived clients when querying them
- [v248.5.31](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.31): chore(oidc-api): Replace `server.log` with `log`
- [v248.5.30](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.30): fix(deps): update dependency @livingdocs/framework from 29.2.7 to v29.2.8
- [v248.5.29](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.29): chore(example-server): Use getCount for documentPreloader example
- [v248.5.28](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.28): chore(queue): Automatically delete processed jobs without calling job.del()
- [v248.5.27](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.27): fix(link-directive): Fix link directive html validation to support links without hostname
- [v248.5.26](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.26): fix(azure-blob-storage): Correctly handle processing errors by propagating to all the streams
- [v248.5.25](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.25): fix(security): Patch security vulnerabilities CVE-2024-30260 and CVE-2024-30261 in `undici`, CVE-2024-29041 in `express`, CVE-2024-28863 in `tar`, CVE-2024-28849 in `follow-redirects`, and CVE-2024-28176 in `jose`
- [v248.5.24](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.24): fix(queue): Properly await in lib/async-queue
- [v248.5.23](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.23): fix(project-secrets): Fix support for AWS Aurora for Postgres v14.9
- [v248.5.22](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.22): fix(deps): update dependency ioredis from 5.3.2 to v5.4.1
- [v248.5.21](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.21): fix(desknet): Add info logs for request tracking
- [v248.5.20](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.20): chore(cypress): Make media library id search test less strict
- [v248.5.19](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.19): fix(planning-system): make `bundleContentType` optional
- [v248.5.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.18): fix(planning boards): allow search strategy config
- [v248.5.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.17): fix(hugo): Return promise from async controller functions
- [v248.5.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.16): chore(desknet): Don't deprecate integration arguments in 2024-03
- [v248.5.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.15): fix(deps): update dependency @livingdocs/framework from 29.2.6 to v29.2.7
- [v248.5.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.14): fix(deps): update dependency @livingdocs/framework from 29.2.5 to v29.2.6
- [v248.5.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.13): fix(lists): Define limit as option on `documentListModel.getInbox()`, as it is possible to retrieve more than 1010 leading to `Too many results` error
- [v248.5.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.12): fix(documents): Remove publish control schedules when deleting documents
- [v248.5.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.11): fix(deps): update dependency exifreader from 4.21.0 to v4.21.1
- [v248.5.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.10): fix(task): don't notify user if he assigns himself
- [v248.5.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.9): fix(document-inbox): Only retrieve documentId and title fields from elasticsearch
- [v248.5.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.8): fix: Remove mandatory durationSeconds from video directives
- [v248.5.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.7): Chore: Add link to publication.updated deprecation message
- [v248.5.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.6): fix(media-library): Don't emit actor in scheduled events
- [v248.5.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.5): fix(local-authentication): Allow null for projectId
- [v248.5.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.4): fix(deps): Upgrade to @livingdocs/framework@29.2.3
- [v248.5.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.3): fix(local-authentication): Adjust tests to new schema
- [v248.5.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.2): fix(webhooks): Do not rely on order of events in tests
- [v248.5.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v248.5.1): fix(release-2024-03): Update framework to v29.2.2 (release-2024-03 tag)

### Livingdocs Editor Patches
- [v110.1.96](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.96): fix(publish-control): Hide history link for data records
- [v110.1.95](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.95): fix(hugo): Update hugo URL to new path
- [v110.1.94](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.94): fix(lists): Only show create button if user has create permissions
- [v110.1.93](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.93): fix(planning-system): Only call channel.getContentType when planningSet.bundleContentType is really defined
- [v110.1.92](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.92): fix(workspace): Prevent window reload during tests
- [v110.1.91](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.91): fix(deps): update dependency @livingdocs/framework from 29.2.12 to v29.2.13
- [v110.1.90](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.90): fix(auth): Redirect all tabs to previous URL when logging in after session expiration
- [v110.1.89](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.89): fix: resolving comments from deleted components
- [v110.1.88](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.88): fix(documents): Do not show metadata conflicts notification triggered by server side metadata hooks
- [v110.1.87](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.87): fix(security): Patch security vulnerabilities CVE-2024-4068 in `braces`, CVE-2024-4367 in `pdfjs-dist`, and CVE-2024-37890 in `ws`
- [v110.1.86](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.86): chore(metadata): Improve li-image dropzone message
- [v110.1.85](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.85): fix(storage): Strip angular $$hashKey attributes from the serialized document to prevent prevent diffing conflicts caused by them
- [v110.1.84](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.84): fix(comments): Do not emit comment update events for `eventSource: remote`
- [v110.1.83](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.83): test: Fix tests for image.key attribute
- [v110.1.82](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.82): fix(useDocumentSearch): transform baseFilters to filterStates
- [v110.1.81](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.81): fix(workspace): Prevent infinite refetch loop while on conflict screen
- [v110.1.80](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.80): fix(draft-storage): Fix function context in backported fix
- [v110.1.79](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.79): fix(editor): Do not load ticker panel for non-ticker documents
- [v110.1.78](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.78): fix: update framework to fix safari 17.5 bug
- [v110.1.77](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.77): fix(ticker): Re-render content before editing
- [v110.1.76](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.76): fix(draft-storage): Fix document conflicts with self
- [v110.1.75](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.75): fix(webhooks): Normalize webhook events defined as strings
- [v110.1.74](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.74): fix(draft-storage): Log error when journalist enters the conflict ui that requires conflict resolution
- [v110.1.73](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.73): fix(print): Fix this.draft context in print metadata plugin
- [v110.1.72](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.72): fix(integrations): Log error message instead of throwing in vue created hook when imatrics or retresco integrations are not active
- [v110.1.71](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.71): fix(draft-storage): Trigger digest when entering document conflict screen
- [v110.1.70](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.70): fix(drop-actions): Make uploadOptions optional
- [v110.1.69](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.69): fix: do not query parent bundles when no bundle content type defined
- [v110.1.68](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.68): fix(trackjs): Do not use serialize-error as we suspect it can't handle circular references in our production workloads
- [v110.1.67](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.67): fix: update framework to fix override snapshot diffing
- [v110.1.66](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.66): chore: Revert reactive change on draft.remoteDocument
- [v110.1.65](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.65): chore: Add last save try and save success to autosave issue log
- [v110.1.64](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.64): fix(documents): Prevent overwriting newer revisions on save errors
- [v110.1.63](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.63): fix(print modal): Layout
- [v110.1.62](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.62): fix(create print article): handle overflow for the publication dropdown
- [v110.1.61](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.61): fix(groups): Increment version when updating group members
- [v110.1.60](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.60): fix(kanban-dashboard): Load document state from database on kanban dashboards
- [v110.1.59](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.59): fix(groups): Hide api clients from group invitation screen
- [v110.1.58](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.58): fix(editable teaser): show original reset now on blur
- [v110.1.57](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.57): fix(bundle): don't show "add to bundle" if no bundle configured
- [v110.1.56](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.56): fix(li-date-time-range-filter): Select correct filter key
- [v110.1.55](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.55): fix(tests): adapt tests for better li-image metadata UI testing
- [v110.1.54](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.54): fix(security): Update vulnerable dependencies in `cypress/` and `server/`, namely `follow-redirects` and `undici`
- [v110.1.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.53): fix(security): Patch security vulnerabilities CVE-2024-30260 and CVE-2024-30261 in `undici`, CVE-2024-28863 in `tar`, CVE-2024-28849 in `follow-redirects`, and CVE-2024-29180 in `webpack-dev-middleware`
- [v110.1.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.52): fix: add LEFT_DOUBLE_QUOTATION_MARK + RIGHT_DOUBLE_QUOTATION_MARK for shortcuts
- [v110.1.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.51): fix(comyan): correctly notify the user on comyan imageData loading error
- [v110.1.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.50): chore(documents): Log document conflict errors, so we have trackjs traces
- [v110.1.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.49): fix(ticker): Reassign shallowReactive attributes to trigger reactivity
- [v110.1.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.48): fix(timeline): Render includes in timeline view
- [v110.1.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.47): fix(planning system): don't make the user pick the contentType if only one option
- [v110.1.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.46): fix(planning-system): make bundles optional
- [v110.1.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.45): fix(screen-manager): Close overlay when opening side panels
- [v110.1.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.44): fix: hide remaining media library button when `showUi: false`
- [v110.1.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.43): fix(editor): Prefill existing teasers when dropped from side panel
- [v110.1.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.42): fix(deps): update dependency @livingdocs/framework from 29.2.6 to v29.2.7
- [v110.1.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.41): fix: Blur components when exiting the edit mode
- [v110.1.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.40): fix(dashboards): Do not rename dashboardType variable
- [v110.1.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.39): fix(deps): update dependency @livingdocs/framework from 29.2.5 to v29.2.6
- [v110.1.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.38): fix(tasks): the task panel is not hidden anymore for narrow screens, so we can allow the toolbar action
- [v110.1.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.37): fix(workspace): Do not try to lock components in read-only view
- [v110.1.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.36): chore(collaboration): Simplify collaboration bar to only use one event listener
- [v110.1.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.35): fix(toolbar): Lock indicator
- [v110.1.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.34): fix(properties-panel): Only show transforms when there are alternatives
- [v110.1.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.33): fix(comments): Do not allow `@assignment` of api client and import users
- [v110.1.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.32): fix(distribution planning): Highlight
- [v110.1.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.31): refactor: remove lodash get
- [v110.1.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.30): fix(page): list button only enabled with permissions
- [v110.1.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.29): test(editable-teasers): cypress tests for teaser override workflow
- [v110.1.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.28): fix(e2e): navigate to dashboard after document was created
- [v110.1.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.27): fix(canvas): render doc-include UI behind other directives UI
- [v110.1.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.26): fix(app max width): Borders
- [v110.1.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.25): fix: ensure same mediaId and recreate crops after image was replaced
- [v110.1.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.24): fix(conditional components): improve UI labels
- [v110.1.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.23): fix(media-library): Append file extension to download url
- [v110.1.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.22): fix(proofreading): skip highlighting of invisible component elements
- [v110.1.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.21): fix(deps): Upgrade @livingdocs/framework@release-2024-03
- [v110.1.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.20): fix(ticker): Always load the design of ticker entries before rendering them
- [v110.1.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.19): fix(webhooks): Add publication.update webhook
- [v110.1.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.18): fix(local-authentication): Do not include projectId if it is null
- [v110.1.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.17): fix(images): Fix named crops for imported images that don't have an imageService configured
- [v110.1.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.16): fix(media-library): Use same base filters for multi-source summary and media type queries
- [v110.1.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.15): chore(vue-components): Use correct lifecycle method in li-angular-component
- [v110.1.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.1.14): chore(multi-select): Check group existance instead of using disabled flag
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
