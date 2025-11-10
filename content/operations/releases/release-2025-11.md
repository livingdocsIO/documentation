---
type: release-notes
title: November 2025 Release
description: Technical Release Notes for release-2025-11
excludeFromSearch: false
hideSectionTeaser: true

header:
  upcoming: false
  legacy: false
  current: true
  maintained: true
  branchHandle: release-2025-11

systemRequirements:
  suggested:
    - name: Node
      version: 24
    - name: NPM
      version: 11
    - name: Postgres
      version: 17
    - name: Elasticsearch
      version: 9.x
    - name: OpenSearch
      version: 2.3.0
    - name: Redis
      version: 8
    - name: Livingdocs Server Docker Image
      version: livingdocs/server-base:24
    - name: Livingdocs Editor Docker Image
      version: livingdocs/editor-base:24
    - name: Browser Support
      version: Chrome >= 142, Edge >= 142, Firefox >= 144, Safari >= 26.0

  minimal:
    - name: Node
      version: 20.19.5
    - name: NPM
      version: 10
    - name: Postgres
      version: 13
    - name: Elasticsearch
      version: 7.x
    - name: OpenSearch
      version: 1
    - name: Redis
      version: 6.2
    - name: Livingdocs Server Docker Image
      version: livingdocs/server-base:20:10
    - name: Livingdocs Editor Docker Image
      version: livingdocs/editor-base:20:10
    - name: Browser Support
      version: Chrome >= 130, Edge >= 130, Firefox >= 132, Safari >= 18.1
---

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-november-2025).
To learn about the necessary actions to update Livingdocs to `release-2025-11`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- Feature Webinar Recording: **Coming Soon**
- Feature Webinar Documentation: **Coming Soon**
- Dev Webinar Recording: **Coming Soon**
- Dev Webinar Slides: **Coming Soon**
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

## Breaking Changes 🔥

### Replaced News Agency Properties `displayFilterOptionsSource` and `displayFilterOptionsCategory` 🔥

