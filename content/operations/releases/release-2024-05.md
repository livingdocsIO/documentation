---
type: release-notes
title: May 2024 Release
description: Technical Release Notes for release-2024-05
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2024-05/
  - /operations/releases/release-2024-05/release-2024-05/
---

{{< release-header
  title="May 2024 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2024-05"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Fix renaming of dashboardType variable](https://github.com/livingdocsIO/livingdocs-editor/pull/8278)
* [fix(deps): update dependency sanitize-html from 2.12.1 to v2.13.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8267)
* [Tasks: show the toolbar action also on small screens](https://github.com/livingdocsIO/livingdocs-editor/pull/8271)
* [Define limit on `documentListModel.getInbox()`](https://github.com/livingdocsIO/livingdocs-server/pull/6729)
* [fix(deps): update dependency express from 4.18.3 to v4.19.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6731)
* [fix(deps): update dependency nodemailer from 6.9.12 to v6.9.13 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6730)
* [fix(deps): update babel from 7.24.1 to v7.24.3 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/8266)
* [Timeline fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/8254)
* [Fix save conflicts](https://github.com/livingdocsIO/livingdocs-editor/pull/8257)
* [fix(deps): update dependency @aws-sdk/client-s3 from 3.535.0 to v3.537.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6726)
* [chore(deps): update dependency @babel/eslint-parser from 7.23.10 to v7.24.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8263)
* [fix(deps): update dependency @livingdocs/framework from 29.3.3 to v29.3.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6725)
* [fix(deps): update dependency polybooljs from 1.2.1 to v1.2.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8256)
* [fix(deps): update dependency date-fns from 3.4.0 to v3.6.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8245)
* [fix(deps): update dependency date-fns from 3.4.0 to v3.6.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6720)
* [fix(toolbar): Lock indicator](https://github.com/livingdocsIO/livingdocs-editor/pull/8246)
* [fix(deps): update dependency polybooljs from 1.2.0 to v1.2.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8251)
* [fix(deps): update dependency axios from 1.6.7 to v1.6.8 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6721)
* [fix(deps): update dependency axios from 1.6.7 to v1.6.8 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8250)
* [Remove teaser transform warning](https://github.com/livingdocsIO/livingdocs-editor/pull/8232)
* [fix(deps): update aws-sdk (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6716)
* [Do not allow @assignment of api client and import users](https://github.com/livingdocsIO/livingdocs-editor/pull/8235)
* [fix(distribution planning): Highlight](https://github.com/livingdocsIO/livingdocs-editor/pull/8240)
* [Fix article create button without permission showing multiple errors](https://github.com/livingdocsIO/livingdocs-editor/pull/8227)
* [fix(deps): update dependency sass from 1.71.1 to v1.72.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8231)
* [Fix List Button on Page only enabled with permissions](https://github.com/livingdocsIO/livingdocs-editor/pull/8220)
* [fix(deps): update dependency fast-json-stringify from 5.12.0 to v5.13.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6714)
* [Cypress test for include overrides](https://github.com/livingdocsIO/livingdocs-editor/pull/8222)
* [fix(e2e): navigate to dashboard after document was created](https://github.com/livingdocsIO/livingdocs-editor/pull/8225)
* [Migrate `<li-document-results />` to Vue](https://github.com/livingdocsIO/livingdocs-editor/pull/8118)
* [fix(deps): update dependency @smithy/node-http-handler from 2.4.2 to v2.4.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6713)
* [Fix/App Max Width Borders](https://github.com/livingdocsIO/livingdocs-editor/pull/8217)
* [fix(deps): update dependency date-fns from 3.3.1 to v3.4.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8211)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/6710)
* [Remove schedule from archived documents](https://github.com/livingdocsIO/livingdocs-server/pull/6703)
* [Fix/Meta Integer on Table Dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/8209)
* [fix(deps): update dependency open from 10.0.4 to v10.1.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8205)
* [Some UI label improvements for 2024-03](https://github.com/livingdocsIO/livingdocs-editor/pull/8207)
* [fix(deps): update dependency exifreader from 4.21.0 to v4.21.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6705)
* [fix(deps): update dependency nodemailer from 6.9.11 to v6.9.12 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6704)
* [Fix media library file download extension](https://github.com/livingdocsIO/livingdocs-editor/pull/8201)
* [Fix media library file download extension](https://github.com/livingdocsIO/livingdocs-server/pull/6699)
* [Fix/Table Dashboard Main Cell](https://github.com/livingdocsIO/livingdocs-editor/pull/8197)
* [Fix error when proofreading invisible components](https://github.com/livingdocsIO/livingdocs-editor/pull/8195)
* [Conditional Component Improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/8127)
* [fix(deps): update opentelemetry (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6681)
* [fix(deps): update dependency openid-client from 5.6.4 to v5.6.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6693)
* [Fix task don't notify user if he assigned himself](https://github.com/livingdocsIO/livingdocs-server/pull/6683)
* [fix(deps): update dependency @livingdocs/framework from 29.3.2 to v29.3.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8190)
* [Fix/Class Names](https://github.com/livingdocsIO/livingdocs-editor/pull/8188)
* [Always load the design of ticker entries before rendering them](https://github.com/livingdocsIO/livingdocs-editor/pull/8183)
* [Fix detect PayloadTooLarge API errors](https://github.com/livingdocsIO/livingdocs-editor/pull/8182)
* [fix(deps): update dependency @livingdocs/framework from 29.3.1 to v29.3.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6680)
* [fix(deps): update dependency @livingdocs/framework from 29.3.1 to v29.3.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8184)
* [Add publication.update to the webhook UI](https://github.com/livingdocsIO/livingdocs-editor/pull/8180)
* [Revert mandatory video directive durationSeconds schema change](https://github.com/livingdocsIO/livingdocs-server/pull/6677)
* [Set asset.duration on mediaLibrary drop objects](https://github.com/livingdocsIO/livingdocs-editor/pull/8172)
* [fix(deps): update dependency cloudinary from 2.0.2 to v2.0.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6679)
* [fix(deps): update dependency fastify from 4.26.1 to v4.26.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6675)
* [fix(deps): update dependency fastify from 4.26.1 to v4.26.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8171)
* [fix(deps): update dependency cloudinary from 2.0.1 to v2.0.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6674)
* [fix(deps): update opentelemetry (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6665)
* [Feat: Manual Document Status](https://github.com/livingdocsIO/livingdocs-editor/pull/8082)
* [fix(deps): update aws-sdk from 3.523.0 to v3.525.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6668)
* [Emit publication.update event when a document is republished](https://github.com/livingdocsIO/livingdocs-server/pull/6658)
* [Only include project ID if it is a number](https://github.com/livingdocsIO/livingdocs-editor/pull/8157)
* [Don't emit actor in scheduled media library li-datetime-validity events](https://github.com/livingdocsIO/livingdocs-server/pull/6671)
* [Fix named crops for imported images that don't have an imageService configured](https://github.com/livingdocsIO/livingdocs-editor/pull/8164)
* [Avoid falling back to default project and issuing a warning when a valid project is provided during authentication](https://github.com/livingdocsIO/livingdocs-server/pull/6666)
* [Use same base filters for media side panel multi-source summary and media type queries](https://github.com/livingdocsIO/livingdocs-editor/pull/8156)
* [Emit debounced date when li-date-input is destroyed](https://github.com/livingdocsIO/livingdocs-editor/pull/8153)
* [Do not throw errors when rendering list dashboards when multi-select is disabled](https://github.com/livingdocsIO/livingdocs-editor/pull/8155)
* [fix(deps): update dependency express from 4.18.2 to v4.18.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6667)
* [fix(deps): update dependency nodemailer from 6.9.10 to v6.9.11 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6664)
* [Media Library Scheduler Improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/8140)
* [fix(deps): update babel from 7.23.9 to v7.24.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-editor/pull/8146)
* [Media Library Scheduler Improvements](https://github.com/livingdocsIO/livingdocs-server/pull/6653)
* [fix(deps): update dependency @livingdocs/framework from 29.3.0 to v29.3.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8145)
* [Fall back to default project if an invalid one is requested on authentication](https://github.com/livingdocsIO/livingdocs-server/pull/6652)
* [Relax URL constraints](https://github.com/livingdocsIO/livingdocs-editor/pull/8139)
* [fix(deps): update aws-sdk (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/6654)
* [fix(deps): update dependency @livingdocs/framework from 29.2.2 to v29.3.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8137)
* [fix(deps): update dependency mini-css-extract-plugin from 2.8.0 to v2.8.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8136)
* [Fix: Media Library showing error in console](https://github.com/livingdocsIO/livingdocs-editor/pull/8129)
* [Do not rely on order of events in webhooks tests](https://github.com/livingdocsIO/livingdocs-server/pull/6650)
* [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-editor/pull/8126)
* [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-server/pull/6649)


To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2024-05`, read on.

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
| NPM                            | 10                                                                                       |
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
livingdocs-server migrate up
```

TODO: check migration

## Deprecations

## APIs :gift:

## Features

TODO (featureset not 100% defined yet)

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

### Livingdocs Editor


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
