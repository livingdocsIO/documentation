---
type: release-notes
title: September 2018 Release
description: Release notes for release-2018-09
hideSectionTeaser: true
excludeFromSearch: true
---

{{< release-header 
  title="September 2018 Release"
  upcoming=false
  legacy=true
  current=false
  maintained=false
  branchHandle="release-2018-09"
>}}

**Attention:** If you skipped one or more release, please also check the release-notes of the skipped ones.

# Repositories

This release consists of the following new versions of the `livingdocs-server` and the `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `v75.2.15`
`@livingdocs/editor` | `v34.4.19`


## Livingdocs Server

How to require the server in your package.json:

```json
"dependencies": {
  "@livingdocs/server": "v75.2.15",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-2018-09


### Livingdocs Server Patches
- [v75.2.15](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.2.15): test(push): add notificationParams config for ethinking
- [v75.2.14](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.2.14): chore(ci): use local integration file
- [v75.2.13](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.2.13): fix: push patch info to release-notes
- [v75.2.12](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.2.12): Add ethinking as a possible new provider for push notifications (alternative to firebase)
- [v75.2.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.2.6): add property disableEditTitleAtToolbar to the content-type config
- [v75.2.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.2.5): revisions: pass layout property by default at /revisions
- [v75.2.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.2.4): routing: Use correct document route path on routes checker
- [v75.2.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.2.3): routing: There is a document route checker that wasnt update to the recent routing change
- [v75.2.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.2.2): routing: Fix bug and leanup routing arguments & storage
- [v75.2.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v75.2.1): hugo: return res.error(err) in error case



## Livingdocs Editor

How to require the editor in your package.json:

```json
"dependencies": {
  "@livingdocs/editor": "v34.4.19",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-2018-09

### Livingdocs Editor Patches
- [v34.4.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.19): chore(readme): trigger status checks, semantic release hang up
- [v34.4.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.16): Enable character count for print mode
- [v34.4.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.15): Add support for push platforms for push notifications
- [v34.4.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.14): copy: fix print->print copy fix regular->print copy
- [v34.4.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.13): remove type check for title property
- [v34.4.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.12): Add flag to disable editing the document title at the toolbar
- [v34.4.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.11): show content-type in history
- [v34.4.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.10): fix create print article
- [v34.4.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.9): do not check filter.id for active filter state
- [v34.4.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.8): fix key edge cases in editor / immediately save on going to dashboar
- [v34.4.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.7): Disable watcher on dist directory
- [v34.4.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.6): history: return “Today” instead of hours from now for a date without time / do not show a revision restore option when the content-type is different
- [v34.4.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.5): lists: fix the debounce of the list search
- [v34.4.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.4): adjust title in editor iframe
- [v34.4.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.3): adjust font size
- [v34.4.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v34.4.2): always show alternative logins if they are configured



# Highlights

## Document Copy Feature :gift: :fire:

Since this release, you have some more options to copy a document.
- create a **copy** with a copy configuration (same as before)
- create a **simple copy** (without a copy configuration)
- **transform** a document (the document id is the same, but the content-type can be changed)

If you want to know more, you can read the [documentation](https://github.com/livingdocsIO/livingdocs/pull/193) of the copy feature or look into the related pull requests at the end of this section.


#### Breaking Changes
- renamed `documentCopyApi.copy` to `documentCopyApi.copyByDocumentId`
- removed `source` parameter in the `afterConversion` function of a conversionInstruction.
- removed `copyUnknownComponents` of the copy config (but this setting had no effect anyway)


#### Related Pull Requests
* Transform Document PR [livingdocs-editor #2251](https://github.com/livingdocsIO/livingdocs-editor/pull/2251) | [livingdocs-server #2092](https://github.com/livingdocsIO/livingdocs-server/pull/2092)
* Simple Copy PR [livingdocs-server #2099](https://github.com/livingdocsIO/livingdocs-server/pull/2099)
* Refactoring PR [livingdocs-server #2081](https://github.com/livingdocsIO/livingdocs-server/pull/2081)


## Metadata References :gift:

This feature adds two new metadata plugins `li-reference` and `li-reference-list` in order to reference entities (at the moment only references of the type `document`).

![set_doc_ref](https://user-images.githubusercontent.com/6567088/43144771-35e4aff4-8f5e-11e8-9760-fecffe7573fb.gif)

**Example of a li-reference configuration**

```js
{
    handle: 'author',
    type: 'li-reference',
    config: {
      referenceType: 'document',
      documentType: 'data-record',
      contentType: 'author'
    },
    ui: {
      component: 'liMetaReferenceForm',
      label: 'Author'
    }
 }
```

#### Related Pull Requests

* Documentation of metadata references [livingdocs-editor #2141](https://github.com/livingdocsIO/livingdocs-editor/pull/2141) [livingdocs-server #2030](https://github.com/livingdocsIO/livingdocs-server/pull/2030)
* Integration in example server [livingdocs-server #2057](https://github.com/livingdocsIO/livingdocs-server/pull/2057)
* Implementation in project settings [livingdocs-editor #2208](https://github.com/livingdocsIO/livingdocs-editor/pull/2208)


## Design Viewer (beta) :gift:

It's still in beta, but worth a look. When you go to "project setup" -> "component library", you can choose a component and
- enter some text and get a rendered preview
- see the structure of the component (directives)
- see the html template

Related PR: [livingdocs-editor #2202](https://github.com/livingdocsIO/livingdocs-editor/pull/2202)



## Service Features - Channel + Metadata Administration :gift:

We made huge improvements regarding the channel- and metadata-administration with the editor. Maybe at some point it's interesting for business customers to use this feature.

Some of the features are
- create and configure content types in the editor
- create and configure metadata fields in the editor
- create and configure multi-language - handle documents in multiple languages within one project

You can find all related changes at the "Other Changes - Metadata Administration / Channel Config v2" section.

## Mobile Support - Version 1

Livingdocs can now be fully used on a tablet and has full read support on phones. The changes can be found at the UX/Design section.


# Breaking Changes :fire:

## Indexing API and index separation :gift: :fire:

This change improves the speed and reliability of (re)indexing documents to Elasticsearch.

* Redis is required as a dependency
* New Redis config is required:
```js
redis: {
  // Simple configuration (HA redis cluster can be found in PR 2009)
  host: process.env.redis__host || 'localhost',
  port: process.env.redis__port || 6379,
}
```

For a more detailed description check the [server PR #2009](https://github.com/livingdocsIO/livingdocs-server/pull/2009)

## Removed (unused) image API :wrench: :fire:

Removed the `/images` endpoint and API on the server.

Required actions:
* If `liServer.features.api('li-images').create` was used, go to the [server PR #2068](https://github.com/livingdocsIO/livingdocs-server/pull/2068) and check the description in more detail



## Improve the build performance :wrench: :fire:

During development, sourcemaps are not built with `npm start` anymore. Use `npm run start:sourcemaps` instead.

Read more at [livingdocs-editor #2262](https://github.com/livingdocsIO/livingdocs-editor/pull/2262)



## Search Filters :fire:

**Caution**: Custom filters should be tested for the reset. It depends on their implementation if they react to 'reset all filters'.

Read more at [livingdocs-editor #2267](https://github.com/livingdocsIO/livingdocs-editor/pull/2267)



## Title handling :fire:

Implicit title behaviour where the metadata property 'title' was synced with the document title now has to be defined explicitly in the configuration.

The previous behaviour can be achieved with setting `useAsTitle` to `true` on the title property.

```js
metadata: [{
  type: 'li-text',
  handle: 'title',
  config: {
    useAsTitle: true
  }
}]
```

Read more at [livingdocs-editor #2253](https://github.com/livingdocsIO/livingdocs-editor/pull/2253)


## Store editor user settings in the session store by default :fire:

Breaking Change: filters are stored per tab now by default.

To keep the current behavior where filter state is shared between tabs use the following editor config option:
```
app: {
  userPreferencesStore: 'localstore' // default: 'sessionstore'
}
```

# Other Changes

* Features
  * admin-project-details: aggregate documents by content_type [livingdocs-server #2084](https://github.com/livingdocsIO/livingdocs-server/pull/2084) :gift:
  * Improve Multiselect [livingdocs-editor #2227](https://github.com/livingdocsIO/livingdocs-editor/pull/2227) :gift:
  * allow autoSaveInterval to be configurable [livingdocs-server #2061](https://github.com/livingdocsIO/livingdocs-server/pull/2061) :gift:
  * Allow for Array in Content Type Filter [livingdocs-server #2094](https://github.com/livingdocsIO/livingdocs-server/pull/2094) :gift:
  * Change the default language handle [livingdocs-server #2093](https://github.com/livingdocsIO/livingdocs-server/pull/2093) :gift:
  * Feat/admin project details [livingdocs-editor #2237](https://github.com/livingdocsIO/livingdocs-editor/pull/2237) :gift:
  * Copy from dashboard [livingdocs-editor #2268](https://github.com/livingdocsIO/livingdocs-editor/pull/2268) :gift:


* UX/Design
  * Design responsive home screen [livingdocs-editor #2167](https://github.com/livingdocsIO/livingdocs-editor/pull/2167) :gift:
  * Fix scrolling and mobile metadata [livingdocs-editor #2215](https://github.com/livingdocsIO/livingdocs-editor/pull/2215) :gift:
  * fix(docked content): Responsiveness [livingdocs-editor #2205](https://github.com/livingdocsIO/livingdocs-editor/pull/2205) :beetle:
  * design(content type settings): Clean-up [livingdocs-editor #2189](https://github.com/livingdocsIO/livingdocs-editor/pull/2189) :wrench:
  * fix(sidebar): Scrolling [livingdocs-editor #2191](https://github.com/livingdocsIO/livingdocs-editor/pull/2191) :beetle:
  * fix(application menu): Top group label [livingdocs-editor #2181](https://github.com/livingdocsIO/livingdocs-editor/pull/2181) :beetle:
  * fix(wrappers): Scroll overflow [livingdocs-editor #2177](https://github.com/livingdocsIO/livingdocs-editor/pull/2177) :beetle:
  * fix(floating navi): Inactive state [livingdocs-editor #2175](https://github.com/livingdocsIO/livingdocs-editor/pull/2175) :beetle:
  * Design Floating Navi [livingdocs-editor #2173](https://github.com/livingdocsIO/livingdocs-editor/pull/2173) :gift:
  * Lay out password reset forms horizontally [livingdocs-editor #2259](https://github.com/livingdocsIO/livingdocs-editor/pull/2259) :gift:
  * Add comment card to styleguide [livingdocs-editor #2252](https://github.com/livingdocsIO/livingdocs-editor/pull/2252) :wrench:
  * [Styleguide] Add comment icon to editable tooltip [livingdocs-editor #2247](https://github.com/livingdocsIO/livingdocs-editor/pull/2247) :gift:
  * Improve Menu UI [livingdocs-editor #2266](https://github.com/livingdocsIO/livingdocs-editor/pull/2266) :gift:


* Metadata Administration
  * Client side validation [livingdocs-editor #2165](https://github.com/livingdocsIO/livingdocs-editor/pull/2165) :gift:
  * Fix: li-integer metadata property service / validation [livingdocs-editor #2144](https://github.com/livingdocsIO/livingdocs-editor/pull/2144) :beetle:
  * Feature: Add required checkbox metadata forms [livingdocs-editor #2138](https://github.com/livingdocsIO/livingdocs-editor/pull/2138) :gift:
  * Configure multi-language feature [livingdocs-editor #2214](https://github.com/livingdocsIO/livingdocs-editor/pull/2214) :gift:
  * Fix: string-list / numeric-list metadata types [livingdocs-editor #2206](https://github.com/livingdocsIO/livingdocs-editor/pull/2206) :gift:
  * Feat: hide from form checkbox for metadata properties [livingdocs-editor #2200](https://github.com/livingdocsIO/livingdocs-editor/pull/2200) :gift:
  * Feat: Limit content types and metadata properties [livingdocs-editor #2184](https://github.com/livingdocsIO/livingdocs-editor/pull/2184) :gift:
  * Feat: li-text form supports max-length & choosing input type (text vs textarea) [livingdocs-editor #2179](https://github.com/livingdocsIO/livingdocs-editor/pull/2179) :gift:
  * Fix li enum metadata type [livingdocs-editor #2169](https://github.com/livingdocsIO/livingdocs-editor/pull/2169) :gift:
  * Fix: Project settings publish screen recognised changes when there where none [livingdocs-editor #2176](https://github.com/livingdocsIO/livingdocs-editor/pull/2176) :beetle:
  * Fix dynamic component [livingdocs-editor #2183](https://github.com/livingdocsIO/livingdocs-editor/pull/2183) :beetle:
  * feat: support metadata plugin configurationUi.disableSelection [livingdocs-editor #2224](https://github.com/livingdocsIO/livingdocs-editor/pull/2224) :gift:
  * Make language handle read-only [livingdocs-editor #2249](https://github.com/livingdocsIO/livingdocs-editor/pull/2249) :gift:
  * Feat: Handle metadata validation errors on autosave [livingdocs-editor #2198](https://github.com/livingdocsIO/livingdocs-editor/pull/2198) :beetle:


* Channel Config v2
  * Allow to rewrite the channel config [livingdocs-server #2066](https://github.com/livingdocsIO/livingdocs-server/pull/2066) :gift:
  * feat: li-enum metadata plugin now supports a dataProvider config [livingdocs-server #2040](https://github.com/livingdocsIO/livingdocs-server/pull/2040) :gift:
  * Added channel config publish event [livingdocs-server #2029](https://github.com/livingdocsIO/livingdocs-server/pull/2029) :gift:
  * extend schema for contentType.editor [livingdocs-server #2091](https://github.com/livingdocsIO/livingdocs-server/pull/2091) :gift:
  * Channel config diff improvements [livingdocs-server #2080](https://github.com/livingdocsIO/livingdocs-server/pull/2080) :gift:
  * Support language configuration through the editor [livingdocs-server #2071](https://github.com/livingdocsIO/livingdocs-server/pull/2071) :gift:
  * Fix: li-string-list / li-numeric-list metadata plugins [livingdocs-server #2063](https://github.com/livingdocsIO/livingdocs-server/pull/2063) :beetle:
  * Fix the compatibility of the metadata plugin property 'label' between channelConfig v1 and v2 [livingdocs-server #2073](https://github.com/livingdocsIO/livingdocs-server/pull/2073) :beetle:
  * Fix channel config diff [livingdocs-server #2072](https://github.com/livingdocsIO/livingdocs-server/pull/2072) :beetle:


* Print
  * adds authors and editor to print export [livingdocs-server #2037](https://github.com/livingdocsIO/livingdocs-server/pull/2037) :gift:
  * fix(print): escaping special characters in title for hugo. Added additional metadata to print section on export to hugo [livingdocs-server #2105](https://github.com/livingdocsIO/livingdocs-server/pull/2105) :beetle:


* Bugfixes
  * Support partial document include renders [livingdocs-server #2086](https://github.com/livingdocsIO/livingdocs-server/pull/2086) :beetle:
  * allow default handle set by editor [livingdocs-server #2078](https://github.com/livingdocsIO/livingdocs-server/pull/2078) :beetle:
  * Fix multiselect [livingdocs-server #2075](https://github.com/livingdocsIO/livingdocs-server/pull/2075) :beetle:
  * Fix of Hugo Article Drag & Drop [livingdocs-server #2113](https://github.com/livingdocsIO/livingdocs-server/pull/2113) :beetle:
  * metadataFormArrangement to metadataProperty compatibility check [livingdocs-server #2100](https://github.com/livingdocsIO/livingdocs-server/pull/2100) :beetle:
  * Fix: Always enable channel configs feature [livingdocs-server #2107](https://github.com/livingdocsIO/livingdocs-server/pull/2107) :beetle:
  * Fix token mask [livingdocs-editor #2147](https://github.com/livingdocsIO/livingdocs-editor/pull/2147) :beetle:
  * Fix dependencies requirement [livingdocs-editor #2196](https://github.com/livingdocsIO/livingdocs-editor/pull/2196) :beetle: :gift:
  * Fix NZZ logo styles  [livingdocs-editor #2239](https://github.com/livingdocsIO/livingdocs-editor/pull/2239) :beetle:
  * Create content-types with title and teaserImage [livingdocs-editor #2230](https://github.com/livingdocsIO/livingdocs-editor/pull/2230) :beetle:
  * Fix to show a pusher error again with wrong credentials [livingdocs-editor #2234](https://github.com/livingdocsIO/livingdocs-editor/pull/2234) :beetle:


* Testing
  * re-add author for e2e tests [livingdocs-server #2090](https://github.com/livingdocsIO/livingdocs-server/pull/2090) :wrench:
  * Remove old author plugin in the e2e seeding [livingdocs-server #2089](https://github.com/livingdocsIO/livingdocs-server/pull/2089) :wrench:
  * Increase content type limit [livingdocs-server #2109](https://github.com/livingdocsIO/livingdocs-server/pull/2109) :wrench:
  * fix magazine setup for cypress tests [livingdocs-server #2104](https://github.com/livingdocsIO/livingdocs-server/pull/2104) :beetle:
  * Set CI env for cypress editor tests [livingdocs-server #2103](https://github.com/livingdocsIO/livingdocs-server/pull/2103) :wrench:
  * Fix Cypress Tests [livingdocs-editor #2242](https://github.com/livingdocsIO/livingdocs-editor/pull/2242) :gift:


* Chore
  * Introduce Content Behavior [livingdocs-editor #2170](https://github.com/livingdocsIO/livingdocs-editor/pull/2170) :gift: :gift: :gift:
  * Support `--reporter` option in test cli [livingdocs-server #2042](https://github.com/livingdocsIO/livingdocs-server/pull/2042) :wrench:
  * Throw a MetadataValidationError during autosave [livingdocs-server #2054](https://github.com/livingdocsIO/livingdocs-server/pull/2054) :wrench:
  * Add component properties styles to styleguide  [livingdocs-editor #2219](https://github.com/livingdocsIO/livingdocs-editor/pull/2219) :chore:


  ---

  **Icon Legend**

  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
