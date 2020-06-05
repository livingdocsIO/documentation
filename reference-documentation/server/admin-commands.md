# Server Admin Commands

There are a lot of commands which can be executed on the server.   
 You will find the most important ones listed below.   
 _A full list of commands can be found in the "Help" section._

## Description of the Commands

* [Help](admin-commands.md#help)
* [Create Project](admin-commands.md#project-create)
* [Create User](admin-commands.md#create-users)
* [Maintain Search Index](admin-commands.md#search-index)
* [Data Cleaning](admin-commands.md#data-cleaning)

## [Help](admin-commands.md)

`livingdocs-server` shows an overview of all available livingdocs-server commands.  
 `grunt help` shows an overview of all available grunt commands.

## [Create Project](admin-commands.md)

`grunt project-create` creates a new project.

## [Create Livingdocs users](admin-commands.md)

To set up the **initial user**, run the following command in the project folder.  
 The initial user is required to set up a `livingdocs-server` instance.   
 This user can for example, upload a design to the server.   
 _Unless you connect a project to the user, you will not be able to log in with it though._

```bash
grunt user-create-admin
```

Once you have an initial admin user, you can use it to create additional users via the server API:

```bash
grunt user-create
```

The difference between the two commands is, that the first connects to the database directly and has to be executed on the target server. Once you have the server running and an initial user created, you can add more users via the server API. This does not require you to ssh to the target server.

## [Maintain Search Index](admin-commands.md)

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

## [Data Cleaning](admin-commands.md)

At the moment Livingdocs creates a lot of data \(revisions/publications/metadata/migrations\), which are not needed absolutely. With the data cleaning tools this data can be deleted.

After a data cleanup only the last revision of a user in a sequence of revisions created by the same user is kept, e.g.

```text
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

