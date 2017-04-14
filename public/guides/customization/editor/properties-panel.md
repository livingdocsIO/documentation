# Properties panel

## Register angular directive

```
angular.module('livingdocs-editor').directive 'myProperties',
  (editor) ->
    restrict: 'E'
    template: template
    controllerAs: 'myPropertiesController'
    controller: {}

liEditor.propertiesPanelDirectives.register('my-properties')
```

