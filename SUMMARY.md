# Summary

* [Getting started](./getting_started.md)

* [Setting up Livingdocs locally](walkthroughs/getting-started-with-local-development.md)

* [Glossary](./GLOSSARY.md)

## Videos

* [Livingdocs Design Intro](videos/design_intro.md)
* [Livingdocs Boilerplate Intro](videos/boilerplate_intro.md)

## Livingdocs Design

* [Overview](reference-docs/common-designs/create_designs.md)
* [Livingdocs components](reference-docs/common-designs/component_config.md)
* [Design configuration](reference-docs/common-designs/design_config.md)
* [Bullet List](reference-docs/common-designs/list_example.md)
* [Design migrations](concepts/document-migrations/migrations.md)

## Livingdocs Customizations

* [Register customizations](walkthroughs/add_customizations.md)
* [Server](walkthroughs/add_customizations.md#server)
  * [Metadata](reference-docs/server-configuration/metadata.md)
  * [Adding Includes](reference-docs/server-extensions/add-custom-include.md)
  * [Available Events](reference-docs/server-extensions/events.md)
  * [Configure the server](reference-docs/server-configuration/config.md)
  * [Configure channels](reference-docs/server-configuration/channel-config.md)
  * [Publish and Unpublish Hooks](reference-docs/server-extensions/publish-hooks.md)
  * [Routing system](reference-docs/server-public-api/routing-system.md)
  * [Stack](reference-docs/server-configuration/stack.md)
* [Editor](walkthroughs/add_customizations.md#editor)
  * [Metadata](reference-docs/editor-configuration/metadata.md)
  * [Dashboard search filters](reference-docs/editor-configuration/search-filters.md)
  * [Cofigure text editing](reference-docs/editor-configuration/text-editing.md)
  * [Configure image cropping](reference-docs/editor-configuration/image-cropping.md)
  * [Configure editing features](reference-docs/editor-configuration/editing-features.md)

* [Metadata Example (editor and server)](concepts/metadata/metadata-examples.md)
* [Print API](reference-docs/server-print-api/print-api.md)

## Devops

* [Hosting Livingdocs](setup-and-deployment/self-hosting.md)

  * [Hardware Requirements](setup-and-deployment/hardware-requirements.md)
  * [Architecture](setup-and-deployment/high-availability/README.md)
    * [high-availability](setup-and-deployment/high-availability/high-availability-setup.md)
  * [Docker](setup-and-deployment/docker/README.md)
    * [Build docker images](setup-and-deployment/docker/build-docker-images.md)
  * [External services](setup-and-deployment/external-services.md)
  * [Proxy](setup-and-deployment/proxy.md)
  * [NPM Tokens](setup-and-deployment/npm/access-private-npm-modules.md)

* [Design Server](reference-docs/server-configuration/design-servers.md)
* [How to do a Load Test](reference-docs/maintenance/how-to-do-a-load-test.md)
* [How to do a Stress Test](https://github.com/DaRaFF/stress-test-example#how-to-make-a-simple-stress-test)
* [How to Configure and Interpret Varnish](reference-docs/maintenance/how-to-varnish.md)

## Administration

* [Create Users](walkthroughs/create-users.md)
* [Logs](reference-docs/server-configuration/logging.md)
* [Project](reference-docs/server-configuration/admin-commands.md#project-create)
* [Maintain Search Index](reference-docs/server-configuration/admin-commands.md#search-index)

## Livingdocs core development

* Editor
  * [Styleguide](reference-docs/editor-styleguide/styleguide.md)
  * [Why use an image service?](concepts/images/why-an-image-service.md)
  * [Image Services](concepts/images/image-services.md)
  * [Responsive background images](concepts/images/responsive-bg-images.md)
* Server
  * [Editing API](reference-docs/server-editing-api/README.md)
    * [Basics](reference-docs/server-editing-api/api_basics.md)
    * [CORS](reference-docs/server-editing-api/api_cors.md)
    * [Error](reference-docs/server-editing-api/api_errors.md)
    * [Authentication](reference-docs/server-editing-api/editing_api_authentication.md)
    * [Design](reference-docs/server-editing-api/editing_api_design.md)
    * [Lists](reference-docs/server-editing-api/editing_api_document_list.md)
    * [Documents](reference-docs/server-editing-api/editing_api_documents.md)
    * [Revisions](reference-docs/server-editing-api/editing_api_revisions.md)
    * [Publications](reference-docs/server-editing-api/editing_api_publications.md)
    * [Users](reference-docs/server-editing-api/editing_api_users.md)
    * [Projects](reference-docs/server-editing-api/editing_api_spaces.md)
    * [Hooks](reference-docs/server-editing-api/editing_api_hooks.md)
* Framework
  * [Browser API](reference-docs/common-livingdoc/browser_api.md)
  * [Livingdoc](reference-docs/common-livingdoc/livingdoc.md)
  * [Component Tree](reference-docs/common-livingdoc/component_tree.md)
  * [Component Model](reference-docs/common-livingdoc/component_model.md)
  * [Directives](reference-docs/common-livingdoc/directives.md)
