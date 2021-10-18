---
title: release-2018-06
description: Release notes for release-2018-06
excludeFromSearch: true
---

**Attention:** If you skipped one or more release, please also check the release-notes of the skipped ones.

# Repositories

This release consists of the following new versions of the `livingdocs-server` and the `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `72.5.11`
`@livingdocs/editor` | `32.3.20`


## Livingdocs Server

How to require the server in your package.json:

```json
"dependencies": {
  "@livingdocs/server": "72.5.11",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-2018-06


## Livingdocs Editor

How to require the editor in your package.json:

```json
"dependencies": {
  "@livingdocs/editor": "32.3.20",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-2018-06


### Livingdocs Editor Patches

- [v32.3.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v32.3.10): Form layout fixes in password reset screen
- [v32.3.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v32.3.11): Webpack build fixes
- [v32.3.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v32.3.12): Properly restore search filter values upon view load
- [v32.3.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v32.3.13): Update the framework in order to fix the regression when resetting the image directive crop.
- [v32.3.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v32.3.14): Revert to in-memory based search for document lists
- [v32.3.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v32.3.15): Respect autoSaveInterval config from server
- [v32.3.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v32.3.16): Fix hugo Article Drop on the dashboard
- [v32.3.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v32.3.17): Fix webpack build (compatibility issue with webpack-cli)
- [v32.3.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v32.3.18): Always show custom login if configured
- [v32.3.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v32.3.19): lists: Fix the debounce of the list search
- [v32.3.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v32.3.20): Backport: Document History: Return “Today” instead of hours




# Highlights

## Editor Multiselect :gift:

Add multiselect functionality to the editor. In multiselect mode when a component is clicked this component is added to the selection. When a component is clicked again it is removed from the selection. In the sidebar the count of selected components is shown and there is the option to delete all selected components.

Required editor configuration to enable the multiselect feature:

```js
keyboardShortcuts: {
      '↓shift': 'start multiselect mode',
      '↑shift': 'end multiselect mode'
}
```

For a more detailed description check the [editor PR #2143](https://github.com/livingdocsIO/livingdocs-editor/pull/2143)

## Show Icon and Description in Component :gift:

Our component list in the sidebar looked too boring. This change enables designers to add icons and descriptions that are shown in the 'insert components' sidebar.

Example:
```html
<script type="ld-conf">
{
  "name": "p"
  "label": "Paragraph",
  "iconUrl": "https://livingdocs.io/images/building_blocks_magazine.svg",
  "description": "Your main writing tool"
}
</script>

<p doc-editable="text">
  foo
</p>
```


# Breaking Changes :fire:

##  Registration procedure :gift: :fire:

There are two new flags per authentication connections: `loginEnabled` and `registrationEnabled`. The editor won't show the respective connection option
in the login screen without them.

Server `auth` configuration:
```js
auth: {
  connections: {
    // email and password authentication
    local: {
      enabled: true,
      loginEnabled: true,
      registrationEnabled: true
      //...
    },
    github: {
      enabled: true,
      loginEnabled: false,
      registrationEnabled: false
      // ...
    }
  }
}
```

 For a more detailed description check the [server PR #2010](https://github.com/livingdocsIO/livingdocs-server/pull/2010) | [editor PR #2114](https://github.com/livingdocsIO/livingdocs-editor/pull/2114)

##  Save metadata config :gift: :fire:

Removed property `channel.availableVersions` in the editor.
This property is not available anymore. It is not used anywhere we know of. Please contact us if you have been using this.

For a more detailed description check the [server PR #1989](https://github.com/livingdocsIO/livingdocs-server/pull/1989) | [editor PR #2076](https://github.com/livingdocsIO/livingdocs-editor/pull/2076) :gift: :fire:



# Other Changes
* Features
  * Set homepage in pages dashboard [editor #2126](https://github.com/livingdocsIO/livingdocs-editor/pull/2126) :gift:
  * Add push notification search filter [editor #2082](https://github.com/livingdocsIO/livingdocs-editor/pull/2082) :gift:
* Chore
  * Basic Cypress End2End Setup [server #2019](https://github.com/livingdocsIO/livingdocs-server/pull/2019) [editor #2122](https://github.com/livingdocsIO/livingdocs-editor/pull/2122) :wrench:
  * Support Elasticsearch 6 [server #2017](https://github.com/livingdocsIO/livingdocs-server/pull/2017) :wrench:
  * Add User Config to App Session [editor #2043](https://github.com/livingdocsIO/livingdocs-editor/pull/2043) :wrench:
* Bugfixes
  * Fix Document Cleanup Algorithm [server #1980](https://github.com/livingdocsIO/livingdocs-server/pull/1980) :beetle:
  * Fix insert character when formatting text [editor #2140](https://github.com/livingdocsIO/livingdocs-editor/pull/2140) :beetle:
  * Improve error message in case a member already exists [editor #2130](https://github.com/livingdocsIO/livingdocs-editor/pull/2130) :beetle:
  * Fix edit menu [editor #2081](https://github.com/livingdocsIO/livingdocs-editor/pull/2081) :beetle:
  * Login Bugfix [editor #2079](https://github.com/livingdocsIO/livingdocs-editor/pull/2079) :beetle:
  * Allow to login users who have no default project set [server #1959](https://github.com/livingdocsIO/livingdocs-server/pull/1959) :beetle:
  * Only shutdown metrics server if it is listening [server #1964](https://github.com/livingdocsIO/livingdocs-server/pull/1964) :beetle:
* Service
  * Support terms signing in signup [server #1988](https://github.com/livingdocsIO/livingdocs-server/pull/1988) [editor #2080](https://github.com/livingdocsIO/livingdocs-editor/pull/2080) :gift:
  * Metadata plugins API [server #1985](https://github.com/livingdocsIO/livingdocs-server/pull/1985) :gift:
  * Stop registration when disabled [server #2103](https://github.com/livingdocsIO/livingdocs-server/pull/2103) :gift:

---

**Icon Legend**

* Breaking changes: :fire:
* Feature: :gift:
* Bugfix: :beetle:
* Chore: :wrench:
