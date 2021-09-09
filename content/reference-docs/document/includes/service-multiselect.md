---
title: Includes with Multiple Services
menus:
  reference-docs:
    parent: Includes
---

So far we have seen configurations where a `doc-include` directive has one include service. It is possible though to configure multiple services behind a directive.

```html
<script type="ld-conf">
{
  "name": "top-news",
  "label": "Top News",
  "directives": {
    "top-news": {
      "services": [
        {
          "service": "list",
          "label": "Manual List",
          "defaultParams": {
            "layout": "topNews"
          },
          "config": {
            "minCount": 5,
            "maxCount": 5
          }
        }, {
          "service": "categoryList",
          "label": "Automatic List",
          "defaultParams": {
            "layout": "topNews"
          },
          "config": {
            "minCount": 5,
            "maxCount": 5
          }
        }, {
          "service": "scheduledList",
          "label": "Scheduled List",
          "defaultParams": {
            "layout": "topNews"
          },
          "config": {
            "minCount": 5,
            "maxCount": 5
          }
        }
      ]
    }
  }
}
</script>

<div doc-include="top-news">
  <div class="embed top-news">
    <div class="placeholder"></div>
  </div>
</div>
```

The example shows one component "Top News". This component has only one directive `top-news`. Instead of a single service the `top-news` directive has an array of services in its configuration. The use case is quite simple: Top News is a geometry on a start page. It can be filled either manually (`list` service), automatically (`categoryList` service) or have a time schedule for the future (`scheduledList` service). Instead of doing 3 components for this, the `services` (array) configuration allows you to re-use the geometry of the "Top News" component and give the user in the editor the ability to switch between the defined services.

{{< img src="images/multiselect.png" alt="Service Multiselect" >}}

The screenshot above shows the multiselect option in the sidebar. The rendering of the selected "Top News" component will always look the same only the underlying `doc-include` service (and thus the editor user interface as well as the server rendering) change.

In order to have the same look across all services, all registered [service renderers]({{< ref "/reference-docs/server-extensions/include-functions" >}}) on the server must render into the same HTML template.
