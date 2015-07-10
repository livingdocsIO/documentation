Documents and Revisions both support a `remote_id` field which can be used to store a custom id of **one** remote system.
The `remote_id` must be a string and has to be unique per entity. The value is not mandatory.

The `remote_id` fields are not yet updatable over the REST api. You have to use a custom server-side script to update the values. For both entities there are models you can use. Those are in the directory `app/model`.


## Documents
```coffee
# to create a new document with a remote_id
doc = new Document({id: 1, remote_id: 'foobar', owner_id: 1, space_id: 1, title: 'Foo bar'})
doc.save(callback)


# to update an existing document
Document.update({id: 1}, {remote_id: 'foobar'}, callback)

# or
Document.findById 1, (err, document) ->
  return callback(err) if err
  document.remote_id = 'foobar'
  document.save(callback) 

# or
Document.findById 1, (err, document) ->
  return callback(err) if err
  document.update({remote_id: 'foobar'}, callback) 
```

## Revisions
Have a look at the examples for the Document entity above. The Revision works exactly the same.
```coffee
Revision.update({id: 1}, {remote_id: 'foobar'}, callback)
```


### Whole procedure
```javascript
require('coffee-script/register');
var config = require('./conf');

var db = config.get('db');
require('./lib/db').connectAndCheck(db, function(err) {
  if (err) return console.error('Database connection error\n', err.stack);
});

var Document = require('./app/model/document')
var doc = new Document({title: 'foo', remote_id: 'test', owner_id: 1, space_id: 1, is_deleted: false});
doc.save(console.log);

# Find the document
Document.findOne({remote_id: 'test'}, console.log)
```
