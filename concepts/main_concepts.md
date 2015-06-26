## Concepts

### Regain control over your HTML

HTML and CSS always work together. Creating a CSS design can only work if you know how the HTML looks. Or better yet you can define your own HTML. Traditionally developers have to create templates for that on a server somewhere for a particular CMS. With Livindocs this is different.

In Livingdocs you specify all HTML components as part of a Livingdocs design which is just a JSON file you can create (More on this [here](design/create_designs.md)).

For example a template for a paragraph looks like this:

```html
<p doc-editable="text">
  Placeholder text
</p>
```

With that you regain full control over the HTML. And this is also the guiding principle of Livingdocs. We just manage your content. How that content looks and behaves is up to you.


### Work with your content the web way

A livingdocs document is an abstract representation of an HTML document. It's structure is inspired by [web components](http://www.w3.org/TR/components-intro/), which is a set of working draft documents at the W3C with the aim to leverage reusable components for the Web platform. In livingdocs the components that can be used are defined in a Livingdocs `Design`. Just like the DOM represents a tree of HTML elements a `Livingdoc` represents a tree of `components`.

From the user's perspective a `livingdoc` is a page with a list of components that can be dragged around, selected, edited and deleted individually. And for you as a developer a `livingdoc` looks the same. You just use an API instead of a UI. But the underlying concepts of components and editable parts are the same.

[More about a Livingdoc](livingdocs-engine/livingdoc.md)
