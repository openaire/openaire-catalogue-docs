# PIDs and identifiers

One of the challenges towards the stability of the contents in the OpenAIRE Graph consists of making its identifiers and records stable over time.
The barriers to this scenario are many, as the Graph keeps a map of data sources that is subject to constant variations: records in repositories vary in content,
original IDs, and PIDs, may disappear or reappear, and the same holds for the repository or the metadata collection it exposes.
Not only, but the mappings applied to the original contents may also change and improve over time to catch up with the changes in the input records.

## PID Authorities

One of the fronts regards the attribution of the identity to the objects populating the graph. The basic idea is to build the identifiers of the objects in the graph from the PIDs available in some authoritative sources while considering all the other sources as by definition “unstable”. Examples of authoritative sources are Crossref and DataCite. Examples of non-authoritative ones are institutional repositories, aggregators, etc. PIDs from the authoritative sources would form the stable OpenAIRE ID skeleton of the Graph, precisely because they are immutable by construction.

Such a policy defines a list of data sources that are considered authoritative for a specific type of PID they provide, whose effect is twofold:
* OpenAIRE IDs depend on persistent IDs when they are provided by the authority responsible to create them;
* PIDs are included in the graph according to a tight criterion: the PID Types declared in the table below are considered to be mapped as PIDs only when they are collected from the relative PID authority data source.

| PID Type  | Authority                                                                                           |
|-----------|-----------------------------------------------------------------------------------------------------|
| doi       | [Crossref](https://www.crossref.org), [Datacite](https://datacite.org)                              |
| pmc, pmid | [Europe PubMed Central](https://europepmc.org/), [PubMed Central](https://www.ncbi.nlm.nih.gov/pmc) |
| arXiv     | [arXiv.org e-Print Archive](https://arxiv.org/)                                                     |
| uniprot   | [Protein Data Bank](http://www.pdb.org/)                                                            |
| ena       | [Protein Data Bank](http://www.pdb.org/)                                                            |
| pdb       | [Protein Data Bank](http://www.pdb.org/)                                                            |


There is an exception though: Handle(s) are minted by several repositories; as listing them all would not be a viable option, to avoid losing them as PIDs, Handles bypass the PID authority filtering rule.
In all other cases, PIDs are included in the graph as alternate Identifiers.

## Delegated authorities

When a record is aggregated from multiple sources considered authoritative for minting specific PIDs, different mappings could be applied to them and, depending on the case,
this could result in inconsistencies in the attribution of the field values.
To overcome the issue, the intuition is to include such records only once in the graph. To do so, the concept of "delegated authorities" defines a list of datasources that
assigns PIDs to their scientific products from a given PID minter.

This "selection" can be performed when the entities in the graph sharing the same identifier are grouped together. The list of the delegated authorities currently includes

| Datasource delegated                 | Datasource delegating            | Pid Type |
|--------------------------------------|----------------------------------|----------|
| [Zenodo](https://zenodo.org)         | [Datacite](https://datacite.org) | doi      |
| [RoHub](https://reliance.rohub.org/) | [W3ID](https://w3id.org/)        | w3id     |


## Identifiers in the Graph

OpenAIRE assigns internal identifiers for each object it collects.
By default, the internal identifier is generated as `sourcePrefix::md5(localId)` where:

* `sourcePrefix` is a namespace prefix of 12 chars assigned to the data source at registration time
* `localΙd` is the identifier assigned to the object by the data source

After years of operation, we can say that:

* `localId` are generally unstable
* objects can disappear from sources
* PIDs provided by sources that are not PID agencies (authoritative sources for a specific type of PID) are often wrong (e.g. pre-print with the DOI of the published version, DOIs with typos)

Therefore, when the record is collected from an authoritative source:

* the identity of the record is forged using the PID, like `pidTypePrefix::md5(lowercase(doi))`
* the PID is added in a `pid` element of the data model

When the record is collected from a source which is not authoritative for any type of PID:
* the identity of the record is forged as usual using the local identifier
* the PID, if available, is added as `alternateIdentifier`

Currently, the following data sources are used as "PID authorities":

| PID Type | Prefix (12 chars)     | Authority                             	 |
|----------|-----------------------|-----------------------------------------|
| doi      | `doi_________`      	 | Crossref, Datacite, Zenodo            	 |
| pmc      | `pmc_________`      	 | Europe PubMed Central, PubMed Central 	 |
| pmid     | `pmid________`      	 | Europe PubMed Central, PubMed Central 	 |
| arXiv    | `arXiv_______`      	 | arXiv.org e-Print Archive             	 |
| ena      | `ena_________`      	 | EMBL-EBI                            	   |
| pdb      | `pdb_________`      	 | EMBL-EBI                            	   |
| uniprot  | `uniprot_____`      	 | EMBL-EBI                            	   |

OpenAIRE also perform duplicate identification (see the [dedicated section for details](/graph-production-workflow/deduplication)).
All duplicates are **merged** together in a **representative record** which must be assigned a [dedicated OpenAIRE identifier](/graph-production-workflow/deduplication/research-products#openaire-identifier-of-the-representative-record) (i.e. it cannot have the identifier of one of the aggregated record).
