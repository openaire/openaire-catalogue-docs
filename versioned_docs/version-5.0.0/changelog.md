---
sidebar_position: 12
---

# Versions & changelog


## Versioning

Our versioning policy follows the [Semantic Versioning specification](https://semver.org/). 
In our case, given a version `MAJOR.MINOR.PATCH`, we increment the:

* `MAJOR` version when the data model of the Graph changes
* `MINOR` version when the pipeline (e.g., different deduplication method, different implementation for an enrichment process) or major data sources change
* `PATCH` version when the graph data are updated


## Changelog

This section will document all notable changes for each graph version.


### v5.0.0

#### Added

- [Impact indicators](/data-model/entities/result#indicators) at the level of the Result
- [Beginner's kit](/downloads/beginners-kit) in the Downloads section
- New relationship types were introduced; see the complete list [here](/data-model/relationships#relationship-types)

#### Changed

- FOS and SDGs were removed from the [result subjects](/data-model/entities/result#subjects)
- Measures were removed from the [result instance](/data-model/entities/result#instance)
