# Custom Elasticearch Publication Index

The custom index is an Elasticsearch index that allows developers to index data in a custom format into Elasticsearch based on published documents. A simple but mighty version of a custom index also with an automatically generated public API for search is the [Publication Index](../server-configuration/publication-index.md), which is available by default.

## Reasons for Using a Custom Elasticsearch Publication Index

We suggest to use the [Publication Index](../server-configuration/publication-index.md) if possible. But there are reasons why a custom index fits better:
- maximum flexibility
- index other data than metadata
- index metadata in another format
- index resolved document references
- optimised search queries

## Create a Custom Index

TODO: add elastic config
TODO: indexInitializationFile

## Live Indexing

TODO: add example for live indexing

## Search on Custom Elasticsearch Publication Index

TODO: How to make a search query
TODO: How to create a simple API


## CLI Tasks for Custom Index Management

**livingdocs-server elasticsearch-index**

A custom index can be created/updated via the CLI task `livingdocs-server elasticsearch-index --handle=your-handle`. The CLI task has a few more options to filter documents which should be indexed.

**livingdocs-server elasticsearch-delete-index**

A custom index can be deleted via the CLI task `livingdocs-server elasticsearch-delete-index --handle=your-handle`.
