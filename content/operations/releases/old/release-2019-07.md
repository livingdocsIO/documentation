---
type: release-notes
title: July 2019 Release
description: Release notes for release-2019-07
excludeFromSearch: true
---

{{< release-header 
  title="July 2019 Release"
  upcoming=false
  legacy=true
  current=false
  maintained=false
  branchHandle="release-2019-07"
>}}

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

# Repositories

This release consists of the following new versions of the `livingdocs-server` and the `livingdocs-editor`:

Package | Version
--- | ---
`@livingdocs/server` | `v83.2.11`
`@livingdocs/editor` | `v39.2.31`

## Livingdocs Server
How to require the server in your package.json:
```json
"dependencies": {
  "@livingdocs/server": "v83.2.11",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-server/tree/release-2019-07

### Livingdocs Server Patches
- [v83.2.11](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v83.2.11): bump framework includes componentConversion match all flag and links are correctly copied
- [v83.2.10](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v83.2.10): fix(request-logger): extend with user id through verified token
- [v83.2.9](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v83.2.9): fix(add-pagination-config): add pagination config for document-lists
- [v83.2.8](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v83.2.8): fix: correctly pass userId for copied articles
- [v83.2.7](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v83.2.7): fix(render_pipeline): passing renditionNames to beforeRender hook
- [v83.2.6](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v83.2.6): fix(document-api): Re-introduce the accidentally removed `path` query support in `documentApi.findOne`
- [v83.2.5](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v83.2.5): chore: improve test naming for copy-controller
- [v83.2.4](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v83.2.4): chore: rotate npm token
- [v83.2.3](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v83.2.3): prevent group membership assignment from overwriting
- [v83.2.2](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v83.2.2): Disable Netlify feature flag
- [v83.2.1](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v83.2.1): Update livingdocs-framework for release-management
- [v83.2.0](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v83.2.0): webhooks via channel config



## Livingdocs Editor
How to require the editor in your package.json:
```json
"dependencies": {
  "@livingdocs/editor": "v39.2.31",
}
```

- Link to the release branch:
  https://github.com/livingdocsIO/livingdocs-editor/tree/release-2019-07

### Livingdocs Editor Patches
- [v39.2.31](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.31): bump framework includes componentConversion match all flag and links are correctly copied
- [v39.2.30](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.30): fix(collaboration): Fix the user names that are shown when another user edits a document
- [v39.2.29](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.29): fix(compare-toggle): reset diffService selection

Revisions must be reset before compare started again
- [v39.2.28](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.28): fix(sortable-js): use version 1.9.0

because 1.10.0 doesn't work with
current version from angular-legacy-sortablejs-maintained
- [v39.2.27](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.27): fix: Migrate to the newer dependency injection syntax
- [v39.2.26](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.26): fix: finishing proofreading forces a new revision
- [v39.2.25](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.25): fix(search): Fix last publication date on search result
- [v39.2.24](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.24): chore: retrigger ci
- [v39.2.23](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.23): fix(history): always display published event
- [v39.2.22](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.22): chore: re-run ci
- [v39.2.21](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.21): fix(proofreading): improve dashboard card sorting
- [v39.2.20](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.20): fix(revision): Spacing

- Fixed left spacing on revision items
- Linted some lines
- [v39.2.19](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.19): fix(styling): display deleted articles warning red
- [v39.2.18](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.18): fix: dedicated element for dot for windows compat
- [v39.2.17](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.17): fix(ABAC): correctly access for multiple groups
- [v39.2.16](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.16): fix(tasks): show tasks in publish panel on the sidebar
- [v39.2.15](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.15): fix: increase the delay from 400 to 800 ms when leaving a document
- [v39.2.14](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.14): fix: set bowser version to 2.5.2 to prevent building problems
- [v39.2.13](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.13): fix(filter): allow notContentType in dashboard filters to be a value or an array
- [v39.2.12](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.12): fix(styleguide): adapt wording
- [v39.2.11](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.11): fix(proofreading): show truck status
- [v39.2.10](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.10): fix(lists): don't always hide the delete button
- [v39.2.9](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.9): tasks: respect policy for priority updates
- [v39.2.8](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.8): track changes polishing
- [v39.2.7](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.7): show fast-truck icon always in the same size
- [v39.2.6](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.6): dashboard: handle errors when an item has no metadata config
- [v39.2.5](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.5): crop-size: use image size as max value for crop
- [v39.2.4](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.4): resolve filter properly when query string is set in url on a custom dashboard
- [v39.2.3](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.3): fix ‘load more articles’ computation
- [v39.2.2](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.2): add default label for tasks
- [v39.2.1](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.1): correctly initiate lock-mode from history
- [v39.2.0](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v39.2.0): fix: show modified components in the diff view






# Highlights

## Track Changes (Differ) :tada:

We now have the much anticipated Track Changes feature as official version in the editor :tada:. Track Changes shows you all the changes between two versions of a document e.g.
- added and removed components
- added and removed text
- modified components (style changes, image change, embed changes)

Every change is labeled by the user who did the change. You are also able to configure the color palette of the changes to match your design. Changed component are marked with colored and labled boxes.
In the history sidebar you can switch between the `compare` and the `revision selection` mode.
All the existing functionality for show a specific version or revert to it are still there. The task events are now also showed in the history.
Track Changes can be found in the History menu of the editor.

We removed the beta version config option `diffViewEnabled` because track changes are now included in the history.

![basic_compare](https://user-images.githubusercontent.com/546185/60800852-35108a00-a176-11e9-8068-9b7e2947a93a.gif)

References:
* [Documentation](https://docs.livingdocs.io/reference-documentation/editor/editing-features#diff-view)

## Custom Realtime Proofreading Task Dashboard :gift:

In the last few sprints, we worked on different aspects of the editor to improve the proofreading process and to make parts of it customisable.
This [guide](https://github.com/livingdocsIO/livingdocs/pull/251) shows you, how you can set up your own proofreading dashboard with your own design card.

## Pin Component Feature :gift:

Components can now be pinned which prevents both deletion and moving of the component. In the sidebar you can see a pin icon in the sidebar when a component is focused. Clicking it pins the component according to the rules:
- if it is alone in a container it can not be moved, deleted nor can anything be moved or inserted before or after it (perfect for a fixed article header)
- if it is next to other components, it can not be moved nor deleted, but other components can be moved or inserted around it

Enable the pin feature in the editor:
```js
pinComponents: {
  isEnabled: true
}
```

You can read more about the feature in the references section.

References:
* [Documentation](https://github.com/livingdocsIO/livingdocs/pull/246)
* [Pull Request livingdocs-editor](https://github.com/livingdocsIO/livingdocs-editor/pull/2596)

## Prefill Author :tada:

Allow the author on the metadata screen to be prefilled from the currently logged in user. This requires setting up data-records for users and some metadata configuration in contentTypes.

References:
* [Documentation](https://docs.livingdocs.io/general-howtos/prefill-author#prefilling-configuration)
* [Pull Request livingdocs-editor](https://github.com/livingdocsIO/livingdocs-editor/pull/2760)



# Breaking Changes :fire:

## Migrate the database

```sh
# run grunt migrate to update to the newest database scheme
# migration - 118-add-configs-table.js
#   create config_indexes + config_properties table
# migration - 119-migrate-channel-configs.js
#   migrate channel configs
livingdocs-server migrate up
```


## Document API Refactoring

For the next version of access management (hooks for now), we need to refactor the `documentApi`. By removing complex and not much used queries, it's easier to restructure the API and make the queries much more performant (less database calls).

### Changes
`documentApi.findOne` experienced these changes:
- :recycle: returns now all possible data from the model (before we filtered the object)in there.
- :fire: removed `options.fields` parameter (has no effect anymore).
- :fire: removed `first_publication`
- :fire: removed `revision_user`
- :fire: removed `owner`
- :heavy_plus_sign: added `revision.user_id`
- :heavy_plus_sign: added `first_publication_id`
- :heavy_plus_sign: added `last_publication_id`

### Needed Actions :fire:
- :fire: check if the removed fields from the changes are used in the downstream and replace them.

* References
  * [server PR #2434](https://github.com/livingdocsIO/livingdocs-server/pull/2434)


## Upgrade to Node 10

We're dropping support for node 8. Please use node 10 from now on.

### Needed Actions :fire:
- :fire: To upgrade the node version in your docker files, please change all occurences of `livingdocs/server-base:8` in your project to `livingdocs/server-base:10.0`.
- :recycle: We now use a more secure imagemagick policy by default. If you need to overwrite our imagemagick policy, please use such a declaration in your Dockerfile to use the default policy

```
FROM livingdocs/server-base:10.0
RUN cp /etc/ImageMagick-7/policy.original.xml /etc/ImageMagick-7/policy.xml
```

* References
  * [server PR #2384](https://github.com/livingdocsIO/livingdocs-server/pull/2384)
  * [editor PR #2657](https://github.com/livingdocsIO/livingdocs-editor/pull/2657)


## Update Elasticsearch Index

We now only store the reference to a user (`userId`) instead of the whole `user` object in Elasticsearch to prevent a reindexing when user info like the name changes. This release keeps the old properties on the Elasticsearch mapping to allow a smooth migration without the need to drop the old index.


### Changes
These properties were added/deprecated from the document index (please migrate your code. In one of the next releases we will remove the deprecated properties)
- :fire: deprecate `last_publication`
- :heavy_plus_sign: added `published_at` (the last publish date as date type)
- :heavy_plus_sign: added `published_by` (the user id as keyword type, this replaces the `last_publication.user` object)
- :fire: deprecate `revision`
- :heavy_plus_sign: added `updated_by` (the user id as keyword type, this replaces the `revision.user.first_name` and `revision.user.last_name` properties)
- :fire: deprecate `layout_name` (got replaced by `content_type` some time ago)

### Needed Actions :fire:
- :fire: Check and update your code to not use deprecated fields
- :fire: The mapping should update automatically during server start. If indexing fails for some reason, please run grunt `search-index:documents:update-mapping`
- optionally reindex calling `livingdocs-server search-index`

* References
  * [server PR #2426](https://github.com/livingdocsIO/livingdocs-server/pull/2426)


## Update Project Builders

Extracts the code of "Project Builders" from `li-registration` into it's own feature `li-project-builders`. This allows to apply registered builders when creating a new project at any time.

### Needed Actions :fire:

#### Change Builder Registration

- :fire: moved `registrationApi.registerProjectBuilder` to `projectBuildersApi.registerBuilder`

**Example**

```js
// Before
const registrationApi = liServer.features.api('li-registration')
registrationApi.registerProjectBuilder({
  handle: 'awesome-project',
  builder: ({userId}, builderConfig, callback) => {
    buildMyAwesomeProject({userId}, builderConfig, callback)
  }
})

