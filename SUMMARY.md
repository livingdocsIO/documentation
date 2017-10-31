# Summary

* [Getting started](./getting_started.md)

* [Setting up Livingdocs locally](walkthroughs/getting-started-with-local-development.md)

* [Glossary](./DICTIONARY.md)

## Videos

* [Livingdocs Design Intro](videos/design_intro.md)
* [Livingdocs Boilerplate Intro](videos/boilerplate_intro.md)
* [Livingdocs Includes](videos/includes.md)

## Reference

* [Channel config](reference-docs/server-configuration/channel-config.md)
  * [Config options](reference-docs/server-configuration/channel-config.md)
  * [Hooks](reference-docs/server-configuration/channel-config.md#hooks)
  * [Publication hooks](reference-docs/server-configuration/channel-config.md#publishunpublish-hooks)
  * [Render hooks](reference-docs/server-configuration/channel-config.md#before-render-hooks)
  * [Collection hooks](reference-docs/server-configuration/channel-config.md#document-lists-hooks)
* Data model
  * [Livingdoc](reference-docs/common-livingdoc/livingdoc.md)
  * [Component tree](reference-docs/common-livingdoc/component_tree.md)
  * [Component model](reference-docs/common-livingdoc/component_model.md)
  * [Directives](reference-docs/common-livingdoc/directives.md)
* Design
  * [Component config](reference-docs/common-designs/component_config.md)
  * [Design config](reference-docs/common-designs/design_config.md)
* [Editor config](reference-docs/editor-configuration/editing-features.md)
* [Events](reference-docs/server-extensions/events.md)
* [Image cropper config](reference-docs/editor-configuration/image-cropping.md)
* [Image services](concepts/images/image-services.md)
* Includes
  * [Include server config](reference-docs/doc-includes/server_customization.md)
  * [Include user interfaces](reference-docs/doc-includes/editor_customization.md)
  * [Includes with multiple services](reference-docs/doc-includes/service_multiselect.md)
* [Metadata definition](reference-docs/server-configuration/metadata.md)
* [Metadata user interfaces](reference-docs/editor-configuration/metadata.md)
* [Print API](reference-docs/server-print-api/print-api.md)
* [Server config](reference-docs/server-configuration/config.md)
* [Stack](reference-docs/server-configuration/stack.md)
* [Text editing config](reference-docs/editor-configuration/text-editing.md)

## Design Guides

* [Introduction to design and components](reference-docs/common-designs/create_designs.md)
* [How to do a bullet list](reference-docs/common-designs/list_example.md)
* [Running and defining design migrations](concepts/document-migrations/migrations.md)

## Customizing Guides

* [Register a custom feature](walkthroughs/add_customizations.md)
* [Define Metadata](concepts/metadata/metadata-examples.md)
* [Implement includes](reference-docs/doc-includes/intro.md)
* [Configure article embed and list](reference-docs/doc-includes/embed_and_list.md)
* [Use the Publish Hooks](reference-docs/server-extensions/publish-hooks.md)
* [Add a search filter](reference-docs/editor-configuration/search-filters.md)
* [A possible routing system](reference-docs/server-public-api/routing-system.md)

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

<!-- ## Livingdocs core development

* Editor
  * [Styleguide](reference-docs/editor-styleguide/styleguide.md)
  * [Why use an image service?](concepts/images/why-an-image-service.md)
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
  * [Browser API](reference-docs/common-livingdoc/browser_api.md) -->
