# Amazon deployment

## Editor

The editor can be automatically deployed to a bucket on Amazon S3. The configuration for the S3 credentials and bucket have to be in a file called `./config/deployments/<deployment-target>.coffee` in the root directory of this project. The file `./config/deployments/sample.coffee` gives a template to copy from.

After having created the deployment target file you can use the automatic deployment to your S3 bucket by running:

```
grunt deploy:<deployment-target>
```

The `deploy` task will first run the `build` task which creates a `dist` folder with fingerprinted assets. This `dist` folder is then uploaded to your S3 bucket.

The `build` task (built on [webpack](https://webpack.github.io/)) is used to
- bundle css and javascript files into respective output
- updating the references to the newly fingerprinted versions of the files in all HTML and CSS files
- update the references in the javascript output to the fingerprinted versions of the editor-styles.css and iframe-styles.css files

Currently, the deployment is optimized for use with the CDN Cloudfront. For this reason all files except `index.html` as well as the files in the `design` folder get a `max-age` of 2 years. The mentioned exceptions get a `must-revalidate` header to make sure these files are never cached.

This is the user interface implementation for livingdocs. It depends upon the [livingdocs-framework](https://github.com/livingdocsIO/livingdocs-framework) as well as a document design in `app/designs`.
It implements panels and interaction models as well as integration with the [server-side API](https://github.com/livingdocsIO/livingdocs-server).
