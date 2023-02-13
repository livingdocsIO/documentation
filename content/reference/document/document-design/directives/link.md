---
title: Link
description: A link directive generates a user interface in Livingdocs to enter a link or select a document reference.
menus:
  reference:
    parent: Directives
    weight: 6
---

A link directive generates a user interface in Livingdocs to enter a link or select a document reference. It can only be defined on `<a>` tags.
If you want to set a link on an image for example, just wrap the `<img>` tag in an `<a>` tag and add a doc-link directive on the `<a>` tag.

If you select a link by document reference, the shown search dashboard is the same as for [Inline Links](https://docs.livingdocs.io/reference/project-config/editor-settings/#inline-links)

## Example

```js
{
  name: 'web-teaser',
  label: 'Web Teaser',
  iconUrl: 'https://livingdocsio.github.io/livingdocs-design-assets/docs/icons/component-icons/icon_component_teaser_with_image.svg',
  directives: [
    {
      name: 'link',
      type: 'link',
      prefill: { // optional
        title: {key: 'title', provider: 'iframely'},
        site: {key: 'site', provider: 'iframely'},
        headline: {key: 'author', provider: 'iframely'},
        image: {key: 'image', provider: 'iframely'}
      }
    },
    {
      name: 'image',
      type: 'image',
      imageRatios: ['16:9'],
      allowOriginalRatio: false
    }
  ],
  html: dedent`
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
  `
}
```


## Config Options

The only (optional) config option is `prefill`. This works in tandem with the service Iframely and allows you to prefill other directives (e.g. text) in the same component with metadata fetched from the provided link (through the Iframely service). The example above uses the `prefill` option to render a teaser that works simply by linking any article from the web (e.g. a NYT article).
What Iframely does in a nutshell is parsing the `head` section of a linked HTML page (the content of `doc-link`) for meta tags.

The only supported provider is `iframely`.
The possible fields are:
- title
- site
- author
- image
- description
- host
- icon
- thumbnail
