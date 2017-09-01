# How to perform a release

## Upstream applications

- [livingdocs-server](https://github.com/upfrontIO/livingdocs-server)
- [livingdocs-editor](https://github.com/upfrontIO/livingdocs-editor)

### Assumption

We want a release with semantic version `v2.1.0`.

### Steps

#### If `v2.1.0` already exists

The versioning of master and the release branch shouldn't overlap. Therefore, you have to bump the minor version of the master branch before creating the release branch. You need to execute:

1. `git checkout -b release-bump-2.2.0`
2. `git commit --allow-empty -m "feat: bump minor version to 2.2.0 for release management"`
3. `git push origin release-bump-2.2.0`
4. `git branch -D release-bump-2.2.0`
5. Merge the Pull request in the Github UI and wait for the semantic release script to produce the new `v2.2.0` release and tag.

The above list of commands will create a version `v2.2.0`. When new patches, minor or major updates are submitted the version that they will increment is `v2.2.0`.

**Please note** that the release process does not create the semantic version you want to release.

#### Mandatory

**Prerequisites**: `v2.1.0` should already exists as a release in the upstream repository. If the release has been executed properly the npm package with version `v2.1.0` should also be uploaded to `npm`.

The line below creates a new branch `maintenance-2.1.x`, where you can make patches for `2.1.x`. It won't conflict with 2.2.0 and newer versions. It is where hotfixes will be released.

1. `./node_modules/@livingdocs/release-tools/li-release create-maintenance-release --base-tag 2.1.x --npm-auth-token <token>`

## Downstream applications

Clients who develop their downstreams on their own handle releases by themselves, examples:
- NZZ
- Bluewin

Livingdocs handles the releases of its two downstreams :
- [livingdocs-service-server](https://github.com/upfrontIO/livingdocs-service-server)
- [livingdocs-service-editor](https://github.com/upfrontIO/livingdocs-service-editor)
- [livingdocs-server-boilerplate](https://github.com/upfrontIO/livingdocs-server-boilerplate)
- [livingdocs-editor-boilerplate](https://github.com/upfrontIO/livingdocs-editor-boilerplate)

### Assumption

Let's assume that the latest release is `v4.0.0`. We want to release `v5.0.0`.

### Steps

In Livingdocs's downstreams semantic-release is not enabled. We always do a major bump after every sprint. Example for `5.0.0`

1. `./node_modules/@livingdocs/release-tools/li-release init-release 5.0.0 master`
2. `./node_modules/@livingdocs/release-tools/li-release finish-release 5.0.0`
