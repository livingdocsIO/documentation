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
