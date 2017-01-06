# Publish npm packages

All public and private packages belong to the [@livingdocs organization](https://www.npmjs.com/org/livingdocs).


## NPM tokens

To publish packages, you need a write access token. Only publish using access tokens belonging to the organization. You can find a pre-generated tokens with write access in the **secrets**


If you need to override a read-only token in the `.npmrc` file (eg. when you want to temporarily use a token with write access), you can pass the write token as cli arg.

```
npm --//registry.npmjs.org/:_authToken=<fill-in-your-write-token>
```


## With semantic release

Releases are done by a machine user automatically via [semantic release](https://github.com/semantic-release/semantic-release). 
Manual actions are only required, when you need to release a patch for an [older version (legacy release)](./hotfix-release-howto.md).

Always prefer releasing via semantic release, don't release manually


## Without semantic release

```
npm adduser --scope=livingdocs --always-auth
# fill in login infos that belong to the organization
```


### Public package

Packages without a scope are public by default. If you use the `@livingdocs` scope in the package name, you must set access to public explicitly:

```
npm publish --access public
```


### Private package

Your package name must be scoped with `@livingdocs`.

```
npm publish
```

After initial publishing, you need to [add read access to the package for consumers team](https://www.npmjs.com/org/livingdocs/team/consumers/add-package).
