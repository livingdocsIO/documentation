## Doc-Includes

Doc-Includes are the Livingdocs equivalent to [edge side includes](https://en.wikipedia.org/wiki/Edge_Side_Includes). They are extremely powerful in what they allow you to achieve but mastering them takes a bit of effort. This section is explaining to you how you can do customizations using doc-includes and provides hands-on examples from real projects.
In particular we will cover:
- how to configure the predefined doc-includes
- how to implement new doc-includes in the server
- how to implement custom user interfaces in the editor

### What is a doc-include

In short a doc-include allows you to define an area in a Livingdocs document where you can define the rendering yourself through a custom server-side plugin. The area in question is nothing else than a `directive` of type `doc-include` that you define in your design. (» if you don't know what a directive is see [here](../common-designs/component_config.md#directives)). To render HTML into this `doc-include` directive you register a custom renderer on the server. This renderer will return an HTML string and can use whatever templating system you like or even a remote system.
Inside the editor the same server-side plugin is used to preview the `doc-include` for your WYSIWYG experience. If you click the component that contains the `doc-include` directive the sidebar renders custom user interfaces that are defined for a specific `doc-include`. You can fully customize those user interfaces.

### How are doc-includes defined

```
<script type="ld-conf">
{
  "name": "most-read",
  "label": "Most Read",
  "directives": {
    "chartbeat": {
      "service": "chartbeat",
      "defaultParams": {
        "layout": "mostRead"
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
  <div class="page-teaser__content page-teaser--count" doc-include="chartbeat">
    <div class="embed headlines">
      <div class="placeholder"></div>
    </div>
  </div>
</div>
```

The above snippet shows the design definition of a `doc-include` that renders the most read articles from a publication retrieved via the [chartbeat API](https://chartbeat.com/docs/api/) (it assumes you are using chartbeat in your publication).
You see several important concepts:
- The `service` configuration defines which service is used by this `doc-include` directive. This service name is used by the server-side and editor-side customizations to identifiy a specific `doc-include` implementation.
- The directive configuration contains `defaultParams`. The custom editor interface for a `doc-include` service (see above) normally sends parameters to the server-side to do the rendering. In the chartbeat example it would probably send a selected category for which the chartbeat API should be queried (e.g. most read "Sport" articles). In addition you can pass `defaultParams` in the design that are there by default and if the editor does not overwrite them are passed to the server. The `layout` in our example tells the server-side plugin to use a specific sub-template for the chartbeat rendering. You could for example have templates for "list with images" and "text only list" thus rendering the most-read section with different layouts.
- The directive configuration also contains a `config` section. You can write in this Object whatever you like. The values are passed to your custom user interface in the editor and you can use them there to customize the user interface for this specific instance of the chartbeat `doc-include` service. The example sends a `minCount` and `maxCount`. This is used by the user interface in question to offer the user a number selection to render between 3 and 6 of the most read articles.

Schematic of how the different parts play together:
`doc-include` service -> defines -> `doc-include` class
Livingdocs server -> implements -> renderer for `doc-include` class
Livingdocs editor -> implements -> user interface for `doc-include` class
Livingdocs design component -> uses service in directives -> configures an instance of the service class (config, defaultParams)

It is important to understand that a `doc-include` service ("chartbeat" in the example above) can be used in multiple components/directives in different configurations. For example you could do a new component that is pretty much the same as the example above but changes the `minCount` to 6 which would in effect tell the user interface not to render a number input (if `minCount` == `maxCount` no interface is rendered).

### What are the customizations

The server customization is normally a simple node.js plugin that uses any templating language (e.g. lodash templates) to render a HTML string from a template and parameters.
The editor customization is an angular.js component. Angular knowledge is required for this.

Both customizations are optional.
- A `doc-include` service with neither server nor editor part would just render an empty placeholder into the rendered HTML wherever a respective component was dropped.
- A `doc-include` service with only an editor part would render a placeholder with all the parameters in the HTML (the editor part can store parameters on the `doc-include` directive). This can be used if you don't want to have a preview in the editor but just let your users configure a placeholder that is than rendered in some other system using the given parameters.
- A `doc-include` service with only a server part would render a preview in the editor and also render the placeholder when publishing. It doesn't let your users interact with the rendering in the editor (no user interface). This can be used e.g. when a rendering is only dependent on something like the current time but on nothing that a user would set.
- A `doc-include` service with both server and editor parts has a user interface where a user can set parameters that are then used in the server side plugin to render a preview and also render the `doc-include` directive upon publishing. This is the example we used in this section.

Livingdocs comes with editor-side plugins for an article embed and a manually sorted list of articles out of the box. Read on to learn how to configure those two and create your own (single) article embed and list of articles. Those are the main use cases to build your startpage.
