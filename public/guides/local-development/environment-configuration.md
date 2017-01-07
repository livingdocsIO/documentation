Livingdocs supports configurations for multiple environments. 
For example, you will want a different database configuration for production than when running Livingdocs locally.   

## Config structure 

In the configuration folder, you find a global configuration in `environments/all`, that you can override with 
environment-specific values in `environments/{environment}.coffee`. These files are checked in to source control and therefore shared with everyone working with the project.

For local overrides you can use `secrets/{environment}.coffee` in the server and `user_specific/{environment}.coffee` in the editor. These files are not checked in to source control and therefore specific to your local installation.

## Sensitive configuration

According to the [12 factor app methodology](https://12factor.net/config), sensitive data and secrets should not be checked in to source control.
Always reference sensitive configs with environment variables, for example:

```coffeescript
db:
  username: myuser
  password: process.env.db__password
```

## Setting the environment

The environment derives from the environment variable `ENVIRONMENT`. 
For example to set the environment to local, run

```bash
export ENVIRONMENT=<your environment>
```

You can set this variable to any value that you have a config for in your `environments folder`.
