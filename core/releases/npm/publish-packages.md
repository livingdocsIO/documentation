# Publish npm packages

All public and private packages belong to the [@livingdocs organization](https://www.npmjs.com/org/livingdocs). Publish using access tokens belonging to the organization.

The publishing process might be automated with [semantic release](https://github.com/semantic-release/semantic-release) and you might not need to publish packages yourself. Please make yourself familiar with the publishing process on your project first.


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


## With semantic release

Releases are done by a machine user automatically. Manual actions are only required, when you need to release a patch for an older version (legacy release).
The workflow is described [here](https://gist.github.com/boennemann/54042374e49c7ade8910).
