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

- [Automate release tests and fix task board column totals](https://github.com/livingdocsIO/livingdocs-editor/pull/11919)
- [Show media source titles like media library entry titles](https://github.com/livingdocsIO/livingdocs-editor/pull/11965)
- [fix(deps): update dependency @livingdocs/framework from 34.4.4 to v34.4.6 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10538)
- [fix(deps): update dependency @livingdocs/framework from 34.4.4 to v34.4.6 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11975)
- [Fix causes of false editing conflicts, part 2](https://github.com/livingdocsIO/livingdocs-editor/pull/11953)
- [chore(deps): update dependency prettier from 3.9.10 to v3.10.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10537)
- [fix(deps): update dependency @livingdocs/framework from 34.4.3 to v34.4.4 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11968)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11963)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/10529)
- [Resolve a translated requiredErrorMessage to a string](https://github.com/livingdocsIO/livingdocs-server/pull/10490)
- [Use the external id index for media library lookups without a systemName](https://github.com/livingdocsIO/livingdocs-server/pull/10502)
- [Limit fast image processing to a customer feature](https://github.com/livingdocsIO/livingdocs-server/pull/10493)
- [Add a pre-upgrade check for referenced designs](https://github.com/livingdocsIO/livingdocs-server/pull/10494)
- [fix(editor): Keep the scroll position after a dialog or overlay closes](https://github.com/livingdocsIO/livingdocs-editor/pull/11918)
- [Resolve userId base filters when searching a document by id](https://github.com/livingdocsIO/livingdocs-editor/pull/11935)
- [fix(deps): update dependency @livingdocs/framework from 34.4.2 to v34.4.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10500)
- [fix(deps): update dependency @livingdocs/framework from 34.4.2 to v34.4.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11941)
- [Fix causes of false editing conflicts](https://github.com/livingdocsIO/livingdocs-editor/pull/11868)
- [fix(metadata): declare required and requiredErrorMessage config for li-license-profile and li-media-handle](https://github.com/livingdocsIO/livingdocs-server/pull/10477)
- [Make @livingdocs/image an optional dependency](https://github.com/livingdocsIO/livingdocs-server/pull/10489)
- [Move main on to release-2027-01](https://github.com/livingdocsIO/livingdocs-server/pull/10491)
- [Enable the planning calendar for FAZ](https://github.com/livingdocsIO/livingdocs-server/pull/10484)
- [fix(dashboards): resolve userId patterns in kanban board filters](https://github.com/livingdocsIO/livingdocs-editor/pull/11914)
- [chore(deps): update aws-sdk from 3.1162.0 to v3.1164.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10480)
- [chore(deps): update dependency sass from 1.107.1 to v1.108.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11921)
- [fix(media-library): Keep the remembered tab separate for each picker](https://github.com/livingdocsIO/livingdocs-editor/pull/11906)
- [Fix loading the test factories from the published npm package](https://github.com/livingdocsIO/livingdocs-server/pull/10466)
- [Replace the unload listeners with pagehide](https://github.com/livingdocsIO/livingdocs-editor/pull/11915)
- [Pass dashboard.get group policies on to the user](https://github.com/livingdocsIO/livingdocs-server/pull/10467)
- [fix(proxy): send the upstream host on websocket upgrades](https://github.com/livingdocsIO/livingdocs-editor/pull/11905)
- [fix(deps): update dependency @livingdocs/framework from 34.4.0 to v34.4.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11907)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/10462)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11897)
- [Use Document models and keep external system in minimal references](https://github.com/livingdocsIO/livingdocs-editor/pull/11888)
- [Notify every draft save with the same realtime and server event payload](https://github.com/livingdocsIO/livingdocs-server/pull/10443)
- [Keep the task data when a task changes state](https://github.com/livingdocsIO/livingdocs-editor/pull/11810)
- [Remove the license approval task when its images are removed](https://github.com/livingdocsIO/livingdocs-server/pull/10289)
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
