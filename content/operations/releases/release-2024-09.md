---
type: release-notes
title: September 2024 Release
description: Technical Release Notes for release-2024-09
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-09/
---

{{< release-header
  title="September 2024 Release"
  upcoming=false
  legacy=false
  current=true
  maintained=true
  branchHandle="release-2024-09"
>}}

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-september-2024).
To learn about the necessary actions to update Livingdocs to `release-2024-09`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* [Feature Webinar Recording](https://us02web.zoom.us/rec/share/IIFjIFXtPqT0RTB3wY4QylgBQbDS-dTbsBVhGwkOICb0w0Vwa1OvutL6D2ne-vpJ.GVT776TuKst6yv2_) | Passcode: LIYaJH9!
* [Feature Webinar Documentation](https://docs.google.com/presentation/d/1oglK4CBdBXV_kC2AN5e7Pa6oIAQFMSie_Jpfu-ZAjSI/edit?usp=sharing)
* [Dev Webinar Recording](https://us02web.zoom.us/rec/share/JOXoaWjjT_WbWBL1bzDr38dxEp4hFZLBbElgX3gceSjyjrGpc3mssNvuv_uLi_5o.ZMtrX8Zeasfl5pBi?startTime=1726574256000) | Passcode: iu2@A%&8 
* [Dev Webinar Slides](https://docs.google.com/presentation/d/10cmmJLw898DzmOwk31pW1tyeuv3pd1XpcF4lzSa3TsE/edit?usp=sharing)
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node.js                        | 22                                                                                       |
| npm                            | 10                                                                                       |
| Postgres                       | 16                                                                                       |
| Elasticsearch<br/>OpenSearch   | 8.x<br/>v2.3.0                                                                           |
| Redis                          | 7                                                                                        |
| Livingdocs Server Docker Image | livingdocs/server-base:22                                                                |
| Livingdocs Editor Docker Image | livingdocs/editor-base:22                                                                |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

### Minimal

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node.js                        | 18                                                                                       |
| npm                            | 9                                                                                        |
| Postgres                       | 13                                                                                       |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:18.3                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.5                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Deployment

### Before the deployment

No prior preparations (besides `livingdocs-server migrate up`) are required before rolling out this release.

### After the deployment

No preparations are required after rolling out this release.

### Rollback

Only rollback if you have a critical issue with the release in question. Usually forward patching is the better option.

If you need to rollback the release, you can do so by running the following command on the Livingdocs Server running the new release:

```sh
livingdocs-server migrate down
```

All document inbox entries added after the release deployment are lost when you do a rollback.

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}
### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
# migration 201-inbox-mutations.js
#   creates a copy of table document_inbox named document_inbox_v2, adapts scripts to use the new table (related to feature Document Inbox)
livingdocs-server migrate up
```

### `publication.updated` event :fire:

The `publication.updated` event is no longer supported. Please use the `publication.update` event instead.

Refer to [Livingdocs Server events documentation]({{< ref "customising/advanced/server-events" >}}) for more information on supported events.

Server PR: [Remove support for `publication.updated` event](https://github.com/livingdocsIO/livingdocs-server/pull/7240)

### Remove `isDefault` property for named crops from `li-image` and `li-named-crops` :fire:

The `isDefault` property for named crops has been removed from the `li-image` and `li-named-crops` metadata plugins. The property was not used and has been removed to simplify the codebase. Downstreams can safely remove the property from their configuration, without any impact on the functionality.

Server PR: [Remove `isDefault` property for named crops from `li-image` and `li-named-crops`](https://github.com/livingdocsIO/livingdocs-server/pull/7241)

### Migrate `document_inbox` table to `document_inbox_v2` :fire:

This release we are migrating `document_inbox` to a new postgres table as the data structure is changing.
By migrating to the new table we can ensure a release rollback can be done more easily.
However, be aware that all changes done to the inbox while running the system on `release-2024-09` are lost when performing a rollback and the data before the update is restored!

Server PR: [Document Inbox](https://github.com/livingdocsIO/livingdocs-server/pull/7192)

### Redirect editor URLs `/p/{projectHandle}/articles/{documentId}/*` to `/p/{projectHandle}/document/{documentId}/*`

We are introducing simplified URLs for the Livingdocs Editor. Moving forward, the following editor URLs are supported:

- `/p/{projectHandle}/document/{documentId}`
- `/p/{projectHandle}/document/{documentId}?componentId={componentId}`
- `/p/{projectHandle}/document/{documentId}/history`
- `/p/{projectHandle}/document/{documentId}/history?revisionId={revisionId}`
- `/p/{projectHandle}/document/{documentId}/history?revisionIdGte={revisionIdGte}&revisionIdLte={revisionIdLte}`

In addition, we support the following internal notification URLs that will trigger the associated action but redirect to the new main URL `/p/{projectHandle}/document/{documentId}`:

- `/p/{projectHandle}/document/{documentId}/notifications/unsubscribe`
- `/p/{projectHandle}/document/{documentId}/publish`
- `/p/{projectHandle}/document/{documentId}/tasks`

During a transition period (see [deprecations]({{< relref "#livingdocs-editor-urls-pprojecthandlearticlesdocumentid" >}})), all URLs in the format `/p/{projectHandle}/articles/{documentId}/*` will be redirected to their corresponding `/p/{projectHandle}/document/{documentId}/*` URLs. If a corresponding URL no longer exists, the user will be redirected to the new main URL `/p/{projectHandle}/document/{documentId}`, and the associated action will no longer be performed.

Editor PR: [Remove URLs from editor states](https://github.com/livingdocsIO/livingdocs-editor/pull/8777)

## Deprecations

{{< feature-info "Operations" "server/editor" >}}
### Node.js 18 :warning:

Support for Node.js v18 will be removed in `release-2025-01`. Please upgrade your docker images and local environments to node v20 or v22. 

In your docker images change:
- `FROM livingdocs/server-base:18` to  
  `FROM livingdocs/server-base:22` or `FROM livingdocs/server-base:20`
- `FROM livingdocs/editor-base:18` to  
  `FROM livingdocs/editor-base:22` or `FROM livingdocs/editor-base:20`
- `FROM livingdocs/node:18` to  
  `FROM livingdocs/node:22` or `FROM livingdocs/node:20`

In your .nvmrc (if present) change the string from 18 to 22 or 20.

{{< feature-info "Editor Router" "editor" >}}
### Editor URLs `/p/{projectHandle}/articles/{documentId}/*`

As part of the transition to the [new Livingdocs Editor URLs]({{< relref "#redirect-livingdocs-editor-urls-pprojecthandlearticlesdocumentid-to-pprojecthandledocumentdocumentid" >}}), we are deprecating the old URLs and will remove them in release-2025-03. With release-2025-03, all URLs in the format `/p/{projectHandle}/articles/{documentId}/*` will be redirected to the new main URL `/p/{projectHandle}/document/{documentId}`. These redirects will open the document but will no longer trigger any associated actions.

If you are exposing Livingdocs Editor URLs to any external system, please use the new main URL `/p/{projectHandle}/document/{documentId}` instead.

Editor PR: [Remove URLs from editor states](https://github.com/livingdocsIO/livingdocs-editor/pull/8777)

## Features

{{< feature-info "Document Management" "editor" >}}
### Document Inbox :gift:

In a newsroom's editorial workflow, the tasks of creating articles and placing them on a page are often divided among different roles.
The document inbox is a tool that allows an article to be sent to a page’s inbox.
The person responsible for managing the page can then organize the articles within the inbox using groups,
and finally drag the article to a specific spot on the page.

Configuring the inbox is part of the content type configuration, in this case, for a page.
By referencing a table dashboard using a handle, it's possible to control which columns are displayed for an article entry in the inbox:

```js
// Content Type Config
{
 handle: 'page',
 documentType: 'page',
 inbox: {
   useDashboardColumns: 'inboxDashboard', // Specifies the dashboard columns to use for the documents in the inbox
   contentTypes: ['article'], // Added in release-2024-09 
   mediaTypes: ['image'] // Pre-existing; allows media library entries in the inbox as well
 }
}
```

Further details can be found on the [content type documentation page]({{< ref "/reference/project-config/content-types#document-inbox" >}}).

{{< feature-info "Document Management" "server" >}}
### Document Copy and Transform Flows :gift:

This new feature simplifies document copying and transformation, offering more control and flexibility for adapting content to different contexts or platforms (e.g. transforming an article for web into a print version). It also provides a clear and transparent process, helping users understand exactly what happens during content copying and transformation. The **Document Copy Flows** and **Document Transform Flows** are an alternative to the existing declarative Document Copy and Transform feature.

**What's New:**
These new flows allow for:
- Defining multiple copy functions for the same content type.
- Specific transformations based on the target content type, allowing for tailored content adaptations.

**Key Benefits:**
- Copying for Different Platforms: If you need to reuse articles across multiple (regional) platforms with only minor metadata differences, the new copy flows provide transparency by naming each flow and clearly indicating what happens during the copy process.
- Transforming Content Types: If a user has selected the wrong content type when creating an article, they can now easily transform it into the correct type (provided the article has not been published yet).

**Core Functionality:**
- Flexible Copy Functions: The new **copyFunction** allows for different copy mechanisms to be registered and applied to content types. This separates the copy action from content type constraints and increases flexibility.
- Transformation Control: Transformation flows can now specify how an article should change when adapted to a different content type.

**UI Interaction:**
- New buttons and modal dialog elements allow users to copy or transform content with clear, customizable labels and descriptions.

**Handling Metadata and Special Cases:**
- Special treatment is given to certain metadata plugins (e.g. push notifications, Desk-Net/Kordiam scheduling), ensuring that these are appropriately managed during the copy process.

**Migration and Rollout:**
- Voluntary Migration: We encourage teams to migrate to these new flows, but it is not mandatory. If you wish to adopt the new flows, reach out to your account manager to ensure the configuration aligns with your processes and needs.

These enhanced Document Copy and Transform Flows empower teams to manage content more efficiently and effectively, adapting to multiple platforms or use cases with ease.

Please consult the [Document Copy Flows]({{< ref "/guides/editor/document-copy-flows" >}}) and [Document Transform Flows]({{< ref "/guides/editor/document-transform-flows" >}}) guides for implementing the new flows.

{{< feature-info "Document Management" "editor" >}}
### Document Info Panel :gift:

The Document Info panel has been added to show general information about the document which includes document copy, document statistics and incoming and outgoing links. 

Copy information from the metadata panel has been moved to the Document Info panel. Additionally, the original document and copies of document are shown when using the Document Copy Flows.

If you want to show document statistics, they have to be configured per content type:

```js
// Content Type Config
editor: {
  statistics: {
    characterCount: true,
    componentCount: [
      'title',
      'p',
      'image',
      'image-named-crops'
    ]
  }
}
```

{{< img src="./release-2024-09-document-info-panel.png" alt="Screenshot of a document info panel" >}}

{{< feature-info "Editor UI" "editor" >}}
### Document Editing Header and Toolbar :gift:

We improved the layout of the header to better adjust on small screens. Important information like the title will now always be shown and we removed the collaboration bar. Collaborators are now shown directly next to the user avatar.

In this release, we've streamlined the editor toolbar to enhance its predictability and user-friendliness. We’ve introduced more consistent behavior across actions, panels, and screens, ensuring they no longer interfere with each other.

With this changes we are removing most editor state URLs and redirect URLs `/p/{projectHandle}/articles/{documentId}/*` to `/p/{projectHandle}/document/{documentId}/*`. As a result, each document has only one URL, `/p/{projectHandle}/document/{documentId}` and the old URLs will redirect to the document URL. More information can be found in the [Breaking Changes](#breaking-changes) section.

{{< feature-info "Editor UI" "editor" >}}
### Space optimisation for side panels :gift:

The width of the wide side panels (e.g., Media Library) has been increased on large screens to provide additional space. On screens wider than 1920px, these panels will have a width of 800px. On smaller screens, the width remains unchanged at 600px.

Teaser side panels and the Document Inbox have been changed to wide side panels. They now follow the same behavior as described above: 600px on smaller screens and 800px on larger screens.

{{< img src="./release-2024-09-wide-side-panels.png" alt="Screenshot of a wide teaser side panel" >}}

If users notice overlapping components that negatively affect their experience, please contact your CSO manager.

{{< feature-info "Search" "editor" >}}
### Dashboards: search caching behaviour :gift:

We've enhanced the dashboard search functionality within modals by making the caching behavior configurable. Previously, search phrases were cached and reused when reopening the same search, which could be inconvenient for workflows where the same search is rarely repeated.

- **Opt-in Caching**: Caching is now opt-in for `li-document-reference` and `li-document-references`. This change removes default caching, providing flexibility for users who prefer not to retain previous search terms. To enable caching please set `cacheSearch: true` within the metadata property `ui.config` object.
- **In-memory Cache for Filters**: Display filters now utilize in-memory caching instead of session storage, preventing persistent filter states across sessions.
- **Improved URL Syncing**: We no longer sync URL parameters on the home screen or propagate filter changes into browser history. This prevents unnecessary URL clutter.

{{< feature-info "Push Message" "editor" >}}
### Push Message Proposals :gift:

It is now possible to add, edit and delete push message proposals. The stored proposals can then be retrieved at a later point and editors can interact with them as a plain push message. We also improved Push Messages feedback on Table Dashboards, we now show icons when a proposal exists (black light bulb) and when push message was sent (green bell with a checkmark).

This improvements will be shipped with September release for everyone using Push Messages.

{{< feature-info "Document Management" "editor" >}}
### Content Validation Errors :gift:

When a user wants to publish a document there might be violations thrown in publish hooks.

We want the user to be able to see how many errors in the content have to be solved before being able to publish.

It is now possible to report multiple validation errors to the editor.
The validation errors can reference to either components or also metadata properties.

This functionality replaces the old `MetadataValidationError`, `MetadataValidationErrors` and `ContentValidationError` error classes, which were constructed manually in most integrations.


```js
const {validationError} = require('@livingdocs/server').errors

// Single content validation error
throw validationError({
  message: 'Section titles must not be empty',
  componentId: component.id,
  directiveName: 'section-title'
})

// Array of content validation errors
throw validationError({
  message: 'Unable to publish due to validation errors',
  errors: [{
    message: 'Section titles must not be empty',
    componentId: component.id,
    directiveName: 'section-title'
  }]
})

// Single metadata validation error
throw validationError({
  message: 'Description cannot contain a number',
  metadataProperty: 'description',
  translationLocale: 'en' // optional
})

// Array of metadata validation errors
throw validationError({
  message: 'Unable to publish due to validation errors',
  errors: [{
    message: 'Description cannot contain a number',
    metadataProperty: 'description',
    translationLocale: 'en' // optional
  }]
})
```

{{< feature-info "Dashboards" "editor" >}}
### Table dashboards: Direct publish without safeguard :gift:

When publishing a document from Table Dashboard cells there are safeguards in place to ensure document quality. This safeguards  make sure that it is not possible to directly publish when there are too many changes or document is still unpublished.

Those safeguards can now be disabled with the Editor configuration below. Please make sure you enable this configuration if it fits the newsroom workflows.
```js
// editor_settings
{
  dashboards: [
    {
       handle: '...',
       columns: [
         {
            componentOptions: {
              allowQuickPublish: true,
              ignoreQuickPublishRecencyRestriction: true
            }
         }
       ]
    }
  ]
}
```

{{< feature-info "Integrations" "server" >}}
### Retresco support for "Main Entities" :gift:

In addition to the regular entity recognition, Retresco has introduced the "Main Entities" concept. "Main Entities" can also be automatically detected and labelled in the Topic Management System (TMS from version 2.4.0). "Main Entities" are determined using an internal relevance score based on frequency and position in the text and describe the content focus of the document. This enables a more precise classification of articles to topic pages and automatically filters out less relevant content.

To support this new concept, we have extended our storage schema for Retresco entities to include an indicator `isMain` of whether an entity is a main entity and also report this data back to Retresco.

No changes are required for "Main Entities" to work, other than enabling main entities in Retresco. Currently, main entities are not marked in the Livingdocs UI. They appear as regular entities.

{{< feature-info "Integrations" "server" >}}
### iMatrics test environment support :gift:

To support iMatrics test environments, we are adding a new iMatrics project configuration property to specify whether the iMatrics test environment should be used. By default, it is set to `false`.

```js
integrations: {
  imatrics: {
    testEnvironment: true
  }
}
```

{{< feature-info "Metadata" "server" >}}
### `li-system-text` metadata plugin :gift:

This release a new system metadata plugin becomes available: `li-system-text`. `li-system-text` is a simple text value store that behaves like `li-text`, but belongs to the system metadata.

It can be used in cases where a simple text value should be stored in the metadata, but the document version should not
be increased when the metadata value changes. Or in other words, it will not show up as unpublished change.

Please note that it is only available as document metadata, no other contexts.

Further details can be found on the [plugin documentation page](({{< ref "/reference/document/metadata/plugins/li-system-text" >}})).

{{< feature-info "Integrations" "editor" >}}
### Desknet -> Kordiam editor UI updates :gift:

In August 2024, it was announced that [Desk-Net would be renamed to Kordiam](https://support.kordiam.io/hc/en-us/articles/14759979009948-Desk-Net-Becomes-Kordiam-Impact-on-Integrations).

We have updated the editor UI to use the new name in user facing locations. Further, we changed occurrences of "Desk-Net" to "Kordiam" in logs and technical error messages.
This was done to ensure that the Livingdocs UI is already consistent with the Kordiam product name from a user perspective.

A full renaming of all related Livingdocs configuration properties and API endpoints will be done in a future release.

In the meantime, we recommend to already update the Kordiam endpoint URL with their new domain name.
Please have a look at the [Transition from Desk-Net to Kordiam Guide]({{< ref "/guides/integrations/desknet-kordiam" >}}) for more details.

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2024-4067](https://nvd.nist.gov/vuln/detail/CVE-2024-4067) patched in `micromatch` v4.0.8
* [CVE-2024-38372](https://nvd.nist.gov/vuln/detail/CVE-2024-38372) patched in `undici` v6.19.2
* [CVE-2024-39338](https://nvd.nist.gov/vuln/detail/CVE-2024-39338) patched in `axios` v1.7.4
* [CVE-2024-41818](https://nvd.nist.gov/vuln/detail/CVE-2024-41818) patched in `fast-xml-parser` v4.4.1
* [CVE-2024-43796](https://nvd.nist.gov/vuln/detail/CVE-2024-43796) patched in `express` v4.20.0
* [CVE-2024-43799](https://nvd.nist.gov/vuln/detail/CVE-2024-43799) patched in `send` v0.19.0
* [CVE-2024-45296](https://nvd.nist.gov/vuln/detail/CVE-2024-45296) patched in `path-to-regexp` v6.3.0
* [CVE-2024-47764](https://nvd.nist.gov/vuln/detail/CVE-2024-47764) patched in `cookie` v0.7.0

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2024-4067](https://nvd.nist.gov/vuln/detail/CVE-2024-4067) patched in `micromatch` v4.0.8
* [CVE-2024-39338](https://nvd.nist.gov/vuln/detail/CVE-2024-39338) patched in `axios` v1.7.4
* [CVE-2024-42459](https://nvd.nist.gov/vuln/detail/CVE-2024-42459) patched in `elliptic` v6.5.7
* [CVE-2024-43788](https://nvd.nist.gov/vuln/detail/CVE-2024-43788) patched in `webpack` v5.94.0
* [CVE-2024-45296](https://nvd.nist.gov/vuln/detail/CVE-2024-45296) patched in `path-to-regexp` v6.3.0
* [CVE-2024-45813](https://nvd.nist.gov/vuln/detail/CVE-2024-45813) patched in `find-my-way` v8.2.2
* [CVE-2024-47764](https://nvd.nist.gov/vuln/detail/CVE-2024-47764) patched in `cookie` v0.7.0

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
* [CVE-2024-6783](https://github.com/advisories/GHSA-g3ch-rx76-35fx) vulnerability in `vue-template-compiler` it allows malicious users to perform XSS via prototype pollution.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v257.0.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v257.0.11): fix(import): Do not serialize query strings in import api filename as it could include tokens
- [v257.0.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v257.0.10): fix(li-document-search): Fix empty check of li-document-search params
- [v257.0.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v257.0.9): fix(character-count): Support excludeFromTextCount on container directives
- [v257.0.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v257.0.8): chore(imports): Report conflicting media id when using a systemName/externalId composite that is already in use
- [v257.0.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v257.0.7): fix: Allow empty oembed allowedCoreProviders array
- [v257.0.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v257.0.6): fix(media-library): Support prefilling of directives using a template
- [v257.0.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v257.0.5): fix(deps): update dependency express from 4.19.2 to 4.20.0 [security]
- [v257.0.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v257.0.4): chore(indexing): Make date-time format more strict except at problematic locations
- [v257.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v257.0.3): fix(uploads): Expose maxSize attribute that defines the maximum bytes on file uploads
- [v257.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v257.0.2): fix(users): Support loading archived users and regular users together
- [v257.0.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v257.0.1): fix(events): Delete unused event related to LIBREAKING035

### Livingdocs Editor Patches
- [v110.34.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.32): fix(comments): Disable comments on embedded documents
- [v110.34.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.31): fix(includes): Do not mutate intitialContent object
- [v110.34.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.30): fix(character-count): Support excludeFromTextCount on container directives
- [v110.34.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.29): fix(deps): update dependency @livingdocs/framework from 29.5.8 to v29.5.9
- [v110.34.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.28): fix(editor): Improve back button logic for issue navigation
- [v110.34.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.27): fix(assistant): timeout
- [v110.34.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.26): fix(manual-status): breaking onto newline
- [v110.34.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.25): fix(media-library): Support prefilling of directives using a template
- [v110.34.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.24): fix: focalpoint reactivity
- [v110.34.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.23): fix(search): multiple requests at the same time
- [v110.34.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.22): fix(toolbar): Make Kordiam schedule action button reactive
- [v110.34.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.21): fix(upload-center): Correctly handle cancelled uploads on media library dashboards
- [v110.34.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.20): fix(draft-storage): Persist unsaved document to local storage on unload
- [v110.34.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.19): chore(admin-dashboard): Filter users completely in memory
- [v110.34.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.18): fix(ticker): Visualize ValidationErrors correctly for ticker entries
- [v110.34.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.17): fix(assistants): disable assistants when workspace is read-only
- [v110.34.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.16): fix(translations): Only set default locale if none is present on document create
- [v110.34.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v110.34.15): fix(info-panel): close info panel when clicked outside


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
