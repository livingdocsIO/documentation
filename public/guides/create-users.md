## Create Livingdocs users

To set up the **initial user**, run the following command in the project folder.
```
grunt create-user-admin
```

Once you have an initial admin user, you can use it to create additional users via the server API:
```
grunt create-user
```

The difference between the two commands is, that the first connects to the database directly and has to be executed on the target server.
Once you have the server running and an initial user created, you can add more users via the server API. This does not require you to ssh to the target server. 
