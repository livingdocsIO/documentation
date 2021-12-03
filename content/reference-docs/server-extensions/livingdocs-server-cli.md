---
title: livingdocs-server CLI
weight: 15
menus:
  reference-docs:
    parent: Server Extensions
---

Livingdocs provides a powerful server CLI where you can execute maintenance and administration tasks.

To execute a livingdocs-server CLI command, go to your livingdocs server folder and
- run `npx livingdocs-server` to get help for all available commands (see the list below)
- run `npx livingdocs-server <command>` to get help for a specific command

|Command|Description|
|-|-|
|cleanup-documents|Truncate stale revisions, publications and metadata.|
|cleanup-migrations|Truncate accepted migrations.|
|cleanup-metadata|Truncate metadata with no reference to documents or publications.|
|data-migration-run|Execute a data migration (create/prepare/accept)|
|database|Postgres database actions|
|design-add|Upload a design to the design server|
|design-set-active|Set active design version of a project|
|elasticsearch-delete-index|Delete Elasticsearch index|
|elasticsearch-index|Index documents into Elasticsearch|
|migrate|Execute database migrations|
|parse-channel-config-v1-to-v2|Parse a channel-config from v1(deprecated) to v2|
|project-seed|Setup multiple projects with a seed configuration|
|project-delete|Delete a project|
|project-truncate|Truncate documents/events|
|redis-flushdb|Flush Redis DB|
|revision-migration|Migrate document revisions|
|test|Execute livingdocs tests|
|transform-to-configurable-channel|Transform a static channel to a configurable channel|
|user-assign-group|Assign a user to a group in a project|
|user-create-admin|Create an admin user|
|user-create-admins|Create admin users|
|secret-add|Add a secret and optionally update the project config with it|
|secret-reencrypt|Re-encrypt all secrets with the configured encryption key|
|key-generate|Generate a signing or encryption json web key|
|completion|generate completion script for livingdocs-server CLI|
