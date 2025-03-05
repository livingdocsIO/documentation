---
title: Migration
description: Learn how to migrate documents as your document structures evolve. This guide explores the two migration approaches, On-Read Migrations and Data Migrations, outlining their differences, best use cases, and how to combine them.
menus:
  reference:
    weight: 6
    parent: Document
---

Livingdocs enables you to continuously evolve and innovate your product. The document structures you initially created may need to change over time—for example, by adding new components or improving existing ones. Regardless of how your document structures evolve, Livingdocs provides the tools to facilitate these changes seamlessly.

A key aspect of maintaining consistency during these changes is migrating existing documents. As document structures are updated, documents must be migrated accordingly to ensure compatibility.

Livingdocs supports two migration approaches: [On-Read Migrations]({{< relref "on-read-migration" >}}) and [Data Migrations]({{< relref "data-migration" >}}). In this guide, we explore the key differences between them and provide guidance on when to use each approach. By understanding their trade-offs, you can choose the most suitable migration strategy for your use case and learn how to effectively combine both approaches.

## On-Read Migrations

{{< added-in "release-2025-03" block >}}

[On-Read Migrations]({{< relref "on-read-migration" >}}) are applied whenever a document is read from the database. This means they take effect immediately, allowing all functions and clients consuming the data to work with the updated document structure without requiring time-consuming migration processes.

Since {{< release "release-2025-03" >}}, documents are always delivered in the newest design version. To ensure compatibility, documents must be presented in an up-to-date structure that aligns with the latest design version. On-Read Migrations help achieve this by transforming documents on the fly.

This is particularly important when a design update introduces a breaking change, such as:

- Renaming or removing a component
- Renaming, removing, or changing the type of a directive

Whenever you make such changes, you should also provide an On-Read Migration. For example, removing a component is as simple as updating the configuration and supplying an On-Read Migration that strips it from the document data. The change takes effect immediately upon deployment, and the component is no longer present in documents.

Because they enable seamless structural changes, On-Read Migrations are ideal for continuous structural improvements.

## Data Migrations

[Data Migrations]({{< relref "data-migration" >}}), on the other hand, apply transformations to documents in one go. They iterate over all documents and apply the required changes. Depending on the amount of data stored within Livingdocs, this process can take multiple hours.

Whenever possible, we recommend using On-Read Migrations for efficiency. On-Read Migrations are always executed before a Data Migration runs. This means you can easily combine both approaches. However, there are cases where Data Migration should be preferred:

- If a migration requires heavy computation or asynchronous operations (e.g., fetching additional data), it is unsuitable for On-Read Migrations, as these operations would slow down response times. On-Read Migrations execute each time a document is accessed and do not support asynchronous operations. For such cases, use Data Migrations.

- Currently, On-Read Migrations do not support moving data between metadata and content (or vice versa). Such transformations can only be performed using Data Migrations.

- Since On-Read Migrations apply changes only when a document is accessed, some documents may have the updates applied while others remain in their original state. This creates a transitional state that is invisible to users and downstream systems but may be problematic for analytics. If you require a fully consistent dataset, it's recommended to periodically run a Data Migration to apply all pending On-Read Migrations permanently.

## When Migrations Are Necessary

Not all changes require a migration, but structural modifications to existing documents typically do. The following changes require a migration:

- Renaming or removing a component
- Renaming, removing, or changing the type of a directive
- Renaming, removing, or changing the type of a metadata property

The following types of changes do not alter existing document data and, therefore, do not require a migration:

- HTML or CSS updates that do not affect the structure
- Changes to design wrappers
- Updates to design assets
- Adding a new directive to a component (it will be empty by default)
- Adding a new Content Type
- Moving a directive between HTML tags within the same component
- Adding or removing a doc-optional directive (doc-optional is never breaking)
- Removing or modifying a component property (silently ignored)
- Updating the component set of a group
- Changing the default component
- Adjusting image ratios
- Modifying default content settings
- Updating pre-filled components (will not be recalculated for existing documents)
- Changing metadata field extractor configurations
