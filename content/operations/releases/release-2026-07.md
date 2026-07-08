---
type: release-notes
title: July 2026 Release
description: Technical Release Notes for release-2026-07
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2026-07

systemRequirements:
  suggested:
    - name: Node
      version: 24
    - name: NPM
      version: 11
    - name: Postgres
      version: 17
    - name: Elasticsearch
      version: 9
    - name: OpenSearch
      version: 3
    - name: Redis
      version: 8
    - name: Livingdocs Server Docker Image
      version: livingdocs/server-base:24
    - name: Livingdocs Editor Docker Image
      version: livingdocs/editor-base:24
    - name: Browser Support
      version: Chrome >= 145, Edge >= 145, Firefox >= 148, Safari >= 26.3

  minimal:
    - name: Node
      version: 22.17.1
    - name: NPM
      version: 10
    - name: Postgres
      version: 14
    - name: Elasticsearch
      version: 8
    - name: OpenSearch
      version: 2
    - name: Redis
      version: 6.2
    - name: Livingdocs Server Docker Image
      version: livingdocs/server-base:22
    - name: Livingdocs Editor Docker Image
      version: livingdocs/editor-base:22
    - name: Browser Support
      version: Chrome >= 138, Edge >= 138, Firefox >= 140, Safari >= 18.6
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `main` branch) is at your own risk

