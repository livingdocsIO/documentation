## Concepts

### Regain control over your HTML

HTML and CSS always work together. Creating a CSS design can only work if you know how the HTML looks. Or better yet you can define your own HTML. Traditionally developers have to create templates for that on a server somewhere for a particular CMS. With Livindocs this is different.

In Livingdocs you specify all HTML components as part of a Livingdocs design which is just a JSON file you can create (More on this [here](../design/create_designs.md)).

For example a component template for a paragraph looks like this:

```html
<p doc-editable="text">
  Placeholder text
</p>
```

With that you regain full control over the HTML. This is the guiding principle of Livingdocs. We manage your content. How that content looks and behaves is up to you.


### Work with your content the web way

A Livingdocs document is an abstract representation of an HTML document. It's structure is inspired by [web components](http://www.w3.org/TR/components-intro/), which is a set of working draft documents at the W3C with the aim to leverage reusable components for the Web platform. In Livingdocs the components that can be used are defined in a Livingdocs `Design`. Just like the DOM represents a tree of HTML elements a `Livingdoc` represents a tree of `components`.

From the user's perspective a `livingdoc` is a page with a list of components that can be dragged around, selected, edited and deleted individually. And for you as a developer a `livingdoc` looks the same. You just use an API instead of a UI. But the underlying concepts of components and editable parts are the same.


### True multi channel publishing

Livingdocs is very different from other CMSes in that it does not make any assumptions about how you deliver your content. From a Livingdocs perspective a single-page app, an integration into another CMS, or a native app are all the same. In essence, the Livingdocs delivery layer is:
- a set of APIs that provide the necessary data to make rendering really easy
- a set of boilerplate apps that you can fork and use if they fit your needs

Livingdocs pre-renders content for you and delivers those pre-rendered documents over the API. This means that it gets the correct version of your design, fetches the right content of your document and renders everything to HTML. This makes writing HTML-based apps really easy. But you can also write JSON or XML based apps (or whatever other format you might need). The Livingdocs server defines a render pipeline where you can define what content you want to export into which formats. Every channel is always represented as a Livingdocs design which enables your users to write in every channel directly in the Livingdocs editor. This makes for real multi channel publishing: your users can write natively in every channel and delivery is fully customizable.
