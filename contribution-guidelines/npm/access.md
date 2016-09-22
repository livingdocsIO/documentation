## Private npm packages

Installing private packages (scoped with @livingdocs) requires an npm token with at least read access. For publishing, you need write access respectively.


## Access tokens

### Read-only access

```
npm install -g get-npm-token
get-npm-token
```

Log in with a read-only user belonging to the organization.

For **private repositories**, we add the read-only token to the `.npmrc` under source control.

```
echo "//registry.npmjs.org/:_authToken=<fill-in-your-token>" >> .npmrc
```

For **public repositories**, add the `.npmrc` file to the `.gitignore` and fetch the token from an environment variable.

```
export NPM_TOKEN=<fill-in-your-token>
echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> .npmrc
```


### Write access

You should not need write access. Only generate tokens with write access if you know what you're doing.

```
npm install -g get-npm-token
get-npm-token
```

Log in with a write user belonging to the organization.

**Never add write tokens to the `.npmrc` file**

If you need to override a read-only token in the `.npmrc` file (eg. when you want to temporarily use a token with write access), you can pass the write token as cli arg.

```
npm --//registry.npmjs.org/:_authToken=<fill-in-your-write-token>
```


### Testing your setup

Check if your setup is working by running `npm access ls-packages`

This should give you something like...

```
{
  "@livingdocs/angular-slider": "read-only",
  "@livingdocs/framework": "read-only",
  "@livingdocs/jquery": "read-only",
  "@livingdocs/jquery.dragbetter": "read-only",
  "@livingdocs/migrate": "read-only",
  "@livingdocs/resrc.js": "read-only",
  "@livingdocs/server": "read-only"
}
```


### Generating tokens

You can create tokens on the [npm-website](https://www.npmjs.com). If you create a token (especially for customers) please add it in our [token log](https://github.com/upfrontIO/secrets/wiki/npm-private-packages-token-log), so we can keep track of the tokens and maybe revoke them later.
You should also consider [revoking deprecated tokens](https://www.npmjs.com/settings/tokens).
