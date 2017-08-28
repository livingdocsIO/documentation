# Admin Commands

There a lot of commands which can be executed on the server.

## Description of the Commands
* [Help](#help)
* [Create Project](#project-create)
* [Maintain Search Index](#search-index)



## <a name="help">Help</a>

`grunt help` shows an overview of all available commands.


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
