
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

  ⚠️ Don't let your `base` get outdated. If someone else releases a version on top of the `base` you chose, you will be lacking the diff in the version you release. Make sure you're the only one working on the same `base`. Finish this process timely to minimize the chance of a diff.


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

3. Create a dist tag that's used for semantic-release

  To push a dist-tag to npm you need write access. For more info see how to access [private npm packages](access-livingdocs-organization.md)
  ```bash
  # install the get-npm-token package
  npm install -g get-npm-token

  # Create a token with write access.
  # It will ask you for credentials for a user.
  # This user needs write access for the generated token
  # to have write access as well.
  get-npm-token
  ```

  Then you can create the dist tag:
  ```bash
  export name=$(node -e 'console.log(require("./package.json").name)')

  # Pass the auth token you generated above in the following command.
  # Make sure you have a write access token, or you'll get a 404
  # e.g. npm dist-tag add @livingdocs/editor@v7.3.4 maintenance-v7.3.4
  npm dist-tag add $name@$base $tag --//registry.npmjs.org/:_authToken=<yourTokenWithWriteAccess>
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
   export fix=some-fix
   git checkout -b $branch-$fix
   ... # apply and commit your changes
   git push -u origin $branch-$fix
   ```

6. Create a pull request from your fixes branch `maintenance-v27.6.0-some-fix` with the target branch `maintenance-v27.6.0`

7. Then you can watch CI build & create a release based on your additional commit messages, e.g. `v27.6.1` when you added a fix.
