## Getting Started

How you get started depends on your use case.

## Livingdocs as a service

You can use our hosted Livingdocs at [beta.livingdocs.io](http://beta.livingdocs.io) and do your integration using our API. This is a headless CMS approach. You can get started immediately by just creating an account on livingdocs.io
Refer to our [API documentation](https://beta.livingdocs.io/public-api.html#/public-api.html) for more information on the available endpoints.
Most of this documentation assumes that you integrate Livingdocs on-premises or have otherwise access to the source code.

## Livingdocs on-premises

If you use Livingdocs as an on-premises software you will have access to the (private) boilerplates projects and/or an .npmrc file with access to our core repositories (Note: this requires at least signing an evaluation contract, if you haven't done so already contact us at contact@livingdocs.io).
To get a local setup refer to [our setup guide](walkthroughs/getting-started-with-local-development.md) and the README's linked in the boilerplate projects.
To get a devops environment, refer to our [devops section](setup-and-deployment/self-hosting.md).

For Livingdocs code integrations you will always install the core software as an npm package. You can refer to the implementations there but you can not change code in the core (this is left to the core developers). You will usually start with our boilerplate projects (in the image "Customer = Boilerplate") to do your customizations (and install the core packages too). These projects are yours to copy and adapt as you see fit.

![NPM Packages](./images/npm-packages.png)
