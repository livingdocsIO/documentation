---
type: release-notes
title: April 2020 Release
description: Release notes for release-2020-04
hideSectionTeaser: true
excludeFromSearch: true
---

{{< release-header 
  title="April 2020 Release"
  upcoming=false
  legacy=true
  current=false
  maintained=false
  branchHandle="release-2020-04"
>}}

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

#### 📬Release Newsletter

[View the newsletter for this release](http://createsend.com/t/j-0F1302733E9082472540EF23F30FEDED)
or [subscribe for future releases](https://confirmsubscription.com/h/j/61B064416E79453D)


# Repositories

This release consists of the following new versions of the `livingdocs-server` and the `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `release-2020-04`
`@livingdocs/editor` | `release-2020-04`

## Livingdocs Server
How to require the server in your package.json:
```json
"dependencies": {
  "@livingdocs/server": "release-2020-04",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-YYYY-MM

### Livingdocs Server Patches
- [v94.1.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.15): chore: remove downstream tests from ci
- [v94.1.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.14): fix: rename source to eventSource in listhook param
- [v94.1.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.13): fix: add getRoutePart for core li-language plugin
- [v94.1.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.12): fix: trigger ci
- [v94.1.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.11): fix(references): add onlyPublished to e2e
- [v94.1.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.10): fix: update framework to release-2020-04 reference
- [v94.1.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.9): fix(data-sources): pass projectId, userId to the fetch function
- [v94.1.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.8): chore: Fix named functions
- [v94.1.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.7): fix: add publicationId and publicationDate to public_api output
- [v94.1.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.6): fix(document): add references on create and save
- [v94.1.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.5): fix(framework): update to 13.4.0
- [v94.1.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.4): import: add service url to image import
- [v94.1.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.3): core server includes: update to 0.1.2
- [v94.1.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.2): doc-queries: rename dateFilter to rangeFilter
- [v94.1.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.1.1): include source in fulltext search for media library assets



## Livingdocs Editor
How to require the editor in your package.json:
```json
"dependencies": {
  "@livingdocs/editor": "release-2020-04",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-YYYY-MM

### Livingdocs Editor Patches
- [v49.5.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.32): fix: remove nzz step from drone.yml
- [v49.5.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.38): fix(resolve-conflicts): check only on content, document.version and userId
- [v49.5.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.31): fix(resolve-conflicts): check only on content, document.version and userId
- [v49.5.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.30): test(conflict): add tests
- [v49.5.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.29): fix: hide custom document preview for print
- [v49.5.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.28): chore: skip failing ci test
- [v49.5.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.27): fix(framework): update framework to fix chrome 83 bug
- [v49.5.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.26): fix: bp settings icon
- [v49.5.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.25): fix(print): Fix magnify icons in print layout selector
- [v49.5.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.24): fix(login): support query state params
- [v49.5.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.23): chore: incorporate feedback
- [v49.5.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.22): fix: support edge 18
- [v49.5.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.21): fix(framework): upgrade framework to 13.4.2
- [v49.5.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.20): fix: add missing icons
- [v49.5.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.19): fix(side-panel): custom document previews
- [v49.5.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.18): fix(copy): allow copy even if documentCreationDisabled is set
- [v49.5.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.17): chore(testrail): add ids
- [v49.5.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.16): fix(lists): prevent deletion on return press
- [v49.5.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.15): fix: update framework to release-2020-04 reference
- [v49.5.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.14): chore(framework): update to 13.4.1
- [v49.5.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.13): fix(references): trigger digest refresh after loading references
- [v49.5.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.12): fix(references): behaviour when record is deleted
- [v49.5.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.11): fix: correct image uploads and small delay upon submittion of image metadata
- [v49.5.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.10): fix: correctly replace images on DnD
- [v49.5.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.9): fix: cleanup pr and integrate feedback
- [v49.5.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.8): fix(document): moved reference update to server
- [v49.5.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.7): chore: rename variable
- [v49.5.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.6): fix(publish): show metadata validation error
- [v49.5.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.5): fix(history): change default history mode colors to variants with higher contrast
- [v49.5.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.4): design(history): More button

- Centered the more button in history sidepanel
- [v49.5.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.3): correctly resend email on expired token
- [v49.5.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.2): media: extract image source from media library images
- [v49.5.1](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v49.5.1): core-plugins: language and category selection


# Highlights

## UI updates :tada:

We improved a whole bunch of small UI stuff. Check all the nice screenshots in the references.

References:
  * [Indicate Unpublished Changes](https://github.com/livingdocsIO/livingdocs-editor/pull/3335)
  * [Design Mobile Improvements pt1](https://github.com/livingdocsIO/livingdocs-editor/pull/3341)
  * [Design Mobile Improvements pt2](https://github.com/livingdocsIO/livingdocs-editor/pull/3348)
  * [Design Mobile Improvements pt3](https://github.com/livingdocsIO/livingdocs-editor/pull/3351)
  * [Design Mobile Improvements pt4](https://github.com/livingdocsIO/livingdocs-editor/pull/3356)

## Comyan Integration :tada:

Comyan is beside Hugo the second Asset Management System we have integrated into Livingdocs.

To use the feature, activate Comyan in the environment config on the server (see example). As a next step you
can configure the Comyan integration in the project setup of the editor under the menu item "Intergrations - Comyan".

```js
integrations: {
  comyan: {
    allowed: true
  }
}
```

References:
  * [Documentation](https://github.com/livingdocsIO/livingdocs-editor/pull/3388)
  * [UI](https://github.com/livingdocsIO/livingdocs-editor/pull/3333)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3388)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/2849)

## Media Library Improvements :tada:

The Media Library experienced 2 important improvements.
- Gets a list of documents in the Media Library where the current image is embedded into
- It's possible to force the user to enter image metadata before uploading an image

References:
  * Image references
    * [Editor UI](https://github.com/livingdocsIO/livingdocs-editor/pull/3380)
    * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3350)
    * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/2854)
  * Enter metadata before image upload
    * [Documentation](https://github.com/livingdocsIO/livingdocs/pull/290)
    * [Editor UI](https://github.com/livingdocsIO/livingdocs-editor/pull/3358)
    * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/2873)


## Abuse Detection :tada:

Enabled abuse detection sends users a notification when a new device logged in.

References:
  * [Documentation](https://docs.livingdocs.io/reference-documentation/server/config#new-login-device-detection)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/2852)


## Character Limit for Directives :tada:

Support a character limit on directives of a component. The character limit is configured in the design on a directive with the `maxLength` property.

References:
  * [UI](https://github.com/livingdocsIO/livingdocs-editor/pull/3400)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/2864)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3359)

## Transform multiple Components in one Step :tada:

When selecting multiple components in the editor and they have the same type, one can transform them into another type within one step.

References:
  * [UI](https://github.com/livingdocsIO/livingdocs-editor/pull/3392)


# Breaking Changes :fire:

## Migrate the database

The migration is simple, the duration is short and there are no datalosses expected on up-/downgrade.

```sh
# run grunt migrate to update to the newest database scheme
# migration - 131-add-fields-to-assets.js
#   add 2 fields to assets table
# migration - 132-add-asset-import-errors.js
#   add 2 tables for asset import
# migration - 133-remove-ref-from-assets.js
#   remove assets.ref field
# migration - 134-change-asset-import-jobs.js
#   rename table introduced in 132-add-asset-import-errors.js

livingdocs-server migrate up
```

## Color Normalization

Some variable names have changed and some existing variables have been matched with slightly new colors. This may result in problems with some downstreams.

### Migration advice for downstreams :fire:

```
The following color variables need to be migrated:
- $ld-c-green-three => $ld-c-green-two
- $ld-c-green-four => $ld-c-green-three
- $ld-c-green-five => $ld-c-green-four
- $ld-c-violet-three => $ld-c-violet-two
- $ld-c-yellow-two => $ld-c-yellow-three
- $ld-c-yellow-one => $ld-c-yellow-two
- $ld-c-yellow-zero => $ld-c-yellow-one
- $ld-white => $ld-c-white
- All colors ending on …-background => …-bg
- All colors ending on …-border => …-bd

For existing semantic color assignments in downstream, please note, that there are new variables available:
- $ld-c-success-one
- $ld-c-success-two
- $ld-c-alert-one
- $ld-c-alert-two
- $ld-c-error-one
- $ld-c-error-two

Removed colors:
- $ld-blue-notify
```

* References
  * [Editor PR #3308](https://github.com/livingdocsIO/livingdocs-editor/pull/3308)



## Image Upload Refactoring

We tried to make the image upload more consistent. For that we had to introduce breaking changes.

### Needed Actions in the Editor :fire:

* :fire: Replace `imageProxy`/`uploadProxy` with `assetProxy`
* :fire: Renamed component `ldNativeImageUpload` to `liImageUploadButton`
* :fire: Changed `liImageUploadButton` implementation (see example)


before:
```js
    // html:
    <button ld-native-image-upload
      class="ld-btn ld-btn--default"
      success-action="$ctrl.onUploadSuccess"
      error-action="$ctrl.onUploadError"
      progress-action="$ctrl.onUploadProgress">Upload Image</button>

    // controller:
    onUploadSuccess (upload) {
      this.isUploading = false
      this.image = {height: upload.height, width: upload.width, url: upload.url, mime: upload.mime}
    }

    onUploadError (error) {
      this.isUploading = false
    }

    onUploadProgress ({progress}) {
      this.uploadProgress = progress
      this.uploadError = null
    }
```

after:
```js
  // html:
    <li-image-upload-button
      class="ld-btn ld-btn--default"
      on-upload="$ctrl.onUpload">Upload image</li-image-upload-button>

  // controller:
  get uploadProgress () { return this.upload && this.upload.progress }
  get isUploading () { return !!this.upload }

  async onUpload (upload) {
    this.upload = upload

    await upload.promise.finally(() => {
        this.upload = undefined
      })

    this.image = {height: upload.height, width: upload.width, url: upload.url, mime: upload.mime}
  }
```

* References
  * [Editor PR #3261](https://github.com/livingdocsIO/livingdocs-editor/pull/3261)


## Changed Metadata Service Parameter

The function `getSelectables` in a custom metadata service (e.g. `languageSelection`)  with the form `li-meta-select-form` has changed it's parameter.

### Needed Actions :fire:
```js
// search for downstream metadata plugins with form 'li-meta-select-form'
// check if they have defined a service property
{
  name: 'language',
  form: 'li-meta-select-form',
  config: {
    label: 'Language',
    service: 'languageSelection',
    placeholder: 'select language..'
}

// languageSelection.js
// before
getSelectables(cb)

// changed to
getSelectables(name, cb) // name = metadata property name
```

* References
  * [Editor PR #3366](https://github.com/livingdocsIO/livingdocs-editor/pull/3366)


## Improve Imatrics Integration

The Imatrics configuration is now integrated into the integrations, therefore we moved the configuration too.

### Needed Actions :fire:
- :fire: server channeld-config: moved imatrics config from `settings.imatrics` to `settings.integrations.imatrics`
- :fire: server environment-config: moved `imatrics.enabled` to `integrations.imatrics.allowed`

* References
  * [Server PR #2877](https://github.com/livingdocsIO/livingdocs-server/pull/2877)


## Support Custom CSS Styles

By default the editor now uses a strict set of CSS files which don't support Sass variables anymore.
In case you want to add custom CSS styles, you'll need to declare one of the environment variables based on the desired order.

The styles in `CUSTOM_STYLE_PATH_BEFORE` get loaded before the Livingdocs Editor styles,
and the styles in `CUSTOM_STYLE_PATH_AFTER` get loaded after the Livingdocs Editor styles.

As there are separate build processes for the upstream and downstream Sass files now, there is no need anymore to `@include` the upstream editor styles in your custom Sass file.

In case you don't need custom styles, you can remove your `app/styles` folder and don't set the environment variables.

```js
CUSTOM_STYLE_PATH_BEFORE=./app/styles.scss
// or
CUSTOM_STYLE_PATH_AFTER=./app/styles.scss
```

### Breaking Change :fire:
- :fire: editor: removed support for environment variable `EDITOR_STYLE_PATH`

* References
  * [Editor PR #3337](https://github.com/livingdocsIO/livingdocs-editor/pull/3337)


## Asset Proxy Refactoring

This refactoring **should** only have an effect on the upstream. To be on the save side, check the downstream too.

### Needed Actions :fire:
- :fire: search for `assetProxy.postImage(file)` and replace it with `assetProxy.postImage({file, metadata})`
- :fire: search for `assetProxy.addImage(file, image)` and replace it with `assetProxy.addImage({file, metadata})`

* References
  * [Editor PR #3358](https://github.com/livingdocsIO/livingdocs-editor/pull/3358)

## Remove old import configs

If you have started with the boilerplate there may be some outdated configs that need to be removed or moved.
In case the importer is not actively used it can be removed together with the configs as there is a public-API version available now.
In case the custom-import (+configs) are used, the configs should be moved accordingly.

### Needed Actions :fire:

The `import: {}` configs for the livingdocs-server are now validated more strictly. Legacy configs should be either removed or moved to a `customImport: {}` config section.

Example:
https://github.com/livingdocsIO/livingdocs-server-boilerplate/commit/8cab034735cdfa3aec8a90e4d98aab32e5d87b74#diff-944c02e3009e6c7ddedd2ee2ddebee4aL150


# APIs :gift:

## Document and Image Import :tada:

Finally, Livingdocs offers a public API endpoint for Import (import of documents/images).

References:
  * [Document Batch Import Documentation (see changelog)](https://github.com/livingdocsIO/livingdocs-server/pull/2842)
  * [Image Batch Import Documentation](https://github.com/livingdocsIO/livingdocs-editor/pull/3283)
  * [Image Batch Import Implementation](https://github.com/livingdocsIO/livingdocs-server/pull/2786)
  * [Create write tokens for the public API](https://github.com/livingdocsIO/livingdocs-editor/pull/3324)

## Data Sources :tada:

The basic idea behind a dataSource is that you can fetch/transform any dataSource (e.g. a public gist or another URL) and provide the results to any server feature or use it in the editor as a dataSource for metadata or filters.

References:
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/2865)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3366)

# Other Changes

### Improvements

* Project Seeding: Automatically update project design if __update: true [livingdocs-server #2792](https://github.com/livingdocsIO/livingdocs-server/pull/2792) :gift:
* Redis
  * Automatically recover the connection on failure [livingdocs-server #2822](https://github.com/livingdocsIO/livingdocs-server/pull/2822) :gift:
  * Custom mutex lock implementation [livingdocs-server #2827](https://github.com/livingdocsIO/livingdocs-server/pull/2827) :gift:
  * Fix mutex lock release when Redis is down [livingdocs-server #2823](https://github.com/livingdocsIO/livingdocs-server/pull/2823) :gift:
* Hugo: Allow serverConfig hugo.assetHost config to show 'view on hugo' button in sidebar [livingdocs-editor #3390](https://github.com/livingdocsIO/livingdocs-editor/pull/3390) :gift:
* Media Library
  * Only show Media Library button if asset management is enabled [livingdocs-editor #3404](https://github.com/livingdocsIO/livingdocs-editor/pull/3404) :gift:
  * Allow all document images to be chosen as a teaser image [livingdocs-editor #3330](https://github.com/livingdocsIO/livingdocs-editor/pull/3330) :gift:
  * Use ImageService URL for teaser image cropping [livingdocs-editor #3315](https://github.com/livingdocsIO/livingdocs-editor/pull/3315) :gift:
  * Fix srcset for metadata images [livingdocs-editor #3279](https://github.com/livingdocsIO/livingdocs-editor/pull/3279) :gift:
* Policies: Improve URL image policy [livingdocs-editor #3386](https://github.com/livingdocsIO/livingdocs-editor/pull/3386) :gift:
* Project setup
  * Show removed lines in json-viewer [livingdocs-editor #3363](https://github.com/livingdocsIO/livingdocs-editor/pull/3363) :gift:
  * Fix crash of component library screen if asset URL is misformed [livingdocs-editor #3320](https://github.com/livingdocsIO/livingdocs-editor/pull/3320) :gift:
  * Guard against undefined properties in metadata groups [livingdocs-editor #3311](https://github.com/livingdocsIO/livingdocs-editor/pull/3311) :gift:
* Filter
  * Support 'isDefault' property in sync filters [livingdocs-editor #3340](https://github.com/livingdocsIO/livingdocs-editor/pull/3340) :gift:
  * Add safety to categories filter [livingdocs-editor #3361](https://github.com/livingdocsIO/livingdocs-editor/pull/3361) :gift:
* Logs: Improve visibility of Livingdocs logs in editor [livingdocs-editor #3332](https://github.com/livingdocsIO/livingdocs-editor/pull/3332) :gift:
* Editable.js:
  * Fix editable formatting [livingdocs-editor #3331](https://github.com/livingdocsIO/livingdocs-editor/pull/3331) :gift:
  * More options for editable quotes [livingdocs-editor #3309](https://github.com/livingdocsIO/livingdocs-editor/pull/3309) :gift:


### Bugfixes

* Migration: Fix version locking [livingdocs-server #2791](https://github.com/livingdocsIO/livingdocs-server/pull/2791) :beetle:
* History: Remove migration revisions [livingdocs-server #2795](https://github.com/livingdocsIO/livingdocs-server/pull/2795) :beetle:
* Seeding: Safeguard group project memberships [livingdocs-server #2798](https://github.com/livingdocsIO/livingdocs-server/pull/2798) :beetle:
* Includes: Switch includes preview from get to post request [livingdocs-server #2800](https://github.com/livingdocsIO/livingdocs-server/pull/2800) :beetle:
* Print
  * Asset fixes [livingdocs-server #2804](https://github.com/livingdocsIO/livingdocs-server/pull/2804) :beetle:
  * Pass empty string to XML Builder [livingdocs-server #2855](https://github.com/livingdocsIO/livingdocs-server/pull/2855) :beetle:
* Collaboration
  * Fix collaboration behaviour when a softlock expires [livingdocs-editor #3393](https://github.com/livingdocsIO/livingdocs-editor/pull/3393) :beetle:
  * Don't emit pusher event during init [livingdocs-editor #3252](https://github.com/livingdocsIO/livingdocs-editor/pull/3252) :beetle:
  * On document update errors show sticky message and go into read-only [livingdocs-editor #3234](https://github.com/livingdocsIO/livingdocs-editor/pull/3234) :beetle:
* Login
  * Correctly redirect after login I [livingdocs-editor #3302](https://github.com/livingdocsIO/livingdocs-editor/pull/3302) :beetle:
  * Correctly redirect after login II [livingdocs-editor #3223](https://github.com/livingdocsIO/livingdocs-editor/pull/3223) :beetle:
  * Correctly redirect with a destination [livingdocs-editor #3285](https://github.com/livingdocsIO/livingdocs-editor/pull/3285) :beetle:
* Iframes
  * Change iframe scan regex [livingdocs-editor #3304](https://github.com/livingdocsIO/livingdocs-editor/pull/3304) :beetle:
  * Fix event emitted to iframes [livingdocs-editor #3289](https://github.com/livingdocsIO/livingdocs-editor/pull/3289) :beetle:
  * Fix iframe behavior in real-time [livingdocs-editor #3282](https://github.com/livingdocsIO/livingdocs-editor/pull/3282) :beetle:
* Upload: Fix image gallery uploads [livingdocs-editor #3270](https://github.com/livingdocsIO/livingdocs-editor/pull/3270) :beetle:
* Design: After a design bump reload the editor [livingdocs-editor #3242](https://github.com/livingdocsIO/livingdocs-editor/pull/3242) :beetle:
* Multiselect: Fix multi-select deletion in editor [livingdocs-editor #3239](https://github.com/livingdocsIO/livingdocs-editor/pull/3239) :beetle:

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
