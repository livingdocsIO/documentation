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

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [chore(deps): update dependency eslint from 8.48.0 to v8.49.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6117)
* [chore(deps): update dependency eslint from 8.48.0 to v8.49.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7454)
* [Ticker Event Listener Fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/7441)
* [Don't try to lock components which do not exist](https://github.com/livingdocsIO/livingdocs-editor/pull/7440)
* [Prevent console error when computing CSS classes in history side panel](https://github.com/livingdocsIO/livingdocs-editor/pull/7450)
* [Handle less data being returned on initial panel open](https://github.com/livingdocsIO/livingdocs-editor/pull/7437)
* [Don't send document content with history list](https://github.com/livingdocsIO/livingdocs-server/pull/6110)
* [fix(deps): update dependency @google-cloud/storage from 7.0.1 to v7.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6111)
* [Fix duplicated filters in media library dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/7444)
* [Fix `GET /notifications/subscriptions/:documentId` status code](https://github.com/livingdocsIO/livingdocs-server/pull/6113)
* [fix(numberdot): Small](https://github.com/livingdocsIO/livingdocs-editor/pull/7438)
* [Conflict UI fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/7428)
* [fix(deps): update dependency aws-sdk from 2.1450.0 to v2.1452.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6103)
* [fix(team filter): Element order](https://github.com/livingdocsIO/livingdocs-editor/pull/7434)
* [History side panel fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/7429)
* [fix(deps): update dependency nodemailer from 6.9.4 to v6.9.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6108)
* [Correctly position apply and discard buttons in conflict UI](https://github.com/livingdocsIO/livingdocs-editor/pull/7425)
* [Show selected filter value](https://github.com/livingdocsIO/livingdocs-editor/pull/7396)
* [Cross Project Content Sharing - ImageServices](https://github.com/livingdocsIO/livingdocs-editor/pull/7417)
* [Cross Project Content Sharing - ImageServices](https://github.com/livingdocsIO/livingdocs-server/pull/6100)
* [fix(deps): update dependency @livingdocs/framework from 26.1.3 to v26.1.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6104)
* [fix(deps): update dependency @livingdocs/framework from 26.1.3 to v26.1.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7422)
* [fix(deps): update dependency @livingdocs/framework from 26.1.2 to v26.1.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6102)
* [fix(deps): update dependency @livingdocs/framework from 26.1.2 to v26.1.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7420)
* [fix(deps): update dependency jose from 4.14.5 to v4.14.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6098)
* [fix(deps): update dependency https-proxy-agent from 7.0.1 to v7.0.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7416)
* [Fix: Editor Sidebar breaks after opening history mode](https://github.com/livingdocsIO/livingdocs-editor/pull/7409)
* [Ticker fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/7393)
* [fix(deps): update dependency aws-sdk from 2.1448.0 to v2.1450.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6094)
* [fix(deps): update dependency jose from 4.14.4 to v4.14.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6096)
* [fix(deps): update dependency fastify from 4.22.1 to v4.22.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7405)
* [fix(deps): update dependency fastify from 4.22.1 to v4.22.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6095)
* [fix(component lock): Restored look](https://github.com/livingdocsIO/livingdocs-editor/pull/7401)
* [Apply base filters in quick search](https://github.com/livingdocsIO/livingdocs-editor/pull/7399)
* [Fix comments parsing error](https://github.com/livingdocsIO/livingdocs-editor/pull/7383)
* [fix(deps): update dependency fastify from 4.22.0 to v4.22.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6093)
* [fix(deps): update dependency fastify from 4.22.0 to v4.22.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7395)
* [fix(deps): update dependency cypress from 12.17.4 to v13 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7378)
* [Fix/editor scrolling #5028](https://github.com/livingdocsIO/livingdocs-editor/pull/7389)
* [Update references after running hooks](https://github.com/livingdocsIO/livingdocs-server/pull/6055)
* [Handle errors in custom getDocumentIds include functions](https://github.com/livingdocsIO/livingdocs-server/pull/6078)
* [Change supported browser versions as we're using newer apis](https://github.com/livingdocsIO/livingdocs-editor/pull/7388)
* [fix(deps): update dependency aws-sdk from 2.1444.0 to v2.1448.0 (master) - autoclosed](https://github.com/livingdocsIO/livingdocs-server/pull/6074)
* [fix(deps): update dependency @babel/preset-env from 7.22.10 to v7.22.14 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7356)
* [Convert li-poster-image metadata plugin form to Vue](https://github.com/livingdocsIO/livingdocs-editor/pull/7344)
* [fix(deps): update dependency fastify from 4.21.0 to v4.22.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6076)
* [fix(deps): update dependency @livingdocs/framework from 26.0.1 to v26.1.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6088)
* [fix(deps): update dependency @livingdocs/framework from 26.0.1 to v26.1.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7359)
* [Streamline when removed component label or removed text label is shown](https://github.com/livingdocsIO/livingdocs-editor/pull/7382)
* [Allow li-image metadata plugin to be used in media library metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/7333)
* [Fix display filters erroring without store on multilist viewer](https://github.com/livingdocsIO/livingdocs-editor/pull/7384)
* [fix(editableCount): updated name](https://github.com/livingdocsIO/livingdocs-editor/pull/7379)
* [fix(viewEvents): make blur editable fire before blur component](https://github.com/livingdocsIO/livingdocs-editor/pull/7375)
* [Truncate document title on creation](https://github.com/livingdocsIO/livingdocs-server/pull/6084)
* [fix: pass image original dimensions for crop preview](https://github.com/livingdocsIO/livingdocs-editor/pull/7343)
* [Update `nzz` downstream branch to `release-2023-11`](https://github.com/livingdocsIO/livingdocs-editor/pull/7373)
* [Update `nzz` downstream branch to `release-2023-11`](https://github.com/livingdocsIO/livingdocs-server/pull/6083)


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
| Postgres                       | 13                                                                                       |
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
