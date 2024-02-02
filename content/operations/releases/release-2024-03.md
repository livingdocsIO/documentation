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
* [Fix media library entry state](https://github.com/livingdocsIO/livingdocs-server/pull/6570)
* [fix(image-processing): Fix extracting metadata from large image headers](https://github.com/livingdocsIO/livingdocs-server/pull/6577)
* [Editable Includes: indicate when original changed ](https://github.com/livingdocsIO/livingdocs-editor/pull/7963)
* [Editable Includes: indicate when original changed](https://github.com/livingdocsIO/livingdocs-server/pull/6541)
* [Remove log when nonce expires in Redis](https://github.com/livingdocsIO/livingdocs-server/pull/6566)
* [fix(deps): update dependency fast-json-stringify from 5.10.0 to v5.11.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6568)
* [fix(deps): update webpack (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/7991)
* [fix(deps): update dependency nodemailer from 6.9.8 to 6.9.9 [security] (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6567)
* [fix(canvas): Trigger reactivity when removing an area from the canvas](https://github.com/livingdocsIO/livingdocs-editor/pull/7987)
* [fix(deps): update dependency fastify from 4.25.2 to v4.26.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7976)
* [fix(deps): update aws-sdk from 3.503.1 to v3.504.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6561)
* [fix(designs): Fix loading design assets](https://github.com/livingdocsIO/livingdocs-server/pull/6559)
* [fix(deps): update dependency @livingdocs/framework from 28.0.0 to v28.0.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6563)
* [fix(deps): update dependency @livingdocs/framework from 28.0.0 to v28.0.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7985)
* [fix(deps): update dependency pg-tsquery from 8.4.1 to v8.4.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6560)
* [fix(deps): update dependency cloudinary from 1.41.3 to v2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6554)
* [fix(deps): update dependency cypress from 13.6.3 to v13.6.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7979)
* [Emit document update events on Pusher presence channel](https://github.com/livingdocsIO/livingdocs-server/pull/6547)
* [Do not emit Pusher document update events](https://github.com/livingdocsIO/livingdocs-editor/pull/7972)
* [fix(deps): update dependency webpack from 5.89.0 to v5.90.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7961)
* [fix(deps): update dependency lru-cache from 10.1.0 to v10.2.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6544)
* [fix(deps): update aws-sdk from 3.498.0 to v3.501.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6539)
* [fix(deps): update dependency @livingdocs/framework from 27.5.0 to v28 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7968)
* [Fix errors when configuring non-existing dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/7969)
* [fix(deps): update dependency axios from 1.6.6 to v1.6.7 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7967)
* [fix(deps): update dependency axios from 1.6.5 to v1.6.7 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6543)
* [fix(deps): update dependency axios from 1.6.5 to v1.6.6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7962)
* [feat(named-crops): Add isDefaultIfSet named crop config property](https://github.com/livingdocsIO/livingdocs-server/pull/6530)
* [feat(named-crops): Add isDefaultIfSet named crop config property](https://github.com/livingdocsIO/livingdocs-editor/pull/7955)
* [fix(deps): update dependency @livingdocs/framework from 27.4.5 to v27.4.6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7960)
* [fix(deps): update dependency @livingdocs/framework from 27.4.5 to v27.4.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6535)
* [Improvement/Tag and Numberdot](https://github.com/livingdocsIO/livingdocs-editor/pull/7958)
* [Restrict public api search offset to 9999 entries](https://github.com/livingdocsIO/livingdocs-server/pull/6531)
* [fix(deps): update dependency date-fns from 3.2.0 to v3.3.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7948)
* [fix(planning action): Visual](https://github.com/livingdocsIO/livingdocs-editor/pull/7954)
* [Ticker fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/7952)
* [fix(deps): update dependency @livingdocs/framework from 27.4.2 to v27.4.5 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7951)
* [fix(deps): update dependency @livingdocs/framework from 27.4.2 to v27.4.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6528)
* [Close dialogs when views get destroyed](https://github.com/livingdocsIO/livingdocs-editor/pull/7949)
* [fix(deps): update aws-sdk from 3.495.0 to v3.496.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6525)
* [Throw better error when calling unpublish on a document that's not public](https://github.com/livingdocsIO/livingdocs-server/pull/6522)
* [fix(deps): update aws-sdk (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/6524)
* [Improvement/Media Library Asset View](https://github.com/livingdocsIO/livingdocs-editor/pull/7936)
* [fix(deps): update dependency sass from 1.69.7 to v1.70.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7928)
* [Allow more value types in data provider label value pair schema](https://github.com/livingdocsIO/livingdocs-server/pull/6521)
* [Push Messages: allow push for published articles with unpublished changes from toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/7937)
* [Fix inline links for documents](https://github.com/livingdocsIO/livingdocs-editor/pull/7929)
* [fix(deps): update aws-sdk from 3.490.0 to v3.495.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6517)
* [fix(deps): update dependency cloudinary from 1.41.2 to v1.41.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6516)
* [fix(deps): update dependency css-loader from 6.9.0 to v6.9.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7927)
* [fix(deps): update dependency @livingdocs/framework from 27.4.0 to v27.4.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6513)
* [fix(deps): update aws-sdk (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6510)
* [fix(deps): update dependency cypress from 13.4.0 to v13.6.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7674)
* [Make metadata mapping optional in draft indexer](https://github.com/livingdocsIO/livingdocs-server/pull/6511)
* [fix(dashboards): Return to previous dashboard when returning from imported article state](https://github.com/livingdocsIO/livingdocs-editor/pull/7919)
* [fix(deps): update dependency copy-webpack-plugin from 12.0.1 to v12.0.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7920)
* [fix(deps): update dependency html-loader from 4.2.0 to v5 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7918)
* [feat(media-library): Add functionality to remove translated assets](https://github.com/livingdocsIO/livingdocs-server/pull/6492)
* [feat(media-library): Add functionality to remove translated assets](https://github.com/livingdocsIO/livingdocs-editor/pull/7915)
* [fix(deps): update dependency pdfjs-dist from 3.11.174 to v4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7670)
* [fix(deps): update dependency @livingdocs/secure-password from 5.0.2 to v5.0.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6505)
* [fix(webhooks): Validate metadataProperty conditions only by value comparison](https://github.com/livingdocsIO/livingdocs-server/pull/6499)
* [Composition API: Make sure we never load errors or null values into preloaded values](https://github.com/livingdocsIO/livingdocs-server/pull/6488)
* [fix(deps): update opentelemetry (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6494)
* [Restore the functionality of directly opening the tasks side panel from the task notification email](https://github.com/livingdocsIO/livingdocs-server/pull/6493)
* [Fix/vanilla CSS base spacing unit](https://github.com/livingdocsIO/livingdocs-editor/pull/7906)
* [Commands API: 409 error and isPublishedAndHasNoChanges precondition
](https://github.com/livingdocsIO/livingdocs-server/pull/6489)
* [Fix/shadows and docked content](https://github.com/livingdocsIO/livingdocs-editor/pull/7910)
* [fix(deps): update dependency c8 from 9.0.0 to v9.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6487)
* [fix(deps): update dependency sharp from 0.33.1 to v0.33.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6486)
* [Fix inline link tool](https://github.com/livingdocsIO/livingdocs-editor/pull/7895)
* [🐞 Pass directive config.search.displayFilters|baseFilter to Angular Embed Teaser](https://github.com/livingdocsIO/livingdocs-editor/pull/7899)
* [fix(deps): update dependency copy-webpack-plugin from 12.0.0 to v12.0.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7897)
* [Drop support for Postgres version 12](https://github.com/livingdocsIO/livingdocs-server/pull/6481)
* [fix(deps): update aws-sdk from 3.489.0 to v3.490.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6484)
* [feat(webhooks): Add UI for configuring webhook contentType conditions](https://github.com/livingdocsIO/livingdocs-editor/pull/7867)
* [fix(deps): update aws-sdk from 3.485.0 to v3.489.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6478)
* [Retry document saves indefinitely and when internet connection restored](https://github.com/livingdocsIO/livingdocs-editor/pull/7886)
* [fix(deps): update dependency mini-css-extract-plugin from 2.7.6 to v2.7.7 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7883)
* [fix(deps): update dependency date-fns from 3.1.0 to v3.2.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6476)
* [fix(deps): update dependency @livingdocs/editable.js from 5.0.0 to 5.0.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7881)
* [fix(deps): update dependency @livingdocs/framework from 27.3.6 to v27.4.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7871)
* [fix(deps): update dependency style-loader from 3.3.3 to v3.3.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7878)
* [Fix text formatting button states](https://github.com/livingdocsIO/livingdocs-editor/pull/7863)
* [fix(deps): update dependency @fastify/reply-from from 9.5.0 to 9.6.0 [security] (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7870)
* [fix(deps): update dependency fast-json-stringify from 5.9.2 to v5.10.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6469)
* [fix(deps): update dependency cloudinary from 1.41.1 to v1.41.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6471)
* [fix(deps): update dependency @babel/preset-env from 7.23.7 to v7.23.8 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7868)
* [fix(deps): update dependency @fastify/reply-from from 9.4.0 to v9.5.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7852)
* [fix(deps): update dependency date-fns from 3.0.6 to v3.1.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7859)
* [fix(deps): update dependency date-fns from 3.0.6 to v3.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6466)
* [fix(deps): update dependency openid-client from 5.6.3 to v5.6.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6468)
* [fix(deps): update dependency @livingdocs/framework from 27.3.5 to v27.3.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6467)
* [fix(deps): update dependency axios from 1.6.4 to v1.6.5 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7857)
* [fix(deps): update dependency @livingdocs/framework from 27.3.3 to v27.3.6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7856)
* [chore(deps): update dependency chai from 4.3.10 to v4.4.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6465)
* [Ensure correct order of documents on homepage dashboard](https://github.com/livingdocsIO/livingdocs-server/pull/6458)
* [Make quick publish button more responsive in dashboard cell](https://github.com/livingdocsIO/livingdocs-editor/pull/7853)
* [fix(deps): update opentelemetry (master) (patch)](https://github.com/livingdocsIO/livingdocs-server/pull/6457)
* [fix(deps): update dependency date-fns from 3.0.0 to v3.0.6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7851)
* [fix(deps): update dependency date-fns from 3.0.0 to v3.0.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6456)
* [Unify Media Library Metadata schema with Document Metadata schema](https://github.com/livingdocsIO/livingdocs-server/pull/6391)
* [Only recompile li-angular-component on deep value changes](https://github.com/livingdocsIO/livingdocs-editor/pull/7594)
* [fix(deps): update dependency date-fns from 2.30.0 to v3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7793)
* [fix(deps): update dependency date-fns from 2.30.0 to v3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6413)
* [Add metadataProperty.config.label fallback for tasks](https://github.com/livingdocsIO/livingdocs-editor/pull/7845)
* [Fix text in task notification emails](https://github.com/livingdocsIO/livingdocs-server/pull/6427)
* [Improve ticker lock handling](https://github.com/livingdocsIO/livingdocs-editor/pull/7775)
* [fix(deps): update dependency c8 from 8.0.1 to v9 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6450)
* [fix(deps): update dependency axios from 1.6.3 to v1.6.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6448)
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

[Breaking change `Custom downstream plugins param schema validation changes`](#custom-downstream-plugins-param-schema-validation-changes-fire) is related to this feature so please read it carefully.

## Deprecations

## APIs :gift:

## Features

TODO (featureset not 100% defined yet)

{{< feature-info "Project configuration" "server" >}}
### Allow `contentType.defaultComponents` config :gift:

Configuration `contentType.defaultComponents` has been added to the [project configuration]({{< ref "reference/project-config/content-types" >}}). This configuration allows you to define default components for a content type. The default components will be added to the document when the content type is selected. The default components are added to the end of the document.

```js
contentTypes: [
  {
    handle: 'gallery',
    documentType: 'article',
    defaultComponents: {
      paragraph: 'p',
      image: 'img',
      video: 'video',
      audio: 'audio',
      html: 'html'
    }
  }
]
```

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
