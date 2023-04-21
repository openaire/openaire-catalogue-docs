# Object indentifiers

One of the challenges towards the stability of the contents in the OpenAIRE Graph consists of making its objects and their identifiers (called "OpenAIRE IDs") stable over time.
~~The barriers to this scenario are many, as the Graph keeps a map of data sources that is subject to constant variations: records in repositories vary in content, original identifiers, and persistent identifiers (PIDs), may disappear or reappear, and the same holds for the repository or the metadata collection it exposes.~~
Not only can the mappings applied to the original contents change over time, but they can also improve to catch up with changes in the input records.  

## Adding stability using PIDs

One of the main issues concerns the attribution of the identity to the objects populating the Graph. The basic idea is to build the identifiers of the objects in the Graph from the related PIDs, where they are available. As a result, PIDs are collected and stored inside the respective objects (in the `pid` field).
However, although various sources can provide object-related PIDs, some of them can be "unstable". For that reason, during the process, only the PIDs available from some "authoritative", stable sources are being considered for the population of the values in the `pid` field and for the creation of the OpenAIRE IDs. OpenAIRE maintains a [list of data sources that are considered authoritative](#pid-authorities) for each specific type of PID. 
For instance, Crossref and DataCite are considered to be authoritative sources for results, contrary to institutional repositories, aggregators, etc.
PIDs from the authoritative sources would form the stable OpenAIRE ID skeleton of the Graph, precisely because they are immutable by construction.

 

~~The PID Types declared in the table below are considered to be mapped as [`result.pid`](entities/result#pid) and [`result.instance[].pid`](entities/other#pid-1) only when they are collected from a relative PID authority data source.
For each entity, we outline the PID authorities per PID Type in the [following section](#pid-authorities-per-entity).~~

There is an exception though: Handle(s) are minted by several repositories; as listing them all would not be a viable option, to avoid losing them as PIDs, Handles bypass the PID authority filtering rule.
In all other cases, PIDs are included in the Graph as alternate Identifiers.

## Identifiers in the Graph

OpenAIRE assigns internal identifiers for each object it collects.
By default, the internal identifier is generated as `sourcePrefix::md5(localId)` where:

* `sourcePrefix` is a namespace prefix of 12 chars assigned to the data source at registration time
* `localId` is the identifier assigned to the object by the data source 

After years of operation, we can conclude that:

* `localId` are generally unstable
* objects can disappear from sources
* PIDs provided by sources that are not PID agencies (authoritative sources for a specific type of PID) are often wrong (e.g. pre-print with the DOI of the published version, DOIs with typos)

Therefore, when the record is collected from an authoritative source:

* the identity of the record is forged using the PID, like `pidTypePrefix::md5(lowercase(pid value))`
* the PID is added in a `pid` element of the data model

When the record is collected from a source which is _not_ authoritative for any type of PID:
* the identity of the record is forged as usual using the local identifier (typically the [oai identifier](http://www.openarchives.org/OAI/2.0/guidelines-oai-identifier.htm))
* the PID, if available, is added as `alternateIdentifier`
* Handles are still mapped as PIDs, although they are not associated with any OpenAIRE internal identifier prefix

You can review the list of the PID authorities per entity in the [following section](#pid-authorities-per-entity).

OpenAIRE also performs duplicate identification (see the [dedicated section for details](/graph-production-workflow/deduplication)).
All duplicates are **merged** together in a **representative record** which must be assigned a dedicated OpenAIRE identifier (i.e. it cannot have the identifier of one of the aggregated record).


## OpenAIRE ID prefixes

| Prefix (12 chars) | Interpretation |
|-------------------|----------------|
| `doi_________` | constructed based on a DOI |
| `pmid________` | ... |



## PID authorities

This section elaborates the PID types that are supported by the OpenAIRE Graph along with the respective authoritative sources.

### Result

| PID Type | Authority                                                                                           | OpenAIRE ID prefix (12 chars)                |
|----------|-----------------------------------------------------------------------------------------------------|----------------------------------------------|
| doi      | [Crossref](https://www.crossref.org), [Datacite](https://datacite.org)                              | `doi_________`                               |                        
| pmid     | [Europe PubMed Central](https://europepmc.org/), [PubMed Central](https://www.ncbi.nlm.nih.gov/pmc) | `pmid________`                               |                 
| pmc      | [Europe PubMed Central](https://europepmc.org/), [PubMed Central](https://www.ncbi.nlm.nih.gov/pmc) | `pmc_________`                               |     
| arXiv    | [arXiv.org e-Print Archive](https://arxiv.org/)                                                     | `arXiv_______`                               |      
| uniprot  | [Protein Data Bank](http://www.pdb.org/) <span className="todo">[ or EMBL-EBI ?]</span>             | `uniprot_____`                               |  
| ena      | [Protein Data Bank](http://www.pdb.org/) <span className="todo">[ or EMBL-EBI ?]</span>             | `ena_________`                               | 
| pdb      | [Protein Data Bank](http://www.pdb.org/)  <span className="todo">[ or EMBL-EBI ?]</span>            | `pdb_________`                               |   

#### Delegated authorities

<span className="todo">[TODO: the problem that this solves is that we can get a specific PID from more than one authoritative sources right ? For example, if we get DOIs from 	Crossref, Datacite, and Zenodo (btw Zenodo was not mentioned in the first table).
Can't we mention those sources by priority in the first table and simply mention in the text that we prefer to collect those PIDs starting from the first till the last one? Is this the problem or I am missing something else here?]</span>

When a record is aggregated from multiple sources considered authoritative for minting specific PIDs, different mappings could be applied to them and, depending on the case,
this could result in inconsistencies in the attribution of the field values.
To overcome the issue, the intuition is to include such records only once in the Graph. To do so, the concept of "delegated authorities" defines a list of datasources that
assigns PIDs to their scientific products from a given PID minter.

This "selection" can be performed when the entities in the Graph sharing the same identifier are grouped together. 
The list of the delegated authorities currently includes the following, which can be considered as an extension of the table above:


| PID Type | Datasource delegated                 | Datasource delegating            | OpenAIRE ID prefix (12 chars) |
|----------|--------------------------------------|----------------------------------|-------------------------------|
| doi      | [Zenodo](https://zenodo.org)         | [Datacite](https://datacite.org) | `doi_________`                |
| w3id     | [RoHub](https://reliance.rohub.org/) | [W3ID](https://w3id.org/)        | `w3id________`                |


### Data source

The following table lists the most important registries from which OpenAIRE imports datasource records. 

| PID Type               | Authority                                                                                  | OpenAIRE ID prefix (12 chars) |
|------------------------|--------------------------------------------------------------------------------------------|-------------------------------|
| OpenDOAR ID            | [OpenDOAR](https://v2.sherpa.ac.uk/opendoar/)                                              | `opendoar____`                |                        
| Re3Data ID             | [re3data](https://www.re3data.org/)                                                        | `re3data_____`                |
| Fairsharing            | [Fairsharing](https://fairsharing.org/)                                                    | `fairsharing_`                |
| EuroCRIS - DRIS        | [EuroCRIS - Directory of Research Information Systems](https://eurocris.org/services/dris) | `eurocrisdris`                |
| EOSC Service Catalogue | [EOSC Service Catalogue](https://eosc-portal.eu/services-resources)                        | `eosc________`                |


### Organization

<div className="todo">* how we use OpenOrgs?</div>


<div className="todo">* explain what is "pending" in the openaire id of some organizations</div>

### Project
<span className="todo">[TODO]</span>

### Community
<span className="todo">[TODO]</span>

