# First Steps

## Get Started with Livingdocs as a Service

Livingdocs offers a headless CMS as a service.

This short guide explains how to set up and use the service with your own design.

### 1\) Basic Setup

* Setup a project on the [Livingdocs Service](https://edit.livingdocs.io/)
* Add an API token on the [Livingdocs Service](https://edit.livingdocs.io/) \(Burger Menu -&gt; Project Access -&gt; Api Tokens\)

### 2\) Create your own design

* [Download](getting_started.md#download-project-config-from-service) the project config from the Livingdocs Service
* Understand and modify the [project config](reference-docs/project_config/README.md)
  * modify the project settings
  * add contentTypes
  * define components and metadata in contentTypes
  * define your design [design settings](reference-docs/project_config/design.md)
* [Publish](getting_started.md#publish-a-project-config-to-the-service) your project config and the embedded design at the Livingdocs Service

### 3\) Administration

* Create groups with the different Rights
* Invite Users to your project

### 4\) Embed documents on your website

* [Show documents on your frontend](getting_started.md#show-documents-on-your-frontend)

## Download project config from service

With the cli tool `livingdocs-cli` \(\), you can down- and upload project configs and embedded designs.

### Preconditions

* Registered on [Livingdocs Service](https://edit.livingdocs.io/)
* Created an API token
* installed cli `livingdocs-cli` -&gt; `npm install -g livingdocs-cli`

### Example

```text
export LI_TOKEN=<your-project-token>
export LI_DIST_FOLDER=<folder-where-your-project-config-will-be-downloaded>
export LI_HOST=https://server.livingdocs.io
livingdocs-cli project-config:download
```

### Next Steps

* Go into your LI\_DIST\_FOLDER folder
* Now you can change your project settings and the design

## Publish a project config to the service

After modifying the project config and the design locally, you can publish the config/design to the service. Please always reload the editor in the browser so that the new config is loaded.

### Publication restrictions

* content-types can't be removed
* metadata-fields can not be removed

### Example

`livingdocs-cli project-config:publish -d path-to-config-folder`

## Show documents on your frontend

To render documents on your website, you have to load them via [Livingdocs public API](https://edit.livingdocs.io/public-api)
