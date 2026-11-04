---
title: Migrate Reference Design to Embedded Design
description: How to add an existing design to a project configuration
weight: 5
---

Embedded designs are around for a while now and several Livingdocs customers use them productively. The main difference to a reference design is that embedded designs are stored in the Livingdocs server database and are part of the project config. This means that updates to an embedded design are done via the CLI as described [here]({{< ref "/reference/cli/managing-project-configs" >}}).

The main benefit for customers is that they can completely separate Livingdocs designs from whatever technology they want to use in the frontend. E.g. Swisscom has embedded designs in the server project and uses the HTML framework nitro in the frontend (without any dependency on Livingdocs).

{{< warning >}}
Referenced designs were removed in {{< release "release-2026-11" >}}. Migrate every project that still uses a referenced design, and [its documents](#migrate-old-documents-to-embedded-design), to an embedded design before you upgrade to that release. After the upgrade, a document whose current draft or publication still uses a referenced design can no longer be opened, edited, saved or published. Older revisions saved with a referenced design can no longer be rendered, and the editor shows them as "design no longer available" in the history.
{{< /warning >}}

## Overview

Prerequisites: your Livingdocs configuration is done via a seeding process of project configuration files in your server repository.

In order to go from a reference design to an embedded design the following steps are necessary:

- migrate the design config from v1 to v2 (currently, all reference designs we know of are v1)
- move all design specific files (design_settings and all components) to the server repository (and out of your frontend)
- setup an asset workflow (css and js)
- migrate all existing documents to the embedded design

## Migrate design config

The rules on how to migrate the design are described [here]({{< ref "/reference/document/document-design/legacy-design/design-config-v1-to-v2" >}}).
We have an unofficial helper script that can be used. It can be considered an alpha version and has successfully been used to migrate several projects. We want to test it some more before we take it to the official command list.

### For the adventurous

The script can be called from the code repository of the [livingdocs-cli](https://github.com/livingdocsIO/livingdocs-cli).
With the checked out code, you can run the following command from the CLI:

```
./bin/run project-config:import-design --designUri="https://your-design-host.com/path-to-your-design/your-version" -d="/path/on/your/drive"
```

The path on your drive needs to be a project config folder. This can either be an existing project config in your server project (if you have this) or one that you downloaded via the Livingdocs CLI.

The task will create a file `design_settings` and a `components` folder with all components and link them in the config respectively.

Please manually check the migrated design before pushing it to a productive system.

## Add design to your server

In your server project you will want to add a seeding config containing your new design. An example for a local seeding config is given below.

In app/server.js

```js
await tasksApi.setupProjects(
  {
    users: [],
    projects: [
      {
        __recreateIfExists: false,
        __update: true,
        handle: 'my-project',
        label: 'Foo Bar',
        owner: ':developer',
        groups: [
          {
            label: 'Editors',
            scope: ['articles:read', 'articles:write']
          }
        ],
        groupMemberships: {
          Editors: [':editor']
        },
        config: require('path/to/your/config')
      }
    ]
  },
  {useDevUsers: true}
)
```

The important line is `config: require('path/to/your/config')`. Here you point your project setup to the project config containing the embedded design (basically what you did in the first step).
If you already have a project config, make sure that you require the new file `design_settings` as well as all components in the `components` folder that you migrated above.

You can easily test your embedded desig with a local seeding config by just restarting the server and observing the command line. If the project seeding succeeds, your config is fine.

## Setup asset workflow

Design assets need to be accessible for both the editor as well as the end-user facing delivery. We strongly recommend the use of a high availability object storage like AWS S3, Google Cloud (Object) Storage or any other object storage. Usually you can setup a CDN in front of your object storage to optimize your asset delivery and consumption.

### Design assets configuration

In the `design_settings` file (see above), you can specify the location where your required assets are located:

```js
{
  v: 2,
  settings: { /* omitted for illustration purpose */ },
  editorSettings: { /* omitted for illustration purpose */ },
  designSettings: {
    assets: [
      'https://cdn.example.com/1.0.0/styles.css',
      'https://cdn.example.com/1.0.0/scripts.js'
    ],
    componentGroups: { /* omitted for illustration purpose */ }
  }
}
```

We recommend prefixing your assets with a versioning e.g. `1.0.0`, `1.0.1` (semantic versioning) which allows to roll back to a specific verison, gives better control over caching policies and provides a better ground for reasoning in case of debugging and communication.

### Design assets publishing workflow

Ideally you have a webpack (or similar) development setup in your delivery project which allows to work on the design locally and observe the changes directly. Once you are happy with your changes, you'd build your assets and use a upload script to publish your new design version to the object storage. As steps:

1. Work on a new design version (dev mode)
2. Once finished, build the assets and upload, using an incremented prefix (folder) e.g. `1.0.0` -> `1.0.1`, to the object storage via an upload script
3. Once uploaded, bump the version prefix in your `designSettings.assets` path entries configuration
4. Run the project seeding on your servers
5. Optionally, you can migrate old documents to the new design version (automatically created via the project seeding)
6. Done, the editor would use the new entries now, you can read the design version from the project configuration also in the delivery project to make sure you have a single point of truth (allows to roll back etc.)

## Migrate old documents to embedded design

Move all documents to the embedded design before you upgrade to {{< release "release-2026-11" >}}. After the upgrade, a document whose current draft or publication still uses a referenced design can no longer be opened, edited, saved or published.

The first version of your embedded design must be a non-breaking copy of the latest version of your referenced design, with the same components and directives. **Never mix the switch to an embedded design with new design features or refactoring.** Make those changes in a later version of the embedded design.

1. Find the projects whose documents still use a referenced design:

   ```sh
   livingdocs-server release-2025-03-check-document-design-versions
   ```

   The task lists every project whose documents use more than one design. Design names that start with `p:` are embedded designs, any other name is a referenced design. A project that is only listed with several versions of its embedded design needs no action.

2. Move the documents of each listed project to the latest version of the project's embedded design:

   ```sh
   livingdocs-server change-design-name-and-version-to-latest-project-design --project <project-handle>
   ```

   The task changes the design of each document's current draft, last publication and scheduled publication. It only changes the design reference and does not validate the content against the embedded design, which is why the embedded design must contain every component of the referenced design. Older revisions keep their referenced design. The editor shows them as "design no longer available" in the history.

3. Run the check from step 1 again to confirm that no document uses a referenced design anymore.
