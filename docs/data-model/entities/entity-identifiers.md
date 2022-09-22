---
sidebar_position: 8
---

# OpenAIRE entity identifier and PID mapping policy

OpenAIRE assigns internal identifiers for each object it collects.
By default, the internal identifier is generated as `sourcePrefix::md5(localId)` where:

* `sourcePrefix` is a namespace prefix of 12 chars assigned to the data source at registration time
* `localid` is the identifier assigned to the object by the data source

After years of operation, we can say that:

* `localId` are unstable
* objects can disappear from sources
* PIDs provided by sources that are not PID agencies (authoritative sources for a specific type of PID) are often wrong (e.g. pre-print with the DOI of the published version, DOIs with typos)

Therefore, when the record is collected from an authoritative source:

* the identity of the record is forged using the PID, like `pidTypePrefix::md5(lowercase(doi))`
* the PID is added in a `pid` element of the data model

When the record is collected from a source which is not authoritative for any type of PID:
* the identity of the record is forged as usual using the local identifier
* the PID, if available, is added as `alternateIdentifier`

Currently, the following data sources are used as "PID authorities":

| PID Type 	| Prefix (12 chars) 	| Authority                             	|
|----------	|-------------------	|---------------------------------------	|
| doi      	| `doi_________`      	| Crossref, Datacite, Zenodo            	|
| pmc      	| `pmc_________`      	| Europe PubMed Central, PubMed Central 	|
| pmid     	| `pmid________`      	| Europe PubMed Central, PubMed Central 	|
| arXiv    	| `arXiv_______`      	| arXiv.org e-Print Archive             	|
| handle   	| `handle______`      	| any repository                        	|

OpenAIRE also perform duplicate identification (see the [dedicated section for details](../../data-provision/deduplication/)).
All duplicates are **merged** together in a **representative record** which must be assigned a dedicated OpenAIRE identifier (i.e. it cannot have the identifier of one of the aggregated record).