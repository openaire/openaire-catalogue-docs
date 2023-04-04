# PIDs and identifiers

One of the challenges towards the stability of the contents in the OpenAIRE Graph consists of making its identifiers and records stable over time.
The barriers to this scenario are many, as the Graph keeps a map of data sources that is subject to constant variations: records in repositories vary in content,
original IDs, and PIDs, may disappear or reappear, and the same holds for the repository or the metadata collection it exposes.
Not only, but the mappings applied to the original contents may also change and improve over time to catch up with the changes in the input records.

## PID Authorities

One of the fronts, regards the attribution of the identity to the objects populating the Graph. The basic idea is to build the identifiers of the objects in the Graph from the PIDs available in some authoritative sources, while considering all the other sources as by definition “unstable”. 
For instance, Crossref and DataCite are considered to be authoritative sources for results,
contrary to institutional repositories, aggregators, etc.
PIDs from the authoritative sources would form the stable OpenAIRE ID skeleton of the Graph, precisely because they are immutable by construction.

Such a policy defines a list of data sources that are considered authoritative for a specific type of PID they provide, whose effect is twofold:
* OpenAIRE IDs depend on persistent IDs when they are provided by the authority responsible to create them.
* PIDs are included in the Graph according to a tight criterion: 
<!-- the PID Types declared in the table below are considered to be mapped as  -->
<span className="todo">PIDs are considered valid only when they are collected from a relative PID authority data source.
For each entity, we outline the PID authorities per PID Type in the [following section](#pid-authorities-per-entity).
[TODO: refine this part if not accurate]</span>

There is an exception though: Handle(s) are minted by several repositories; as listing them all would not be a viable option, to avoid losing them as PIDs, Handles bypass the PID authority filtering rule.
In all other cases, PIDs are be included in the Graph as alternate Identifiers.

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

* the identity of the record is forged using the PID, like `pidTypePrefix::md5(lowercase(doi))`
* the PID is added in a `pid` element of the data model

When the record is collected from a source which is not authoritative for any type of PID:
* the identity of the record is forged as usual using the local identifier
* the PID, if available, is added as `alternateIdentifier`

You can review the list of the PID authorities per entity in the [following section](#pid-authorities-per-entity).

OpenAIRE also performs duplicate identification (see the [dedicated section for details](/graph-production-workflow/deduplication)).
All duplicates are **merged** together in a **representative record** which must be assigned a dedicated OpenAIRE identifier (i.e. it cannot have the identifier of one of the aggregated record).


## PID authorities per entity

This section gathers all PID Types and their respective authorities for each entity in the Graph.

### Result

| PID Type  | Authority | OpenAIRE ID prefix (12 chars)      |
|-----------|------------------------|-----------------------|
| doi       | [Crossref](https://www.crossref.org), [Datacite](https://datacite.org), Zenodo | `doi_________`
| pmid | [Europe PubMed Central](https://europepmc.org/), [PubMed Central](https://www.ncbi.nlm.nih.gov/pmc) | `pmid________`
| pmc | [Europe PubMed Central](https://europepmc.org/), [PubMed Central](https://www.ncbi.nlm.nih.gov/pmc) | `pmc_________`
| arXiv     | [arXiv.org e-Print Archive](https://arxiv.org/)                                                     | `arXiv_______`
| uniprot   | [Protein Data Bank](http://www.pdb.org/) <span className="todo">[ or EMBL-EBI ?]</span> | `uniprot_____`
| ena       | [Protein Data Bank](http://www.pdb.org/) <span className="todo">[ or EMBL-EBI ?]</span>  | `ena_________`
| pdb       | [Protein Data Bank](http://www.pdb.org/)  <span className="todo">[ or EMBL-EBI ?]</span>  | `pdb_________`
| handle       | Any repository  | <span className="todo">`handle______`</span>

#### Delegated authorities

<span className="todo">[TODO: the problem that this solves is that we can get a specific PID from more than one auhtoritative sources right ? For example, if we get DOIs from 	Crossref, Datacite, and Zenodo (btw Zenodo was not mentioned in the first table).
Can't we mention those sources by priority in the first table and simply mention in the text that we prefer to collect those PIDs starting from the first till the last one? Is this the problem or I am missing something else here?]</span>

When a record is aggregated from multiple sources considered authoritative for minting specific PIDs, different mappings could be applied to them and, depending on the case,
this could result in inconsistencies in the attribution of the field values.
To overcome the issue, the intuition is to include such records only once in the Graph. To do so, the concept of "delegated authorities" defines a list of datasources that
assigns PIDs to their scientific products from a given PID minter.

This "selection" can be performed when the entities in the Graph sharing the same identifier are grouped together. 
The list of the delegated authorities currently includes the following:


| PID Type | Datasource delegated                 | Datasource delegating             |
|--------------------------------------|----------------------------------|-----------|
| doi       | [Zenodo](https://zenodo.org)         | [Datacite](https://datacite.org) | 
| <span className="todo">w3id [is not mentioned in the table above]</span>     | [RoHub](https://reliance.rohub.org/) | [W3ID](https://w3id.org/)        | 


### Data source
<span className="todo">[TODO]</span>

### Organization

<div className="todo">* how we use OpenOrgs?</div>


<div className="todo">* explain what is "pending" in the openaire id of some organizations</div>

### Project
<span className="todo">[TODO]</span>


### Community
<span className="todo">[TODO]</span>

