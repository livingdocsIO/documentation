---
title: Setup Windows Environment
description: Setup requirements like Docker and WSL in Windows
weight: 5
---

- Install docker for windows
- Install Windows Subsystem 2 for Linux (WSL2):
[https://learn.microsoft.com/en-us/windows/wsl/install](https://learn.microsoft.com/en-us/windows/wsl/install)
- ubuntu version
    - In Powershell execute `bash`
    - checkout the repository directly in linux otherwise your system will be very slow
- Run all the npm and node steps in the bash from linux
  - As information when you start the editor you have to type manually the url http://localhost:9000
- Run all the docker commands in powershell (use docker desktop on windows)
  - You can connnect to the bash folders `\\wsl.localhost\Ubuntu\home`
- Proceed with the [getting started]({{< ref "/learn/on-premise-setup" >}})
