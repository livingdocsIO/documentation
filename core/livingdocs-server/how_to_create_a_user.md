## How to create a user

## Prerequisites

1. **Applies only if you plan to run this remotely.** Make sure you've reviewed this [docker guide](https://github.com/upfrontIO/livingdocs/blob/master/core/guides/deployment/container/docker.md).
2. **Applies only if you plan to run this remotely.** Make sure your ssh key has been added to the remote server.
3. Use password from e.g. 1password (8 digits, pronauncable, digits)
4. Make sure the node server is running either locally or remotely

### Production

1. Copy the command how to run remotely shell commands [here](https://github.com/upfrontIO/livingdocs/blob/master/core/guides/deployment/container/docker.md#run-shell-commands). We call the 
2. Replace the <name> with your remote instance name. If your intance is located at https://instance-name.hosted.livingdocs.io your <name> is `instance-name`
3. If you want to create a regular user (not an admin) use:

````bash
ssh-part run <name> grunt create-user
```` 

If you want to create an admin

````bash
ssh-part run <name> grunt create-user-admin
````

### Locally

If you want to create a regular user (not an admin) use:

````bash
grunt create-user
```` 

If you want to create an admin run:

````bash
grunt create-user-admin
````
