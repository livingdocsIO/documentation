# How to do a Load Test

Before you start with testing it's very important to understand **what** and **how** you want to test. The article [what is the difference between performance-, load- and stress testing](http://www.softwaretestinghelp.com/what-is-performance-testing-load-testing-stress-testing/) is a good place to start.

A rule of thumb for load testing is: **never do a serious performance test locally!!!!** If you run a test locally you can get inconsistent results. The reason for that is e.g. of a slow internet connection or running applications in the background.

## How to do a load test with artillery.io

If you want to make a load test with multiple endpoints, `artillery.io` is a very good tool for that case.

1. Start 1 or x amazon ec2 t2.micro instances
2. Install artillery
3. Create a file with url's, which should be called in the test run
4. Create an artillery config file

```text
# urls.txt
http://test.ch/1.html
http://test.ch/2.html
http://test.ch/3.html
```

```text
# artillery.yml
config:
  target: "{{ url }}"
  phases:
    - duration: 120
      arrivalRate: 130
  payload:
    path: "urls.txt"
    fields:
      - "url"

scenarios:
  -
    name: "call all url's"
    flow:
      -
        get:
          url: "{{ url }}"
```

* phases.duration = time in seconds to run the test
* phases.arrivalRate = new requests started per second. This value should not be higher than 150 \(the performance results are wrong, because the machines are not performant enough\). If you need more requests per second, you have to boot up more instances.

Run a test with `artillery run artillery.yml`.

### Results

An example result looks like this.

```text
  Request latency (ms):
    min: 177.8
    max: 1369.5
    median: 368
    p95: 373.7
    p99: 380.8
```

## How to do a Load Test with Apache Benchmark

Making load tests with `ab` is pretty easy via the command line. The only disadvantage is, that you can just call one url. This means: If an endpoint gets cached or the application and the database optimizes the computation for a call, the result is better than in reality. To run `ab`, just execute `ab -k -c 80 -n 2000 http://test.ch/1.html`.

* c = concurrency of requests
* n = number of requests overalls

