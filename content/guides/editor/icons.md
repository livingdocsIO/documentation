---
title: Icons
description: All you need to know how one can use icons in Livingdocs
weight: 14
---

## Overview

Icons are widely used and supported in the editor.

- [Content Type Icon]({{< ref "../../../../reference-docs/project-config/content-types.md#example" >}})
- [Deliveries Icon]({{< ref "../../../../reference-docs/project-config/deliveries.md" >}})
- [Design Component Icon]({{< ref "../../reference-docs/document/document-design#component-properties" >}})
- [Main Navigation Icon]({{< ref "../../../../reference-docs/editor-extensions/editor-configuration/menu-and-dashboards.md#menu-items" >}})
- [User Menu Icon]({{< ref "../../../../reference-docs/editor-extensions/editor-configuration/menu-and-dashboards.md" >}})
- [Text Formatting Toolbar Icon]({{< ref "../../../reference-docs/editor-extensions/editor-configuration/text-editing.md#custom-elements" >}})
- [Icons in UI extensions](#icons-in-ui-extensions)

In every case mentioned before, you can set an icon of the supported [li-icon collection](https://github.com/livingdocsIO/livingdocs-editor/blob/master/server/li_icon.paths.txt). If your icon is not supported, you can [register a custom icon](#register-a-custom-icon).


## Icon and Placeholder Collections

Livingdocs provides some icon collections, which you can use in your downstream.

- [material design icon collection](http://livingdocsio.github.io/material-design-icons-svg) (get the SVG here: `https://livingdocsio.github.io/material-design-icons-svg/svg/<icon-name>.svg`
- [design component icon collection](https://github.com/livingdocsIO/livingdocs-design-assets/tree/gh-pages/docs/icons/component-icons) (get the SVG here: `https://livingdocsio.github.io/livingdocs-design-assets/docs/icons/component-icons/<icon-name>.svg`)
- [li-icon collection](https://github.com/livingdocsIO/livingdocs-editor/blob/master/server/li_icon.paths.txt)
  - this is a subset of the material design icons embedded into the core via identifier
  - the SVG path of the li icons list can be loaded via `window.materialDesignIconsSvgPaths` in the browser console of the editor

## Register a Custom Icon

The editor supports some material design icons by default ([list of supported icons](https://github.com/livingdocsIO/livingdocs-editor/blob/master/server/li_icon.paths.txt)). If you want to use another icon from the [material design icon collection](http://livingdocsio.github.io/material-design-icons-svg), you can add the icons to the editor config.

```js
// all.js
{
  customIconNames: ['abugida-devanagari'],
}
```

## Icons in UI Extensions

If you develop an UI extensions like an include, a metadata component or a component sidebar, you can embed icons from the [li-icon collection](https://github.com/livingdocsIO/livingdocs-editor/blob/master/server/li_icon.paths.txt) like this:

```html
<li-icon name="arrow-right" class="li-icon li-icon--small"></li-icon>
```

Another option is to embed your SVG directly in the html:

```html
<div class="li-icon li-icon--default">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6e6e6e">
		<path d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
	</svg>
</div>
```
