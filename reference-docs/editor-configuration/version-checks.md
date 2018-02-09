## Version-Checks

Version checks allow to notify the user as soon as a new editor is released. This
helps users upgrade to the latest editor quickly and reduces problems if users
work with different editor versions.


#### Requirement #1 - version.json file present

A version.json file must be generated when deploying the editor. This file must be in the dist directory created in the build step (the path is based on an environment variable).

The format of the version.json file is not defined. The editor will simply issue an
update message as soon as the files contents change.

Example version.json
```json
{
  "downstreamVersion": "master",
  "downstreamRevision": "dc7bfca0ff5a0c3e674e29ad7d8103037617aea1",
  "upstreamVersion": "23.0.25",
  "upstreamRevision": ""
}
```


#### Requirement #2 - editor config set

In order for the version checks to start the `versionCheckTimeout` config must be defined with the delay in ms how often the version.json file is checked.

```js
app: {
  versionCheckTimeout: 60 * 1000 // check the version every minute, minimum is every 20 seconds, `null` or `undefined` will disable the feature
}
```
