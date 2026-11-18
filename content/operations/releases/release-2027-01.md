---
type: release-notes
title: January 2027 Release
description: Technical Release Notes for release-2027-01
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2027-01

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
    - name: Node (Server)
      version: TBD
    - name: Node (Editor)
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

- [Fail specs on Vue warnings](https://github.com/livingdocsIO/livingdocs-editor/pull/11815)
- [fix(deps): update dependency @livingdocs/framework from 34.3.16 to v34.4.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10447)
- [fix(deps): update dependency @livingdocs/framework from 34.3.16 to v34.4.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11891)
- [Cut release-2026-11](https://github.com/livingdocsIO/livingdocs-editor/pull/11886)
- [Cut release-2026-11](https://github.com/livingdocsIO/livingdocs-server/pull/10441)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2027-01`, read on.

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

### Clearer Display of the Estimated Time of Completion

For content types with an `li-estimated-time-of-completion` metadata property, the estimated time of completion is now shown with the property's `ui.label` and an hourglass icon, instead of a generic "ready". For example, "ready at 07.01.2027" becomes "Ready for publication on 07.01.2027" for a property labeled "Ready for publication".

As before, the estimated time of completion is shown on dashboards, in the editor toolbar and on Planning Calendar cards when a document has no publication date yet.

{{< img src="release-2027-01-etc-editor-toolbar.png" alt="Editor toolbar showing Ready for publication on 07.01.2027 above the Plan Publication button" width="600" caption="The estimated time of completion in the editor toolbar now shows the property's label and an hourglass icon." >}}

The change is available automatically. If your label is missing or has no text in an editor's UI language, a fallback is shown instead.

{{< info >}}
Check that your label reads well in front of a preposition and a date, e.g. "on 07.01.2027", in every UI language your editors use, and that a new label still works in the metadata form.
{{< /info >}}

For more information, see the [li-estimated-time-of-completion]({{< ref "/reference/document/metadata/plugins/li-estimated-time-of-completion#display-on-dashboards" >}}) documentation.

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
