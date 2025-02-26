---
type: release-notes
title: March 2025 Release
description: Technical Release Notes for release-2025-03
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2025-03
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
- [Fix versioned route for kordiam & use correct breaking change code](https://github.com/livingdocsIO/livingdocs-server/pull/7753)
- [Merge beta routes into public api routes](https://github.com/livingdocsIO/livingdocs-server/pull/7474)
- [fix: animate document inbox item count when updating from 0 to 1 docs](https://github.com/livingdocsIO/livingdocs-editor/pull/9604)
- [fix(migrations): Set default document entity data before applying mig…](https://github.com/livingdocsIO/livingdocs-server/pull/7750)
- [fix: add missing style when task label is not link](https://github.com/livingdocsIO/livingdocs-editor/pull/9605)
- [Data migration improvements](https://github.com/livingdocsIO/livingdocs-server/pull/7733)
- [Feat image variants](https://github.com/livingdocsIO/livingdocs-editor/pull/9552)
- [Index media library entry states in Elasticsearch](https://github.com/livingdocsIO/livingdocs-server/pull/7735)
- [Inbox with images](https://github.com/livingdocsIO/livingdocs-editor/pull/9554)
- [Prevent deletion of published media library entries](https://github.com/livingdocsIO/livingdocs-editor/pull/9595)
- [Track when a media library entry is in a published document](https://github.com/livingdocsIO/livingdocs-server/pull/7671)
- [Distribution dates improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/9592)
- [Hide media library entry and notify after delete](https://github.com/livingdocsIO/livingdocs-editor/pull/9591)
- [Increase default thread maximum to 300](https://github.com/livingdocsIO/livingdocs-server/pull/7739)
- [Correctly escape control characters in json during postgres save](https://github.com/livingdocsIO/livingdocs-server/pull/7736)
- [Feat: image variants](https://github.com/livingdocsIO/livingdocs-server/pull/7691)
- [Add smartquotes setup, editable.js updater and toggle component to editor](https://github.com/livingdocsIO/livingdocs-editor/pull/9545)
- [fix(tests): Teasers](https://github.com/livingdocsIO/livingdocs-editor/pull/9594)
- [Add smartQuotes configuration](https://github.com/livingdocsIO/livingdocs-server/pull/7695)
- [Add store in archive functionality to media library](https://github.com/livingdocsIO/livingdocs-editor/pull/9590)
- [Allow media library entries to be stored in archive](https://github.com/livingdocsIO/livingdocs-server/pull/7670)
- [Teaser Side Table](https://github.com/livingdocsIO/livingdocs-editor/pull/9564)
- [Show canvas border around teaser containers](https://github.com/livingdocsIO/livingdocs-editor/pull/9575)
- [Add media library hard-delete functionality](https://github.com/livingdocsIO/livingdocs-editor/pull/9570)
- [Add media library hard-delete functionality](https://github.com/livingdocsIO/livingdocs-server/pull/7669)
- [Polish/teaser side panel](https://github.com/livingdocsIO/livingdocs-editor/pull/9584)
- [Rename migration with duplicate sequence](https://github.com/livingdocsIO/livingdocs-server/pull/7727)
- [fix(kordiam plugin): Error spacing](https://github.com/livingdocsIO/livingdocs-editor/pull/9583)
- [Remove design migration screen](https://github.com/livingdocsIO/livingdocs-editor/pull/9533)
- [Add check-document-design-versions task](https://github.com/livingdocsIO/livingdocs-server/pull/7705)
- [Improve design version handling](https://github.com/livingdocsIO/livingdocs-server/pull/7689)
- [Fix document_revisions.metadata support in indexing-repository](https://github.com/livingdocsIO/livingdocs-server/pull/7720)
- [Display context menu in media library image detail view](https://github.com/livingdocsIO/livingdocs-editor/pull/9571)
- [Do not use media library entry state string](https://github.com/livingdocsIO/livingdocs-editor/pull/9567)
- [Track media library entry state changes](https://github.com/livingdocsIO/livingdocs-server/pull/7668)
- [Use new document inbox route and params](https://github.com/livingdocsIO/livingdocs-editor/pull/9569)
- [Feat/slate articles](https://github.com/livingdocsIO/livingdocs-server/pull/7708)
- [UI improvements/task cell](https://github.com/livingdocsIO/livingdocs-editor/pull/9563)
- [Server: Teaser Container](https://github.com/livingdocsIO/livingdocs-server/pull/7696)
- [Editor: Teaser Container](https://github.com/livingdocsIO/livingdocs-editor/pull/9560)
- [Fix image widths](https://github.com/livingdocsIO/livingdocs-editor/pull/9562)
- [Editor: Distribution Dates Part 1](https://github.com/livingdocsIO/livingdocs-editor/pull/9498)
- [Server: Distribution Dates Part 1](https://github.com/livingdocsIO/livingdocs-server/pull/7648)
- [Insert-panel-improvements: add 'open in media library' link to li-meta-image](https://github.com/livingdocsIO/livingdocs-editor/pull/9553)
- [Fix video upload timeout](https://github.com/livingdocsIO/livingdocs-server/pull/7697)
- [Support querying media reference placements in document inbox](https://github.com/livingdocsIO/livingdocs-server/pull/7661)
- [Close display filters in modal on click outside](https://github.com/livingdocsIO/livingdocs-editor/pull/9536)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/7692)
- [Rename `persistOriginalAssets` to `preserveOriginalAssets`](https://github.com/livingdocsIO/livingdocs-server/pull/7688)
- [Allow opt-out of asset deletion when revoking media library entries](https://github.com/livingdocsIO/livingdocs-server/pull/7660)
- [Only resolve affected includes after deduplication was invalidated](https://github.com/livingdocsIO/livingdocs-editor/pull/9521)
- [Support duplicate labels in single list display filters](https://github.com/livingdocsIO/livingdocs-editor/pull/9520)
- [Support span and other elements in doc-editable directive reference extraction](https://github.com/livingdocsIO/livingdocs-server/pull/7676)
- [Document inbox/badge to indicate new documents](https://github.com/livingdocsIO/livingdocs-editor/pull/9516)
- [Document inbox/push message improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/9504)
- [Show generated output in print flow diff panel](https://github.com/livingdocsIO/livingdocs-editor/pull/9505)
- [Allow print flow content to be generated for a specific revision](https://github.com/livingdocsIO/livingdocs-server/pull/7651)
- [Fix stuck image upload when uploads get cancelled or error](https://github.com/livingdocsIO/livingdocs-server/pull/7662)
- [Fix thrown abort error instance](https://github.com/livingdocsIO/livingdocs-server/pull/7655)
- [Show li-table header on small screens](https://github.com/livingdocsIO/livingdocs-editor/pull/9503)
- [UI improvements/property panel labels](https://github.com/livingdocsIO/livingdocs-editor/pull/9501)
- [UI improvements Insert Panel](https://github.com/livingdocsIO/livingdocs-editor/pull/9499)
- [Improve collab user flyout](https://github.com/livingdocsIO/livingdocs-editor/pull/9502)
- [Deprecate li-image and li-videos api and remove resources](https://github.com/livingdocsIO/livingdocs-server/pull/7627)
- [Use confirmation button for print flow mark as seen](https://github.com/livingdocsIO/livingdocs-editor/pull/9423)
- [fix/vh-overriding-in-iframe](https://github.com/livingdocsIO/livingdocs-server/pull/7644)
- [fix/vh-overriding-in-iframe](https://github.com/livingdocsIO/livingdocs-editor/pull/9491)
- [fix/canvas-iframe-min-size](https://github.com/livingdocsIO/livingdocs-editor/pull/9490)
- [Restore search and display filters when navigating back to the home screen when there is only one searchable dashboard](https://github.com/livingdocsIO/livingdocs-editor/pull/9483)
- [Fix image upload timeouts](https://github.com/livingdocsIO/livingdocs-server/pull/7631)
- [Disable request retry in proxy](https://github.com/livingdocsIO/livingdocs-editor/pull/9476)
- [Add prettier](https://github.com/livingdocsIO/livingdocs-server/pull/7622)
- [update drone signature](https://github.com/livingdocsIO/livingdocs-editor/pull/9473)
- [Reduce wide side panel width on small screens](https://github.com/livingdocsIO/livingdocs-editor/pull/9467)
- [Task Board: fix german translation](https://github.com/livingdocsIO/livingdocs-editor/pull/9463)
- [Position formatting popover behind metadata panel](https://github.com/livingdocsIO/livingdocs-editor/pull/9421)
- [Revoke user occupation also when no email transport is configured](https://github.com/livingdocsIO/livingdocs-server/pull/7616)
- [Use fixed position for dialog on mobile](https://github.com/livingdocsIO/livingdocs-editor/pull/9443)
- [Fix display filter popups moving around](https://github.com/livingdocsIO/livingdocs-editor/pull/9440)
- [Fix teasers in visibility mode](https://github.com/livingdocsIO/livingdocs-editor/pull/9442)
- [Extract dashboard content types also from nested .or and .and filter arrays](https://github.com/livingdocsIO/livingdocs-editor/pull/9441)
- [Hide text count when print preview is open](https://github.com/livingdocsIO/livingdocs-editor/pull/9432)
- [Scroll entire publish panel (including error section)](https://github.com/livingdocsIO/livingdocs-editor/pull/9428)
- [Do not throw an error when the max filesize is reached](https://github.com/livingdocsIO/livingdocs-server/pull/7606)
- [Allow CI workflow to skip if npm audit returns vulnerabilities](https://github.com/livingdocsIO/livingdocs-server/pull/7604)
- [Fix print preview size](https://github.com/livingdocsIO/livingdocs-editor/pull/9429)
- [Set split pane min-width to configured start width if smaller than default (375px)](https://github.com/livingdocsIO/livingdocs-editor/pull/9425)
- [Register PEIQ drop handler before image drop handler](https://github.com/livingdocsIO/livingdocs-editor/pull/9415)
- [Check copySource exists when loading print flows](https://github.com/livingdocsIO/livingdocs-editor/pull/9409)
- [Ensure document loaded before opening panels](https://github.com/livingdocsIO/livingdocs-editor/pull/9410)
- [Make the new `li-system-date` and `li-system-datetime` validations more strict](https://github.com/livingdocsIO/livingdocs-server/pull/7593)
- [Migrate template string renderings to the same function we use on the server](https://github.com/livingdocsIO/livingdocs-editor/pull/9122)
- [Respect count in example server teaser-list service](https://github.com/livingdocsIO/livingdocs-server/pull/7583)
- [fix(confirm button): Angular version](https://github.com/livingdocsIO/livingdocs-editor/pull/9406)
- [Reduce include resolve requests in Teaser Manager](https://github.com/livingdocsIO/livingdocs-editor/pull/9389)
- [Remove nzz publish control behavior](https://github.com/livingdocsIO/livingdocs-editor/pull/9388)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2025-03`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- Feature Webinar Recording: **TODO**
- Feature Webinar Documentation: **TODO**
- Dev Webinar Recording: **TODO**
- Dev Webinar Slides: **TODO**
- [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

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

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
livingdocs-server migrate up
```

TODO: check migration

## Deprecations

## Features

TODO (featureset not 100% defined yet)

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- TBD

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- TBD

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v271.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.3): fix(webhooks): Add webhook timeout config property
- [v271.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v271.0.2): fix(api-version): Keep supporting beta routes

### Livingdocs Editor Patches
- [v115.22.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v115.22.3): fix: Open document inbox when in visibility mode

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
- Bugfix: :beetle:
- Chore: :wrench:
