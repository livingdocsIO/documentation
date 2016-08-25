# CMS Troubleshoot-Guide
This document is a collecation of all possible error you can get while working on the CMS project.
The purpose of this document is to provide error messages and the solutions to it.

## /bin/sh: dropdb: command not found

#### Solution
Check if you have Docker enabled locally. (/secrets/local.coffee)

    module.exports =
      db:
        docker:
          enable: true


## AssertionError: Missing configuration: db.host

#### Solution
Make sure the setting is present in your config. If you have recently restarted docker make sure you run `eval "$(docker-machine env default)"` and `export DOCKER_IP=$(docker-machine ip default)`.


## Work with a local LD Framework Instance
If you develop a feature in the Framework and whant to test it locally.
#### Solution
Open the Terminal and change into the framework directory. Than create a Bower link:

    npm link

change into the editor directory and type

    npm link @livingdocs/framework

From now on you will use the local verison of the Framework.
Don't forget to make a build to update the dist files in the Editor. To do so enter following in the framework directory:

    npm run build


## Mapping outdated
    warn: Elasticsearch: The mapping 'document' is outdated.
    warn: Elasticsearch: The mapping 'publication' is outdated.

#### Solution
Run following commands in the API/Server project:

    grunt search-index:document:reset
    grunt search-index:publication:reset

## Grunt CPU usage very high
Sometimes the Editor and API/Server watch task is using to much CPU.

#### Solution
Add the interval setting to the watch options

    watch:
        options:
          interval: 5007

## Parsing design morpheus@3.4.3: component list: include.service: required property missing
Happens when tring to make a local build of the livingdocs framework.

#### Solution
1) If you run a local design server make sure you add the latest design to the LDM. To get the latest design check the version number in the morpheus project (/livingdocs/dconfig.json)

        ldm channel:design-version:add --name morpheus --version 9.3.0 --channel 1
        ldm channel:design-version:current --name morpheus --version 9.3.0 --channel 1

2) If you don't have a local design server...... tbd


## Error: Could not execute GraphicsMagick/ImageMagick: identify "-ping" "-format" "%m," "-" this most likely means the gm/convert binaries can't be found
If you have error messages about 'imagemagick' when uploading a image in the Editor, make sure imagemagick is installed.

#### Install Imagemagick

    brew install imagemagick
    brew link xz libtool jpeg libpng freetype


and add this line to your `~/.profile` or `~/.zshrc` and execute it in your console first.

    export PATH=${PATH}:/usr/local/Cellar/imagemagick/6.9.2-8/bin


## stack: "error: insert into "document_publications" ("created_at", "document_id", "metadata_id", "project_id", "revision_id", "updated_at", "user_id") values ($1, $2, $3, $4, $5, $6, $7) returning "id" - null value in column "html" violates not-null constraint

#### grunt migrate to the rescue in the API

    grunt migrate

## stack error: Unrecognized channel mode setting 'web'

#### database needs a migration to the newest version

    grunt migrate

## ldm project:design:add --name morpheus --version 7.1.0 ERR! project:design:add { [Error: Server validation Error: ERR! project:design:add response: [object Object] ERR! project:design:add message: Failed to fetch the design

#### Check design version

most likely you are trying to add a old design to LDM. Check what the current local design number is and add it with the correct design version.

OR you are using outdated LDM commands. type 'ldm' in console to see latest commands for adding designs and getting channel lists.

Example:

    ldm channel:design-version:add --name morpheus --version 9.3.0 --channel 1
    ldm channel:design-version:current --name morpheus --version 9.3.0 --channel 1


## Test `grunt setup just works:` fails on livingdocs-server

Might happen if you still have a `npm-shrinkwrap.json` file; it has been removed from the project (and is listed in .gitignore), so `npm install` will not install the required package versions.

```
rm npm-shrinkwrap.json
rm -rf node_modules
npm install
```