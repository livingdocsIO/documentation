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
* [fix(deps): update dependency axios from 1.6.3 to v1.6.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7842)
* [Fix side panel media sources](https://github.com/livingdocsIO/livingdocs-editor/pull/7840)
* [fix(deps): update dependency pino-http from 8.6.1 to v9 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6438)
* [fix(deps): update dependency @smithy/node-http-handler from 2.2.1 to v2.2.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6446)
* [fix(deps): update dependency nodemailer from 6.9.7 to v6.9.8 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6442)
* [fix(deps): update dependency moment-timezone from 0.5.43 to v0.5.44 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7838)
* [fix(deps): update babel from 7.23.6 to v7.23.7 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/7837)
* [Translate "unpublished"](https://github.com/livingdocsIO/livingdocs-editor/pull/7831)
* [fix(deps): update dependency sass from 1.69.5 to v1.69.6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7834)
* [fix(deps): update dependency @livingdocs/framework from 27.3.2 to v27.3.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6437)
* [fix(deps): update dependency @livingdocs/framework from 27.3.2 to v27.3.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7832)
* [fix(deps): update dependency pino-http from 8.6.0 to v8.6.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6436)
* [Shortcuts: allow shortcut config to insert figure dash and ...](https://github.com/livingdocsIO/livingdocs-editor/pull/7823)
* [fix(deps): update dependency moment from 2.29.4 to v2.30.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7827)
* [fix(deps): update dependency ws from 8.15.1 to v8.16.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6433)
* [fix(deps): update dependency axios from 1.6.2 to v1.6.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7828)
* [fix(deps): update dependency axios from 1.6.2 to v1.6.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6434)
* [fix(deps): update dependency pino from 8.17.1 to v8.17.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6431)
* [fix(deps): update dependency sass-loader from 13.3.2 to v13.3.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7826)
* [chore(deps): update dependency jose from 5.1.3 to v5.2.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7825)
* [fix(deps): update dependency fastify from 4.25.1 to v4.25.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6428)
* [fix(deps): update dependency openid-client from 5.6.1 to v5.6.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6426)
* [Delivery Builds: Fix relative time label for build start](https://github.com/livingdocsIO/livingdocs-editor/pull/7821)
* [Save ticker publication date on first attempt V3](https://github.com/livingdocsIO/livingdocs-editor/pull/7817)
* [Reset all task properties on restart](https://github.com/livingdocsIO/livingdocs-editor/pull/7785)
* [Allow downstream plugin in creation flow params](https://github.com/livingdocsIO/livingdocs-server/pull/6423)
* [Hide update tasks link in publish control side panel when in read-only mode](https://github.com/livingdocsIO/livingdocs-editor/pull/7794)
* [fix(deps): update aws-sdk from 3.474.0 to v3.478.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6412)
* [Prefill teasers when dropped from side panel](https://github.com/livingdocsIO/livingdocs-editor/pull/7795)
* [Support content type level default components](https://github.com/livingdocsIO/livingdocs-editor/pull/7782)
* [Add defaultComponents to content type schema](https://github.com/livingdocsIO/livingdocs-server/pull/6384)
* [Normalize file upload error code](https://github.com/livingdocsIO/livingdocs-server/pull/6414)
* [Fix inline link tool in ticker entries](https://github.com/livingdocsIO/livingdocs-editor/pull/7802)
* [fix(deps): update dependency cloudinary from 1.41.0 to v1.41.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6411)
* [Use extracted mime type for file uploads](https://github.com/livingdocsIO/livingdocs-server/pull/6401)
* [Support translated labels in huGO import dialog](https://github.com/livingdocsIO/livingdocs-editor/pull/7791)
* [fix(deps): update dependency @livingdocs/framework from 27.3.0 to v27.3.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6415)
* [fix(deps): update opentelemetry (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6400)
* [fix(deps): update dependency @elastic/elasticsearch8 from 8.10.0 to v8.11.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6393)
* [Add message to createSchemaApi validation errors](https://github.com/livingdocsIO/livingdocs-server/pull/6407)
* [Fix/base spacing unit](https://github.com/livingdocsIO/livingdocs-editor/pull/7784)
* [fix(deps): update dependency sharp from 0.33.0 to v0.33.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6408)
* [Apply user theme after login](https://github.com/livingdocsIO/livingdocs-editor/pull/7788)
* [fix(deps): update dependency fastify from 4.25.0 to v4.25.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6402)
* [fix(deps): update dependency fastify from 4.25.0 to v4.25.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7786)
* [chore(deps): update dependency pino-pretty from 10.2.3 to v10.3.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6398)
* [fix(deps): update dependency @livingdocs/framework from 27.2.5 to v27.3.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7781)
* [fix(deps): update aws-sdk from 3.470.0 to v3.473.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6389)
* [fix(deps): update dependency ws from 8.15.0 to v8.15.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6388)



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
| Postgres                       | (Deprecated Postgres v12)  12                                                            |
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

[Breaking change `Custom downstream plugins param schema validation changes`](#custom-downstream-plugins-param-schema-validation-changes-fire) is related to this feature so please read it carefully.

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
