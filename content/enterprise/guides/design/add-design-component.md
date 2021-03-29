---
title: Add a component to a design
menus:
  guides:
    parent: Design
---

This guide uses the [Livingdocs timeline design](https://github.com/livingdocsIO/livingdocs-design-timeline) and produces a symbolical change to it in order to show how to update a design locally.

If you already have a custom design, you can just use that.

## Clone the design

```bash
git clone git@github.com:livingdocsIO/livingdocs-design-timeline.git
cd livingdocs-design-timeline
npm install
```

## Adding a new component to the design

In the design repository, create a new file named `h3.html` in `src/components/Headers`:
```html
<script type="ld-conf">
  {
    "label": "Title H3"
  }
</script>

<h3 class="title" doc-editable="title">
  Title
</h3>
```

In `src/config.json` add a new `"h3"` element to the `components` array:
```json
{
  "groups": [
    {
      "label": "Headers",
      "components": ["head", "hero", "title", "h3"]
    },
  ]
}
```

Now you can start the development server or run a build to see your changes.
