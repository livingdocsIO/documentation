# Release Management

This section describes how a livingdocs-service is handled regarding processes and tools.

- [Deployment Pipeline Architecture](./deployment-pipeline.md)
- [When to perform releases](./when.md)
- [How to perform releases](./how.md)
- [How to Handle a Downstream Release on Develop](#develop)
- [How to Handle a Downstream Release on Staging](#staging)
- [How to Handle a Downstream Release on Production](#production)

## <a name="develop">How to Handle a Downstream Release on Develop</a>

- Everything is automated, you have to do nothing. As soon as a pull request gets merged to the `master` branch, the deployment is done automatically.

## <a name="staging">How to Handle a Downstream Release on Staging</a>

- Checkout your project (e.g. livingdocs-service-server)
- Use the `init-release` and `finish-release` scripts (a more detailed description can be found [here](https://github.com/upfrontIO/release-tools/blob/master/doc/how-to-handle-a-release-on-github.md))
- Wait until everything is released on staging


## <a name="production">How to Handle a Downstream Release on Production</a>

- Login to rancher
- Choose the correct stack (e.g. livingdocs-service-production -> server) and update the image
