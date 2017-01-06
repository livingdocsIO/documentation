## Usage

The styleguide is included with the upstream editor. Run it and go to: http://localhost:9000/styleguide.html


## Maintenance

In styleguide/templates/main.html you can add those two directives:

Styleguide include

``` HTML
<sg-include data-template="topbar.html"></sg-include>
```

Styleguide iframe

``` HTML
<sg-iframe
data-src="topbar.html"
data-height="auto"
data-editor-style="false">
</sg-iframe>
```

`sg-Iframe` is styled by the `iframe-styles.scss` by default. It can also uses the `editor-styles.scss` file alongside `iframe-styles.scss`, 
if `data-editor-style` is set to `true`

Both are using a `topbar.html` file which should be located in the `styleguide/templates` directory.
