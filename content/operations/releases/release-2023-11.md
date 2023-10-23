---
type: release-notes
title: November 2023 Release
description: Technical Release Notes for release-2023-11
excludeFromSearch: true
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2023-11/
  - /operations/releases/release-2023-11/release-2023-11/
---

{{< release-header
  title="November 2023 Release"
  upcoming=true
  legacy=false
  current=false
  maintained=false
  branchHandle="release-2023-11"
>}}

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to master).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `master` branch) is at your own risk

## PRs to Categorize
* [Media Library Search: Boolean AND Operator](https://github.com/livingdocsIO/livingdocs-server/pull/6229)
* [fix(deps): update aws-sdk from 3.431.0 to v3.433.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6224)
* [fix(deps): update dependency nodemailer from 6.9.6 to v6.9.7 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6227)
* [Expose Desknet's hostname under `projectConfig.settings.desknet.apiEndpoint`](https://github.com/livingdocsIO/livingdocs-server/pull/6162)
* [fix(external ID): readonly config allowed](https://github.com/livingdocsIO/livingdocs-server/pull/6207)
* [Improvement/forms](https://github.com/livingdocsIO/livingdocs-editor/pull/7610)
* [fix(deps): update dependency @smithy/node-http-handler from 2.1.7 to v2.1.8 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6216)
* [fix(deps): update dependency fastify from 4.24.2 to v4.24.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7611)
* [fix(deps): update dependency fastify from 4.24.2 to v4.24.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6215)
* [fix(deps): update aws-sdk from 3.430.0 to v3.431.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6212)
* [fix(deps): update dependency @livingdocs/framework from 27.0.1 to v27.1.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7609)
* [fix(deps): update dependency @livingdocs/framework from 27.0.1 to v27.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6213)
* [Teasers: add unlink button to li-document-reference style teaser](https://github.com/livingdocsIO/livingdocs-editor/pull/7590)
* [fix(deps): update dependency cypress from 13.3.1 to v13.3.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7608)
* [🐞 Fix: create comment after visiting history](https://github.com/livingdocsIO/livingdocs-editor/pull/7605)
* [Add `generate-schema` command, which generates the project config schema](https://github.com/livingdocsIO/livingdocs-server/pull/6208)
* [fix(deps): update dependency webpack from 5.88.2 to v5.89.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7600)
* [fix(deps): update aws-sdk from 3.428.0 to v3.430.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6210)
* [fix(deps): update dependency sass from 1.69.3 to v1.69.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7604)
* [Remove legacy `li-reference` and `li-reference-list` metadata plugins](https://github.com/livingdocsIO/livingdocs-editor/pull/7569)
* [chore(deps): update dependency @livingdocs/core-server-includes from 3.0.1 to v4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6211)
* [fix(deps): update dependency fastify from 4.23.2 to v4.24.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6199)
* [fix(deps): update dependency fastify from 4.24.1 to v4.24.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7602)
* [coreApi: add registerIframePlugins()](https://github.com/livingdocsIO/livingdocs-editor/pull/7563)
* [Metadata plugin context config for all upstream plugins](https://github.com/livingdocsIO/livingdocs-server/pull/6204)
* [fix(deps): update dependency cypress from 13.2.0 to v13.3.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7536)
* [fix(deps): update dependency @babel/core from 7.23.0 to v7.23.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7599)
* [Restore the functionality of mutations to `sourceMetadata` within the `afterConversion` function affecting the target metadata when copying documents](https://github.com/livingdocsIO/livingdocs-server/pull/6196)
* [fix(deps): update dependency sass from 1.69.2 to v1.69.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7598)
* [fix(deps): update dependency openid-client from 5.6.0 to v5.6.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6198)
* [Only re-render a document list when it changes to prevent drag and drop events from failing](https://github.com/livingdocsIO/livingdocs-editor/pull/7592)
* [Includes: improve reactivity in UI / paramsSchema based form](https://github.com/livingdocsIO/livingdocs-editor/pull/7588)
* [Media library metadata validations (LIFEAT001)](https://github.com/livingdocsIO/livingdocs-editor/pull/7545)
* [Media library metadata validations (LIFEAT001) ](https://github.com/livingdocsIO/livingdocs-server/pull/6165)
* [fix(deps): update dependency sass from 1.69.1 to v1.69.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7586)
* [fix: make sure nzz special publish control behavior works again](https://github.com/livingdocsIO/livingdocs-editor/pull/7582)
* [fix print mode with publish control](https://github.com/livingdocsIO/livingdocs-editor/pull/7580)
* [fix(deps): update dependency sass from 1.69.0 to v1.69.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7578)
* [fix(deps): update dependency pino from 8.15.6 to v8.15.7 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6192)
* [Fix: show metadata form error inputs with red border](https://github.com/livingdocsIO/livingdocs-editor/pull/7572)
* [fix(deps): update dependency exifreader from 4.13.1 to v4.13.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6190)
* [chore(deps): update dependency eslint from 8.50.0 to v8.51.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6188)
* [fix(deps): update dependency sass from 1.68.0 to v1.69.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7565)
* [fix(deps): update dependency @google-cloud/storage from 7.1.0 to v7.2.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6185)
* [Fix li-tree document links without deliveries configured](https://github.com/livingdocsIO/livingdocs-editor/pull/7562)
* [fix(deps): update dependency pino from 8.15.5 to v8.15.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6184)
* [fix(deps): update aws-sdk from 3.423.0 to v3.425.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6177)
* [Reduce websocket error messages](https://github.com/livingdocsIO/livingdocs-editor/pull/7558)
* [chore(deps): update dependency pino-pretty from 10.2.2 to v10.2.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6174)
* [fix(deps): update dependency openid-client from 5.5.0 to v5.6.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6173)
* [fix(deps): update dependency pino from 8.15.3 to v8.15.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6172)
* [fix(deps): update aws-sdk from 3.420.0 to v3.423.0 (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6160)
* [Grid, Table and Widths](https://github.com/livingdocsIO/livingdocs-editor/pull/7419)
* [Command API](https://github.com/livingdocsIO/livingdocs-server/pull/6146)
* [Fix: open tasks panel when article opened from task card click](https://github.com/livingdocsIO/livingdocs-editor/pull/7552)
* [Fix AWS ClientSES use, missing `credentials` object](https://github.com/livingdocsIO/livingdocs-server/pull/6166)
* [fix(deps): update dependency pino from 8.15.1 to v8.15.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6167)
* [Use plain objects with vue-select for minimal style li-document-reference(s)](https://github.com/livingdocsIO/livingdocs-editor/pull/7528)
* [fix(video transcoding): Visual](https://github.com/livingdocsIO/livingdocs-editor/pull/7547)
* [chore(deps): update dependency chai from 4.3.9 to v4.3.10 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7544)
* [fix(deps): update dependency @smithy/node-http-handler from 2.1.5 to v2.1.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6164)
* [fix(metadata): Bundle Separator](https://github.com/livingdocsIO/livingdocs-editor/pull/7541)
* [Publish Control Error Handling improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/7527)
* [fix(deps): update dependency @livingdocs/framework from 27.0.0 to v27.0.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6161)
* [fix(deps): update dependency @livingdocs/framework from 27.0.0 to v27.0.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7537)
* [Clean up DocumentVersion class](https://github.com/livingdocsIO/livingdocs-server/pull/6153)
* [Fix error in link tool](https://github.com/livingdocsIO/livingdocs-editor/pull/7532)
* [fix(deps): update dependency sass from 1.67.0 to v1.68.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7512)
* [fix(deps): update dependency cloudinary from 1.40.0 to v1.41.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6158)
* [fix(deps): update dependency axios from 1.5.0 to v1.5.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6155)
* [fix(deps): update dependency axios from 1.5.0 to v1.5.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7531)
* [Allow overflow in properties panel include params schema form so that select field options can be displayed](https://github.com/livingdocsIO/livingdocs-editor/pull/7498)
* [Use metadata config from visible content types for metadata display filters](https://github.com/livingdocsIO/livingdocs-editor/pull/7500)
* [Use teaser style for author selection on server admin user page](https://github.com/livingdocsIO/livingdocs-editor/pull/7525)
* [Update avatar when changing user name](https://github.com/livingdocsIO/livingdocs-editor/pull/7522)
* [Add missing jsdoc for documentVersionFetcher](https://github.com/livingdocsIO/livingdocs-server/pull/5894)
* [fix(deps): update dependency @livingdocs/secure-password from 5.0.1 to v5.0.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6152)
* [fix(deps): update dependency pdfjs-dist from 3.10.111 to v3.11.174 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7519)
* [fix(deps): update dependency @livingdocs/framework from 26.1.4 to v27 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7501)
* [Update `aws-sdk` version from v2 to v3](https://github.com/livingdocsIO/livingdocs-server/pull/6114)
* [Targeted comment highlighting updates](https://github.com/livingdocsIO/livingdocs-editor/pull/7504)
* [Email config: prevent access of undefined](https://github.com/livingdocsIO/livingdocs-server/pull/6147)
* [Fix/twitter and x](https://github.com/livingdocsIO/livingdocs-server/pull/6143)
* [Destroy li-angular-component components when detached from the DOM](https://github.com/livingdocsIO/livingdocs-editor/pull/7464)
* [Fix reactivity issues for focal point previews](https://github.com/livingdocsIO/livingdocs-editor/pull/7495)
* [fix(deps): update dependency ws from 8.14.1 to v8.14.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6145)
* [fix(deps): update dependency @livingdocs/framework from 26.1.4 to v27 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6142)
* [fix(deps): update dependency sharp from 0.32.5 to v0.32.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6141)
* [Axios 401 error handling](https://github.com/livingdocsIO/livingdocs-editor/pull/7490)
* [Allow li-document-reference include param with minimal style](https://github.com/livingdocsIO/livingdocs-server/pull/6132)
* [Print Layout options have translate hack](https://github.com/livingdocsIO/livingdocs-editor/pull/7491)
* [fix(iframe directive): Twitter logo](https://github.com/livingdocsIO/livingdocs-editor/pull/7487)
* [fix(deps): update babel from 7.22.19 to v7.22.20 (master) (patch)](https://github.com/livingdocsIO/livingdocs-editor/pull/7486)
* [Improve li-document-reference and references minimal style error handling](https://github.com/livingdocsIO/livingdocs-editor/pull/7484)
* [fix(deps): update dependency @azure/storage-blob from 12.15.0 to v12.16.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6139)
* [Add tests for link tool and li-tree](https://github.com/livingdocsIO/livingdocs-editor/pull/7468)
* [fix(deps): update dependency sass from 1.66.1 to v1.67.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7481)
* [fix(deps): update dependency cypress from 13.0.0 to v13.2.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7482)
* [fix(deps): update dependency fastify from 4.23.1 to v4.23.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7480)
* [fix(deps): update dependency fastify from 4.23.1 to v4.23.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6138)
* [Notification, media library and image cropping fix](https://github.com/livingdocsIO/livingdocs-server/pull/6134)
* [fix(deps): update opentelemetry (master) (minor)](https://github.com/livingdocsIO/livingdocs-server/pull/6128)
* [fix(li tasks): Deadline](https://github.com/livingdocsIO/livingdocs-editor/pull/7455)
* [Push Messages: Make all content reachable through scrolling](https://github.com/livingdocsIO/livingdocs-editor/pull/7469)
* [fix(deps): update dependency fastify from 4.23.0 to v4.23.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6133)
* [fix(deps): update dependency fastify from 4.23.0 to v4.23.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7467)
* [fix(deps): update dependency uuid from 9.0.0 to v9.0.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6129)
* [Destroy AngularJS wrapped Vue components when they are detatched from the DOM](https://github.com/livingdocsIO/livingdocs-editor/pull/7452)
* [fix(deps): update dependency aws-sdk from 2.1454.0 to v2.1455.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6126)
* [fix(deps): update dependency fastify from 4.22.2 to v4.23.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7463)
* [Add `li-push-messages-toolbar-action` in editor toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/7418)
* [fix(deps): update dependency assert from 2.0.0 to v2.1.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7447)
* [fix(deps): update dependency aws-sdk from 2.1453.0 to v2.1454.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6118)
* [Unsubscribe pusher topics](https://github.com/livingdocsIO/livingdocs-editor/pull/7456)
* [fix(deps): update dependency ua-parser-js from 1.0.35 to v1.0.36 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6120)
* [chore(deps): update dependency eslint from 8.48.0 to v8.49.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6117)
* [chore(deps): update dependency eslint from 8.48.0 to v8.49.0 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7454)
* [Ticker Event Listener Fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/7441)
* [Don't try to lock components which do not exist](https://github.com/livingdocsIO/livingdocs-editor/pull/7440)
* [Prevent console error when computing CSS classes in history side panel](https://github.com/livingdocsIO/livingdocs-editor/pull/7450)
* [Handle less data being returned on initial panel open](https://github.com/livingdocsIO/livingdocs-editor/pull/7437)
* [Don't send document content with history list](https://github.com/livingdocsIO/livingdocs-server/pull/6110)
* [fix(deps): update dependency @google-cloud/storage from 7.0.1 to v7.1.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6111)
* [Fix duplicated filters in media library dashboards](https://github.com/livingdocsIO/livingdocs-editor/pull/7444)
* [Fix `GET /notifications/subscriptions/:documentId` status code](https://github.com/livingdocsIO/livingdocs-server/pull/6113)
* [fix(numberdot): Small](https://github.com/livingdocsIO/livingdocs-editor/pull/7438)
* [Conflict UI fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/7428)
* [fix(deps): update dependency aws-sdk from 2.1450.0 to v2.1452.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6103)
* [fix(team filter): Element order](https://github.com/livingdocsIO/livingdocs-editor/pull/7434)
* [History side panel fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/7429)
* [fix(deps): update dependency nodemailer from 6.9.4 to v6.9.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6108)
* [Correctly position apply and discard buttons in conflict UI](https://github.com/livingdocsIO/livingdocs-editor/pull/7425)
* [Show selected filter value](https://github.com/livingdocsIO/livingdocs-editor/pull/7396)
* [Cross Project Content Sharing - ImageServices](https://github.com/livingdocsIO/livingdocs-editor/pull/7417)
* [Cross Project Content Sharing - ImageServices](https://github.com/livingdocsIO/livingdocs-server/pull/6100)
* [fix(deps): update dependency @livingdocs/framework from 26.1.3 to v26.1.4 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6104)
* [fix(deps): update dependency @livingdocs/framework from 26.1.3 to v26.1.4 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7422)
* [fix(deps): update dependency @livingdocs/framework from 26.1.2 to v26.1.3 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6102)
* [fix(deps): update dependency @livingdocs/framework from 26.1.2 to v26.1.3 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7420)
* [fix(deps): update dependency jose from 4.14.5 to v4.14.6 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6098)
* [fix(deps): update dependency https-proxy-agent from 7.0.1 to v7.0.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7416)
* [Fix: Editor Sidebar breaks after opening history mode](https://github.com/livingdocsIO/livingdocs-editor/pull/7409)
* [Ticker fixes](https://github.com/livingdocsIO/livingdocs-editor/pull/7393)
* [fix(deps): update dependency aws-sdk from 2.1448.0 to v2.1450.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6094)
* [fix(deps): update dependency jose from 4.14.4 to v4.14.5 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6096)
* [fix(deps): update dependency fastify from 4.22.1 to v4.22.2 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7405)
* [fix(deps): update dependency fastify from 4.22.1 to v4.22.2 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6095)
* [fix(component lock): Restored look](https://github.com/livingdocsIO/livingdocs-editor/pull/7401)
* [Apply base filters in quick search](https://github.com/livingdocsIO/livingdocs-editor/pull/7399)
* [Fix comments parsing error](https://github.com/livingdocsIO/livingdocs-editor/pull/7383)
* [fix(deps): update dependency fastify from 4.22.0 to v4.22.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6093)
* [fix(deps): update dependency fastify from 4.22.0 to v4.22.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7395)
* [fix(deps): update dependency cypress from 12.17.4 to v13 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7378)
* [Fix/editor scrolling #5028](https://github.com/livingdocsIO/livingdocs-editor/pull/7389)
* [Update references after running hooks](https://github.com/livingdocsIO/livingdocs-server/pull/6055)
* [Handle errors in custom getDocumentIds include functions](https://github.com/livingdocsIO/livingdocs-server/pull/6078)
* [Change supported browser versions as we're using newer apis](https://github.com/livingdocsIO/livingdocs-editor/pull/7388)
* [fix(deps): update dependency aws-sdk from 2.1444.0 to v2.1448.0 (master) - autoclosed](https://github.com/livingdocsIO/livingdocs-server/pull/6074)
* [fix(deps): update dependency @babel/preset-env from 7.22.10 to v7.22.14 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7356)
* [Convert li-poster-image metadata plugin form to Vue](https://github.com/livingdocsIO/livingdocs-editor/pull/7344)
* [fix(deps): update dependency fastify from 4.21.0 to v4.22.0 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6076)
* [fix(deps): update dependency @livingdocs/framework from 26.0.1 to v26.1.1 (master)](https://github.com/livingdocsIO/livingdocs-server/pull/6088)
* [fix(deps): update dependency @livingdocs/framework from 26.0.1 to v26.1.1 (master)](https://github.com/livingdocsIO/livingdocs-editor/pull/7359)
* [Streamline when removed component label or removed text label is shown](https://github.com/livingdocsIO/livingdocs-editor/pull/7382)
* [Allow li-image metadata plugin to be used in media library metadata](https://github.com/livingdocsIO/livingdocs-editor/pull/7333)
* [Fix display filters erroring without store on multilist viewer](https://github.com/livingdocsIO/livingdocs-editor/pull/7384)
* [fix(editableCount): updated name](https://github.com/livingdocsIO/livingdocs-editor/pull/7379)
* [fix(viewEvents): make blur editable fire before blur component](https://github.com/livingdocsIO/livingdocs-editor/pull/7375)
* [Truncate document title on creation](https://github.com/livingdocsIO/livingdocs-server/pull/6084)
* [fix: pass image original dimensions for crop preview](https://github.com/livingdocsIO/livingdocs-editor/pull/7343)
* [Update `nzz` downstream branch to `release-2023-11`](https://github.com/livingdocsIO/livingdocs-editor/pull/7373)
* [Update `nzz` downstream branch to `release-2023-11`](https://github.com/livingdocsIO/livingdocs-server/pull/6083)


To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2023-11`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* [Release Newsletter Subscription](https://confirmsubscription.com/h/j/61B064416E79453D)

## System Requirements

### Suggested

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 20                                                                                       |
| NPM                            | 9                                                                                        |
| Postgres                       | 15                                                                                       |
| Elasticsearch<br/>OpenSearch   | 8.x<br/>v2.3.0                                                                           |
| Redis                          | 7                                                                                        |
| Livingdocs Server Docker Image | livingdocs/server-base:20                                                                |
| Livingdocs Editor Docker Image | livingdocs/editor-base:20                                                                |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

### Minimal

| Name                           | Version                                                                                  |
| ------------------------------ | ---------------------------------------------------------------------------------------- |
| Node                           | 18                                                                                       |
| NPM                            | 9                                                                                        |
| Postgres                       | 13                                                                                       |
| Elasticsearch<br/>OpenSearch   | 7.x<br/>1                                                                                |
| Redis                          | 6.2                                                                                      |
| Livingdocs Server Docker Image | livingdocs/server-base:18.3                                                              |
| Livingdocs Editor Docker Image | livingdocs/editor-base:18.5                                                              |
| Browser Support                | Edge >= 92, Firefox >= 90, Chrome >= 92, Safari >= 15.4, iOS Safari >= 15.4, Opera >= 78 |

## Breaking Changes 🔥

### Migrate the Postgres Database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
livingdocs-server migrate up
```

TODO: check migration

## Deprecations

## APIs :gift:

## Features

TODO (featureset not 100% defined yet)

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

### Livingdocs Editor


## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches

### Livingdocs Editor Patches


  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
