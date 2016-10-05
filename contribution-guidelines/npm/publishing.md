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

### Example

Let v28 be the newest version. A customer needs a patch release for their older version v27.6.0.

1. Set up the maintenance branch you want to merge your fixes into

   ```bash
   # Define your new 'maintenance' branch
   export base=v27.6.0
   export branch=maintenance-$base
   export tag=$branch
   export git checkout $base
   export git checkout -b $branch

   # Set release.branch to "v17.x" in package.json,
   # set publishConfig.tag to prevent push to `latest` tag
   # Both steps are required to not mess up other customers installations

   export pkg=`cat package.json | jq ".release.branch=\"$branch\" | .publishConfig.tag=\"$tag\""` | echo $pkg > package.json

   # Set up npm dist tag that's used for semantic-release
   export name=$(node -e 'console.log(require("./package.json").name)')
   npm dist-tags add $name@$base $branch

   # push to v17.x
   git add package.json
   git commit -m "chore: Setup up maintenance branch $branch"
   git push origin $branch
   ```

3. Apply your fixes

   ```bash
   # create a branch based on that maintenance branch you just created
   git checkout $branch
   git checkout -b some-fix
   ... # apply your changes
   git push -u origin some-fixes
   ```

4. Create a pull request from your fixes branch (e.g. `some-fixes`) into the the maintenance branch (e.g. v17.x)
5. Then you can watch codeship build & create a release
