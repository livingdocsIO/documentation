---
title: Publish a design with ldm
menus:
  guides:
    parent: Design
---

To be honest, this process is a bit bumpy and lacks UI support. Please bear with us, we will make this super-easy for you in the future. For now though there are quite a lot of requirements.

In order to upload designs to Livingdocs you need the `livingdocs-manager` (short `ldm`) command line tool. In order to install it run:
```sh
npm install -g livingdocs-manager
```

## Upload the design

Publish and set the new design with ldm and follow the instructions:

```sh
cd $DESIGN_PATH
ldm design:publish dist/
```

If everything went well, your design is now available `http://{livingdocsServerHost}/designs/{designName}/{x.y.z}`.
You should see the JSON design configuration file.

Note: `{designName}` and `{x.y.z}` can be found in `src/config.json`

If there are existing designs on your target server, make sure to use a unique name.

### Activate the design

After uploading, the design is not automatically active. You first need to add it for your channels:

```sh
ldm channel:design-version:add --name {designName} --version {x.y.z} --channel 1
```

Set a current design version as default of a channel:

```sh
ldm channel:design-version:current --name {designName} --version {x.y.z} --channel 1
```

Note: `{designName}` and `{x.y.z}` can be found in `src/config.json`

New articles are now created with your new design.
