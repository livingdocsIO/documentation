# NPM packages

## Denied packages

- Don't use `underscore`. We choose to consistently use lodash across all of our repositories.
- Requiring `lodash` might bloat the build size. Profit from the modularity from lodash instead of using the monolithic version of lodash:
  - on the server, size is not an issue. Use `require('lodash')`
  - on the editor, the build size is relevant. Use `require('lodash/submodule')`

In high profile repositories, we lint for the usage of denied requires. Requiring a denied package throws an error when running the test suite:

```
ERROR: Requiring denied packages
```
