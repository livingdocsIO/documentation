# Livingdocs integration

## Intent

This is a fork of the morpheus project intended to create styles that work in both the livingdocs editor as well as the Morpheus frontend.

## How to updates styles

1. Create a branch within this fork for your changes
2. Do your CSS changes in the Morpheus CSS files
3. Create a pull-request against the upstream Morpheus project (the one from nzzdev)
4. Once this pull-request is merged bring back the up-to-date upstream into `develop`

## How to create livingdocs components

1. Create a branch within this fork for your changes
2. Create components within `livingdocs`
2. Test your components and styles by running `gulp ld`
3. Once you're happy, create a pull-request against `develop` of this fork (the upfrontIO one)

## How to get the design into livingdocs

Once you have made any of the above two changes and your `develop` branch contains new styles and/or components that are not yet in livingdocs, you'll want to get them there. You will do two things: (1) test the design in the editor using `bower link`, (2) if everything is fine, creating a new version of your design to use in the livingdocs apps.


## Testing design changes locally

#### 1. Install global npm modules
```npm install -g livingdocs-manager nodemon```


#### 2. Setup of livingdocs-api
1. Install [livingdocs-api project](https://github.com/nzzdev/livingdocs-api)

2. Create a file `conf/secrets/local.coffee` with user specific configs
```coffee
module.exports =
  designs:
    design_repository: 'http://localhost:3000'
```

3. Start the server
```
node index.js --env=local
```


#### 3. Setup of livingdocs-editor
1. Install [livingdocs-editor project](https://github.com/nzzdev/livingdocs-editor)

2. Create a file `conf/user_specific/local.coffee` with user specific configs
```coffee
module.exports =
  designsApi:
    host: 'http://localhost:3000'
```

3. Start the editor
```
grunt serve:local
```

#### 4. Setup of morpheus project
1. Install morpheus project
```
./install.sh --env=dev
```

2. Set properties for livingdocs api
```
LD_USER=
LD_PASSWORD=
DESIGN_VERSION=
```

3. Update the version and start local design server
```
gulp ld:bump --ver $DESIGN_VERSION
./livingdocs/server.sh
ldm channel:design-version:add --host=http://localhost:9090 --user="$LD_USER" --password="$LD_PASSWORD" --name="morpheus" --version="$DESIGN_VERSION" --channel 1
ldm channel:design-version:current --host=http://localhost:9090 --user="$LD_USER" --password="$LD_PASSWORD" --name="morpheus" --version="$DESIGN_VERSION" --channel 1
```

#### 5. Local development
- Change design in morpheus and local design server will deploy automatically.
- Editors caches the design, so after a design change, reload the editor


### Deployment
This step is only needed:
- Changes in ./livingdocs/*
- Changes files referenced by ./front/assets/css/content.css

1. Bump version
```
DESIGN_VERSION=
gulp ld:bump --ver $DESIGN_VERSION
```

2. Merge pull request
3. Travis CI will upload the new design to the design server and sets the default design on develop
4. To migrate design versions on documents, check documentation in the [livingdocs-api project](https://github.com/nzzdev/livingdocs-api)


### Testing

1. Make sure your Morpheus styles and components are up-to-date in `livingdocs--build` by running `gulp ld:prod`
2. Run `bower link` from the top directory of this project
3. Inside the livingdocs-editor project, head to `bower_components`, first delete any existing folder or symlink called `livingdocs-design-morpheus` then run `ln -s <path-to-your-local-morpheus-fork>/livingdocs--build livingdocs-design-morpheus`
4. Go back to the root folder of the livingdocs-editor project and start the editor with `grunt serve --env=develop`
5. Test your updated design within the editor


#### Troubleshooting

When creating a new article, the request fails when loading the design from the server:
> 404: Failed to fetch the design 'http://api.livingdocs.io/designs/morpheus/2.9.2

You either have a **host mismatch** in the editor and server configuration or your **project design/version is outdated**

1. Simplest first. Make sure you're running two compatible projects. (eg. you cannot run the NZZ-editor with the LI-server)
2. The hosts of the design repository in server and editor must match. This should always be the case, unless someone accidentally changed them or you have overridden them explicitely.
  * **Server:**
    * Check what design repository host you configured for `designs.design_repository` in `server/conf/environments/{env}.coffee`
    * Make sure, you're not overriding this in `server/conf/secrets/{env}.coffee`
    * Don't be fooled by the setting `designs.default_design` - It's only used for the initial project creation. Once the project is set up, it has no impact anymore.
  * **Editor:**
    * The host configured must match the config in `app.designsApi.host` in `config/environments/{env}.coffee`
    * Don't be fooled by the setting `app.designsApi.stub` - It's used for local testing when developing a design and has no impact in your normal workflow.
3. Your project always has a design configured in the database. If someone updates the design or version, you will need to manually keep it in sync. You can do so, using the `ldm channel:design-version:add` above.