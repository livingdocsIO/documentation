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

### How to release a hotfix step by step

Let v28 be the newest version. A customer needs a patch release for their older version v27.6.0.

1. Set up the maintenance branch you want to merge your fixes into

  ```bash
  # Define your new 'maintenance' branch
  export base=v27.6.0
  export branch=maintenance-$base
  export tag=$branch
  
  # create branch maintenance-v27.6.0
  git checkout $base
  git checkout -b $branch
  ```

2. Update package.json

  ```bash
  # semantic-release only runs on master by default. 
  # Set release.branch to maintenance-v27.6.0 in package.json to enable semantic-release on your non-master branch.
  # semantic-release publishes the new version as `latest` by default.
  # As you're releasing an old version, set publishConfig.tag to prevent a release of the `latest` dist-tag
  # Both steps are required to not mess up other customers installations

  pkg=`cat package.json | jq ".release.branch=\"$branch\" | .publishConfig.tag=\"$tag\""` | echo $pkg > package.json
  ```
  
  These fields in your package.json should now look like this (you might have additional values in there):
  
  ```json
  "publishConfig": {
    "tag": "maintenance-v27.6.0"
  },
  "release": {
    "branch": "maintenance-v27.6.0"
  }
  ```

3. Set up npm dist tag that's used for semantic-release
  
  ```bash
  export name=$(node -e 'console.log(require("./package.json").name)')
   
  # Make sure you have a write access token, or you'll get a 404
  npm dist-tag add $name@$base $tag
  ```
  
4. Push your branch to origin

  ```bash
  # push to maintenance-v27.6.0
  git add package.json
  git commit -m "chore: Setup up maintenance branch $branch"
  git push origin $branch
  ```

5. Apply your fixes

   ```bash
   # create a branch based on that maintenance branch you just created
   git checkout -b maintenance-v27.6.0-some-fix
   ... # apply and commit your changes
   git push -u origin maintenance-v27.6.0-some-fix
   ```

6. Create a pull request from your fixes branch `maintenance-v27.6.0-some-fix` with the target branch `maintenance-v27.6.0`

7. Then you can watch codeship build & create a release based on your additional commit messages, e.g. `v27.6.1` when you added a fix.
