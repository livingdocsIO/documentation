## Usage

``` bash
npm start
```

Go to: http://localhost:9000/styleguide.html


## Description

In styleguide/templates/main.html you can those two directives:

- Styleguide include

  ``` HTML
  <sg-include data-template="topbar.html"></sg-include>
  ```
- Styleguide iframe

  ``` HTML
  <sg-iframe
    data-src="topbar.html"
    data-height="auto"
    data-editor-style="false">
  </sg-iframe>
  ```

  `sg-Iframe` is styled by the _iframe-styles.scss_ by default. It can also uses the _editor-styles.scss_ file alongside _iframe-styles.scss_, if `data-editor-style` is set to `true`

Both are using a topbar.html file which should be located in the styleguide/templates directory.