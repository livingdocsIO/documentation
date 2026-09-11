---
type: release-notes
title: boilerplate-releaseName Release
description: Technical Release Notes for boilerplate-release
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: boilerplate-release

systemRequirements:
  suggested:
    - name: Node
      version: TBD
    - name: NPM
      version: TBD
    - name: Postgres
      version: TBD
    - name: Elasticsearch
      version: TBD
    - name: OpenSearch
      version: TBD
    - name: Redis
      version: TBD
    - name: Valkey
      version: TBD
    - name: Livingdocs Server Docker Image
      version: TBD
    - name: Livingdocs Editor Docker Image
      version: TBD
    - name: Browser Support
      version: TBD

  minimal:
    - name: Node
      version: TBD
    - name: NPM
      version: TBD
    - name: Postgres
      version: TBD
    - name: Elasticsearch
      version: TBD
    - name: OpenSearch
      version: TBD
    - name: Redis
      version: TBD
    - name: Valkey
      version: TBD
    - name: Livingdocs Server Docker Image
      version: TBD
    - name: Livingdocs Editor Docker Image
      version: TBD
    - name: Browser Support
      version: TBD
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `main` branch) is at your own risk

## PRs to Categorize

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `boilerplate-release`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- Feature Webinar Recording: **TODO**
- Feature Webinar Documentation: **TODO**
- [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

{{< system-versions list="suggested" >}}

### Minimal

{{< system-versions list="minimal" >}}

## Deployment

### Before the deployment

No pre-deployment steps are required before rolling out this release.

### Rollout deployment

#### Migrate the Postgres Database

No migrations are required for this release.

### After the deployment

No post-deployment steps are required after rolling out this release.

### Rollback

No rollback steps are required for this release.

## Breaking Changes :fire:

## Deprecations :warning:

## Features :gift:

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- TBD

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- TBD

No known vulnerabilities. :tada:

## Patches

Patches typically fix bugs and apply improvements within the current release. Keeping your deployment up-to-date with the latest patch version means you benefit from those fixes. No explicit action is required per patch — bumping the version is enough.

### Livingdocs Server Patches

### Livingdocs Editor Patches
