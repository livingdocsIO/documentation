# Using a local design

If you're locally developing a new design, or (more generally) if you want to test against a design which isn't published, yet, you can use this configuration:


## When developing a new design

- Configure Design Version in Design Repo `source/config.json` to the
  next semver version and append `-dev`: `x.y.z-dev`

## Generally

- Configure the Livingdocs server
  - with correct aws credentials
  - And this additional config:

```js
designLoader: {
  designRepository: {
  remoteHost: 'http://localhost:9090'
  }
}
```

- In the design repo, run `npm run publish-design`
  - If it already exists: `npm run publish-design -- --force`
  - Use `http://localhost:9090` as `Host` (locally running Server)
  - Use local user with Admin rights
  - Server has to have `designs.assets.storage.config` aws configured
- Restart server
- Go to Editor -\> Project Settings -\> select new design version
- When done with the local testing, **do not** check in the
  `designLoader` config, comment it again