The news agency project configuration properties `newsAgency.screens[].displayFilterOptionsSource` and `newsAgency.screens[].displayFilterOptionsCategory` have been replaced by new properties `newsAgency.sources` and `newsAgency.categories`, respectively (see [Displaying Custom Values for News Agency Report Properties](#displaying-custom-values-for-news-agency-report-sources-and-categories)).

### Removed Server Feature `li-design-stats` 🔥

Server feature `li-design-stats`, including its server API (`designStatsApi.listDesigns`), has been removed. In addition, the server API `projectApi.getStats` has also been removed. Please remove any usages of these APIs.

### Removed Functions `sql`, `insert`, and `begin` of `lib/db` 🔥

- Function `require('@livingdocs/server/lib/db').sql` has been removed. Please use `liServer.db.sql` instead.
- Function `require('@livingdocs/server/lib/db').insert` has been removed. Please use `liServer.db.insert` instead.
- Function `require('@livingdocs/server/lib/db').begin` has been removed. Please use `liServer.db.begin` instead.

### API `documentApi.executeDocumentCommands` Requires Parameter `userId` 🔥

Unpublishing documents with `documentApi.executeDocumentCommands` without providing a `userId` is no longer supported. Please provide a `userId`.

### iMatrics Category Concepts Shown By Default 🔥

iMatrics concepts of type category are now shown by default. Previously, they were excluded unless `ignoredConceptTypes: []` was set.

If you want to keep the existing behavior, please set `ignoredConceptTypes: ['category']` in your [`li-imatrics-nlp-tags` metadata configuration]({{< ref "/reference/document/metadata/plugins/li-imatrics-nlp-tags/" >}}).

### Removed Server Feature `li-hooks` 🔥

Server feature `li-hooks`, including its server APIs, has been removed. Please migrate to regular webhooks.

## Deprecations

### Simplified `li-target-length` and `li-system-target-length` UI Configuration

The following `li-target-length` and `li-system-target-length` UI configuration properties are deprecated and will be removed in release-2026-05:

- `ui.config.allowAnyNumber`
- `ui.config.showExactCountCheckbox`
- `ui.config.unit`

Use the [new property `ui.config.modes`](#simplified-li-target-length-and-li-system-target-length-ui-configuration-1) instead.

## Features :gift:

### Media Library Multiselect & Batch Actions :gift:

We are extending the multi-selection functionality within the Media Library.
To improve efficiency when working with Media Library elements (such as images, videos or files), users can now **perform actions on multiple media items simultaneously**.
Additionally, this release introduces two enhancements to the Media Library Dashboard Side Panel.

#### Batch Actions on the Media Library Dashboard

On the Media Library Dashboard, users can select multiple media elements and perform the following actions:

- Download selected elements
- Send selected elements to a document inbox
- Store selected elements in archive / remove selected elements from archive
- Delete selected elements
- Remove selection

{{< img src="release-2025-11-media-library-dashboard-batch-actions.png" alt="Media Library Dashboard Sidepanel" width="400" >}}

Elements can only be deleted if the user has the necessary permissions and the selected items are not stored in the archive.
Elements can only be stored in the archive if the selection does not include archived or revoked items and the user has sufficient permission rights.

**How to select multiple elements:**

- Hold down the `Shift` key and use the arrow keys, or
- Hold down the `Command` key (Mac) / `Ctrl` key (Windows) and click on the desired elements.
- Press `Escape` to clear the selection.

{{< info >}}
To use the _Store in Archive_, _Remove from Archive_ and _Delete_ functionalities, the `use2025behaviour` needs to be enabled. If not configured, instead the legacy _Archive_ functionality will be available.
For more details, see the [2025 Behavior]({{< ref "/guides/media-library/2025-behavior" >}}) guide.
{{< /info >}}

#### Improvements on the Media Library Dashboard Sidepanel

When an element is selected on the Media Library Dashboard, the Side Panel automatically opens.
This panel has been enhanced with the following improvements:

- A saving status indicator now appears in the top-left corner, showing whether an element’s metadata is currently being saved or has already been saved. This behavior is consistent with the Media Library Detail view.

- Users can now navigate between selected items in the Side Panel to review them in more detail - without changing their selection on the main Media Library dashboard.

{{< img src="release-2025-11-media-library-details-panel.png" alt="Media Library Dashboard Sidepanel" width="600" >}}

### Optimzed Media Library Modal :gift:

We've optimized the image selection modal to display more images by increasing its width in a previous release. The modal now shows up to 6 images per row (depending on screen size), compared to the previous layout. This change makes better use of available screen space.

### News Agency Improvements :gift:

This release refines the News Agency module with new metadata properties and user experience improvements.

{{< info >}}
These improvements have also been backported to {{< release "release-2025-09" >}}.
{{< /info >}}

#### New Metadata Properties for News Agency Reports

News agency reports have been extended to include two optional metadata properties:

- `location`: Stores geographical information related to a report (e.g., city, region, or country).
- `note`: Contains additional details from the news agency, such as contact information or publishing restrictions.

Both properties are displayed alongside the already existing metadata properties.

{{< img src="release-2025-11-news-agency-metadata.png" alt="News Agency Report Metadata" width="600" >}}

#### Displaying Custom Values for News Agency Report Sources and Categories

You can now define custom labels for news agency report sources and categories. Previously, Livingdocs displayed the raw imported values (e.g., abbreviated sources or untranslated categories). This update allows you to map those raw values to more descriptive or localized labels.

To support this, two new project configuration properties have been added:

```js
newsAgency: {
  sources: [
    {label: 'DPA', value: 'dpa'},
    {label: 'DPA - OTS', value: 'ots'},
    {label: 'SDA', value: 'sda'}
  ],
  categories: [
    {label: {en: 'Politics', de: 'Politik'}, value: 'politics'},
    {label: {en: 'Economy', de: 'Wirtschaft'}, value: 'economy'},
    {label: {en: 'Sports', de: 'Sport'}, value: 'sports'}
  ]
}
```

For example, if a news agency report import provides the source `ots`, editors will now see `DPA - OTS`. Similarly, categories like `politics` appear as `Politik` or `Politics`, depending on the active language.

In addition, these new properties define the display filter options shown on news agency screens for filtering reports by `source` or `category`. They therefore replace the project configuration properties `newsAgency.screens[].displayFilterOptionsSource` and `newsAgency.screens[].displayFilterOptionsCategory` (see [Breaking Changes](#replaced-news-agency-properties-displayfilteroptionssource-and-displayfilteroptionscategory-)).

#### News Agency Screen Search Results Ordered by Datetime

Search results on news agency screens are now ordered by datetime instead of relevance. This ensures reports appear in the sequence they were received. Previously, results followed the same relevance-based order used on other dashboards, but feedback showed that for news agency reports, chronological order is more valuable.

#### Showing More Reports on News Agency Screens

News agency screens now show 100 instead of 35 reports per page, allowing users to view more reports at once without needing to click "load more".

#### Enabling All News Agency Notifications

The user experience for managing news agency notification categories has been improved with a new "Select all" checkbox. Roles that want to receive all notifications can now enable every notification category with a single click.

{{< img src="release-2025-11-news-agency-select-all.png" alt="News Agency Notifications Preferences" width="250" >}}

### Distribution Dates UI Improvements :gift:

Editors use the planning board to manage articles scheduled for publishing and distribution. Since distribution dates often correspond to the current day or near future, setting them quickly and accurately is essential for efficient workflow management.

Previously, the workflow required selecting a date from the date picker and then pressing a green confirmation button. This additional confirmation step was unclear to many users, leading to confusion and mistakes — editors often didn't realize they needed to click the button after selecting a date.

This release introduces two key improvements to address these issues:

#### Quick Action Buttons

When adding a distribution date, editors now see three quick action buttons instead of an empty date picker:

- **Today**: Sets the distribution date to today at 12:00 (noon)
- **Tomorrow**: Sets the distribution date to tomorrow at 12:00 (noon)
- **Other date**: Opens the date picker for selecting a different date

#### Auto-Save Functionality

Valid dates are now automatically saved as soon as they are selected—no confirmation button required. The date picker remains open in edit mode, and any valid date selection is immediately committed to the document. This removes the confusing confirmation step and provides instant visual feedback.

#### Date-Only Precision Configuration

A new optional configuration property `precision` allows you to configure whether editors should enter dates with or without time information:

```js
{
  handle: 'distributionDates',
  type: 'li-distribution-dates',
  ui: {
    config: {
      precision: 'date' // Options: 'datetime' (default) or 'date'
    }
  }
}
```

**Configuration Options:**

- `precision: 'datetime'` (default): Editors can set both date and time
- `precision: 'date'`: Editors only set the date; time is automatically set to 12:00 (noon) for timezone consistency

### Simplified `li-target-length` and `li-system-target-length` UI Configuration :gift:

Over time, the metadata plugins `li-target-length` and `li-system-target-length` have gained many UI configuration options, some of which are redundant. To make these plugins easier to understand and explain, we are simplifying their configuration.

To achieve this, we are introducing a new configuration property: `ui.config.modes`. This property replaces the existing configuration options `ui.config.allowAnyNumber`, `ui.config.showExactCountCheckbox`, and `ui.config.unit` (see [Deprecations](#simplified-li-target-length-and-li-system-target-length-ui-configuration)).

The new configuration property `ui.config.modes` defines which input modes are available in the Livingdocs editor:

- `steps`: A slider with pre-configured step values, requires `steps` to be configured
- `characters`: A number input for entering a character count
- `lines`: A number input for entering a line count

```js
ui: {
  config: {
    modes: ['steps', 'characters', 'lines'],
    steps: [
      {label: {en: 'S', de: 'Klein'}, value: 100},
      {label: {en: 'M', de: 'Mittel'}, value: 200}
    ]
    // ...
  }
}
```

The migration to the new configuration is straightforward. Determine which UI modes should be available to your users and specify them under `modes`.

Example:

```js
// OLD (deprecated)
ui: {
  config: {
    steps: [{label: 'S', value: 100}],
    unit: 'characters',
    showExactCountCheckbox: true
  }
}
```

```js
// NEW
ui: {
  config: {
    modes: ['steps', 'characters'], // replaces the old properties
    steps: [{label: 'S', value: 100}]
  }
}
```

#### Input Mode: `steps`

{{< img src="release-2025-11-li-target-length-steps.png" alt="UI mode steps of metadata plugin li-target-length" >}}

#### Input Mode: `characters`

{{< img src="release-2025-11-li-target-length-characters.png" alt="UI mode characters of metadata plugin li-target-length" >}}

#### Input Mode: `lines`

{{< img src="release-2025-11-li-target-length-lines.png" alt="UI mode lines of metadata plugin li-target-length" >}}

### Data Migration Improvements :gift:

[Data Migrations]({{< ref "/reference/document/migration/data-migration" >}}), usually executed using the `data-migration-run` CLI, have received two improvements:

- Data Migrations now also migrate any scheduled publication. Previously, only the latest draft and latest publication of a document were migrated.
- Data Migrations have been optimized to minimize unnecessary duplication of revisions. When the same revision is linked to a document's draft, publication, or scheduled publication, it will now only be duplicated once. Additionally, when migrating a publication or scheduled publication, only the associated revision is duplicated, not the publication itself.

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- [GHSA-4hjh-wcwx-xvwj](https://github.com/advisories/GHSA-4hjh-wcwx-xvwj) patched in `axios` v1.12.0

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- [CVE-2025-58754](https://github.com/axios/axios/security/advisories/GHSA-4hjh-wcwx-xvwj) patched in `axios` v1.12.0

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2022-25844](https://github.com/advisories/GHSA-m2h2-264f-f486), [CVE-2022-25869](https://github.com/advisories/GHSA-prc3-vjfx-vhm9), [CVE-2023-26116](https://github.com/advisories/GHSA-2vrf-hf26-jrp5), [CVE-2023-26117](https://github.com/advisories/GHSA-2qqx-w9hr-q5gx), [CVE-2023-26118](https://github.com/advisories/GHSA-qwqh-hm9m-p5hr), [CVE-2024-8372](https://github.com/advisories/GHSA-m9gf-397r-hwpg), [CVE-2024-8373](https://github.com/advisories/GHSA-mqm9-c95h-x2p6), [CVE-2024-21490](https://github.com/advisories/GHSA-4w4v-5hc9-xrr2), [CVE-2025-0716](https://github.com/advisories/GHSA-j58c-ww9w-pwp5) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
- [CVE-2024-9506](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx) vulnerability in `vue`, an ReDoS vulnerability exploitable through inefficient regex evaluation in parseHTML function. The issue can cause excessive CPU usage but is not exploitable in the editor as we don't load untrusted HTML at runtime.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v284.0.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v284.0.12): fix: serve image with media library entry mime type if format is not specified

- [v284.0.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v284.0.11): fix(retresco): Limit retries when re-enrich fails
- [v284.0.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v284.0.10): fix: Apply redaction if image is requested with a width larger than the cropped width

- [v284.0.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v284.0.9): fix: Set minimal v22 node version to v22.17.1
- [v284.0.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v284.0.8): fix(retresco): Support API versions in Retresco re-enrich endpoint
- [v284.0.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v284.0.7): fix(public-api): Add 2025-11 to Public API versions
- [v284.0.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v284.0.6): fix(auth): Use accessTokenTtl for serve-image token expiration

### Livingdocs Editor Patches
- [v121.3.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v121.3.8): fix(horizontal form): Teaser reference

- [v121.3.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v121.3.7): fix(clipboard): prevent duplicated ids when pasting component from clipboard
- [v121.3.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v121.3.6): fix(dashboards): Prevent error when searching on kanban boards

- [v121.3.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v121.3.5): fix(image-cropper): state pollution
- [v121.3.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v121.3.4): fix(dashboard filters): Overlooked "low res" filter
- [v121.3.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v121.3.3): fix(media-center-batch-actions): fix broken media library in article editor

- [v121.3.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v121.3.2): fix(media center): Multi select polish

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
