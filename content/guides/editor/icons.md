---
title: Icons
description: All you need to know how one can use icons in Livingdocs
weight: 17
---

## Overview

Icons are widely used and supported in the editor.

- [Content Type Icon]({{< ref "/reference/project-config/content-types.md#example" >}})
- [Deliveries Icon]({{< ref "/reference/project-config/deliveries.md" >}})
- [Design Component Icon]({{< ref "../../reference/document/document-design#component-properties" >}})
- [Main Navigation Icon]({{< ref "/customising/advanced/editor-configuration/menu-and-dashboards.md#menu-items" >}})
- [User Menu Icon]({{< ref "/customising/advanced/editor-configuration/menu-and-dashboards.md" >}})
- [Text Formatting Toolbar Icon]({{< ref "../../../customising/advanced/editor-configuration/text-editing.md#custom-elements" >}})

In every case mentioned before, you can set an icon of the supported [li-icon collection](https://github.com/livingdocsIO/livingdocs-editor/blob/master/server/li_icon.paths.txt). If your icon is not supported, you can [register a material design icon](#register-a-material-design-icon).

## Icon and Placeholder Collections

Livingdocs provides some icon collections, which you can use in your downstream.

- [material design icon collection](http://livingdocsio.github.io/material-design-icons-svg) (get the SVG here: `https://livingdocsio.github.io/material-design-icons-svg/svg/<icon-name>.svg`
- [design component icon collection](https://github.com/livingdocsIO/livingdocs-design-assets/tree/gh-pages/docs/icons/component-icons) (get the SVG here: `https://livingdocsio.github.io/livingdocs-design-assets/docs/icons/component-icons/<icon-name>.svg`)
- [li-icon collection](https://github.com/livingdocsIO/livingdocs-editor/blob/master/server/li_icon.paths.txt)
  - this is a subset of the material design icons embedded into the core via identifier
  - the SVG path of the li icons list can be loaded via `window.materialDesignIconsSvgPaths` in the browser console of the editor

## Register a Material Design Icon

The editor supports some material design icons by default ([list of supported icons](https://github.com/livingdocsIO/livingdocs-editor/blob/master/server/li_icon.paths.txt)). If you want to use another icon from the [material design icon collection](http://livingdocsio.github.io/material-design-icons-svg), you can add the icons to the editor config.

```js
// all.js
{
  customIconNames: ['abugida-devanagari'],
}
```
