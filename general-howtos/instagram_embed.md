# Add an Instagram Embed

This guide will show you how to add a custom [client-side embed](../reference-documentation/editor/editing-features.md#embeds) with the example of an Instagram card. The example is present in the [Livingdocs editor boilerplate](https://github.com/livingdocsIO/livingdocs-editor-boilerplate) so you can check out the code there.

![Instagram embed](../.gitbook/assets/instagram.png)

_The screenshot above shows an instagram card in an article_

## Adding an embed class

The main goals of a custom embed are:

* defining a regexp \(pattern\) for a valid embed code so users can not just paste everything
* defining the desired behavior that the embed has when certain events happen \(e.g. move\)
* defining resources \(css and js\) for an embed

To register a custom embed you need to provide a class definition for this embed. At the very least you need to implement the following methods:

* `get name()`, returns the name of this custom embed
* `scanEmbedCode(code)`, tests if the embed code pasted by the user is valid for this embed, returns true or false
* `setEmbedCode(code)`, sets the embed code to the directive

The following code shows a default implementation:

```text
const InstagramEmbedCode = require('./embed_code')

module.exports = class Instagram {

  constructor ({componentView, directiveName, window, options}) {
    this.componentView = componentView
    this.directiveName = directiveName
    this.window = window

    this.directive = this.componentView.model.directives.get(this.directiveName)

    const htmlContent = this.directive.getData('originalEmbed')
    this.embedCode = new InstagramEmbedCode(htmlContent, options)
    this.component = this.componentView.model
  }

  // CUSTOMIZE: enter the name of your custom embed
  get name () {
    return 'instagram'
  }

  // CUSTOMIZE: provide an svg icon that is shown in the sidebar when your custom
  // embed is selected
  get icon () {
    return require('./icon.svg')
  }

  /* CUSTOMIZE: provide javascript and css dependencies that should be loaded when
    your custom embed is added to the page
    {
      js: [
        { src: 'http://url.to.a/script.js' },
        { code: '<script>some inline code</script>' }
      ],
      css: [
        { src: 'http://url.to.a/stylesheet.css' },
        { code: '<style>some inline css</style>' }
      ]
    }
  */
  get dependencies () {
    const js = [{
      src: '//platform.instagram.com/en_US/embeds.js'
    }]
    return {js}
  }

  // This method tests whether the embed code that the user pasted in the editor
  // matches the regexp behind this custom embed.
  // NOTE: the `this` instance is not created yet when this method is called thus
  // you need to create a temporary embedCode object.
  scanEmbedCode (html) {
    const tempEmbedCode = new InstagramEmbedCode('', {})
    return tempEmbedCode.scan(html)
  }

  setEmbedCode (html) {
    this.embedCode.set(html)
    this.embed()
  }

  // CUSTOMIZE: behavior when the embed code is changed by a user
  onHtmlChange () {
    this.embed()
  }

  // CUSTOMIZE: behavior when some other content in the same component (e.g. a
  // text caption) changes
  onContentChange () {
    this.reload()
  }

  // CUSTOMIZE: behavior when the embed is moved on the page (drag and drop)
  onMove () {
    this.reload()
  }

  // CUSTOMIZE: behavior when the embed is added to the page
  onAdd () {
    this.reload()
  }

  // CUSTOMIZE: behavior when the embed is deleted from the page
  onRemove () {
    return null
  }

  // reloads the instagram script
  reload () {
    const instagram = this.window.instgrm
    if (instagram) instagram.Embeds.process()
  }

  // sets the embed code to the html directive
  embed () {
    this.component.setContent(this.directiveName, this.embedCode.source)
  }
}
```

We left out the specific code for the validation of the embed code \(`InstagramEmbedCode` require at the top\) since it is basically just a regexp matching. You can check the demo implementation in the [Livingdocs editor boilerplate](https://github.com/livingdocsIO/livingdocs-editor-boilerplate) if you want to see an actual implementation of this.

## Registering a custom embed

In order to use the custom embed you need to register it in the `app/editor.js` file.

```text
const embeds = require('@livingdocs/editor/app/scripts/modules/embeds/embeds')
const Instagram = require('../plugins/embeds/instagram/instagram')
embeds.registerCustomEmbeds([Instagram])
```

After the registration, your users can paste embed codes of your custom embed \(Instagram in the example\) in the editor. You can use the embed codes interchangeably in all embeds, i.e. all components that have a [`doc-html` directive](../reference-documentation/livingdocs-design/component_config.md#doc-html). The exception is if your directive is called `free-html` in which case it is handled as a free HTML input and not as an embed. So to apply this to our example: In order to have Instagram cards you can either:

* add a new component to your design that has a `doc-html` directive
* .. or your users just paste the Instagram embed code to an iframe component in which case the Instagram icon appears as soon as the user pasted the Instagram embed code.

