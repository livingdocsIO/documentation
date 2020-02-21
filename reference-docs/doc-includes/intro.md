# Doc-Includes

`doc-include` are the Livingdocs equivalent to [edge side includes](https://en.wikipedia.org/wiki/Edge_Side_Includes). They are extremely powerful in what they allow you to achieve but mastering them takes a bit of effort. This section explains gives you an overview of the topic and further resources to go deeper into the topic.

...........TODO
- Example: Configuration of a predefined `doc-include` - [article embeds and lists](./embed_and_list.md)
- Reference documentation for server-side `doc-include` - 

In particular we will cover:
- how to configure the predefined `doc-include`s for 
- how to implement new `doc-include`s in the [server](./server_customization.md)
- how to implement custom `doc-include` user interfaces in the [editor](./editor_customization.md)
...........

## Summary of a doc-include...

![doc-include lifecycle](./time-diagram-doc-include.jpeg)

Above we see a lifecycle diagram of a document with a `doc-include` (from bottom to top).

1. You see an empty placeholder (a `doc-include` with a server-side registered service `foo`)
2. The user can choose an entry in the sidebar (a core or custom UI registered in the editor)
3. After selecting an entry, the server calls a rendering function of the service `foo` and shows the result in the editor as preview (WYSIWYG). In the image above those are some brightcove video teasers.
4. After publishing, whenever a reader loads the published document in the browser, the server-side rendering function of the service `foo` gets called again.

The last point is worth mentioning again: rendering of a `doc-include` is done on every request, that means you don't need to publish the entailing document in order to update the `doc-include` area, this happens automatically on request.


## Concept of a doc-include

A `doc-include` is quite flexible and has some customisations in different places in Livingdocs. This section describes the available plugins.

**Embed a `doc-include` into a component of Livingdocs design**

As a first step you **must** add a doc-include element to the design config.

```html
<script type="ld-conf">
{
  "name": "foo-component",
  "label": "Foo Component",
  "directives": {
    "example-include": {
      "service": "foo",
      "defaultParams": {
        "layout": "mostViewed"
      }
    }
  }
}
</script>

<div doc-include="example-include">
  foo
</div>
```

**Server side include plugin**

**Editor include plugin**

**preview in editor**
**rendering in publicAPI..**



* [Design Config](reference-docs/common-designs/design_config.md)
- [Livingdocs directives](../common-designs/component_config.md#directives)
- [doc-include directive](../common-designs/component_config.md#doc-include-directive)










Example of a `doc-include` embedded into a Livingdocs Design Component:



References:
- [Livingdocs directives](../common-designs/component_config.md#directives)
- [doc-include directive](../common-designs/component_config.md#doc-include-directive)

`service` handle defines which server-side plugin is used to render a `doc-include`. 
A service can be registered on the server with `includesApi.registerService({name: 'foo', ...})`.

A `doc-include` service e.g. `foo` can be used in multiple components/directives in different configurations. For example you could do a new component that is pretty much the same as the example above but changes the `minCount` to 6 which would in effect tell the user interface not to render a number input (if `minCount` == `maxCount` no interface is rendered).

## What are the customizations

A ``

The [server customization](./server_customization.md) is normally a simple node.js plugin that uses any templating language (e.g. lodash templates) to render a HTML string from a template and parameters.
The [editor customization](./editor_customization.md) is an angular component. Angular (1.x) knowledge is required for this.

Both customizations are optional.
- A `doc-include` service with neither server nor editor part would just render an empty placeholder into the rendered HTML wherever a respective component was dropped.
- A `doc-include` service with only an editor part would render a placeholder with all the parameters in the HTML (the editor part can store parameters on the `doc-include` directive). This can be used if you don't want to have a preview in the editor but just let your users configure a placeholder that is then rendered in some other system using the given parameters.
- A `doc-include` service with only a server part would render a preview in the editor and also render the placeholder when publishing. It doesn't let your users interact with the rendering in the editor (no user interface). This can be used e.g. when a rendering is only dependent on something like the current time but on nothing that a user would set.
- A `doc-include` service with both server and editor parts has a user interface where a user can set parameters that are then used in the server-side plugin to render a preview and also render the `doc-include` directive upon publishing. This is the example we used in this section.

Livingdocs comes with editor-side plugins for an article embed and a manually sorted list of articles out of the box. [Read on](./embed_and_list.md) to learn how to configure those two and create your own (single) article embed and list of articles. Those are the main use cases to build your index page.
