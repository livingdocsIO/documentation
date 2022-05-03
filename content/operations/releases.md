---
title: Release Notes
linkTitle: Release Notes
description: Get a list of releases with its release notes
menu: operations
weight: 1
---

## Overview

We announce roughly every 2 months a new release. You can find more information in the sections below.

## 📬 Release Newsletter
[Subscribe to the release newsletter](https://confirmsubscription.com/h/j/61B064416E79453D) to get notified with a rundown of the latest features and improvements as soon as a new release is ready.

## Release Notes

* **Current Release**: The latest announced release
* **Maintained Releases**: Get security fixes and severe bug fixes.
* **Upcoming Release**: You can already read about the features, improvements and fixes of the next release. But be aware that the release notes are auto generated and will be manually fixed before we officially anounce the new release.
* **Legacy Release**: Legacy releases do not receive bugfixes anymore. If you use an old release please notify us (release@livingdocs.io) so we are aware and can inform you of critical fixes in newer releases.

|Name|Upcoming|Current|Maintained|Legacy|
|-|-|-|-|-|
|[July 2022 Release]({{< ref "operations/releases/master/master" >}})|✅||||
|[May 2022 Release]({{< ref "operations/releases/release-2022-05/release-2022-05" >}})|✅||||
|[March 2022 Release]({{< ref "operations/releases/release-2022-03/release-2022-03" >}})||✅|✅||
|[November 2021 Release]({{< ref "operations/releases/release-2021-11/release-2021-11" >}})|||✅||
|[September 2021 Release]({{< ref "operations/releases/release-2021-09/release-2021-09.md" >}})||||✅|
|[June 2021 Release]({{< ref "operations/releases/release-2021-06/release-2021-06.md" >}})||||✅|
|[March 2021 Release]({{< ref "operations/releases/release-2021-03/release-2021-03.md" >}})||||✅|
|[December 2020 Release]({{< ref "operations/releases/old/release-2020-12.md" >}})||||✅|
|[October 2020 Release]({{< ref "operations/releases/old/release-2020-10.md" >}})||||✅|
|[July 2020 Release]({{< ref "operations/releases/old/release-2020-07.md" >}})||||✅|
|[May 2020 Release]({{< ref "operations/releases/old/release-2020-05.md" >}})||||✅|
|[April 2020 Release]({{< ref "operations/releases/old/release-2020-04.md" >}})||||✅|
|[February 2020 Release]({{< ref "operations/releases/old/release-2020-02.md" >}})||||✅|
|[December 2019 Release]({{< ref "operations/releases/old/release-2019-12.md" >}})||||✅|
|[September 2019 Release]({{< ref "operations/releases/old/release-2019-09.md" >}})||||✅|
|[July 2019 Release]({{< ref "operations/releases/old/release-2019-07.md" >}})||||✅|
|[May 2019 Release]({{< ref "operations/releases/old/release-2019-05.md" >}})||||✅|
|[March 2019 Release]({{< ref "operations/releases/old/release-2019-03.md" >}})||||✅|
|[January 2019 Release]({{< ref "operations/releases/old/release-2019-01.md" >}})||||✅|
|[November 2018 Release]({{< ref "operations/releases/old/release-2018-11.md" >}})||||✅|
|[September 2018 Release]({{< ref "operations/releases/old/release-2018-09.md" >}})||||✅|
|[June 2018 Release]({{< ref "operations/releases/old/release-2018-06.md" >}})||||✅|
|[May 2018 Release]({{< ref "operations/releases/old/release-2018-05.md" >}})||||✅|
|[April 2018 Release]({{< ref "operations/releases/old/release-2018-04.md" >}})||||✅|
|[March 2018 Release]({{< ref "operations/releases/old/release-2018-03.md" >}})||||✅|
|[February 2018 Release]({{< ref "operations/releases/old/release-2018-02.md" >}})||||✅|
|[January 2018 Release]({{< ref "operations/releases/old/release-2018-01.md" >}})||||✅|
|[December 2017 Release]({{< ref "operations/releases/old/release-2017-12.md" >}})||||✅|
|[October 2017 Release]({{< ref "operations/releases/old/release-2017-10.md" >}})||||✅|
|[September 2017 Release]({{< ref "operations/releases/old/release-2017-09.md" >}})||||✅|
|[August 2017 Release]({{< ref "operations/releases/old/release-2017-08.md" >}})||||✅|
|[July 2017 Release]({{< ref "operations/releases/old/release-2017-07.md" >}})||||✅|


## How to install a Livingdocs release/patch

Every release gets a `label` ([dist-tag](https://docs.npmjs.com/cli/v7/commands/npm-dist-tag#purpose)) as soon as it's out. If you want to update your editor to the September 2021 release, you have to update your package.json like that:

```js
// package.json with a label for the livingdocs editor
"dependencies": {
  "@livingdocs/editor": "release-2021-09",
  // ...
}

// As an alternative you can also use a version number with a ~ to only allow patch updates
// The minor (72) and major (13) version keep the same for every release, just the patch (38) version will be increased
// To find out the minor/major version for a release, you have to go to the release notes of a release and check the
// patch section
"dependencies": {
  "@livingdocs/editor": "~72.13.38",
  // ...
}
```

As soon as a maintained release is out, we only add bug fixes and security patches to a release. When a new patch version arrives, the label `release-2021-09` will automatically moved to the latest patch version. This means, you can patch your project with this workflow:

```js
// install definition in package-lock.json
npm ci

// get currently installed version
npm list | grep @livingdocs/editor

// update package-lock of the editor based on the definition of package.json
npm update @livingdocs/editor

// after the update you can check if the version has been updated
// and then you can commit the change
npm list | grep @livingdocs/editor
```

Info: [Rili (Beta)](https://rili.cluster.livingdocs.io/) is a small helper service to find out the latest version of a release.