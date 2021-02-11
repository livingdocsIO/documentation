# Varnish

Using varnish is quite simple, but configure and interpret varnish needs some time to understand. This section gives you the most important sources and commands to understand varnish better.

## Varnish VCL

Varnish VCL is the most important part of varnish. In this file you can define the behaviour of varnish. For example what and how long a request gets cached. In the sources section are some links to get more familiar with a varnish VCL.

**Sources**
* https://book.varnish-software.com/4.0/chapters/VCL_Basics.html
* https://book.varnish-software.com/4.0/chapters/Cache_Invalidation.html
* https://varnish-cache.org/docs/4.0/users-guide/vcl-built-in-subs.html
* https://www.varnish-software.com/wiki/content/tutorials/varnish/sample_vclTemplate.html

## Watch and Interpret Varnish Metrics

If you want to check the health of varnish, you will use the tool `varnishstat`. There is a huge amount of metrics. The most important metrics can be viewed with this command `docker exec -t <container-name> /usr/bin/varnishstat -f MAIN.sess_conn -f MAIN.client_req -f MAIN.sess_dropped -f MAIN.cache_hit -f MAIN.cache_miss -f MAIN.cache_hitpass -f MAIN.n_lru_nuked -f MAIN.n_expired -f MAIN.thread_queue_len -f MAIN.backend_conn -f MAIN.backend_fail -f MAIN.backend_unhealthy -f MAIN.backend_busy -f MAIN.backend_req -f SMA.s0.g_bytes -f SMA.s0.g_space`

**Client Metrics**

| Key  | Value |
| ------------- | ------------- |
| sess_conn  | Cumulative number of accepted client connections by Varnish Cache  |
| **client_req**  | Cumulative number of received client requests. Increments after a request is received, but before Varnish responds  |
| **sess_dropped** | Number of connections dropped due to a full queue |

**Cache Performance**

| Key  | Value |
| ------------- | ------------- |
| **cache_hit**  | Cumulative number of times a file was served from Varnish’s cache |
| **cache_miss** | Cumulative number of times a file was requested but was not in the cache, and was therefore requested from the backend |
| cache_hitpass | Cumulative number of hits for a “pass” file |
| **n_lru_nuked** | Least Recently Used Nuked Objects: Cumulative number of cached objects that Varnish has evicted from the cache because of a lack of space |
| n_expired | Cumulative number of expired objects for example due to TTL |

**Thread Related Metrics**

| Key  | Value |
| ------------- | ------------- |
| **thread_queue_len**  | Current queue length: number of requests waiting on worker thread to become available |

**Backend Metrics**

| Key  | Value |
| ------------- | ------------- |
| backend_conn  | Cumulative number of successful TCP connections to the backend |
| **backend_fail** | Cumulative number of failed connections to the backend. Should be 0 or near 0 |
| **backend_unhealthy** | Cumulative number of backend connections which were not attempted because the backend has been marked as unhealthy |
| backend_busy | Cumulative number of times the maximum amount of connections to the backend has been reached. |
| backend_req | Number of requests to the backend |
| SMA.s0.g_bytes | Bytes of cache used |
| SMA.s0.g_space | Bytes of cache left |

**sources**

* [The most important varnish stat counters](https://www.datadoghq.com/blog/top-varnish-performance-metrics/)
* [Notable varnishstat counters](https://book.varnish-software.com/4.0/chapters/Examining_Varnish_Server_s_Output.html#notable-counters)
* [All varnishstat counters](https://varnish-cache.org/docs/4.1/reference/varnish-counters.html)
