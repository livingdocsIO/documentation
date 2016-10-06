# Blacklisted packages

In the *li-editor*, the *li-service-server*, the *li-server* and the li-framework, the following requires are not allowed:
```coffeescript
require('underscore')
require('lodash/lodash')
```

**Requiring a package from this blacklist throws an error when running the test suite:**
```
ERROR: Requiring blacklisted packages
```

## Motivations

- `underscore` we choose to consistently use lodash across all of our repositories instead of underscore.
- `lodash/lodash` we want to profit from the modularity from lodash instead of using the monolithic version of lodash:
  - on the server use `require('lodash')`
  - on the editor use `require('lodash/submodule')`

## Means
In each of our repositories at the root of the project there is a `bin/lint` directory.

This directory contains a script named `blacklisted-packages.sh` that checks for blacklisted packages in the project.

This script is executed through the `posttest` hook  after each `npm test` execution.
