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
    - [FAQ](#faq)
    - [Delivery, see:](#delivery-see)
  - [Livingdocs server](#livingdocs-server)
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
- [x] [Software](./core-documentation/guides/deployment/requirements.md) **[TO CHECK]**
- [x] [Hardware](./core-documentation/guides/deployment/hardware-requirements.md) **[TO CHECK]**

##### Infrastructure (Full repo links)
- [x] [Introduction](https://github.com/upfrontIO/infrastructure) **[EXTRACT FROM]**
- [x] [Rancher](https://github.com/upfrontIO/livingdocs-rancher)  **[EXTRACT FROM]**

##### Amazon
- [x] [Amazon S3](./core-documentation/guides/amazon/amazon_s3.md) **[TO CHECK]**

##### Container
- [x] [livingdocs-docker](https://github.com/upfrontIO/livingdocs-docker) **[EXTRACT FROM]**
- [x]  [docker/dokku](./core-documentation/deployment/container/docker.md) **[TO CHECK]**
- [x] [dockerfile-elasticsearch](https://github.com/upfrontIO/dockerfile-elasticsearch) **[EXTRACT FROM]**
- [x] [dockerfile-postgres](https://github.com/upfrontIO/dockerfile-postgres) **[EXTRACT FROM]**

#### FAQ
- [x] [CMS troobleshooting](./core-documentation/guides/faq/nzzdev_cms-troubleshoot-guide_README.md) **[TO CHECK]**
- [x] [NZZ FAQ](./core-documentation/guides/faq/nzzdev_morpheus_livingdocs_README.md) **[TO CHECK]**


### Architecture

- [ ] Introduction
- [ ] How do server, editor and framework play together?
- [x] [Document and document structure](./core-documentation/architecture/nzzdev_nzz-standard_docs_html-format.md) **[TO CHECK]**
- [x] [HTML format](./core-documentation/architecture/nzzdev_nzz-standard_docs_json-format.md) **[TO CHECK]**

#### Delivery, see:
  - [x] [NZZ delivery architecture](https://github.com/nzzdev/cms-guide/tree/master/architecture) **[TO EXTRACT]**
  - [x] [Blog delivery](https://github.com/upfrontIO/livingdocs-delivery) **[TO EXTRACT]**
  - [x] [Bluewin delivery](https://github.com/upfrontIO/bluewin-delivery) **[TO EXTRACT]**
  - [x] [livingdocs-delivery-REST-API](./core-documentation/architecture/delivery) **[TO MAKE]**


### Livingdocs server

- [x] [Core and editing API](./core-documentation/livingdocs-server) **[TO MAKE]**
- [ ] Features
- [ ] Testing
- [ ] Configuration

### Livingdocs editor

  - [ ] Testing
  - [ ] Configuration
  - [x] [Metadata components](./core-documentation/livingdocs-editor/configurable-metadata-screen.md)

### Livingdocs framework

- [ ] Design
- [ ] Browser API
- [ ] Node API
- [x] [Editable.js](https://github.com/upfrontIO/editable.js) **[EXTRACT FROM]**
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

