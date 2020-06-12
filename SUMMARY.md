# Summary
* [Introduction](./README.md)

## Evaluation Guide
* [Getting started](guides/getting_started.md)
* [System Prerequisites](guides/getting-started-with-local-development.md)
* [Livingdocs Design and Components](guides/create_designs.md)
* [Metadata Plugins](guides/metadata/metadata-examples.md)
* [Image Services](guides/image-services.md)
* [Includes](reference-docs/doc-includes/intro.md)
* [Glossary](./DICTIONARY.md)

## Reference Docs

* [Project Config](reference-docs/project-config/README.md)
  * [Content Types](reference-docs/project-config/content_types.md)
  * [Categories](reference-docs/project-config/categories.md)
  * [Settings](reference-docs/project-config/settings.md)
  * [Design](reference-docs/project-config/design.md)
  * Directives
    * [Editable](reference-docs/project-config/directives/editable.md)
    * [Image](reference-docs/project-config/directives/image.md)
    * [Container](reference-docs/project-config/directives/container.md)
    * [Link](reference-docs/project-config/directives/link.md)
    * [Include](reference-docs/project-config/directives/include.md)
    * [HTML](reference-docs/project-config/directives/html.md)
    * [Style](reference-docs/project-config/directives/style.md)
* Server Config
  * [Initialization](reference-docs/server-configuration/server-initalization.md)
  * [Configuration File](reference-docs/server-configuration/config.md)
  * [Metadata on the Server](reference-docs/server-configuration/metadata.md)
  * [Hooks](reference-docs/server-configuration/hooks.md)
  * [Webhooks](reference-docs/server-configuration/webhooks.md)
  * [Specify Loaded Features](reference-docs/server-configuration/stack.md)
  * [Events](reference-docs/server-configuration/events.md)
  * [Logs](reference-docs/server-configuration/logging.md)
  * [Single Sign-On](reference-docs/server-configuration/single_sign-on.md)
  * [Server Admin Commands](reference-docs/server-configuration/admin-commands.md)
  * [Using Google Cloud Storage](reference-docs/server-configuration/google-cloud-storage.md)
  * [Teaser Preview Configuration](reference-docs/server-configuration/teaser-preview-config.md)
  * [Desk-Net Integration](reference-docs/server-configuration/desknet-integration.md)
  * [Search Publications](reference-docs/server-configuration/publication-index.md)
* Editor Config
  * [Document Editing Features](reference-docs/editor-configuration/editing-features.md)
  * [Text Editing Config](reference-docs/editor-configuration/text-editing.md)
  * [Menu and Dashboards](reference-docs/editor-configuration/menu-and-dashboards.md)
  * [Document Drag & Drop](reference-docs/editor-configuration/document-drag-drop.md)
  * [Image Cropper Config](reference-docs/editor-configuration/image-cropping.md)
  * [Image Source Policy Config](reference-docs/editor-configuration/image-source-policy.md)
  * [Metadata Configuration](reference-docs/editor-configuration/metadata.md)
  * [Customizing the Navigation](reference-docs/editor-configuration/main-navigation.md)
  * [Login](reference-docs/editor-configuration/login.md)
* Server Core APIs
  * [Import API](reference-docs/server-api/import_api.md)
  * [Print API](reference-docs/server-api/print-api.md)
  * [Seed API](reference-docs/server-api/seed_api.md)
  * [DataSource API](reference-docs/server-api/data_source_api.md)
* [Content Model](reference-docs/content-model/README.md)
  * [Livingdoc](reference-docs/content-model/livingdoc.md)
  * [Component Tree](reference-docs/content-model/component_tree.md)
  * [Component Model](reference-docs/content-model/component_model.md)
  * [Directives](reference-docs/content-model/directives.md)
* Includes
  * [Include Server Config](reference-docs/doc-includes/server_customization.md)
  * [Include User Interfaces](reference-docs/doc-includes/editor_customization.md)
  * [Includes with Multiple Services](reference-docs/doc-includes/service_multiselect.md)

## Guides

* [Copy documents between types](guides/document_copy.md)
* [Register a Custom Server Feature](guides/add_customizations.md)
* [Configure Includes: Article Embed and List](reference-docs/doc-includes/embed_and_list.md)
* [Assign Access Rights](guides/access_rights.md)
* [Validate Task Completion](guides/validate_tasks.md)
* [Add Custom Realtime Proofreading Dashboard](guides/add-custom-realtime-proofreading-dashboard.md)
* [Add Custom Task](guides/add-custom-task.md)
* [Add Custom Proofreading Task](guides/add-custom-proofreading-task.md)
* [Implement Single Sign-On](guides/github-login.md)
* [Add an Instagram Embed](guides/instagram_embed.md)
* [Includes: Add an Twitter Include](guides/twitter_include_embed.md)
* [Use Push Notifications and Custom Dashboard Item](guides/push_notifications.md)
* [Enable Multi-Language Support](guides/setup_multilanguage.md)
* [A Possible Translation System](guides/translations_example.md)
* [Setup Categories](guides/activate-categories.md)
* [Routing](guides/routing-system.md)
* [Hugo Integration (DAM)](guides/hugo-dnd.md)
* [Enable Soft Lock](guides/enable-soft-lock.md)
* [Asset Management](guides/asset-management.md)
* [Author Management](guides/prefill-author.md)
* [Running and defining design migrations](guides/document-migrations/migrations.md)
  * [Example: Removing a directive](guides/document-migrations/examples/remove_directive.md)
  * [Example: Renaming a directive](guides/document-migrations/examples/rename_directive.md)
  * [Example: Adding a metadata field](guides/document-migrations/examples/add_metadata_field.md)
* [Create a Bullet List Component](guides/list_example.md)


## CLI

* [.livingdocs-cli](livingdocs-cli/cli-dotfile.md)
* [Sync Project Configs](livingdocs-cli/sync-configs.md)

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

* [Design Server](reference-docs/server-configuration/design-servers.md)
* [How to do a Load Test](reference-docs/maintenance/how-to-do-a-load-test.md)
* [How to do a Stress Test](https://github.com/DaRaFF/stress-test-example#how-to-make-a-simple-stress-test)
* [How to Configure and Interpret Varnish](reference-docs/maintenance/how-to-varnish.md)


## Livingdocs Service
* [Getting started](service/getting_started.md)
* Reference docs
  * [Project config](service/project_config.md)
  * [Design settings](service/design_settings_config.md)
  * [Design component](service/design_component_settings_config.md)

<!-- ## Livingdocs core development

* Editor
  * [Styleguide](reference-docs/editor-styleguide/styleguide.md)
* Framework
  * [Browser API](reference-docs/content-model/browser_api.md) -->
