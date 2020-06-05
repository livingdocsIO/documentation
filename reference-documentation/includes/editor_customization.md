# Include User Interfaces

This section explains how you can write custom Angular components that you can provide for your users inside the Livingdocs editor to configure your doc-includes. If you are looking for the server-side rendering options, [see here](server_customization.md).

## Registering a custom angular component

In order to enable a custom user interface for your doc-includes in the editor, you need to register it. This is commonly done in `app/editor.js` \(the startup file\).

```javascript
liEditor.includes.register('customBrightcoveVideo', {
  template: require('../plugins/doc-includes/brightcove-video/template.html'),
  controller: require('../plugins/doc-includes/brightcove-video/controller'),
  bindings: {
    directive: '=',
    componentView: '=',
    component: '='
  }
})
```

The first parameter to the register method, `customBrightcoveVideo`, denotes the name of the angular component that you will register. It is the same name that you reference in the server \(`sidebarContentComponent` or `modalContentComponent`\) as a ui component. Internally, those names will be prefixed, but you don't need to worry about this.

The second parameter is the definition of the component and matches just the regular definition for Angular components. We have a template \(HTML\), a controller \(JS\) and a set of bindings that defines the API to the angular component.

We have 2 kinds of API: one for sidebar components and one for modal components.

### Sidebar component

```javascript
bindings: {
  directive: '=',
  componentView: '=',
  component: '='
}
```

Your component controller can use three properties of the Livingdocs framework:

* `directive`, the Livingdocs directive that corresponds to the `doc-include` in question. This is really your main object and you get and set parameters of the `doc-include` on this object
* `component`, the component model of the enclosing Livingdocs component
* `componentView`, the component view \(DOM element wrapper\) of the enclosing Livingdocs component

### Modal component

```javascript
bindings: {
  directive: '<',
  dispatch: '&'
}
```

* `directive`, almost the same as in the sidebar component \(see above\), but this time it is only passed in as a one-way binding so if you want to change parameters on the directive you need to use the `dispatch` method below
* `dispatch`, you usually call this method once you want to close your modal, e.g. in the case of an article embed, when the user has selected an article to embed. You can call the method as an update and as a cancel: `this.dispatch({action: 'update', params: {foo: 'bar'}})` will close the modal and update the parameter `foo` on the `doc-include` to the value `'bar'`. `this.dispatch({action: 'close'})` will simply close the modal without updating any parameters of the `doc-include`.

## An example

`controller.js`

```javascript
const _get = require('lodash/get')
const BrightcoveVideo = require('./model')

module.exports = class BrightcoveVideoController {

  static get $inject () { return ['languageService'] }

  constructor (languageService) {
    const language = languageService.get()
    if (this.directive) this.include = new BrightcoveVideo(this.directive, language)
  }

  saveIfValid (form) {
    if (this.hasInclude() && form.$valid) {
      this.include.save()
    }
  }

  hasInclude () {
    return this.include !== undefined
  }
}
```

