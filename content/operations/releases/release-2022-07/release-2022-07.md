---
type: release-notes
title: July 2022 Release
description: Release notes for release-2022-07
hideSectionTeaser: true
aliases:
  - /operations/releases/release-2022-07/release-2022-07/
---

{{< release-header
  title="July 2022 Release"
  upcoming=false
  legacy=false
  current=true
  maintained=true
  branchHandle="release-2022-07"
>}}

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

* Feature Webinar Recording: **TODO**
* Feature Webinar Documentation: **TODO**
* Dev Webinar Recording: **TODO**
* Dev Webinar Slides: **TODO**
* Release Newsletter Subscription: **TODO**

## System Requirements

### Suggested
|Name|Version|
|-|-|
|Node|16|
|NPM|8|
|Postgres|14|
|Elasticsearch|7|
|Redis|6|
|Livingdocs Server Docker Image|livingdocs/server-base:16|
|Livingdocs Editor Docker Image|livingdocs/editor-base:16|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|

### Minimal
|Name|Version|
|-|-|
|Node|14|
|NPM|7|
|Postgres|11 (Deprecated Postgres 11)|
|Elasticsearch|6.x (Deprecated)|
|Redis|5|
|Livingdocs Server Docker Image|livingdocs/server-base:14.3|
|Livingdocs Editor Docker Image|livingdocs/editor-base:14.3|
|Browser Support|Edge >= 80, Firefox >= 74, Chrome >= 80, Safari >= 13.1, iOS Safari >= 13.4, Opera >= 67|


## Highlights

### Publish Control - Iteration 2

The second iteration of Publish Control comes with more features:
- Embargo (prevent the publication of a document)
- Significant update
- Visible Publication Date
- Auto refresh the UI when Publish Control data have changed

Consult the [Guide on «Publish Control»]({{< ref "/guides/editor/publish-control" >}}) to learn how to configure this feature.

