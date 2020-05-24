# Component configuration

Every component has a `script` block at the top of the file that can take different kinds of configurations. Following we will describe them one by one in logical blocks.

## Administrative configuration

Example:
```html
<script type="ld-conf">
{
  "name": "p"
  "label": "Paragraph",
  "iconUrl": "https://livingdocs.io/images/building_blocks_magazine.svg",
  "description": "Your main writing tool"
}
</script>

<p doc-editable="text">
  foo
</p>
```

----

- `name`

  The handle of the component. This is how the component is referenced in either code or the `config.json` file where it is assigned to a group.

- `label`

  The label that is used in the editor's sidebar. This is the human label. See example above.

- `iconUrl` (optional)

  Adds a visual icon to the component in the editor's sidebar. Must be an absolute URL.

- `description` (optional)

  Adds an additional description text to the component in the editor's sidebar.

----

## Properties

Properties allow you to reference style properties (CSS classes or styles) that are defined in the `config.json`. They will be available to the user in the Livingdocs editor when the respective component is selected.

Example:
```html
<script type="ld-conf">
{
  "label": "Aside",
  "properties": ["featured"]
}
</script>

<aside class="sidenote right">
  <h4 doc-editable="title">
    Heading
  </h4>
  <p doc-editable="text">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
</aside>
```

## Nesting Components

Components can be nested. For more info have a look at the `doc-container` directive.

`allowedParents`: Allows you to define what components are allowed as parents of this component. The allowed parents must contain at least one `doc-container` directive. Normally, this config comes in tandem with the `allowedChildren` configuration on the `doc-container` directive (see further down in the `doc-container` section).

Example:
```html
<script type="ld-conf">
{
  "name": "bullet-list-item",
  "label": "Bullet List Item",
  "allowedParents": ["bullet-list"]
}
</script>

<li doc-editable="text">List item</li>
```

## Directives

Directives are the editable parts of a component and come in different flavors, e.g. `doc-editable`, `doc-image`, etc. Every directive can take different options. Following, we describe the different options for different kinds of directives.

### `doc-editable` directive


#### `plainText`, `tagWhitelist` and `tagBlacklist`

Only one of these options can be used on a single directive. `plainText` does not allow any markup. `tagWhitelist` can be used to have exact control about the possible tags in content. `tagBlacklist` can be used to filter out only a few specific tags and allow everything else.

Note: Block level elements and elements like script and style are already prohibited in editable directives. Use the new options only to filter inline elements like `<a>` or `<strong>`.


`plainText`: Ensures that a text can not contain any HTML tags (decodes HTML).

Example:
```html
<script type="ld-conf">
{
  "label": "Page Title",
  "directives": [{
    "name": "text",
    "type": "editable",
    "plainText": true
  }]
}
</script>

<h1 doc-editable="text">
  Title
</h1>
```


`tagWhitelist`: Only allows selected tags in the content.

```html
<script type="ld-conf">
{
  "label": "Paragraph",
  "directives": [{
    "name": "text",
    "type": "editable",
    "tagWhitelist": ['a', 'em']
  }]
}
</script>

<p doc-editable="text">
  Lorem Ipsum Dolorem...
</p>
```

`tagBlacklist`: Removes certain tags from the content.

Example where an editable directive cannot contain links:
```html
<script type="ld-conf">
{
  "label": "Subtitle",
  "directives": [{
    "name": "text",
    "type": "editable",
    "tagBlacklist": ['a']
  }]
}
</script>

<h3 doc-editable="text">
  Lorem Ipsum Dolorem...
</h3>
```

#### Text-Counter

`excludeFromTextCount`: Tells the editor to exclude the directive
from text counter. By default every `doc-editable` will be counted.

Example, only count text directive:
```html
<script type="ld-conf">
{
  "label": "Footer",
  "directives": [{
    "name": "text",
    "type": "editable",
    "excludeFromTextCount": true
  }]
}
</script>

<p doc-editable="text" class="footer">
  Title
</p>
```

### `doc-link` directive

`prefill`: allows to define a metadata fetching service to prefill the content of other directives from the result of fetching metadata from the respective link. Currently only iframely is supported as a metadata service. What this does in a nutshell is parsing the `head` section of a linked HTML page (the content of `doc-link`) for meta tags.

This configuration comes in handy when doing external teasers, i.e. a teaser to an arbitrary webpage that the user can enter in a link.

Example:
```html
<script type="ld-conf">
  {
    "label": "Web Teaser",
    "directives": [{
      "name": "link",
      "type": "link",
      "prefill": {
        "title": {
          "key": "title",
          "provider": "iframely"
        },
        "site": {
          "key": "site",
          "provider": "iframely"
        },
        "headline": {
          "key": "author",
          "provider": "iframely"
        },
        "image": {
          "key": "image",
          "provider": "iframely"
        }
      }
    }, {
      "name": "image",
      "type": "image",
      "imageRatios": ["16:9"],
      "allowOriginalRatio": false
    }]
  }
</script>

<div class="teaser">
  <a doc-link="link">
    <div class="teaser__image container image-container" doc-image="image">
      <div class="image--overlay"></div>
    </div>
    <div class="teaser__text">
      <div>
        <h3><span doc-editable="headline">Headline</span> <span class="source" doc-editable="site">Source</span></h3>
      </div>
      <h2 doc-editable="title">Title</h2>
    </div>
  </a>
</div>
```

Reading example: The `doc-editable` directive `headline` will be filled through the metadata service `iframely` and the content comes from the metadata key `author`.


### `doc-image` directive


`imageRatios`: allows you to define available image ratios for an image. The cropping mask in the Livingdocs editor will show those ratios when cropping the image of the respective component.
`allowOriginalRatio`: if set to false the image will be cropped to the first `imageRatio` in the `imageRatios` array.

