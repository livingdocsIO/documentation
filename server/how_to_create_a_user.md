## Create the first admin user
### Production

Run the following commands in console:

    heroku run bash --app livingdocs-api-production
    npm install -g grunt-cli
    grunt user-local-create

Use password from e.g. 1password (8 digits, pronauncable, digits)

### Staging

    heroku run bash --app livingdocs-api-staging
    …

## Create a user after you have an admin
Run the following command in the console:

    # A node server must be running somewhere
    grunt user-create