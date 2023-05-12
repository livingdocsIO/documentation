---
type: release-notes
title: July 2023 Release
description: Release notes for release-2023-07
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

## PRs to Categorize
* [fix(distribution planning): don't show proposals section when not used](https://github.com/livingdocsIO/livingdocs-editor/pull/6844)
* [Make dev string formatter more reliable with custom input](https://github.com/livingdocsIO/livingdocs-server/pull/5707)
* [fix(deps): update dependency aws-sdk from 2.1375.0 to v2.1377.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5697)
* [Fix retresco enrich date comparison](https://github.com/livingdocsIO/livingdocs-server/pull/5703)
* [fix(distribution planning): don't show time when add to planning for channels without time](https://github.com/livingdocsIO/livingdocs-editor/pull/6843)
* [Fix Legacy Dashboards: initial load takes cached filter value into account now](https://github.com/livingdocsIO/livingdocs-editor/pull/6830)
* [Copy target icon and label config](https://github.com/livingdocsIO/livingdocs-editor/pull/6800)
* [Copy target icon and label config](https://github.com/livingdocsIO/livingdocs-server/pull/5681)
* [fix(translation): layout search placeholder](https://github.com/livingdocsIO/livingdocs-editor/pull/6836)
* [Fix content type filters for secondary channels](https://github.com/livingdocsIO/livingdocs-server/pull/5698)
* [Do not include srcissors dev dependencies in editor](https://github.com/livingdocsIO/livingdocs-editor/pull/6837)
* [fix(deps): update dependency cypress from 12.11.0 to v12.12.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6819)
* [Fix etc in li-document-best-date](https://github.com/livingdocsIO/livingdocs-editor/pull/6824)
* [Fix: disable publish buttons in publish control if document is locked](https://github.com/livingdocsIO/livingdocs-editor/pull/6828)
* [Working Title: do not enforce working title when displayTitlePattern is set](https://github.com/livingdocsIO/livingdocs-editor/pull/6796)
* [Distribution improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/6808)
* [🐞 Show Dashboard when ES and PG is in an inconsistent state](https://github.com/livingdocsIO/livingdocs-editor/pull/6820)
* [Support a server-side logout to invalidate the session](https://github.com/livingdocsIO/livingdocs-editor/pull/6813)
* [Support a server-side logout to invalidate the session](https://github.com/livingdocsIO/livingdocs-server/pull/5691)
* [Disable table dashboard update polling by default](https://github.com/livingdocsIO/livingdocs-editor/pull/6807)
* [Fix error when removing page from issue and improve E2E tests](https://github.com/livingdocsIO/livingdocs-editor/pull/6814)
* [🐞 Fix Broken Navigation after MediaLibrary Asset Upload](https://github.com/livingdocsIO/livingdocs-editor/pull/6812)
* [fix(deps): update dependency unsplash-js from 7.0.15 to v7.0.16 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5688)
* [Remove unused behavior file](https://github.com/livingdocsIO/livingdocs-editor/pull/6803)
* [Fix/Collab Cards](https://github.com/livingdocsIO/livingdocs-editor/pull/6810)
* [fix(deps): update dependency https-proxy-agent from 6.0.0 to v6.1.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6806)
* [fix(deps): update dependency aws-sdk from 2.1372.0 to v2.1373.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5687)
* [fix(deps): update dependency http-proxy-agent from 6.0.0 to v6.0.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6805)
* [Check if document is published before accessing properties in Retresco enrichment](https://github.com/livingdocsIO/livingdocs-server/pull/5682)
* [fix(table dashboard): Language Cell](https://github.com/livingdocsIO/livingdocs-editor/pull/6801)
* [Remove `displayTitlePattern` from article content type in Service](https://github.com/livingdocsIO/livingdocs-server/pull/5678)
* [fix(tasks): Deadline](https://github.com/livingdocsIO/livingdocs-editor/pull/6791)
* [Fix/Comments With Mentions](https://github.com/livingdocsIO/livingdocs-editor/pull/6794)
* [Fix missing translations](https://github.com/livingdocsIO/livingdocs-editor/pull/6780)
* [Enhance content type & media type sync logs with project id context](https://github.com/livingdocsIO/livingdocs-server/pull/5674)
* [♻️ Remove asset server from example-server](https://github.com/livingdocsIO/livingdocs-server/pull/5673)
* [fix(deps): update dependency aws-sdk from 2.1370.0 to v2.1372.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5668)
* [fix(deps): update dependency https-proxy-agent from 5.0.1 to v6 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/6790)
* [Refactor project config cache sync](https://github.com/livingdocsIO/livingdocs-server/pull/5665)
* [fix(document createion flow): still disabled in channels](https://github.com/livingdocsIO/livingdocs-editor/pull/6781)
* [fix(deps): update dependency pusher from 5.1.2 to v5.1.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5667)
* [Fix/Confirm Button](https://github.com/livingdocsIO/livingdocs-editor/pull/6779)
* [Remove realtime updates from use_issue and watch metadata updates instead](https://github.com/livingdocsIO/livingdocs-editor/pull/6750)
* [fix(deps): update dependency aws-sdk from 2.1369.0 to v2.1370.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5663)
* [Improvement/dashboards and tables](https://github.com/livingdocsIO/livingdocs-editor/pull/6754)
* [fix(deps): update dependency cloudinary from 1.36.2 to v1.36.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/5660)
* [Improvement/Release Polish Dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/6775)
* [Access control improvements - Part 3](https://github.com/livingdocsIO/livingdocs-server/pull/5657)
* [Add workaround to allow republish when data migrations do not apply changes to documents](https://github.com/livingdocsIO/livingdocs-server/pull/5653)
* [Fix occupations again, remove duplicate months](https://github.com/livingdocsIO/livingdocs-server/pull/5652)
* [Fix legacy dashboard compilation failure due to content type label](https://github.com/livingdocsIO/livingdocs-editor/pull/6773)
* [Design/Release Polish and Fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/6771)
* [Update defaultBranch to release-2023-07](https://github.com/livingdocsIO/livingdocs-editor/pull/6770)


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


## Highlights

### Advanced Search Filters Foundation

TODO: Description

* [Documentation](TODO)


### Display Filters ListV2 with OR combination

TODO: Description

* [Documentation](TODO)

### Microsoft Teams Integration

TODO: Description

* [Documentation](TODO)
* [Microsoft Teams Integration](https://github.com/livingdocsIO/livingdocs-server/pull/4408)


### Back to Standard

:exclamation: Check the [Back to Standard Roadmap]({{< ref "/customising/back-to-standard" >}}) and inform you about important upcoming deprecations and breaking changes and reasons.

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

TODO: check migration

## Deprecations

### Back to Standard

:exclamation: Check the [Back to Standard Roadmap]({{< ref "/customising/back-to-standard" >}}) and inform you about important upcoming deprecations and breaking changes and reasons.

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
