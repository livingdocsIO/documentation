# Summary
* [Introduction](./README.md)

## Evaluation Guide
* [Getting started](guides/getting_started.md)
* [System Prerequisites](guides/getting-started-with-local-development.md)
* [Livingdocs Design and Components](guides/create_designs.md)
* [Metadata Plugins](guides/metadata/metadata-examples.md)
* [Image Services](guides/image-services.md)
* [Includes](reference-docs/includes/intro.md)
* [Glossary](./DICTIONARY.md)

## Reference Docs

* [Project Config](reference-docs/project-config/README.md)
  * [Content Types](reference-docs/project-config/content_types.md)
  * [Media Types](reference-docs/project-config/media_types.md)
  * [Categories](reference-docs/project-config/categories.md)
  * [Settings](reference-docs/project-config/settings.md)
  * [Editor Settings](reference-docs/project-config/editor_settings.md))
  * [Design](reference-docs/project-config/design.md)
  * [Deliveries](reference-docs/project-config/deliveries.md)
  * Directives
    * [Editable](reference-docs/project-config/directives/editable.md)
    * [Image](reference-docs/project-config/directives/image.md)
    * [Container](reference-docs/project-config/directives/container.md)
    * [Link](reference-docs/project-config/directives/link.md)
    * [Include](reference-docs/project-config/directives/include.md)
    * [HTML](reference-docs/project-config/directives/html.md)
    * [Style](reference-docs/project-config/directives/style.md)
* [Server Config](reference-docs/server-configuration/server-initalization.md)
  * [Configuration File](reference-docs/server-configuration/config.md)
  * [Webhooks](reference-docs/server-configuration/webhooks.md)
  * [Specify Loaded Features](reference-docs/server-configuration/stack.md)
  * [Logs](reference-docs/server-configuration/logging.md)
  * [Single Sign-On](reference-docs/server-configuration/single_sign-on.md)
  * [Using Google Cloud Storage](reference-docs/server-configuration/google-cloud-storage.md)
  * [Teaser Preview](reference-docs/server-configuration/teaser-preview-config.md)
  * [Publication Index](reference-docs/server-configuration/publication-index.md)
  * [Custom Index](reference-docs/server-configuration/custom-index.md)
* Editor Config
  * [Document Editing Features](reference-docs/editor-configuration/editing-features.md)
  * [Text Editing Config](reference-docs/editor-configuration/text-editing.md)
  * [Menu and Dashboards](reference-docs/editor-configuration/menu-and-dashboards.md)
  * [Default Dashboard Filter](reference-docs/editor-configuration/default_dashboard_filter.md)
  * [Image Cropper Config](reference-docs/editor-configuration/image-cropping.md)
  * [Image Source Policy Config](reference-docs/editor-configuration/image-source-policy.md)
  * [Metadata Configuration](reference-docs/editor-configuration/metadata.md)
  * [Login](reference-docs/editor-configuration/login.md)
* Server Code APIs
  * [Import API](reference-docs/server-api/import_api.md)
  * [Print API](reference-docs/server-api/print-api.md)
  * [Seed API](reference-docs/server-api/seed_api.md)
  * [DataSource API](reference-docs/server-api/data_source_api.md)
  * [Events](reference-docs/server-api/events.md)
  * [Hooks](reference-docs/server-api/hooks.md)
  * [Metadata Plugins](reference-docs/server-api/metadata.md)
* [Editor Code APIs](reference-docs/editor-api/initalization.md)
  * [Document Drag & Drop](reference-docs/editor-api/document-drag-drop.md)
  * [Vue Component Registry](reference-docs/editor-api/vue-component-registry.md)
* [Content Model](reference-docs/content-model/README.md)
  * [Livingdoc](reference-docs/content-model/livingdoc.md)
  * [Component Tree](reference-docs/content-model/component_tree.md)
  * [Component Model](reference-docs/content-model/component_model.md)
  * [Directives](reference-docs/content-model/directives.md)
