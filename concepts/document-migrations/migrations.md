# Livingdocs Data Migrations

## Overview

The Livingdocs design is in some sense like a database. Instead of database columns you define directives on a component, e.g. an editable title (`doc-editable='title'`). The component's "database" now has a "column" title.
Just as with a database you need to write data migrations if you make structural changes. This is necessary to adapt all existing documents to the new structure.

The next chapter will describe which kinds of design changes require you to write a migration script and which ones can be handled with a simple version bump. The section after that will show you the structure of a migration script. After that we look at the grunt task to help you run migrations and last but not least we'll present some examples of migration scripts.

## Migrations from design changes

Livingdocs designs have a version number in the `config.json` file that follows the [semver pattern](http://semver.org/). You should create a major version whenever a design change requires you to write a data migration. Livingdocs is very strict with un-migrated documents: when you try to open a document that has a different structure than the design you're using, it will fail with an error.
The following changes require a data migration:
- removing a directive from a component
- renaming a directive in a component
- changing the type of a directive (e.g. from `doc-editable` to `doc-image`)

The following changes do not require a data migration, but can be done with a simple [version bump](#the-data-migration-grunt-task). Note though that depending on the case you still might want to write a migration, it's just not mandatory, i.e. Livingdocs won't crash if you don't.
- HTML or CSS changes that don't affect the structure
- changes in the design's wrapper or any of the layout's wrappers
- changes in the assets of a design
- adding a new directive to a component (will be empty)
- adding a new layout
- moving a directive from one HTML tag to another in the same component
- removing or adding a `doc-optional` directive (`doc-optional` is never breaking)
- removing or changing a component property on a component (will be silently ignored)
- changes in the component set of a layout
- changes in the component set of a group
- changing the default component
- changes in the image ratios
- changes in the default content
- changes in the pre-filled components (will not be re-calculated for old documents)
- changes in the metadata field extractor configuration

It is important to note that the data migrations **only affect the Livingdocs data model and not the published HTML**. When you need to update your published HTML, for example after you changed some HTML markup, you need to write a custom handler for this in the boilerplate app that renders the last publication of a document and notifies your delivery layer of the change.

## Structure of a migration script

The previous section explained data migrations as a consequence of a design change. But data migrations really are a general-purpose tool that can be used to alter your existing documents. A different and common example is the need to add a new metadata field to all of your documents and initialize the value in some way.

The Livingdocs migration framework gives you a hook method to implement and calls this method with every document in your project. The hook method looks like this:

```js
exports.migrate = ({serializedLivingdoc, metadata}, callback) => {
  // do your stuff here

  // overwrite the JSON data model and the metadata in the response
  callback(null, {serializedLivingdoc, metadata})
}
```

For every document you will get the serialized Livingdoc data model (JSON) and the metadata associated with that document. You can then alter the JSON and metadata in your migration method and pass it to the callback which will automatically apply your changes to the document.

In order to create a migration script, simply add a file to the folder [`app/data-migrations`](https://github.com/livingdocsIO/livingdocs-server-boilerplate/tree/add-data-migration-sample/app/data-migrations). It might make sense to have some sort of increasing identifier in the filename to visualize history. In the file create a method `exports.migrate` as described above and implement your desired migration steps.

To run your migration script, use the `data-migration` grunt task which is explained in the next section.

## The `data-migration` grunt task

Livingdocs provides a grunt task to help you running and managing data migrations. If you type `grunt data-migration` on the command line of your boilerplate app, you get the following menu:

```sh
Select an action to execute, press CTRL+C to cancel:
? Action (Use arrow keys)
❯ Creates and prepares a migration
  Accepts a migration
  Lists all migrations
  Get a migration description
  Cancels a migration
  Show migration report
```

Each migration is a 2-step process:
1. Executing the migration
2. Accepting the migration

The option "Creates and prepares a migration" allows you to start a new migration. You can either choose:
- a simple version bump which bumps the design version in all your documents to a new design version without affecting the structure of the documents
- or select a migration script from the filesystem to tell the Livingdocs how to migrate your documents (the next section will show some examples for such scripts), to select, type in a file path relative to your root directory, e.g. `app/data-migrations/your_migration.js`

Once you created a migration, it will run for all your documents. In the case of a migration script it will also generate a report for you that lists possible errors that were encountered with your script. (For a version bump there is no report, since errors are impossible). You can view this report by selecting the option "Show migration report".

If after reviewing the report you don't want the migration to be applied, just select the option "Cancels a migration" and the changes will be discarded.

If you want the migration to be applied, select "Accepts a migration" which will update all necessary database records and alters your documents.

The option "Lists all migrations" lists all migrations you prepared or accepted in your project.

The option "Get a migration description" allows you to review migration reports of prior migrations.

The following diagram visualizes the most important states and actions:

![Diagram](./migration-task-states.jpg)

## Examples

The boilerplate app implements three example migrations that you can take as a starting point for your own migrations. (Don't run the example migrations, they are using a sample design which is not configured).

1. [Migration script after removing a directive from a component](https://github.com/livingdocsIO/livingdocs-server-boilerplate/blob/master/app/data-migrations/000_example_remove_directive.js)

2. [Migration script after renaming a directive on a component](https://github.com/livingdocsIO/livingdocs-server-boilerplate/blob/master/app/data-migrations/000_example_rename_directive.js)

3. [Migration script to initialize a new metadata field](https://github.com/livingdocsIO/livingdocs-server-boilerplate/blob/master/app/data-migrations/000_example_add_metadata_field.js)
