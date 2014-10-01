
# Livingdocs Documentation

## Concepts

#### Overview

Livingdocs tries to offer complete control over web content. A livingdocs document consists of HTML, CSS and assets like images and javascript files. Livingdocs uses the CSS of a page to deduce the allowed edits to a page.

#### Design

HTML and CSS always work together. This is the guiding principle for livingdocs when editing HTML. A consequence is that livingdocs always needs to be configured with a `livingdocs design` before content can be created or edited.

A `livingdocs design` consists of CSS with its required assets and a set of HTML elements, or livingdocs `components`, that can be used together with that CSS. Livingdocs will only allow the HTML constructs specified by the `components` to be created.

[More about designs](design/create-a-design.md)

#### Document

A livingdocs document is an abstract representation of an HTML document. It's structure is inspired by [web components](http://www.w3.org/TR/components-intro/), which is a set of working draft documents at the W3C with the aim to leverage reusable components for the Web platform. In livingdocs the elements that can be used are defined in a `livingdocs design` and are called `components`. Just like the DOM represents a tree of HTML elements a livingdocs `document-model` represents a tree of `components`.

From the user's perspective a `livingdocs document` is a page with a list of components that can be dragged around, selected, edited and deleted individually.

[More about the document-model](document-model/document-model.md)

#### How to use it

There are 2 usage models for livingdocs: integration with an existing Content Management System (CMS) or usage as a web service. Livingdocs can be used to edit whole pages or only parts of it. The software behind livingdocs is split into components that can be mixed and matched for different integration needs.

## Software Components

#### Livingdocs Editor

The editor provides a user interface for editing livingdocs documents. It uses the underlying livingdocs engine to make the document itself editable and adds interfaces around the document that help the user in common tasks such as adding elements to the page or publishing a document. All user interface elements are rendered and managed by the editor. To show the document itself to the user, the editor requests an interactive view from the livingdocs engine. The livingdocs engine exposes events to which the editor can subscribe such as selecting a snippet or text or dragging a snippet.

#### Livingdocs Engine

The engine is the central piece of livingdocs and defines the APIs for manipulating, displaying and storing the document. It consists of several parts with their own responsibilities:

**Design:**

- Parse and load document design definitions
- Enforce that documents always comply with their specified design

**Document Model:**

- Store a representation of the document in JSON
- Offer an API to manipulate that representation
- Notify interested parties of changes of the model
- Store versions on the defined storage layer, e.g., a web API

**Interactive Views:**

- Render a document as HTML that can be interacted with
- Provide help with interaction of that HTML

**Published Views:**

- Render the final HTML ready for delivery
- Provide information about dependencies of a document (css, javascripts, fonts)


#### EditableJS

EditableJS is your friendly contenteditable API. We built it to have full control over text editing and to provide an API that focuses on editing [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content). EditableJS is designed to be used on a single paragraph or heading element (or any other block level element for that matter). It is used by the livingdocs engine internally in interactive views to let users edit text.

#### Livingdocs Server

The server is a backend API that offers storage capabilities for livingdocs documents. It also handles image storage and manipulation. In an integration project the livingdocs server is often replaced with the respective CMS of the integrating party.

#### Livingdocs Design

This is a git repository that helps building `livingdocs designs`. It has a grunt task that can create the files needed to configure the livingdocs engine out of css and html files specifying the allowed html constructs.


## Glossary

| Term | Description |
|------|-------------|
| `snippet` | An HTML element that can be used in a `livingdocs document` |
| `livingdocs design` | A configuration file – a list of `components` – for the livingdocs engine along with the needed dependencies (css, javascripts, fonts) |
| `document-model` | A JSON representation of the content of a `livingdocs document` |
| `livingdocs document` | A document consists of a `document-model` and a `livingdocs design` |


