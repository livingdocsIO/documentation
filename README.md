
# Livingdocs Documentation

## Concepts

#### Overview

Livingdocs tries to offer complete control over web content. A livingdocs document consists of HTML, CSS and assets like images and javascripts. Livingdocs only edits HTML with the advance knowledge of the CSS it will be used with. 

#### Design

HTML and CSS always work together. This is the guiding principle for livingdocs when editing HTML. That is why livingdocs always needs to be configured with a `livingdocs design` before content can be created or edited.

A `livingdocs design` consists of CSS (and assets required by it) and a set of HTML `snippets` that can be used togehter with that CSS. Livingdocs will only allow the HTML constructs specified by the `snippets` to be created.

[More about designs](design/create-a-design.md)

#### Document

A livingdocs document is an abstract representation of an HTML document. It is inspired by [web components](http://www.w3.org/TR/components-intro/). In livingdocs the components that can be used are defined in a `livingdocs design` and are called `snippets`. Just like the DOM represents a tree of HTML elements a livingdocs `document-model` represents a tree of `snippets`.

From the user perspective a `livingdocs document` is a page with a list of components that can be dragged around, selected, edited and deleted individually.

#### How to use it

Livingdocs can be used to edit whole pages or only parts of it. It is set up in different components that can be mixed and matched for different integration needs. And in the near future we will offer a service so it can conveniently be used as a standalone product in your browser.

## Components

#### Livingdocs Editor

The editor provides a user interface for editing livingdocs documents. It uses the livingdocs engine the same way you can use it if you want to build your own editor. All user interface elements are rendered and managed by the editor. To show the document itself to the user the editor requests an interactive view from the livingdocs engine. The livingdocs engine offers events to which the editor can react. Exmples of such events are selecting a snippet or text or dragging a snippet.

#### Livingdocs Engine

The engine is the central piece of livingdocs and defines the APIs for manipulating, viewing and storing the document.

It consists of different parts with their own responsibilities:

**Design:**

- Parse and load document design definitions
- Enforce that documents always comply with their specified design

**Document Model:**

- Store a representation of the document in JSON
- Offer an API to manipulate that representation
- Notify interested parties of changes of the model
- Store versions on the defined storage

**Interactive Views:**

- Render a document as HTML that can be interacted with
- Provide help with interaction of that HTML

**Published Views:**

- Render the final HTML ready for delivery
- Provide information about dependencies of a document (css, javascripts, fonts)


#### EditableJS

EditableJS is your friendly contenteditable API. We built it to have full control over text editing and to provide an api that focuses on editing [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content). EditableJS is designed to be used on a single paragraph or heading element (or any other block level element for that matter). It is used by the livingdocs engine internally in interactive views to let users edit text.

#### Livingdocs Server

The server is a backend API that offers storage capabilities for livingdocs documents. It also handles image storage and manipulation.

#### Livingdocs Design

This is a git repository that helps building `livingdocs designs`. It has a grunt task that can create the files needed to configure the livingdocs engine out of css and html files specifying the allowed html constructs.


## Glossary

| Term | Description |
|------|-------------|
| `snippet` | An HTML component that can be used in a `livingdocs document` |
| `livingdocs design` | A configuration file – a list of `snippets` – for the livingdocs engine along with the needed dependencies (css, javascripts, fonts) |
| `document-model` | A JSON representation of the content of a `livingdocs document` |
| `livingdocs document` | A document consists of a `document-model` and a `livingdocs design` |


