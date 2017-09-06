# How to perform a release

## Upstream applications

- [livingdocs-server](https://github.com/upfrontIO/livingdocs-server)
- [livingdocs-editor](https://github.com/upfrontIO/livingdocs-editor)

### Assumption

- All the commands are to be executed at the root of a project. The projects are listed above as upstream applications.
- The release use `v2.1.0` as a base tag.

### Steps

#### Optional
**If** `v2.1.0` is not the latest tag/release and to avoid potential versioning conflicts one need to execute:

1. `./node_modules/@livingdocs/release-tools/li-release push-feat-commit v2.2.0`
2. Create a pull request in Github from the branch, `release-bump-2.2.0`, created by the previous command.
3. Merge the Pull request in the Github and wait for the semantic release script to produce the new `v2.2.0` release and tag.

#### Mandatory

1. `./node_modules/@livingdocs/release-tools/li-release create-maintenance-release --base-tag 2.1.0 --npm-auth-token <token>`

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

- All the commands are to be executed at the root of a project. The projects are listed above as downstream Livingdocs applications.
- The latest release of the downstream application is `4.0.0`.

### Steps

In Livingdocs's downstreams semantic-release is not enabled. We always do a major bump after every sprint. Example for `5.0.0`

1. `./node_modules/@livingdocs/release-tools/li-release init-release 5.0.0 master`
2. `./node_modules/@livingdocs/release-tools/li-release finish-release 5.0.0`
