
## Channel

Represents a collection of documents. All documents in a `channel` must use
the same `design`. A `channel` also defines the `Renditions`.

## Design

A list of `Components` and configurations how they can be used
in a `Livingdoc` and how users can interact with these `Components` in the
`Livingdocs Editor`.

## Downstream

See *Upstream*.

## HuGO

A stand-alone product to manage images and agency reports in large numbers.
Also acts as a proxy for our Print Api to print publishing systems like `NewsNT` or `WoodWing`.

## Livingdoc

A representation of content. It separates content from structure by using
`Components`. A `Livingdoc` references a specific `Design` which defines the
available `Components` that can be used in the document.

## NewsNT

A print publishing system.

## Project

Represents an organisation and consists of users and channels.

## Upstream

*Upstream* is a package/repository which is integrated in another project called *downstream*. In our case *upstream* means our core editor and server is provided as a npm package (semantic versioning) and can be used by a *downstream* project e.g. `livingdocs-server-downstream`.
