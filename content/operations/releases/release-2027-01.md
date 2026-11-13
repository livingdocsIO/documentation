---
type: release-notes
title: January 2027 Release
description: Technical Release Notes for release-2027-01
excludeFromSearch: true
hideSectionTeaser: true

header:
  upcoming: true
  legacy: false
  current: false
  maintained: false
  branchHandle: release-2027-01

systemRequirements:
  suggested:
    - name: Node
      version: TBD
    - name: NPM
      version: TBD
    - name: Postgres
      version: TBD
    - name: Elasticsearch
      version: TBD
    - name: OpenSearch
      version: TBD
    - name: Redis
      version: TBD
    - name: Valkey
      version: TBD
    - name: Livingdocs Server Docker Image
      version: TBD
    - name: Livingdocs Editor Docker Image
      version: TBD
    - name: Browser Support
      version: TBD

  minimal:
    - name: Node (Server)
      version: TBD
    - name: Node (Editor)
      version: TBD
    - name: NPM
      version: TBD
    - name: Postgres
      version: TBD
    - name: Elasticsearch
      version: TBD
    - name: OpenSearch
      version: TBD
    - name: Redis
      version: TBD
    - name: Valkey
      version: TBD
    - name: Livingdocs Server Docker Image
      version: TBD
    - name: Livingdocs Editor Docker Image
      version: TBD
    - name: Browser Support
      version: TBD
---

## Caveat :fire:

These are the release notes of the upcoming release (pull requests merged to the main branch).

- :information_source: this document is updated automatically by a bot (pr's to categorize section)
- :information_source: this document will be roughly updated manually once a week (put PRs + description to the right section)
- :fire: We don't guarantee stable APIs. They can still change until the official release
- :fire: Integration against the upcoming release (currently `main` branch) is at your own risk

## PRs to Categorize

- [Fail specs on Vue warnings](https://github.com/livingdocsIO/livingdocs-editor/pull/11815)
- [fix(deps): update dependency @livingdocs/framework from 34.3.16 to v34.4.0 (main)](https://github.com/livingdocsIO/livingdocs-server/pull/10447)
- [fix(deps): update dependency @livingdocs/framework from 34.3.16 to v34.4.0 (main)](https://github.com/livingdocsIO/livingdocs-editor/pull/11891)
- [Cut release-2026-11](https://github.com/livingdocsIO/livingdocs-editor/pull/11886)
- [Cut release-2026-11](https://github.com/livingdocsIO/livingdocs-server/pull/10441)

To get an overview about new functionality, read the [Release Notes](TODO).
To learn about the necessary actions to update Livingdocs to `release-2027-01`, read on.

**Attention:** If you skipped one or more releases, please also check the release-notes of the skipped ones.

## Webinar

- Feature Webinar Recording: **TODO**
- Feature Webinar Documentation: **TODO**
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

## Deprecations :warning:

### Deprecation of Self-Service Registration

**Codes:** `LIDEP095-registration`, `LIDEP095-registrationEnabled`, `LIDEP095-createUser`, `LIDEP095-createUserWithProject`, `LIDEP095-createSSOUserWithProject`

Self-service registration is deprecated and will be removed in `release-2027-07`. It lets anyone create an account with a new project through the **Sign up** link on the editor login page (`/signup` and `POST /register/editor`). Since {{< release "release-2026-11" >}}, it only works when the server config `registration.projectConfig` is set. The removal takes out the signup page, the **Sign up** link and the endpoint. Inviting users to a project and creating users on their first single sign-on login (`autoRegistrationEnabled`) are not affected.

#### Detect

Any of:

- In the server config, the top-level key `registration`. Search for `\bregistration\b`, which doesn't match `registrationEnabled`, and confirm the hit is the top-level key.
- In the server config, `registrationEnabled` on any connection under `auth.connections`. Search case-sensitively for `\bregistrationEnabled`, which doesn't match `autoRegistrationEnabled`.
- In server project source code, `createUser`, `createUserWithProject` or `createSSOUserWithProject` called on the `li-registration` API. Search for `li-registration` and check the methods called on it.

#### Fix

Remove the `registration` server config. Remove `registrationEnabled` from every connection in `auth.connections`. Removing `registrationEnabled: false` changes nothing, because `false` is the default. Removing `registrationEnabled: true` hides the **Sign up** link, which leads to a signup that fails without `registration.projectConfig`. Keep `autoRegistrationEnabled`.

Replace calls to `createUser` and `createUserWithProject` by inviting users to an existing project with `registrationApi.createUserWithMembership()`. Replace calls to `createSSOUserWithProject` with the auto-registration of the OpenID Connect connection: unless the connection sets `autoRegistrationEnabled: false`, it creates the user on their first login and adds them to the project from `defaultProjectHandle`, `defaultProjectId` or `extractProjects`.

## Features :gift:

## Vulnerability Patches

We are constantly patching module vulnerabilities for the Livingdocs Server and Livingdocs Editor as module fixes are available. Below is a list of all patched vulnerabilities included in the release.

### Livingdocs Server

This release we have patched the following vulnerabilities in the Livingdocs Server:

- TBD

No known vulnerabilities. :tada:

### Livingdocs Editor

This release we have patched the following vulnerabilities in the Livingdocs Editor:

- TBD

No known vulnerabilities. :tada:

## Patches

Patches typically fix bugs and apply improvements within the current release. Keeping your deployment up-to-date with the latest patch version means you benefit from those fixes. No explicit action is required per patch — bumping the version is enough.

### Livingdocs Server Patches

### Livingdocs Editor Patches