// Now
const projectBuildersApi = liServer.features.api('li-project-builders')
projectBuildersApi.registerBuilder({
  handle: 'awesome-project',
  async builder ({userId}, builderConfig) {
    const project = await buildMyAwesomeProject({userId}, builderConfig)
    return project
  }
})
```

#### Change Builder Configuration

- :fire: moved/refactored server config `registration` to `projectBuilders`

**Example**
```js
// Before
registration: {
  defaultProjectBuilders: ['awesome-project'],
  projectBuilders: [
    {
      handle: 'awesome-project',
      config: {}
    },
    {
      handle: 'another-project',
      config: {}
    }
  ]
}

// Now
projectBuilders: {
  enabled: true,
  defaultBuilders: ['awesome-project'],
  builders: [
    {
      handle: 'awesome-project',
      config: {}
    },
    {
      handle: 'another-project',
      config: {}
    }
  ]
}
```

You can read more about the changes in the [Project Builder PR](https://github.com/livingdocsIO/livingdocs-server/pull/2418)


## Rewrite Channel Config

You can skip this section when you are a business customer which configures the channel-config via files.
This change replaces the event stream implementation with a simpler config properties store that makes it easier to add and test additional configurations. Also draft support is considered from the beginning.
In the next release we will introduce new configuration and design workflows which base on this new implementation and will significantly ease working with and testing designs.
And we will also gradually introduce new configuration options which can be defined per project instead of for the whole server (it will become possible to configure many options per project which currently can only be configured either in the editor or server configuration)

### Breaking Changes in the ChannelConfig API
- :fire: removed `channelConfigApi.execCommands()`
- :fire: removed `channelConfigApi.createChannelConfig()`
- :fire: removed `channelConfigApi.importConfig()`
- :fire: removed `channelConfigApi.linkConfig()`
- :fire: removed `channelConfigApi.importStaticConfigs()`
- :fire: removed `channelConfigApi.applyConfig()` // only used by tests
- :recycle changed return value for `channelConfigApi.plan()`
- :heavy_plus_sign: added `channelConfigApi.createConfig()`
- :heavy_plus_sign: added `channelConfigApi.updateConfig()`
- :heavy_plus_sign: added `channelConfigApi.plan()`

### Needed Actions :fire:
- :fire: migrate the db with `livingdocs-server migrate up`
  - If there are problems with the automatic db migration you can skip it with `EXPORT SKIP_DB_MIGRATION_119=true`
  - There is also a manual migration that will migrate projects individually in `db/manual-migrations/005-migrate-channel-config-streams.js`
- :fire: Check and update your code to not use removed functions

You can find a much more detailed description of the rewrite in the [Rewrite Channel Config PR](https://github.com/livingdocsIO/livingdocs-server/pull/2432).


## Update Supported Browser Versions

This change removes supported browser versions to natively support ES2015 features.

- :fire: remove support for chrome 49-54
- :fire: remove support for safary 10
- :fire: remove support for firefox 52
- :fire: remove support for edge 12-15

* References
  * [editor PR #2773](https://github.com/livingdocsIO/livingdocs-editor/pull/2773)



# Beta Versions

You can use and test beta features. Your feedback is highly appreciated. As long as a feature is in beta phase, we will sometimes change it's UX, design or config if needed.


## Attribute Based Access Management (ABAC) :tada:

We have implemented a first version of Attribute Based Access Management (ABAC). At the moment only 2 Policies are implemented: a `dashboard.get` and a `document.metadata.update` Policy. If you want to know more, you can check these PRs:

* References
  * [server PR #2473](https://github.com/livingdocsIO/livingdocs-server/pull/2473)
  * [editor PR #2815](https://github.com/livingdocsIO/livingdocs-editor/pull/2815)


## Desk-Net Integration :tada:

In collaboration with [Mainpost](https://www.mainpost.de/) we developed a first version of a Desk-Net integration into Livingdocs. In the next weeks we will decide how to improve and how to continue with the Desk-Net integration.

The current integration will connect a Livingdocs channel with a Desk-Net account.
- Any "stories" created in Desk-Net will also create a related article in Livingdocs.
- Desk-Net and Livingdocs title will be synced automatically.
- Any changes to the publication status in Desk-Net or Livingdocs will also result in a publication (or a status change in case of Desk-Net) on the related entity.
- Articles created from a Desk-Net signal in Livingdocs will have additional read-only metadata fields in the publication form.

* References
  * MVP Desk-Net integration [livingdocs-server #2390](https://github.com/livingdocsIO/livingdocs-server/pull/2390)
  * Hidden setup form for Desk-Net [livingdocs-editor #2774](https://github.com/livingdocsIO/livingdocs-editor/pull/2774)





# Other Changes

* Features
  * Update project config via setupProjects (`__update: true`) [livingdocs-server #2467](https://github.com/livingdocsIO/livingdocs-server/pull/2467) :gift:
  * Add default config options for links in doc-editable directive [livingdocs-editor #2697](https://github.com/livingdocsIO/livingdocs-editor/pull/2697) :gift:
  * Add main navigation config option for hover/click behavior [livingdocs-editor #2729](https://github.com/livingdocsIO/livingdocs-editor/pull/2729) :gift:
  * New channel config publish screen that works with the new server channel config logic [livingdocs-editor #2754](https://github.com/livingdocsIO/livingdocs-editor/pull/2754) :gift:
  * Add delete button for lists [livingdocs-editor #2770](https://github.com/livingdocsIO/livingdocs-editor/pull/2770) :gift:
  * Add sortable ui option for li-reference-list [livingdocs-editor #2802](https://github.com/livingdocsIO/livingdocs-editor/pull/2802) :gift:
* Bugfixes
  * Prevent config overwrites during camelization [livingdocs-server #2452](https://github.com/livingdocsIO/livingdocs-server/pull/2452) :beetle:
  * Support transactions in `documentListApi.unpublishFromAllLists` (List API) to prevent partial unpublish [livingdocs-server #2421](https://github.com/livingdocsIO/livingdocs-server/pull/2421) :beetle:
  * Don't show drag object after the deletion of a clipboard item [livingdocs-editor #2703](https://github.com/livingdocsIO/livingdocs-editor/pull/2703) :beetle:
  * Robustify read only / soft lock mode [livingdocs-editor #2700](https://github.com/livingdocsIO/livingdocs-editor/pull/2700) :beetle:
  * Fix sortable tables in admin section [livingdocs-editor #2737](https://github.com/livingdocsIO/livingdocs-editor/pull/2737) :beetle:
  * Fix content-type form preview in project setup [livingdocs-editor #2743](https://github.com/livingdocsIO/livingdocs-editor/pull/2743) :beetle:
  * Check if link attributes are allowed in a doc-editable directive before setting defaults [livingdocs-editor #2752](https://github.com/livingdocsIO/livingdocs-editor/pull/2752) :beetle:
  * Fix document conflict handling in editor [livingdocs-editor #2765](https://github.com/livingdocsIO/livingdocs-editor/pull/2765) :beetle:
* Improvements
  * Send cache-control header for html files / config / version [livingdocs-editor #2723](https://github.com/livingdocsIO/livingdocs-editor/pull/2723) :gift:
  * Prevent closing modals during document creation [livingdocs-editor #2682](https://github.com/livingdocsIO/livingdocs-editor/pull/2682) :gift:
  * Show project settings navigation as dropdown in main menu  [livingdocs-editor #2740](https://github.com/livingdocsIO/livingdocs-editor/pull/2740) :gift:
  * Support promises in include service registration [livingdocs-server #2441](https://github.com/livingdocsIO/livingdocs-server/pull/2441) :gift:
  * Support promises in the feature initialization [livingdocs-server #2433](https://github.com/livingdocsIO/livingdocs-server/pull/2433) :gift:
  * Use environment variable `DEBUG_CONFIG_CHANGE` to inpsect feature config changes [livingdocs-server #2448](https://github.com/livingdocsIO/livingdocs-server/pull/2448) :wrench:

  ---
  **Icon Legend**
  * Breaking changes: :fire:
  * Feature: :gift:
  * Bugfix: :beetle:
  * Chore: :wrench:
