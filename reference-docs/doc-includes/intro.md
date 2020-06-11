## Doc-Includes

Doc-Includes are the Livingdocs equivalent to [edge side includes](https://en.wikipedia.org/wiki/Edge_Side_Includes). They are extremely powerful in what they allow you to achieve but mastering them takes a bit of effort. This section explains how you can do customizations using `doc-include`s and provides hands-on examples from real projects.
In particular we will cover:
- how to configure the predefined `doc-include`s for [article embeds and lists](./embed_and_list.md)
- how to implement new `doc-include`s in the [server](./server_customization.md)
- how to implement custom `doc-include` user interfaces in the [editor](./editor_customization.md)

### What is a doc-include

![doc-include lifecycle](./time-diagram-doc-include.jpeg)

Above we see a lifecycle diagram of a document with a `doc-include`. Take note of the component in the right-hand sidebar.
Time starts at the bottom with an empty placeholder for a `doc-include` named 'foo'. The definition is done in the Livingdocs design, in particular setting the `service` name to 'foo'. The editor in this case has a custom sidebar user interface for `doc-include`s with service 'foo'. It is rendered when a user selects the respective component.
Once the user has entered some data, the server-side kicks in. The server in this case defines a rendering method for `doc-include`s with service 'foo'. It gets the parameters the user entered in the custom user interface in the editor and renders a string of HTML that is then shown as a preview in the editor (WYSIWYG). In the image above those are some brightcove video teasers.
After editing the user publishes the document. Whenever a reader loads the published document in the browser (upon every request), the server-side rendering method from above is called again. This time it's passed an option that tells the method that this is a public rendering (as opposed to the preview in the editor).

The last point is worth mentioning again: rendering of a `doc-include` is done on every request, that means you don't need to publish the entailing document in order to update the `doc-include` area, this happens automatically on request.


### How are doc-includes defined

You should be familiar with [Livingdocs directives](../project-config/design.md#components) for this section.

```html
<script type="ld-conf">
{
  "name": "example",
  "label": "Example Component",
  "directives": {
    "example-include": {
      "service": "foo",
      "defaultParams": {
        "layout": "mostViewed"
      },
      "config": {
        "minCount": 3,
        "maxCount": 6
      }
    }
  }
}
</script>

<div class="page-teaser full-width-on-mobile">
  <div class="teaser-list__head">
    <h4 class="teaser-list__title" doc-editable="title">Title</h4>
  </div>
  <div class="page-teaser__content page-teaser--count" doc-include="example-include">
    <div class="embed headlines">
      <div class="placeholder"></div>
    </div>
  </div>
</div>
```

The above snippet shows the design definition of a `doc-include` that renders the most viewed articles from a brightove channel (as in the introductory diagram).
You see several important concepts:
- The `service` configuration defines which service is used by this `doc-include` directive. This service name is used by the server-side and editor-side customizations to identify a specific `doc-include` implementation.
- The directive configuration contains `defaultParams`. The custom editor interface for a `doc-include` service normally sets and sends parameters to the server-side to do the rendering. In the example it could send a category that a user enters and for which videos are shown (e.g. most viewed "Sport" videos). In addition you can pass `defaultParams` in the design that are there by default and if the editor does not overwrite them are passed to the server. The `layout` in our example tells the server-side plugin to use a specific sub-template for the rendering. You could for example have templates for "list with images" and "text only list" thus rendering the section with different layouts in different components.
- The directive configuration also contains a `config` section. You can write in this Object whatever you like. The values are passed to your custom user interface in the editor and you can use them there to customize the user interface for this specific instance of the "foo" `doc-include` service. The example sends a `minCount` and `maxCount`. This is used by the user interface in question to offer the user a number input form that is limited to numbers between 3 and 6 and controls how many articles are rendered.

Schematic view of how the different parts play together using a `doc-include` service as an identifier:
```
Livingdocs design component -> uses service in directives -> configures an instance of the service "class" (config, defaultParams)

Livingdocs editor -> implements -> user interface for doc-include "class"

Livingdocs server -> implements -> renderer for doc-include "class"
```

(note: we are not talking about a class in the sense of OO, just to visualize the hierarchical connection)

It is important to understand that a `doc-include` service ("foo" in the example above) can be used in multiple components/directives in different configurations. For example you could do a new component that is pretty much the same as the example above but changes the `minCount` to 6 which would in effect tell the user interface not to render a number input (if `minCount` == `maxCount` no interface is rendered).

### What are the customizations

The [server customization](./server_customization.md) is normally a simple node.js plugin that uses any templating language (e.g. lodash templates) to render a HTML string from a template and parameters.
The [editor customization](./editor_customization.md) is an angular component. Angular (1.x) knowledge is required for this.

Both customizations are optional.
- A `doc-include` service with neither server nor editor part would just render an empty placeholder into the rendered HTML wherever a respective component was dropped.
- A `doc-include` service with only an editor part would render a placeholder with all the parameters in the HTML (the editor part can store parameters on the `doc-include` directive). This can be used if you don't want to have a preview in the editor but just let your users configure a placeholder that is then rendered in some other system using the given parameters.
- A `doc-include` service with only a server part would render a preview in the editor and also render the placeholder when publishing. It doesn't let your users interact with the rendering in the editor (no user interface). This can be used e.g. when a rendering is only dependent on something like the current time but on nothing that a user would set.
- A `doc-include` service with both server and editor parts has a user interface where a user can set parameters that are then used in the server-side plugin to render a preview and also render the `doc-include` directive upon publishing. This is the example we used in this section.

Livingdocs comes with editor-side plugins for an article embed and a manually sorted list of articles out of the box. [Read on](./embed_and_list.md) to learn how to configure those two and create your own (single) article embed and list of articles. Those are the main use cases to build your index page.
