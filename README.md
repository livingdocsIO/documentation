# Livingdocs documentation

- [Concepts](#concepts)
- [Public](#public)
  - [Design](#design)
  - [Configuration](#configuration)
  - [APIs](#apis)
  - [Migrations](#migrations)
  - [Integrations](#integrations)
- [Core](#core)
  - [Guides](#guides)
    - [Local development](#local-development)
    - [Working with designs](#working-with-designs)
    - [Customization](#customization)
    - [Deployment](#deployment)
      - [Requirements](#requirements)
      - [Infrastructure](#infrastructure)
      - [Amazon](#amazon)
      - [Container](#container)
    - [FAQ](#faq)
    - [Delivery](#delivery)
  - [Livingdocs server](#livingdocs-server)
  - [Livingdocs editor](#livingdocs-editor)
  - [Livingdocs framework](#livingdocs-framework)
    - [Design](#design)
- [Contribution guidelines](#contribution-guidelines)




## Concepts

- [x] [Introduction](./concepts/introduction.md) **[TO CHECK]**
- [ ] What is a document?
- [ ] What is a component?
- [ ] What is a no-CMS?
- [ ] What is a design?




## Public


### Design

- [ ] [Create and upload a design](./livingdocs-documentation/design)  **[TO MAKE]**


### Configuration

- [ ] Projects
- [ ] Channels
- [ ] Metadata
- [ ] Collaboration
- [ ] Text formatting


### APIs

- [x] [Publish and unpublish](./public/APIs/publish-plugin.md) **[TO CHECK]**
- [ ] Document (aka Public)
- [ ] Core: Extend server with custom code


### Migrations

- [x] [Design and data structures](./public/migrations/migrations.md)  **[TO CHECK]**


### Integrations

- [ ] Hugo
- [ ] Webhooks
- [ ] Authentication




## Core


### Guides

- [x] [Guide ideas from the team](./core/guide-ideas-from-the-team.md)

#### Local development
- [ ] Set editor and server for development
- [ ] Run a local editor against a remote server
- [ ] Link local dependencies: server and/or framework

#### Design
- [ ] [Test your design in a local editor](./core/design) **[TO MAKE]**

#### Customization
- [x] [Add a custom include](./core/customization/add-custom-include.md) **[TO CHECK]**

#### Deployment

##### Requirements
- [x] [Software](./core/guides/deployment/requirements.md) **[TO CHECK]**
- [x] [Hardware](./core/guides/deployment/hardware-requirements.md) **[TO CHECK]**

##### Infrastructure
- [x] [Introduction](https://github.com/upfrontIO/infrastructure) **[EXTRACT FROM]**
- [x] [Rancher](https://github.com/upfrontIO/livingdocs-rancher)  **[EXTRACT FROM]**

##### Amazon
- [x] [Amazon S3](./core/guides/amazon/amazon_s3.md) **[TO CHECK]**

##### Container
- [x] [livingdocs-docker](https://github.com/upfrontIO/livingdocs-docker) **[EXTRACT FROM]**
- [x]  [docker/dokku](./core/deployment/container/docker.md) **[TO CHECK]**
- [x] [dockerfile-elasticsearch](https://github.com/upfrontIO/dockerfile-elasticsearch) **[EXTRACT FROM]**
- [x] [dockerfile-postgres](https://github.com/upfrontIO/dockerfile-postgres) **[EXTRACT FROM]**

#### FAQ
- [x] [CMS troobleshooting](./core/guides/faq/nzzdev_cms-troubleshoot-guide_README.md) **[TO CHECK]**
- [x] [NZZ FAQ](./core/guides/faq/nzzdev_morpheus_livingdocs_README.md) **[TO CHECK]**
- [x] [Profiling](./core/guides/faq/profiling.md) **[TO CHECK]**


### Architecture

- [ ] Introduction
- [ ] How do server, editor and framework play together?
- [x] [Document and document structure](./core/architecture/nzzdev_nzz-standard_docs_html-format.md) **[TO CHECK]**
- [x] [HTML format](./core/architecture/nzzdev_nzz-standard_docs_json-format.md) **[TO CHECK]**

#### Delivery:
  - [x] [NZZ delivery architecture](https://github.com/nzzdev/cms-guide/tree/master/architecture) **[TO EXTRACT]**
  - [x] [Blog delivery](https://github.com/upfrontIO/livingdocs-delivery) **[TO EXTRACT]**
  - [x] [Bluewin delivery](https://github.com/upfrontIO/bluewin-delivery) **[TO EXTRACT]**
  - [x] [livingdocs-delivery-REST-API](./core/architecture/delivery) **[TO MAKE]**


### Livingdocs server

- [x] [Core and editing API](./core/livingdocs-server) **[TO MAKE]**
- [ ] Features
- [ ] Testing
- [ ] Configuration

### Livingdocs editor

  - [ ] Testing
  - [ ] Configuration
  - [x] [Metadata components](./core/livingdocs-editor/configurable-metadata-screen.md)

### Livingdocs framework

- [ ] Design
- [ ] Browser API
- [ ] Node API
- [x] [Editable.js](https://github.com/upfrontIO/editable.js) **[EXTRACT FROM]**
- [ ] Testing

#### Design

- [x] [Livingdocs manager - ldm](https://github.com/upfrontIO/livingdocs-manager) **[TO EXTRACT]**
- [x] [Design viewer](https://github.com/upfrontIO/livingdocs-design-viewer) **[TO EXTRACT]**




## Contribution guidelines

- [x] [Documentation taxonomy](./contribution-guidelines/documentation/documentation-taxonomy.md)
- [x] [Template for writing readmes](./contribution-guidelines/documentation/how-to-write-readmes.md)
- [x] [Apply guides](https://github.com/upfrontIO/apply-guides)
- [x] [Collaboration](./contribution-guidelines/collaboration) (merge from upfronIO/guides)
- [x] [Git](./contribution-guidelines/git) (merge from upfronIO/guides)
- [x] [Npm](./contribution-guidelines/npm) (merge from upfronIO/guides)
- [x] [Style guides](./contribution-guidelines/style-guides) (merge from upfronIO/guides)
