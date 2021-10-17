---
title: release-2020-05
description: Release notes for release-2020-05
draft: true
---

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

# Table of content
- [Patches](#repositories)
- [Highlights](#highlights)
- [Breaking Changes](#breaking-changes-fire)
- [Other Changes](#other-changes)

# Newsletter

* Newsletter: [release-2020-05](http://createsend.com/t/j-AF920550C57E4C292540EF23F30FEDED)
* Link to subscription form: https://confirmsubscription.com/h/j/61B064416E79453D


# Repositories

This release consists of the following new versions of the `livingdocs-server` and the `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `release-2020-05`
`@livingdocs/editor` | `release-2020-05`

## Livingdocs Server
How to require the server in your package.json:
```json
"dependencies": {
  "@livingdocs/server": "release-2020-05",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-2020-05

### Livingdocs Server Patches
- [v94.10.18](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.10.18): fix(integrations): prevent initializing imatrics feature if not allowed
- [v94.10.17](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.10.17): fix(add-origin): to local authentication api
- [v94.10.16](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.10.16): fix(elasticsearch): Backport the fix for the numberOfReplicas and numberOfShards index configs
- [v94.10.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.10.15): fix: Upgrade to ioredis@4.17.3 to potentially fix a redis reconnect issue

The code in https://github.com/luin/ioredis/pull/1139 might fix the connection issue we've been running into
- [v94.10.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.10.14): fix(imatrics): Allow value `0` for minchars
- [v94.10.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.10.13): fix: add user to new login device data object
- [v94.10.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.10.12): fix(imatrics): make imatrics tag schema more flexibel by allowing additional properties
- [v94.10.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.10.11): fix: add getRoutePart for core li-language plugin
- [v94.10.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.10.10): chore: improve formatting
- [v94.10.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v94.10.9): bump framework



## Livingdocs Editor
How to require the editor in your package.json:
```json
"dependencies": {
  "@livingdocs/editor": "release-2020-05",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-2020-05

### Livingdocs Editor Patches
- [v50.2.54](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.54): fix(comments): update metadata comment count only locally
- [v50.2.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.53): fix(editor): show scrollbar in read-only views
- [v50.2.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.52): chore: simplify redirect
- [v50.2.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.51): fix: properties panel behaves correct for multi selects
- [v50.2.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.50): fix(comment-count): set to undefined when count is 0
- [v50.2.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.49): fix(revision-selection): use always next revision to compare
- [v50.2.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.48): fix(image-uploader): Add file input element to DOM

The <input type=file>element generated in file_picker.js can not be accessed from the DOM.
This adds the input element to the DOM so it can be accessed by E2E tests.
- [v50.2.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.47): fix(comment-cards): add comment thread to canvas
- [v50.2.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.46): fix(comments): add instead of remove highlight on change
- [v50.2.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.45): fix(asset-server): Do not serve `.map` files on production
- [v50.2.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.44): fix(error-message): deleted article message is error
- [v50.2.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.43): fix: activation of insert toolbar action only on canvas route
- [v50.2.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.42): fix: add comment and cancel btn
- [v50.2.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.41): fix(kanbanboard): fix live update of a kanban board card
- [v50.2.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.40): fix(remove-route): remove add route and save status in canvas
- [v50.2.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.39): fix(resolve-conflicts): check only on content, document.version and userId
- [v50.2.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.38): fix(deliveryLinks): recompile delivery links when publish state changes
- [v50.2.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.37): test(conflict): add tests
- [v50.2.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.36): fix: document copies and references are reliably shown as published and do not rely on a metadata field named publishDate
- [v50.2.35](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.35): fix: only promt entering languages on creation if languages are available on content types metadata
- [v50.2.34](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.34): fix: improve visiblity of urgent proofreading tasks and deadlines
- [v50.2.33](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.33): chore: disable shakey cypress test
- [v50.2.32](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.32): fix(editor text selection): Color

- Changed color to cyan and increased contrast against background (white)
- [v50.2.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.31): fix(locale): fix default moment locale to 'en-li'
- [v50.2.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.30): fix: add allow-downloads flag to support chrome 83
- [v50.2.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.29): fix: blur only if component is focused
- [v50.2.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v50.2.28): add uploadImage function to iFrameview



# Highlights

## Editor UI Changes

We did an iteration on the side panel next to the document to integrate
the comments more seamlessly into the editing experience as well as prepare
the editor for future mobile optimisations.

### Canvas added
We have now removed the side-panel for properties and comments. Instead we have a canvas on the right side of the document that is visible by default. That way users do not have to jump between editing and comment modes and comments are more visible if there are any.
As a general improvement the scrollbar of the document is now on the right side of the canvas which feels more natural.

![image](https://user-images.githubusercontent.com/4352425/80966827-8f6d8c00-8e15-11ea-8335-d1c042d2611a.png)

### Comments moved to Canvas
The comments are now shown in the canvas. And instead of using tabs to switch between open and resolved comments which comments are visible can be controlled from the collaboration-bar. The default is that the open comments will be shown and the resolved comments will be hidden.
![image](https://user-images.githubusercontent.com/4352425/80967132-26d2df00-8e16-11ea-89f4-66e29a21460c.png)

### properties-panel
The properties-panel is not a side-panel anymore. Now it is a panel over the canvas and can be minimised.
![image](https://user-images.githubusercontent.com/4352425/80968640-9c3faf00-8e18-11ea-9cec-9998f0e82ef3.png)


## Translations :tada:

Livingdocs now supports translations. You can for example create an article in german and translate this document into another language like english.

![Translations](https://user-images.githubusercontent.com/39759830/80695632-79d72a00-8ad6-11ea-90e2-3e5107336d5c.gif)


References:
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3436)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/2903)


## Webhooks :tada:

Livingdocs adds Webhooks to the core system. Webhooks can be configured to call a 3rd-party endpoint on `document.published` and `document.unpublished` event.
Check out the [documentation](https://github.com/livingdocsIO/livingdocs/pull/294) if you want to know more.

![webhooks](https://user-images.githubusercontent.com/172394/81531875-c5ee5e00-9363-11ea-868f-3ea5cb1a952a.png)

References:
  * [Documentation](https://github.com/livingdocsIO/livingdocs/pull/294)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3445)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/2907)


## Custom Document Preview :tada:

Livingdocs now supports a custom document preview. You are now able to register your own rendering function to generate a preview of
your delivery system like your webpage or an RSS feed. It's even thinkable to generate a truly native app preview. For more information on how to do it look into the [Server Pull Request](https://github.com/livingdocsIO/livingdocs-server/pull/2887).

![document-preview3](https://user-images.githubusercontent.com/172394/81532319-79575280-9364-11ea-8d38-7f8fbc34b43e.png)

References:
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3410)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/2887)


## Delivery Links :tada:

Delivery links are shown in the publish panel when a document is published. These links are usually used to check if the document has been published correctly on the website.
You can now configure more than one of these links through channelConfig (or UI).
Check out the [Editor Pull Request](https://github.com/livingdocsIO/livingdocs-editor/pull/3453) if you want to know more.

![delivery-link](https://user-images.githubusercontent.com/172394/81531842-b66f1500-9363-11ea-93c6-c1eec1ecb8d5.png)

References:
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3453)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/2924)
  * [Documentation](https://github.com/livingdocsIO/livingdocs/pull/301)


## 2 Times Faster Image Upload :tada: :speedoat:

If you upload/drop an image into Livingdocs, the image upload is now twice as fast with the new `libvips` strategy.

### Dropped image format support :fire:

- `libvips` does not support `.bmp`images, but supports HEIC (iphone format for images)

```js
// change your environment config on the server to upload images twice as fast as with the 'imagemagick' strategy
images: {
  processingStrategy: 'libvips'
}
```

References:
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/2925)


# Breaking Changes :fire:

## Migrate the database

The migration is simple, the duration is short and there are no datalosses expected on up-/downgrade.

```sh
# run grunt migrate to update to the newest database scheme
# migration - 135-add-webhooks.js.js
#   create webhooks table
livingdocs-server migrate up
```

# Other Changes

### Features

* Metadata: Add `li-publish-date` metadata plugin [livingdocs-server #2929](https://github.com/livingdocsIO/livingdocs-server/pull/2929) :gift:
* Elasticsearch: Indexes and support `numberOfReplicas` and `numberOfShards` configs [livingdocs-server #2911](https://github.com/livingdocsIO/livingdocs-server/pull/2911) :gift:
* Image: Add remove image button for an existing image on the properties panel [livingdocs-editor #3444](https://github.com/livingdocsIO/livingdocs-editor/pull/3444) :gift:
* Metadata: Support dataSources/dataProvider and more data types in Select/Multiselect [livingdocs-editor #3458](https://github.com/livingdocsIO/livingdocs-editor/pull/3458) :gift:
* Remote includes beta: [livingdocs-editor #3451](https://github.com/livingdocsIO/livingdocs-editor/pull/3451)
* Live Coverage Mode (alpha state - contact us for details):
  [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3446)
  [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/2920)


### Improvements

* ChannelConfig: Handle/validate static and dynamic channelConfig the same way [livingdocs-server #2906](https://github.com/livingdocsIO/livingdocs-server/pull/2906) :gift:
* References: Move the extraction from the editor to the server (on create / on save) [livingdocs-server #2901](https://github.com/livingdocsIO/livingdocs-server/pull/2901) :gift:
* Metadata: Add default item for `liMetaSelect` component [livingdocs-editor #3423](https://github.com/livingdocsIO/livingdocs-editor/pull/3423) :gift:
* Config: Allow to configure metadata reference search to only show published records [livingdocs-editor #3466](https://github.com/livingdocsIO/livingdocs-editor/pull/3466) :gift:

### Bugfixes

* Import: Add image service URL to imported image [livingdocs-server #2889](https://github.com/livingdocsIO/livingdocs-server/pull/2889) :beetle:
* Images: Fix image extraction bug [livingdocs-server #2896](https://github.com/livingdocsIO/livingdocs-server/pull/2896) :beetle:
* Imatrics: Config fixes [livingdocs-server #2923](https://github.com/livingdocsIO/livingdocs-server/pull/2923) :beetle:
* History:
  * Fix history user colors [livingdocs-editor #3424](https://github.com/livingdocsIO/livingdocs-editor/pull/3424) :beetle:
  * Fix history char counter & PO-truck [livingdocs-editor #3431](https://github.com/livingdocsIO/livingdocs-editor/pull/3431) :beetle:
* Navigation: Fix spacing / scrolling [livingdocs-editor #3440](https://github.com/livingdocsIO/livingdocs-editor/pull/3440) :beetle:

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
