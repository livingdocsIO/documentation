# How to write READMEs 

- Keep your README as short as possible 
- Prefer to document details in the central documentation repository https://github.com/upfrontIO/livingdocs instead of the README
- Prevent duplication, eg. with the central documentation or the up- and downstream. Prefer to reference information by linking to the central documentation instead   

The goal is to have all documentation in a central place and prevent having multiple places where documentation has to be updated. 
You can skip these guidelines for public repositories with a very specific scope that don't require central documentation

## Templates 

### Upstream 

```
# {Name of the repository}
{Short description}

## Getting Started

### Configuration

{Describe only the necessary configuration to get started}

### Usage

{Starting the process, running the tests, tasks required to get started}

## Documentation
- [Livingdocs documentation](https://github.com/upfrontIO/livingdocs)
- [Contribution guidelines](https://github.com/upfrontIO/livingdocs/tree/master/contribution-guidelines)
- {Most important deep links to the central repository}

## Copyright
Copyright (c) 2015 Livingdocs AG, all rights reserved

It is not permitted to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this Software, except when explicitly stated otherwise by Livingdocs AG.
```

### Downstream

```
# {Name of the repository}
{Short description}

Please refer to the [upstream repository]({Upstream repo README url}) for details.  


## Copyright

Copyright (c) 2015 Livingdocs AG, all rights reserved

It is not permitted to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of this Software ('livingdocs-bluewin-editor'), except when explicitly stated otherwise by Livingdocs AG.
```
