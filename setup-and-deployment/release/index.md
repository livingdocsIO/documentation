# How to perform a release

## Upstream applications

- [livingdocs-server](https://github.com/upfrontIO/livingdocs-server)
- [livingdocs-editor](https://github.com/upfrontIO/livingdocs-editor)

### Assumptions

- The release use `v2.1.0` as a base tag.

### Steps

**If** `v2.1.0` is not the latest tag/release and to avoid potential versioning conflicts one need to execute:

1. `git checkout -b release-bump-2.2.0`
2. `git commit --allow-empty -m "feat: bump minor version to 2.2.0 for release management"`
3. `git push origin release-bump-2.2.0`
4. `git branch -D release-bump-2.2.0`
5. Merge the Pull request in the Github UI and wait for the semantic release script to produce the new `v2.2.0` release and tag.

**Actual release step**:

1. `./node_modules/@livingdocs/release-tools/li-release create-maintenance-release --base-tag 2.1.0 --npm-auth-token <token>`

## Downstream applications

There are multiple downstreams, for the NZZ, Bluewin and our own Service:
- [livingdocs-service-server](https://github.com/upfrontIO/livingdocs-service-server)
- [livingdocs-service-editor](https://github.com/upfrontIO/livingdocs-service-editor)

### Assumptions

- The latest, manual, tag of the downstream application is `4.0.1`.

### Steps

1. `./node_modules/@livingdocs/release-tools/li-release init-release 5.0.0 master`
2. `./node_modules/@livingdocs/release-tools/li-release finish-release 5.0.0`

# When to perform a release

A sprint has 4 weeks, the release workflow happens in the last two weeks:

- Week 3
  - Monday 10am
    - **Open the usptream releases**: it marks the beginning of the integration week (testing is done by the developers), only fix commits are to be added to the release branches.
  - Friday 10am
    - **Close the upstream releases**: it marks the end of the integration week, no commits are to be added to the release branches anymore.
- Week 4
  - Monday 10am
    - **Deliver the upstream releases to the client**
