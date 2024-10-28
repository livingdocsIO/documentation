---
type: release-notes
title: November 2024 Release
description: Technical Release Notes for release-2024-11
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-11/
---

{{< release-header
  title="November 2024 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2024-11"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Relax li-unique-id regex validation for tests](https://github.com/livingdocsIO/livingdocs-server/pull/7428)
* [fix(deps): update playwright monorepo from 1.48.1 to v1.48.2 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/9154)
* [fix(deps): update aws-sdk from 3.673.0 to v3.679.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/7390)
* [feat(inbox): write access permission](https://github.com/livingdocsIO/livingdocs-editor/pull/9131)
* [fix(li-char-counter): micro-positioning](https://github.com/livingdocsIO/livingdocs-editor/pull/9151)
* [Polish/Print Version Dashboard Cell](https://github.com/livingdocsIO/livingdocs-editor/pull/9147)
* [fix(global portal target): Z visibility](https://github.com/livingdocsIO/livingdocs-editor/pull/9143)
* [fix(deps): update dependency pg from 8.13.0 to v8.13.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7427)
* [fix(deps): update dependency cypress from 13.15.0 to v13.15.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/9144)
* [fix(restore default): returned to true](https://github.com/livingdocsIO/livingdocs-editor/pull/9141)
* [Document Print Flows](https://github.com/livingdocsIO/livingdocs-editor/pull/8829)
* [Document Print Flows](https://github.com/livingdocsIO/livingdocs-server/pull/7158)
* [Desk-Net to Kordiam](https://github.com/livingdocsIO/livingdocs-editor/pull/9127)
* [Fix kanban dashboard realtime support for task updates](https://github.com/livingdocsIO/livingdocs-editor/pull/9137)
* [Deprecate Menu Tool](https://github.com/livingdocsIO/livingdocs-server/pull/7412)
* [fix(deps): update dependency crypto-browserify from 3.12.0 to v3.12.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/9136)
* [Editor: teaser-improvements-6](https://github.com/livingdocsIO/livingdocs-editor/pull/9129)
* [Server: teaser-improvements-6](https://github.com/livingdocsIO/livingdocs-server/pull/7420)
* [New setIncludeDirective command](https://github.com/livingdocsIO/livingdocs-server/pull/7405)
* [Make task mode icon mandatory](https://github.com/livingdocsIO/livingdocs-server/pull/7421)
* [Make task mode icon mandatory](https://github.com/livingdocsIO/livingdocs-editor/pull/9130)
* [Server: teaser-improvements-5](https://github.com/livingdocsIO/livingdocs-server/pull/7415)
* [Editor: teaser-improvements-5](https://github.com/livingdocsIO/livingdocs-editor/pull/9123)
* [fix(deps): update dependency jose from 5.9.4 to v5.9.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/7417)
* [fix(deps): update aws-sdk (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/7419)
* [Feat: assistant component trigger](https://github.com/livingdocsIO/livingdocs-editor/pull/9099)
* [Feat: assistant component trigger](https://github.com/livingdocsIO/livingdocs-server/pull/7379)
* [li-task-v2 modes](https://github.com/livingdocsIO/livingdocs-server/pull/7331)
* [li-task-v2 modes](https://github.com/livingdocsIO/livingdocs-editor/pull/9059)
* [Editor: teaser-improvementes-4](https://github.com/livingdocsIO/livingdocs-editor/pull/9120)
* [Server: teaser-improvements-4](https://github.com/livingdocsIO/livingdocs-server/pull/7411)
* [Editor: teaser-improvementes-3](https://github.com/livingdocsIO/livingdocs-editor/pull/9114)
* [Server: teaser-improvements-3](https://github.com/livingdocsIO/livingdocs-server/pull/7404)
* [Editor: teaser-improvementes-1](https://github.com/livingdocsIO/livingdocs-editor/pull/9111)
* [New metadata plugin li-unique-id](https://github.com/livingdocsIO/livingdocs-editor/pull/9038)
* [New metadata plugin li-unique-id](https://github.com/livingdocsIO/livingdocs-server/pull/7312)
* [Feat: webhooks expose more user actor info when config is set](https://github.com/livingdocsIO/livingdocs-editor/pull/9119)
* [Feat: webhooks expose more user actor info when config is set ](https://github.com/livingdocsIO/livingdocs-server/pull/7410)
* [Only allow insertion of components that are configured in the content type](https://github.com/livingdocsIO/livingdocs-server/pull/7395)
* [New command API commands](https://github.com/livingdocsIO/livingdocs-server/pull/7373)
* [Feat: planning system remove enabled config and license reporting](https://github.com/livingdocsIO/livingdocs-server/pull/7396)
* [Fix aws signing in with opensearch](https://github.com/livingdocsIO/livingdocs-server/pull/7392)
* [Toolbar Layout Tweaks](https://github.com/livingdocsIO/livingdocs-editor/pull/9045)
* [fix(publish control): Button](https://github.com/livingdocsIO/livingdocs-editor/pull/9104)
* [Fix version bumps for new metadata column on document_revisions](https://github.com/livingdocsIO/livingdocs-server/pull/7385)
* [Downgrade severity when authenticating group assigned does not exist](https://github.com/livingdocsIO/livingdocs-server/pull/7381)
* [Fix teaser level behavior](https://github.com/livingdocsIO/livingdocs-server/pull/7380)
* [Fix teaser level behavior](https://github.com/livingdocsIO/livingdocs-editor/pull/9094)
* [Teaser Component optimizations and reference transfer](https://github.com/livingdocsIO/livingdocs-editor/pull/9083)
* [Do not set url querystring in import filename](https://github.com/livingdocsIO/livingdocs-server/pull/7366)
* [Feat: assistant add custom error messages](https://github.com/livingdocsIO/livingdocs-editor/pull/9042)
* [Feat: assistant add custom error messages](https://github.com/livingdocsIO/livingdocs-server/pull/7314)
* [Improve back button logic for issue navigation](https://github.com/livingdocsIO/livingdocs-editor/pull/9044)
* [Teaser components conditions and optimizations](https://github.com/livingdocsIO/livingdocs-server/pull/7339)
* [videoSourcePolicy](https://github.com/livingdocsIO/livingdocs-server/pull/7322)
* [videoSourcePolicy](https://github.com/livingdocsIO/livingdocs-editor/pull/9047)
* [Move metadata onto revisions table](https://github.com/livingdocsIO/livingdocs-server/pull/7321)
* [Do not mutate li-document-search intitialContent object](https://github.com/livingdocsIO/livingdocs-editor/pull/9077)
* [Fix empty check of li-document-search params](https://github.com/livingdocsIO/livingdocs-server/pull/7342)
* [Teaser components sidepanel design](https://github.com/livingdocsIO/livingdocs-editor/pull/9055)
* [Support excludeFromTextCount on container directives](https://github.com/livingdocsIO/livingdocs-editor/pull/9063)
* [Support excludeFromTextCount on container directives](https://github.com/livingdocsIO/livingdocs-server/pull/7332)
* [fix(multiselect): Scrolling](https://github.com/livingdocsIO/livingdocs-editor/pull/9051)
* [Fix image url patching when crop x or y coordinates are not present](https://github.com/livingdocsIO/livingdocs-server/pull/7315)
* [Allow empty `oembed.allowedCoreProviders` array in the server configuration](https://github.com/livingdocsIO/livingdocs-server/pull/7309)
* [App structure simplification](https://github.com/livingdocsIO/livingdocs-editor/pull/8850)
* [fix(manual-status): breaking onto newline](https://github.com/livingdocsIO/livingdocs-editor/pull/9029)
* [fix: focalpoint reactivity](https://github.com/livingdocsIO/livingdocs-editor/pull/9007)
* [Support prefilling of directives with multiple metadata values of media library entries](https://github.com/livingdocsIO/livingdocs-server/pull/7277)
* [Support prefilling of directives with multiple metadata values of media library entries](https://github.com/livingdocsIO/livingdocs-editor/pull/9011)
* [Normalize date fields while indexing](https://github.com/livingdocsIO/livingdocs-server/pull/7268)
* [Fix: close info panel on clicking outside but also when button is clicked again](https://github.com/livingdocsIO/livingdocs-editor/pull/9002)
* [Make toolbar actions reactive](https://github.com/livingdocsIO/livingdocs-editor/pull/8997)
* [Upload center fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/8998)
* [Expose maxSize attribute that defines the maximum bytes on file uploads](https://github.com/livingdocsIO/livingdocs-server/pull/7261)
* [Only show invalid file size error once during image upload](https://github.com/livingdocsIO/livingdocs-editor/pull/8991)
* [Fix restoring documents from local storage after design version bumps](https://github.com/livingdocsIO/livingdocs-editor/pull/8989)
* [Support loading users with any archived state](https://github.com/livingdocsIO/livingdocs-server/pull/7256)
* [fix(admin-dashboard): occupation filter](https://github.com/livingdocsIO/livingdocs-editor/pull/8976)
* [Disable assistants when workspace is read-only](https://github.com/livingdocsIO/livingdocs-editor/pull/8974)
* [fix: info panel goto button](https://github.com/livingdocsIO/livingdocs-editor/pull/8965)
* [Delete unused event related to LIBREAKING035](https://github.com/livingdocsIO/livingdocs-server/pull/7251)
* [Only set default locale if none is present on document create](https://github.com/livingdocsIO/livingdocs-editor/pull/8962)
* [Fix: always show push message button](https://github.com/livingdocsIO/livingdocs-editor/pull/8950)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2024-11`, read on.

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
| Node                           | 18                                                                                       |
| NPM                            | 9                                                                                        |
| Postgres                       | 13                                                                                       |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:18.8                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.10                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Breaking Changes 🔥

{{< feature-info "Operations" "server" >}}
### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
livingdocs-server migrate up
```

{{< feature-info "Internal" "server" >}}
### Metadata table migration to document_revisions :fire:


{{< feature-info "Command API" "server" >}}
### Command API `insertComponent` validation :fire:


{{< feature-info "Search" "server" >}}
### Strict `limit` validation for `li-document-search` :fire:



## Deprecations

{{< feature-info "Integrations" "server/editor" >}}
### Desk-net rename to Kordiam :warning:



{{< feature-info "Search" "server" >}}
### `contentTypes` in `li-document-search` :warning:



{{< feature-info "Menu Tool" "server/editor" >}}
### Menu tool :warning:



## Features

{{< feature-info "Page management" "server" >}}
###  Teaser Components :gift:


{{< feature-info "Content Management" "server" >}}
### Print Copy :gift:


{{< feature-info "Task Management" "editor" >}}
### Task Screens :gift:


{{< feature-info "Metadata" "editor" >}}
### Task Modes :gift:

We are making several enhancements to the [`li-task-v2` metadata plugin]({{< ref "/reference/document/metadata/plugins/li-task-v2" >}}), with the main highlight being the introduction of task modes.

- **Task Modes** allow users to select how they approach a task. For instance, in the context of proofreading, task modes can reflect the level of rigor applied when reviewing an article. A mode can be chosen when a task is accepted or finished, and it is also shown in the task icon.<br>
Task modes can be defined in the metadata plugin configuration. Once configured, selecting a mode becomes mandatory for every newly created task. Modes are displayed in the order they are defined, with the first mode being the default.

```js
{
  handle: 'proofreading',
  type: 'li-task-v2',
  config: {
    modes: [
      {
        handle: 'thorough',
        label: 'Thorough',
        icon: 'glasses'
      },
      {
        handle: 'superficial',
        label: 'Superficial',
        icon: 'speedometer'
      }
    ]
  },
  ...
}
```

Further enhancements to the `li-task-v2` metadata plugin include:

- **Deadline Presets**: These are hardcoded options that enable users to quickly choose a deadline without manually adjusting the input field. The presets are: "+1 hour", "+2 hours", "+24 hours".
- **Setting a Deadline**: When requesting a task, it is no longer necessary to confirm the deadline before proceeding. Previously, users had to click both "Set deadline" and "Request task", leading some to forget the second step. This update streamlines the process by removing the "Set deadline" button.
- **High Priority**: The high priority button has been relocated from the action menu to the task card header for better visibility.

{{< feature-info "Command API" "server" >}}
### Command API enhancements :gift:


{{< feature-info "Assistants" "server" >}}
### Assistants: Component Trigger :gift:


{{< feature-info "Assistants" "editor" >}}
### Assistants: Error messages :gift:


{{< feature-info "Metadata" "server" >}}
### `li-unique-id` metadata plugin :gift:


{{< feature-info "Content Management" "editor" >}}
### Enhanced `componentDirectivesPrefilling` :gift:


{{< feature-info "Integrations" "server" >}}
### Desk-net rename to Kordiam :gift:


{{< feature-info "Media Management" "editor" >}}
### Video Source Policy :gift:


{{< feature-info "Webhooks" "server" >}}
### Webhooks: User Actor Info :gift:


{{< feature-info "Access Control Management" "server" >}}
### `inboxWrite` access right :gift:



## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2024-45813](https://nvd.nist.gov/vuln/detail/CVE-2024-45813) patched in `find-my-way` v8.2.2
* [CVE-2024-47764](https://nvd.nist.gov/vuln/detail/CVE-2024-47764) patched in `cookie` v0.7.0

No known vulnerabilities. :tada:

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2024-45296](https://nvd.nist.gov/vuln/detail/CVE-2024-45296) patched in `path-to-regexp` v6.3.0
* [CVE-2024-45813](https://nvd.nist.gov/vuln/detail/CVE-2024-45813) patched in `find-my-way` v8.2.2
* [CVE-2024-47764](https://nvd.nist.gov/vuln/detail/CVE-2024-47764) patched in `cookie` v0.7.0

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
