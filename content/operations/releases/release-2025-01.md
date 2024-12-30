---
type: release-notes
title: January 2025 Release
description: Technical Release Notes for release-2025-01
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2025-01/
---

{{< release-header
  title="January 2025 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2025-01"
>}}

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-january-2025).
To learn about the necessary actions to update Livingdocs to `release-2025-01`, read on.

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
| Node                           | 22                                                                                       |
| NPM                            | 10                                                                                       |
| Postgres                       | 16                                                                                       |
| Elasticsearch<br/>OpenSearch   | 8.x<br/>v2.3.0                                                                           |
| Redis                          | 7                                                                                        |
| Livingdocs Server Docker Image | livingdocs/server-base:22                                                                |
| Livingdocs Editor Docker Image | livingdocs/editor-base:22                                                                |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

### Minimal

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 20.18                                                                                    |
| NPM                            | 10                                                                                       |
| Postgres                       | 13                                                                                       |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:20:7                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:20:7                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |


## Deployment

### Before the deployment

No prior preparations are required before rolling out this release.

### After the deployment

No post-deployment steps are required after rolling out this release.

### Rollback

No steps are required to roll back this release.

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}
### Migrate the Postgres Database :fire:

No migrations were introduced in this release.

{{< feature-info "Operations" "editor/server" >}}
### Drop support for Node.js 18 :fire:
- 🔥 Drop Node.js `v18`. Only Node.js `v20.18.1` and newer are supported.

How to migrate your project to Node.js 22:
- Change the content of the `.nvmrc` in your project root to `22`
- Change the `engines.node` declaration in the `package.json` to `>=22`
- Change the `Dockerfile` of the server to `livingdocs/server-base:22`
- Change the `Dockerfile` of the editor to `livingdocs/editor-base:22`

