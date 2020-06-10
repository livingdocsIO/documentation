
## Channel

Represents a collection of documents. All documents in a `channel` must use
the same `design`. A `channel` also defines the `Renditions`.

## Design

A list of `Components` and configurations how they can be used
in a `Livingdoc` and how users can interact with these `Components` in the
`Livingdocs Editor`.

## Downstream

See *Upstream*.

## Embedded Design

An "Embedded Design" lives inside of a Livingdocs channel configuration, therefore every "Embedded Design" is unique per project.
Another design type is a [Referenced Design](#referenced-design).

## Livingdoc

A `livingdoc` is a document in our system. It separates content from structure
by using `Components`. A `Livingdoc` references a specific `Design` which
defines the available `Components` that can be used in the document.

## Project

Represents an organisation and consists of users and channels.

## Referenced Design

A "Referenced Design" can be used multiple times in different projects.
Another design type is an [Embedded Design](#embedded-design).

## Upstream

*Upstream* is a package/repository which is integrated in another project called
*downstream*. In our case the *upstreams* are our core `livingdocs-editor` and
`livingdocs-server`. They are provided as npm packages (semantic versioning) and
can be used by a *downstream* project, e.g., `livingdocs-server-downstream`. The
`livingdocs-framework` package cannot be installed separately, it is a core
package that cannot be used as an *upstream*.
