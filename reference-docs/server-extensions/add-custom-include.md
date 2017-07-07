## Includes

Think of Livingdocs includes as edge-side includes. You can create include components in your design, using a include [directive](../../livingdocs-framework/directives.md).
Includes can render content to your article or page that comes from an external source.
Includes are resolved every time a document is rendered. So they can be used to
display dynamic content that changes after a document has been published.

Displaying a teaser for example can be achieved through includes. An article is referenced and its data (eg. title, description, teaser image) is fetched when rendering a page.


## A component with an include directive

Includes are directives on components. They can be used as content placeholders
that will be filled with HTML created by an include service on the server.

An example component with an include diretive:
```html
<script type="ld-conf">
  {
    "name": "embed-teaser",
    "label": "Article Teaser",
    "directives": {
      "embed-teaser": {
        "service": "embed-teaser"
      }
    }
  }
</script>

<div doc-include="embed-teaser"></div>
```

## Rendering Options

Includes can be resolved in two modes when rendering a document. Either a
`<ld-include>` tag can be rendered so the include can be resolved outside of
livingdocs (e.g by a script in the browser or a server that delivers the rendered
html to a browser). Or the includes can be resolved on the livingdocs server in
the rendering of the document.

#### Unresolved include

An unresolved include looks like this:
```html
<div>
  <ld-include data-include-service="embed-teaser" data-include-params="{"mediaId":2}"></ld-include>
</div>
```

It contains all the information needed to replace it with
the actual content.


#### Resolved include

If the include is resolved instead of the `<ld-include>` you see the actual HTML
returned by the include renderer:
```html
<div>
  <a internal href="/articles/2.html">
    <div style="background-image: url(https://image.jpg)"></div>
    <div class="teaser__text">
        <h3><span>Mathieu Pavageau</span> <span> on Wed May 25 2016</span></h3>
      <h2>Rocket</h2>
    </div>
  </a>
</div>
```

#### How to configure the rendering option

Includes are not resolved by default. Enable it in the
[channel configuration](../server-configuration/channel-config.md):

```js
module.exports = {

  renditions: {
    'web': {
      output: {
        'html': {
          outputRenderer: new CheerioHtml(),
          resolveIncludes: ['embed-teaser']
        }
      }
    }
  }
}
```


## Registration of an include renderer in the server

You can register an include renderer in the Livingdocs Server using the API
of the `li-includes` feature.

The include is rendered in used in two cases:

- in the editor while editing
- in the rendered HTML if you choose to resolve the include while rendering

So in order to see a preview while editing you have to register an include renderer
even if you choose not to resolve includes while rendering.

#### Register an include in the server:

Let's register an include renderer for the include `embed-teaser` used in the
component we defined earlier:

```js
const includeRenderer = require('../plugins/includes/embed-teaser.js')

const includesApi = liServer.features.api('li-includes')
includesApi.registerServiceRenderer('embed-teaser', includeRenderer)
```

`plugins/includes/embed-teaser.js`:
```js
module.exports = {
  name: 'embed-teaser',
  // The ui configuration is used to configure the user interface
  // in the editor. See further below for all available options.
  ui: {
    type: 'default'
  },
  server: {
    type: 'function',
    function: function (params, options, callback) {
      if (options && options.preview === true) {
        // When options preview is true the request comes from a livingdocs
        // editor while a user is editing a document.
      }

      // It does not render an unpublished document on the public API
      if (shouldNotBeRendered(params)) {
        // Return an empty string to render nothing.
        // While editing the draft in the editor this will remove
        // the include preview.
        return callback(null, '')
      } else if (paramsAreInsufficient(params)) {
        // Return undefined in not enough params are provided to
        // render the include. While editing the draft in the editor
        // this will just leave the include preview visible.
        return callback(null, undefined)
      } else {
        // Render the include
        const html = renderInclude(params)
        return callback(null, html)
      }
    })
  }
}
```

#### Include UI options:

Use an angular component in the sidebar:
```js
name: 'embed-teaser',
ui: {
  type: 'default'
}
```

And this is how you have to register the angular component in the editor
for the above setting to work.
```js
const liEditor = require('@livingdocs/editor')
liEditor.includes.register('embed-teaser', {
  template: require('./some-template'),
  controller: require('./some-controller'),
  bindings: {
    directive: '=',
    component: '=',
    componentView: '=',
  }
})
```

Use an angular component in a modal:
```js
// The ui configuration is used to configure the user interface
// in the editor.
ui: {
  // The angular-modal type selects an angular component to use
  // in the editor within a popup and allows to configure the button
  // to open it.
  type: 'angular-modal',
  sidebar: {
    label: 'Assign Teaser to content block',
    button: 'Link Article'
  },
  modal: {
    label: 'Article Search',
    component: 'ldEmbedTeaserListIncludeModal'
  }
}
```

Use an external site opened in an iframe in a modal:
```js
name: 'ld-giphy',
ui: {
  // The angular-modal type selects an angular component to use
  // in the editor within a popup and allows to configure the button
  // to open it.
  type: 'iframe-modal',
  sidebar: {
    label: 'Configure Giphy Embed',
    button: 'Configure'
  },
  modal: {
    label: 'Configure Giphy Embed',
    url: 'https://rawgit.com/marcbachmann/5f8c957524e967b5aa16cf724c6585e3/raw/586fcd115135ac150ba21b0d776c76a5dad8e3a8/giphy.html'
  }
}
```

Details for the iframe option:
https://github.com/upfrontIO/livingdocs-editor/pull/1509
