# Get Started with Livingdocs as a Service
Livingdocs offers a headless CMS as a service.

This short guide explains how to set up and use the service with your own design.

# Project setup
- Setup a project on the livingdocs Service: https://edit.livingdocs.io/
- Add an API Token
- Add your Design to the project (check [design setup](./design_setup.md) section)
- Add Content types (use also [livingdocs-cli](https://github.com/livingdocsIO/livingdocs-cli))
- Define in each Content Type the components and metadata
- Create groups with the different Rights
- Invite Users to your project

## project config download and changes
With the following steps an embedded Design can be created for the new project.

- Install the cli project npm install -g livingdocs-cli
- Use the API Token you have added to your project → `export LI_TOKEN=`
- `export LI_DIST_FOLDER=`
- `export LI_HOST=https://server.livingdocs.io`
- `livingdocs-cli project-config:download`
- Go into your LI_DIST_FOLDER folder
- Now you can change your project settings

## publish the changes to the project on the service
if you use dedent to structure your html for the components you have to install it first with `npm install dedent --save-dev`
- `livingdocs-cli project-config:publish -d path-to-config-folder`
With this command the project gets updated. Please always reload the editor in the browser so that the new config is loaded.

## project configuration


## Restrictions
- content-types can't be removed
- metadata-fields can not be removed

# Frontend
Use the public api to get all Documents
https://edit.livingdocs.io/public-api
