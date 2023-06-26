---
type: release-notes
title: July 2023 Release
description: Technical Release Notes for release-2023-07
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-07/
  - /operations/releases/release-2023-07/release-2023-07/
---

{{< release-header
  title="July 2023 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2023-07"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## Tech Release Notes Creation Guidelines (// TODO move to release cut checklist)

- System Requirements
  - Suggested
  - Minimal
- Breaking Changes 🔥
  - list related PRs (for internal use, customers don't have access to code base)
  - explain how to migrate or configs to change with example
  - Migrate the Postgres Database :fire:
    - always the same standard migration command
- Deprecations
  - list related PRs (for internal use, customers don't have access to code base)
  - explain how to migrate or change configs and downstream customization to keep things compatible
- APIs :gift:
  - list related PRs (for internal use, customers don't have access to code base)
  - example of how to use the new API
  - link to documentation
- Features :gift:
  - only list features that have some kind of config changes - write these notes with the developers in mind (if the feature is listed here then it should also be in the dev webinar and vice versa)
  - Small description with config changes example
  - link to documentation
- Improvements
  - only list technical improvements or improvements that need a config change - write these notes with the developers in mind
  - Small description with code example
  - link to documentation (if there is any)
- Bugfixes :beetle:
  - Bugfixes are fixes made during the release cycle
  - List bugfixes which
    - have been reported by customers
    - which have fixed some major broken functionality (if we fixed an console error which most likely did not affect user's or developer's work then we don't need to list it here)
    - which is a bug that existed in last release (sometimes we may break something on master during the release development and then fix it right away and the broken functionality never makes it into the release)
  - Description
- Patches
  - Bugfixes are fixes made after this release and are backported into this release
  - Livingdocs Server Patches
    - Description
  - Livingdocs Editor Patches
    - Description

## PRs to Categorize
* [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-server/pull/5814)
* [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-editor/pull/7053)
* [fix(deps): update dependency cypress from 12.15.0 to v12.16.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7051)
* [Dashboards: ensure no errors are logged when legacy dashboards are used](https://github.com/livingdocsIO/livingdocs-editor/pull/7047)
* [Vue Component Registry: seal registerComponent isCoreComponent upport after core components are registered](https://github.com/livingdocsIO/livingdocs-editor/pull/7045)
* [Upgrade to node 20, drop node 16](https://github.com/livingdocsIO/livingdocs-server/pull/5809)
* [Upgrade to node 20, drop node 16](https://github.com/livingdocsIO/livingdocs-editor/pull/7044)
* [fix(framework): update framework to 25.0.6](https://github.com/livingdocsIO/livingdocs-editor/pull/7041)
* [Do not change the working title if a display title pattern is configured](https://github.com/livingdocsIO/livingdocs-server/pull/5808)

## Intro

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2023-07`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Slides: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

### Suggested

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 18                                                                                       |
| NPM                            | 8                                                                                        |
| Postgres                       | 15                                                                                       |
| Elasticsearch<br/>OpenSearch   | 8.x<br/>v2.3.0                                                                           |
| Redis                          | 7                                                                                        |
| Livingdocs Server Docker Image | livingdocs/server-base:18                                                                |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18                                                                |
| Browser Support                | Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67 |

### Minimal

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 16                                                                                       |
| NPM                            | 8                                                                                        |
| Postgres                       | 12                                                                                       |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:16.3                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:16.3                                                              |
| Browser Support                | Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67 |

## Breaking Changes 🔥

### `useAsTitle`

* [Remove `useAsTitle`](https://github.com/livingdocsIO/livingdocs-server/pull/5763)
* [Remove `useAsTitle`](https://github.com/livingdocsIO/livingdocs-editor/pull/6949)

### Seed Api
* [Remove seed api](https://github.com/livingdocsIO/livingdocs-server/pull/5767)

### Proposals feature
* [Remove proposals feature](https://github.com/livingdocsIO/livingdocs-editor/pull/6910)


### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

TODO: check migration

## Deprecations

## APIs :gift:

### Add Api endpoint for incoming references for drafts

TODO @peyerluk

### Public API Search Filters

TODO @ajwild

## Features :gift:

- [July Release Notes]() // TODO
- [Copy Target Icon and Label Config](#copy-target-icon-and-label-config)
- [Dashboard language filter for li-tree document selection](#dashboard-language-filter-for-li-tree-document-selection)
- [Display Filters ListV2 with OR combination](#display-filters-listv2-with-or-combination)
- [Document Preview](#document-preview)
- [Search DSL](#search-dsl)
- [Ticker](#ticker)
- [Translatable li-tree plugin](#translatable-li-tree-plugin)
- [UI and label config multi-language support](#ui-and-label-config-multi-language-support)

### Copy Target Icon and Label Config

The copy target config has been extended to support an icon and a label. [Learn more]({{< ref "/guides/editor/document-copy/index.md#setup-config" >}})

Copy config in project config:

```js
copy: [
  {
    source: {...},
    targets: [
      {
        label: 'Web Article',
        icon: 'web',
        ...
      }
    ]
  }
]
```

### Dashboard language filter for li-tree document selection

TODO @dfreier

### Display Filters ListV2 with OR combination

The Filters ListV2 have been extended to support multiple selections. The selected values are `OR` combined in the search query. [Learn more]({{< ref "/guides/editor/custom-dashboard-filters/index.md#example-multi-value-filter" >}})

Configure a multi-value filter:

```js
liEditor.searchFilters.registerListV2('MultiSelectV2Filter', {
  multiple: true, // allow multiple selections
  datasource: {
    ...
  },
  ...
})
```

TODO @marcbachmann

### Document Preview

TODO @benib

### Search DSL

TODO @marcbachmann

### Ticker

TODO @peyerluk

### Translatable li-tree plugin

TODO @dfreier

### UI and label config multi-language support

With this release, we introduced multi-language support for the UI and label config. Currently we support English and German as UI languages [Learn more]({{< ref "/content/guides/editor/multi-language-ui/index.md" >}})

Set UI language in editor config:

```js
app: {
  locale: 'de'
}
```

Configure multi language metadata plugin label in project config:

```js
metadata: [
  {
    handle: 'category',
    ui: {
      label: {
        en: 'Category',
        de: 'Kategorie'
      },
    },
    ...
  },
]
```

## Improvements

- [Access Control](#access-control)
- [Distribution Planning Improvements](#distribution-planning-improvements)
- [Improve Component Area](#improve-component-area)
- [Improve data migration hasActiveRevisionsWithDesign query](#improve-data-migration-hasactiverevisionswithdesign-query)
- [Improve scroll into view behavior](#improve-scroll-into-view-behavior)
- [Working Title](#working-title)
- [Support significantPublicationDate on document import](#support-significantpublicationdate-on-document-import)

### Access Control

TODO @marcbachmann

### Distribution Planning Improvements

TODO @ajwild @benib

### Improve Component Area

TODO @benib

### Improve data migration hasActiveRevisionsWithDesign query

TODO @marcbachmann

### Improve scroll into view behavior

TODO @dfreier @benib

### Working Title

TODO @benib @JordiVM

### Support significantPublicationDate on document import

TODO @ajwild

## Bugfixes

* Do not send title to server with displayTitlePattern config // TODO @marcbachmann
* Fix Broken Navigation after MediaLibrary Asset Upload // TODO @peyerluk
* Fix document createion flow: still disabled in channels // TODO @JSchenk8
* Fix Editable Teaser override clearing // TODO @benib
* Fix Legacy Dashboards: initial load takes cached filter value into account now // TODO @benib
* Fix redirect: state given over URL // TODO @JSchenk8
* Fix set metadata title (useAsTitle) property during creation // TODO @benib
* Prevent unsaved document data while processing remote updates // TODO @ajwild
* Use `$t()` instead of undefined `this.$t()` in `li-unsaved-dialog` // TODO @JordiVM

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server
This release we have patched the following vulnerabilities in the Livingdocs Server:
* [CVE-2023-32313](https://github.com/advisories/GHSA-p5gc-c584-jj6v) patched in `vm2` v3.9.19
* [CVE-2023-32314](https://github.com/advisories/GHSA-whpj-8f3w-67p5) patched in `vm2` v3.9.19

We are aware of the following vulnerabilities in the Livingdocs Server:
* [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Server.

### Livingdocs Editor
This release we have patched the following vulnerabilities in the Livingdocs Editor:
* [CVE-2023-32695](https://github.com/advisories/GHSA-cqmj-92xf-r6r9) patched in `socket.io-parser` v4.2.4
* [CVE-2023-31125](https://github.com/advisories/GHSA-q9mw-68c2-j6m5) patched in `engine.io` v6.4.2

We are aware of the following vulnerabilities in the Livingdocs Editor:

* [CVE-2023-26102](https://cwe.mitre.org/data/definitions/1321.html) has yet to be patched by `rangy` but we have proposed a fix in [this PR](https://github.com/timdown/rangy/pull/482)
  This vulnerability is not exploitable in the Livingdocs Editor because `rangy` module is scoped in the `livingdocs-framework` and not exposed to the users.
* [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v231.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v231.0.2): fix(routing): Use isolatedCacheFactory instead of persistent in-process cache for route builders

### Livingdocs Editor Patches
- [v95.0.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v95.0.5): fix(quick publish): correctly show quick publish button if allowed

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
