## to Heroku
### Setup
#### Create an app on heroku
```
heroku create livingdocs-api-production --region eu --remote production
```
- `--remote` defines the origin in the local git project
- You can later push using `git push production master`

#### Set up the addons `heroku-postgresql` and `pgbackups`
```
heroku addons:add heroku-postgresql
heroku addons:add pgbackups
```

#### Set configuration and use configuration file
The server automatically uses a configuration file named after your environment name.
By using environment variables you can set sensitive data like AWS Secrets or Database passwords.

The following environment variables are required to start the dyno:
- BUILDPACK_URL, required by Heroku to install node & grunt
- NODE_ENV

To start the app you must set all the configurations as in conf/production.sample.json.
The configuration can consist of a mix of environment variables and a config file.
Environment variables can replace config values by using `__` as delimiters for subkeys.
So a configuration for:
```json
{
  "aws": {
    "secret_key": "your-secret",
    "access_key": "your-key",
    "buckets": {
      "images": "livingdocs-images"
    }
  }
}
``` 
can look like this:
```bash
heroku config:set aws__secret_key="your-secret"
heroku config:set aws__access_key="your-key"
heroku config:set aws__buckets__images="livingdocs-images"
```

If you want to copy settings from other heroku instances you can use this heroku plugin: https://github.com/ddollar/heroku-config

### Example Configuration
(Those are not real passwords. so don't try to use them.)
```bash
$ heroku config
=== livingdocs-api-staging Config Vars
BUILDPACK_URL:              https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git
DATABASE_URL:               postgres://orhhax4H4m:YzmZPBJ9g0akb9vnWJQZ1JnMSTeH3J@ec2-54-195-244-216.eu-west-1.compute.amazonaws.com:5432/jeHEdq505N30
NODE_ENV:                   production
access_token_secret:        s456e6n33R0MX8OnT2dR5N6T6Ym0Rb
aws__access_key:            AKIAIAXD3QCG2CK5VHMA
aws__buckets__images:       livingdocs-images-dev
aws__secret_key:            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
db__client:                 pg
db__connection__charset:    utf8
db__connection__database:   jeHEdq505N30
db__connection__host:       ec2-54-195-244-216.eu-west-1.compute.amazonaws.com
db__connection__password:   YzmZPBJ9g0akb9vnWJQZ1JnMSTeH3J
db__connection__ssl:        true
db__connection__user:       orhhax4H4m
db__pool__max:              10
loglevel:                   success
```