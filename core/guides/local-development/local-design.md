# Set a local design

## Prerequisite

[editor and service-server](./editor-and-service-server.md)

## Fetching the design

```bash
git clone git@github.com:upfrontIO/livingdocs-design-boilerplate.git
cd livingdocs-design-boilerplate
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

In `src/config.json` add a new element to the `components` array:
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
cd path-to-your-design
grunt build
```

## Configuring a local design repository

In our local service-server, the design repository is set by default to a remote design server such as: http://api.livingdocs.io.

We can overwrite this configuration by creating  a new file:
```bash
cd path-to-your-service-server
cd conf/secrets
touch local.coffee
```

Then, fill `local.coffee` with:
```coffee
module.exports =
  designs:
    design_repository: 'http://localhost:9090'
```

The service-server is also a design repository, so it can point its own design repository to itself.

## Uploading the design

1. Install a tool called the livingdocs-manager or ldm:
  ```bash
  npm install -g livingdocs-manager
  ```


2. Make sure your service-server is started, if not:
  ```bash
  cd path-to-your-service-server
  export ENVIRONMENT=local && npm start
  ```

3. Publish and set the new design with ldm:
  The ldm tool asks for:
  - a design repository host: http://localhost:9090
  - your service-server's credentials: email/password

  ```bash
  cd path-to-your-design
  ldm design:publish dist/
  ldm channel:design-version:add --name {designName} --version {x.y.z} --channel 1
  ldm channel:design-version:current --name {designName} --version {x.y.z} --channel 1
  ```

    Note: {designName} and {x.y.z}can be found in `src/config.json`

## Trying the new design

1. Restart your service-server:
  ```bash
  cd path-to-your-service-server
  export ENVIRONMENT=local && npm start
  ```

2. Start your local editor:
  ```bash
  cd path-to-your-editor
  export ENVIRONMENT=local && npm start
  ```

3. Go to
  http://localhost:9000


****
# TODO
- Do we still need to set the design_repository in the editor or is it fetched from the server ?
- ldm is a three steps process, asking three times for credentials, design name and version plus host
