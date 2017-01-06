## Releases

Releases are fully automated using [semantic-release](https://github.com/semantic-release/semantic-release).

Whenever there is new commit on master (i.e. a pull request is merged) a new
release will be attempted on the CI server. The new version number will be
derived from the commits that were applied since the last release. Have a look at the
[commit message conventions](../git/commit-message-conventions.md) and the [semantic versioning definition](./versioning.md)

- If there is at least one `BREAKING CHANGE: ` bump the major version
- If there is at least one `feat: ` bump the minor version
- If there is at least one `fix: ` bump the patch version
- If there is none of the above don't release a new version

## Changelogs

Because of our commit message conventions we don't need to write and maintain
our changelogs by hand at release time. This calls for more attention when writing or reviewing commit messages.

Changelogs are available on, and automatically uploaded to the GitHub releases
page of the respective repository.
