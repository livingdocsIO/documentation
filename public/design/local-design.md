# Set up a local design

By default the designs are fetched from the [livingdocs server](https://github.com/upfrontIO/livingdocs-server-boilerplate). By default you will work with our Design Server from the [Livingdocs Beta](https://livingdocs-beta.io/). For simple evaluations this will be sufficient.

## Prerequisite

[Local editor and server setup](../guides/local-development/editor-and-server.md)

## Background

This guide uses the [Livingdocs boilerplate design](https://github.com/upfrontIO/livingdocs-design-boilerplate) and produces a symbolical change to it in order to show how to update a design locally. For your work, you will most likely use your own design.

## Fetching the design

```bash
git clone git@github.com:upfrontIO/livingdocs-design-boilerplate.git
cd livingdocs-design-boilerplate
export DESIGN_PATH=`pwd`
npm install
```

## Adding a new component to the design

In the design repository, create a new file named `h3.html` in `src/components`:
```html
<script type="ld-conf">
  {
    "label": "Title H3"
  }
</script>

<h3 class="title" doc-editable="title">
  Title
</h3>
```

In `src/config.json` add a new `"h3"` element to the `components` array:
```json
"groups": [
  {
    "label": "Headers",
    "components": ["header", "hero", "h1", "h2", "h3"]
  },
]
```

## Building the design

```bash
grunt build
```

## Configuring a local design repository

In our local server, the design repository is set by default to a remote design server such as: http://api.livingdocs.io.

We can overwrite this configuration by creating  a new file:
```bash
cd $SERVER_PATH
cd conf/secrets
touch local.coffee
```

Then, fill `local.coffee` with:
```coffee
module.exports =
  designs:
    design_repository: 'http://localhost:9090'
```

The server is also a design repository, so it can point its own design repository to itself.

The same adaptation also has to be done for the editor:
```bash
cd $EDITOR_PATH
cd config/user_specific
touch local.coffee
```

Then, fill `local.coffee` with:
```
module.exports =
  designsApi:
    host: 'http://localhost:9090'
```

## Uploading the design

1. Install the livingdocs-manager (short `ldm`):
  ```bash
  npm install -g livingdocs-manager
  ```

2. Make sure your server is started, if not:
  ```bash
  cd $SERVER_PATH
  export ENVIRONMENT=local && node index.js
  ```

3. Publish and set the new design with ldm:

  The ldm tool asks for:
  - a design repository host: http://localhost:9090
  - your server's credentials: email/password

  ```bash
  cd $DESIGN_PATH
  ldm design:publish dist/
  ldm channel:design-version:add --name {designName} --version {x.y.z} --channel 1
  ldm channel:design-version:current --name {designName} --version {x.y.z} --channel 1
  ```

    Note: `{designName}` and `{x.y.z}` can be found in `src/config.json`

    Pro Tip: If you don't want to type the ldm channel commands each time, install [Postico](https://eggerapps.at/postico/) and adapt the `channels` table directly

## Trying the new design

1. Restart your server:
  ```bash
  cd $SERVER_PATH
  export ENVIRONMENT=local && node index.js
  ```

2. Start your local editor:
  ```bash
  cd $EDITOR_PATH
  export ENVIRONMENT=local && npm start
  ```

3. Go to
  http://localhost:9000
