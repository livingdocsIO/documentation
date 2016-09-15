
# Livingdocs documentation todos

## Get Started

- [x] [Introduction into Livingdocs](./concepts/introduction.md) **[TO CHECK]**
- [ ] What is a document?
- [ ] What is a component?
- [ ] What is a no-CMS?
- [ ] What is a design?


## Public


### Design

- [ ] Create and upload a design  **[TO MAKE]**


### Configuration

Configure a Livingdocs server.

- [ ] Projects
- [ ] Channels
- [ ] Metadata
- [ ] Collaboration
- [ ] Text formatting and spellchecking


### APIs

- [x] [Publish and unpublish](./public/APIs/publish_plugin.md) **[TO CHECK]**
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

- [x] [Guide ideas from the team](./contribution-guidelines/documentation/guide-ideas-from-the-team.md)

#### Local development
- [x] [Set editor and service-server for development](./core/guides/local-development/editor-and-service-server.md)
- [x] [Run a local editor against a remote server](./core/guides/local-development/editor-only.md)
- [x] [Link local dependencies: server and/or framework](./core/guides/local-development/link-local-dependencies.md)

#### Design
- [x] [Use and change a local design](./core/guides/design/local-design.md)
- [ ] [Local design](./core/design) **[EXTRACT FROM]**

#### Customization
- [x] [Add a custom include](./core/guides/customization/add-custom-include.md) **[TO CHECK]**

#### Deployment

##### Requirements
- [x] [Software](./core/guides/deployment/requirements/requirements.md) **[TO CHECK]**
- [x] [Hardware](./core/guides/deployment/requirements/hardware-requirements.md) **[TO CHECK]**

##### Infrastructure
- [x] Repo: [Introduction](https://github.com/upfrontIO/infrastructure) **[EXTRACT FROM]**
- [x] Repo: [Rancher](https://github.com/upfrontIO/livingdocs-rancher)  **[EXTRACT FROM]**

##### Amazon
- [x] [Amazon S3](./core/guides/deployment/amazon/amazon_s3.md) **[TO CHECK]**

##### Container
- [x] Repo: [livingdocs-docker](https://github.com/upfrontIO/livingdocs-docker) **[EXTRACT FROM]**
- [x] [docker/dokku](./core/guides/deployment/container/docker.md) **[TO CHECK]**
- [x] Repo: [dockerfile-elasticsearch](https://github.com/upfrontIO/dockerfile-elasticsearch) **[EXTRACT FROM]**
- [x] Repo: [dockerfile-postgres](https://github.com/upfrontIO/dockerfile-postgres) **[EXTRACT FROM]**

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

- [x] Repo: [NZZ delivery architecture](https://github.com/nzzdev/cms-guide/tree/master/architecture) **[TO EXTRACT]**
- [x] Repo: [Blog delivery](https://github.com/upfrontIO/livingdocs-delivery) **[TO EXTRACT]**
- [x] Repo: [Bluewin delivery](https://github.com/upfrontIO/bluewin-delivery) **[TO EXTRACT]**
- [ ] livingdocs-delivery-REST-API **[TO MAKE]**


### Livingdocs server

- [ ] Core and editing API **[TO MAKE]**
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
- [x] Repo: [upfrontIO/editable.js](https://github.com/upfrontIO/editable.js)
- [ ] Testing

#### Design

- [x] Livingdocs manager (ldm): [upfrontIO/livingdocs-manager](https://github.com/upfrontIO/livingdocs-manager) **[TO EXTRACT]**
- [x] Design viewer: [upfrontIO/livingdocs-design-viewer](https://github.com/upfrontIO/livingdocs-design-viewer) **[TO EXTRACT]**



## Contribution guidelines

- [x] [Documentation taxonomy](./contribution-guidelines/documentation/documentation-taxonomy.md)
- [x] [Template for writing readmes](./contribution-guidelines/documentation/how-to-write-readmes.md)
- [x] Use Livingdocs linting templates in your repo: [upfrontIO/apply-guides](https://github.com/upfrontIO/apply-guides)
- [x] [Collaboration](./contribution-guidelines/collaboration) (merge from upfronIO/guides)
- [x] [Git](./contribution-guidelines/git) (merge from upfronIO/guides)
- [x] [Npm](./contribution-guidelines/npm) (merge from upfronIO/guides)
- [x] [Style guides](./contribution-guidelines/style-guides) (merge from upfronIO/guides)