Server PR: [Drop support for Node.js 18](https://github.com/livingdocsIO/livingdocs-server/pull/7486)
Editor PR: [Drop support for Node.js 18](https://github.com/livingdocsIO/livingdocs-editor/pull/9276)

{{< feature-info "Dashboards" "server" >}}
### Angular dashboard cards :fire:

As part of our ongoing migration from Angular to Vue, we have removed support for Angular dashboard cards. Please consider using the newly introduced [task screens]({{< ref "/operations/releases/release-2024-11/#task-screens-gift" >}}) or our provided upstream task dashboard cards instead. If these do not meet your requirements, migrate your custom dashboard cards to Vue.

Editor PR: [Angular dashboard cards](https://github.com/livingdocsIO/livingdocs-editor/pull/9160)

{{< feature-info "Dashboard" "server" >}}
### Dashboard type `dashboard` :fire:

Support for dashboards of type `dashboard` has been removed. Please migrate your dashboards of type `dashboard` to dashboards of type `tableDashboard`.

Server PR: [Dashboard type `dashboard`](https://github.com/livingdocsIO/livingdocs-server/pull/7433)
Editor PR: [Dashboard type `dashboard`](https://github.com/livingdocsIO/livingdocs-editor/pull/9162)

{{< feature-info "Integrations" "server" >}}
### Comyan upload without `targetMediaType` and metadata mapping :fire:

It's no longer possible to use the Comyan integration without providing a `targetMediaType` and a Comyan metadata mapping config in that media type definition. Please provide `targetMediaType` in Comyan integration settings and `comyanExtraction` in the media type. In the project configuration:

```
{
  settings: {
    integrations: {
      comyan: {
        targetMediaType: 'image'
      },
      mediaTypes: [
        {
          type: 'mediaImage',
          handle: 'image',
          comyanExtraction: {
            mappings: []
          }
        }
      ]
    }
  }
}
```

Server PR: [Comyan upload without `targetMediaType` and metadata mapping](https://github.com/livingdocsIO/livingdocs-server/pull/7557)

{{< feature-info "Integrations" "server" >}}
### Comyan built-in `postPublishHookAsync` :fire:

The built-in `postPublishHookAsync` used for comyan usage reporting is no longer automatically registered in the upstream code. The registration of the `postPublishHookAsync` hook has to be defined in the downstream. If you are using the Comyan integration, please make sure to register the `postPublishHookAsync` in your project.

To enable the same behavior as before configure the following in the downstream:

```js
liServer.registerInitializedHook(() => {
  const {reportDocumentVersion} = liServer.features.api('li-comyan')
  liServer.registerPublicationServerHooks({postPublishHookAsync: reportDocumentVersion})
})
```

Additonally this opens up flexibility to customize when comyan usage is reported for example only registering for a certain project and execute it for desired contentTypes:

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

Server PR: [Remove Comyan usage reporting registration](https://github.com/livingdocsIO/livingdocs-server/pull/7576)

{{< feature-info "Dependencies" "server" >}}
### Migrate to Express v5 :fire:

The Livingdocs Server is now using Express v5.

- In case you have custom route declarations, please make sure they conform to the Express v5 conventions. You can find the migration guide here: https://expressjs.com/en/guide/migrating-5.html
- There's nothing to change if there are no custom route declarations in a project.

The following changes affect the livingdocs server and maybe also downstreams:
- Wildcards in routes have a new syntax. Unsupported routes now throw an error during server start.
  `/designs/:name/:version/:file(*)` -> `/designs/:name/:version/*file`
  `req.params.file` will result in an array with the path segments.
  
```diff
  {
  -  path: '/custom/api/assets/:file(*)',
  +  path: '/custom/api/assets/*file',
     method: 'get',
     title: 'Retrieve the files',
     action: (req, res) {
       const file = fileStream({
  -      file: req.params.file
  +      file: req.params.file.join('/')
       })
  
       return pipeline(file, res)
     }
  }  
```

Server PR: [Migrate to Express v5](https://github.com/livingdocsIO/livingdocs-server/pull/7518)

{{< feature-info "Metadata Plugins" "server" >}}
### Stricter Validation of Metadata Plugin Indexing Keys :fire:

Indexing keys of metadata plugins must contain only alphabetic characters (a-z, A-Z) and dots (.). Please update all indexing keys in your custom metadata plugins that do not fulfil this requirement.

```diff
indexing: {
  enabled: true,
  behavior: [
    {
      type: 'keyword',
+     key: 'reference.id',
-     key: 'reference__id',
      getValue (val) { return val.reference?.id }
    }
  ]
}
```

Server PR: [Stricter Validation of Metadata Plugin Indexing Keys](https://github.com/livingdocsIO/livingdocs-server/pull/7536)

{{< feature-info "Metadata Plugins" "server" >}}
### Legacy base filter syntax in li-document-search :fire:

Base filters in metadata plugin `li-document-search` no longer support the legacy filter syntax. Downstreams which define the `baseFilters` using the old syntax, need to migrate them to the new [Search DSL]({{< ref "/guides/editor/filter-migration/#migration-examples" >}}).

Server PR: [Legacy base filter syntax in li-document-search](https://github.com/livingdocsIO/livingdocs-server/pull/7536)

## Deprecations

{{< feature-info "Design" "editor" >}}
### Sass `@import` declarations are deprecated

In the Livingdocs editor, it is possible to declare an additional stylesheet. This can be done using an environment variable, such as:

```
CUSTOM_STYLE_PATH_AFTER=./path/to/custom.scss
```

When this variable is set, the editor uses the specified custom Sass/CSS file.

If your project defines such a custom stylesheet, you are likely using `@import` declarations within it. However, a recent Sass update has deprecated the `@import` syntax. To prevent warnings and ensure compatibility, these `@import` statements need to be migrated.

##### Migration Guide

Follow these guidelines to migrate your `@import` statements:

1. **For files exposing variables, replace `@import` with `@use`:**

   ```scss
   @use "~styles/settings/defaults";

   .custom-style {
     // Use variables from the imported file, prefixed by the file name
     z-index: defaults.$z-index-modal;
   }
   ```

   This replaces the previous approach:

   ```scss
   @import "~styles/settings/defaults";

   .custom-style {
     z-index: $z-index-modal;
   }
   ```

   **Note:** The `@use` directive automatically namespaces variables with the file name (e.g., `defaults.$variableName`), which helps avoid naming conflicts.

2. **For other cases, replace `@import` with `@forward`:**

   ```scss
   @forward "~styles/settings/defaults";
   ```

   Use `@forward` to re-export the contents of a file without directly consuming them in the current file.

##### Why This Change?

The Sass team deprecated `@import` because it does not enforce proper scoping, leading to potential variable and mixin conflicts in larger projects. The new directives `@use` and `@forward` are designed to ensure better modularity and maintainability in your stylesheets.

For more details, refer to the [Sass official documentation on deprecating `@import`](https://sass-lang.com/documentation/at-rules/import).

{{< feature-info "Configuration" "server" >}}
### Rename `blacklist` and `whitelist` to `denylist` and `allowlist` :warning:

As part of our commitment to inclusivity and clarity, we are deprecating the terms “blacklist” and “whitelist” in favor of “denylist” and “allowlist” across all configurations, APIs, and documentation. Please update your configurations and codebases to reflect this change. For example, replace blacklist with denylist and whitelist with allowlist in settings and API calls. Backward compatibility will be maintained until `release-2025-07`, after which the deprecated terms will be removed. 

{{< feature-info "Server Configuration" "server" >}}
### Multi channel configuration :warning:


## Features

{{< feature-info "Content Management" "editor" >}}
### Print diff view :gift:


{{< feature-info "Conditions" "server" >}}
### Brand Conditions :gift:

To support country- or brand-specific content, we are introducing a new component condition: the `brands` condition. This allows downstreams to configure a set of brands, from which one or more can be selected on components to define for which brands a component should be included. This condition works alongside the already existing `dateTime` condition.

{{< img src="./release-2025-01-brands-condition.png" alt="Brands component condition" width="350" >}}

1. To configure the new `brands` condition, downstreams need to first define a set of [brands in the Project Config]({{< ref "/reference/project-config/brands" >}}).
    ```js
    brands: [
      {
        handle: 'brand1',
        label: 'Example Brand 1',
        iconUrl: 'https://example.com/brand1.svg',
        isDefault: true
      },
      {
        handle: 'brand2',
        label: 'Example Brand 2',
        iconUrl: 'https://example.com/brand2.svg'
      }
    ]
    ```
2. Then, the `brands` condition can be enabled for specific components in the [content type configuration]({{< ref "/reference/project-config/content-types/#conditional-components" >}}).
    ```js
    components: [
      {
        name: 'title',
        conditions: ['brands']
      }
    ]
    ```
3. When requesting a document through the Composition API or any other endpoint, conditions are automatically evaluated according to the provided `componentConditions` property. If no brand is provided, the default brand will be used instead. A document can only be requested for a single brand at a time.
    ```
    POST {{server}}/api/beta/composition/1
    
    {
      "componentConditions": {
        "brand": "brand2"
      }
    }
    ```

For more information, please refer to our [conditional components documentation]({{< ref "/reference/project-config/content-types/#conditional-components" >}}).

#### Visibility Mode

With the introduction of the `brands` condition, we are renaming 'Timeline Mode' to 'Visibility Mode' to better reflect its new use case. Its purpose remains the same: allowing users to preview a document for a specific brand and at a specific date time.

Before release-2025-01:

{{< img src="./release-2025-01-timeline-mode.png" alt="Timeline mode action" width="400" >}}

release-2025-01 and after:

{{< img src="./release-2025-01-visibility-mode.png" alt="Visibility mode action" width="400" >}}

#### API

The `brands` condition is supported by all API endpoints where the existing `dateTime` component condition is supported:

- `GET /api/v1/documents/:documentId/latestPublication`
- `GET /api/v1/documents/latestPublications`
- `GET /api/v1/documents/:documentId/latestPublication/renditions/:renditionHandles`
- `GET /api/v1/publications/search`
- `GET /api/v1/document-lists/:id`
- `GET /api/beta/documents/:documentId/latestDraft`
- `GET /api/beta/documents/:documentId/latestPublication`
- `GET /api/beta/documents/latestPublications`
- `POST /api/beta/composition/:documentId`

Along with these endpoints, the related Public API methods also support the new `brands` condition:

- `publicApi.getLatestPublication({ignoreComponentConditions, componentConditions})`
- `publicApi.getLatestPublications({ignoreComponentConditions, componentConditions})`
- `publicApi.getRenditions({ignoreComponentConditions, componentConditions})`
- `publicApi.searchPublications({ignoreComponentConditions, componentConditions})`
- `publicApi.getDocumentList({ignoreComponentConditions, componentConditions})`
- `publicApi.getLatestDraftBeta({ignoreComponentConditions, componentConditions})`
- `publicApi.getLatestDraftsBeta({ignoreComponentConditions, componentConditions})`

{{< feature-info "Page Management" "server" >}}
### Page Management: References in Base Filters

To enhance page management workflows, we are introducing support for variables in base filters of `li-teaser` and `li-document-search`.

For example, consider a news site where articles are categorized using a topic metadata property. Each topic has a corresponding page, which also has the same topic metadata property. Specialized teaser components based on `li-teaser` and `li-document-search` will then automatically use the topic from the page to display articles of the same topic, eliminating the need to manually select the topic for each teaser component through the user interface.

With variables, these components can now reference other properties to dynamically adjust their base filter, such as:

- Metadata properties of the document containing the component
- The brand for which the document is requested

#### Metadata Properties

For example, consider the following base filter:

```js
baseFilters: [
  {key: 'metadata.topic.reference.id', termVariable: 'metadata.topic.reference.id'}
]
```

This base filter matches all documents that share the same topic metadata property (a reference to a dedicated topic data record) which is also selected for the page in which the teaser component is currently included.

Metadata properties are accessed using the same syntax as the indexing behavior of the underlying metadata plugin. In the example above, the metadata property is of type `li-document-reference`. To extract the IDs from this property, the postfix `reference.id` is appended. This corresponds to the indexing behavior of `li-document-reference`, specifically its key.

```js
indexing: {
  enabled: true,
  behavior: [{
    type: 'keyword',
    key: 'reference.id',
    getValue (val) { return val.reference?.id }
  }]
}
```

Metadata properties do not need to be indexed to be referenced by a term variable (such as `topic` on the topic page in this example).

If a referenced metadata property is empty, the term variable will be excluded from the query. Therefore, we recommend to always pair such terms with an additional superset term as a fallback. For example:

```js
baseFilters: [
  {key: 'contentType', term: 'article'},
  // This will be excluded if metadata property topic is empty
  {key: 'metadata.topic.reference.id', termVariable: 'metadata.topic.reference.id'}
]
```

#### Brand Component Conditions

In addition to metadata properties, you can reference the [brand for which the document is requested]({{< ref "/reference/project-config/content-types/#conditional-components" >}}) using the `componentConditions.brand` term variable. This enables you to load teasers relevant to a specific brand.

For example, if articles are categorized by a `brand` metadata property, you can filter them using the following base filter:

```js
baseFilters: [
  {key: 'metadata.brand', termVariable: 'componentConditions.brand'}
]
```

If no brand is provided in a request, `componentConditions.brand` uses the [default brand]({{< ref "/reference/project-config/brands" >}}) as configured in the Project Config.

For more details, refer to our [term variable documentation]({{< ref "/reference/document/metadata/plugins/li-teaser/#term-variables" >}}).

{{< feature-info "Metadata" "server" >}}
### User needs plugin :gift:

The *User Needs* metadata plugin integrates the [User Needs Model 2.0](https://smartocto.com/blog/explaining-user-needs) into Livingdocs, allowing newsrooms to categorize articles based on audience-focused interests.  
By assigning one of eight user-need categories during content creation or editing, teams can better align with audience preferences, boost engagement, and optimize content placement.

__How to use User Needs  in Livingdocs:__
- Select them in the dashboard, in the metadata panel of the editor or in the creation-flow panel
- Edit them in the dashboard in the metadata panel
- Enable User Needs as filter in the dashboard to streamline content analysis.

For instructions on how to set it up, refer to the [li-user-needs documentation]({{< ref "/reference/document/metadata/plugins/li-user-needs" >}}).

{{< img src="./release-2025-01-user-needs.png" alt="User Needs in Dashboard and in Metadata"  >}}

{{< feature-info "Integrations" "editor" >}}
### PEIQ integration :gift:

You can now upload images directly from PEIQ via drag & drop into our system, making your workflow more efficient and straightforward.

To set it up, add the following configuration to your project settings:

```js
// project config
{
  settings: {
    integrations: {
      peiq: {
        enabled: true,
        targetMediaType: 'image',
        apiEndpoint: '...',
        apiToken: {
          $secretRef: {
            name: 'peiq-local'
          }
        }
      }
    }
  }
}
```

To enable the import of metadata directly from PEIQ, we provide an extraction mapping feature. This allows you to define how PEIQ fields correspond to specific metadata properties:

```js
// project config
{
  mediaTypes: [
    {
      handle: 'image',
      // ...
      peiqExtraction: {
        mappings: [
          {field: 'name', metadataPropertyName: 'title'},
          // ...
        ]
      }
    }
  ]
}
```

{{< feature-info "Document Preview" "editor" >}}
### Document preview auto-reload :gift:


{{< feature-info "Metadata" "server" >}}
### System metadata plugins :gift:


## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2024-45813](https://nvd.nist.gov/vuln/detail/CVE-2024-45813) patched in `find-my-way` v8.2.2
* [CVE-2024-52798](https://github.com/advisories/GHSA-rhx6-c78j-4q9w) patched in `path-to-regexp` v0.1.12
* [CVE-2024-55565](https://github.com/advisories/GHSA-mwcw-c2x4-8c55) patched in `nanoid` v3.3.8

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2024-52810](https://github.com/advisories/GHSA-hjwq-mjwj-4x6c) patched in `@intlify/shared` v9.14.2
* [CVE-2024-55565](https://github.com/advisories/GHSA-mwcw-c2x4-8c55) patched in `nanoid` v3.3.8

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
* [CVE-2024-6783](https://github.com/advisories/GHSA-g3ch-rx76-35fx) vulnerability in `vue-template-compiler` it allows malicious users to perform XSS via prototype pollution. Editor build is always done in a trusted environment and the vulnerability is not exploitable.
* [CVE-2024-9506](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx) vulnerability in `vue`, an ReDoS vulnerability exploitable through inefficient regex evaluation in parseHTML function. The issue can cause excessive CPU usage but is not exploitable in the editor as we don't load untrusted HTML at runtime.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v267.1.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v267.1.3): fix(li-system-date): Make the new `li-system-date` and `li-system-datetime` validations more strict
- [v267.1.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v267.1.2): fix(deps): update dependency @livingdocs/framework from 32.1.1 to v32.1.2
- [v267.1.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v267.1.1): fix(channels): Deprecate Multi-Channel Setups (LIDEP048)

### Livingdocs Editor Patches
- [v114.13.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v114.13.10): fix: Fix print preview size
- [v114.13.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v114.13.9): fix: Set split pane min-width to configured start width if smaller than default
- [v114.13.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v114.13.8): fix(peiq): Register PEIQ drop handler before image drop handler
- [v114.13.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v114.13.7): fix(security): Patch vulnerability CVE-2024-52810 in `@intlify/shared` and CVE-2024-55565 in `nanoid`
- [v114.13.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v114.13.6): fix(print-flows): Check copySource exists
- [v114.13.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v114.13.5): fix(copy): Ensure document loaded before opening panels
- [v114.13.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v114.13.4): fix: remove nzz publish control behavior
- [v114.13.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v114.13.3): fix(confirm button): Angular version
- [v114.13.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v114.13.2): fix(deps): update dependency @livingdocs/framework from 32.1.1 to v32.1.2
- [v114.13.1](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v114.13.1): fix(teaser-manager): Reduce include resolve requests


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
