---
title: livingdocs-server CLI
weight: 15
menus:
  reference-docs:
    parent: Server Extensions
---

Livingdocs provides a powerful server CLI where you can execute maintenance and administration tasks.

To execute a livingdocs-server CLI command, go to your Livingdocs Server folder and
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


# Create PostgreSQL database

The livingdocs-server utility allows you to easily manage your PostgreSQL database. When you execute `livingdocs-server database create`, the database will be created with the provided superuser, but it will also configure a `migrate` (owner) user and write user as specified in the Server configuration, if configuration bellow are not defined it will take default values.

```js
  db: {
    // name of the databse
    database: 'li_test',

    // write user: gets created automatically
    username: 'user_li_test_write',
    password: 'something',

    // migrate user: gets created automatically, used to run database migrations
    migrate: {
      username: 'li_test_owner',
      password: 'something2'
    },

    // this is the superuser that has permissions to create the users above
    setup: {
      username: 'postgres',
      password: 'something3',
      writeRole: `role_database_write`,
      readRole: `role_database_read`
    }
  },
```