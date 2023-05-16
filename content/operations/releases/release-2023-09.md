---
type: release-notes
title: September 2023 Release
description: Release notes for release-2023-09
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
