# Rancher

We use rancher for both local development and production deployments.

## Setup

1. Add `https://github.com/upfrontIO/livingdocs-rancher.git/` as [a custom catalog](http://docs.rancher.com/rancher/latest/en/catalog/)
2. Create an instance of traefik from the Livingdocs catalog you just added


## Naming conventions

* *Environments*: Create an environment per customer that needs to have separate hosts. Name it after the customer, eg. `mycorp`
* *Stacks*: Create a stack for each stage you want to deploy. Name it by combining customer name and stage, eg. `mycorp-staging` 

## Deploy

Install the [Rancher cli](http://docs.rancher.com/rancher/v1.0/zh/rancher-compose/).

You can use  `li-docker` for the most common use cases. If you want to deploy more granularly, use the `rancher-compose` CLI.  
Both commands require some environment variables to be set up. The access key determines the target rancher environment. 

```
export RANCHER_URL=https://hosted.livingdocs.io/
export RANCHER_ACCESS_KEY=<username_of_environment_api_key>
export RANCHER_SECRET_KEY=<password_of_environment_api_key>
```

### li-docker

The `li-docker` command is available in both server and editor, both up- and downstream. For more details, have a look at the [livingdocs-docker repository](https://github.com/upfrontIO/livingdocs-docker)
 
It covers the most common use case where you want to deploy a full livingdocs instance (server, editor, services).
If you require more granular control about your deployment and services, please use the `rancher-compose` CLI manually.
 
To deploy the latest versions run
`li-docker deploy --environment local --stack my-stack`

You can also specify a docker image for both server and editor
`li-docker deploy --environment local --stack my-stack --server_image livingdocs/my-server:v1.0.0 --editor-image livingdocs/my-editor:v1.0.0`

The apps will be available at http://server.${stack}.${domain} and http://editor.${stack}.${domain}. 
The default domain is http://rancher.livingdocs.io, which can be overridden by running
    
`li-docker deploy --environment local --stack my-stack --domain my.com`


### rancher-compose

Have a look at the [rancher-compose documentation](http://docs.rancher.com/rancher/v1.0/zh/rancher-compose/) if you prefer the CLI over `li-docker`. 


# Rancher troubleshooting

- Check your applications logs in the rancher UI by navigating to the container and selecting "View logs" from the menu
- Check the logs of the rancher application on amazon https://eu-west-1.console.aws.amazon.com/cloudwatch/home?region=eu-west-1#logs:
- Traefik has a dashboard at ```https://${traefik_ip}:8000``` where you can check wether or not your application is properly included in the load balancer.


## Common problems with traefik

1. Traefik is not starting on any host - check traefik scheduling rules, otherwise have a look at the traefik app logs
2. Traefik reports ```404 page not found``` - traefik cannot route to your app. check you're requesting the correct URL and you're not missing the labels
3. Traefik reports ```Internal Server Error``` - your service is not active or missing a health check
4. Traefik dashboard shows an empty ```Server	URL	Weight``` - your service is not active or missing a health check

### Traefik scheduling

Traefik and it's sidekick treafik-conf may have a scheduling rule that none of your hosts is fulfilling. In that case, traefik would not run at all. 

### Traefik labels

The following labels are required on your services in the `docker-compose.yml` or it won't be included in load balancing.

```
traefik.domain: rancher.livingdocs.io
traefik.port: '9090'
traefik.enable: 'true'
```

### Health checks

Traefik requires your application to have a health check, otherwise it will not be included in load balancing.


