# Properties panel

## Register an angular directive

```js
angular.module('livingdocs-editor').directive('myProperties',
  (editor) => {
    return {
      restrict: 'E',
      template: template,
      controllerAs: 'myPropertiesController',
      controller: {}
    }
  }
)

liEditor.propertiesPanelDirectives.register('my-properties')
```
