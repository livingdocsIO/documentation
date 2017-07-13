# Component configuration

Every component has a `script` block at the top of the file that can take different kinds of configurations. Following we will describe them one by one in logical blocks.

## Administrative configuration

Example:
```html
<script type="ld-conf">
{
  "name": "p"
  "label": "Paragraph"
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

----

## Properties

Properties allow you to reference style properties (CSS toggles) that are defined in the `config.json`. They will be available to the user in the Livingdocs editor when the respective component is selected.

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

## Container

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

### `doc-editable`

`plainText`: Ensures that a text can not contain any HTML tags (decodes HTML).

Example:
```html
<script type="ld-conf">
{
  "label": "foo",
  "directives": {
    "title": {
      "plainText": true
    }
  }
}
</script>

<section class="container container--product container--nzzas">
  <a class="container__head" doc-link="link">
    <span class="container__link" doc-editable="title">Titel</span>
  </a>
</section>
```


`excludeFromTextCount`: Tells the editor to exclude the directive
from text counter. By default every `doc-editable` will be counted.

Example, only count text directive:
```html
<script type="ld-conf">
{
  "label": "foo",
  "directives": {
    "title": {
      "excludeFromTextCount": true
    }
  }
}
</script>

<section class="container">
  <span class="container__item" doc-editable="title">Titel</span>
  <span class="container__item" doc-editable="text">Text</span>
</section>
```

### `doc-link`

`prefill`: allows to define a metadata fetching service to prefill the content of other directives from the result of fetching metadata from the respective link. Currently only iframely is supported as a metadata service. What this does in a nutshell is parsing the `head` section of a linked HTML page (the content of `doc-link`) for meta tags.

This configuration comes in handy when doing external teasers, i.e. a teaser to an arbitrary webpage that the user can enter in a link.

Example:
```html
<script type="ld-conf">
  {
    "label": "Web Teaser",
    "directives": {
      "link": {
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
      },
      "image": {
        "imageRatios": ["16:9"],
        "allowOriginalRatio": false
      }
    }
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


### `doc-image`

`ratios`: allows you to define pre-defined image ratios for an image. The cropping mask in the Livingdocs editor will show those ratios when cropping the image of the respective component.

Example:
```html
<script type="ld-conf">
{
  "label": "Normal Image",
  "directives": {
    "image": {
      "imageRatios": ["16:9", "1:1", "4:3", "3:4"],
      "allowOriginalRatio": true
    }
  }
}
</script>

<figure class="aspect-ratio">
  <img doc-image="image"/>
  <figcaption doc-editable="caption" doc-optional="true">Add image caption</figcaption>
</figure>
```

----

`allowOriginalRatio`: true or false. If true will show the original ratio of the image in the crop selection box as well. See example above.

### `doc-container`

`defaultComponent`: allows you to overwrite the default components inside a container. Probably the most important one is the `paragraph` default component which defines what happens upon pressing the Enter key.

`defaultContent`: array. Defines a set of components that are available by default in the container. **ATTENTION**: This applies only when the component is dragged in by a human. If a component is created by a machine (e.g. import or data migration) no default content is set.

Common use case: The two configurations can be used to define the container of a repeatable such as a bullet point list. An editor drags in a component with a container with the according configuration that already has one item of the repeatable by default (`defaultContent`) and upon pressing Enter the user can repeat it (`defaultComponents` -> `paragraph`).

Example:
```html
<script type="ld-conf">
{
  "label": "Bullet List",
  "name": "bullet-list",
  "directives": {
    "list": {
      "defaultComponents": {
        "paragraph": "bullet-list-item"
      },
      "defaultContent": [
        {
          "component": "bullet-list-item"
        }
      ]
    }
  }
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
  "directives": {
    "slides": {
      "allowedChildren": ["image-slide", "media-slide", "quote-slide"]
    }
  }
}
</script>


<div class="media-gallery">
  <h2 doc-editable="title" doc-optional>Mediengalerie</h2>
  <ul class="media-gallery-slides" doc-container="slides"></ul>
</div>
```

## `doc-include`

(also see the following [techtalk](https://drive.google.com/open?id=0B8MM4t0ini5HbVB3cXlxSmZZV3c))

`service`: defines the service type to use which corresponds to the name of an existing server-side plugin. `doc-include` services are freely configurable and are implemented as plugins in customizing projects. The concept is similar to [edge side includes](https://en.wikipedia.org/wiki/Edge_Side_Includes).

Example:
```html
<script type="ld-conf">
  {
    "name": "top-row",
    "label": "Top Row",
    "directives": {
      "latest-news": {
        "service": "list",
        "defaultParams": {
          "count": 5,
          "layout": "news"
        }
      },
      "top-teasers": {
        "service": "list",
        "config": {
          "minCount": 3,
          "maxCount": 3
        },
        "defaultParams": {
          "layout": "teaserRowHigh"
        }
      }
    }
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
