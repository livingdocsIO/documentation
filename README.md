
# Livingdocs Documentation

## Overview

Livingdocs tries to make working with content as easy and controlled as possible. The magic part of Livingdocs is that you can define completely how it works and how users are allowed to change HTML. For that you create your own design which is used to configure Livingdocs. After that you can create your own documents with completely custom HTML and CSS an be sure that they contain only the HTML constructs you defined.


## The Livingdocs Framework

To work with Livingdocs you should start with the [`livingdocs-engine`](https://github.com/upfrontIO/livingdocs-engine) repository. It is the central piece of Livingdocs and defines the APIs for manipulating, displaying and serializing your documents. The livingdocs-engine runs in the browser and in node.js.

Here you can find detailed information about the most important objects in the livingdocs-engine and how to work with them:

- [livingdoc](livingdocs-engine/livingdoc.md)
- [component_tree](livingdocs-engine/component_tree.md)
- [component_model](livingdocs-engine/component_model.md)
- [browser_api](livingdocs-engine/browser_api.md)


## Create your own designs

Follow this link for a short guide on how designs work and how you can create your own:

[Create designs with livingdocs-design-boilerplate](design/create_designs.md)


## Concepts

#### Regain control over your HTML

HTML and CSS always work together. Creating a CSS design can only work if you know how the HTML looks. Or better yet you can define your own HTML. Traditionally developers have to create templates for that on a server somewhere for a particular CMS. With Livindocs this is different.

In Livingdocs you specify all HTML components as part of a Livingdocs design which is just a JSON file you can create (More on this [here](design/create_designs.md)).

For example a template for a paragraph looks like this:

```html
<p doc-editable="text">
  Placeholder text
</p>
```

With that you regain full control over the HTML. And this is also the guiding principle of Livingdocs. We just manage your content. How that content looks and behaves is up to you.


#### Work with your content the web way

A livingdocs document is an abstract representation of an HTML document. It's structure is inspired by [web components](http://www.w3.org/TR/components-intro/), which is a set of working draft documents at the W3C with the aim to leverage reusable components for the Web platform. In livingdocs the components that can be used are defined in a Livingdocs `Design`. Just like the DOM represents a tree of HTML elements a `Livingdoc` represents a tree of `components`.

From the user's perspective a `livingdoc` is a page with a list of components that can be dragged around, selected, edited and deleted individually. And for you as a developer a `livingdoc` looks the same. You just use an API instead of a UI. But the underlying concepts of components and editable parts are the same.

[More about a Livingdoc](livingdocs-engine/livingdoc.md)


## Related Projects

### Open Source

#### editable.js

[editable.js](https://github.com/upfrontIO/editable.js) is your friendly open source contenteditable API. We built it to have full control over text editing and to provide an API that focuses on editing [phrasing content](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content). EditableJS is designed to be used on a single paragraph or heading element (or any other block level element for that matter). It is used by the livingdocs engine internally in interactive views to let users edit text.


### For Business

#### Livingdocs Editor

The editor provides a user interface for editing livingdocs documents. It is used for [livingdocs-beta.io](http://livingdocs-beta.io) where you can test it for yourself. It uses the underlying livingdocs engine to manipulate the document and adds interfaces around the document that help the user in common tasks such as adding elements, editing content or uploading images.

#### Livingdocs Server

The server provides storage capabilities for livingdocs documents and exposes a powerful API. It also handles image storage and manipulation.

