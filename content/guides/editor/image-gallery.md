---
title: Image Gallery
description: Walkthrough of how to setup an image gallery and a gallery teaser
weight: 12
---

## Goal

With this walkthrough we show how to set up an image gallery and an image gallery teaser, usually used for a slideshow. At the moment the concept of a gallery is not part of the core system, so we show you a way how Livingdocs would create an image gallery.

**Key features**
- You will have your own content-type "gallery" where you can create a slideshow
- You will have a gallery-teaser component to embed into your document

**Workflow**

First we add a few [gallery components](#add-gallery-components) and a new content type [gallery](#add-content-type-gallery). Then we [add](#integrate-gallery-to-your-project) the components and the content type to your project. In the next step we [add](#add-gallery-teaser-include) and then [register](#register-gallery-teaser-include) a gallery-teaser include. The last step [adds](#add-gallery-teaser-component) and then [integrates](#integrate-gallery-teaser-to-your-project) a gallery teaser component into your project.


## Expected Result

Content Type "gallery"

![image](https://user-images.githubusercontent.com/172394/140876842-61f298cf-406b-4a5e-aa53-7c058c7c3b85.png)

Empty "gallery-teaser"

![image](https://user-images.githubusercontent.com/172394/140877439-04639ea7-9fb2-4db0-a3d1-d40c42ba730e.png)


"gallery-teaser"

![image](https://user-images.githubusercontent.com/172394/140877202-bce45606-e076-48dd-88e8-a1f0ebf1f971.png)


## Guide

### Add Gallery Components

```js
// your-project/components/asset-container-gallery.js
const dedent = require('dedent')
module.exports = {
  name: 'asset-container-gallery',
  label: 'Gallery Container',
  description: '1 column to add images',
  iconUrl: 'https://livingdocsio.github.io/livingdocs-design-assets/docs/icons/component-icons/icon_component_layout.svg',
  html: dedent`
  <div class="m-asset-main-gallery">
    <h3 class= "a-asset-section-title">Images</h3>
    <div doc-container="gallery"></div>
  </div>
  `,
  directives: [{
    name: 'gallery',
    type: 'container',
    allowedChildren: ['asset-image'],
    defaultComponents: {
      image: 'asset-image'
    }
  }]
}
```

```js
// your-project/components/asset-content.js
const dedent = require('dedent')
module.exports = {
  name: 'asset-content',
  label: 'Asset Content',
  description: 'Main container for assets',
  iconUrl: 'https://livingdocsio.github.io/livingdocs-design-assets/docs/icons/component-icons/icon_component_1_column.svg',
  directives: [{
    name: 'header',
    type: 'container',
    allowedChildren: ['asset-head-gallery']
  }],
  html: dedent`
  <article class="o-asset-content">
    <header class="o-asset-content__header" doc-container="header">
    </header>
    <main class="o-asset-content__main" doc-container="body">
    </main>
  </article>
  `
}
```
```js
// your-project/components/asset-head-gallery.js
/* eslint-disable */
const dedent = require('dedent')
module.exports = {
  name: 'asset-head-gallery',
  label: 'Asset Gallery Header',
  description: 'Header and Title Field',
  iconUrl: 'https://livingdocsio.github.io/livingdocs-design-assets/docs/icons/component-icons/icon_component_header_full.svg',
  html: dedent`
  <div class="m-asset-head m-asset-head--gallery">
    <div class="m-asset-head__bar">
      <h2 class="m-asset-head__type">Gallery</h2>
      <div class="m-asset-picker">
        <div class="a-asset-picker-option">
          <svg width="16" height="13" viewBox="0 0 16 13" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.69335 4.61891C8.4307 4.61891 12.1184 4.61891 15.8433 4.61891C15.8433 4.78033 15.8433 4.91691 15.8433 5.05349C15.8433 6.0468 15.8309 7.04011 15.8433 8.03343C15.8433 8.28176 15.7564 8.34384 15.5205 8.34384C12.0066 8.34384 8.49278 8.34384 4.96651 8.34384C4.84235 8.34384 4.66852 8.39351 4.66852 8.17001C4.69335 7.00287 4.69335 5.82331 4.69335 4.61891Z" />
            <path d="M15.8433 0C15.8433 1.19198 15.8433 2.33429 15.8309 3.4766C15.8309 3.5511 15.7191 3.6256 15.6446 3.67526C15.6074 3.7001 15.5205 3.67526 15.4584 3.67526C11.9942 3.67526 8.53003 3.67526 5.06584 3.68768C4.74302 3.68768 4.66852 3.60076 4.66852 3.29035C4.69335 2.28462 4.68093 1.29131 4.68093 0.285578C4.68093 0.198663 4.69335 0.0993314 4.69335 0C8.41828 0 12.106 0 15.8433 0Z" />
            <path d="M4.70573 9.2999C8.41824 9.2999 12.1059 9.2999 15.8184 9.2999C15.8309 9.41164 15.8433 9.51098 15.8433 9.61031C15.8433 10.6285 15.8433 11.6342 15.8433 12.6523C15.8433 12.9007 15.7936 13 15.5204 13C12.019 12.9876 8.51757 13 5.00372 13C4.80506 13 4.66848 12.9876 4.6809 12.7268C4.69331 11.6466 4.6809 10.554 4.69331 9.47373C4.69331 9.42406 4.70573 9.37439 4.70573 9.2999Z" />
            <path d="M0.0496394 0C1.26645 0 2.48326 0 3.71249 0C3.7249 0.086915 3.73732 0.17383 3.73732 0.248329C3.73732 1.29131 3.7249 2.33429 3.74974 3.37727C3.74974 3.6256 3.67524 3.7001 3.42691 3.68768C2.38393 3.67526 1.34095 3.68768 0.297968 3.68768C0.148971 3.68768 0.0123901 3.7001 0.0123901 3.4766C0.0248066 2.3467 0.0123901 1.22923 0.0248066 0.0993314C0.0248066 0.0744986 0.037223 0.0372493 0.0496394 0Z" />
            <path d="M0.0496657 4.63132C1.27889 4.63132 2.4957 4.63132 3.73735 4.63132C3.73735 5.16523 3.73735 5.67431 3.73735 6.1958C3.73735 6.82903 3.72493 7.46227 3.73735 8.08309C3.73735 8.30659 3.66285 8.36867 3.45177 8.36867C2.39637 8.35625 1.34097 8.36867 0.285578 8.36867C0.136581 8.36867 0 8.3935 0 8.15759C0.0124164 7.01528 0 5.88538 0 4.74307C0.0248329 4.69341 0.0372493 4.65616 0.0496657 4.63132Z" />
            <path d="M0.0496657 9.2999C1.27889 9.2999 2.48329 9.2999 3.71251 9.2999C3.72493 9.38681 3.73735 9.46131 3.73735 9.54822C3.73735 10.5912 3.73735 11.6342 3.73735 12.6772C3.73735 12.9007 3.67526 12.9876 3.43935 12.9876C2.38395 12.9752 1.32856 12.9876 0.273161 12.9876C0.111748 12.9876 0 12.9752 0 12.7641C0.0124164 11.6466 0 10.5291 0.0124164 9.41164C0.0248329 9.3744 0.0372493 9.34956 0.0496657 9.2999Z" />
          </svg>
        </div>
        <div class="a-asset-picker-option is-active">
          <svg width="18" height="13" viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.0278931 5.94553C0.0278931 3.95478 0.0278931 1.97739 0.0278931 0C5.69285 0 11.3578 0 17.0228 0C17.0228 1.99075 17.0228 3.95478 17.0228 5.94553C11.3578 5.94553 5.70621 5.94553 0.0278931 5.94553Z" />
            <path d="M8.48529 12.9866C5.78643 12.9866 3.10092 12.9866 0.402047 13C0.0813891 13 -0.0121361 12.9065 0.00122466 12.5858C0.0145854 10.8222 0.0145854 9.07195 0.00122466 7.30833C0.00122466 7.02776 0.0947498 6.96095 0.361965 6.96095C5.79979 6.97431 11.251 6.97431 16.6888 6.96095C16.956 6.96095 17.0495 7.02776 17.0495 7.30833C17.0362 9.07195 17.0362 10.8489 17.0495 12.6125C17.0495 12.9198 16.9426 12.9866 16.6621 12.9866C13.9365 12.9866 11.2109 12.9866 8.48529 12.9866Z" />
          </svg>
        </div>
      </div>
    </div>
    <div class="m-asset-head__section">
      <h3 class="a-asset-section-title">Title</h3>
      <div class="a-asset-input" doc-editable="title">Gallery Title</div>
    </div>
  </div>
  `,
  directives: [{
    type: 'editable',
    name: 'title',
    excludeFromTextCount: true
  }]
}
```

```js
// your-project/components/asset-image.js
const dedent = require('dedent')
module.exports = {
  name: 'asset-image',
  label: 'Asset Image',
  description: 'Image with caption',
  iconUrl: 'https://livingdocsio.github.io/livingdocs-design-assets/docs/icons/component-icons/icon_component_image.svg',
  directives: [{
    name: 'image',
    type: 'image',
    imageRatios: ['16:9', '1:1', '4:3', '3:4'],
    allowOriginalRatio: true
  }, {
    name: 'caption',
    type: 'editable',
    excludeFromTextCount: true
  }, {
    name: 'source',
    type: 'editable',
    excludeFromTextCount: true
  }],
  html: dedent`
  <div class="m-asset-image">
    <div class="m-asset-image__image">
      <img doc-image="image" />
    </div>
    <div class="m-asset-image__options">
      <div class="a-asset-input" doc-editable="caption">Caption</div>
      <div class="a-asset-input" doc-editable="source">Source</div>
    </div>
  </div>
  `
}
```

### Add Content Type "gallery"

```js
// your-project/content-types/gallery.js
module.exports = {
  handle: 'gallery',
  documentType: 'article',

  info: {
    label: 'Gallery',
    icon: 'image-multiple'
  },

  components: [
    {name: 'asset-image'}
  ],

  editorWrapper: '<div class="page container container--article doc-section"></div>',

  defaultContent: [
    {
      identifier: 'asset-content',
      position: 'fixed',
      containers: {
        header: [
          {identifier: 'asset-head-gallery', position: 'fixed'}
        ],
        body: [
          {
            identifier: 'asset-container-gallery',
            containers: {
              gallery: [
                {identifier: 'asset-image'},
                {identifier: 'asset-image'}
              ]
            }
          }
        ]
      }
    }
  ]
}
```

### Integrate Gallery to your project

```js
// your-project/index.js
{
  // Add gallery content type to your project
  contentTypes: [
    //...
    require('./content-types/gallery'),
  ],
  // Add components to your project
  {
    components: [
      // ...
      require('./components/asset-container-gallery'),
      require('./components/asset-content'),
      require('./components/asset-head-gallery'),
      require('./components/asset-image')
    ]
  },
  // Add UI and behaviour for the asset/gallery components in the Gallery Content Type
  designSettings: {
    assets: {
      css: [
        'https://livingdocs-assets.s3.eu-west-1.amazonaws.com/documentation-examples/li-gallery.css'
      ],
      js: [
        'https://livingdocs-assets.s3.eu-west-1.amazonaws.com/documentation-examples/li-gallery.js'
      ]
    }
  }
}
```



### Add "gallery-teaser" Include

```js
// /plugins/includes/gallery-teaser.js
'use strict'

/* eslint-disable */
const _ = require('lodash')
const dedent = require('dedent')

module.exports = function ({publicationApi}) {
  return {
    name: 'gallery-teaser',
    paramsSchema: [
      {
        handle: 'teaser',
        type: 'li-reference',
        preload: true,
        config: {
          referenceType: 'document'
        },
        ui: {
          label: 'Image Gallery'
        }
      }
    ],
    rendering: {
      type: 'function',
      render (params, options) {
        return renderTeaser({params, options, publicationApi})
      }
    }
  }
}

async function renderTeaser ({params, options, publicationApi}) {
  const isPreview = options && options.preview === true
  const documentId = _.get(params, 'teaser.reference.id')
  if (!documentId) {
    if (!isPreview) {
      // When not rendering a preview an include with not enough
      // params will simply not be rendered.
      // This is accomplished by returning an empty string.
      return {html: ''}
    } else {
      // When rendering a preview we can return undefined so the include
      // placeholder will still be shown.
      return {doNotRender: true}
    }
  }

  try {
    const documentVersion = await publicationApi.getLatestPublication({documentId})

    const apiContent = documentVersion.content[0]

    // isPreview = true defines that the teaser is requested by the editor as a preview
    // You can send any preview to the editor even when the output to the publicAPI
    // would be different
    // In this preview we want to return a simple gallery teaser (called gallery-teaser-resolved)
    // which only shows a title a teaserimage and a text without any interactivity like sliding to the next image in the gallery
    const previewContent = [{
      id: `gallery-teaser-${documentId}`,
      component: 'gallery-teaser-resolved',
      content: {
        title: documentVersion.title,
        image: _.get(documentVersion, 'metadataEntity.data.teaserImage.url'),
        text: _.get(documentVersion, 'metadataEntity.data.description')
      }
    }]

    return {
      editableContent: true,
      content: isPreview ? previewContent : apiContent
    }
  } catch (err) {
    return !isPreview
      ? {html: ''}
      : {html: galleryIsNotPublishedPlaceholder}
  }
}

const galleryIsNotPublishedPlaceholder = dedent`
<div doc-include="gallery" class="placeholder--teaser-gallery">
  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTM5IiBoZWlnaHQ9IjU4NiIgdmlld0JveD0iMCAwIDkzOSA1ODYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05MzYuMTMyIDIuMDAwMDNIMFY1MjEuOTI2SDkzNi4xMzJWMi4wMDAwM1oiIGZpbGw9IiNFQUVBRUEiLz4KPHBhdGggZD0iTTMuOTE1NjUgMS40MzMyOUw5MzcuMjExIDUyMC40OTMiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPgo8cGF0aCBkPSJNOTM3LjIxMSAxLjQzMzI5TDMuOTE1NjUgNTIwLjQ5MyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIi8+CjxwYXRoIGQ9Ik02MDQgNTMwSDBWNTU0SDYwNFY1MzBaIiBmaWxsPSIjQjhCOEI4Ii8+CjxwYXRoIGQ9Ik02OCAyMzdIMThWMjg3SDY4VjIzN1oiIGZpbGw9IiNCOEI4QjgiLz4KPHBhdGggZD0iTTM2IDI2MUMzNiAyNjEgNTIuMDEzMSAyNDQuOTg3IDQ3LjA0MzUgMjQ5Ljk1NyIgc3Ryb2tlPSIjRjZGNkY2IiBzdHJva2Utb3BhY2l0eT0iMC45ODc0MzIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPgo8cGF0aCBkPSJNNDcuMjYyOSAyNzNDNDcuMjYyOSAyNzMgMzEuMjQ5OCAyNTYuOTg3IDM2LjIxOTQgMjYxLjk1NyIgc3Ryb2tlPSIjRjZGNkY2IiBzdHJva2Utb3BhY2l0eT0iMC45ODc0MzIiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNTYySDE0N1Y1ODZIMFY1NjJaIiBmaWxsPSIjQjhCOEI4Ii8+CjxwYXRoIGQ9Ik05MTggMjM3SDg2OFYyODdIOTE4VjIzN1oiIGZpbGw9IiNCOEI4QjgiLz4KPHBhdGggZD0iTTg4OC41IDI1MC41Qzg4OC41IDI1MC41IDkwNC41MTMgMjY2LjUxMyA4OTkuNTQ0IDI2MS41NDQiIHN0cm9rZT0iI0Y2RjZGNiIgc3Ryb2tlLW9wYWNpdHk9IjAuOTg3NDMyIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz4KPHBhdGggZD0iTTg5OS43NjMgMjYxLjVDODk5Ljc2MyAyNjEuNSA4ODMuNzUgMjc3LjUxMyA4ODguNzE5IDI3Mi41NDQiIHN0cm9rZT0iI0Y2RjZGNiIgc3Ryb2tlLW9wYWNpdHk9IjAuOTg3NDMyIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiLz4KPHBhdGggZD0iTTI1MS4xNTYgMjc4LjUyM0MyNTAgMjgwLjE4IDI0OC4zODMgMjgxLjQyMiAyNDYuMzA1IDI4Mi4yNUMyNDQuMjQyIDI4My4wNjMgMjQxLjgzNiAyODMuNDY5IDIzOS4wODYgMjgzLjQ2OUMyMzYuMzA1IDI4My40NjkgMjMzLjgzNiAyODIuODIgMjMxLjY4IDI4MS41MjNDMjI5LjUyMyAyODAuMjExIDIyNy44NTIgMjc4LjM1MiAyMjYuNjY0IDI3NS45NDVDMjI1LjQ5MiAyNzMuNTM5IDIyNC44OTEgMjcwLjc1IDIyNC44NTkgMjY3LjU3OFYyNjQuNjAyQzIyNC44NTkgMjU5LjQ2MSAyMjYuMDU1IDI1NS40NzcgMjI4LjQ0NSAyNTIuNjQ4QzIzMC44NTIgMjQ5LjgyIDIzNC4yMjcgMjQ4LjQwNiAyMzguNTcgMjQ4LjQwNkMyNDIuMTMzIDI0OC40MDYgMjQ1IDI0OS4zMiAyNDcuMTcyIDI1MS4xNDhDMjQ5LjM0NCAyNTIuOTYxIDI1MC42NzIgMjU1LjUzOSAyNTEuMTU2IDI1OC44ODNIMjQ2LjY1NkMyNDUuODEyIDI1NC4zNjcgMjQzLjEyNSAyNTIuMTA5IDIzOC41OTQgMjUyLjEwOUMyMzUuNTc4IDI1Mi4xMDkgMjMzLjI4OSAyNTMuMTcyIDIzMS43MjcgMjU1LjI5N0MyMzAuMTggMjU3LjQwNiAyMjkuMzk4IDI2MC40NjkgMjI5LjM4MyAyNjQuNDg0VjI2Ny4yNzNDMjI5LjM4MyAyNzEuMTAyIDIzMC4yNTggMjc0LjE0OCAyMzIuMDA4IDI3Ni40MTRDMjMzLjc1OCAyNzguNjY0IDIzNi4xMjUgMjc5Ljc4OSAyMzkuMTA5IDI3OS43ODlDMjQwLjc5NyAyNzkuNzg5IDI0Mi4yNzMgMjc5LjYwMiAyNDMuNTM5IDI3OS4yMjdDMjQ0LjgwNSAyNzguODUyIDI0NS44NTIgMjc4LjIxOSAyNDYuNjggMjc3LjMyOFYyNjkuNjY0SDIzOC43ODFWMjY2LjAwOEgyNTEuMTU2VjI3OC41MjNaTTI3My42NTYgMjgzQzI3My40MDYgMjgyLjUgMjczLjIwMyAyODEuNjA5IDI3My4wNDcgMjgwLjMyOEMyNzEuMDMxIDI4Mi40MjIgMjY4LjYyNSAyODMuNDY5IDI2NS44MjggMjgzLjQ2OUMyNjMuMzI4IDI4My40NjkgMjYxLjI3MyAyODIuNzY2IDI1OS42NjQgMjgxLjM1OUMyNTguMDcgMjc5LjkzOCAyNTcuMjczIDI3OC4xNDEgMjU3LjI3MyAyNzUuOTY5QzI1Ny4yNzMgMjczLjMyOCAyNTguMjczIDI3MS4yODEgMjYwLjI3MyAyNjkuODI4QzI2Mi4yODkgMjY4LjM1OSAyNjUuMTE3IDI2Ny42MjUgMjY4Ljc1OCAyNjcuNjI1SDI3Mi45NzdWMjY1LjYzM0MyNzIuOTc3IDI2NC4xMTcgMjcyLjUyMyAyNjIuOTE0IDI3MS42MTcgMjYyLjAyM0MyNzAuNzExIDI2MS4xMTcgMjY5LjM3NSAyNjAuNjY0IDI2Ny42MDkgMjYwLjY2NEMyNjYuMDYyIDI2MC42NjQgMjY0Ljc2NiAyNjEuMDU1IDI2My43MTkgMjYxLjgzNkMyNjIuNjcyIDI2Mi42MTcgMjYyLjE0OCAyNjMuNTYzIDI2Mi4xNDggMjY0LjY3MkgyNTcuNzg5QzI1Ny43ODkgMjYzLjQwNiAyNTguMjM0IDI2Mi4xODggMjU5LjEyNSAyNjEuMDE2QzI2MC4wMzEgMjU5LjgyOCAyNjEuMjUgMjU4Ljg5MSAyNjIuNzgxIDI1OC4yMDNDMjY0LjMyOCAyNTcuNTE2IDI2Ni4wMjMgMjU3LjE3MiAyNjcuODY3IDI1Ny4xNzJDMjcwLjc4OSAyNTcuMTcyIDI3My4wNzggMjU3LjkwNiAyNzQuNzM0IDI1OS4zNzVDMjc2LjM5MSAyNjAuODI4IDI3Ny4yNSAyNjIuODM2IDI3Ny4zMTIgMjY1LjM5OFYyNzcuMDdDMjc3LjMxMiAyNzkuMzk4IDI3Ny42MDkgMjgxLjI1IDI3OC4yMDMgMjgyLjYyNVYyODNIMjczLjY1NlpNMjY2LjQ2MSAyNzkuNjk1QzI2Ny44MiAyNzkuNjk1IDI2OS4xMDkgMjc5LjM0NCAyNzAuMzI4IDI3OC42NDFDMjcxLjU0NyAyNzcuOTM4IDI3Mi40MyAyNzcuMDIzIDI3Mi45NzcgMjc1Ljg5OFYyNzAuNjk1SDI2OS41NzhDMjY0LjI2NiAyNzAuNjk1IDI2MS42MDkgMjcyLjI1IDI2MS42MDkgMjc1LjM1OUMyNjEuNjA5IDI3Ni43MTkgMjYyLjA2MiAyNzcuNzgxIDI2Mi45NjkgMjc4LjU0N0MyNjMuODc1IDI3OS4zMTMgMjY1LjAzOSAyNzkuNjk1IDI2Ni40NjEgMjc5LjY5NVpNMjg4LjgyIDI4M0gyODQuNDg0VjI0N0gyODguODJWMjgzWk0zMDAuNDkyIDI4M0gyOTYuMTU2VjI0N0gzMDAuNDkyVjI4M1pNMzE3Ljk3NyAyODMuNDY5QzMxNC41MzkgMjgzLjQ2OSAzMTEuNzQyIDI4Mi4zNDQgMzA5LjU4NiAyODAuMDk0QzMwNy40MyAyNzcuODI4IDMwNi4zNTIgMjc0LjgwNSAzMDYuMzUyIDI3MS4wMjNWMjcwLjIyN0MzMDYuMzUyIDI2Ny43MTEgMzA2LjgyOCAyNjUuNDY5IDMwNy43ODEgMjYzLjVDMzA4Ljc1IDI2MS41MTYgMzEwLjA5NCAyNTkuOTY5IDMxMS44MTIgMjU4Ljg1OUMzMTMuNTQ3IDI1Ny43MzQgMzE1LjQyMiAyNTcuMTcyIDMxNy40MzggMjU3LjE3MkMzMjAuNzM0IDI1Ny4xNzIgMzIzLjI5NyAyNTguMjU4IDMyNS4xMjUgMjYwLjQzQzMyNi45NTMgMjYyLjYwMiAzMjcuODY3IDI2NS43MTEgMzI3Ljg2NyAyNjkuNzU4VjI3MS41NjNIMzEwLjY4OEMzMTAuNzUgMjc0LjA2MyAzMTEuNDc3IDI3Ni4wODYgMzEyLjg2NyAyNzcuNjMzQzMxNC4yNzMgMjc5LjE2NCAzMTYuMDU1IDI3OS45MyAzMTguMjExIDI3OS45M0MzMTkuNzQyIDI3OS45MyAzMjEuMDM5IDI3OS42MTcgMzIyLjEwMiAyNzguOTkyQzMyMy4xNjQgMjc4LjM2NyAzMjQuMDk0IDI3Ny41MzkgMzI0Ljg5MSAyNzYuNTA4TDMyNy41MzkgMjc4LjU3QzMyNS40MTQgMjgxLjgzNiAzMjIuMjI3IDI4My40NjkgMzE3Ljk3NyAyODMuNDY5Wk0zMTcuNDM4IDI2MC43MzRDMzE1LjY4OCAyNjAuNzM0IDMxNC4yMTkgMjYxLjM3NSAzMTMuMDMxIDI2Mi42NTZDMzExLjg0NCAyNjMuOTIyIDMxMS4xMDkgMjY1LjcwMyAzMTAuODI4IDI2OEgzMjMuNTMxVjI2Ny42NzJDMzIzLjQwNiAyNjUuNDY5IDMyMi44MTIgMjYzLjc2NiAzMjEuNzUgMjYyLjU2M0MzMjAuNjg4IDI2MS4zNDQgMzE5LjI1IDI2MC43MzQgMzE3LjQzOCAyNjAuNzM0Wk0zNDUuMTY0IDI2MS41MzFDMzQ0LjUwOCAyNjEuNDIyIDM0My43OTcgMjYxLjM2NyAzNDMuMDMxIDI2MS4zNjdDMzQwLjE4OCAyNjEuMzY3IDMzOC4yNTggMjYyLjU3OCAzMzcuMjQyIDI2NVYyODNIMzMyLjkwNlYyNTcuNjQxSDMzNy4xMjVMMzM3LjE5NSAyNjAuNTdDMzM4LjYxNyAyNTguMzA1IDM0MC42MzMgMjU3LjE3MiAzNDMuMjQyIDI1Ny4xNzJDMzQ0LjA4NiAyNTcuMTcyIDM0NC43MjcgMjU3LjI4MSAzNDUuMTY0IDI1Ny41VjI2MS41MzFaTTM1Ny44OTEgMjc2LjY0OEwzNjMuNzk3IDI1Ny42NDFIMzY4LjQzOEwzNTguMjQyIDI4Ni45MTRDMzU2LjY2NCAyOTEuMTMzIDM1NC4xNTYgMjkzLjI0MiAzNTAuNzE5IDI5My4yNDJMMzQ5Ljg5OCAyOTMuMTcyTDM0OC4yODEgMjkyLjg2N1YyODkuMzUyTDM0OS40NTMgMjg5LjQ0NUMzNTAuOTIyIDI4OS40NDUgMzUyLjA2MiAyODkuMTQ4IDM1Mi44NzUgMjg4LjU1NUMzNTMuNzAzIDI4Ny45NjEgMzU0LjM4MyAyODYuODc1IDM1NC45MTQgMjg1LjI5N0wzNTUuODc1IDI4Mi43MTlMMzQ2LjgyOCAyNTcuNjQxSDM1MS41NjJMMzU3Ljg5MSAyNzYuNjQ4Wk0zODguOTQ1IDI4M0gzODQuNjA5VjI1Ny42NDFIMzg4Ljk0NVYyODNaTTM4NC4yNTggMjUwLjkxNEMzODQuMjU4IDI1MC4yMTEgMzg0LjQ2OSAyNDkuNjE3IDM4NC44OTEgMjQ5LjEzM0MzODUuMzI4IDI0OC42NDggMzg1Ljk2OSAyNDguNDA2IDM4Ni44MTIgMjQ4LjQwNkMzODcuNjU2IDI0OC40MDYgMzg4LjI5NyAyNDguNjQ4IDM4OC43MzQgMjQ5LjEzM0MzODkuMTcyIDI0OS42MTcgMzg5LjM5MSAyNTAuMjExIDM4OS4zOTEgMjUwLjkxNEMzODkuMzkxIDI1MS42MTcgMzg5LjE3MiAyNTIuMjAzIDM4OC43MzQgMjUyLjY3MkMzODguMjk3IDI1My4xNDEgMzg3LjY1NiAyNTMuMzc1IDM4Ni44MTIgMjUzLjM3NUMzODUuOTY5IDI1My4zNzUgMzg1LjMyOCAyNTMuMTQxIDM4NC44OTEgMjUyLjY3MkMzODQuNDY5IDI1Mi4yMDMgMzg0LjI1OCAyNTEuNjE3IDM4NC4yNTggMjUwLjkxNFpNNDEwLjY3MiAyNzYuMjczQzQxMC42NzIgMjc1LjEwMiA0MTAuMjI3IDI3NC4xOTUgNDA5LjMzNiAyNzMuNTU1QzQwOC40NjEgMjcyLjg5OCA0MDYuOTIyIDI3Mi4zMzYgNDA0LjcxOSAyNzEuODY3QzQwMi41MzEgMjcxLjM5OCA0MDAuNzg5IDI3MC44MzYgMzk5LjQ5MiAyNzAuMThDMzk4LjIxMSAyNjkuNTIzIDM5Ny4yNTggMjY4Ljc0MiAzOTYuNjMzIDI2Ny44MzZDMzk2LjAyMyAyNjYuOTMgMzk1LjcxOSAyNjUuODUyIDM5NS43MTkgMjY0LjYwMkMzOTUuNzE5IDI2Mi41MjMgMzk2LjU5NCAyNjAuNzY2IDM5OC4zNDQgMjU5LjMyOEM0MDAuMTA5IDI1Ny44OTEgNDAyLjM1OSAyNTcuMTcyIDQwNS4wOTQgMjU3LjE3MkM0MDcuOTY5IDI1Ny4xNzIgNDEwLjI5NyAyNTcuOTE0IDQxMi4wNzggMjU5LjM5OEM0MTMuODc1IDI2MC44ODMgNDE0Ljc3MyAyNjIuNzgxIDQxNC43NzMgMjY1LjA5NEg0MTAuNDE0QzQxMC40MTQgMjYzLjkwNiA0MDkuOTA2IDI2Mi44ODMgNDA4Ljg5MSAyNjIuMDIzQzQwNy44OTEgMjYxLjE2NCA0MDYuNjI1IDI2MC43MzQgNDA1LjA5NCAyNjAuNzM0QzQwMy41MTYgMjYwLjczNCA0MDIuMjgxIDI2MS4wNzggNDAxLjM5MSAyNjEuNzY2QzQwMC41IDI2Mi40NTMgNDAwLjA1NSAyNjMuMzUyIDQwMC4wNTUgMjY0LjQ2MUM0MDAuMDU1IDI2NS41MDggNDAwLjQ2OSAyNjYuMjk3IDQwMS4yOTcgMjY2LjgyOEM0MDIuMTI1IDI2Ny4zNTkgNDAzLjYxNyAyNjcuODY3IDQwNS43NzMgMjY4LjM1MkM0MDcuOTQ1IDI2OC44MzYgNDA5LjcwMyAyNjkuNDE0IDQxMS4wNDcgMjcwLjA4NkM0MTIuMzkxIDI3MC43NTggNDEzLjM4MyAyNzEuNTcgNDE0LjAyMyAyNzIuNTIzQzQxNC42OCAyNzMuNDYxIDQxNS4wMDggMjc0LjYwOSA0MTUuMDA4IDI3NS45NjlDNDE1LjAwOCAyNzguMjM0IDQxNC4xMDIgMjgwLjA1NSA0MTIuMjg5IDI4MS40M0M0MTAuNDc3IDI4Mi43ODkgNDA4LjEyNSAyODMuNDY5IDQwNS4yMzQgMjgzLjQ2OUM0MDMuMjAzIDI4My40NjkgNDAxLjQwNiAyODMuMTA5IDM5OS44NDQgMjgyLjM5MUMzOTguMjgxIDI4MS42NzIgMzk3LjA1NSAyODAuNjcyIDM5Ni4xNjQgMjc5LjM5MUMzOTUuMjg5IDI3OC4wOTQgMzk0Ljg1MiAyNzYuNjk1IDM5NC44NTIgMjc1LjE5NUgzOTkuMTg4QzM5OS4yNjYgMjc2LjY0OCAzOTkuODQ0IDI3Ny44MDUgNDAwLjkyMiAyNzguNjY0QzQwMi4wMTYgMjc5LjUwOCA0MDMuNDUzIDI3OS45MyA0MDUuMjM0IDI3OS45M0M0MDYuODc1IDI3OS45MyA0MDguMTg4IDI3OS42MDIgNDA5LjE3MiAyNzguOTQ1QzQxMC4xNzIgMjc4LjI3MyA0MTAuNjcyIDI3Ny4zODMgNDEwLjY3MiAyNzYuMjczWk00MzYuNjY0IDI1Ny42NDFMNDM2LjgwNSAyNjAuODI4QzQzOC43NDIgMjU4LjM5MSA0NDEuMjczIDI1Ny4xNzIgNDQ0LjM5OCAyNTcuMTcyQzQ0OS43NTggMjU3LjE3MiA0NTIuNDYxIDI2MC4xOTUgNDUyLjUwOCAyNjYuMjQyVjI4M0g0NDguMTcyVjI2Ni4yMTlDNDQ4LjE1NiAyNjQuMzkxIDQ0Ny43MzQgMjYzLjAzOSA0NDYuOTA2IDI2Mi4xNjRDNDQ2LjA5NCAyNjEuMjg5IDQ0NC44MiAyNjAuODUyIDQ0My4wODYgMjYwLjg1MkM0NDEuNjggMjYwLjg1MiA0NDAuNDQ1IDI2MS4yMjcgNDM5LjM4MyAyNjEuOTc3QzQzOC4zMiAyNjIuNzI3IDQzNy40OTIgMjYzLjcxMSA0MzYuODk4IDI2NC45M1YyODNINDMyLjU2MlYyNTcuNjQxSDQzNi42NjRaTTQ1Ny44OTggMjcwLjA4NkM0NTcuODk4IDI2Ny42MDIgNDU4LjM4MyAyNjUuMzY3IDQ1OS4zNTIgMjYzLjM4M0M0NjAuMzM2IDI2MS4zOTggNDYxLjY5NSAyNTkuODY3IDQ2My40MyAyNTguNzg5QzQ2NS4xOCAyNTcuNzExIDQ2Ny4xNzIgMjU3LjE3MiA0NjkuNDA2IDI1Ny4xNzJDNDcyLjg1OSAyNTcuMTcyIDQ3NS42NDggMjU4LjM2NyA0NzcuNzczIDI2MC43NThDNDc5LjkxNCAyNjMuMTQ4IDQ4MC45ODQgMjY2LjMyOCA0ODAuOTg0IDI3MC4yOTdWMjcwLjYwMkM0ODAuOTg0IDI3My4wNyA0ODAuNTA4IDI3NS4yODkgNDc5LjU1NSAyNzcuMjU4QzQ3OC42MTcgMjc5LjIxMSA0NzcuMjY2IDI4MC43MzQgNDc1LjUgMjgxLjgyOEM0NzMuNzUgMjgyLjkyMiA0NzEuNzM0IDI4My40NjkgNDY5LjQ1MyAyODMuNDY5QzQ2Ni4wMTYgMjgzLjQ2OSA0NjMuMjI3IDI4Mi4yNzMgNDYxLjA4NiAyNzkuODgzQzQ1OC45NjEgMjc3LjQ5MiA0NTcuODk4IDI3NC4zMjggNDU3Ljg5OCAyNzAuMzkxVjI3MC4wODZaTTQ2Mi4yNTggMjcwLjYwMkM0NjIuMjU4IDI3My40MTQgNDYyLjkwNiAyNzUuNjcyIDQ2NC4yMDMgMjc3LjM3NUM0NjUuNTE2IDI3OS4wNzggNDY3LjI2NiAyNzkuOTMgNDY5LjQ1MyAyNzkuOTNDNDcxLjY1NiAyNzkuOTMgNDczLjQwNiAyNzkuMDcgNDc0LjcwMyAyNzcuMzUyQzQ3NiAyNzUuNjE3IDQ3Ni42NDggMjczLjE5NSA0NzYuNjQ4IDI3MC4wODZDNDc2LjY0OCAyNjcuMzA1IDQ3NS45ODQgMjY1LjA1NSA0NzQuNjU2IDI2My4zMzZDNDczLjM0NCAyNjEuNjAyIDQ3MS41OTQgMjYwLjczNCA0NjkuNDA2IDI2MC43MzRDNDY3LjI2NiAyNjAuNzM0IDQ2NS41MzkgMjYxLjU4NiA0NjQuMjI3IDI2My4yODlDNDYyLjkxNCAyNjQuOTkyIDQ2Mi4yNTggMjY3LjQzIDQ2Mi4yNTggMjcwLjYwMlpNNDkyLjMwNSAyNTEuNVYyNTcuNjQxSDQ5Ny4wMzlWMjYwLjk5Mkg0OTIuMzA1VjI3Ni43MTlDNDkyLjMwNSAyNzcuNzM0IDQ5Mi41MTYgMjc4LjUgNDkyLjkzOCAyNzkuMDE2QzQ5My4zNTkgMjc5LjUxNiA0OTQuMDc4IDI3OS43NjYgNDk1LjA5NCAyNzkuNzY2QzQ5NS41OTQgMjc5Ljc2NiA0OTYuMjgxIDI3OS42NzIgNDk3LjE1NiAyNzkuNDg0VjI4M0M0OTYuMDE2IDI4My4zMTMgNDk0LjkwNiAyODMuNDY5IDQ5My44MjggMjgzLjQ2OUM0OTEuODkxIDI4My40NjkgNDkwLjQzIDI4Mi44ODMgNDg5LjQ0NSAyODEuNzExQzQ4OC40NjEgMjgwLjUzOSA0ODcuOTY5IDI3OC44NzUgNDg3Ljk2OSAyNzYuNzE5VjI2MC45OTJINDgzLjM1MlYyNTcuNjQxSDQ4Ny45NjlWMjUxLjVINDkyLjMwNVpNNTM1LjQ1MyAyNzAuNjAyQzUzNS40NTMgMjc0LjQ2MSA1MzQuNTcgMjc3LjU3IDUzMi44MDUgMjc5LjkzQzUzMS4wMzkgMjgyLjI4OSA1MjguNjQ4IDI4My40NjkgNTI1LjYzMyAyODMuNDY5QzUyMi41NTUgMjgzLjQ2OSA1MjAuMTMzIDI4Mi40OTIgNTE4LjM2NyAyODAuNTM5VjI5Mi43NUg1MTQuMDMxVjI1Ny42NDFINTE3Ljk5Mkw1MTguMjAzIDI2MC40NTNDNTE5Ljk2OSAyNTguMjY2IDUyMi40MjIgMjU3LjE3MiA1MjUuNTYyIDI1Ny4xNzJDNTI4LjYwOSAyNTcuMTcyIDUzMS4wMTYgMjU4LjMyIDUzMi43ODEgMjYwLjYxN0M1MzQuNTYyIDI2Mi45MTQgNTM1LjQ1MyAyNjYuMTA5IDUzNS40NTMgMjcwLjIwM1YyNzAuNjAyWk01MzEuMTE3IDI3MC4xMDlDNTMxLjExNyAyNjcuMjUgNTMwLjUwOCAyNjQuOTkyIDUyOS4yODkgMjYzLjMzNkM1MjguMDcgMjYxLjY4IDUyNi4zOTggMjYwLjg1MiA1MjQuMjczIDI2MC44NTJDNTIxLjY0OCAyNjAuODUyIDUxOS42OCAyNjIuMDE2IDUxOC4zNjcgMjY0LjM0NFYyNzYuNDYxQzUxOS42NjQgMjc4Ljc3MyA1MjEuNjQ4IDI3OS45MyA1MjQuMzIgMjc5LjkzQzUyNi4zOTggMjc5LjkzIDUyOC4wNDcgMjc5LjEwOSA1MjkuMjY2IDI3Ny40NjlDNTMwLjUgMjc1LjgxMyA1MzEuMTE3IDI3My4zNTkgNTMxLjExNyAyNzAuMTA5Wk01NTYuNjQxIDI4MC40OTJDNTU0Ljk1MyAyODIuNDc3IDU1Mi40NzcgMjgzLjQ2OSA1NDkuMjExIDI4My40NjlDNTQ2LjUwOCAyODMuNDY5IDU0NC40NDUgMjgyLjY4OCA1NDMuMDIzIDI4MS4xMjVDNTQxLjYxNyAyNzkuNTQ3IDU0MC45MDYgMjc3LjIxOSA1NDAuODkxIDI3NC4xNDFWMjU3LjY0MUg1NDUuMjI3VjI3NC4wMjNDNTQ1LjIyNyAyNzcuODY3IDU0Ni43ODkgMjc5Ljc4OSA1NDkuOTE0IDI3OS43ODlDNTUzLjIyNyAyNzkuNzg5IDU1NS40MyAyNzguNTU1IDU1Ni41MjMgMjc2LjA4NlYyNTcuNjQxSDU2MC44NTlWMjgzSDU1Ni43MzRMNTU2LjY0MSAyODAuNDkyWk01ODguOTM4IDI3MC42MDJDNTg4LjkzOCAyNzQuNDc3IDU4OC4wNDcgMjc3LjU5NCA1ODYuMjY2IDI3OS45NTNDNTg0LjQ4NCAyODIuMjk3IDU4Mi4wOTQgMjgzLjQ2OSA1NzkuMDk0IDI4My40NjlDNTc1Ljg5MSAyODMuNDY5IDU3My40MTQgMjgyLjMzNiA1NzEuNjY0IDI4MC4wN0w1NzEuNDUzIDI4M0g1NjcuNDY5VjI0N0g1NzEuODA1VjI2MC40M0M1NzMuNTU1IDI1OC4yNTggNTc1Ljk2OSAyNTcuMTcyIDU3OS4wNDcgMjU3LjE3MkM1ODIuMTI1IDI1Ny4xNzIgNTg0LjUzOSAyNTguMzM2IDU4Ni4yODkgMjYwLjY2NEM1ODguMDU1IDI2Mi45OTIgNTg4LjkzOCAyNjYuMTggNTg4LjkzOCAyNzAuMjI3VjI3MC42MDJaTTU4NC42MDIgMjcwLjEwOUM1ODQuNjAyIDI2Ny4xNTYgNTg0LjAzMSAyNjQuODc1IDU4Mi44OTEgMjYzLjI2NkM1ODEuNzUgMjYxLjY1NiA1ODAuMTA5IDI2MC44NTIgNTc3Ljk2OSAyNjAuODUyQzU3NS4xMDkgMjYwLjg1MiA1NzMuMDU1IDI2Mi4xOCA1NzEuODA1IDI2NC44MzZWMjc1LjgwNUM1NzMuMTMzIDI3OC40NjEgNTc1LjIwMyAyNzkuNzg5IDU3OC4wMTYgMjc5Ljc4OUM1ODAuMDk0IDI3OS43ODkgNTgxLjcxMSAyNzguOTg0IDU4Mi44NjcgMjc3LjM3NUM1ODQuMDIzIDI3NS43NjYgNTg0LjYwMiAyNzMuMzQ0IDU4NC42MDIgMjcwLjEwOVpNNTk5LjEzMyAyODNINTk0Ljc5N1YyNDdINTk5LjEzM1YyODNaTTYxMC44MDUgMjgzSDYwNi40NjlWMjU3LjY0MUg2MTAuODA1VjI4M1pNNjA2LjExNyAyNTAuOTE0QzYwNi4xMTcgMjUwLjIxMSA2MDYuMzI4IDI0OS42MTcgNjA2Ljc1IDI0OS4xMzNDNjA3LjE4OCAyNDguNjQ4IDYwNy44MjggMjQ4LjQwNiA2MDguNjcyIDI0OC40MDZDNjA5LjUxNiAyNDguNDA2IDYxMC4xNTYgMjQ4LjY0OCA2MTAuNTk0IDI0OS4xMzNDNjExLjAzMSAyNDkuNjE3IDYxMS4yNSAyNTAuMjExIDYxMS4yNSAyNTAuOTE0QzYxMS4yNSAyNTEuNjE3IDYxMS4wMzEgMjUyLjIwMyA2MTAuNTk0IDI1Mi42NzJDNjEwLjE1NiAyNTMuMTQxIDYwOS41MTYgMjUzLjM3NSA2MDguNjcyIDI1My4zNzVDNjA3LjgyOCAyNTMuMzc1IDYwNy4xODggMjUzLjE0MSA2MDYuNzUgMjUyLjY3MkM2MDYuMzI4IDI1Mi4yMDMgNjA2LjExNyAyNTEuNjE3IDYwNi4xMTcgMjUwLjkxNFpNNjMyLjUzMSAyNzYuMjczQzYzMi41MzEgMjc1LjEwMiA2MzIuMDg2IDI3NC4xOTUgNjMxLjE5NSAyNzMuNTU1QzYzMC4zMiAyNzIuODk4IDYyOC43ODEgMjcyLjMzNiA2MjYuNTc4IDI3MS44NjdDNjI0LjM5MSAyNzEuMzk4IDYyMi42NDggMjcwLjgzNiA2MjEuMzUyIDI3MC4xOEM2MjAuMDcgMjY5LjUyMyA2MTkuMTE3IDI2OC43NDIgNjE4LjQ5MiAyNjcuODM2QzYxNy44ODMgMjY2LjkzIDYxNy41NzggMjY1Ljg1MiA2MTcuNTc4IDI2NC42MDJDNjE3LjU3OCAyNjIuNTIzIDYxOC40NTMgMjYwLjc2NiA2MjAuMjAzIDI1OS4zMjhDNjIxLjk2OSAyNTcuODkxIDYyNC4yMTkgMjU3LjE3MiA2MjYuOTUzIDI1Ny4xNzJDNjI5LjgyOCAyNTcuMTcyIDYzMi4xNTYgMjU3LjkxNCA2MzMuOTM4IDI1OS4zOThDNjM1LjczNCAyNjAuODgzIDYzNi42MzMgMjYyLjc4MSA2MzYuNjMzIDI2NS4wOTRINjMyLjI3M0M2MzIuMjczIDI2My45MDYgNjMxLjc2NiAyNjIuODgzIDYzMC43NSAyNjIuMDIzQzYyOS43NSAyNjEuMTY0IDYyOC40ODQgMjYwLjczNCA2MjYuOTUzIDI2MC43MzRDNjI1LjM3NSAyNjAuNzM0IDYyNC4xNDEgMjYxLjA3OCA2MjMuMjUgMjYxLjc2NkM2MjIuMzU5IDI2Mi40NTMgNjIxLjkxNCAyNjMuMzUyIDYyMS45MTQgMjY0LjQ2MUM2MjEuOTE0IDI2NS41MDggNjIyLjMyOCAyNjYuMjk3IDYyMy4xNTYgMjY2LjgyOEM2MjMuOTg0IDI2Ny4zNTkgNjI1LjQ3NyAyNjcuODY3IDYyNy42MzMgMjY4LjM1MkM2MjkuODA1IDI2OC44MzYgNjMxLjU2MiAyNjkuNDE0IDYzMi45MDYgMjcwLjA4NkM2MzQuMjUgMjcwLjc1OCA2MzUuMjQyIDI3MS41NyA2MzUuODgzIDI3Mi41MjNDNjM2LjUzOSAyNzMuNDYxIDYzNi44NjcgMjc0LjYwOSA2MzYuODY3IDI3NS45NjlDNjM2Ljg2NyAyNzguMjM0IDYzNS45NjEgMjgwLjA1NSA2MzQuMTQ4IDI4MS40M0M2MzIuMzM2IDI4Mi43ODkgNjI5Ljk4NCAyODMuNDY5IDYyNy4wOTQgMjgzLjQ2OUM2MjUuMDYyIDI4My40NjkgNjIzLjI2NiAyODMuMTA5IDYyMS43MDMgMjgyLjM5MUM2MjAuMTQxIDI4MS42NzIgNjE4LjkxNCAyODAuNjcyIDYxOC4wMjMgMjc5LjM5MUM2MTcuMTQ4IDI3OC4wOTQgNjE2LjcxMSAyNzYuNjk1IDYxNi43MTEgMjc1LjE5NUg2MjEuMDQ3QzYyMS4xMjUgMjc2LjY0OCA2MjEuNzAzIDI3Ny44MDUgNjIyLjc4MSAyNzguNjY0QzYyMy44NzUgMjc5LjUwOCA2MjUuMzEyIDI3OS45MyA2MjcuMDk0IDI3OS45M0M2MjguNzM0IDI3OS45MyA2MzAuMDQ3IDI3OS42MDIgNjMxLjAzMSAyNzguOTQ1QzYzMi4wMzEgMjc4LjI3MyA2MzIuNTMxIDI3Ny4zODMgNjMyLjUzMSAyNzYuMjczWk02NDYuODUyIDI2MC43MTFDNjQ4Ljc3MyAyNTguMzUyIDY1MS4yNzMgMjU3LjE3MiA2NTQuMzUyIDI1Ny4xNzJDNjU5LjcxMSAyNTcuMTcyIDY2Mi40MTQgMjYwLjE5NSA2NjIuNDYxIDI2Ni4yNDJWMjgzSDY1OC4xMjVWMjY2LjIxOUM2NTguMTA5IDI2NC4zOTEgNjU3LjY4OCAyNjMuMDM5IDY1Ni44NTkgMjYyLjE2NEM2NTYuMDQ3IDI2MS4yODkgNjU0Ljc3MyAyNjAuODUyIDY1My4wMzkgMjYwLjg1MkM2NTEuNjMzIDI2MC44NTIgNjUwLjM5OCAyNjEuMjI3IDY0OS4zMzYgMjYxLjk3N0M2NDguMjczIDI2Mi43MjcgNjQ3LjQ0NSAyNjMuNzExIDY0Ni44NTIgMjY0LjkzVjI4M0g2NDIuNTE2VjI0N0g2NDYuODUyVjI2MC43MTFaTTY3OS40NzcgMjgzLjQ2OUM2NzYuMDM5IDI4My40NjkgNjczLjI0MiAyODIuMzQ0IDY3MS4wODYgMjgwLjA5NEM2NjguOTMgMjc3LjgyOCA2NjcuODUyIDI3NC44MDUgNjY3Ljg1MiAyNzEuMDIzVjI3MC4yMjdDNjY3Ljg1MiAyNjcuNzExIDY2OC4zMjggMjY1LjQ2OSA2NjkuMjgxIDI2My41QzY3MC4yNSAyNjEuNTE2IDY3MS41OTQgMjU5Ljk2OSA2NzMuMzEyIDI1OC44NTlDNjc1LjA0NyAyNTcuNzM0IDY3Ni45MjIgMjU3LjE3MiA2NzguOTM4IDI1Ny4xNzJDNjgyLjIzNCAyNTcuMTcyIDY4NC43OTcgMjU4LjI1OCA2ODYuNjI1IDI2MC40M0M2ODguNDUzIDI2Mi42MDIgNjg5LjM2NyAyNjUuNzExIDY4OS4zNjcgMjY5Ljc1OFYyNzEuNTYzSDY3Mi4xODhDNjcyLjI1IDI3NC4wNjMgNjcyLjk3NyAyNzYuMDg2IDY3NC4zNjcgMjc3LjYzM0M2NzUuNzczIDI3OS4xNjQgNjc3LjU1NSAyNzkuOTMgNjc5LjcxMSAyNzkuOTNDNjgxLjI0MiAyNzkuOTMgNjgyLjUzOSAyNzkuNjE3IDY4My42MDIgMjc4Ljk5MkM2ODQuNjY0IDI3OC4zNjcgNjg1LjU5NCAyNzcuNTM5IDY4Ni4zOTEgMjc2LjUwOEw2ODkuMDM5IDI3OC41N0M2ODYuOTE0IDI4MS44MzYgNjgzLjcyNyAyODMuNDY5IDY3OS40NzcgMjgzLjQ2OVpNNjc4LjkzOCAyNjAuNzM0QzY3Ny4xODggMjYwLjczNCA2NzUuNzE5IDI2MS4zNzUgNjc0LjUzMSAyNjIuNjU2QzY3My4zNDQgMjYzLjkyMiA2NzIuNjA5IDI2NS43MDMgNjcyLjMyOCAyNjhINjg1LjAzMVYyNjcuNjcyQzY4NC45MDYgMjY1LjQ2OSA2ODQuMzEyIDI2My43NjYgNjgzLjI1IDI2Mi41NjNDNjgyLjE4OCAyNjEuMzQ0IDY4MC43NSAyNjAuNzM0IDY3OC45MzggMjYwLjczNFpNNjkzLjM1MiAyNzAuMTA5QzY5My4zNTIgMjY2LjIxOSA2OTQuMjczIDI2My4wOTQgNjk2LjExNyAyNjAuNzM0QzY5Ny45NjEgMjU4LjM1OSA3MDAuMzc1IDI1Ny4xNzIgNzAzLjM1OSAyNTcuMTcyQzcwNi4zMjggMjU3LjE3MiA3MDguNjggMjU4LjE4OCA3MTAuNDE0IDI2MC4yMTlWMjQ3SDcxNC43NVYyODNINzEwLjc2Nkw3MTAuNTU1IDI4MC4yODFDNzA4LjgyIDI4Mi40MDYgNzA2LjQwNiAyODMuNDY5IDcwMy4zMTIgMjgzLjQ2OUM3MDAuMzc1IDI4My40NjkgNjk3Ljk3NyAyODIuMjY2IDY5Ni4xMTcgMjc5Ljg1OUM2OTQuMjczIDI3Ny40NTMgNjkzLjM1MiAyNzQuMzEzIDY5My4zNTIgMjcwLjQzOFYyNzAuMTA5Wk02OTcuNjg4IDI3MC42MDJDNjk3LjY4OCAyNzMuNDc3IDY5OC4yODEgMjc1LjcyNyA2OTkuNDY5IDI3Ny4zNTJDNzAwLjY1NiAyNzguOTc3IDcwMi4yOTcgMjc5Ljc4OSA3MDQuMzkxIDI3OS43ODlDNzA3LjE0MSAyNzkuNzg5IDcwOS4xNDggMjc4LjU1NSA3MTAuNDE0IDI3Ni4wODZWMjY0LjQzOEM3MDkuMTE3IDI2Mi4wNDcgNzA3LjEyNSAyNjAuODUyIDcwNC40MzggMjYwLjg1MkM3MDIuMzEyIDI2MC44NTIgNzAwLjY1NiAyNjEuNjcyIDY5OS40NjkgMjYzLjMxM0M2OTguMjgxIDI2NC45NTMgNjk3LjY4OCAyNjcuMzgzIDY5Ny42ODggMjcwLjYwMloiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo=" />
</div>`
```

### Register "gallery-teaser" Include

```js
// runtime-config.js
const liServer = Server(require('../conf'))
liServer.features.register('include-services', async function (feature, server) {
  const includesApi = server.features.api('li-includes')
  const publicationApi = server.features.api('li-documents').publication

  await includesApi.registerServices([
    require('./plugins/includes/gallery-teaser')({publicationApi})
  ])
})
```

### Add "gallery-teaser" component

```js
// your-project/components/gallery-teaser.js
'use strict'
/* eslint-disable */

module.exports = {
  name: 'gallery-teaser',
  label: 'Image Gallery Teaser',
  iconUrl: 'https://livingdocsio.github.io/livingdocs-design-assets/docs/icons/component-icons/icon_component_slideshow.svg',
  directives: [{
    name: 'gallery',
    type: 'include',
    service: 'gallery-teaser',
    paramsSchemaExtension: [
      {
        name: 'teaser',
        config: {
          contentType: ['gallery'],
          published: true
        }
      }
    ]
  }],
  // placeholder as svg base64 encoded
  // https://github.com/livingdocsIO/livingdocs-design-assets/blob/master/docs/placeholders/placeholder-inline-gallery.svg
  html: `
    <div doc-include="gallery" class="placeholder--teaser-gallery">
      <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOTM5cHgiIGhlaWdodD0iNTg2cHgiIHZpZXdCb3g9IjAgMCA5MzkgNTg2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MiAoMzY3ODEpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkdyb3VwIDM8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iQmx1ZXdpbi1QbGFjZWhvbGRlcnMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJHcm91cC0zIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9ImltYWdlIj4KICAgICAgICAgICAgICAgIDxyZWN0IGZpbGw9IiNlYWVhZWEiIHg9IjAiIHk9IjEiIHdpZHRoPSI5MzYuMTMxNzY0IiBoZWlnaHQ9IjUxOS45MjYzNzgiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxnIGlkPSJjcm9zcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMi40OTcyODAsIDAuMDAwMDAwKSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjQxODM4MTQ2LDAuNDMzMjcxOTgyIEw5MzQuNzEzMzgyLDUxOS40OTMxMDYiIGlkPSJMaW5lIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTkzNC43MTMzODIsMC40MzMyNzE5ODIgTDEuNDE4MzgxNDYsNTE5LjQ5MzEwNiIgaWQ9IkxpbmUiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cmVjdCBpZD0iVGV4dCIgZmlsbD0iI2I4YjhiOCIgeD0iMCIgeT0iNTI5IiB3aWR0aD0iNjA0IiBoZWlnaHQ9IjI0Ij48L3JlY3Q+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTguMDAwMDAwLCAyMzYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cmVjdCBpZD0iVGV4dCIgZmlsbD0iI2I4YjhiOCIgeD0iMCIgeT0iMCIgd2lkdGg9IjUwIiBoZWlnaHQ9IjUwIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTgsMTIgQzE4LDEyIDM0LjAxMzA3OTcsMjguMDEzMDc5NyAyOS4wNDM1MDMyLDIzLjA0MzUwMzIiIGlkPSJMaW5lIiBzdHJva2Utb3BhY2l0eT0iMC45ODc0MzIwNjUiIHN0cm9rZT0iI0Y2RjZGNiIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNC4wMDAwMDAsIDE4LjAwMDAwMCkgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtMjQuMDAwMDAwLCAtMTguMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNy4yNjI4NjQ4LDI0IEMxNy4yNjI4NjQ4LDI0IDMzLjI3NTk0NDQsNDAuMDEzMDc5NyAyOC4zMDYzNjgsMzUuMDQzNTAzMiIgaWQ9IkxpbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjk4NzQzMjA2NSIgc3Ryb2tlPSIjRjZGNkY2IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzLjI2Mjg2NSwgMzAuMDAwMDAwKSBzY2FsZSgtMSwgLTEpIHRyYW5zbGF0ZSgtMjMuMjYyODY1LCAtMzAuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8cG9seWdvbiBpZD0iVGV4dCIgZmlsbD0iI2I4YjhiOCIgcG9pbnRzPSIwIDU2MSAxNDcgNTYxIDE0NyA1ODUgMCA1ODUiPjwvcG9seWdvbj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg2OC4wMDAwMDAsIDIzNi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJUZXh0IiBmaWxsPSIjYjhiOGI4IiB4PSIwIiB5PSIwIiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiPjwvcmVjdD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMC41LDEzLjUgQzIwLjUsMTMuNSAzNi41MTMwNzk3LDI5LjUxMzA3OTcgMzEuNTQzNTAzMiwyNC41NDM1MDMyIiBpZD0iTGluZSIgc3Ryb2tlLW9wYWNpdHk9IjAuOTg3NDMyMDY1IiBzdHJva2U9IiNGNkY2RjYiIHN0cm9rZS13aWR0aD0iMyIgc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTE5Ljc2Mjg2NDgsMjQuNSBDMTkuNzYyODY0OCwyNC41IDM1Ljc3NTk0NDQsNDAuNTEzMDc5NyAzMC44MDYzNjgsMzUuNTQzNTAzMiIgaWQ9IkxpbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjk4NzQzMjA2NSIgc3Ryb2tlPSIjRjZGNkY2IiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI1Ljc2Mjg2NSwgMzAuNTAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0yNS43NjI4NjUsIC0zMC41MDAwMDApICI+PC9wYXRoPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" />
    </div>
  `
}
```

```js
// your-project/components/gallery-teaser-resolved.js
/* eslint-disable */
const dedent = require('dedent')

module.exports = {
  name: 'gallery-teaser-resolved',
  html: dedent`
  <div class="teaser-gallery">
    <div class="teaser-hero teaser-hero--gallery">
      <div class="teaser-hero__header" doc-image="image">
        <div class="teaser-hero__header-text">
          <h2 class="teaser-hero__title" doc-editable="title"></h2>
          <span class="teaser-hero__label">
            <svg class="teaser-hero__icon teaser-hero__icon--photo" viewBox="0 0 24 24">
              <path fill="#000000" d="M4,4H7L9,2H15L17,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20H4A2,2 0 0,1 2,18V6A2,2 0 0,1 4,4M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9Z" />
            </svg>
            Image Gallery
          </span>
        </div>
      </div>
      <p class="teaser-hero__text" doc-editable="text"></p>
    </div>
  </div>`,
  label: 'Image Gallery Hero Template',
  directives: [{
    name: 'image',
    type: 'image',
    imageRatios: ['16:9'],
    allowOriginalRatio: false
  }]
}
```

### Integrate "gallery-teaser" to your project

```js
// your-project/index.js
{
  designSettings: {
    componentGroups: [{
      name: 'includes',
      label: 'Includes',
      components: [
        // ...
        'gallery-teaser'
      ]
    }]
  },
  components: [
    // ...
    require('./components/gallery-teaser'),
    require('./components/gallery-teaser-resolved')
  ]
}

// your-project/content-types/article.js
module.exports = {
  // ...
  components: [
    // ...
    {name: 'gallery-teaser'}
  ],
```
