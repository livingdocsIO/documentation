## Advanced Example of a list

This is a custom container that can only be placed at the topmost level (not be nested inside other components) and which can only contain `text` and `image` components.

```html
<script type="ld-conf">
{
  "name": "list",
  "label": "List",
  "allowedParents": ["root"]
  "directives": {
    "children": {
      "allowedChildren": ["text", "image"]
    }
  }
}
</script>

<div doc-container="children"></div>
```

- `name` The name of this component as used in code. If not specified this is inferred from the filename.
- `label` The label displayed in user interfaces.
- `directives` Configuration for individual directives. Here the container is configured to only accept certain components.
- `allowedParents` Inside of which components a component can be placed. ('root' stands for the topmost level.)
