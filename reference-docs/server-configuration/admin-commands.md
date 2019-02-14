# Admin Commands

There are a lot of commands which can be executed on the server.

## Description of the Commands
* [Help](#help)
* [Create Project](#project-create)
* [Maintain Search Index](#search-index)
* [Data Cleaning](#data-cleaning)



## <a name="help">Help</a>

`grunt help` shows an overview of all available grunt commands.
`livingdocs-server` shows an overview of all available livingdocs-server commands.


## <a name="project-create">Create Project</a>

`grunt project-create` creates a new project.


## <a name="search-index">Maintain Search Index</a>

`grunt search-index` is a tool to create, index, update and delete a search index.

### Examples
```bash
# Show help
grunt search-index

# To index a search-index, use:
grunt search-index:<index-name>

# To delete and recreate an index, use:
grunt search-index:<index-name>:reset

# To update the mapping of an index, use:
grunt search-index:<index-name>:update-mapping
```

## <a name="data-cleaning">Data Cleaning</a>

At the moment Livingdocs creates a lot of data (revisions/publications/metadata/migrations), which are not needed absolutely. With the data cleaning tools this data can be deleted.

After a data cleanup only the last revision of a user in a sequence of revisions created by the same user is kept, e.g.

```
[tom, tom, tom, tom, tom, tom] --> [tom]
[tom, jerry, tom, tom, jerry, jerry] --> [tom, jerry, tom, jerry]
[tom, jerry, donald, dagobert] --> [tom, jerry, donald, dagobert]
```

After that cleanup the system is still fully functional but needs a lot less space.

### Cleanup Command Examples
```bash
# Show help
livingdocs-server cleanup-documents -h
livingdocs-server cleanup-migrations -h
livingdocs-server cleanup-metadata -h

# Cleanup documents (revisions, projects, metadata)
livingdocs-server cleanup-documents

# Cleanup migrations
livingdocs-server cleanup-migrations

# Cleanup unreferenced metadata
livingdocs-server cleanup-metadata
```
