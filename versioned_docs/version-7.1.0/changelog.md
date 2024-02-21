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

This section documents all notable changes for each graph version.

---

### v7.1.0
_Start Date: 2024-01-30 &bull; Release Date: 2024-02-20 &bull; Dataset release: **no**_

#### Added

- The scientific products aggregated increased by ~5Mi records (+1.6%)

#### Changed

- A refined version of the deduplication strategy allowed to catch more duplicates among the scientific products, implying 
  a decrease of their total number of ~3.2Mi (-1.35%). More details about the deduplication algorithm are available [here](graph-production-workflow/deduplication/research-products).
- Updated Crossref publications to include contents until November 2023
- Updated Datacite contents until December 2023

### v7.0.0
_Start Date: 2023-12-18 &bull; Release Date: 2024-01-06 &bull; Dataset release: **yes**_

#### Added

- the scientific products increased by ~3Mi records (+1.26%)
- the number of relations increased by 28.6Mi (+1%)
- the funded contents increased by 5%, from 3.6Mi to 3,8Mi. Funders that recorded the highest increase include, for example, EC with +120K linked research products, and SFI with +1K products.

#### Changed

This graph release also introduces new fields to identify reseach products published using specific open access models, in diamond journals, and those that received public funding. These fields will also be added to the graph dataset in Zenodo. In details:

- `ResearchProduct.isGreen (true, false)`: indicates whether or not the researh product was published following the green open access model;
- `ResearchProduct.openAccesColor (bronze, gold, hybrid)`: indicates the specific open access model used for the publication;
- `ResearchProduct.isInDiamondJournal (true, false)`: indicates whether or not the research product was published in a diamond journal;
- `ResearchProduct.publicly-funded (true, false)`: indicates whether or not the grants acknowledged by the publication come from public funds.

### v6.2.2
_Start Date: 2023-11-07 &bull; Release Date: 2023-11-23 &bull; Dataset release: **no**_

#### Added
- Imported Opencitation's POCI dataset, containing citations among publications in PubMed
- Imported Affiliations from Crossref and from PubMed
- Imported Software Heritage identifiers for Software records
- Extended coverage of Irish funders imported from Crossref
- Peer reviewed material identified with a revised heuristic that allowed to improve the coverage
- Project references identified by TDM increased by ~10%
- Introduced new Field of Science classifications for ~40Mi publications

#### Changed
- Updated Crossref publications to include contents until October 2023
- Updated Datacite contents until October 2023
- Indicators regarding data source downloads and views taken by usage counts from September 2023

### v6.1.1
_Start Date: 2023-09-11 &bull; Release Date: 2023-10-15 &bull; Dataset release: **no**_

#### Added
- Affiliation (research product to organization) relations from Crossref
- Links to the full text of research products
- Cleaning for author and publisher names (get rid of tabs, CR characters, \n(s), escape double quotes)

#### Changed
- Projects without a grant code are removed
- Crossref dump from July 2023
- ORCID works without a DOI from March 2023
- Usage counts from July 2023
- Datacite contents from early July 2023
- OpenCitations relations from December 2022

### v6.0.0
_Start Date: 2023-07-26 &bull; Release Date: 2023-08-16 &bull; Dataset release: **yes**_

#### Changed

- [Relationship data model](./data-model/relationships/relationship-object): flattened properties source, sourceType, target, targetType
- BIP! indicators are now serialised as an array; see the updated model [here](./data-model/entities/other#bipindicators)
- Crossref dump from June 2023
- ORCID works without a DOI from June 2023
- Usage counts from June 2023
- Datacite contents from June 2023
- OpenCitations relations from January 2023
- BIP! indicators from June 2023
- New Datasources/Services were added, collected from an updated EOSC Service catalogue endpoint


### v5.2.0
_Start Date: 2023-07-03 &bull; Release Date: 2023-07-17 &bull; Dataset release: **no**_

#### Added
- Citations imported from Crossref & MAG
- FoS and SDG classifications introduced for ~16Mi research products

#### Changed

- Removed the numerical prefix from the OpenAIRE identifiers (```"20|openorgs____::..." --> "openorgs____::..."```)
- Dataset file names in the Zenodo depositions changed from `dump` to `dataset`
- Crossref dump from May 2023
- ORCID works without a DOI from June 2023
- Usage counts from April 2023
- Datacite contents from June 2023
- OpenCitations relations from January 2023
- Deduplication of the datasource
- Avoid duplicated organisation PIDs

### v5.1.3
_Start Date: 2023-05-22 &bull; Release Date: 2023-06-12 &bull; Dataset release: **no**_

#### Added
- Datasource and project level usage counts

#### Changed

- Crossref dump from April 2023
- ORCID works without a DOI from May 2023
- Usage counts from April 2023
- Datacite contents from May 2023
- OpenCitations relations from January 2023
- Deduplication of the datasource

### v5.1.2
_Start Date: 2023-03-20 &bull; Release Date: 2023-04-04 &bull; Dataset release: **no**_

#### Changed

- Crossref dump from February 2023
- ORCID works without a DOI from March 2023
- Usage counts from February 2023 (+76% Downloads per Datasource for 2023)
- Datacite contents from mid March 2023
- OpenCitations relations from January 2023

### v5.1.1
_Start Date: 2023-02-13 &bull; Release Date: 2023-03-01 &bull; Dataset release: **no**_

#### Added

- Revised SDG classification: improved coverage (+600K classified DOIs)
- General increase of the funded scientific outputs, thanks to the full text mining scanning new OpenAccess publications
- Integrated contents from
  - [EMBL-EBIs Protein Data Bank in Europe](./graph-production-workflow/aggregation/non-compatible-sources/ebi)
  - [UniProtKB/Swiss-Prot](./graph-production-workflow/aggregation/non-compatible-sources/uniprot)

#### Changed

- Crossref dump from January 2023
- ORCID works without a DOI from January 2023
- Usage counts from January 2023
- Datacite contents from mid February 2023
- OpenCitations relations from December 2022

### v5.1.0
_Start Date: 2023-01-16 &bull; Release Date: 2023-01-30 &bull; Dataset release: **no**_

#### Added

- Revised SDG classification: better accuracy, lower coverage (will improve in the next months)

#### Changed

- Crossref dump from December 2022
- ORCID works without a DOI from January 2023
- Usage counts from December 2022
- DataCite contents from January 2023

---

### v5.0.0

_Start Date: 2022-12-19 &bull; Release Date: 2022-12-28 &bull; Dataset release: **yes**_

#### Added

- [Impact & Usage indicators](./data-model/entities/research-product.md#indicators) at the level of the research product
- [Beginner's kit](./downloads/beginners-kit) in the Downloads section
- New relationship types were introduced; see the complete list [here](./data-model/relationships/relationship-types)

#### Changed

- FOS and SDGs were removed from the [ResearchProduct.subjects](./data-model/entities/research-product#subjects)
- Measures were removed from the [ResearchProduct.instance](./data-model/entities/research-product#instance)
- Updated DOIBoost to include publications from Crossref and the works from ORCID with a DOI until November 2022
- Added ORCID works without a DOI from November 2022

