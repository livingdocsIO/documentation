# Add a new component to a design

This guide uses the [Livingdocs boilerplate design](https://github.com/upfrontIO/livingdocs-design-boilerplate) 
and produces a symbolical change to it in order to show how to update a design locally. 
For your work, you will most likely use your own design.

## Clone the design

```bash
git clone git@github.com:upfrontIO/livingdocs-design-boilerplate.git
cd livingdocs-design-boilerplate
export DESIGN_PATH=`pwd`
npm install
```

## Adding a new component to the design

In the design repository, create a new file named `h3.html` in `src/components`:
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
"groups": [
  {
    "label": "Headers",
    "components": ["header", "hero", "h1", "h2", "h3"]
  },
]
```

## Building the design

```bash
grunt build
```
