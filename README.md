
# Livingdocs documentation


#### Structure of the documentation

The documentation is structured in two main parts:


- [Public](#public)

  Explains how to create your designs, configure and use a Livingdocs Server.

- [Core](#core)

  This part is aimed at developers who want to contribute to Livingdocs core repositories.


#### Get to know the Livingdocs basics

- [Introduction into Livingdocs](./concepts/introduction.md)


## Public

#### Design

Guides:

- ★ Create and upload a design ✍
- [Create designs with livingdocs-design-boilerplate](./public/design/create_designs.md)


Learn about Livingdocs designs which define the components you can use in your documents.

- How a design works ✍
- Design Configuration Options ✍


#### Livingdocs Server Configuration

Configure a Livingdocs server:

- Projects ✍
- Channels ✍
- Metadata ✍
- Collaboration ✍
- Text formatting and spellchecking ✍

Extend a Livingdocs server:
- Extend a Livingdocs server with custom modules ✍


#### Livingdocs Server Public API

- [Publish and unpublish](./public/APIs/publish_plugin.md)
- [Print API](./public/APIs/print_api.md)
- Document API ✍
- Webhooks & Evens ✍


#### Livingdocs Server Integrations

- Hugo ✍
- Authentication ✍


#### Document Migrations

Learn how you can roll out with breaking changes in your design and how you can update your documents in bulk with our migration framework:

- [Design and data structures](./public/migrations/migrations.md)



## Core

This documentation applies if you work on core Livingdocs repositories or want to send pull requests.

The main core repositories are:

- [upfrontIO/livingdocs-editor](https://github.com/upfrontIO/livingdocs-editor)
- [upfrontIO/livingdocs-server](https://github.com/upfrontIO/livingdocs-server)
- [upfrontIO/livingdocs-framework](https://github.com/upfrontIO/livingdocs-framework)
- [upfrontIO/editable.js](https://github.com/upfrontIO/editable.js)

Infrastructure and hosting repos:

- [upfrontIO/infrastructure](https://github.com/upfrontIO/infrastructure)
- [upfrontIO/livingdocs-rancher](https://github.com/upfrontIO/livingdocs-rancher)
- [upfrontIO/livingdocs-docker](https://github.com/upfrontIO/livingdocs-docker)
- [upfrontIO/dockerfile-elasticsearch](https://github.com/upfrontIO/dockerfile-elasticsearch)
- [upfrontIO/dockerfile-postgres](https://github.com/upfrontIO/dockerfile-postgres)

Development Support repos:

- [upfrontIO/livingdocs-manager](https://github.com/upfrontIO/livingdocs-manager)
- [upfrontIO/apply-guides](https://github.com/upfrontIO/livingdocs-rancher)

Experimental:

- [upfrontIO/livingdocs-design-viewer](https://github.com/upfrontIO/livingdocs-design-viewer)


### Guides

#### Editor, Server and Framework development

★ [Use and update a design during development](./core/guides/design/local-design.md)  
★ [Set editor and service-server for development](./core/guides/local-development/editor-and-service-server.md)  
★ [Run a local editor against a remote server](./core/guides/local-development/editor-only.md)  
★ [Link local dependencies: server and/or framework](./core/guides/local-development/link-local-dependencies.md)  


#### Livingdocs Server customization

★ [Add a custom include](./core/guides/customization/add-custom-include.md)


### Documentation for selected core repos:

#### Livingdocs server

- Core and editing API
- Features
- Testing
- Configuration

#### Livingdocs editor

- Testing
- Configuration
- [Metadata components](./core/livingdocs-editor/configurable-metadata-screen.md)

#### Livingdocs framework

- Design
- [Browser API](./core/livingdocs-framework/browser_api.md)
- [Livingdoc](./core/livingdocs-framework/livingdoc.md)
- [Component Tree](./core/livingdocs-framework/component_tree.md)
- [Component Model](./core/livingdocs-framework/component_model.md)
- [Directives](./core/livingdocs-framework/directives.md)


#### Editable.js

- [Documentation and demo](http://upfrontio.github.io/editable.js)
- Repo: [upfrontIO/editable.js](https://github.com/upfrontIO/editable.js)


#### Livingdocs Manager (ldm)

- Livingdocs manager (ldm): [upfrontIO/livingdocs-manager](https://github.com/upfrontIO/livingdocs-manager)


### Deployment

#### Requirements

- [Software](./core/guides/deployment/requirements/requirements.md)
- [Hardware](./core/guides/deployment/requirements/hardware-requirements.md)


#### Amazon

- [Amazon S3](./core/guides/deployment/amazon/amazon_s3.md)


#### Container

- [docker/dokku](./core/guides/deployment/container/docker.md)


### Delivery:

- Service Server: [upfrontIO/livingdocs-service-server](https://github.com/upfrontIO/livingdocs-service-server)
- Blog & Boilerplate: [upfrontIO/livingdocs-delivery](https://github.com/upfrontIO/livingdocs-delivery)
- Website: [upfrontIO/livingdocs-delivery-website](https://github.com/upfrontIO/livingdocs-delivery-website)
- Bluewin: [upfrontIO/bluewin-delivery](https://github.com/upfrontIO/bluewin-delivery)
- [NZZ delivery architecture documentation](https://github.com/nzzdev/cms-guide/tree/master/architecture)


### FAQ

- [CMS troobleshooting](./core/guides/faq/nzzdev_cms-troubleshoot-guide_README.md)
- [NZZ FAQ](./core/guides/faq/nzzdev_morpheus_livingdocs_README.md)


### Development Tips

- [Profiling](./core/development-tips/profiling.md)

### Contribution guidelines

If you want to contribute in code or documentation or have to create a new repository please read our [contribution guidelines](./contribution-guidelines).
