# Summary
* [Introduction](./README.md)

## Evaluation Guide
* [Getting started](walkthroughs/getting_started.md)
* [System Prerequisites](walkthroughs/getting-started-with-local-development.md)
* [Livingdocs Design and Components](reference-docs/common-designs/create_designs.md)
* [Metadata Plugins](walkthroughs/metadata/metadata-examples.md)
* [Image Services](concepts/images/image-services.md)
* [Includes](reference-docs/doc-includes/intro.md)
* [Glossary](./DICTIONARY.md)


## Videos

* [Livingdocs Design Intro](videos/design_intro.md)
* [Livingdocs Boilerplate Intro](videos/boilerplate_intro.md)
* [Livingdocs Includes](videos/includes.md)


## Reference Documentation

* Server
  * [Initialization](reference-docs/server-extensions/server-initalization.md)
  * [Configuration File](reference-docs/server-configuration/config.md)
  * [Channel Config](reference-docs/server-configuration/channel-config.md)
  * [Content-Type Config](reference-docs/server-configuration/content-type-config.md)
  * [Metadata on the Server](reference-docs/server-configuration/metadata.md)
  * [Hooks](reference-docs/server-configuration/hooks.md)
  * [Import API](reference-docs/server-import-api/import_api.md)
  * [Specify Loaded Features](reference-docs/server-configuration/stack.md)
  * [Events](reference-docs/server-extensions/events.md)
  * [Logs](reference-docs/server-configuration/logging.md)
  * [Single Sign-On](reference-docs/server-configuration/single_sign-on.md)
  * [Server Admin Commands](reference-docs/server-configuration/admin-commands.md)
  * [Using Google Cloud Storage](reference-docs/server-configuration/google-cloud-storage.md)
  * [Teaser Preview Configuration](reference-docs/server-configuration/teaser-preview-config.md)
  * [Desk-Net Integration](reference-docs/server-configuration/desknet-integration.md)
* Editor
  * [Document Editing Features](reference-docs/editor-configuration/editing-features.md)
  * [Text Editing Config](reference-docs/editor-configuration/text-editing.md)
  * [Menu and Dashboards](reference-docs/editor-configuration/menu-and-dashboards.md)
  * [Document Drag & Drop](reference-docs/editor-configuration/document-drag-drop.md)
  * [Image Cropper Config](reference-docs/editor-configuration/image-cropping.md)
  * [Image Source Policy Config](reference-docs/editor-configuration/image-source-policy.md)
  * [Metadata Configuration](reference-docs/editor-configuration/metadata.md)
  * [Customizing the Navigation](reference-docs/editor-configuration/main-navigation.md)
  * [Login](reference-docs/editor-configuration/login.md)
* Livingdocs Design
  * [Design Config](reference-docs/common-designs/design_config.md)
  * [Component Config](reference-docs/common-designs/component_config.md)
* Livingdocs Content Model
  * [Livingdoc](reference-docs/common-livingdoc/livingdoc.md)
  * [Component Tree](reference-docs/common-livingdoc/component_tree.md)
  * [Component Model](reference-docs/common-livingdoc/component_model.md)
  * [Directives](reference-docs/common-livingdoc/directives.md)
* Includes
  * [Include Server Config](reference-docs/doc-includes/server_customization.md)
  * [Include User Interfaces](reference-docs/doc-includes/editor_customization.md)
  * [Includes with Multiple Services](reference-docs/doc-includes/service_multiselect.md)
* [Print API](reference-docs/server-print-api/print-api.md)
* [Seed API](reference-docs/server-seed-api/seed_api.md)

## Design Howtos

* [Create a Bullet List Component](reference-docs/common-designs/list_example.md)
* [Running and defining design migrations](concepts/document-migrations/migrations.md)
  * [Example: Removing a directive](concepts/document-migrations/examples/remove_directive.md)
  * [Example: Renaming a directive](concepts/document-migrations/examples/rename_directive.md)
  * [Example: Adding a metadata field](concepts/document-migrations/examples/add_metadata_field.md)

## General Howtos

* [Use Document Copy](concepts/copying-documents/document_copy_feature.md)
* [Register a Custom Server Feature](walkthroughs/add_customizations.md)
* [Configure Includes: Article Embed and List](reference-docs/doc-includes/embed_and_list.md)
* [Assign Access Rights](administration/access_rights.md)
* [Validate Task Completion](walkthroughs/validate_tasks.md)
* [Add Custom Realtime Proofreading Dashboard](walkthroughs/add-custom-realtime-proofreading-dashboard.md)
* [Add Custom Task](walkthroughs/add-custom-task.md)
* [Add Custom Proofreading Task](walkthroughs/add-custom-proofreading-task.md)
* [Implement Single Sign-On](walkthroughs/github-login.md)
* [Add an Instagram Embed](walkthroughs/instagram_embed.md)
* [Includes: Add an Twitter Include](walkthroughs/twitter_include_embed.md)
* [Use Push Notifications and Custom Dashboard Item](walkthroughs/push_notifications.md)
* [Enable Multi-Language Support](walkthroughs/setup_multilanguage.md)
* [A Possible Translation System](walkthroughs/translations_example.md)
* [Setup Categories](walkthroughs/activate-categories.md)
* [A Possible Routing System](reference-docs/server-public-api/routing-system.md)
* [Hugo Drag and Drop](reference-docs/server-extensions/hugo-dnd.md)
* [Enable Soft Lock](walkthroughs/enable-soft-lock.md)
* [Asset Management](reference-docs/common-livingdoc/asset-management.md)
* [Author Management](walkthroughs/prefill-author.md)


## Devops

* [Hosting Livingdocs](setup-and-deployment/self-hosting.md)

  * [Hardware Requirements](setup-and-deployment/hardware-requirements.md)
  * [Architecture](setup-and-deployment/high-availability/README.md)
    * [High-Availability](setup-and-deployment/high-availability/high-availability-setup.md)
  * [Docker](setup-and-deployment/docker/README.md)
    * [Build Docker Images](setup-and-deployment/docker/build-docker-images.md)
  * [External Services](setup-and-deployment/external-services.md)
  * [Proxy](setup-and-deployment/proxy.md)
  * [NPM Tokens](setup-and-deployment/npm/access-private-npm-modules.md)

* [Design Server](reference-docs/server-configuration/design-servers.md)
* [How to do a Load Test](reference-docs/maintenance/how-to-do-a-load-test.md)
* [How to do a Stress Test](https://github.com/DaRaFF/stress-test-example#how-to-make-a-simple-stress-test)
* [How to Configure and Interpret Varnish](reference-docs/maintenance/how-to-varnish.md)



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
