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

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
- [News agency notifications](https://github.com/livingdocsIO/livingdocs-server/pull/8297)
- [fix(deps): update dependency @fastify/busboy from 3.1.1 to v3.2.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8287)
- [fix(deps): update dependency @google-cloud/storage from 7.16.0 to v7.17.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8296)
- [fix(deps): update playwright monorepo from 1.54.2 to v1.55.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-editor/pull/10219)
- [feat: add media library permissions](https://github.com/livingdocsIO/livingdocs-editor/pull/10211)
- [feat: add media library permissions](https://github.com/livingdocsIO/livingdocs-server/pull/8289)
- [Index news agency report title and lead to make them searchable on news agency screens](https://github.com/livingdocsIO/livingdocs-server/pull/8313)
- [Strip PEIQs newline characters from extracted metadata properties](https://github.com/livingdocsIO/livingdocs-server/pull/8291)
- [fix(deps): update dependency inquirer from 12.9.3 to v12.9.4 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8306)
- [chore(deps): update dependency chai from 5.3.1 to v5.3.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10221)
- [feat(target-length): also store the currently selected unit](https://github.com/livingdocsIO/livingdocs-server/pull/8247)
- [fix(deps): update dependency jose from 6.0.12 to v6.0.13 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8302)
- [fix(deps): update dependency webpack from 5.101.2 to v5.101.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10214)
- [fix(deps): update pintura [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/10207)
- [Polish Package Release-2025-09](https://github.com/livingdocsIO/livingdocs-editor/pull/10202)
- [fix(deps): update dependency @fastify/reply-from from 12.3.0 to v12.3.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10208)
- [fix(deps): update dependency inquirer from 12.9.2 to v12.9.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8286)
- [Add multiple states to media library entries in `populateMissingStates` function](https://github.com/livingdocsIO/livingdocs-server/pull/8274)
- [fix(deps): update webpack (main) (minor)](https://github.com/livingdocsIO/livingdocs-editor/pull/10174)
- [fix(deps): update babel from 7.28.0 to v7.28.3 (main) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/10205)
- [Render rubrics tree collapsed initially](https://github.com/livingdocsIO/livingdocs-editor/pull/10201)
- [fix(deps): update dependency inquirer from 12.9.1 to v12.9.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8273)
- [fix(deps): update dependency copy-webpack-plugin from 13.0.0 to v13.0.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10199)
- [fix(deps): update dependency mini-css-extract-plugin from 2.9.3 to v2.9.4 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10198)
- [chore(deps): update dependency eslint from 9.32.0 to v9.33.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8264)
- [Reinstantiate and deprecate unpublishing documents with publicationApi.\_scheduledPublish](https://github.com/livingdocsIO/livingdocs-server/pull/8254)
- [Force index use when getting assets by key to improve serve-image endpoint performance](https://github.com/livingdocsIO/livingdocs-server/pull/8253)
- [fix(deps): update aws-sdk from 3.850.0 to v3.859.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8234)
- [fix(deps): update dependency mini-css-extract-plugin from 2.9.2 to v2.9.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10191)
- [Render strings of v-tooltip as text to prevent script injection](https://github.com/livingdocsIO/livingdocs-editor/pull/10185)
- [fix(deps): update playwright monorepo from 1.54.1 to v1.54.2 (main) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/10184)
- [Index media library entry after document publish state change](https://github.com/livingdocsIO/livingdocs-server/pull/7763)
- [Clear session cache on user device revoke](https://github.com/livingdocsIO/livingdocs-server/pull/8237)
- [Fix unsetting system metadata plugins](https://github.com/livingdocsIO/livingdocs-editor/pull/10151)
- [Remove lock routes & controller & other small maintenance](https://github.com/livingdocsIO/livingdocs-server/pull/8187)
- [fix(deps): update dependency webpack-assets-manifest from 6.2.1 to v6.2.2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10173)
- [fix(deps): update dependency axios from 1.10.0 to v1.11.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10155)
- [Prevent error loading display filters in some older browsers](https://github.com/livingdocsIO/livingdocs-editor/pull/10171)
- [Compute `publishedInDocument` in populate-reference-ids script](https://github.com/livingdocsIO/livingdocs-server/pull/8224)
- [Ensure that display filter popups are visible in dialogs when there is a dashboard in the background](https://github.com/livingdocsIO/livingdocs-editor/pull/10060)
- [Disable scrolling when session expires and login overlay appears](https://github.com/livingdocsIO/livingdocs-editor/pull/10156)
- [Do not close open dialogs when attempting to close an already closed one](https://github.com/livingdocsIO/livingdocs-editor/pull/10154)
- [Fix return value of li-system-enum's validateOnUpdate](https://github.com/livingdocsIO/livingdocs-server/pull/8219)
- [fix(deps): update dependency webpack-assets-manifest from 5.2.1 to v6 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/9766)
- [Fix clearing input in li-system-text metadata property with data provider](https://github.com/livingdocsIO/livingdocs-editor/pull/10142)
- [Show embed settings of focused component](https://github.com/livingdocsIO/livingdocs-editor/pull/10141)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/8209)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/10143)
- [fix(deps): update dependency form-data from 4.0.3 to v4.0.4 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8208)
- [Authenticate /media-library/:id/download editing API endpoint](https://github.com/livingdocsIO/livingdocs-server/pull/7981)
- [Hide lightbox trigger for videos](https://github.com/livingdocsIO/livingdocs-editor/pull/10136)
- [Fix downloading images with Cloudinary image service if use2025Behavior is not enabled](https://github.com/livingdocsIO/livingdocs-server/pull/8199)
- [Fix Dataloader maxBatchSize](https://github.com/livingdocsIO/livingdocs-editor/pull/10137)
- [Move populate-reference-ids script to CLI one-time tasks](https://github.com/livingdocsIO/livingdocs-server/pull/8193)
- [Check Postgres references when deleting media](https://github.com/livingdocsIO/livingdocs-server/pull/8195)
- [chore(deps): update dependency puppeteer-core from 24.12.1 to v24.13.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10134)
- [Rename news agency category labels](https://github.com/livingdocsIO/livingdocs-server/pull/8176)
- [Rename news agency category labels](https://github.com/livingdocsIO/livingdocs-editor/pull/10112)
- [fix(deps): update dependency open from 10.1.2 to v10.2.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10131)
- [fix(deps): update aws-sdk (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8178)
- [Set media as `publishedInDocument` when scheduling a publication](https://github.com/livingdocsIO/livingdocs-server/pull/8194)
- [Only enable deletion routines with `use2025Behavior`](https://github.com/livingdocsIO/livingdocs-server/pull/8188)
- [fix(deps): update playwright monorepo from 1.53.2 to v1.54.1 (main) (minor)](https://github.com/livingdocsIO/livingdocs-editor/pull/10121)
- [fix: show li-system-target-length on table dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/10125)
- [chore(deps): update dependency eslint from 9.30.1 to v9.31.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10127)
- [fix(deps): update dependency sharp from 0.34.2 to v0.34.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8181)
- [fix(deps): update dependency @livingdocs/framework from 32.9.2 to v32.9.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10120)
- [chore(deps): update dependency @google-cloud/vision from 5.2.0 to v5.3.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8183)
- [Disable newlines in li-unique-id](https://github.com/livingdocsIO/livingdocs-editor/pull/10114)
- [fix(deps): update dependency @livingdocs/framework from 32.8.8 to v32.9.2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/10105)
- [chore(deps): update dependency chai from 5.2.0 to v5.2.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8177)
- [Rename index-reference-ids migration to avoid number conflict](https://github.com/livingdocsIO/livingdocs-server/pull/8171)
- [fix(deps): update dependency @livingdocs/framework from 32.8.8 to v32.9.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8151)
- [Fix kordiam global es query](https://github.com/livingdocsIO/livingdocs-server/pull/8164)
- [Support cmd+click on back button to open in new window](https://github.com/livingdocsIO/livingdocs-editor/pull/10110)
- [Li-Tree improvements for Rubrics](https://github.com/livingdocsIO/livingdocs-editor/pull/10106)
- [Fix deletion routine reference extraction](https://github.com/livingdocsIO/livingdocs-server/pull/8155)
- [Prevent configuring news agency report content type multiple times](https://github.com/livingdocsIO/livingdocs-server/pull/8159)
- [fix(deps): update dependency @elastic/elasticsearch from 9.0.2 to v9.0.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/8154)
- [fix(deps): update aws-sdk from 3.837.0 to v3.840.0 (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/8139)

To get an overview about new functionality, read the [Release Notes](TODO).
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

### Renaming of Table Dashboard Cells

Since the following dashboard cells are now exclusive to the News Agency module, we have renamed them accordingly. They were first introduced in `release-2025-07` to support the needs of the News Agency module.

- `liTableDashboardCellTitle` to `liTableDashboardCellNewsAgencyTitle`
- `liTableDashboardCellTime` to `liTableDashboardCellNewsAgencyTime`
- `liTableDashboardCellAgency` to `liTableDashboardCellNewsAgencyCreate`

If you are using any of these dashboard cells, please update their names accordingly.

{{< feature-info "Operations" "server" >}}

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database schema
livingdocs-server migrate up
```

TODO: check migration

## Deprecations

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
- [CVE-2023-26116](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26118](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2023-26117](https://cwe.mitre.org/data/definitions/1333.html), [CVE-2022-25869](https://cwe.mitre.org/data/definitions/79.html), [CVE-2022-25844](https://cwe.mitre.org/data/definitions/770.html) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

### Livingdocs Editor Patches

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
