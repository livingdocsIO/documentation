## Livingdoc
A `livingdoc` is a document in our system. It separates content from structure
by using `Components`. A `Livingdoc` references a specific `Design` which
defines the available `Components` that can be used in the document.

## Design
A list of `Components` and configurations how they can be used
in a `Livingdoc` and how users can interact with these `Components` in the
`Livingdocs Editor`.

## Component library
The component library is one of our core concepts. A component could be a `paragraph` or `author-card`, etc. You can define as many components as you wish within a design. Those will be available in the 'livingdocs-editor' then.

## Livingdocs-server
The server is a node.js application. It is the backend of a Livingdocs instance.

## Livingdocs-editor
The editor is an Angular web application. It is the user interface implementation of a Livingdocs instance.

## Livingdocs-...-boilerplate
Our boilerplates are recipes to quickly get one started with a custom downstream implementation of our core products such as the editor or server.

## Upstream && Downstream
*Upstream* is a package/repository which is integrated in another project called
*downstream*. In our case the *upstreams* are our core `livingdocs-editor` and
`livingdocs-server`. They are provided as npm packages (semantic versioning) and
can be used by a *downstream* project, e.g., `livingdocs-server-downstream`. The
`livingdocs-framework` package cannot be installed separately, it is a core
package that cannot be used as an *upstream*.

## Channel
Represents a collection of documents. All documents in a `channel` must use
the same `design`. A `channel` also defines the `Renditions`.

## Project
Represents an organisation and consists of users and channels.

## Delivery
The frontend for the end-user. The delivery will consume data from the livingdocs-server and display the data. An example delivery would be our [magazine-example](https://jovial-shaw-3479ee.netlify.com/).

## [HuGO](http://www.sternwald.com/hugo/)
A Digital Assets Management product developed and maintained by Sternwald, used
to manage images and agency reports in large numbers. Also acts as a proxy for
our Print Api to print publishing systems like `NewsNT` or `WoodWing`.

## NewsNT
A print publishing system.
