- [Livingdocs concepts](#livingdocs-concepts)
- [Public documentation](#public-documentation)
  - [Design](#design)
  - [Configuration](#configuration)
  - [APIs](#apis)
  - [Migrations](#migrations)
  - [Integrations](#integrations)
- [Core documentation](#core-documentation)
  - [Guides](#guides)
    - [Local development](#local-development)
    - [Working with designs](#working-with-designs)
    - [Customization](#customization)
    - [Deployment](#deployment)
      - [Requirements](#requirements)
      - [Infrastructure see](#infrastructure-see)
      - [Amazon](#amazon)
      - [Container](#container)
    - [FAQ/Troubleshooting](#faqtroubleshooting)
    - [Delivery, see:](#delivery-see)
  - [Livingdocs server](#livingdocs-server)
    - [API](#api)
  - [Livingdocs editor](#livingdocs-editor)
  - [Livingdocs framework](#livingdocs-framework)
    - [Design](#design-1)
- [Contribution guidelines](#contribution-guidelines)
  - [Guides merge the guides repository in here](#guides-merge-the-guides-repository-in-here)




# Livingdocs documentation




## Livingdocs concepts

- [x] [Introduction](./livingdocs-concepts/introduction.md) **[TO CHECK]**
- [ ] What is a document?
- [ ] What is a component?
- [ ] What is a no-CMS?
- [ ] What is a design?




## Public documentation


### Design

- [ ] [Create and upload a design](./livingdocs-documentation/design)  **[TO MAKE]**


### Configuration

- [ ] Projects
- [ ] Channels
- [ ] Metadata
- [ ] Collaboration
- [ ] Text formatting


### APIs

- [x] [Publish and unpublish](./public-documentation/APIs/publish-plugin.md) **[TO CHECK]**
- [ ] Document (aka Public)
- [ ] Core: Extend server with custom code


### Migrations

- [x] [Design and data structures](./public-documentation/migrations/migrations.md)  **[TO CHECK]**


### Integrations

- [ ] Hugo
- [ ] Webhooks
- [ ] Authentication




## Core documentation


### Guides

#### Local development
- [ ] Set editor and server for development
- [ ] Run a local editor against a remote server
- [ ] Link local dependencies: server and/or framework

#### Design
- [ ] [Test your design in a local editor](./core-documentation/design) **[TO MAKE]**

#### Customization
- [x] [Add a custom include](./core-documentation/customization/add-custom-include.md) **[TO CHECK]**

#### Deployment

##### Requirements
- [x] [Hardware](https://github.com/upfrontIO/livingdocs/tree/master/installation) **[TO CHECK]**
- [x] [Software](https://github.com/upfrontIO/livingdocs/tree/master/installation) **[TO CHECK]**

##### Infrastructure see
- [x] [rancher1](https://github.com/upfrontIO/infrastructure) [rancher2](https://github.com/upfrontIO/livingdocs-rancher)  **[TO CHECK]**

##### Amazon
- [x] [Amazon S3](https://github.com/upfrontIO/livingdocs/blob/master/deployment/amazon_s3.md) **[TO CHECK]**

##### Container
- [x] see [docker](https://github.com/upfrontIO/livingdocs-docker) and [docker/dokku](https://github.com/upfrontIO/livingdocs/blob/master/deployment/docker.md) **[TO CHECK]**
- [x] [Elasticsearch](https://github.com/upfrontIO/dockerfile-elasticsearch) **[TO CHECK]**
- [x] [Postgres](https://github.com/upfrontIO/dockerfile-postgres) **[TO CHECK]**

#### FAQ/Troubleshooting
- [x] [From NZZ](https://github.com/nzzdev/cms-troubleshoot-guide) also check [troubleshooting design](https://github.com/nzzdev/morpheus/blob/develop/livingdocs/readme.md)


### Architecture

- [ ] Introduction
- [ ] How do server, editor and framework play together?
- [x] [Document and document structure](https://github.com/nzzdev/nzz-standard/blob/master/docs/json-format.md) **[TO CHECK]**
- [x] [HTML format](https://github.com/nzzdev/nzz-standard/blob/master/docs/html-format.md) **[TO CHECK]**

#### Delivery, see:
  - [x] [NZZ delivery architecture](https://github.com/nzzdev/cms-guide/blob/master/architecture/delivery_current.md) **[TO CHECK]**
  - [x] [NZZ new delivery architecture](https://github.com/nzzdev/cms-guide/blob/master/architecture/delivery_new.md) **[TO CHECK]**
  - [x] [Blog delivery](https://github.com/upfrontIO/livingdocs-delivery) **[TO CHECK]**
  - [x] [Bluewin delivery](https://github.com/upfrontIO/bluewin-delivery) **[TO CHECK]**
  - [x] [livingdocs-delivery-REST-API](https://github.com/upfrontIO/livingdocs/tree/master/delivery) **[TO CHECK]**


### Livingdocs server

#### API
- [x] [Core and editing](https://github.com/upfrontIO/livingdocs/tree/master/server) **[TO CHECK]**
- [ ] Features
- [ ] Testing
- [ ] Configuration

### Livingdocs editor

  - [ ] Testing
  - [ ] Configuration
  - [x] [Metadata components](https://github.com/upfrontIO/livingdocs-editor/pull/1088)

### Livingdocs framework

- [ ] Design
- [ ] Browser API
- [ ] Node API
- [x] [Editable.js](https://github.com/upfrontIO/editable.js) **[TO CHECK]**
- [ ] Testing

#### Design

- [x] [Livingdocs manager - ldm](https://github.com/upfrontIO/livingdocs-manager) **[TO CHECK]**
- [x] [Design viewer](https://github.com/upfrontIO/livingdocs-design-viewer) **[TO CHECK]**




## Contribution guidelines

- [x] [Documentation taxonomy]()
- [x] [Template for writing readmes]()
- [x] [Apply guides](https://github.com/upfrontIO/apply-guides)

### Guides merge the guides repository in here
  - [ ] Extend the CSS guide: dos and don’ts

