# CommonJS Styleguide

## Example File
```coffeescript
# Import core modules
fs = require('fs')

# Import npm modules
moment = require('moment')

# Import scoped npm modules
framework = require('@livingdocs/framework')

# Import local modules
db = require('./db')
Document = require('../Document')

# Keep above imports in alphabetical order

# Export the module
module.exports =

  # Keep exported functions short so readers can get a glance at the
  # module's signature quickly.
  createDocument: ({foo, bar}, cb) ->
    db.connection.transaction (trx) ->
      someHelperFunction()
      document = new Document(foo, bar)
      document.save(trx, cb)


# Private
# -------

# Declare local function
someHelperFunction = ->
  console.log('Have fun coding!')
```
