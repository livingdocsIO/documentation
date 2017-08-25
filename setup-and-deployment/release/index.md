# How to perform a release

## Upstream applications

- [livingdocs-server](https://github.com/upfrontIO/livingdocs-server)
- [livingdocs-editor](https://github.com/upfrontIO/livingdocs-editor)

### Assumptions

- The last release and tag of the upstream application is `v2.1.0`.

### Steps

1. `git checkout -b release-bump-2.2.0`
2. `git commit --allow-empty -m "feat: bump minor version to 2.2.0 for release management"`
3. `git push origin release-bump-2.2.0`
4. `git branch -D release-bump-2.2.0`
5. Merge the Pull request in the Github UI and wait for the semantic release script to produce the new `v2.2.0` release and tag.
6. `./node_modules/@livingdocs/release-tools/li-release create-maintenance-release --base-tag 2.1.0 --npm-auth-token <token>`

## Downstream applications

There are multiple downstreams, for the NZZ, Bluewin and our own Service:
- [livingdocs-service-server](https://github.com/upfrontIO/livingdocs-service-server)
- [livingdocs-service-editor](https://github.com/upfrontIO/livingdocs-service-editor)

### Assumptions

- The latest, semantic, release and tag of the downstream application is `v17.4.2` (note the `v`).
- The latest, manual, tag of the downstream application is `4.0.1`.
- The latest maintenance tag of the corresponding upstream application is `2.1.0`.

### Steps

1. `git checkout -b update-upstream-2.1.0`
2. Update the upstream project to its latest maintenance release, from our previous example it is `2.1.0` in the downstream *package.json*.
3. `git commit -m "feat: update upstream to version 2.1.0"`
4. `git push origin update-upstream-2.1.0`
5. `git branch -D update-upstream-2.1.0`
6. Merge the Pull request in the Github UI and wait for the semantic release script to produce the new `v17.5.0` release
7. `./node_modules/@livingdocs/release-tools/li-release init-release 5.0.0 master`
8. `./node_modules/@livingdocs/release-tools/li-release finish-release 5.0.0`

# When to perform a release

## Sprint from week 1 to 4
| Week | Monday              | Midweek        | Friday                    |
| ---- |:-------------------:| :-------------:| :-----------------------: |
| 1    |                     |                |                           |
| 2    |                     |                |                           |
| 3    |                     |                |                           |
| 4    | upstream releases   | testing *      |                           |
| 5    | downstream releases | testing **     | handing upstream releases |

`*`: manual testing of the upstream applications and `npm link` with their downstreams

`**`: manual testing of the downstream applications with their newly released upstreams


# Notes and questions

- At the end of the steps for the upstream what do we give to the client? the npm package: `livingdocs-server@maintenance-2.1.0`? Does it mean that there is no matching release in Github?
- I'm using the word *application* instead of *project* because project is already used inside livingdocs.
- In our downstream we have two types of release: `X.Y.Z` are releases we do manually and `vX.Y.Z` are releases from semantic release. Maybe we could use a specific branch and an empty commit like we do in the upstream to avoid having side by side: `4.0.0` and `v4.0.0`.
- In the application where we have the release tools we could use a npm script instead of `./node_modules/@livingdocs/release-tools/li-release`.
- The number of steps could be lower, in both cases, if we are willing to write some more bash scripts.
- What is the best practice regarding versioning with `v` in front of the version number or without it?
- I am not sure about the timeline regarding when to do do releases and testing.