The controller is just a regular angular component controller \(see the [angular documentation](https://docs.angularjs.org/guide/component) if you don't know this\). You can inject dependencies in the angular way. The example injects `languageService` a custom service that was written in a customizing project \(the implementation is not relevant to the example and left out\). In order to do a custom angular service \(or factory or anything else\), register it to the module `livingdocs-editor`.

`model.js`

```javascript
module.exports = class BrightcoveVideoModel {
  constructor (directive, language) {
    const {id} = directive.getParams() || {}
    this.id = id
    this.directive = directive
    this.language = language
  }

  save () {
    this.directive.addParams({
      id: this.id,
      language: this.language
    })
  }
}
```

The model is optional \(you could also write all code in the controller but we advise the use of models\). There are 2 important things to note in the model:

* `directive.getParams()`, gets the current parameters \(including `defaultParams`\) of the selected `doc-include`
* `directive.addParams({foo: 'bar'})`, saves the given parameters to the existing ones, overwrites keys if duplicate, NOTE: this does not overwrite the whole params object, only when a key collides

`template.html`

```markup
<div class="ld-panel" ng-if="$ctrl.hasInclude()">
  <div class="ld-panel__header">
    <h2 class="ld-panel__header__title">Brightcove Video settings</h2>
  </div>
  <div class="ld-panel__body">
    <div class="ld-brightcove">
      <div class="ld-brightcove__unit">
        <form name="idForm" novalidate>
          <div class="ld-form-group"
            ng-class="{'has-error': idForm.idInput.$invalid && idForm.idInput.$touched}">
            <div class="ld-form-group__label">
              <label class="ld-form-label">Video's id</label>
            </div>
            <div class="ld-form-group__content">
              <input
                name="idInput"
                class="ld-text-input"
                ng-model="$ctrl.include.id"
                ng-change="$ctrl.saveIfValid(idForm)"
                ng-model-options="{debounce: 512}"
                placeholder="42"
                required>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
```

Last but not least you have an angular component template. This will be rendered in the sidebar. Regarding HTML structure and classes see the [Livingdocs styleguide](https://beta.livingdocs.io/styleguide.html).

## An example with dispatch

The following snippet shows only the controller of a custom component that renders in a modal \(and thus uses the second API with the `dispatch` option\).

```javascript
const _capitalize = require('lodash/capitalize')
const _isString = require('lodash/isString')
const _remove = require('lodash/remove')
const _isArray = require('lodash/isArray')
const _every = require('lodash/every')
const {AppError} = require('../../../app/scripts/modules/logging/errors')

module.exports = class liEmbedTeaserIncludeModalController {

  static get $inject () {
    return ['config']
  }

  constructor (config) {
    const params = this.directive.getParams() || {}
    this.layout = params.layout
    this.displayName = _isString(this.layout) ? _capitalize(this.layout) : 'Article'

    this.displayFilters = []
    this.defaultQueries = []
    const uiConfig = this.directive.config
    validateSearchConfig(uiConfig.search, (err) => {
      if (err) return console.error(err)
      this.displayFilters = uiConfig.search.displayFilters
      this.defaultQueries = uiConfig.search.defaultQueries
    })
  }

  select (document) {
    this.dispatch({action: 'update', params: {mediaId: document.id, layout: this.layout}})
  }
}

function validateSearchConfig (config, cb) {
  let err = null
  if (!config.displayFilters) err = new AppError('"displayFilters" is required')
  if (!config.defaultQueries) err = new AppError('"defaultQueries" is required')
  if (!_isArray(config.displayFilters)) err = new AppError('"displayFilters" must be an array')
  if (!_isArray(config.defaultQueries)) err = new AppError('"defaultQueries" must be an array')
  if (!_every(config.displayFilters, _isString)) {
    err = new AppError('"displayFilters" entries must be strings')
  }
  return cb(err)
}
```

The only thing that differs from the prior example is the use of the `dispatch` method in `select`.

## Using an iframe

In the [server configuration](server_customization.md#include-ui-options) we learned that you can also register an external iframe as a user interface in a modal. We will not show any example code for this because you can use whatever code you like in the iframe \(doesn't need to be angular\). One thing to note though is how to close or update the Livingdocs editor modal from inside your custom iframe. The Livingdocs modal listens to `postMessage` for updates. So in your code you can do:

```text
window.top.postMessage({action: 'update', params: {"someParam": "test"}})
// or
window.top.postMessage({action: 'close'})
```

The `close` and `update` actions are equivalent to the example above where you do this in an angular component.

## onIncludeRendered Hook

To make includes work in the Livingdocs Editor you sometimes have to execute some code inside the rendered document in the editor. For example when adding a twitter embed to a document you have to tell the twitter script to parse the page again and render the embed. In such cases you can use an onIncludeRendered hook in the editor.

  
 1\) [register](https://github.com/livingdocsIO/livingdocs-server-boilerplate/blob/add-include-example/plugins%2Fincludes%2Ftweet.js) a twitter include in the **server**  
 2\) [register](https://github.com/livingdocsIO/livingdocs-editor-boilerplate/pull/99/files#diff-beb9ebd19fcc1e56d5bdeda46106e930R54) a twitter include rendering plugin in the **editor**  
 3\) [trigger](https://github.com/livingdocsIO/livingdocs-editor-boilerplate/pull/99/files#diff-f2e50a0b2e458496f0fc57617c4a6a33) your script for a given include in the **editor**

