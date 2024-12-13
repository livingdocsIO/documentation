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

## PRs to Categorize
* [Increase maximum pagination limit of /documents endpoint to 1000](https://github.com/livingdocsIO/livingdocs-server/pull/7562)
* [Use earlier base source document revision](https://github.com/livingdocsIO/livingdocs-server/pull/7535)
* [Breaking Change for Comyan config (LIDEP038 -> LIBREAKING038)](https://github.com/livingdocsIO/livingdocs-server/pull/7557)
* [fix(deps): update dependency posthog-node from 4.3.1 to v4.3.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/7560)
* [Add autoReload to project config documentPreviews schema](https://github.com/livingdocsIO/livingdocs-server/pull/7542)
* [Auto-Reload for Document Preview](https://github.com/livingdocsIO/livingdocs-editor/pull/9355)
* [Add PostHog event tracking support](https://github.com/livingdocsIO/livingdocs-server/pull/7543)
* [fix(li-schema-form): don't do delayed focus clearing after refocused](https://github.com/livingdocsIO/livingdocs-editor/pull/9371)
* [Term variables in li-document-search and li-teaser](https://github.com/livingdocsIO/livingdocs-server/pull/7536)
* [Resolve includes when referenced term variables change](https://github.com/livingdocsIO/livingdocs-editor/pull/9357)
* [Fix/Add User Button](https://github.com/livingdocsIO/livingdocs-editor/pull/9369)
* [user-needs: add transition delay and fix alignment of user-needs in circle](https://github.com/livingdocsIO/livingdocs-editor/pull/9368)


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

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}
### Migrate the Postgres Database :fire:

No migrations were introduced in this release.

{{< feature-info "Operations" "editor/server" >}}
### Drop support for Node.js 18 :fire:
- 🔥 Drop Node.js `v18`. Only Node.js `v20.18` and newer are supported.

How to migrate your project to Node.js 22:
- Change the content of the `.nvmrc` in your project root to `22`
- Change the `engines.node` declaration in the `package.json` to `>=22`
- Change the `Dockerfile` of the server to `livingdocs/server-base:22`
- Change the `Dockerfile` of the editor to `livingdocs/editor-base:22`

{{< feature-info "Dashboards" "server" >}}
### Angular dashboard cards :fire:


{{< feature-info "Dashboard" "server" >}}
### Dashboard type `dashboard` :fire:


{{< feature-info "Integrations" "server" >}}
### Comyan upload without `targetMediaType` and metadata mapping :fire:


{{< feature-info "Dependencies" "server" >}}
### Migrate to Express v5 :fire:



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

{{< feature-info "Server Configuration" "server" >}}
### Multi channel configuration :warning:


## Features

{{< feature-info "Content Management" "editor" >}}
### Print diff view :gift:


{{< feature-info "Conditions" "server" >}}
### Brand Conditions :gift:


{{< feature-info "Page Management" "server" >}}
### Page Management:References in Base Filters


{{< feature-info "Metadata" "server" >}}
### User needs plugin :gift:


{{< feature-info "Integrations" "editor" >}}
### PEIQ integration :gift:


{{< feature-info "Document Preview" "editor" >}}
### Document preview auto-reload :gift:


{{< feature-info "Metadata" "server" >}}
### System metadata plugins :gift:



## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2024-55565](https://github.com/advisories/GHSA-mwcw-c2x4-8c55) patched in `nanoid`. 
* [CVE-2024-45813](https://nvd.nist.gov/vuln/detail/CVE-2024-45813) patched in `find-my-way` v8.2.2

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* TBD

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

### Livingdocs Editor Patches


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
