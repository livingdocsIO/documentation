# Upload a new design based on the Timeline design


## Prerequisites

### Node from nvm
https://github.com/creationix/nvm

### rvm
https://rvm.io/rvm/install, in a nutshell:
```bash
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
curl -sSL https://get.rvm.io | bash
```

### Design server credentials
```bash
# Remote:
Host: https://api.livingdocs.io
# or local:
Host: http://localhost:9090
Email: someone@livingdocs.io
Password: ****************
```


## Setup

### Cloning the Timeline design
```bash
git clone git@github.com:upfrontIO/livingdocs-design-timeline.git
cd livingdocs-design-timeline
npm install
```

### Ruby
We need to use the Ruby version required by the Gemfile.
```bash
rvm install ruby-2.1.3
rvm use 2.1.3
source ~/.rvm/scripts/rvm
gem install bundler
bundle install
```

### Grunt
```bash
npm install grunt-cli grunt-parallel
```

### livingdocs-manager
```bash
 npm install -g livingdocs-manager
```

## Design crafting example: add a new component
```bash
git checkout -b a-new-branch
```
Add a new component for the design in `./source/components` for example.
Do not change the name or the version number of the design anywhere (not in the config file nor in package.json)
```bash
 git add . && git commit -m "feat: add new component"
```


## Publishing the new design to the design server

### Prepare
Three choices for publishing: patch/minor/major:
```bash
 grunt prepare-design-publish:minor
```
The previous command builds the design, change the version number accordingly for you and make a release commit.
### Push (_optional_)
```bash
 git push origin add-awesome-new-component
```
Make a PR on Github

### Publishing
 Make it available in the design server:
```bash
 ldm design:publish dist/
```

### Use of the newly published timeline design version x.y.z
```bash
 ldm channel:design-version:add --name timeline --version x.y.z --channel 1
 ldm channel:design-version:current --name timeline --version x.y.z --channel 1
```


## Notes on local development
It means you are probably working with a _nzz-api_ or a _li-service-server_ at `http://localhost:9090` which also acts as a design server.
In this case some bootstrapping needs to happen.
Example for a brand new _li-service-server_:
```bash
git clone git@github.com:upfrontIO/livingdocs-service-server.git
cd livingdocs-service-server
npm install
```
Next create a new user and set the design to the latest timeline:
```bash
grunt setup
```
Ǹow change the design repository in the configuration file of your server from:
```coffeescript
  designs:
    design_repository: 'https://api.livingdocs.io'
```
To:
```coffeescript
  designs:
    design_repository: 'http://localhost:9090'
```
Start the server:
```bash
npm start
```
Resume with normal workflow:
```bash
 ldm design:publish dist/
 ldm channel:design-version:add --name timeline --version x.y.z --channel 1
 ldm channel:design-version:current --name timeline --version x.y.z --channel 1
```

## Resources
- https://github.com/upfrontIO/livingdocs-design-boilerplate
- https://github.com/nzzdev/livingdocs-design-nzz
- https://github.com/upfrontIO/livingdocs/blob/master/design/upload.md
