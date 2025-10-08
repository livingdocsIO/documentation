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
      version: Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78

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
      version: Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
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

### Removed News Agency Properties `displayFilterOptionsSource` and `displayFilterOptionsCategory` 🔥

The news agency project configuration properties `newsAgency.screens[].displayFilterOptionsSource` and `newsAgency.screens[].displayFilterOptionsCategory` have been removed. Use properties `newsAgency.sources` and `newsAgency.categories`, respectively (see [Displaying Custom Values for News Agency Report Properties](#displaying-custom-values-for-news-agency-report-properties)).

## Deprecations

## Features

### News Agency Improvements

This release refines the News Agency module with new metadata properties and user experience improvements.

{{< info >}}
These improvements have also been backported to {{< release "release-2025-09" >}}.
{{< /info >}}

#### New Metadata Properties for News Agency Reports

News agency reports have been extended to include two additional metadata properties:

- `location`: Stores geographical information related to a report (e.g., city, region, or country).
- `note`: Contains additional details from the news agency, such as contact information or publishing restrictions.

Both properties are displayed alongside the already existing metadata properties.

{{< img src="release-2025-11-news-agency-metadata.png" alt="News Agency Report Metadata" width="600" >}}

#### Displaying Custom Values for News Agency Report Properties

You can now define custom labels for imported news agency report properties. Previously, Livingdocs displayed the raw imported values (e.g., abbreviated sources or untranslated categories). This update allows you to map those raw values to more descriptive or localized labels.

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

In addition, these new properties define the display filter options shown on news agency screens for filtering reports by `source` or `category`. They therefore supersede the project configuration properties `newsAgency.screens[].displayFilterOptionsSource` and `newsAgency.screens[].displayFilterOptionsCategory` (see [Breaking Changes](#removed-news-agency-properties-displayfilteroptionssource-and-displayfilteroptionscategories-)).

#### News Agency Screen Search Results Ordered by Datetime

Search results on news agency screens are now ordered by datetime instead of relevance. This ensures reports appear in the sequence they were received. Previously, results followed the same relevance-based order used on other dashboards, but feedback showed that for news agency reports, chronological order is more valuable. 

#### Increased News Agency Screen Page Size

The page size on news agency screens has been increased from 35 to 100, allowing users to view more reports at once without needing to load more reports.

#### Enabling All News Agency Notifications

The user experience for managing news agency notification categories has been improved with a new "Select all" checkbox. Roles that want to receive all notifications can now enable every notification category with a single click.

{{< img src="release-2025-11-news-agency-select-all.png" alt="News Agency Notifications Preferences" width="250" >}}

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

### Livingdocs Editor Patches

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
