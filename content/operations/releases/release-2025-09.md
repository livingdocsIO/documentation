---
type: release-notes
title: September 2025 Release
description: Technical Release Notes for release-2025-09
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2025-09

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

To get an overview about new functionality, read the [Release Notes](https://livingdocs.io/en/release-september-2025).
To learn about the necessary actions to update Livingdocs to `release-2025-09`, read on.

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

TODO: Check Migrations

### Before the deployment

No pre-deployment steps are required before rolling out this release.

### Rollout deployment

#### Migrate the Postgres Database

When you upgrade to this new release, please make sure to migrate your database first.
At livingdocs we're running those two commands directly in an initContainer on kubernetes.

```sh
# 213-add-media-library-permissions.js
# TODO: explanation
# 214-remove-unused-tables-and-improve-document-deletion.js
# TODO: explanation
# 215-update-document-publications-columns.js
# TODO: explanation

# run `livingdocs-server migrate up` to update to the newest database schema
livingdocs-server migrate up
```

### After the deployment

TODO: Add livingdocs-server release-2025-09-delete-old-channels helper to delete secondary channels and documents. Documents of secondary channels have not been accessible anymore, so a deletion won't affect other systems.

### Rollback

If you encounter any issues after the deployment, you can rollback to the previous release. If you have already run the migrations and they have completed, you can rollback to the previous release by running the commands below. The processes will continue to run even if those down migrations are not executed, but to ensure consistency, please run those after doing a rollback.

```sh
# File names can also be ommited
livingdocs-server migrate down 213-add-media-library-permissions.js
livingdocs-server migrate down 214-remove-unused-tables-and-improve-document-deletion.js
livingdocs-server migrate down 215-update-document-publications-columns.js
```

## Breaking Changes 🔥

### Renditions

Renditions have been deprecated in Public API versions older than `2025-09`. In API version `2025-09` support for the following APIs has been dropped:

- `/api/2025-09/documents/:documentId/latestPublication/renditions/:renditionHandles`
- Query parameter `?renditions` in `/api/2025-09/documents/:documentId/latestDraft`
- Query parameter `?renditions` in `/api/2025-09/documents/:documentId/latestPublication`

### Renaming of Table Dashboard Cells

Since the following dashboard cells are now exclusive to the News Agency module, we have renamed them accordingly. They were first introduced in `release-2025-07` to support the needs of the News Agency module.

- `liTableDashboardCellTitle` to `liTableDashboardCellNewsAgencyTitle`
- `liTableDashboardCellTime` to `liTableDashboardCellNewsAgencyTime`
- `liTableDashboardCellAgency` to `liTableDashboardCellNewsAgencyCreate`

If you are using any of these dashboard cells, please update their names accordingly.

## Deprecations

### Open Telemetry

- Property `jaegerExporter` has been deprecated. Please use properties `serviceName` and `tracing.exporter`.
- Properties `metrics.enableCollectorMetricExporter` and `collectorMetricExporter` have been deprecated. Please use property `metrics.exporter`.

## Features

### News Agency Notifications

It is now possible to receive notifications for news agency reports directly in Livingdocs. Once enabled, these notifications appear throughout the application—whether on a dashboard, article, or in any other view. They inform users that a new news agency report matching the defined criteria is available. From there, an article can be created instantly with just one click.

To ensure users stay informed even when they are not actively working in Livingdocs, the favicon is highlighted whenever a new notification is available. In addition, browser notifications can be activated to alert users outside of the Livingdocs tab as soon as a new report is received.

#### Criteria for receiving News Agency Notifications

An incoming news agency report will only trigger a notification if the following conditions are met:

- The news agency report has a Priority 1 or Priority 2.
- Notifications are enabled and the sleep timer is deactivated.
- The corresponding category of the report is selected in the news agency notification settings.

#### News Agency Notification Settings

The settings for news agency notifications are available on every news agency screen. To show the settings, click its icon. It is located next to the display filters at the top of the document list and indicates the current status: Disabled, Enabled, or Sleep Timer Active.

Clicking the icon opens the settings. When the toggle is switched on, a list of all configured categories is displayed. Notifications are delivered for all categories that are checked.

{{< img width="300" src="./release-2025-09-news-agencies-notification-settings.png" alt="News Agency Notification Settings" >}}

Configure these categories using the `notifications` property inside the `newsAgency` property:

```js
newsAgency: {
  notifications: [
    {
      handle: 'politics',
      label: {en: 'Politics', de: 'Politik'},
      category: 'Politik'
    }
    // ...
  ]
}
```

In addition to enabling or disabling notifications and adjusting the category selection, users can also activate a sleep timer to temporarily mute notifications. Settings changes are persisted per user.
The settings may also contain a hint regarding browser notifications if they are unset or disabled (see the respective sections below for more information).

#### News Agency Notifications Modal

When all notification criteria are met, a notification will appear at the top center of the Livingdocs interface.
It contains a cell representing the news agency report, including the timestamp, title, source, and a plus button. Clicking the plus button immediately creates a Livingdocs article based on this report.
Below the report cell, users can either toggle notifications on/off or activate the sleep timer, just as in the notification settings. Additionally, a Details button opens the full report details, mirroring the side panel on the news agency screen.
If multiple notifications are present, a navigation element appears in the top-right corner. Users can click the arrows to browse through all received news agency reports. The currently opened notification remains active and visible, even when new notifications arrive.

These notifications behave similarly to other Livingdocs notifications (e.g., error messages). They overlay all other interface elements. While interacting directly with the notification and its content, the background remains inactive. However, when clicking or working outside the notification, the rest of the interface behaves as usual.

{{< img src="./release-2025-09-news-agencies-notifications-collapsed.png" alt="News Agency Notifications Decollapsed" >}}
{{< img src="./release-2025-09-news-agencies-notifications-uncollapsed.png" alt="News Agency Notifications Collapsed" >}}

A notification will remain visible until one of the following occurs:

- An article is created directly from the notification using the plus button.
- The notification is closed manually via the close button in the top-right corner.
- 30 minutes have passed. In this case, only the specific notification that reached the 30-minute limit will disappear; other notifications remain unaffected.

Notifications and news agency settings are synchronized across all open browser tabs. When a notification is closed in one tab, it is automatically closed in all other tabs. The same applies when a new notification is received—it becomes visible in every open tab.

When notifications are open, the favicon changes. A small red circle is added on top of the Livingdocs logo (the default favicon). Once all notifications are closed, the favicon reverts to its normal state. This visual cue ensures that users can easily recognize when new notifications are available—even if no Livingdocs tab is currently active.

#### Sleep Timer

The sleep timer can be activated to temporarily mute notifications, allowing you to pause alerts until the next day without disabling notifications entirely. Once the remaining time has passed, notifications will automatically resume.

While active, the sleep timer also displays the remaining time until notifications are re-enabled.
If news agency notifications are switched off completely, the sleep timer will be deactivated as well.

The sleep timer is available both in the News Agency Notification Settings and in the Notification Modal.

#### Browser Notifications

Livingdocs now supports browser notifications for incoming news agency reports that meet the notification criteria, providing a way to receive alerts outside of the application.
When opening the news agency notification settings for the first time, the browser will ask users to grant permission for Livingdocs notifications (by default, this setting is unset).

If the user declines, a permanent hint will be shown in the News Agency Notification Settings.
If the user accepts, then in addition to the in-app News Agency Notification, a browser notification will be displayed.

The browser notification itself contains only the title of the incoming news agency report that matches the criteria. Handling of the notification depends entirely on the browser and the user’s system (computer) settings. Livingdocs has no control over the appearance, duration, or sound of these notifications.

Note: if system notifications are disabled, or when sharing your screen in a video call, browser notifications may not be displayed at all.

### Media Center: Improved Image Overview & Display of Metadata

### Media Center: Access Control per Media Type

### Media Center: Support Several Image Media Types

### Target Length

### History View: Add unpublish Info

### Support Archived Rubrics

### Restreco Plugin Extension

TODO: Include “pods” but not “transcription”

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- [GHSA-xffm-g5w8-qvg7](https://github.com/advisories/GHSA-xffm-g5w8-qvg7) in `@eslint/plugin-kit`
- [CVE-2025-7783](https://github.com/advisories/GHSA-fjxv-7rqg-78g4) in `form-data`
- [CVE-2025-7339](https://github.com/advisories/GHSA-76c9-3jph-rj3q) in `on-headers`
- [CVE-2025-54798](https://github.com/advisories/GHSA-52f5-9888-hmc6) in `tmp`

  No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- [GHSA-xffm-g5w8-qvg7](https://github.com/advisories/GHSA-xffm-g5w8-qvg7) patched in `@eslint/plugin-kit` v2.5.5
- [CVE-2025-7783](https://github.com/advisories/GHSA-fjxv-7rqg-78g4) patched in `form-data` v2.5.5
- [CVE-2025-9288](https://github.com/advisories/GHSA-95m3-7q98-8xr5) patched in `sha.js` v2.4.12

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2022-25844](https://github.com/advisories/GHSA-m2h2-264f-f486), [CVE-2022-25869](https://github.com/advisories/GHSA-prc3-vjfx-vhm9), [CVE-2023-26116](https://github.com/advisories/GHSA-2vrf-hf26-jrp5), [CVE-2023-26117](https://github.com/advisories/GHSA-2qqx-w9hr-q5gx), [CVE-2023-26118](https://github.com/advisories/GHSA-qwqh-hm9m-p5hr), [CVE-2024-8372](https://github.com/advisories/GHSA-m9gf-397r-hwpg), [CVE-2024-8373](https://github.com/advisories/GHSA-mqm9-c95h-x2p6), [CVE-2024-21490](https://github.com/advisories/GHSA-4w4v-5hc9-xrr2), [CVE-2025-0716](https://github.com/advisories/GHSA-j58c-ww9w-pwp5) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
- [CVE-2024-6783](https://github.com/advisories/GHSA-g3ch-rx76-35fx) vulnerability in `vue-template-compiler` it allows malicious users to perform XSS via prototype pollution. Editor build is always done in a trusted environment and the vulnerability is not exploitable.
- [CVE-2024-9506](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx) vulnerability in `vue`, an ReDoS vulnerability exploitable through inefficient regex evaluation in parseHTML function. The issue can cause excessive CPU usage but is not exploitable in the editor as we don't load untrusted HTML at runtime.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

- [v281.3.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.7): fix: Support setting migration sequence to 0 with documentApi.create
- [v281.3.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.6): fix(google-vision): Enrich images on upload
- [v281.3.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.5): fix(rubrics): allow `li-rubric-assignment` in creation flows
- [v281.3.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.4): fix(revisions): Exclude scheduled publication events
- [v281.3.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.3): fix(db): Rename 213 migrations
- [v281.3.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.2): fix(release-2025-09): Update framework to v32.9.4 (release-2025-09 tag)

### Livingdocs Editor Patches

- [v119.14.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.5): fix: Remove angular-sanitize
- [v119.14.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.4): fix(comments): Improve comment to component alignment on load
- [v119.14.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.3): fix(release-2025-09): Update framework to v32.9.4 (release-2025-09 tag)

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
