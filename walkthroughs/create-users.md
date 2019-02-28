## Create Livingdocs users

To set up the **initial user**, run the following command in the project folder.

```sh
grunt user-create-admin
```
or

Add a file to `./your_folder/design-admin.json` as a prepation for creating an admin user
```js
{ "users":
  [
    {
      "_importHandle": ":developer",
      "firstName": "Test",
      "lastName": "User",
      "email": "foo@livingdocs.io",
      "password": "footestfoo"
    }
  ]
}
```

```bash
livingdocs-server create-admin-users -s ./your_folder/design-admin.json
```

Once you have an initial admin user, you can use it to create additional users via the server API:

```sh
grunt user-create
```

The difference between the two commands is, that the first connects to the database directly and has to be executed on the target server.
Once you have the server running and an initial user created, you can add more users via the server API. This does not require you to ssh to the target server.
