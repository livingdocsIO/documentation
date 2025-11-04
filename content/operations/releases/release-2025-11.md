---
type: release-notes
title: November 2025 Release
description: Technical Release Notes for release-2025-11
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2025-11

systemRequirements:
  suggested:
    - name: Node
      version: 22
    - name: NPM
      version: 10
    - name: Postgres
      version: 16
    - name: Elasticsearch
      version: 8.x
    - name: OpenSearch
      version: 2.3.0
    - name: Redis
      version: 7
    - name: Livingdocs Server Docker Image
      version: livingdocs/server-base:22
    - name: Livingdocs Editor Docker Image
      version: livingdocs/editor-base:22
    - name: Browser Support
      version: Chrome >= 142, Edge >= 142, Firefox >= 144, Safari >= 26.0

  minimal:
    - name: Node
      version: 20.19
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

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize

- [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-editor/pull/10441)
- [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-server/pull/8564)
- [Media center batch actions: add sidepanel stack navigation](https://github.com/livingdocsIO/livingdocs-editor/pull/10438)
- [fix(deps): update dependency @livingdocs/framework from 32.10.2 to v32.10.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8563)
- [fix(deps): update dependency @livingdocs/framework from 32.10.2 to v32.10.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10440)
- [Prevent Javascript Injection during Import](https://github.com/livingdocsIO/livingdocs-editor/pull/10433)
- [Prevent Javascript Injection during Import](https://github.com/livingdocsIO/livingdocs-server/pull/8552)
- [chore(deps): update aws-sdk from 3.916.0 to v3.917.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8554)
- [Use `accessTokenTtl` for serve-image cookie expiration](https://github.com/livingdocsIO/livingdocs-server/pull/8551)
- [Media center batch actions: add saving status + batch actions](https://github.com/livingdocsIO/livingdocs-editor/pull/10418)
- [Bump minimal Node.js version to v20.19.5](https://github.com/livingdocsIO/livingdocs-server/pull/8545)
- [Design/icon size in circle button](https://github.com/livingdocsIO/livingdocs-editor/pull/10401)
- [Render newlines in news agency report notes](https://github.com/livingdocsIO/livingdocs-server/pull/8521)
- [Render newlines in news agency report notes](https://github.com/livingdocsIO/livingdocs-editor/pull/10402)
- [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8541)
- [Media center batch actions: improve multi select in enabling keyboard navigation](https://github.com/livingdocsIO/livingdocs-editor/pull/10378)
- [fix: image cropper showing multiple original buttons](https://github.com/livingdocsIO/livingdocs-editor/pull/10399)
- [Design/small tweaks](https://github.com/livingdocsIO/livingdocs-editor/pull/10413)
- [Remove `li-hooks` feature](https://github.com/livingdocsIO/livingdocs-server/pull/8523)
- [Validate news agency flow result against project design](https://github.com/livingdocsIO/livingdocs-server/pull/8519)
- [Breaking Changes for release-2025-11](https://github.com/livingdocsIO/livingdocs-editor/pull/10371)
- [Adjust display order of news agency report properties](https://github.com/livingdocsIO/livingdocs-editor/pull/10396)
- [fix(deps): update pintura [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/10390)
- [Design/Colour Palette](https://github.com/livingdocsIO/livingdocs-editor/pull/10394)
- [Only emit change event when component exists](https://github.com/livingdocsIO/livingdocs-editor/pull/10386)
- [Feat: distribution dates improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/10326)
- [Feat: add date only config to distribution dates](https://github.com/livingdocsIO/livingdocs-server/pull/8452)
- [fix(deps): update dependency @livingdocs/framework from 32.10.1 to v32.10.2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10382)
- [fix(deps): update dependency @livingdocs/framework from 32.10.1 to v32.10.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8500)
- [Show iMatrics concepts of type category by default](https://github.com/livingdocsIO/livingdocs-editor/pull/10366)
- [Apply default content in ticker entries](https://github.com/livingdocsIO/livingdocs-editor/pull/10373)
- [Run asset url patching on metadata and document before running publish hooks](https://github.com/livingdocsIO/livingdocs-server/pull/8497)
- [Breaking Changes for release-2025-11](https://github.com/livingdocsIO/livingdocs-server/pull/8482)
- [Prevent error if task properties beforeLabel or afterLabel are not configured](https://github.com/livingdocsIO/livingdocs-editor/pull/10362)
- [Extract statistics of news agency reports](https://github.com/livingdocsIO/livingdocs-server/pull/8476)
- [fix(table dashboard): Overflow-cell extra-spacing](https://github.com/livingdocsIO/livingdocs-editor/pull/10372)
- [fix(deps): update opentelemetry (main) (minor) - autoclosed](https://github.com/livingdocsIO/livingdocs-server/pull/8480)
- [fix(deps): update pintura [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/10363)
- [fix(deps): update dependency pino from 9.12.0 to v10 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8471)
- [fix: show revision updated_at instead of document updatedAt](https://github.com/livingdocsIO/livingdocs-editor/pull/10346)
- [`li-image`: Reintroduce accidentally removed default for `readOnly`](https://github.com/livingdocsIO/livingdocs-server/pull/8474)
- [Improvement/User Profile, li-rich-list and li-static-table](https://github.com/livingdocsIO/livingdocs-editor/pull/10355)
- [Show task panel when opening document from task screen in new tab](https://github.com/livingdocsIO/livingdocs-editor/pull/10338)
- [Disable assistant and delivery builds during save](https://github.com/livingdocsIO/livingdocs-editor/pull/10351)
- [Feat/Publication History](https://github.com/livingdocsIO/livingdocs-editor/pull/10345)
- [chore(deps): update dependency mocha from 11.7.3 to v11.7.4 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10344)
- [Prevent crashing server if a scheduled publication cannot be found](https://github.com/livingdocsIO/livingdocs-server/pull/8459)
- [Upgrade pino to replace vulnerable fast-redact dependency](https://github.com/livingdocsIO/livingdocs-editor/pull/10337)
- [Reuse vue components in angular based properties panel](https://github.com/livingdocsIO/livingdocs-editor/pull/10322)
- [Fix include extraction order](https://github.com/livingdocsIO/livingdocs-server/pull/8445)
- [Simplify li-target-length UI config](https://github.com/livingdocsIO/livingdocs-server/pull/8425)
- [Refactor li-target-length](https://github.com/livingdocsIO/livingdocs-editor/pull/10285)
- [Avoid destructuring props to preserve reactivity](https://github.com/livingdocsIO/livingdocs-editor/pull/10312)
- [Reorder li-image buttons to match image directive](https://github.com/livingdocsIO/livingdocs-editor/pull/10309)
- [Remove in-text-linked=false from Retresco enrich URL when saving pods data](https://github.com/livingdocsIO/livingdocs-server/pull/8438)
- [Allow nesting of items in rubrics tree](https://github.com/livingdocsIO/livingdocs-editor/pull/10318)
- [Display news agency screen search results in the order they were created](https://github.com/livingdocsIO/livingdocs-editor/pull/10310)
- [fix(deps): update dependency posthog-node from 5.8.8 to v5.9.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8434)
- [fix(deps): update dependency on-change from 5.0.1 to v6 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8430)
- [Disable auto reload on news agency screens when user loaded additional pages](https://github.com/livingdocsIO/livingdocs-editor/pull/10239)
- [News Agency Improvements](https://github.com/livingdocsIO/livingdocs-server/pull/8412)
- [News Agency Improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/10298)
- [fix(deps): update dependency sass from 1.93.1 to v1.93.2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10305)
- [chore(deps): update dependency eslint-plugin-jsdoc from 60.1.1 to v60.2.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8427)
- [Data migrations migrate scheduled publications](https://github.com/livingdocsIO/livingdocs-server/pull/8365)
- [fix(deps): update dependency sass from 1.93.0 to v1.93.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10303)
- [fix(deps): update dependency posthog-node from 5.8.6 to v5.8.8 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8422)
- [Index documents without locale in their projects default locale](https://github.com/livingdocsIO/livingdocs-server/pull/8417)
- [fix(deps): update dependency sass from 1.92.1 to v1.93.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10300)
- [fix(deps): update aws-sdk from 3.884.0 to v3.893.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8385)
- [fix(deps): update dependency posthog-node from 5.8.4 to v5.8.6 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8413)
- [fix(deps): update dependency sharp from 0.34.3 to v0.34.4 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8408)
- [fix(deps): update dependency @livingdocs/framework from 32.10.0 to v32.10.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8405)
- [chore(deps): update dependency puppeteer-core from 24.20.0 to v24.21.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10296)
- [Fix minor UI bugs discovered during release testing](https://github.com/livingdocsIO/livingdocs-editor/pull/10290)
- [fix(deps): update dependency axios from 1.11.0 to 1.12.0 [security] (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10286)
- [Hide additional info toggle if nothing to show](https://github.com/livingdocsIO/livingdocs-editor/pull/10277)
- [set create_date and change_date on retresco request data](https://github.com/livingdocsIO/livingdocs-server/pull/8396)
- [Feat/li-button with Auto-Icon](https://github.com/livingdocsIO/livingdocs-editor/pull/10284)
- [chore(deps): update dependency eslint-plugin-jsdoc from 55.4.0 to v57 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8401)
- [Axios is vulnerable to DoS attack through lack of data size check - https://github.com/advisories/GHSA-4hjh-wcwx-xvwj](https://github.com/livingdocsIO/livingdocs-server/pull/8389)
- [Expose media library asset changes in server events](https://github.com/livingdocsIO/livingdocs-server/pull/8387)
- [chore(deps): update dependency eslint-plugin-jsdoc from 55.1.2 to v55.4.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8384)
- [Fix `vue-template-compiler` security issue](https://github.com/livingdocsIO/livingdocs-editor/pull/10273)
- [Prevent upload center select all error when metadata config properties are undefined](https://github.com/livingdocsIO/livingdocs-editor/pull/10266)
- [Check permission in li-image metadata form using uploadMediaType to prevent error trying to access the workspace](https://github.com/livingdocsIO/livingdocs-editor/pull/10265)
- [fix(deps): update dependency @azure/identity from 4.11.1 to v4.11.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8377)
- [Correctly register opentelemetry span processor](https://github.com/livingdocsIO/livingdocs-server/pull/8371)
- [chore(deps): update dependency eslint-plugin-jsdoc from 54.5.0 to v54.7.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8367)

- [chore(deps): update dependency eslint from 9.34.0 to v9.35.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10271)
- [fix(deps): update dependency pino from 9.9.2 to v9.9.4 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8361)
- [Support setting migration sequence to 0 with documentApi.createV2](https://github.com/livingdocsIO/livingdocs-server/pull/8356)
- [fix(deps): update dependency dedent from 1.6.0 to v1.7.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10255)
- [fix(deps): update dependency posthog-node from 5.8.1 to v5.8.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8354)
- [fix(deps): update dependency pino from 9.9.1 to v9.9.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8352)
- [Trigger Google Vision enrichment on image upload](https://github.com/livingdocsIO/livingdocs-server/pull/8341)
- [Improve comment to component alignment on load](https://github.com/livingdocsIO/livingdocs-editor/pull/10056)
- [Allow `li-rubric-assignment` in creation flows](https://github.com/livingdocsIO/livingdocs-server/pull/8348)
- [Exclude scheduled publication events from revisions list](https://github.com/livingdocsIO/livingdocs-server/pull/8336)
- [fix(deps): update dependency pino from 9.9.0 to v9.9.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8343)
- [Rename 213-\* db migrations](https://github.com/livingdocsIO/livingdocs-server/pull/8339)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2025-11`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- Feature Webinar Recording: **TODO**
- Feature Webinar Documentation: **TODO**
- Dev Webinar Recording: **TODO**
- Dev Webinar Slides: **TODO**
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

## Deprecations

### Simplified `li-target-length` and `li-system-target-length` UI Configuration

The following `li-target-length` and `li-system-target-length` UI configuration properties are deprecated and will be removed in release-2026-05:

- `ui.config.allowAnyNumber`
- `ui.config.showExactCountCheckbox`
- `ui.config.unit`

Use the [new property `ui.config.modes`](#simplified-li-target-length-and-li-system-target-length-ui-configuration-1) instead.

## Features

### Media Library Batch Actions

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

### News Agency Improvements

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

### Distribution Dates UI Improvements

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

### Simplified `li-target-length` and `li-system-target-length` UI Configuration

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

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- TBD

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- TBD

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2022-25844](https://github.com/advisories/GHSA-m2h2-264f-f486), [CVE-2022-25869](https://github.com/advisories/GHSA-prc3-vjfx-vhm9), [CVE-2023-26116](https://github.com/advisories/GHSA-2vrf-hf26-jrp5), [CVE-2023-26117](https://github.com/advisories/GHSA-2qqx-w9hr-q5gx), [CVE-2023-26118](https://github.com/advisories/GHSA-qwqh-hm9m-p5hr), [CVE-2024-8372](https://github.com/advisories/GHSA-m9gf-397r-hwpg), [CVE-2024-8373](https://github.com/advisories/GHSA-mqm9-c95h-x2p6), [CVE-2024-21490](https://github.com/advisories/GHSA-4w4v-5hc9-xrr2), [CVE-2025-0716](https://github.com/advisories/GHSA-j58c-ww9w-pwp5) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
- [CVE-2024-9506](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx) vulnerability in `vue`, an ReDoS vulnerability exploitable through inefficient regex evaluation in parseHTML function. The issue can cause excessive CPU usage but is not exploitable in the editor as we don't load untrusted HTML at runtime.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

- [v284.0.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v284.0.9): fix: Set minimal v22 node version to v22.17.1
- [v284.0.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v284.0.8): fix(retresco): Support API versions in Retresco re-enrich endpoint
- [v284.0.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v284.0.7): fix(public-api): Add 2025-11 to Public API versions
- [v284.0.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v284.0.6): fix(auth): Use accessTokenTtl for serve-image token expiration

### Livingdocs Editor Patches

- [v121.3.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v121.3.5): fix(image-cropper): state pollution
- [v121.3.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v121.3.4): fix(dashboard filters): Overlooked "low res" filter
- [v121.3.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v121.3.3): fix(media-center-batch-actions): fix broken media library in article editor

- [v121.3.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v121.3.2): fix(media center): Multi select polish

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