## PRs to Categorize
- [Bump minor version for release management](https://github.com/livingdocsIO/livingdocs-server/pull/9673)
- [Authorization Server](https://github.com/livingdocsIO/livingdocs-editor/pull/11154)
- [Authorization Server](https://github.com/livingdocsIO/livingdocs-server/pull/9437)
- [Remove huGO print integration and print edit mode (LIBREAKING077)](https://github.com/livingdocsIO/livingdocs-editor/pull/11294)
- [Remove huGO print integration and channel editMode (LIBREAKING077)](https://github.com/livingdocsIO/livingdocs-server/pull/9663)
- [Image Card Enhancements: Tags](https://github.com/livingdocsIO/livingdocs-editor/pull/11220)
- [Image Card Enhancements: Tags](https://github.com/livingdocsIO/livingdocs-server/pull/9547)
- [fix(search): Prevent search cheat sheet from being clipped in side panel](https://github.com/livingdocsIO/livingdocs-editor/pull/11302)
- [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/9669)
- [fix(deps): update dependency @livingdocs/framework from 34.1.6 to v34.1.7 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11299)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/9649)
- [Remove search.metadataMapping (LIDEP069)](https://github.com/livingdocsIO/livingdocs-server/pull/9406)
- [feat(search): Add expert search display filter](https://github.com/livingdocsIO/livingdocs-editor/pull/11211)
- [Usage Log Billing Part 4](https://github.com/livingdocsIO/livingdocs-editor/pull/11254)
- [Usage Log Billing Part 4](https://github.com/livingdocsIO/livingdocs-server/pull/9609)
- [Store li-buy-in default expiry at UTC midnight](https://github.com/livingdocsIO/livingdocs-editor/pull/11285)
- [Build media library mapping from config](https://github.com/livingdocsIO/livingdocs-server/pull/9664)
- [Remove publishType references (LIDEP074)](https://github.com/livingdocsIO/livingdocs-editor/pull/11134)
- [Remove publishType from contentTypes and deliveries (LIDEP074)](https://github.com/livingdocsIO/livingdocs-server/pull/9408)
- [Usage Log Billing Part 3](https://github.com/livingdocsIO/livingdocs-editor/pull/11245)
- [Usage Log Billing Part 3](https://github.com/livingdocsIO/livingdocs-server/pull/9600)
- [feat(search): Add search syntax cheat sheet for simple query dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/11222)
- [feat(indexing): Add Norwegian language support and media library full-text search](https://github.com/livingdocsIO/livingdocs-server/pull/9542)
- [License profiles](https://github.com/livingdocsIO/livingdocs-editor/pull/11201)
- [License profiles](https://github.com/livingdocsIO/livingdocs-server/pull/9491)
- [Show component groups with translated labels](https://github.com/livingdocsIO/livingdocs-editor/pull/11273)
- [chore(deps): update dependency eslint from 10.5.0 to v10.6.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9643)
- [chore(deps): update dependency webpack from 5.108.0 to v5.108.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11269)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11260)
- [Prevent li-metadata-translations save on open](https://github.com/livingdocsIO/livingdocs-editor/pull/11244)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11238)
- [Usage Log Billing Part 2](https://github.com/livingdocsIO/livingdocs-server/pull/9501)
- [Image Collections & Inbox: Auto-scroll near edges while dragging](https://github.com/livingdocsIO/livingdocs-editor/pull/11084)
- [fix(test): upgrade mocha to 12.0.0-rc.1 and use renamed cli.js entry](https://github.com/livingdocsIO/livingdocs-server/pull/9591)
- [Design/history side panel brush up](https://github.com/livingdocsIO/livingdocs-editor/pull/11210)
- [fix(blob-store): prevent S3 socket exhaustion on partial image reads](https://github.com/livingdocsIO/livingdocs-server/pull/9558)
- [fix(deps): update dependency nodemailer from 8.0.11 to 9.0.1 [security] (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9562)
- [fix(channel-config): allow nb-NO and nn-NO in translatable strings](https://github.com/livingdocsIO/livingdocs-server/pull/9557)
- [Add Retresco main entity toggle](https://github.com/livingdocsIO/livingdocs-server/pull/9508)
- [Add Retresco main entity toggle](https://github.com/livingdocsIO/livingdocs-editor/pull/11205)
- [Replace Semantic Release Check from Vercel to GitHub Action to be more reliable](https://github.com/livingdocsIO/livingdocs-server/pull/9553)
- [chore(deps): update eslint from 10.4.1 to v10.5.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11225)
- [Show file type error in upload center dialog](https://github.com/livingdocsIO/livingdocs-editor/pull/11167)
- [fix(deps): update dependency sharp from 0.34.5 to ^0.35.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9540)
- [Keep items in inbox on drop when configured](https://github.com/livingdocsIO/livingdocs-editor/pull/11214)
- [Keep items in inbox on drop when configured](https://github.com/livingdocsIO/livingdocs-server/pull/9521)
- [fix(deps): update dependency unsplash-js from 7.0.20 to v8 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9497)
- [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/9546)
- [Remove deprecated NZZ search properties (LIDEP070)](https://github.com/livingdocsIO/livingdocs-server/pull/9407)
- [Usage Log Billing Part 1](https://github.com/livingdocsIO/livingdocs-editor/pull/11192)
- [Usage Log Billing Part 1](https://github.com/livingdocsIO/livingdocs-server/pull/9485)
- [Seeding media permissions](https://github.com/livingdocsIO/livingdocs-server/pull/9507)
- [chore(deps): update dependency undici from 8.3.0 to v8.4.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9518)
- [Image Collections: Check for Unique Title](https://github.com/livingdocsIO/livingdocs-editor/pull/11184)
- [Image Card Enhancements: showLabel & maxLineCount](https://github.com/livingdocsIO/livingdocs-server/pull/9500)
- [Pass workspace to iframe and twitter doc-html embeds](https://github.com/livingdocsIO/livingdocs-editor/pull/11204)
- [Image Card Enhancements: showLabel & maxLineCount](https://github.com/livingdocsIO/livingdocs-editor/pull/11203)
- [fix(deps): update dependency pdfjs-dist from 5.7.284 to v6 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11194)
- [Fix the REPL crashing on startup](https://github.com/livingdocsIO/livingdocs-server/pull/9499)
- [Image Collections: Add batch editing of metadata to image collections batch actions and hide action pill when deleting items](https://github.com/livingdocsIO/livingdocs-editor/pull/11178)
- [Copy document inbox on copy and print flows](https://github.com/livingdocsIO/livingdocs-server/pull/9438)
- [chore(deps): update eslint from 10.4.0 to v10.4.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11185)
- [chore(deps): update dependency exifreader from 4.39.1 to v4.40.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9477)
- [fix(upload): Enable save button when EXIF extraction fills required metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/11177)
- [Show document translations of available languages after deleting a language](https://github.com/livingdocsIO/livingdocs-editor/pull/11170)
- [Correct default crop computation for large images with use2025Behavior](https://github.com/livingdocsIO/livingdocs-server/pull/9457)
- [Design/Compact Floating Panel](https://github.com/livingdocsIO/livingdocs-editor/pull/11162)
- [Show media library entry counts on project details](https://github.com/livingdocsIO/livingdocs-editor/pull/11131)
- [List reference labels](https://github.com/livingdocsIO/livingdocs-editor/pull/11157)
- [fix(deps): update dependency @livingdocs/framework from 34.1.2 to v34.1.3 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11159)
- [fix(deps): update dependency @livingdocs/framework from 34.1.2 to v34.1.3 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9445)
- [Remove translations missing from the editing API update payload](https://github.com/livingdocsIO/livingdocs-server/pull/9404)
- [Hide internal usage log purposes when downloading images](https://github.com/livingdocsIO/livingdocs-editor/pull/11132)
- [Design/Scrollbars](https://github.com/livingdocsIO/livingdocs-editor/pull/11021)

- [Expose `getAllKeysForMediaLibraryEntry` in Public API](https://github.com/livingdocsIO/livingdocs-server/pull/9312)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11136)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/9419)
- [Remove #lib alias](https://github.com/livingdocsIO/livingdocs-server/pull/9409)
- [Add stats endpoint for total media library entries per project](https://github.com/livingdocsIO/livingdocs-server/pull/9402)
- [Remove Google Vision integration (LIDEP073)](https://github.com/livingdocsIO/livingdocs-server/pull/9397)
- [Remove Google Vision integration (LIDEP073)](https://github.com/livingdocsIO/livingdocs-editor/pull/11129)
- [chore: Migrate signup screen to vue](https://github.com/livingdocsIO/livingdocs-editor/pull/11076)
- [Only generate statistics and references for read migrations when there is content](https://github.com/livingdocsIO/livingdocs-server/pull/9389)
- [Fix flaky Playwright tests](https://github.com/livingdocsIO/livingdocs-editor/pull/11055)
- [fix(drafts): Reload editor when document contentType changes via remote update](https://github.com/livingdocsIO/livingdocs-editor/pull/11099)
- [Remove unused functions in auth api](https://github.com/livingdocsIO/livingdocs-server/pull/9374)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/9375)
- [fix(documents): Serialize content in transform functions to generate component IDs](https://github.com/livingdocsIO/livingdocs-server/pull/9368)
- [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/9381)
- [fix(deps): update dependency @livingdocs/framework from 34.1.1 to v34.1.2 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9372)
- [fix(deps): update dependency @livingdocs/framework from 34.1.1 to v34.1.2 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11101)
- [Image Collections: Improve config for main navigation item](https://github.com/livingdocsIO/livingdocs-editor/pull/11066)
- [fix(upload): validation state for single images](https://github.com/livingdocsIO/livingdocs-editor/pull/11065)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-editor/pull/11078)
- [fix(includes): li-string-list value not shown immediately in include service params panel](https://github.com/livingdocsIO/livingdocs-editor/pull/11051)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/9341)
- [chore(deps): update dependency sinon from 21.1.2 to v22 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9349)
- [Patch vulnerabilities [main]](https://github.com/livingdocsIO/livingdocs-server/pull/9325)
- [fix: batch editing validation](https://github.com/livingdocsIO/livingdocs-editor/pull/11038)
- [fix(deps): update dependency @livingdocs/framework from 34.1.0 to v34.1.1 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11060)
- [fix(deps): update dependency @livingdocs/framework from 34.1.0 to v34.1.1 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9326)
- [Hide state of media source items](https://github.com/livingdocsIO/livingdocs-editor/pull/11052)
- [fix(deps): update opentelemetry (main) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/9318)
- [fix(deps): update dependency @livingdocs/framework from 34.0.2 to v34.1.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/9307)
- [fix(deps): update dependency @livingdocs/framework from 34.0.2 to v34.1.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11045)
- [Use publish button "release" label for issue pages](https://github.com/livingdocsIO/livingdocs-editor/pull/11041)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2026-07`, read on.

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

## Breaking Changes :fire:

## Deprecations

## Features :gift:

### Get All Media Library Entry Keys for Cache Purging :gift:

Sometimes clearing image caches after a revoke or modification is handled by external systems. In order to do this effectively all variant keys must also be cleared. To support this a new `GET /api/:apiVersion/mediaLibrary/:id/keys` endpoint has been added to the Public API. The `:apiVersion` must be 2026-03 or above. The return value of the endpoint will look like this:

```js
{
  results: ['my/key.jpg', 'my/replaced-key.jpg', 'my/translated-key.jpg', 'v/my/variant-key.webp']
}
```

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
