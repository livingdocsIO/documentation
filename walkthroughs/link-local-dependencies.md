# Link local dependencies

When you’re developing on a npm dependency (eg. the framework or editable, but also an upstream server or editor), 
you might want to integration test your local changes in projects that use the dependency you're working on (eg. test your local framework changes in a local editor).

Use [`npm link`](https://docs.npmjs.com/cli/link) to locally link your dependencies. 

For node dependencies, linking is enough to work with a local dependency. If your dependency needs a build, run it in order to make your changes available to the linking project. 

## Example

### Link li-server in the service-server

Check out the repository of your dependency (you want to make changes here)
```bash
git git@github.com:upfrontIO/livingdocs-server.git
cd livingdocs-server
npm install
npm link
```

Link the li-server dependency
```bash
git git@github.com:upfrontIO/livingdocs-service-server.git
cd livingdocs-service-server
npm link @livingdocs/server
```

And when you want to revert to the official version from npm

```
cd livingdocs-service-server
npm unlink @livingdocs/server
```