Example:
```html
<script type="ld-conf">
{
  "label": "Normal Image",
  "directives": [{
    "name": "image",
    "type": "image",
    "imageRatios": ["16:9", "1:1", "4:3", "3:4"],
    "allowOriginalRatio": true
  }]
}
</script>

<figure class="aspect-ratio">
  <img doc-image="image"/>
  <figcaption doc-editable="caption" doc-optional="true">Add image caption</figcaption>
</figure>
```

----

`allowOriginalRatio`: true or false. If true will show the original ratio of the image in the crop selection box as well. See example above.

### `doc-container` directive

`defaultComponent`: allows you to overwrite the default components inside a container. Probably the most important one is the `paragraph` default component which defines what happens upon pressing the Enter key.

`defaultContent`: array. Defines a set of components that are available by default in the container. **ATTENTION**: This applies only when the component is dragged in by a human. If a component is created by a machine (e.g. import or data migration) no default content is set.

Common use case: The two configurations can be used to define the container of a repeatable such as a bullet point list. An editor drags in a component with a container with the according configuration that already has one item of the repeatable by default (`defaultContent`) and upon pressing Enter the user can repeat it (`defaultComponents` -> `paragraph`).

Example:
```html
<script type="ld-conf">
{
  "label": "Bullet List",
  "name": "bullet-list",
  "directives": [{
    "name": "list",
    "type": "container",
    "defaultComponents": {
      "paragraph": "bullet-list-item"
    },
    "defaultContent": [{
      "component": "bullet-list-item"
    }]
  }]
}
</script>

<ul doc-container="list" class="ld-list"></ul>
```

The list item for the example above looks like this:
```html
<script type="ld-conf">
{
  "name": "bullet-list-item",
  "label": "Bullet List Item",
  "allowedParents": ["bullet-list"]
}
</script>

<li doc-editable="text">List item</li>
```

----

`allowedChildren`: array. Allows you to define which components are allowed within a certain container. Great if you need to restrict what users can do in a design.

Example:
```html
<script type="ld-conf">
{
  "label": "Media Gallery",
  "directives": [{
    "name": "slides",
    "type": "container",
    "allowedChildren": ["image-slide", "media-slide", "quote-slide"]
  }]
}
</script>


<div class="media-gallery">
  <h2 doc-editable="title" doc-optional>Mediengalerie</h2>
  <ul class="media-gallery-slides" doc-container="slides"></ul>
</div>
```

### `doc-style` directive

`properties`: Array of style properties that are set when the user enters content. E.g. in the example below a user could set a hex-code for a color that is then set to `style="background-color:user-value"`.

Example:
```html
<script type="ld-conf">
{
  "name": "article-header",
  "label": "Artikelkopf",
  "allowedParents": ["root"],
  "directives": [{
    "name": "background",
    "type": "style",
    "properties": {
      "css-background-color": {
        "type": "style",
        "label": "Background Color",
        "cssProperty": "background-color"
      }
    }
  }, {
    "name": "title",
    "type": "editable",
    "plainText": true
  }]
}
</script>

<header class="articleheader">
  <section class="articleheader__textsection" doc-style="background">
    <div class="articleheader__textcontainer l-rwd fore-edge">
      <h1 class="headline headline--h1 articleheader__headline articleheader__headline--h1" doc-editable="title">Artikel Headline</h1>
      <div class="subline articleheader__subline text__large--italic" doc-editable="text">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</div>
    </div>
  </section>
</header>
```

### `doc-html` directive

A `doc-html` directive can take arbitrary HTML. The Livingdocs editor handles `doc-html` directives as [embeds](../editor-configuration/editing-features.md#embeds) except when you name the directive `free-html` in which case it is treated as a free-html input (no validation). The latter is dangerous and we don't advise using it.

Example:
```html
<script type="ld-conf">
{
  "label": "Tweet",
  "properties": []
}
</script>


<div class="embed-container">
  <div doc-html="tweet">
    <div class="embed tweet">
      <div class="placeholder"></div>
    </div>
  </div>
</div>
```


### `doc-include` directive

`service`: defines the service type to use which corresponds to the name of an existing server-side plugin. `doc-include` services are freely configurable and are implemented as plugins in customizing projects. The concept is similar to [edge side includes](https://en.wikipedia.org/wiki/Edge_Side_Includes).

Example:
```html
<script type="ld-conf">
  {
    "name": "top-row",
    "label": "Top Row",
    "directives": [{
      "name": "latest-news",
      "type": "include",
      "service": "list",
      "defaultParams": {
        "count": 5,
        "layout": "news"
      }
    }, {
      "name": "top-teasers",
      "type": "include",
      "service": "list",
      "config": {
        "minCount": 3,
        "maxCount": 3
      },
      "defaultParams": {
        "layout": "teaserRowHigh"
      }
    }]
  }
</script>

<div class="teaser-row">
  <div class="teaser-row__item teaser-row__item--high teaser-row__item--latest">
    <div class="teaser-row__inside teaser-row__inside--latest">
      <div class="teaser-latest__title" doc-editable="title">Title</div>
      <div doc-include="latest-news">
        <div class="placeholder-bg">
        </div>
      </div>
    </div>
  </div>
  <div class="top-three-teasers" doc-include="top-teasers">
    <div class="placeholder-bg placeholder--top-teasers"></div>
  </div>
</div>
```

`defaultParams`: set of default parameters that are sent to the server-side plugin. Usually you will implement an editor plugin that allows users to change the default parameters in the editor.

`config`: configuration parameters that are sent to the editor plugin to customize the user interface.
