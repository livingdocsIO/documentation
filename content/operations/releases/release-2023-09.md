---
type: release-notes
title: September 2023 Release
description: Technical Release Notes for release-2023-09
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-09/
  - /operations/releases/release-2023-09/release-2023-09/
---

{{< release-header
  title="September 2023 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2023-09"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Disable create button when insufficient permission](https://github.com/livingdocsIO/livingdocs-editor/pull/7162)
* [Take allowedChildren config into account for images from Media Sources.](https://github.com/livingdocsIO/livingdocs-editor/pull/7139)
* [Only replace include references when changing language](https://github.com/livingdocsIO/livingdocs-editor/pull/7148)
* [Support non-object values in select form (for li-integer)](https://github.com/livingdocsIO/livingdocs-editor/pull/7116)
* [Only allow editing of author mappings for current project](https://github.com/livingdocsIO/livingdocs-editor/pull/7151)
* [Limit editor back button target to specific allow list](https://github.com/livingdocsIO/livingdocs-editor/pull/7149)
* [Always show media library entry upload info](https://github.com/livingdocsIO/livingdocs-editor/pull/7150)
* [Normalise language label in metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/7147)
* [fix(deps): update dependency sharp from 0.32.1 to v0.32.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5888)
* [fix(deps): update dependency monaco-editor-webpack-plugin from 7.0.1 to v7.1.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7136)
* [Publish Control: Show publication date (and override) only when document has been published](https://github.com/livingdocsIO/livingdocs-editor/pull/7132)
* [Back Button: ignore kanban boards from potential navigation targets for more clarity](https://github.com/livingdocsIO/livingdocs-editor/pull/7140)
* [Upgrade @livingdocs/conf](https://github.com/livingdocsIO/livingdocs-server/pull/5883)
* [fix(deps): update dependency exifreader from 4.12.1 to v4.13.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5868)
* [liEmbedTeaserIncludeModal: log deprecation for inlineArticleList based filter config (informally deprecated 6 years ago)](https://github.com/livingdocsIO/livingdocs-editor/pull/7133)
* [fix(deps): update dependency https-proxy-agent from 7.0.0 to v7.0.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7135)
* [Document Inbox: generate displayFilters for target selection](https://github.com/livingdocsIO/livingdocs-editor/pull/7121)
* [german UI labels: crops -> zuschnitte](https://github.com/livingdocsIO/livingdocs-editor/pull/7085)
* [Provide format when sorting by date](https://github.com/livingdocsIO/livingdocs-server/pull/5870)
* [fix(deps): update dependency @livingdocs/framework from 25.1.3 to v25.1.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5872)
* [fix(deps): update dependency babel-loader from 9.1.2 to v9.1.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7127)
* [fix(deps): update dependency semver from 7.5.3 to v7.5.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5871)
* [Fix translations and multi upload form for several plugins](https://github.com/livingdocsIO/livingdocs-editor/pull/7117)
* [fix(deps): update dependency cypress from 12.16.0 to v12.17.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7120)
* [Deprecate Filter Sets](https://github.com/livingdocsIO/livingdocs-editor/pull/7109)
* [Make scope selection for tokens work again](https://github.com/livingdocsIO/livingdocs-editor/pull/7113)
* [fix(deps): update babel from 7.22.6 to v7.22.8 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/7119)
* [fix(deps): update dependency openid-client from 5.4.2 to v5.4.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5867)
* [Fix labels for cut and copy buttons in multiselect panel](https://github.com/livingdocsIO/livingdocs-editor/pull/7110)
* [Fix cleanup metadata script](https://github.com/livingdocsIO/livingdocs-server/pull/5863)
* [Metadata Feedback: show different items in correct order](https://github.com/livingdocsIO/livingdocs-editor/pull/7108)
* [Set `first_publication_id` of scheduled documents when they get published](https://github.com/livingdocsIO/livingdocs-server/pull/5858)
* [Trim the title to 255 character max when importing documents](https://github.com/livingdocsIO/livingdocs-server/pull/5820)
* [Various li-user-avatar improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/7105)
* [Document Lists: show correct label on card after publish control schedule is removed](https://github.com/livingdocsIO/livingdocs-editor/pull/7101)
* [Notify user on Pusher connection error](https://github.com/livingdocsIO/livingdocs-editor/pull/7096)
* [Metadata Previews: show previews after errors and length feedback](https://github.com/livingdocsIO/livingdocs-editor/pull/7091)
* [Clone dashboard config before modifying](https://github.com/livingdocsIO/livingdocs-editor/pull/7086)
* [feat(ticker): allow metadata editing for ticker entries](https://github.com/livingdocsIO/livingdocs-editor/pull/7017)
* [fix(deps): update dependency aws-sdk from 2.1409.0 to v2.1410.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5852)
* [fix(deps): update dependency fastify from 4.18.0 to v4.19.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7072)
* [fix(deps): update dependency fastify from 4.19.1 to v4.19.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5851)
* [Document Lists: allow publish control scheduled documents](https://github.com/livingdocsIO/livingdocs-server/pull/5847)
* [Document Lists: allow publish control scheduled documents](https://github.com/livingdocsIO/livingdocs-editor/pull/7067)
* [Improvement/Document Preview](https://github.com/livingdocsIO/livingdocs-editor/pull/7082)
* [Dashboards: correctly error when custom tableDashboardCell takes editable prop](https://github.com/livingdocsIO/livingdocs-editor/pull/7079)
* [fix(deps): update dependency fast-glob from 3.2.12 to v3.3.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5841)
* [fix(deps): update dependency @isaacs/ttlcache from 1.4.0 to v1.4.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5844)
* [fix(deps): update dependency aws-sdk from 2.1408.0 to v2.1409.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5840)
* [Give labels better names](https://github.com/livingdocsIO/livingdocs-server/pull/5821)
* [Fix tooltip label translation](https://github.com/livingdocsIO/livingdocs-editor/pull/7068)
* [chore(deps): update dependency chai from 4.3.6 to v4.3.7 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5834)
* [fix(deps): update dependency @livingdocs/framework from 25.1.1 to v25.1.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7070)
* [Add unit tests for li-display-filter-list-v2](https://github.com/livingdocsIO/livingdocs-editor/pull/7064)
* [fix(deps): update dependency webpack from 5.88.0 to v5.88.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7066)
* [fix(deps): update dependency @livingdocs/framework from 25.1.0 to v25.1.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7065)
* [Fix quick publish](https://github.com/livingdocsIO/livingdocs-editor/pull/7055)
* [fix(deps): update dependency @livingdocs/framework from 25.0.6 to v25.0.8 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7059)
* [Upgrade to Vue 2.7.14](https://github.com/livingdocsIO/livingdocs-editor/pull/5666)
* [Update `nzz` downstream branch to `release-2023-09`](https://github.com/livingdocsIO/livingdocs-editor/pull/7054)
* [Support routing cache refresh by using isolatedCacheFactory](https://github.com/livingdocsIO/livingdocs-server/pull/5812)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2023-09`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

TODO

### Minimal

TODO

## Features

TODO (featureset not 100% defined yet)


### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

TODO: check migration

## Deprecations

## APIs :gift:

## Other Changes

### Features

### Improvements

### Bugfixes


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