* Includes
  * [Include Server Config](reference-docs/includes/server_customization.md)
  * [Include User Interfaces](reference-docs/includes/editor_customization.md)
  * [Includes with Multiple Services](reference-docs/includes/service_multiselect.md)

## Videos
  * [Technical Tutorials](https://vimeo.com/showcase/5875797)
  * [Workflows](https://vimeo.com/showcase/7538934)

## Guides

* [Register a Custom Server Feature](guides/add_customizations.md)
* [Register a Custom Display Filter](guides/register_custom_dashboard_filters_.md)
* [Copy documents between types](guides/document_copy.md)
* [Assign Access Rights](guides/access_rights.md)
* [Implement Single Sign-On](guides/github-login.md)
* [Use Push Notifications and Custom Dashboard Item](guides/push_notifications.md)
* [Enable Multi-Language Support](guides/setup_multilanguage.md)
* [Author Management](guides/prefill-author.md)
* [DPA Import](guides/dpa-import.md)
* Workflows
  * [Validate Task Completion](guides/validate_tasks.md)
  * [Add Custom Realtime Proofreading Dashboard](guides/add-custom-realtime-proofreading-dashboard.md)
  * [Add Custom Task](guides/add-custom-task.md)
  * [Add Custom Proofreading Task](guides/add-custom-proofreading-task.md)
  * [Enable Soft Lock](guides/enable-soft-lock.md)
* Integrations
  * [Hugo Integration (DAM)](guides/hugo-dnd.md)
  * [Desk-Net Integration (Planning)](guides/desknet-integration.md)
* Includes / Embeds
  * [Configure Includes: Article Embed and List](reference-docs/includes/article_and_list_includes.md)
  * [Includes: Add an Twitter Include](guides/twitter_include_embed.md)
  * [Includes: Add a Youtube Include](guides/youtube_include.md)
* Design
  * [Running and defining design migrations](guides/document-migrations/migrations.md)
    * [Example: Removing a directive](guides/document-migrations/examples/remove_directive.md)
    * [Example: Renaming a directive](guides/document-migrations/examples/rename_directive.md)
    * [Example: Adding a metadata field](guides/document-migrations/examples/add_metadata_field.md)
  * [Create a Bullet List Component](guides/list_example.md)
* Categories / Routing
  * [Routing](guides/routing-system.md)
  * [Setup Categories](guides/activate-categories.md)
* Development
  * [On Windows](guides/setup_windows.md)

## Devops

* [Hosting Livingdocs](devops/self-hosting.md)

  * [Hardware Requirements](devops/hardware-requirements.md)
  * [Architecture](devops/high-availability/README.md)
    * [High-Availability](devops/high-availability/high-availability-setup.md)
  * [Docker](devops/docker/README.md)
    * [Build Docker Images](devops/docker/build-docker-images.md)
  * [External Services](devops/external-services.md)
  * [Proxy](devops/proxy.md)
  * [NPM Tokens](devops/npm/access-private-npm-modules.md)

* [How to do a Load Test](devops/maintenance/how-to-do-a-load-test.md)
* [How to do a Stress Test](https://github.com/DaRaFF/stress-test-example#how-to-make-a-simple-stress-test)
* [How to Configure and Interpret Varnish](devops/maintenance/how-to-varnish.md)


## Contribution Guidelines

* [Guidelines](./CONTRIBUTING.md)

----

* Reference
  * [Display Filter](reference/display_filter.md))
  * [Base Filter](reference/base_filter.md))
  * [Config Storage Options](reference/config-storage-options.md))
  * [Config Storage Options](reference/es-document-search-example.md))
  * Legacy Design v1
    * [Design Config v1 to v2](reference/legacy-design/design_config_v1_to_v2.md))
    * [Design Config v1](reference/legacy-design/design_config_v1.md))
  * [Responsive Background Images](reference/responsive-bg-images.md))