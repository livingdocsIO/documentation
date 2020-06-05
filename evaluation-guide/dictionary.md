# Glossary

## Channel

Represents a collection of documents. All documents in a `channel` must use the same `design`. A `channel` also defines the `Renditions`.

## Design

A list of `Components` and configurations how they can be used in a `Livingdoc` and how users can interact with these `Components` in the `Livingdocs Editor`.

## Downstream

See _Upstream_.

## Embedded Design

An "Embedded Design" lives inside of a Livingdocs channel configuration, therefore every "Embedded Design" is unique per project. Another design type is a [Referenced Design](dictionary.md#referenced-design).

## [HuGO](http://www.sternwald.com/hugo/)

A Digital Assets Management product developed and maintained by Sternwald, used to manage images and agency reports in large numbers. Also acts as a proxy for our Print Api to print publishing systems like `NewsNT` or `WoodWing`.

## Livingdoc

A `livingdoc` is a document in our system. It separates content from structure by using `Components`. A `Livingdoc` references a specific `Design` which defines the available `Components` that can be used in the document.

## NewsNT

A print publishing system.

## Project

Represents an organisation and consists of users and channels.

## Referenced Design

A "Referenced Design" can be used multiple times in different projects. Another design type is an [Embedded Design](dictionary.md#embedded-design).

## Upstream

_Upstream_ is a package/repository which is integrated in another project called _downstream_. In our case the _upstreams_ are our core `livingdocs-editor` and `livingdocs-server`. They are provided as npm packages \(semantic versioning\) and can be used by a _downstream_ project, e.g., `livingdocs-server-downstream`. The `livingdocs-framework` package cannot be installed separately, it is a core package that cannot be used as an _upstream_.

