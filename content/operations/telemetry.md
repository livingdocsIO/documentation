---
title: Telemetry
description: Use opentelemetry to get metrics and traces out of the Livingdocs Server instance.
icon: axis-arrow
menu: operations
---

The telemetry stack will assist you in debugging your Livingdocs server instance. It enables you to build dashboards to provide an overview of the server and its surrounding environment, or to dive deeper into the metrics, logs and traces produced by the server.

## Setup

Follow the setup instructions in the [livingdocsIO/monitoring](https://github.com/livingdocsIO/monitoring) repository. It should be as simple as cloning the repository and running `docker-compose up`.

If the Livingdocs server is running in a Docker container on the same server then everything *should* just work by adding the following to the [server configuration]({{< ref "/reference-docs/server-extensions/server-configuration" >}}) file:

```js
{
  ... // Existing config parameters

  // Basic telemetry config
  telemetry: {
    tracing: {
      enabled: true
    }
  }
}
```

If you're running this for local development purposes then an additional step is required. As the server logs won't be available through Docker they need to be sent to Vector instead. Vector is listening for Livingdocs server logs on port 4545 using UDP. `pino-socket` and `pino-pretty`, installed as dev dependencies of `@livingdocs/server`, can be combined to pipe the "un-pretty" logs to port 4545 and then make them pretty again. An example of a command to achieve this is:

```sh
logs__pretty=false npm run watch | pino-socket -p 4545 | pino-pretty --ignore ns --translateTime 'HH:MM:ss' --messageFormat '{ns} > {msg}'
```
> Note: Make sure you change `npm run watch` to the command you want to use to start the server.

On some systems it might not be possible for Prometheus to scrape the metrics endpoint of the local server too. To check if it's working by default you can go to the [Prometheus Targets](http://localhost:3001/targets) page and see if "livingdocs-server" is up or down. If it's up then you're done! If it's down then you'll need to use the opentelemetry-collector target instead. To enable it update your server configuration with the following:

```js
{
  ... // Existing config parameters

  telemetry: {
    ... // Existing telemetry parameters

    metrics: {
      enableCollectorMetricExporter: true
    }
  }
}
```

## Configuration

The `telemetry` object in the [server configuration]({{< ref "/reference-docs/server-extensions/server-configuration" >}}) is as follows (with defaults provided):

```js
{
  // Tracing
  tracing: { // Tracing configuration used within livingdocs-server
    disableEverything: false,
    enabled: false
  },
  jaegerExporter: { // Config forwarded to @opentelemetry/exporter-jaeger JaegerExporter
    serviceName: serviceName // Taken from package.json
  },

  // Metrics
  metrics: { // Metrics configuration used within livingdocs-server
    enabled: true,
    collectDefaultMetrics: true,
    defaultMeterName: serviceName, // Taken from package.json
    enableCollectorMetricExporter: false,
    port: undefined
  },
  collectorMetricExporter: { // Config forwarded to @opentelemetry/exporter-collector CollectorMetricExporter
    serviceName: serviceName // Taken from package.json
  },
  prometheusExporter: { // Config forwarded to @opentelemetry/exporter-prometheus PrometheusExporter
    preventServerStart: true
  },
  meterProvider: { // Config forwarded to @opentelemetry/metrics MeterProvider
    interval: 5000
  }
}
```

Most of the options available are forwarded to the various `@opentelemetry` libraries used by the server, and it's not necessary to configure them. Please see the documentation for each npm package mentioned in the descriptions for further details of configuration options available. The `telemetry.tracing` and `telemetry.metrics` objects are used internally by `@livingdocs/server` to enable or disable certain features.

## Usage

Once everything is configured and operational you can go to the Grafana user interface at <http://localhost:3000/> and log in using the default Grafana user (admin/admin).

At this point you should be able to create new dashboards full of beautiful graphs, gauges and tables, as well as exploring/querying Jaeger, Loki, and Prometheus data and setting up alerts for outages, usage spikes, or errors.

An easy way to start is to click on the Explore icon in the left panel, select Loki as your datasource from the dropdown at the top of the page, and then click on a HTTP request log. If you need help finding a log try the following query: `{service="@livingdocs/server"} |= "PUT"`. There are many ways to query the logs, and you can find more information about them in the [Loki LogQL documentation](https://grafana.com/docs/loki/latest/logql/). Once you've expanded the log you should see a `traceId` value in the "Parsed Fields" section. Click on the "Jaeger" link to inspect the Jaeger trace timeline and spans.

{{< img src="images/grafana-logs-and-traces.png" alt="Grafana UI showing Loki logs and a linked Jaeger trace" >}}

Along with querying logs you can also create graphs in a dashboard using the log data. Click on the Dashboards icon in the left panel, and then click on the "Create your first dashboard" tile. Add a new panel, and make sure you have the Graph visualization highlighted. In the Query tab select Loki as your datasource and enter `sum(count_over_time({service="@livingdocs/server"} | json | __error__!="JSONParserErr" | req_method != "" [1m])) by (req_method)` as your Loki query. You should end up with something similar to the following image (assuming you have made some requests on the website recently):

{{< img src="images/grafana-dashboard-panel-loki.png" alt="Grafana UI showing a dashboard panel made using a Loki query" >}}

Another way to create dashboard graphs is to use the Prometheus datasource. Add a new panel, select Prometheus as your datasource in the Query tab, and try adding `container_memory_usage_bytes` as your PromQL query. The panel can be tweaked by making alterations in the left sidebar, such as setting the title, selecting the Y-axis unit, or showing additional values in the legend:

{{< img src="images/grafana-dashboard-panel-prometheus.png" alt="Grafana UI showing a dashboard panel made using a Prometheus metric" >}}

## Stack

The [livingdocsIO/monitoring](https://github.com/livingdocsIO/monitoring) repository runs a number of containers, and while Grafana should contain all of the information you require, there are some additional user interfaces exposed that can be accessed by following the "[Local UI]" links listed in the container summary below:

* **cAdvisor** [[Docs](https://github.com/google/cadvisor)] [[Local UI](http://localhost:9081/)] - Provides resource usage and performance metrics of Docker containers to Prometheus
* **Grafana** [[Docs](https://grafana.com/docs/grafana/latest/)] [[Local UI](http://localhost:3000/)] - UI to explore logs and metrics using queries, charts, and alerts
* **Jaeger** [[Docs](https://www.jaegertracing.io/docs/)] [[Local UI](http://localhost:16686/)] - Provides tracing data which is linked to each incoming Livingdocs server request
* **Loki** [[Docs](https://grafana.com/docs/loki/latest/)] - Ingests logs which can be viewed and queried from within Grafana
* **OpenTelemetry Collector** [[Docs](https://opentelemetry.io/docs/collector/)] - Collects metrics data from Livingdocs server and exports the data to Prometheus
* **Prometheus** [[Docs](https://prometheus.io/docs/)] [[Local UI](http://localhost:3001/)] - A monitoring toolkit for timeseries based metrics
* **Vector** [[Docs](https://vector.dev/docs/)] - Transforms Docker logs and send them to Loki, as well as collecting logs from local Node.js processes if required
