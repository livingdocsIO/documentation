## Includes

Think of Livingdocs includes as edge-side includes. You can create include components in your design, using a include [directive](../../livingdocs-framework/directives.md).
Includes can render content to your article or page that comes from an external source.

Displaying a teaser for example can be achieved through includes. An article is referenced and its data (eg. title, description, teaser image) is fetched when rendering a page.

### Example

The server can transform this include:
```html
<ld-include data-include-service="embed-teaser" data-include-params="{"mediaId":2}"></ld-include>
```

into something like this:
```html
<a internal href="/articles/2.html">
  <div style="background-image: url(https://image.jpg)"></div>
  <div class="teaser__text">
      <h3><span>Mathieu Pavageau</span> <span> on Wed May 25 2016</span></h3>
    <h2>Rocket</h2>
  </div>
</a>
```

### Registration of renderers

Since server `v28.9.0`, you can register includes in the Livingdocs Server using the API exposed by the `li-includes` feature

The include is rendered in two locations:
- in the editor while editing
- in the final published HTML

First, create an include component in your design. For example, have a look at the `embed-teaser` in the [timeline design](https://github.com/upfrontIO/livingdocs-design-timeline/blob/master/source/components/Embeds/embed-teaser.html)

```html
<div doc-include="embed-teaser"></div>
```

Each include directive references a `include-service`, that is invoked when rendering the include. The function `render` is called on your custom service:

```js
exports = module.exports = {
  render (params, callback) {
    const renderedHtml = 'hello world!'
    return callback(null, renderedHtml)
  }
}
```

Register a service renderer for the type `embed-teaser`:

```js
const includesApi = liServer.features.api('li-includes')

embedTeaserServiceRenderer =
  require('../../plugins/includes/embed-teaser/service-renderer')

includesApi.registerServiceRenderer(
  'embed-teaser',
  embedTeaserServiceRenderer
)
```

Includes are not resolved by default. Enable it in the channel configuration:
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
If you miss this final step, the rendering will only happen for the includes preview in the editor but NOT in the public API.
