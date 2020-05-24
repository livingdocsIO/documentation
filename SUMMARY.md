# Table of contents

* [Introduction](README.md)

## Evaluation Guide

* [Getting started](evaluation-guide/getting_started.md)
* [System Prerequisites](evaluation-guide/getting-started-with-local-development.md)
* [Livingdocs Design and Components](evaluation-guide/create_designs.md)
* [Metadata Plugins](evaluation-guide/metadata-examples.md)
* [Image Services](evaluation-guide/image-services.md)
* [Includes](evaluation-guide/intro.md)
* [Glossary](evaluation-guide/dictionary.md)

## Videos

* [Livingdocs Design Intro](videos/design_intro.md)
* [Livingdocs Boilerplate Intro](videos/boilerplate_intro.md)
* [Livingdocs Includes](videos/includes.md)

## Reference Documentation

* [Server Core APIs](reference-documentation/server-core-apis/README.md)
  * [Import API](reference-documentation/server-core-apis/import_api.md)
  * [Print API](reference-documentation/server-core-apis/print-api.md)
  * [Seed API](reference-documentation/server-core-apis/seed_api.md)
  * [DataSource API](reference-documentation/server-core-apis/data_source_api.md)
* [Server](reference-documentation/server/README.md)
  * [Initialization](reference-documentation/server/server-initalization.md)
  * [Configuration File](reference-documentation/server/config.md)
  * [Channel Config](reference-documentation/server/channel-config.md)
  * [Content-Type Config](reference-documentation/server/content-type-config.md)
  * [Metadata on the Server](reference-documentation/server/metadata.md)
  * [Hooks](reference-documentation/server/hooks.md)
  * [Webhooks](reference-documentation/server/webhooks.md)
  * [Specify Loaded Features](reference-documentation/server/stack.md)
  * [Events](reference-documentation/server/events.md)
  * [Logs](reference-documentation/server/logging.md)
  * [Single Sign-On](reference-documentation/server/single_sign-on.md)
  * [Server Admin Commands](reference-documentation/server/admin-commands.md)
  * [Using Google Cloud Storage](reference-documentation/server/google-cloud-storage.md)
  * [Teaser Preview Configuration](reference-documentation/server/teaser-preview-config.md)
  * [Desk-Net Integration](reference-documentation/server/desknet-integration.md)
  * [Search Publications](reference-documentation/server/publication-index.md)
* [Editor](reference-documentation/editor/README.md)
  * [Document Editing Features](reference-documentation/editor/editing-features.md)
  * [Text Editing Config](reference-documentation/editor/text-editing.md)
  * [Menu and Dashboards](reference-documentation/editor/menu-and-dashboards.md)
  * [Document Drag & Drop](reference-documentation/editor/document-drag-drop.md)
  * [Image Cropper Config](reference-documentation/editor/image-cropping.md)
  * [Image Source Policy Config](reference-documentation/editor/image-source-policy.md)
  * [Metadata Configuration](reference-documentation/editor/metadata.md)
  * [Customizing the Navigation](reference-documentation/editor/customizing-the-navigation.md)
  * [Login](reference-documentation/editor/login.md)
* [Livingdocs Design](reference-documentation/livingdocs-design/README.md)
  * [Design Config v2](reference-documentation/livingdocs-design/design_config_v2.md)
  * [Design Config v1 to v2 mapping](reference-documentation/livingdocs-design/design_config_v1_to_v2.md)
  * [Component Config](reference-documentation/livingdocs-design/component_config.md)
* [Livingdocs Content Model](reference-documentation/livingdocs-content-model/README.md)
  * [Livingdoc](reference-documentation/livingdocs-content-model/livingdoc.md)
  * [Component Tree](reference-documentation/livingdocs-content-model/component_tree.md)
  * [Component Model](reference-documentation/livingdocs-content-model/component_model.md)
  * [Directives](reference-documentation/livingdocs-content-model/directives.md)
* [Includes](reference-documentation/includes/README.md)
  * [Include Server Config](reference-documentation/includes/server_customization.md)
  * [Include User Interfaces](reference-documentation/includes/editor_customization.md)
  * [Includes with Multiple Services](reference-documentation/includes/service_multiselect.md)

## Design Howtos

* [Create a Bullet List Component](design-howtos/list_example.md)
* [Running and defining design migrations](design-howtos/migrations/README.md)
  * [Example: Removing a directive](design-howtos/migrations/remove_directive.md)
  * [Example: Renaming a directive](design-howtos/migrations/rename_directive.md)
  * [Example: Adding a metadata field](design-howtos/migrations/add_metadata_field.md)

## General Howtos

* [Use Document Copy](general-howtos/document_copy_feature.md)
* [Register a Custom Server Feature](general-howtos/add_customizations.md)
* [Configure Includes: Article Embed and List](general-howtos/embed_and_list.md)
* [Assign Access Rights](general-howtos/access_rights.md)
* [Validate Task Completion](general-howtos/validate_tasks.md)
* [Add Custom Realtime Proofreading Dashboard](general-howtos/add-custom-realtime-proofreading-dashboard.md)
* [Add Custom Task](general-howtos/add-custom-task.md)
* [Add Custom Proofreading Task](general-howtos/add-custom-proofreading-task.md)
* [Implement Single Sign-On](general-howtos/github-login.md)
* [Add an Instagram Embed](general-howtos/instagram_embed.md)
* [Includes: Add an Twitter Include](general-howtos/twitter_include_embed.md)
* [Use Push Notifications and Custom Dashboard Item](general-howtos/push_notifications.md)
* [Enable Multi-Language Support](general-howtos/setup_multilanguage.md)
* [A Possible Translation System](general-howtos/translations_example.md)
* [Setup Categories](general-howtos/activate-categories.md)
* [A Possible Routing System](general-howtos/routing-system.md)
* [Hugo Drag and Drop](general-howtos/hugo-dnd.md)
* [Enable Soft Lock](general-howtos/enable-soft-lock.md)
* [Asset Management](general-howtos/asset-management.md)
* [Author Management](general-howtos/prefill-author.md)

## CLI

* [.livingdocs-cli](cli/cli-dotfile.md)
* [Sync Project Configs](cli/sync-configs.md)

## Devops

* [Hosting Livingdocs](devops/self-hosting/README.md)
  * [Hardware Requirements](devops/self-hosting/hardware-requirements.md)
  * [Architecture](devops/self-hosting/high-availability/README.md)
    * [High-Availability](devops/self-hosting/high-availability/high-availability-setup.md)
  * [Docker](devops/self-hosting/docker/README.md)
    * [Build Docker Images](devops/self-hosting/docker/build-docker-images.md)
  * [External Services](devops/self-hosting/external-services.md)
  * [Proxy](devops/self-hosting/proxy.md)
  * [NPM Tokens](devops/self-hosting/access-private-npm-modules.md)
* [Design Server](devops/design-servers.md)
* [How to do a Load Test](devops/how-to-do-a-load-test.md)
* [How to do a Stress Test](https://github.com/DaRaFF/stress-test-example#how-to-make-a-simple-stress-test)
* [How to Configure and Interpret Varnish](devops/how-to-varnish.md)

## Livingdocs Service

* [Getting started](livingdocs-service/getting_started.md)
* [Reference docs](livingdocs-service/reference-docs/README.md)
  * [Project config](livingdocs-service/reference-docs/project_config.md)
  * [Design settings](livingdocs-service/reference-docs/design_settings_config.md)
  * [Design component](livingdocs-service/reference-docs/design-component.md)