* [Guide](https://docs.livingdocs.io/guides/editor/publish-control/)
* [PR: Significant Update](https://github.com/livingdocsIO/livingdocs-editor/pull/5429)
* [PR: Embargo](https://github.com/livingdocsIO/livingdocs-editor/pull/5364)
* [PR: Embargo date validation](https://github.com/livingdocsIO/livingdocs-editor/pull/5413)
* [PR: Embargo Collapsible Section and Sync Status](https://github.com/livingdocsIO/livingdocs-editor/pull/5422)
* [PR: Translate API errors by code](https://github.com/livingdocsIO/livingdocs-editor/pull/5503)
* [PR: visiblePublicationDate & significantPublicationDate](https://github.com/livingdocsIO/livingdocs-server/pull/4555)
* [PR: auto refresh UI when embargo has expired](https://github.com/livingdocsIO/livingdocs-editor/pull/5500)
* [PR: setVisiblePublicationDateOverride | resetVisiblePublicationDateOverrideOnSignificantUpdate](https://github.com/livingdocsIO/livingdocs-server/pull/4563)
* [PR: Index visiblePublicationDate on publication index](https://github.com/livingdocsIO/livingdocs-server/pull/4592)

### Drag + Drop of Document Teasers

We enable you to drag + drop Document Cards onto a document to create Teaser Components. You need to configure Teaser Components using an Include Service with a `li-document-reference` param to make it work.

* [Guide](https://docs.livingdocs.io/guides/documents/includes/document-teasers/)
* [PR: Editor integration](https://github.com/livingdocsIO/livingdocs-editor/pull/5356)
* [PR: Teaser Drag and Drop](https://github.com/livingdocsIO/livingdocs-server/pull/4556)
* [PR: Add Document Dashboard to Editing Toolbar](https://github.com/livingdocsIO/livingdocs-editor/pull/5405)
* [Document Teaser Dashboards: Config for Dashboards in Document Editing Toolbar](https://github.com/livingdocsIO/livingdocs-server/pull/4525)

### 🐉 Dragon Drop

We provide you a completely rewritten and improved Drag n' Drop logic in the Livingdocs Editor. Below is a list of changes.

* The drop target is selected by an algorithm that detects the likely intended target. It no longer inspects the element under the cursor.
* All targets are fully validated for the current drag payload. When starting a drag it is possible to declare multiple component names which should be validated. This is used e.g. for document drops where multiple teaser components are candidates to be used. And which one will be used depends on the selected drag target. But no drag targets where none of these options are valid should be proposed to the user.
* New placement logic for drag markers. The markers should be more consistent and intuitive especially at the end of containers.
* Support of vertical drag markers e.g. in flexbox containers
* Display of multiple drag markers at the same time when there are multiple targets in close proximity. This happens if placement of a component is not restricted and there are containers in use.
* Small animations to make space for the current drop target. This especially helps at the beginning and end of containers where there often is no space between the container and the component.
* New container highlighting that highlights the parent container of the current target (except if it’s the root container)
* Directives are now a primary drop target as well. Users see clearly if a drop will replace a directive (e.g. on an image drop) or insert a new component
* There is no more display of placement violations this would not make sense anymore with the new drop placement algorithm where the next likely target is selected.
* Drags are properly canceled when ending the drag outside of the iframe.

References:
* [PR: Framework](https://github.com/livingdocsIO/livingdocs-framework/pull/653)

### Dashboard Improvements

Currently we are working hard on the improvement of Dashboards. Here you have a list of changes:

**Table Dashboard**
* [Drag + Drop](https://github.com/livingdocsIO/livingdocs-editor/pull/5313)
* [Document ID search](https://github.com/livingdocsIO/livingdocs-editor/pull/5347)

**Media Library Dashboard**
* [Media ID search](https://github.com/livingdocsIO/livingdocs-editor/pull/5389)
* [Show revoked images](https://github.com/livingdocsIO/livingdocs-server/pull/4534)

**Includes**
* [Define Dashboards for Include References](https://github.com/livingdocsIO/livingdocs-server/pull/4515)

### External Systems

External Systems define a relation to a source system. Usually this is used when an old CMS imports articles to Livingdocs.
This first version provides links to the source system via the Table Dashboard action menu.

* [Documentation External Systems](https://docs.livingdocs.io/reference-docs/project-config/external-systems/)
* [Documentation Metadata Plugin li-external-id](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list/#li-external-id)
* [PR: Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5443)
* [PR: Server](https://github.com/livingdocsIO/livingdocs-server/pull/4548)

### Comyan Integration

We did a few more steps to make the Comyan integration better.

- Improved Security
- Use the JSON API from Comyan instead of XML (better handling of special characters)
- Improved asset duplication check
- Image usage report to Comyan

* [Project Config Example](https://docs.livingdocs.io/reference-docs/project-config/settings/#comyan)
* [PR: Use JSON format](https://github.com/livingdocsIO/livingdocs-server/pull/4546)
* [PR: Use MediaLibraryEntry model in the editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5439)
* [PR: Move Comyan secure request to server](https://github.com/livingdocsIO/livingdocs-server/pull/4426)
* [PR: Image usage report](https://github.com/livingdocsIO/livingdocs-server/pull/4545)

### Desk Net Publication Status Sync

TODO@ajwild: add description + (guide)

* [PR: Categories and Publications are mapped correctly](https://github.com/livingdocsIO/livingdocs-server/pull/4517)
* [PR: Better error handling on server](https://github.com/livingdocsIO/livingdocs-server/pull/4456)
* [PR: Better error handling on editor](https://github.com/livingdocsIO/livingdocs-editor/pull/5302)
* [PR: Fix update function](https://github.com/livingdocsIO/livingdocs-server/pull/4452)
* [PR: Desk-Net Refactoring](https://github.com/livingdocsIO/livingdocs-server/pull/4576)


### New oEmbed Integration

We added new oEmbed include services for Facebook, Instagram, Spotify, Datawrapper and Podigee.

* [Guide](https://docs.livingdocs.io/guides/documents/includes/oembed/)
* [PR: Instagram + Facebook](https://github.com/livingdocsIO/livingdocs-server/pull/4570)
* [PR: Datawrapper + Spotify](https://github.com/livingdocsIO/livingdocs-server/pull/4579)

## Breaking Changes :fire:

### Migrate the database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run `livingdocs-server migrate up` to update to the newest database scheme
# migration -178-extend-media-library-state.js
livingdocs-server migrate up
```

### Drop Postgres 10 support :fire:

🔥 Drop Postgres 10 support

* [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4541)

### Remove Component Library and ContentType config UI :fire:

:fire: The possibility to view edit components and content-types and their metadata is removed from the Project Config UI in the editor.
This feature hasn't been used by customers in production for a while, and it was badly maintained. We want to invest more into the CLI instead.

References:
- [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5342)

### Remove Several Server Configs :fire:

* 🔥 remove deprecated `serverConfig.levelUpAdpater`, use `serverConfig.kv.levelUpAdapter` instead
* 🔥 remove deprecated `serverConfig.levelDbAdapter`, use `serverConfig.kv.levelUpAdapter` instead
* 🔥 remove deprecated `serverConfig.db`, use `serverConfig.kv.levelUpAdapter` instead
  * ℹ️ Only `serverConfig.kv.levelUpAdapter` has an effect on the routing feature.
* 🔥 remove deprecated `serverConfig.search.imageDocumentIndex`, `use serverConfig.search.mediaLibraryIndex` instead

References:
- [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4455)

### Change DB config preference :fire:

🔥 Change db preference of server config - `db.*` configs override `db.connectionString` values

References:
- [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4457)

### Remove option to use comyan images in media library :fire:

Initially, we implemented the option to have a media library entry that points to an external comyan image without uploading the image in Livingdocs. Since no customers is using this and we don't want to use the media library this way, we remove the option.

:fire: The Project Config flag `settings.integrations.comyan.uploadImagesFromComyan` has been removed. If you have this set to `true` you can just remove it, no change in behavior will result. If you have this set to `false` please contact us as the option is not supported anymore.

References:
- [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4562)

### Remove Deprecated Incoming References from public API (beta endpoints) :fire:

🔥 Remove `incoming*References` endpoints that have moved to `/api/v1/*` from `/api/beta/*`.

- 🔥 Remove beta endpoint `/api/beta/documents/:documentID/incomingDocumentReferences`
- 🔥 Remove beta endpoint `/api/beta/documents/:id/incomingMediaReferences`
- 🔥 Remove beta endpoint `/api/beta/mediaLibrary/:mediaId/incomingDocumentReferences`
- 🔥 Remove beta endpoint `/api/beta/mediaLibrary/:mediaId/incomingMediaReferences`

- [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4544)

### Remove deprecated publicationApi functions :fire:

- :fire: Remove `publicationApi.getLatestPublications`.
  Please migrate to `publicationApi.getLatestPublicationsV2`.
    Here's the exact implementation of the old logic using the new function:
    ```js
    async function getLatestPublications ({
      offset, limit,
      project_id, // eslint-disable-line
      projectId = project_id,
      channelId
    }) {
      if (limit > 100) {
        throw validationError('getLatestPublications: maximum limit is 100')
      }

      const documentVersions = await publicationApi.getLatestPublicationsV2({
        projectId,
        channelId,
        offset,
        limit: limit || 100,
        sort: ['publishedAt', 'desc']
      })

      return {documentVersions}
    }
    ```
- :fire: Remove `publicationApi.getPublicationsByDate`.
  Please migrate to `publicationApi.getLatestPublicationsV2`.

  Here's the exact implementation of the old logic using the new function:
  ```js
  function getPublicationsByDate ({projectId, createdAt, limit, offset}) {
    if (!projectId) throw validationError(`The parameter projectId is required.`)

    return publicationApi.getLatestPublicationsV2({
      projectId,
      limit,
      offset,
      documentType: 'article',
      publishedAt: createdAt,
      sort: ['publishedAt', 'desc']
    })
  }
  ```

References:
- [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4555)

### Metadata Plugins: Add configSchema and uiSchema Validation :fire:

We added 2 properties `configSchema` and `uiSchema` to a metadata plugin where one can define a schema validation. If you want to know more about the motivation and a fallback (`metadataPluginsToIgnoreForConfigValidation`), you get some insights [here](https://github.com/livingdocsIO/livingdocs-server/pull/4296).

References:
- [Metadata Plugin List Documentation](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list)
- [li-integer PR](https://docs.livingdocs.io/reference-docs/document/metadata/metadata-plugin-list/#li-integer)

### Error on Metadata Plugin registration :fire:

🔥 When registering a metadata plugin twice, you get now an error message (before, the second plugin was ignored, which lead to confusion).

References:
- [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4483)

### Remove Core Plugin Whitelist :fire:

🔥 Server config `documents.metadata.corePluginWhitelist` removed. Core metadata plugins can not be whitelisted anymore. All plugins are loaded.

References:
- [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4484)

### Desk Net Config Update :fire:

- 🔥 `server.features.api('li-desknet-integration').integrationApi` moved to `server.features.api('li-desknet-integration')`
- 🔥 `projectConfig.settings.desknet.enabled` must be set to `true` to use all Desk-Net features
- 🔥 `projectConfig.settings.desknet.platformId` is no longer used to determine which publication to use. The `publicationId` stored in metadata is used, with a fallback to the one provided by Desk-Net in the request data.
- 🔥 `projectConfig.settings.desknet.credentials` is now required
- 🔥 `projectConfig.settings.desknet.contentTypes.standard` is now required
- 🔥 `desknetApi.handlers.createFromDesknet()` and `desknetApi.handlers.updateFromDesknet()` will not define the `cmsEditLink` property in the return value if there is no publication linked in the metadata
- 🔥 `desknetApi.handlers.updateFromDesknet()` will not update the metadata if the update request is for a publication which does not match the `publicationId` stored in the metadata value
- 🔥 `desknetApi.libs` are no longer exposed
- 🔥 `desknetApi.hooks` are no longer exposed
- 🔥 `desknetApi.handlers` have been moved to desknetApi root
- 🔥 `desknetApi.getFullElement()` is no longer exposed
- 🔥 `desknetApi.getElement()` is no longer exposed
- 🔥 `desknetApi.sendUpdateRequestToDesknet()` is no longer exposed
- 🔥 `desknetApi` methods will throw errors instead of logging warnings
- 🔥 `publication.id` and `publication.platform` are required for `POST /publication` endpoint
- 🔥 `publication.id` is required for `PUT /publication/:id` endpoint

References:
- [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/4576)

### Design Class Updates :fire:

:fire: renamed `.ld-switch` to `.li-switch`
:fire: The <input> element no longer requires the class `ld-switch__toggle`

Should you have any switch buttons in your downstream, update your markup according to the changes mentioned above.

References:
- [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5324)

### Design Cleaning :fire:

After removing the whole Project Setup from Livingdocs some cleaning was necessary. No longer needed CSS had to go. At the same time some underused or generally unused CSS also was removed.

**The following CSS classes have been deleted:**
`.api-client-item__name`, `.api-client-item__scopes`, `.ld-application-menu__button`, `.ld-article-panel--alternative-bg`, `.ld-article-panel--styleguide`, `.ld-burst--half`, `.ld-burst--slim`, `.ld-burst--negative-sides`, `.ld-comp-crumbs` and BEM children, `.ld-component-list--thirds`, `.ld-component-list--halves`, `.ld-component-list__action--hover`, `.ld-component-list__item--highlight`, `.ld-component-list__item--new`, `.service-turned-off`, `.ld-document-filter`, `.ld-drop-zone` and BEM children, `.ld-legend`, `.ld-metadata-panel` and modifiers as well as BEM children, `.ld-navigation`, `.ld-panel__header__title--has-action`, `.ld-panel__header__title-action`, `.violation-item`, `.monaco-iframe-container`, `.ld-box`, `.ld-user-archived`, `.configuration-section`, `.service-turned-off`, `.configuration-section--last`, `.ld-splash`, `.ld-page__header`, `.ld-page__title`, `.ld-page--narrow-centered`, `.ld-arrange` and modifiers as well as BEM children, `.ld-card--flat-bare`, `.ld-card--bare`, `.ld-circle`, `.li-droplist-entry--tabs`, `.ld-article-list-panel`, `.ld-document-state-icon` and modifiers as well as BEM children, `.li-tab`and modifiers, `.ld-media-edit-image`

**Required Actions**
You are highly encouraged to update your markup if you should be using any of the deleted or renamed classes. In order to ease that process, there is a file you can `@import` in your custom SCSS to get support for the mentioned classes and variables:
In the SCSS file you have configured as `CUSTOM_STYLE_PATH_BEFORE` or `CUSTOM_STYLE_PATH_AFTER` add this line at the top:
```sass
@import "~styles/backwards-compatibility/release-2022-07.scss";
```
This will define the removed classes within your SCSS file tree. Your custom UI will most probably look just fine. From there on you can refactor your code and remove the `@import "~styles/backwards-compatibility/release-2022-07.scss";` after you are done. We will keep this file around for some time, but it will eventually get removed. If you have any questions about this, don't hesitate to contact us.

References:
- [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5494)

### Multi Selection can be disabled :fire:

Whilst we continue to refine the selection across multiple components we have enabled a config to turn it off. In the editable settings set `multiEditablesTextSelection: false`.

- [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/5416)
- [Documentation](https://docs.livingdocs.io/reference-docs/editor-extensions/editor-configuration/editing-features/#multi-select-and-multi-text-select)
## Deprecations

## APIs :gift:

### Archive Asset via Public API

Allows the patch operation `archive` via public API to archive an asset.

* [Documentation](https://docs.livingdocs.io/reference-docs/public-api/media-library/)
* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4532)

### Unpublish Document via Public API

* [Documentation](https://docs.livingdocs.io/reference-docs/public-api/imports/documents/)
* [PR](https://github.com/livingdocsIO/livingdocs-server/pull/4459)

## Other Changes

### Security

### Design
* [Collapse Indicator](https://github.com/livingdocsIO/livingdocs-editor/pull/5343)
* [Design Improvements](https://github.com/livingdocsIO/livingdocs-editor/pull/5382)
* [Design Improvements II](https://github.com/livingdocsIO/livingdocs-editor/pull/5441)

### Features
* [Metadata View: Groups are now shown in separate and collapsible cards](https://github.com/livingdocsIO/livingdocs-editor/pull/5249)
* [Allow formatting of log levels as strings](https://github.com/livingdocsIO/livingdocs-server/pull/4458)
* [Add 'metadata' option for viewAfterDocumentCreation setting](https://github.com/livingdocsIO/livingdocs-editor/pull/5424)
* [Media Library: Support id, key, filename, url in search](https://github.com/livingdocsIO/livingdocs-server/pull/4398)
* [Directive doc-links support now also document references (beside external links)](https://github.com/livingdocsIO/livingdocs-editor/pull/5323)

### Improvements
* [Images: Shows Error when the drop position is not allowed](https://github.com/livingdocsIO/livingdocs-editor/pull/5414)
* [Update only remotely changed metadata properties](https://github.com/livingdocsIO/livingdocs-editor/pull/5518)
* [Import: Use Project Config design when not passing infos to the import](https://github.com/livingdocsIO/livingdocs-server/pull/4495)
* [Link Tool: Show original URL instead of redirect target in website info](https://github.com/livingdocsIO/livingdocs-editor/pull/5406)
* [Config Feedback: Project Config: Human readable error pointer](https://github.com/livingdocsIO/livingdocs-server/pull/4462)
* [Config Feedback: Improved feedback on Metadata Plugin registration](https://github.com/livingdocsIO/livingdocs-server/pull/4483)
* [Better Validation Errors for Schemas with Discriminator Schema](https://github.com/livingdocsIO/livingdocs-server/pull/4473)

### Bugfixes
* [Prevent image download when GoogleVision is disabled](https://github.com/livingdocsIO/livingdocs-server/pull/4567)
* [Fix Cut and Paste](https://github.com/livingdocsIO/livingdocs-editor/pull/5476)
* [Document Soft Lock not disabled by entering Publish View](https://github.com/livingdocsIO/livingdocs-editor/pull/5322)
* [Document Soft Lock: An empty Softlock does not change publish behavior anymore](https://github.com/livingdocsIO/livingdocs-editor/pull/5394)
* [Formatting Toolbar: Don't show custom elements when editable is on plainText mode.](https://github.com/livingdocsIO/livingdocs-editor/pull/5415)
* [Allow loading of main navigation (and whole UI) when user has no project assigned](https://github.com/livingdocsIO/livingdocs-editor/pull/5333)
* [Comments: Deleted with parent component | Multiple words not highlighted | Thread count is reactive](https://github.com/livingdocsIO/livingdocs-editor/pull/5153)
* [Comments: Comments on previously deleted components no longer stop the editor from showing all the existing comments](https://github.com/livingdocsIO/livingdocs-editor/pull/5397)
* [Dashboards: Ignore documentType filter when contentType filter present](https://github.com/livingdocsIO/livingdocs-editor/pull/5368)
* [Update Upload button status when the upload is cancelled](https://github.com/livingdocsIO/livingdocs-editor/pull/5381)

## Patches

Here is a list of all patches after the release has been announced.

### Livingdocs Server Patches
- [v189.0.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v189.0.4): chore(indexing): Index publish control values
- [v189.0.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v189.0.3): fix(referenceMigration): Supports all list configs
- [v189.0.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v189.0.2): fix(oembed): add spotify and data wrapper
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v??.?.?): text

### Livingdocs Editor Patches
- [v80.38.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v80.38.5): fix(metadata): correct metadata service deprecation notice
- [v80.38.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v80.38.4): fix(dashboards): query and filter caches are not shared anymore between different unrelated document selection dialogs
- [v80.38.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v80.38.3): fix(scroll in readonly): Fixed for metadata screen
- [v??.?.?](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v??.?.?): text

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
