---
title: Setup Windows Environment
menus:
  guides:
    parent: Development
---
- Install docker for windows
- Install Windows Subsystem for Linux (WSL): 
https://docs.microsoft.com/en-us/windows/wsl/install-win10
- alpine version
    - Add bash and other apk packages to the distribution `apk add --no-cache jq bash build-base git python imagemagick postgresql tini node npm`
    - In Powershell execute `bash` from your local livingdocs folder
    - It's not possible to install nvm
- ubuntu version
    - In Powershell execute `bash` from your local livingdocs folder
    - Install imagemagick on linux 
        - install jpeg decoder `sudo apt-get install libx11-dev libxext-dev zlib1g-dev  libjpeg-dev libfreetype6-dev libxml2-dev libpng-dev`
        - `wget https://www.imagemagick.org/download/ImageMagick.tar.gz`
        - `tar xf ImageMagick.tar.gz`
        - `cd ImageMagick-7*`
        - `./configure`
        - `make`
        - `sudo make install`
        - `sudo ldconfig /usr/local/lib`
- Run all the npm and node steps in the bash from linux
  - As information when you start the editor you have to type manually the url http://localhost:9000 
- Run all the docker commands in powershell
- Proceed with the [getting started]({{< ref "/enterprise/evaluation/system-requirements.md" >}})
