---
type: release-notes
title: December 2020 Release
description: Release notes for release-2020-12
hideSectionTeaser: true
excludeFromSearch: true
---

{{< release-header 
  title="December 2020 Release"
  upcoming=false
  legacy=true
  current=false
  maintained=false
  branchHandle="release-2020-12"
>}}

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

# Newsletter

* Subscribe here: https://confirmsubscription.com/h/j/61B064416E79453D


# Webinar

#### Features

* Recording: [here](https://us02web.zoom.us/rec/share/vLM8TMOrDEn1eSdhGwSyfV4aOSVdJOtxNtB5NgFYaw0TWL6g51-mdXknJsQJbS3G.GeiW8RR_sSjAJ6li) (code: 6Tvm^5U8)
* Documentation: [here](https://docs.google.com/document/d/1fqw2E4OTW-Dcv55xXyGi4isH1OfW_6ZTeInf7U4LBLY/edit)

#### Developers

* Recording: [here](https://us02web.zoom.us/rec/share/cygtXhg7Kn1M5ge4cZ8tOLCacrGUxhEccVz-W8Ew2nX03tztmWFx0g7oBu7YX7xe.WMbL_taUDRE9Xdj3) (code: #0jfi47c)
* Slides: [here](https://docs.google.com/presentation/d/e/2PACX-1vToisv-nnjqHgDdVu_agXTchS_9pX5T_gtYBxg8Jjon7zauQQ-0BgiKhY5i7Ju4xdIM3Pp1bToGkBci/pub?start=false&loop=false&delayms=3000)

# System Requirements

#### Minimal
* Elasticsearch 6.8.5 :fire:

#### Suggested
* Elasticsearch 7
* Base Docker Images
  * livingdocs-server: `livingdocs/server-base:14.3`
  * livingdocs-editor: `livingdocs/editor-base:14.3`


# Highlights


## Internal Document Links :tada:

When selecting text in the editor, the link tool in the editable toolbar allows to link to documents instead of URLs only. The input field is a combined input and detects if you want to search, or if you entered an URL.

Attention: The delivery needs a strategy to redirect id route patterns in order for inline links to work in the delivery.

![image](https://user-images.githubusercontent.com/821875/95599481-6ea70380-0a51-11eb-9cb5-639db68b238c.png)

- If you search, you get back a list of internal documents
- If you paste an URL that matches one of your deliveries, the link is automatically upgraded to a document reference.

References:
  * [Internal Document Links PR with Screenshots and Explanations](https://github.com/livingdocsIO/livingdocs-editor/pull/3909)
  * [Internal Document Links Extended Search](https://github.com/livingdocsIO/livingdocs-editor/pull/4027)
  * [Internal Document Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3150)
  * [Documentation](https://github.com/livingdocsIO/livingdocs/pull/329)


## Custom Indexes / Queue Base Work :tada:

### Queue Base Work
To support all kind of features which need (job-)queues (now/future), we did some base work. These are the most important changes:
- Get rid of [bullmq](https://github.com/taskforcesh/bullmq)
- Introduce [Redis streams](https://github.com/livingdocsIO/livingdocs-server/pull/3224) for messaging (more control/reliability/transparency)

### Custom Indexes
Some customers want to have their customised Elasticsearch publication index to make customised search requests. The switch to Redis streams was necessary to
make custom indexes possible. Why you could need a custom index and how to setup one, can be found [here](https://github.com/livingdocsIO/livingdocs/pull/328).

**Migration Guide**
If you already have implemented a custom index in your downstream and want to replace it with the Livingdocs custom index solution, please contact us to make a planning. The upgrade is not difficult, but every customer is different and therefore it needs individual planning.

References:
  * [Base Work - Queue Refactoring - Part I](https://github.com/livingdocsIO/livingdocs-server/pull/3187)
  * [Base Work - Queue Refactoring - Part II](https://github.com/livingdocsIO/livingdocs-server/pull/3193)
  * [Base Work - Redis Streams](https://github.com/livingdocsIO/livingdocs-server/pull/3224)
  * [Visualize Redis Queue Infos - Editor](https://github.com/livingdocsIO/livingdocs-editor/pull/3924)
  * [Visualize Redis Queue Infos - Server](https://github.com/livingdocsIO/livingdocs-server/pull/3193)
  * [Custom Elasticsearch Index](https://github.com/livingdocsIO/livingdocs-server/pull/3185)
  * [Custom Elasticsearch Index - Documentation](https://github.com/livingdocsIO/livingdocs/pull/328)
  * [Indexing Cleanup](https://github.com/livingdocsIO/livingdocs-server/pull/3284)


## Cloudinary Storage Support :tada:

Beside Amazon S3 we introduced Cloudinary as storage. Look into the [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3270) for instructions.

References:
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4023)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3270)


## More Secure Authentication Workflow :tada:

We worked on the security for the user authentication in Livingdocs. Some improvements are:

- Increased security for the accessTokens
- if an accessToken is stolen, it can't be used without a valid client cookie
- accessTokens can't renew themselves anymore
- an accessToken is bound to a valid client and session

For more information, read [here](https://github.com/livingdocsIO/livingdocs-server/pull/3225).

References:
  * [Server PR Part I](https://github.com/livingdocsIO/livingdocs-server/pull/3225)
  * [Server PR Part II](https://github.com/livingdocsIO/livingdocs-server/pull/3282)
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3952)


## Airship Integration for Push Notifications :tada:

We integrated [Airship](https://www.airship.com/) for push notifications.

References:
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3975)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3231)
  * [Documentation](https://github.com/livingdocsIO/livingdocs/pull/340)




# Experimental

## Mobile - Inline Editing :tada:

With this release, we allow a user to inline add/edit components and its settings in the editor with your mobile. This is a MVP, but we will gradually improve the inline editing in the next few releases.

References:
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3900)


## Editable Teasers :tada:

Editable teasers are embedded editable livingdocs components. Technically editable teasers are doc-includes returning livingdocs components, which can be edited like any other component. For more information read the [documentation](https://github.com/livingdocsIO/livingdocs/pull/354) and look into the [example](https://github.com/livingdocsIO/livingdocs-server/pull/3235) on the example-server.

Attention: Editable teasers do not work with the render pipeline v1 (which most of the customers are using at the moment). This should be fixed in an upcoming release.

References:
  * [Editable Teasers Editor Integration](https://github.com/livingdocsIO/livingdocs-editor/pull/3961)
  * [Base Work - Properties Panel Refactoring](https://github.com/livingdocsIO/livingdocs-editor/pull/3951)
  * [Base Work - Resolve Includes](https://github.com/livingdocsIO/livingdocs-editor/pull/3949)
  * [Example - Teaser Include on Example Server](https://github.com/livingdocsIO/livingdocs-server/pull/3235)
  * [Documentation](https://github.com/livingdocsIO/livingdocs/pull/354)


## Videos :tada:

We introduce videos in Livingdocs with these abilities:

- upload videos and set metadata in media library
- upload videos and set metadata in editor via drag + drop / upload button
- import videos via public API
- Add project configuration for mediaVideo MediaType
- Add new directive `doc-video` in a livingdocs design

In the upcoming releases we will bring in some improvements and make the video feature more stable.

References:
  * [Editor PR with Screenshots](https://github.com/livingdocsIO/livingdocs-editor/pull/3957)
  * [Editor PR with Improvements (drag+drop from filesystem)](https://github.com/livingdocsIO/livingdocs-editor/pull/3989)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3234)
  * [Documentation](https://github.com/livingdocsIO/livingdocs/pull/337)





# Breaking Changes :fire:

## Migrate the database :fire:

It's a simple/fast migration with no expected data losses.

```sh
# run grunt migrate to update to the newest database scheme
# migration - 142-add-legacy-design-name.js
#   rename document_migrations.design_name to target_design_name
# migration - 143-drop-unused-postgres-extensions.js
#   drop unused uuid-ossp extension
# migration - 144-add-missing-primary-keys.js
#   add missing primary keys to tables to support replication better
# migration - 145-document-content-types.js
#   introduce document_content_types table to support migrations better in the future
# migration - 146-add-metadata-id-to-revisions.js
#   add document_revisions.metadata_id to support metadata to document/publication relations better in the future
# migration - 147-add-user-sessions.js
#   add user_sessions table to support new auth workflow
livingdocs-server migrate up
```

## Drop Support for Elasticsearch < 6.8.5 :fire:

:fire: The support for Elasticsearch versions < 6.8.5 has been dropped. Please update your Elasticsearch cluster to Elasticsearch >= 6.8.5.

**Important!** You have to do an Elasticsearch update to >=6.8.5 before installing the December release. How to to a rolling upgrade is documented [here](https://www.elastic.co/guide/en/elasticsearch/reference/current/rolling-upgrades.html).


References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3275)

## Elasticsearch Indexes :fire:

#### Server Configuration
- 🔥 moved server config `search.articlePublicationIndexEnabled` to `elasticIndex.documentPublicationIndexEnabled`
- 🔥 removed server config `search.articlePublicationIndex`. The publication index name is now auto generated: `${indexNamePrefix}-li-document-publications-index`

#### CLI
- 🔥 removed `livingdocs-server es-publication-delete-index` use `livingdocs-server elasticsearch-delete-index --handle=li-publications -y` instead
- 🔥 removed `livingdocs-server es-publication-reindex` use `livingdocs-server elasticsearch-index --handle=li-publications -y` instead

#### Environment Config

We automatically create a publication index for the public API. Therefore you **must** define an `indexNamePrefix` for every environment. The definition of `indexNamePrefix` is free, but we suggest a pattern like `${your-company}-${environment}`.

🔥  Define an `indexNamePrefix` for every environment

```js
elasticIndex: {

  // every index name will be prefixed to prevent name clashes
  // the index will be created with this pattern: `${indexNamePrefix}-${handle}-index`
  indexNamePrefix: 'your-company-local',
}
```

#### Publication Index for public API

🔥 Run a background index job for the publication index

To support future updates, we did an internal update where we define Elasticsearch aliases pointing on an index. With this change, you need to re-index the publication index used for the public API search endpoint.

After the deployment, please **immediately** run this cli task (the publication index will be empty after the deployment):

```bash
livingdocs-server elasticsearch-index --handle=li-publications -y
```

#### public API publications search

🔥  When using the public API search endpoint (`/api/v1/publications/search`), then you have to reindex all publications, with the command `livingdocs-server elasticsearch-index --handle=li-publications -y`.

When you start the new server version, the publication index is empty. To use the publication index in production for the public API as fast as possible, you have 2 options:

- 1) Start a sidekick container with the new server version and make a full background index with `livingdocs-server elasticsearch-index --handle=li-publications -y`. As soon as it's done, you can start your casual servers with the new server version
- 2) If you want to deploy/start your new server version without a preparation step, you can index the most recent publication with an additional parameter `--since`. For example `livingdocs-server elasticsearch-index --handle=li-publications --since 1m -y` does indexing all publications published within the last month. As soon as you're done with this indexing step, you can run another background without `--since` argument to index all publications.


## Authentication
With the improved [authentication workflow](https://github.com/livingdocsIO/livingdocs-server/pull/3225), we have some additional breaking changes.

🔥 third party applications / e2e-tests may need some adaptions correctly supporting cookies

🔥 Local development on Chrome now requires a SSL setup for authentication to work. Setting up [a certificate locally](https://github.com/livingdocsIO/livingdocs-editor/blob/master/config/cert.js) and proxying requests using the [editor environment](https://github.com/livingdocsIO/livingdocs-editor/blob/master/config/environments/local.js#L14) config is advised.
```js
// advised configs for local development
module.exports= {
  // https is not _required_ but there may be some complications such as cookies being filtered when trying to overwrite secure cookies or other behavior that's dependant on the browser vendor
  https: require('../cert'),
  api: {
    // disabling the proxiedHost config (CORS-mode)
    // will only work in production
    // or a server with a valid SSL setup
    proxiedHost: 'http://localhost:9090'
  }
}
```

🔥 all requests need to allow sending credentials or forward cookies if requests are made with user/project tokens. (API Tokens should still work exactly as before!)

🔥 (3rd-party) applications that use the /auth/local/login endpoint, need to support cookies. It should be as easy as forwarding the liClient cookie.

🔥 For security reasons CORS is now disabled by default. We encourage a more secure approach where we forward a path on the editor domain to the server instance. For Example: ’https://edit.livingdocs.io/proxy/api/' should be forwarded to ‘https://server.livingdocs.io’
- This guards against CSRF attacks
- Latency improvements as requests are halved (no more OPTIONS requests)
- Cookies are more secure due to the possibility of using the sameSite: 'strict' option.

#### API Changes
🔥 removed authApi.getLoginHistory

🔥 removed authApi.revokeAccessTokensOfUser

🔥 removed authApi.reissueAccessToken

🔥 removed authApi.revokeAccessToken

🔥 changed authApi.createAccessTokenForTests -> authApi._createAccessTokenForTests | now returns token instead of {token}

🔥 move authApi.authorizationMiddleware out of the authApi and do not expose it anymore

🔥 Removed authUtils. authenticationSuccess (The promise version is still the same)

Routes
🔥 /authenticate has moved to /auth/local/login

🔥 /users/me has moved to /auth/me

🔥 removed POST /authenticate/refresh

🔥 removed POST /token/revoke

🔥 removed POST /token/reissue -> access tokens are reissued on /auth/me now

🔥 removed POST /token/revoke-tokens

🔥 changed GET /users/:id does not return a login history anymore


## SSO Logins :fire:

With the improved [authentication workflow](https://github.com/livingdocsIO/livingdocs-server/pull/3225), we have some additional [breaking changes](https://github.com/livingdocsIO/livingdocs-planning/issues/4140) for SSO Logins. If the callback URL for SSO does not match the editorUrl, we set the auth cookies for a wrong domain leading to issues when logging in.

**Migrating an existing SSO login**

With cookies being set on a new URL, the SSO Logins need to be re-configured. Do the following:

1. Make sure your `editor__public_host` env variable is set to the editor URL (e.g. `https://edit.livingdocs.io`)
2. Change all callback URLs for your SSO provider to the pattern `https://{editorUrl}/proxy/auth/{provider}/callback`. For the livingdocs service this looked e.g. as follows: `auth__connections__github__config__callbackURL = https://edit.livingdocs.io/proxy/auth/github/callback`. (NOTE: depending on your traefik setup it might also require `proxy/api` instead of `/proxy`).
3. In the settings for your social providers, allow the new callback URLs (for FB for example we had to allow the redirect URL `https://edit.livingdocs.io/proxy/auth/facebook/callback` in our Facebook app)



## Migration to Redis Streams :fire:

- :fire: Existing messages from `bull` won't be processed anymore.
- :fire: If you had pending index or imports, you'll need to restart them. Our whole setup already supported retries everywhere except in the importer of the public api. It's probably best if you re-trigger the imports after deployment.
- ❌ Removed bull dashboard and replaced it with an operations screen in the admin interface of the editor.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3224)

## Slug Metadata in Slug Routing Pattern :fire:

If you activated the routing feature and if you are using a route pattern containing `:slug` and at the same time you have a metadata property with the handle `slug` the behavior will change in such a way that the route pattern for `:slug` will be built out of the `slug` metadata property value and not the document title. In most cases this is what you want. If it is not, you can rename the handle of your existing slug metadata property to prevent clashes.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3227)

## DocumentsApi - Removed functions :fire:

- :fire: Removed `DocumentEntity.find` and `DocumentEntity.findById` methods, please use the official apis
- :fire: Removed `RevisionEntity.find` and `RevisionEntity.findById` methods, please use the official apis
- :fire: Changed parameters of `documentApi.getLocks` from `(documentId)` to `({projectId, documentId})`, so we can save a few roundtrips to check whether a user is allowed to access the document.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3237)

## S3 Storage Default :fire:

:fire: The S3 default changed from `{ACL: 'public-read'}` to `undefined` - it now uses the bucket ACL-defaults.

#### How to revert to the behaviour before the release :fire:
To restore the behaviour you can explicitly pass the `{ACL: 'public-read'}` in `(images|files).storage.config.params.ACL`

```js
storage: {
  strategy: 's3',
  config: {
    bucket: 'li-bucket-dev',
    region: 'eu-central-1',
    accessKeyId: 'secret',
    secretAccessKey: 'secret',
    params: {
      ACL: 'public-read' // <--------- add this to go back to the old behavior
    }
  }
}
```

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3262)

## DocumentRelationApi - Changed Params :fire:

🔥 Changed params on `documentRelationApi.setDocumentEmbedReferences` from `(documentVersion)` to `({documentVersion, trx})`

NOTE: The new param `trx` is optional and only necessary if you want to call within a transactional context. If you do pass it, you are responsible to call `trx.commit` or `trx.rollback` when you're done.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3259)

## Index Feature - Removed publicationTransformModule :fire:

- 🔥 Remove server config option search.indexer.publicationTransformModule
- 🔥 Remove parameter publication-transform-module in livingdocs-server es-publication-reindex task

Note: This change should have no consequences for customers.

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3222)

## Index Feature - Removed/Renamed Functions :fire:

- 🔥 Removed `req.accessToken` from all requests. Please migrate to `req.verifiedToken.bearerToken`
- 🔥 Removed `searchManager.putDocument`. Please migrate to `indexingApi.addJob` that executes the same method internally

References: [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3187)

## Security - User access tokens require valid cookies

- 🔥 Cypress helpers need some adaptions to correctly support cookies.

Our core implementation can serve as reference for a cypress login helper: https://github.com/livingdocsIO/livingdocs-editor/blob/master/cypress/support/liLogin.js/#L69

- 🔥 All requests against the server using an user access token require a valid session and the cookies that belong to it.

You may need to allow credentials or forwarding cookies if you have been working with User tokens. _(API Tokens should still work exactly as before!)_

Example an `axios` instance using the withCredentials flag
```
const axios = require('axios').create({..., withCredentials: true})
```

## Editor CSS Class Renamings :fire:

:fire: If you've done CSS modifications based on the original upstream classes in the editor please look into this PR. We did a lot of small refactorings/renamings.

References: [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4015)

## CSS Stylesheets vh is not supported anymore :fire:
Because of changes in the editor we need to replace the vh unit in the design assets. This is done automatically but the css assets in the design should support CORS when the files are on a different domain then your livingdocs editor. Otherwise we can't read the CSS Rules and it can lead to an unexpected behavior in the editor.
If CORS can't be enabled on the css assets it should be replaced with a unit which does not directly base on the height of the viewport.

# APIs :gift:

## Public API

For all endpoints documentation, look into your editor's public API doc - 'https://your-editor.com/public-api'.

#### Added Endpoint for a MediaLibrary Import :gift:

:gift: `POST /api/v1/import/mediaLibrary`

References:

  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3895)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3152)


#### Added Endpoint for a MediaLibrary Metadata Update :gift:

:gift: `PATCH /api/v1/mediaLibrary/:id`

References:
  * Documentation - 'https://your-editor.com/public-api'
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/4014)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3267)


#### Added Endpoints for Document Lists :gift:

- :gift: `GET /api/v1/document-lists`  Search endpoint for document lists
- :gift: `GET /api/v1/document-lists/:id` Get a document list by :id

References:
  * Documentation - 'https://your-editor.com/public-api'
  * [Editor PR](https://github.com/livingdocsIO/livingdocs-editor/pull/3956)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3226)


#### Added Endpoint for a Video Import :gift:

Attention! Even when we've added the video endpoint already, sthe video feature is still experimental.

:gift: `POST api/v1/import/videos`

References:
  * Documentation - 'https://your-editor.com/public-api'
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3234)





## Server Events API

We added new events to the sever events API
- :gift: `mediaLibraryEntry.create`
- :gift: `mediaLibraryEntry.update`
- :gift: `mediaLibraryEntry.archive`

References:
  * [Documentation](https://github.com/livingdocsIO/livingdocs/pull/345)
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3255)




# Internal Changes

## Beta Endpoints for Publications :gift:

We added a new base endpoint `/api/beta/`. This allows us to expose things on the public API we are not
sure enough yet, to introduce it on the `v1` endpoint that we can never break.

The first 2 introduced beta endpoints are already existing and have the same format on `v1`, but extend the response
with `references`. This might break in the future.

New endpoints:
- :gift: `GET /api/beta/documents/:documentId/latestPublication`
- :gift: `GET /api/beta/documents/latestPublications`

References:
  * [Server PR](https://github.com/livingdocsIO/livingdocs-server/pull/3254)


# Other Changes

### Security

* Registration: Do not allow long usernames or // in a username [livingdocs-server #3257](https://github.com/livingdocsIO/livingdocs-server/pull/3257) :gift:
* Registration: Escape user input in email html [livingdocs-server #3256](https://github.com/livingdocsIO/livingdocs-server/pull/3256) :gift:

### Design

* Document reference polish
  * Part I  [livingdocs-editor #3897](https://github.com/livingdocsIO/livingdocs-editor/pull/3897) :gift:
  * Part II [livingdocs-editor #3950](https://github.com/livingdocsIO/livingdocs-editor/pull/3950) :gift:
* Use consistent button styles on metadata screen [livingdocs-editor #3918](https://github.com/livingdocsIO/livingdocs-editor/pull/3918) :gift:
* Improve conflict mode [livingdocs-editor #3927](https://github.com/livingdocsIO/livingdocs-editor/pull/3927) :gift:
* Overhauled Link-Buttons [livingdocs-editor #3982](https://github.com/livingdocsIO/livingdocs-editor/pull/3982) :gift:
* Refactor: Remove Atomic Design [livingdocs-editor #4012](https://github.com/livingdocsIO/livingdocs-editor/pull/4012) :gift:
* A huge amount of design fixes for release-2020-12 [livingdocs-editor #4015](https://github.com/livingdocsIO/livingdocs-editor/pull/4015) :gift:
* Updated mail templates [livingdocs-server #3203](https://github.com/livingdocsIO/livingdocs-server/pull/3203) :gift:

### Improvements

#### Editor

* Login: Show login buttons for all auth providers [livingdocs-editor #3934](https://github.com/livingdocsIO/livingdocs-editor/pull/3934) :gift:
* Dashboard: Scroll to last article [livingdocs-editor #4006](https://github.com/livingdocsIO/livingdocs-editor/pull/4006) :gift:
* Operation Screen
  * Support design bumps from referenced to embedded designs via UI [livingdocs-editor #3932](https://github.com/livingdocsIO/livingdocs-editor/pull/3932)
  * Migrate server operations screen to websockets [livingdocs-server #3192](https://github.com/livingdocsIO/livingdocs-server/pull/3192) :gift:
  * Improve import jobs log in editor [livingdocs-server #3202](https://github.com/livingdocsIO/livingdocs-server/pull/3202) :gift:
* Allow to register icons in downstream [livingdocs-editor #3925](https://github.com/livingdocsIO/livingdocs-editor/pull/3925) :gift:

#### Server

* Media services improvements [livingdocs-server #3243](https://github.com/livingdocsIO/livingdocs-server/pull/3243) :gift:
* Proxy: Add support for proxying websockets [livingdocs-editor #3905](https://github.com/livingdocsIO/livingdocs-editor/pull/3905) :gift:
* APIs: Serve Cache-Control header in authenticated requests [livingdocs-server #3280](https://github.com/livingdocsIO/livingdocs-server/pull/3280) :gift:
* Migrations: Support `migrateAsync` method on migration files [livingdocs-server #3204](https://github.com/livingdocsIO/livingdocs-server/pull/3204) :gift:
* DataSources: Support documentId in params [livingdocs-editor #3896](https://github.com/livingdocsIO/livingdocs-editor/pull/3896) :gift:
* Postgres:
  * Add missing primary keys to support logical replication [livingdocs-server #3236](https://github.com/livingdocsIO/livingdocs-server/pull/3236) :gift:
  * Introduce a `document_content_types` table to keep the media types similar [livingdocs-server #3238](https://github.com/livingdocsIO/livingdocs-server/pull/3238) :gift:
* Example Server: Add Twitch include example [livingdocs-server #3246](https://github.com/livingdocsIO/livingdocs-server/pull/3246) :gift:
* Notifications: Pass server error messages to li-notifications [livingdocs-editor #3929](https://github.com/livingdocsIO/livingdocs-editor/pull/3929) :gift:

### Bugfixes

* Metadata: Fix metadata save trigger [livingdocs-editor #3967](https://github.com/livingdocsIO/livingdocs-editor/pull/3967) :beetle:
* MediaLibrary
  * Fix drop behavior for galleries [livingdocs-editor #3884](https://github.com/livingdocsIO/livingdocs-editor/pull/3884) :beetle:
  * Correctly handle drops in all browsers [livingdocs-editor #3878](https://github.com/livingdocsIO/livingdocs-editor/pull/3878) :beetle:
* Filter: Allow strings for dateRange query [livingdocs-editor #3941](https://github.com/livingdocsIO/livingdocs-editor/pull/3941) :beetle:
* Public API: Fix public API docs [livingdocs-editor #3976](https://github.com/livingdocsIO/livingdocs-editor/pull/3976) :beetle:
* Operation Screen
  * Correctly indicate total users [livingdocs-editor #4002](https://github.com/livingdocsIO/livingdocs-editor/pull/4002) :beetle:
  * Fix Add Member Screen for users that are already in a group [livingdocs-editor #4004](https://github.com/livingdocsIO/livingdocs-editor/pull/4004) :beetle:
  * Display error message during user create on admin screen [livingdocs-editor #4007](https://github.com/livingdocsIO/livingdocs-editor/pull/4007) :beetle:
* Directives
  * Don't show UI elements in non-interactive iframe view [livingdocs-editor #4008](https://github.com/livingdocsIO/livingdocs-editor/pull/4008) :beetle:
  * Set clean data from paramsSchema form instead of reactive vue objects to the include directive [livingdocs-editor #4018](https://github.com/livingdocsIO/livingdocs-editor/pull/4018) :beetle:
* Fix focus reset and error log in embedded teaser [livingdocs-editor #4028](https://github.com/livingdocsIO/livingdocs-editor/pull/4028) :beetle:
* Desknet: Fix Desk-Net Plugin for embedded designs [livingdocs-server #3183](https://github.com/livingdocsIO/livingdocs-server/pull/3183) :beetle:
* Imatrics: Fix tag slugging [livingdocs-server #3188](https://github.com/livingdocsIO/livingdocs-server/pull/3188) :beetle:
* Includes: Allow `ui.label` for paramsSchema entries [livingdocs-server #3239](https://github.com/livingdocsIO/livingdocs-server/pull/3239) :beetle:



# Patches

### Livingdocs Server Patches
- [v114.0.59](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.59): chore: rerun checks
- [v114.0.58](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.58): fix(design): add new cli command design-set-active
- [v114.0.57](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.57): fix: update integration test because of an outdated github API
- [v114.0.56](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.56): fix(hugo): require auth on all print routes
- [v114.0.55](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.55): fix(print-api): Force `no-cache` for print API requests

If the Livingdocs Editor is cached via CDN print API requests like `getLayouts` will return a cached/outdated version. This will fix the issue.
- [v114.0.54](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.54): chore(import-public-api): correctly validate publicationDate
- [v114.0.53](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.53): fix(login): Users will be able to log in even if new device emails can not be sent
- [v114.0.52](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.52): fix(print): fix crash on certificate errors
- [v114.0.51](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.51): fix(queue): Fix a typo and apply the same pending check to the xcleanup script
- [v114.0.50](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.50): fix(queue): Do not delete the consumer if we can't transfer the pending messages
- [v114.0.49](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.49): fix: Do not send out too many 'new device login' emails
- [v114.0.48](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.48): fix(openid-connect): fix various coercion issues
- [v114.0.47](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.47): fix(open-id-connect-sso): correctly resolve projectIds as strings
- [v114.0.46](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.46): fix(print): fix `filterText()` type-check

Fixes
```
uncaughtException: content.replace is not a function
```
that could occur under certain circumstances.
- [v114.0.45](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.45): fix(print): fix print host
- [v114.0.44](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.44): fix(render-pipeline): log documentId for failed renderings
- [v114.0.43](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.43): fix(list-update): finish trx if not passed in
- [v114.0.42](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.42): fix(migrations): Enable error logs for document migrations

Customers need more informations when a migration fails.
- [v114.0.41](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.41): fix(indexing): the custom indexer passes ids instead of documentIds
- [v114.0.40](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.40): fix(comments): Add maxThreadCount config property
- [v114.0.39](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.39): fix(policies): Introduce a more strict schema and allow additional properties
- [v114.0.38](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.38): fix(publish): Fix the indexing for document publish calls that are nested in a transaction
- [v114.0.37](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.37): fix(indexing): Change how we create the redis instance in the indexing controller as it didn't respect the sentinel config
- [v114.0.36](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.36): fix(airship): enable push notifications for web channel as well
- [v114.0.35](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.35): fix(includes): Add interaction blocker config
- [v114.0.34](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.34): fix(websocket): Rewrite the url for websockets as we do it for requests if /proxy/api is present
- [v114.0.33](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.33): fix: add data field 'classifications' for hugo_article
- [v114.0.32](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.32): fix(print): Handle image components
- [v114.0.31](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.31): fix(open-id-connect): correctly create users
- [v114.0.30](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.30): fix: add new npm read token
- [v114.0.29](https://github.com/livingdocsIO/livingdocs-server/releases/tag/v114.0.29): fix: correct expiration date for cookies and accessTokens


### Livingdocs Editor Patches
- [v57.33.63](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.63): chore: rerun checks
- [v57.33.62](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.62): fix(modals): allow printing articles with ctrl+p / cmd+p
- [v57.33.61](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.61): chore(ci): remove cypress from CI for dez release
- [v57.33.60](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.60): fix: update integration test because of an outdated github API
- [v57.33.59](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.59): fix(imatrics): fix styling issues leading to invisible suggestions
- [v57.33.58](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.58): fix(clipboard): render includes when dropping a component from the clipboard
- [v57.33.57](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.57): fix(viewport-viewport-units-buggyfill): improve regex to match only vh units
- [v57.33.56](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.56): fix: show an indicator incase the ES limit defaults to 10000 total documents
- [v57.33.55](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.55): fix(BW service changer): Markup updated to new standard

- Updated BW service changer's markup on par with recently set standard
- [v57.33.54](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.54): fix(lists): cancel spinner after error
- [v57.33.53](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.53): fix(teaser-preview): render includes in teaser preview
- [v57.33.52](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.52): fix(clipboard): fix clipboard paste for a container
- [v57.33.51](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.51): fix: alignment of component title when no description is available
- [v57.33.50](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.50): fix(comments): Show max thread count limit error
- [v57.33.49](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.49): chore(policies): Add additionalProperties: false to the policy schema to keep it in sync with the one on the server
- [v57.33.48](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.48): fix(conflict): Hide comments in conflict mode
- [v57.33.47](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.47): fix(split-pane): Minimize sidebar on conflict
- [v57.33.46](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.46): chore: Fix the livingdocs-integration.json for the release-2020-12 in bluewin
- [v57.33.45](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.45): fix(ci): Use our docker images instead of the official docker image
- [v57.33.44](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.44): fix(includes): Add interaction blocker config
- [v57.33.43](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.43): chore: adapt cypress tests
- [v57.33.42](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.42): fix: correctly navigate back from a custom dashboard
- [v57.33.41](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.41): fix(server): Fix support for redirecting based on x-forwarded-proto header
- [v57.33.40](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.40): fix(link tool): show linked URL when valid but not accessible via iframely link checker
- [v57.33.39](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.39): fix(media library): fix download when storage bucket is private
- [v57.33.38](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.38): fix(media library): make the context menu edit button work again
- [v57.33.37](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.37): fix: add new npm read token
- [v57.33.36](https://github.com/livingdocsIO/livingdocs-editor/releases/tag/v57.33.36): fix: make integration settings changes in the UI properly change the channelConfigDraft


---

**Icon Legend**

* Breaking changes: :fire:
* Feature: :gift:
* Bugfix: :beetle:
* Chore: :wrench:
