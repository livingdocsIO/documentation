# Versioning

In conformance with the Node.js project and its npm ecosystem Livingdocs
follows the [Semantic Versioning](http://semver.org) spec. It defines that a
version number consists of three positive integers, separated by dots, that
carry a semantic meaning.

| 1     | . | 2     | . | 3     |
|:-----:|:-:|:-----:|:-:|:-----:|
| major | . | minor | . | patch |

We increase the respective number (and reset all others right to it) when:

- `MAJOR`: there is an incompatible API change
- `MINOR`: there is new functionality in a backwards-compatible manner
- `PATCH`: there are backwards-compatible bug/seurity fixes or doc/perf improvements

You can also think of this like so:

| 1        | . | 2       | . | 3   |
|:--------:|:-:|:-------:|:-:|:---:|
| breaking | . | feature | . | fix |

A new Livingdocs component will always start at version `1.0.0`.
You can read the full versioning scheme here: [http://semver.org/](http://semver.org/)

## Declaring Versions of Dependencies

Besides the semantic versioning, dependencies should be referenced with a
granularity down to the minor version. In node environment this will be in a
package.json file. In other environments probably inside the library itself.
Dependencies should always only be referenced down to the minor version, do not
reference them by the PATCH version as this version will change quickly and is
anyways compatible to a minor version.
