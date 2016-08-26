# Profiling

## cpu-profiler

There is many variants of this. The one that seems up to date and integrates nicely with chrome web developer tools is: [chrome-cpu-profiler](https://www.npmjs.com/package/chrome-cpu-profiler).

```
var profiler = require('chrome-cpu-profiler')
profiler.startProfiling('cpu-block')
var data = profiler.stopProfiling('cpu-block')
profiler.writeFile(data)
```

This writes a `CPU-*.cpuprofile` file to your disk which you can load in the Profiles tab of your chrom developer tools. You can get a flamegraph or bottom up / top down report.

## v8 Prof

```
node --prof ...
node $(which grunt) --prof ...
```
Generates a v8.log file on your disk

```
npm install node-tick-processor
node-tick-processor
```
Reads that file and outputs bottom up / top down report.

If your process uses worker farms, you can force it to add timestamps to the logfiles:
```
node --prof --logfile=v8-%t.log
```

## node-debug

[Node inspector](https://github.com/node-inspector/node-inspector) exposes a node-debug command.

```
npm install -g node-inspector
```

```
node-debug ...
node-debug $(which grunt) ...
```

It runs your command and opens a browser with chrome developer tools. You can debug, start profiling, etc.


## Other / Limitations

* *dtrace* does not properly work on OSX. You can generate flamegraphs from it, but the memory addresses are not mapped to functions/files, so it's useless.
* With all tools, I had troubles profiling *worker farms*.
* Livingdocs has some wrapper code around `memwatch-next` for automated testing concerning memory, see https://github.com/upfrontIO/livingdocs-framework/commit/44d4a3727d2a8b73611c0bcc07a8d2242e0fae26
