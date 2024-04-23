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
* [Fix "Tab" doesn't work anymore in forms](https://github.com/livingdocsIO/livingdocs-editor/pull/8365)
* [fix(deps): update dependency @google-cloud/storage from 7.10.0 to v7.10.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6823)
* [Shortcuts: allow shortcut config to insert left and right double quotation mark](https://github.com/livingdocsIO/livingdocs-editor/pull/8362)
* [Command API: `insertComponent`](https://github.com/livingdocsIO/livingdocs-server/pull/6816)
* [fix(table dashboard): Cell Spacings](https://github.com/livingdocsIO/livingdocs-editor/pull/8361)
* [Fix lib/async-queue to await the processing](https://github.com/livingdocsIO/livingdocs-server/pull/6818)
* [Dashboard with Document Statistics](https://github.com/livingdocsIO/livingdocs-editor/pull/8331)
* [Document Statistics with indexing and filter DSL](https://github.com/livingdocsIO/livingdocs-server/pull/6789)
* [Fix comyan drop error notification](https://github.com/livingdocsIO/livingdocs-editor/pull/8354)
* [Update new Media Library `addEntry` function with google vision](https://github.com/livingdocsIO/livingdocs-server/pull/6798)
* [Fix Document Saving - Part 4](https://github.com/livingdocsIO/livingdocs-editor/pull/8346)
* [Fix ticker reactivity by reassigning shallowReactive attributes](https://github.com/livingdocsIO/livingdocs-editor/pull/8353)
* [Fix AWS Aurora for Postgres 14.9 Support](https://github.com/livingdocsIO/livingdocs-server/pull/6813)
* [Retresco display filter](https://github.com/livingdocsIO/livingdocs-editor/pull/8343)
* [Retresco display filter](https://github.com/livingdocsIO/livingdocs-server/pull/6795)
* [Render includes in timeline view](https://github.com/livingdocsIO/livingdocs-editor/pull/8341)
* [fix(deps): update aws-sdk from 3.554.0 to v3.556.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6804)
* [Feat: recency boost for simple search](https://github.com/livingdocsIO/livingdocs-editor/pull/8304)
* [Feat: add id lookup and recency boost for simple search](https://github.com/livingdocsIO/livingdocs-server/pull/6755)
* [fix(deps): update dependency ioredis from 5.3.2 to v5.4.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6805)
* [Skip invalid liItem navigation entries](https://github.com/livingdocsIO/livingdocs-editor/pull/8342)
* [Add info logs for Desk-Net request tracking](https://github.com/livingdocsIO/livingdocs-server/pull/6800)
* [Add liServer.onListen hook](https://github.com/livingdocsIO/livingdocs-server/pull/6802)
* [fix(deps): update dependency sass-loader from 14.2.0 to v14.2.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8344)
* [Metadata UI schema read only](https://github.com/livingdocsIO/livingdocs-server/pull/6799)
* [fix(deps): update dependency pdfjs-dist from 4.0.379 to v4.1.392 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8337)
* [fix(deps): update aws-sdk (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6792)
* [fix(deps): update dependency sass-loader from 14.1.1 to v14.2.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8338)
* [Clear stats extraction interval during queue shutdown](https://github.com/livingdocsIO/livingdocs-server/pull/6797)
* [Improvement/li UI Feedback Replacement](https://github.com/livingdocsIO/livingdocs-editor/pull/8323)
* [fix(imatrics): Remove imatrics:admin scope from database](https://github.com/livingdocsIO/livingdocs-server/pull/6785)
* [fix(deps): update dependency cypress from 13.7.2 to v13.7.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8336)
* [Fix: planning create flow doesn't make the user pick contentType if single option](https://github.com/livingdocsIO/livingdocs-editor/pull/8324)
* [Make bundles optional](https://github.com/livingdocsIO/livingdocs-editor/pull/8333)
* [Optional Bundle](https://github.com/livingdocsIO/livingdocs-server/pull/6790)
* [Close overlays when opening side panels](https://github.com/livingdocsIO/livingdocs-editor/pull/8330)
* [fix(deps): update dependency @livingdocs/framework from 29.3.6 to v29.3.7 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8329)
* [fix(deps): update dependency dedent from 1.5.2 to v1.5.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6788)
* [fix(deps): update dependency dedent from 1.5.2 to v1.5.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8328)
* [fix(deps): update dependency dedent from 1.5.1 to v1.5.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6786)
* [fix(deps): update dependency dedent from 1.5.1 to v1.5.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8326)
* [fix(deps): update opentelemetry (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6766)
* [fix(deps): update aws-sdk from 3.540.0 to v3.552.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6777)
* [fix(deps): update dependency ajv-formats from 2.1.1 to v3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6759)
* [fix(deps): update dependency fast-json-stringify from 5.13.0 to v5.14.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6784)
* [fix(deps): update dependency cloudinary from 2.0.3 to v2.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6756)
* [fix(deps): update dependency css-loader from 6.11.0 to v7 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8315)
* [fix(deps): update dependency style-loader from 3.3.4 to v4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8321)
* [fix(deps): update dependency mocha from 10.3.0 to v10.4.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6748)
* [fix(deps): update dependency sass from 1.72.0 to v1.74.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8313)
* [fix(deps): update dependency exifreader from 4.21.1 to v4.22.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6780)
* [Replace iMatrics suggestion management](https://github.com/livingdocsIO/livingdocs-editor/pull/8314)
* [Replace iMatrics suggestion management](https://github.com/livingdocsIO/livingdocs-server/pull/6774)
* [fix(deps): update dependency @elastic/elasticsearch8 from 8.13.0 to v8.13.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6783)
* [Improvement/li Notification](https://github.com/livingdocsIO/livingdocs-editor/pull/8322)
* [fix(deps): update dependency jose from 5.2.3 to v5.2.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6779)
* [K-Menu with Assistants](https://github.com/livingdocsIO/livingdocs-editor/pull/8276)
* [Assistants API](https://github.com/livingdocsIO/livingdocs-server/pull/6760)
* [Await async hugo controller functions](https://github.com/livingdocsIO/livingdocs-server/pull/6765)
* [Planning Boards: allow search strategy config](https://github.com/livingdocsIO/livingdocs-server/pull/6767)
* [fix(deps): update babel from 7.24.3 to v7.24.4 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/8311)
* [iMatrics display filter](https://github.com/livingdocsIO/livingdocs-editor/pull/8294)
* [iMatrics display filter](https://github.com/livingdocsIO/livingdocs-server/pull/6749)
* [Hide media library buttons when `showUi: false`](https://github.com/livingdocsIO/livingdocs-editor/pull/8306)
* [fix(deps): update dependency pg from 8.11.4 to v8.11.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6763)
* [fix(deps): update dependency cypress from 13.7.1 to v13.7.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8307)
* [Use `actorId` from request token for Desk-Net updates](https://github.com/livingdocsIO/livingdocs-server/pull/6724)
* [fix(deps): update dependency pg from 8.11.3 to v8.11.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6757)
* [Fix/History Stats](https://github.com/livingdocsIO/livingdocs-editor/pull/8305)
* [Prefill existing teasers when dropped from side panel](https://github.com/livingdocsIO/livingdocs-editor/pull/8298)
* [Pass `claim` property in include resolve request to improve duplicate filtering](https://github.com/livingdocsIO/livingdocs-editor/pull/8265)
* [fix(deps): update dependency @livingdocs/framework from 29.3.4 to v29.3.5 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/8295)
* [fix(deps): update dependency @livingdocs/framework from 29.3.4 to v29.3.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6752)
* [Support component conditions when duplicate filtering](https://github.com/livingdocsIO/livingdocs-server/pull/6733)
* [fix(deps): update dependency @elastic/elasticsearch8 from 8.12.2 to v8.13.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6747)
* [Add `POST /media-library/upload`, `/upload-by-url` and `/upload-by-media-source`](https://github.com/livingdocsIO/livingdocs-server/pull/6722)
* [Fix/Small Visual Improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/8290)
* [fix(deps): update dependency express from 4.19.1 to v4.19.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6746)
* [fix(deps): update aws-sdk from 3.537.0 to v3.540.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6744)
* [improvement(meta transcoding state): Visual](https://github.com/livingdocsIO/livingdocs-editor/pull/8277)
* [fix(deps): update dependency sharp from 0.33.2 to v0.33.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6745)
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
