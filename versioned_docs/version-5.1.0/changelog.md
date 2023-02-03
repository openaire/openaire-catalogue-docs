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

This section documents all notable changes for each graph version. This page is going to replace the updates listed until the end of 2022 on the OpenAIRE website at https://www.openaire.eu/aggregation-and-content-provision-workflows

---

### v5.1.0

- Process start date: 2023-01-16
- Public availability date: 2023-01-30
- Dump released: **no**

#### Added

- Revised SDG classification: better accuracy, lower coverage (will improve in the next months)

#### Changed

- Crossref dump from December 2022
- ORCID works without a DOI from January 2023
- Usage counts from December 2022
- DataCite contents from January 2023

---

### v5.0.0

- Process start date: 2022-12-19
- Public availability date: 2022-12-28
- Dump released: **yes**

#### Added

- [Impact indicators](/data-model/entities/result#indicators) at the level of the Result
- [Beginner's kit](/downloads/beginners-kit) in the Downloads section
- New relationship types were introduced; see the complete list [here](/data-model/relationships#relationship-types)

#### Changed

- FOS and SDGs were removed from the [result subjects](/data-model/entities/result#subjects)
- Measures were removed from the [result instance](/data-model/entities/result#instance)
- Updated DOIBoost to include publications from Crossref and the works from ORCID with a DOI until November 2022
- ORCID works without a DOI from November 2022

