---
type: release-notes
title: September 2025 Release
description: Technical Release Notes for release-2025-09
excludeFromSearch: false
hideSectionTeaser: true

header:
  upcoming: false
  legacy: false
  current: true
  maintained: true
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

- [Feature Webinar Recording](https://us02web.zoom.us/rec/share/I-1M_DMZbYZKNlZlgOhJB_Y8WbdRQuMFlhzzroeIZSjkakCWy38J4zybPhUkjuBm.682EmkL78KHAa0Dh) | Passcode: `DuA+@0rQ`
- [Feature Webinar Slides](https://drive.google.com/file/d/1MkYh2QKUoOEitdpMPV4zkdtoINCbfyrP/view?usp=sharing)
- [Dev Webinar Recording](https://us02web.zoom.us/rec/share/4quALbzep7T3ZgrMMW0OjExXsrHqpfcwnClxXe_ERdSs5t9yHFAAtTtX1fbfIOp2.I0rrPih4FmYCL_vn) | Passcode: `bR1*Uk*W`
- [Dev Webinar Slides](https://drive.google.com/file/d/1um5zN0sY2yLgrajeW0-l8wPaEE1cbmbp/view?usp=sharing)
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

When you upgrade to this new release, please make sure to migrate your database first.
At livingdocs we're running those two commands directly in an initContainer on kubernetes.

All the migrations should execute quick and not lock write-heavy tables.

```sh
# 213-add-media-library-permissions.js
#   With the new media library permissions, users don't have write access by default once a new media type gets added.
#   For that reason we need to grant those permissions to all the existing groups.
# 214-remove-unused-tables-and-improve-document-deletion.js
#   We've observed that there have been some indexes not set up properly which causes
#   cascaded deletes of documents to take a really long time.
# 215-update-document-publications-columns.js
#   We've added unpublished_at and unpublished_by columns to the publications to
#   properly visualize the unpublish information in the document history.

# run `livingdocs-server migrate up` to update to the newest database schema
livingdocs-server migrate up
```

### After the deployment

In `release-2025-07`, we've removed support for multiple channels within a project.
With the previous release the content of secondary channels isn't accessible anymore.

Therefore we've added a new cli command to delete those secondary channels and their content (also archived content types it had).
To clean up that content, you can execute `livingdocs-server release-2025-09-delete-old-channels`.

Additionally, we've added support to delete archived content types.
You might also want to run that command: `livingdocs-server content-types-delete-archived`

Both commands only delete content that wasn't accessible anymore in the system.
Therefore there is no change in functionality if you execute them.

### Rollback

If you encounter any issues after the deployment, you can rollback to the previous release. If you have already run the migrations and they have completed, you can rollback to the previous release by running the commands below. The processes will continue to run even if those down migrations are not executed, but to ensure consistency, please run those after doing a rollback.

```sh
# File names can also be ommited
livingdocs-server migrate down 213-add-media-library-permissions.js
livingdocs-server migrate down 214-remove-unused-tables-and-improve-document-deletion.js
livingdocs-server migrate down 215-update-document-publications-columns.js
```

## Breaking Changes 🔥

### Renaming of Table Dashboard Cells

Since the following dashboard cells are now exclusive to the News Agency module, we have renamed them accordingly. They were first introduced in `release-2025-07` to support the needs of the News Agency module.

- `liTableDashboardCellTitle` to `liTableDashboardCellNewsAgencyTitle`
- `liTableDashboardCellTime` to `liTableDashboardCellNewsAgencyTime`
- `liTableDashboardCellAgency` to `liTableDashboardCellNewsAgencyCreate`

If you are using any of these dashboard cells, please update their names accordingly.

## Deprecations

### `renditions` endpoints and query parameters in Public API

Renditions have been deprecated in Public API versions older than `2025-09`.

The following endpoint is no longer available in newer api versions anymore:

❌ `GET` `/api/2025-09/documents/{documentId}/latestPublication/renditions/{renditionHandles}`

The following endpoints don't support the `?renditions` query parameter anymore:

❌ `GET` `/api/2025-09/documents/{documentId}/latestDraft?renditions=web`  
❌ `GET` `/api/2025-09/documents/{documentId}/latestPublication?renditions`

There's no replacement for renditions in livingdocs as all transforms should be done when aggregating content for your frontends.

But all three endpoints still support the old logic in v1 to 2025-05:

✅ `GET` `/api/2025-07/documents/{documentId}/latestPublication/renditions/{renditionHandles}`  
✅ `GET` `/api/2025-07/documents/{documentId}/latestDraft?renditions=web`  
✅ `GET` `/api/2025-07/documents/{documentId}/latestPublication?renditions`

### Open Telemetry

We've upgraded opentelemetry to fix some integration integrations.
At the same time we've simplified the configuration. For backwards compatibility the old config is still supported.

The two major changes are how the trace and metrics opentelemetry exporters are configured.
The prometheus `/metrics` endpoint is not affected by those changes.

- The server config `telemetry.jaegerExporter` has been deprecated. Please use the properties `telemetry.serviceName` and `telemetry.tracing.exporter`.
- The server config `telemetry.metrics.enableCollectorMetricExporter` and `telemetry.collectorMetricExporter` have been deprecated. Please use property `telemetry.metrics.exporter`.

```diff
 {
   // Previously that config was on jaegerExporter.serviceName, but basically not related to the jaeger exporter
   // We still have fallbacks from the old config
+  serviceName: '@livingdocs/server',

   // Tracing
   tracing: {
     enabled: true,
+    exporter: {
+      // Available options: 'jaeger' (deprecated), 'otlp-http', 'otlp-proto', 'otlp-grpc'
+      //   jaeger maps to '@opentelemetry/exporter-jaeger'
+      //   otlp-http maps to '@opentelemetry/exporter-trace-otlp-http'
+      //   otlp-proto maps to '@opentelemetry/exporter-trace-otlp-proto'
+      //   otlp-grpc maps to '@opentelemetry/exporter-trace-otlp-grpc'
+      // The preferred exporter is @opentelemetry/exporter-trace-otlp-grpc
+      type: 'otlp-grpc'
+      config: {
+        url: 'http://localhost:4317'
+      }
+      // If jaegerExporter was present on the telemetry config, we take it over onto that object
+      // those configs are jaeger specific. With the otlp providers you should use config: {url: 'http://localhost:port'}
+      // type: 'jaeger',
+      // config: {
+      //   endpoint: 'http://localhost:14268/api/traces'
+      // }
+    }
   },

-  // Moved to tracing.exporter, for backwards compatibility this is still supported
-  jaegerExporter: {
-    serviceName: serviceName,
-    host: 'localhost',
-    port: 6832
-  },

  // Metrics
   metrics: {
     enabled: true,
     collectDefaultMetrics: true,
-    // Moved to metrics.exporter, for backwards compatibility this is still supported
-    enableCollectorMetricExporter: false,
+    exporter: {
+      // Available options: 'otlp-http', 'otlp-proto', 'otlp-grpc'
+      //   otlp-http maps to '@opentelemetry/exporter-metrics-otlp-http'
+      //   otlp-proto maps to '@opentelemetry/exporter-metrics-otlp-proto'
+      //   otlp-grpc maps to '@opentelemetry/exporter-metrics-otlp-grpc'
+      // If enableCollectorMetricExporter is configured, the collectorMetricExporter object is taken as config
+      // With the otlp providers you should use config: {url: 'http://localhost:port'}
+      type: 'otlp-grpc'
+      config: {
+        url: 'http://localhost:4317'
+      }
+    }
   },
-  // This config moved to metrics.exporter similar like with the telemetry config
-  collectorMetricExporter: {
-    serviceName: serviceName // Taken from package.json
-  }
}
```

### Database connection using require('@livingdocs/server/lib/db')

Accessing a database connection by '@livingdocs/server/lib/db' logs the deprecation `LIDEP057`.
Please execute queries using `liServer.db.sql` if really necessary.

Do not use deep requires into the livingdocs codebase. If you have any special use case where this is needed, please let us know.

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

When searching for and selecting images for an article, users want to have the most important information at hand and optionally see more metadata that is relevant for picking the right picture.

{{< img src="./release-2025-09-media-library-card-without-metadata.png" alt="Image cards showing a title, date, credit line, but no additional metadata" >}}

#### Additional metadata

Formerly, we already supported the display of additional metadata in media library cards, but it was sometimes hard to read when too many metadata properties were displayed as a single string. While the configuration for the additional metadata remains the same, we changed the presentation of it.

Each metadata property shows up as an individual bullet point, where label and value differ in their font weight. Properties with missing values remain visible as bullet points, which improves consistency when looking through results.

By default, additional metadata is no longer displayed! Users have to switch it on via the "Show metadata" control in the filter bar. The choice is remembered in local storage.

{{< img src="./release-2025-09-media-library-card-with-metadata.png" alt="Image cards showing a title, date, credit line, and additional metadata" >}}

#### Card title

We allow the title to take up to three lines of text before we truncate it. Additionally, you no longer have to name your metadata property `title` or `caption`. We still look in there by default to display the title, but you can now also provide a mapping configuration yourself (see an example configuration further down).

#### Card date

By default, we're showing the date when an image was uploaded or imported next to the image. In some cases, it might be more suitable to show the date when the photo was taken. You can do that as well by providing a mapping configuration as well (see an example configuration further down).

#### Credit line

Before this release, some customers were using the additional metadata configuration to show a credit line. As described above, the display of the additional metadata has changed, so we decided to introduce a dedicated spot in the card to display credit or copyright information.
It is now possible to provide a mapping configuration for the credit line independent of other displayed metadata information (see an example configuration further down).

#### Configuring the media library card

In the editor config, you have the possibility to define multiple `dashboardCardConfigurations`. To make use of the new capabilities, please make sure to have an entry with `useCard: 'liMediaLibraryCard'`.

We have added three new properties to `options.title`, `options.date` and `options.credit`. All of them are optional, and if not provided, the behavior remains the same as before.
The three new options support the same metadata mapping rules that are already known from [directive prefilling]({{< ref "/reference/project-config/editor-settings/#component-directives-prefilling" >}}). Each option accepts an array of mapping rules. A rule can point to a metadata property by name, or it can use a template string where multiple metadata properties are accessible.
A rule applies if all referenced properties exist and store a non-empty string value. Otherwise, we evaluate the next rule.

While the above-mentioned new options are limited to string values, the existing option `addtionalInformation` has been extended to support more metadata plugin types than before.
In addition to `li-text` and `li-document-reference`, we have added support for:

- `li-integer`
- `li-boolean`
- `li-date`
- `li-date-time`
- `li-enum`
- `li-string-list`
- `li-media-handle`

```js
module.exports = {
  // ...
  dashboardCardConfigurations: [
    {
      handle: 'myImageCard',
      useCard: 'liMediaLibraryCard',
      options: {
        // Added in release-2025-09
        // Optional, with template and fallback support.
        // Defaults to metadata.title and metadata.caption.
        title: [
          {
            type: 'template',
            template: '«{{metadata.title}}»'
          }
        ],
        // Added in release-2025-09
        // Defaults to mediaLibraryEntry.createdAt.
        date: [{metadataPropertyName: 'capturedAt'}],
        // Added in release-2025-09
        // Optional, with template and fallback support.
        // No default.
        credit: [
          {metadataPropertyName: 'CopyrightNotice'},
          {metadataPropertyName: 'rightsInfo/copyrightNotice'},
          {
            type: 'template',
            template: '{{metadata.CopyrightOwner}} / {{metadata.Creator}}'
          }
        ],
        // Existing option
        // No template and fallback support.
        // All properties are displayed regardless of their presence in the metadata.
        additionalInfo: [
          {metadataPropertyName: 'description'},
          {metadataPropertyName: 'UsageTerms'}
        ]
      }
    }
  ]
}
```

#### Media Handle

When looking at a series of similar images, they can be hard to distinguish based on the visible information. By providing a visually recognizable and unique identifier, it becomes easier to communicate and locate a particular image.

If a media library entry has a `li-media-handle` metadata property, that value appears as a tag alongside the image. The tag also appears in metadata forms and is not editable by users.

By default, and if the property does not hold a value, we display the ID of the media library entry. However, it is possible to set a value yourself using the Import API or Command API. In that case, you have to ensure yourself that the ID you provide is unique within the system, otherwise users searching for the media handle would be served with multiple results. We do not check for uniqueness when storing a value.
For the search to work, you have to enable indexing of the metadata property.

{{< img src="./release-2025-09-media-handle-card.png" alt="Image cards with a media handle tag." >}}
{{< img src="./release-2025-09-media-handle-metadata.png" alt="Metadata form with a li-media-handle property." >}}

```js
module.exports = {
  type: 'mediaImage',
  handle: 'image',
  // ...
  metadata: [
    {
      handle: 'mediaHandle',
      type: 'li-media-handle',
      config: {
        index: true
      },
      ui: {
        lable: 'Image ID'
      }
    }
  ]
}
```

### Media Center: Access Control per Media Type

The Media Center now supports granular access control permissions per media type, similar to the existing document content type permissions. Groups can be granted specific permissions (create, read, update, revoke, delete) for individual media types like images, videos, or files, allowing for more precise content management workflows.

Permissions are configured in user groups and can be set per media type handle (e.g., `image`, `video`, `file`) for each media library operation.

{{< img src="./release-2025-09-media-center-access-control.png" alt="News Agency Notification Settings" >}}

This enables scenarios such as:

- Restricting certain user groups to only upload and manage video content
- Allowing read-only access to specific media types for review workflows
- Granting full permissions on images while limiting file access to specific teams

A database migration automatically adds all media type permissions to existing groups to maintain backwards compatibility. However, when creating new media types after the upgrade, permissions will not be automatically granted and must be explicitly configured for each group.

### Media Center: Support Several Image Media Types

Content types can now restrict which image media types are allowed for upload, drag & drop, and selection. This enables differentiation between regular photos and specialized content like infographics, allowing different workflows, metadata sets, and dashboards for each image type.

Use cases include:

- Restricting regular articles to only allow actual photos via drag & drop and image selection
- Enabling specialized content types (like infographic articles) to only work with specific media types
- Separating workflows for different image types with distinct metadata and permissions

Configure allowed media types in the content type's editor configuration:

```js
{
  handle: 'infographic-article',
  documentType: 'article',
  editor: {
    images: {
      mediaTypes: ['infographic']
    }
  }
  // ... rest of content type config
}
```

When configured, the system restricts image operations (upload, drag & drop, media library selection) to only the specified media types for that content type.

### Target Length

The Target Length system metadata plugin now displays automatic unit conversion next to the exact number input field when the `unit` config is set to an array containing both `characters` and `lines`. The `steps` value needs to be always in `characters`.

```js
{
  handle: 'targetLength',
  type: 'li-target-length',
  ui: {
    config: {
      showExactCountCheckbox: true,
      unit: ['characters', 'lines'],  // Enables unit selection and conversion display
      steps: [
        {
          label: {en: 'S'},
          value: 100
        },
        {
          label: {en: 'M'},
          value: 200
        },
        // ...
      ]
    }
  }
}
```

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- [GHSA-xffm-g5w8-qvg7](https://github.com/advisories/GHSA-xffm-g5w8-qvg7) in `@eslint/plugin-kit`
- [CVE-2025-7783](https://github.com/advisories/GHSA-fjxv-7rqg-78g4) in `form-data`
- [CVE-2025-7339](https://github.com/advisories/GHSA-76c9-3jph-rj3q) in `on-headers`
- [CVE-2025-54798](https://github.com/advisories/GHSA-52f5-9888-hmc6) in `tmp`
- [CVE-2025-58754](https://github.com/advisories/GHSA-4hjh-wcwx-xvwj) in `axios`

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- [GHSA-xffm-g5w8-qvg7](https://github.com/advisories/GHSA-xffm-g5w8-qvg7) patched in `@eslint/plugin-kit` v2.5.5
- [CVE-2025-7783](https://github.com/advisories/GHSA-fjxv-7rqg-78g4) patched in `form-data` v2.5.5
- [CVE-2025-9288](https://github.com/advisories/GHSA-95m3-7q98-8xr5) patched in `sha.js` v2.4.12
- [CVE-2024-6783](https://github.com/advisories/GHSA-g3ch-rx76-35fx) patched in `vue-template-compiler`

We are aware of the following vulnerabilities in the Livingdocs Editor:

- [CVE-2023-44270](https://github.com/advisories/GHSA-7fh5-64p2-3v2j) vulnerability in `postcss`, it affects linters using PostCSS to parse external Cascading Style Sheets (CSS). It is not exploitable in the editor as we don't load untrusted external CSS at build time.
- [CVE-2022-25844](https://github.com/advisories/GHSA-m2h2-264f-f486), [CVE-2022-25869](https://github.com/advisories/GHSA-prc3-vjfx-vhm9), [CVE-2023-26116](https://github.com/advisories/GHSA-2vrf-hf26-jrp5), [CVE-2023-26117](https://github.com/advisories/GHSA-2qqx-w9hr-q5gx), [CVE-2023-26118](https://github.com/advisories/GHSA-qwqh-hm9m-p5hr), [CVE-2024-8372](https://github.com/advisories/GHSA-m9gf-397r-hwpg), [CVE-2024-8373](https://github.com/advisories/GHSA-mqm9-c95h-x2p6), [CVE-2024-21490](https://github.com/advisories/GHSA-4w4v-5hc9-xrr2), [CVE-2025-0716](https://github.com/advisories/GHSA-j58c-ww9w-pwp5) are all AngularJS vulnerabilities that don't have a patch available. We are working on removing all AngularJS from our code and vulnerabilities will go away when we complete the transition to Vue.js.
- [CVE-2024-9506](https://github.com/advisories/GHSA-5j4c-8p2g-v4jx) vulnerability in `vue`, an ReDoS vulnerability exploitable through inefficient regex evaluation in parseHTML function. The issue can cause excessive CPU usage but is not exploitable in the editor as we don't load untrusted HTML at runtime.

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v281.3.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.18): fix: prevent crashing server if a scheduled publication cannot be found
- [v281.3.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.17): fix(security): Upgrade pino to replace vulnerable fast-redact dependency
- [v281.3.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.16): fix: Respect component occurence and nested container order in include extraction
- [v281.3.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.15): fix(li-target-length): simplify ui config

- [v281.3.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.14): fix(retresco): Remove in-text-linked=false from URL when saving pods
- [v281.3.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.13): fix(news-agency): review feedback
- [v281.3.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.12): fix: Index documents without locale in their projects default locale
- [v281.3.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.11): fix: set created_at and updated_at on retresco request data

- [v281.3.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.10): fix(deps): Axios is vulnerable to DoS attack through lack of data size check - https://github.com/advisories/GHSA-4hjh-wcwx-xvwj
- [v281.3.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.9): fix(media-library): Expose asset changes in server events
- [v281.3.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.8): fix(opentelemetry): Correctly register opentelemetry span processor

- [v281.3.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.7): fix: Support setting migration sequence to 0 with documentApi.create
- [v281.3.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.6): fix(google-vision): Enrich images on upload
- [v281.3.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.5): fix(rubrics): allow `li-rubric-assignment` in creation flows
- [v281.3.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.4): fix(revisions): Exclude scheduled publication events
- [v281.3.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.3): fix(db): Rename 213 migrations
- [v281.3.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v281.3.2): fix(release-2025-09): Update framework to v32.9.4 (release-2025-09 tag)

### Livingdocs Editor Patches
- [v119.14.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.19): fix(assistants): stop updating componentIsSaved state after it becomes true
- [v119.14.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.18): fix: Make images and videos in ticker properties panel reactive
- [v119.14.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.17): chore(li-target-length): update tests
- [v119.14.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.16): fix: Avoid destructuring props to preserve reactivity

- [v119.14.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.15): fix(li-tree): allow nesting of li-tree items again
- [v119.14.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.14): fix(news-agency): display search results in the order they were created
- [v119.14.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.13): fix(news-agency): review feedback
- [v119.14.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.12): fix(news-agency): review feedback
- [v119.14.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.11): fix: Close lightbox when opening details view
- [v119.14.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.10): fix(deps): update dependency axios from 1.11.0 to 1.12.0 [security]
- [v119.14.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.9): fix(media library): hide additional info toggle if nothing to show

- [v119.14.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.8): fix(deps): Migrate to vue-template-compiler-patched that has security issues fixed
- [v119.14.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.7): fix(upload-center): Prevent select all error when configs are undefined
- [v119.14.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.6): fix(metadata): Check permission using uploadMediaType
- [v119.14.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.5): fix: Remove angular-sanitize
- [v119.14.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.4): fix(comments): Improve comment to component alignment on load
- [v119.14.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v119.14.3): fix(release-2025-09): Update framework to v32.9.4 (release-2025-09 tag)

---

**Icon Legend**

- Breaking changes: :fire:
- Feature: :gift:
